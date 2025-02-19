import { useState } from "react";
import React from "react";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState(""); 

  const clearForm = () => {
    setName("");
    setLastname("");
    setMail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  const getIsFormValid = () => {
    return password.value.length >= 8 && role !== ""; 
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Sign Up</h2>
        <div className="Field">
          <label>
            First name <sup>*</sup>
          </label>
          <input
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>Last name</label>
          <input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>
            Email address <sup>*</sup>
          </label>
          <input
            placeholder="Email address"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
            onBlur={() => {
              setPassword({ ...password, isTouched: true });
            }}
          />
          {password.isTouched && password.value.length < 8 ? (
            <PasswordErrorMessage />
          ) : null}
        </div>
        <div className="Field">
          <label>
            Role <sup>*</sup>
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
          </select>
          {role === "" ? (
            <p className="FieldError">Role is required</p>
          ) : null}
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
          Create account
        </button>
      </fieldset>
    </form>
  );
};

export default RegistrationForm;
