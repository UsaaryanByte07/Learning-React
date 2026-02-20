export const UserCard = ({ name, age, role }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 p-6 m-4 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="text-xl font-bold text-gray-800 mb-2 text-center">
        {name}
      </div>
      <div className="text-gray-500 font-medium mb-1">Age: {age}</div>
      <div className="px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full uppercase tracking-wide">
        {role}
      </div>
    </div>
  );
};
