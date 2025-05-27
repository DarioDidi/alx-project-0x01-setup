import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
	return (
		<div className="w-full max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl shadow-purple-400 transition-shadow duration-300">
			<div className="mb-4">
				<h2 className="text-2xl font-semibold text-gray-800">
					{name}@{username}

				</h2>
			</div>
			<p className="text-gray-600">phone: {phone}</p>
			<p className="text-gray-600">email: {email}</p>
			<p className="text-gray-600">city: {address.city}</p>
			<div className="mt-4 flex items-center justify-between text-sm text-gray-500">
				<span>User ID: {id}</span>
			</div>
		</div>
	)

}
export default UserCard;


