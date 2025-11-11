import type { Repo } from "../types/Repo";
import styles from "./RepositoryList.module.css";

interface Props {
  repos: Repo[];
}

export default function RepositoryList({ repos }: Props) {
  return (
    <div>
      {repos.map((repo) => (
        <div className={styles.card}>
          <p>{repo.name}</p>

          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <button>Open</button>
          </a>
        </div>
      ))}
    </div>
  );
}
