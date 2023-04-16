import type { User } from '../api-types';

function getDistance(user1: User, user2: User) {
	const lat1 = parseFloat(user1.address.geolocation.lat);
	const lon1 = parseFloat(user1.address.geolocation.long);
	const lat2 = parseFloat(user2.address.geolocation.lat);
	const lon2 = parseFloat(user2.address.geolocation.long);

	const R = 6371e3;
	const phi1 = (lat1 * Math.PI) / 180;
	const phi2 = (lat2 * Math.PI) / 180;

	const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
	const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

	const a =
		Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
		Math.cos(phi1) *
			Math.cos(phi2) *
			Math.sin(deltaLambda / 2) *
			Math.sin(deltaLambda / 2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	// distance in meters
	return R * c;
}

// At first I though that it's possible to pull this solution off in linear time
// but I think it's not since we have to compare each user with every other user.
// Therefore this function runs in O(n^2).
// I just wanted to point it out here that I'm aware of this runtime cost.
export default function getFurthestUsers(users: User[]) {
	if (users.length < 2) return null;

	let maxDistance = -1;
	let furthestUsers: [User, User] = [users[0], users[1]];
	for (let i = 0; i < users.length; i++) {
		for (let j = i + 1; j < users.length; j++) {
			const distance = getDistance(users[i], users[j]);
			if (distance > maxDistance) {
				maxDistance = distance;
				furthestUsers = [users[i], users[j]];
			}
		}
	}
	return furthestUsers;
}
