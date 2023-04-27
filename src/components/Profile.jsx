import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="user_information flex gap-2 items-center">
        <h2>{user.name}</h2>
        <img src={user.picture} alt="image" className="w-10 h10 rounded-full" />
      </div>
    )
  );
};
