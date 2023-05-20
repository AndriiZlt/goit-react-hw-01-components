import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  HeadRow,
  TableBody,
  Row,
  Column,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <Row>
          <HeadRow>Type</HeadRow>
          <HeadRow>Amount</HeadRow>
          <HeadRow>Currency</HeadRow>
        </Row>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <Row key={item.id} index={items.indexOf(item)}>
            <Column>{item.type}</Column>
            <Column>{item.amount}</Column>
            <Column>{item.currency}</Column>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
