import type { UserProps } from "../types/user";
import Repo from "../components/Users";
import { useState } from "react";

const Home = () => {
  const [User, setUser] = useState<UserProps | null>(null);
  const [userName, setUserName] = useState("");
  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    const { avatar_url, login, followers, following, company, bio } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      followers,
      following,
      company,
      bio,
    };

    setUser(userData);
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Github Users</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Type something..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={() => loadUser(userName)}>Search</button>
        </div>
        <p>Results...</p>
        <div className="repos">{User && <Repo {...User} />}</div>
      </div>
    </div>
  );
};

export default Home;
