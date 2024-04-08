import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: red;
  h1 {
    color: white;
  }
  .content {
    background-color: blue;
    color: yellow;
  }
`;

function Landing() {
  return (
    <Wrapper>
      <h1>Landing page</h1>
      <div className='content'>some content</div>
    </Wrapper>
  );
}

export default Landing;
