/* eslint-disable react-refresh/only-export-components */
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect, useOutletContext } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully');
    return redirect('all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

function AddJob() {
  const { user } = useOutletContext();

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

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
}

export default AddJob;
