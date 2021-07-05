import PropTypes from "prop-types";
import TimeCard from "../../components/TimeCard/TimeCard";

const AwakeCard = (props) => {
  return <TimeCard title="awake" />;
};

AwakeCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AwakeCard;