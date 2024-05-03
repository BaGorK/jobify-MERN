import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAllJobsContext } from '../pages/AllJobs';

function PageBtnContainer() {
  const {
    data: { totalJobs, numOfPages, currentPage },
  } = useAllJobsContext();
  console.log(totalJobs, numOfPages, currentPage);

  return <div>PageBtnContainer</div>;
}

export default PageBtnContainer;
