import React, { useState } from "react";
type FormInputProps = {
  username: string;
  password: string;
};
const FormInput = () => {
  const [user, setUser] = useState<FormInputProps>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    setUser({
      username: "",
      password: "",
    });
  };
  const handleChange = (d: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = d.target;
    setUser((preData) => ({ ...preData, [name]: value }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default FormInput;
