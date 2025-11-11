import { useLocation } from "react-router-dom";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import RepositoryList from "../components/RepositoryList";

const Profile = () => {
  const location = useLocation();
  const { avatar_url, login, followers, following, bio } = location.state;

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="background">
      <div className="container">
        <h1>Github Users</h1>
        <div className={styles.base}>
          <img src={avatar_url} alt={login} />
          <div className={styles.content}>
            <div className={styles.follow}>
              <div>
                <p>{followers}</p>
                <p>Followers</p>
              </div>
              <div>
                <p>{following}</p>
                <p>Following</p>
              </div>
            </div>
            <h3>{login}</h3>
            <p>{bio}</p>
          </div>
        </div>

        <h3 className={styles.title}>My Repos:</h3>
        <div className="list">
          <RepositoryList repos={repos} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
