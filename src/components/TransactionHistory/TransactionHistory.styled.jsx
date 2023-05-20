import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 1200px;
  text-align: center;
  border: none;
`;

export const TableHead = styled.thead`
  height: 60px;
`;

export const HeadRow = styled.th`
  background-color: rgba(0, 188, 213, 255);
  color: #fff;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr`
  height: 60px;
  font-size: 23px;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: capitalize;
  color: rgba(124, 129, 135, 255);
  background-color: ${props => {
    if (props.index % 2 === 0) {
      return '#ecf1f4';
    } else {
      return 'white';
    }
  }};
`;

export const Column = styled.td`
  border: 1px solid rgb(204, 204, 204, 0.4);
  border-top: none;
  border-bottom: none;
`;
