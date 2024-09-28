/* eslint-disable no-unused-vars */
import { useUser } from "../contexts/userContext";

function Navbar() {
  const { users, setActiveUserId, setIsUserActive } = useUser();

  return (
    <nav className="bg-blue-700 p-5 ">
      <div className=" flex flex-col max-w-sm justify-items-center mx-auto">
        <h4 className="text-stone-50">Select User</h4>
        <select
          name="users"
          id="users"
          className=" p-1 max-w-prose"
          onChange={(e) => {
            setActiveUserId(e.target.value);
            setIsUserActive(true);
          }}
        >
          <option value={""}>Select User</option>
          {users.map((user) => (
            <option value={user.userId} key={user.userId}>
              {user.userName}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
