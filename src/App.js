import React, { useEffect, useState } from 'react'
import { Box, Calendar, Days, Day, Top, Button } from './style'
import moment from 'moment'

const App = () => {

	const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	const [days, setDays] = useState(null);
	const [currentMonth, setCurrentMonth] = useState(moment().startOf('month').format('YYYYMMDD'));
	const [unavailable, setUnavailable] = useState([moment().add(2, 'days').format('YYYYMMDD')]);

	useEffect(() => {
		setMounth(currentMonth);
	}, [currentMonth]);

	const setMounth = (date) => {
		const currDate = moment(date).startOf('month');
		const day = currDate.day() - 1;
		currDate.subtract(day, 'days');
		let days = [];
		for (let i = 0; i < 35; i++) {
			days = [...days, moment(currDate.format('YYYYMMDD')).add(i, 'days')]
		};
		setDays(days);
	}

	const setDay = (day) => {
		setUnavailable(unavailable => unavailable.indexOf(day) < 0 ? [...unavailable, day] : unavailable.filter(d => d !== day));
	}

	if (days) {
		return (
			<Box>
				<Top>
					<Button onClick={() => setCurrentMonth(moment(currentMonth).subtract(1, 'months').format('YYYYMMDD'))}>PREV</Button>
					{moment(currentMonth).format('MMM YYYY')}
					<Button onClick={() => setCurrentMonth(moment(currentMonth).add(1, 'months').format('YYYYMMDD'))}>NEXT</Button>
				</Top>
				<Calendar>
					<Days>
						{
							week.map((day, index) => (
								<Day
									key={index}
									top
								>
									<div className="text">{day}</div>
								</Day>
							))
						}
					</Days>
					<Days>
						{
							days.map((day, index) => (
								<Day
									key={index}
									out={moment(currentMonth).isAfter(day, 'month') || moment(currentMonth).clone().endOf("month").isBefore(day, 'month')}
									current={moment().isSame(day, 'day')}
									unavailable={unavailable.includes(day.format('YYYYMMDD'))}
									onClick={() => setDay(day.format('YYYYMMDD'))}
								>
									<div className="text">{day.format('D dd')}</div>
								</Day>
							))
						}
					</Days>
				</Calendar>
			</Box>
		)
	} else {
		return null
	}

}

export default App