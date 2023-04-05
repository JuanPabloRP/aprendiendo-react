import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

const users = [
	{
		userName: 'JuanPabloRP',
		name: 'Juan',
		isFollowing: false,
	},
	{
		userName: 'Jprp777',
		name: 'jprp',
		isFollowing: true,
	},
];
export function App() {
	return (
		<section className="App">
			{users.map((user) => (
				//const {userName, name, isFollowing} = user y se retorna xd
				<TwitterFollowCard
					key={user.userName}
					userName={user.userName}
					name={user.name}
					initialIsFollowing={user.isFollowing}
				/>
			))}
		</section>
	);
}
