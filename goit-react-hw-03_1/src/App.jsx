import { useEffect, useState } from "react";
// import "./App.css";
import css from "./App.module.css";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const userList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [users, setUsers] = useState(() => {
    const userListLocalStorage = window.localStorage.getItem("total-users");

    if (userListLocalStorage !== null) return JSON.parse(userListLocalStorage);

    return userList;
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("total-users", JSON.stringify(users));
  });

  const addNewUser = (newUser) => {
    setUsers((prevUser) => {
      return [...prevUser, newUser];
    });
  };

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const deleteUser = (userId) => {
    setUsers((prevUser) => {
      return prevUser.filter((user) => user.id !== userId);
    });
  };

  return (
    <div className={css.root}>
      <h1 className={css.phonebook}>Phonebook</h1>
      <ContactForm setUsers={addNewUser} />
      <SearchBox text={inputValue} onType={setInputValue} />
      <ContactList users={visibleUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
