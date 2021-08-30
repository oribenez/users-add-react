import styles from './UsersList.module.css';

import Card from '../UI/Card';
const UsersList = (props) => {
	const usersListItems = props.usersLi.map((user, index) => (
		<li key={index}>{`${user.username} (${user.age} years old)`}</li>
	));

	return (
		<Card className={styles.users}>
			<ul>{usersListItems}</ul>
		</Card>
	);
};

export default UsersList;
