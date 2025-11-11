import type { UserProps } from "../types/user";
import styles from "./Users.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Repo = ({ avatar_url, login, company }: UserProps) => {
  return (
    <div className={styles.card}>
      <img src={avatar_url} alt={login} />
      <div>
        <h3>{login}</h3>
        <p>{company}</p>
      </div>

      <Link to={`/repos/${login}`} className={styles.link}>
        <IoIosArrowForward size={50} />
      </Link>
    </div>
  );
};

export default Repo;
