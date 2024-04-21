import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form } from 'react-router-dom';

function AddJob() {
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <h4 className='form-title'>add job</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' defaultValue='fron end dev' />
          <FormRow type='text' name='company' defaultValue='ABC plc' />
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            defaultValue='earth'
          />

          <button className='btn btn-block form-btn'>submit</button>
        </div>
      </Form>
    </Wrapper>
  );
}

export default AddJob;
