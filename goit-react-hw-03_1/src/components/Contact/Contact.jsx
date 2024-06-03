import css from "./Contact.module.css";

export default function Contact({ oneUser: { name, number, id }, deleteUser }) {
  return (
    <li className={css.container}>
      <div className="">
        <p className={css.name}>{name}</p>
        <p className={css.name}>{number}</p>
      </div>

      <button onClick={() => deleteUser(id)}>Delete</button>
    </li>
  );
}