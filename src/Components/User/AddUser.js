import React, { useState } from 'react';

import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	//states - addUser
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	//states - ErrorModal
	const [error, setError] = useState({
		active: false,
		title: 'An error occured!',
		message: 'Something went wrong!',
	});

	const addUserHandler = (e) => {
		e.preventDefault();

		//validation check
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				active: true,
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)',
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				active: true,
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0)',
			});
			return;
		}

		const newUser = {
			username: enteredUsername,
			age: enteredAge,
		};

		props.onAddUser(newUser);

		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	return (
		<div>
			{error.active && (
				<ErrorModal title={error.title} message={error.message} />
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						onChange={usernameChangeHandler}
						value={enteredUsername}
					></input>

					<label htmlFor="age">Age (Years)</label>
					<input
						type="number"
						id="age"
						onChange={ageChangeHandler}
						value={enteredAge}
					></input>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
