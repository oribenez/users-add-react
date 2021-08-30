import React, { useState } from 'react';

import styles from './Users.module.css';
import AddUser from './AddUser';
import UsersList from './UsersList';

const users_db = [
	{
		id: 0,
		username: 'Ori',
		age: 24,
	},
	{
		id: 1,
		username: 'hagar',
		age: 16,
	},
];

const Users = (props) => {
	const [usersList, setUsersList] = useState(users_db);

	const addUserEventHandler = (user) => {
		setUsersList((usersList) => [...usersList, user]);
	};

	return (
		<div>
			<AddUser onAddUser={addUserEventHandler} />
			<UsersList usersLi={usersList} />
		</div>
	);
};

export default Users;
