import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	//useSatet linkea la variable count con la función Counter
	//Declare variable starting in State = 0
	const [count, setCount] = useState(0);
	//Provokes an effect when a condition is applied
	useEffect(() => {
		const interval = setInterval(() => {
			if (count != 9) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 1000 * props.time);
		// clear interval on re-render to avoid memory leaks //clearInterval()
		return () => clearTimeout(interval);
	}, [count]);

	useEffect(() => {
		setCount(0);
		return () => clearTimeout(count);
	}, [props.stop]);

	return <div className="timer">{count}</div>;
};

Counter.propTypes = {
	time: PropTypes.number,
	stop: PropTypes.bool
};

export default Counter;
