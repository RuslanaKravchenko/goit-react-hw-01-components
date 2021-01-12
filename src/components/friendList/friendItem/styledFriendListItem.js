import styled from 'styled-components';

const LiItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: #212121;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 4px 4px 9px 7px rgba(34, 60, 80, 0.2);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover {
    transform: scale(1.03);
    box-shadow: 4px 3px 12px 6px rgba(19, 152, 134, 0.3);
  }

  .status {
    margin-right: 10px;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &.online {
      background-color: #4fcd4f;
    }
    &.offline {
      background-color: #ec6262;
    }
  }

  .avatar {
    margin-right: 20px;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
  }
`;
export default LiItem;
