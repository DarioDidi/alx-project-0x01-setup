import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

/*export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

//for User
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

//for address
export interface Geo {
  lat: string;
  lng: string;
}

//for User
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}*/
const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
	const [user, setUser] = useState<UserData>({
		id: 1,
		name: '',
		username: '',
		email: '',
		address: {
			street: '',
			suite: '',
			city: '',
			zipcode: '',
			geo: {
				lat: '',
				lng: '',
			},
		},
		phone: '',
		website: '',
		company: {
			name: '',
			catchPhrase: '',
			bs: '',
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({ ...prevUser, [name]: value }));
	};

	const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			address: { ...prevUser.address, [name]: value },
		}));
	};

	const handleGeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			address: {
				...prevUser.address,
				geo: { ...prevUser.address.geo, [name]: value },
			},
		}));
	};

	const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			company: { ...prevUser.company, [name]: value },
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(user);
		onClose();
		console.log(user)
	};

	return (
		<div className='fixed inset-0 bg-gray-900 bg-opacity-50 overflow-auto flex justify-center-safe  m-auto' >
			<div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md overflow-scroll m-auto">
				<h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="userId" className="block text-gray-700 font-medium mb-2">User ID</label>
						<input
							type="number"
							id="userId"
							name="id"
							value={user.id}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					{/*USERNAME*/}
					<div className="mb-4">
						<label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							value={user.username}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter username"
						/>
					</div>
					{/**/}
					{/*name*/}
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							value={user.name}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter name"
						/>
					</div>

					{/*email*/}
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={user.email}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter email"
						/>
					</div>

					{/*phone*/}
					<div className="mb-4">
						<label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={user.phone}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter phone"
						/>
					</div>

					{/*website*/}
					<div className="mb-4">
						<label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
						<input
							type="url"
							id="website"
							name="website"
							value={user.website}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter website url"
						/>
					</div>
					<div className="form-section">
						<h3 className="font-extrabold">Address Section</h3>
						<div className="form-group">
							<label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street:</label>
							<input
								type="text"
								name="street"
								value={user.address?.street}
								onChange={handleAddressChange}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite/Apt:</label>
							<input
								type="text"
								name="suite"
								value={user.address?.suite}
								onChange={handleAddressChange}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="city" className="block text-gray-700 font-medium mb-2">City:</label>
							<input
								type="text"
								name="city"
								value={user.address?.city}
								onChange={handleAddressChange}
								required
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zip Code:</label>
							<input
								type="text"
								name="zipcode"
								value={user.address?.zipcode}
								onChange={handleAddressChange}
								required
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<h4 className="font-extrabold">Geo Location Section</h4>
						<div className="form-group">
							<label htmlFor="address-latitude" className="block text-gray-700 font-medium mb-2">Latitude:</label>
							<input
								type="text"
								name="lat"
								value={user.address?.geo.lat}
								onChange={handleGeoChange}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="address-longitude" className="block text-gray-700 font-medium mb-2">Longitude:</label>
							<input
								type="text"
								name="lng"
								value={user.address?.geo.lng}
								onChange={handleGeoChange}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>

					<div className="form-section">
						<h3 className="font-extrabold">Company Section</h3>
						<div className="form-group">
							<label htmlFor="company-name" className="block text-gray-700 font-medium mb-2">Company Name:</label>
							<input
								type="text"
								name="name"
								value={user.company?.name}
								onChange={handleCompanyChange}
								required
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="catchphrase" className="block text-gray-700 font-medium mb-2">Catch Phrase:</label>
							<input
								type="text"
								name="catchPhrase"
								value={user.company?.catchPhrase}
								onChange={handleCompanyChange}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="business" className="block text-gray-700 font-medium mb-2">Business:</label>
							<input
								type="text"
								name="bs"
								value={user.company?.bs}
								onChange={handleCompanyChange}
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>
					{/*submit*/}
					<div className="flex justify-between items-center">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
						>
							Add User
						</button>
					</div>
				</form>
			</div >
		</div >
	);
}

export default UserModal;
