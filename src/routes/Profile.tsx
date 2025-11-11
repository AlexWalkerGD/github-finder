import type { UserProps } from "../types/user";

const profile = ({
  avatar_url,
  login,
  followers,
  following,
  bio,
}: UserProps) => {
  return (
    <div className="background">
      <div className="container">
        <h1>Github Users</h1>
        <div className="base">
          <img src={avatar_url} alt={login} />
          <div className="content">
            <div className="follow">
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

        <div className="card">Alex</div>
      </div>
    </div>
  );
};

export default profile;
