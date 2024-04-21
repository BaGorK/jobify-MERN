import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, useNavigation, useOutletContext } from 'react-router-dom';

function AddJob() {
  const { user } = useOutletContext();
  console.log(user);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <h4 className='form-title'>add job</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' defaultValue='front end dev' />
          <FormRow type='text' name='company' defaultValue='ABC plc' />
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            defaultValue={user.location}
          />

          <div className='form-row'>
            <label htmlFor='jobStatus' className='form-label'>
              job status
            </label>

            <select
              name='jobStatus'
              id='jobStatus'
              className='form-select'
              defaultValue={JOB_STATUS.PENDING}
            >
              {Object.values(JOB_STATUS).map((itemValue) => {
                return (
                  <option key={itemValue} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
          </div>

          <button className='btn btn-block form-btn'>
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
}

export default AddJob;
