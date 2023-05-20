import styled from '@emotion/styled';

export const FriendCard = styled.li`
  width: 300px;
  height: 100px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(209, 216, 223, 1);
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 7px;
  margin-right: 20px;
  background-color: rgba(209, 216, 223, 0.5);
  padding: 5px;
`;

export const Status = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: green;
  margin-right: 20px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
    }
  }};
`;

export const Name = styled.p`
  font-size: 30px;
  width: 120px;
`;
