import css from './Stat.module.css';
import PropTypes from 'prop-types';

export const Stat = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: `${getRandomColor()}` }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
