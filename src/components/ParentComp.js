import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

const ParentComp = () => {
	const [age, setAge] = useState(22)
	const [salary, setSalary] = useState(22000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default ParentComp
