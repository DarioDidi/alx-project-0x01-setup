import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ /*users*/ posts }) => {
  //console.log(users);
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: posts.length + 1 });
  }
  console.log(posts);
  return (
    <div className="flex flex-col h-screen no-doc-scroll">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols gap-2">
          {
            /*users?*/posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
            <UserCard id={id} username={username} name={name} email={email} address={address} phone={phone} website={website} company={company} />
          ))
          }
        </div>
      </main>
      {
        isModalOpen &&
        (<UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />)
      }
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  //const users = await response.json()
  const posts = await response.json()

  return {
    props: {
      //users
      posts
    }
  }
}

export default Users;
