import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  margin-top: 25px;
  padding-left: 15px;
`;

const Item = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DeleteBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 14px;
  font-size: 20px;

  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  touch-action: manipulation;

  &:hover,
  &:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`;

export { List, Item, DeleteBtn };
