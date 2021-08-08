import React, { useEffect, useState } from "react";

const Counter = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
	}, []);

	return <div className="text-center mt-5">{seconds}</div>;
};

export default Counter;
