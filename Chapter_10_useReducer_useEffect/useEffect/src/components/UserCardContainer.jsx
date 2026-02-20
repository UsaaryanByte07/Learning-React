import { UserCard } from "./UserCard";

export const UserCardContainer = ({ users }) => {
  const usersArray = users.map(
    ({ firstName, maidenName, lastName, age, role, id }) => {
      return { name: `${firstName} ${maidenName} ${lastName}`, age, role, id };
    },
  );
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 bg-gray-50 min-h-screen">
      {usersArray.map(({ name, age, role, id }) => {
        return <UserCard name={name} key={id} age={age} role={role} />;
      })}
    </div>
  );
};
