import Alert from "./Alert";
import { useState } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import FrienderApi from "./FrienderApi";

function EditProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const initialFormdata = {
    "firstName": currentUser.firstName,
    "lastName": currentUser.lastName,
    "email": currentUser.email,
    "interests": currentUser.interests,
    "hobbies": currentUser.hobbies,
    "zip": currentUser.zip,
    "password": ""
  }

  const [formData, setFormData] = useState(initialFormdata);
  const [formErrors, setFormErrors] = useState([]);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formValidated = validateForm(formData);
    if (!formValidated) return; 
    
    let userData = { ...formData };
    delete userData.password;
    try {
      const passwordData = { username: currentUser.username, password: formData.password };
           await FrienderApi.confirmPassword(passwordData);

      let result = await FrienderApi.updateUser(currentUser.username, userData);
      setCurrentUser(result);
      setFormData(({
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        password: ""
      }));
      setUpdateSuccessful(true);
    } catch (err) {
      setUpdateSuccessful(false);
      setFormErrors(err);
    }
  }

  function validateForm(data) {
    let errorArr = [];
    for (let key in data) {
      if (data[key] === "") {
        errorArr.push(`The ${key} field is empty, please fill in all fields`);
      }
    }
    setFormErrors(errorArr);
    return errorArr.length === 0
  }

  return (
    <div className="ProfileForm-Container">
    <h3>Profile</h3>
    {!!formErrors.length && <Alert errors={formErrors} alertType="danger"/>}
    {updateSuccessful && <Alert alertType="success"/>}
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="col-sm-2 col-form-label">
        Username
    </label>
      <div className="col-sm-4">
        <input
          value={currentUser.username}
          readonly
          type="text"
          name="username"
          className="form-control-plaintext"
          id="username"
        />
      </div>
      <label htmlFor="firstName" className="col-sm-2 col-form-label">
        First Name
    </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="firstName"
          type="text"
          className="form-control"
          id="firstName"
          value={formData.firstName}
        />
      </div>
      <label htmlFor="lastName" className="col-sm-2 col-form-label">
        Last Name
    </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="lastName"
          type="text"
          className="form-control"
          id="lastName"
          value={formData.lastName}
        />
      </div>
      <label htmlFor="email" className="col-sm-2 col-form-label">
        Email
    </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="email"
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
        />
      </div>
      <label htmlFor="hobbies" className="col-sm-2 col-form-label">
        Hobbies
    </label>
      <div className="col-sm-4">
        <textarea
          rows="5"
          onChange={handleChange}
          name="hobbies"
          className="form-control"
          id="hobbies"
          value={formData.hobbies}
        />
      </div>
      <label htmlFor="interests" className="col-sm-2 col-form-label">
        Interests
    </label>
      <div className="col-sm-4">
        <textarea
          rows="5"
          onChange={handleChange}
          name="interests"
          className="form-control"
          id="interests"
          value={formData.interests}
        />
      </div>
      <label htmlFor="zip" className="col-sm-2 col-form-label">
        Zip
    </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="zip"
          className="form-control"
          id="zip"
          value={formData.zip}
        />
      </div>
      <label htmlFor="radius" className="col-sm-2 col-form-label">
        Friend Radius 
        <p>{formData.radius} miles</p>
    </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="radius"
          type="range"
          className="form-control"
          id="radius"
          value={formData.radius}
        />
  
      </div>
      <label htmlFor="password" className="col-sm-2 col-form-label">
        Confirm Password
    </label>
      <div className="col-sm-4">
        <input
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control"
          id="password"
          value={formData.password}
        />
      </div>
      <button class="btn btn-primary " type="submit">
        Save Changes
    </button>
    </form>
  </div>
  )
}

export default EditProfileForm;
