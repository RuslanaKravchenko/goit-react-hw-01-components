import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './statistics-item/StatItem';
import Wrapper from './styledStatistics';

const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <div className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list list">
          {stats.map(stat => (
            <StatItem {...stat} key={stat.id} />
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
