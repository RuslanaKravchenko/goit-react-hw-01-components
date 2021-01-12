import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 15px;

  .friend-list {
    margin: 0 auto;
    width: 250px;
  }

  .item:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export default Wrapper;
