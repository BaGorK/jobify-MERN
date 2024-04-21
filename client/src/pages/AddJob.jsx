import { FormRow, FormRowSelect } from '../components';
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
          <FormRowSelect
            labelText='job status'
            name='jobStatus'
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />

          <FormRowSelect
            labelText='job type'
            name='jobType'
            defaultValue={JOB_TYPE.PENDING}
            list={Object.values(JOB_TYPE)}
          />
          <button className='btn btn-block form-btn'>
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
}

export default AddJob;
