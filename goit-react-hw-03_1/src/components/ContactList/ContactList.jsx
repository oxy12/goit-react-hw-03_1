import Contact from "../Contact/Contact";

export default function ContactList({ users, deleteUser }) {
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <Contact key={user.id} oneUser={user} deleteUser={deleteUser} />
          );
        })}
      </ul>
    </>
  );
}