import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [password, setPassword] = useState("");
  const generateRandomPassword = (length) => {
    const charSet =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@£$%^&*_+-";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }

    return password;
  };

  const handlePasswordGen = () => {
    setPassword(generateRandomPassword(10));
  };

  return (
    <>
      <div>
        <h2>Genereate Random Password</h2>
        <button onClick={handlePasswordGen}>Genereate Password</button>
        <p>Password: {password}</p>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
