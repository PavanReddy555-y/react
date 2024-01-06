import { useFormik } from "formik";

export default function Formvalidation_ByFormikLibrary() {
  function verifyUserDetails(userDetails) {
    const errors = {};
    if (userDetails.UserName === "") {
      errors.UserName = "User name is Required.";
    } else if (userDetails.UserName.length < 4) {
      errors.UserName = "Name is too short..";
    } else if (userDetails.UserName.length > 10) {
      errors.UserName = "Name is too long..";
    }
    if (userDetails.Password === "") {
      errors.Password = "Password Is Required";
    } else if (isNaN(userDetails.Password)) {
      errors.Password = " Password should contain numbers";
    }
    if (userDetails.City === "") {
      errors.City = " Citry field is Required";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Password: "",
      City: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validate: verifyUserDetails,
  });

  return (
    <div className=" row container-fluid">
      <div className="col">
        <form onSubmit={formik.handleSubmit}>
          <h2>Register Form</h2>
          <dl>
            <dt>UserName</dt>
            <dd>
              <input
                type="text"
                onChange={formik.handleChange}
                name="UserName"
                value={formik.values.UserName}
              />
            </dd>
            <dd className="text-danger">{formik.errors.UserName}</dd>
            <dt>Password</dt>
            <dd>
              <input
                type="text"
                onChange={formik.handleChange}
                name="Password"
                value={formik.values.Password}
              />
            </dd>
            <dd className="text-danger">{formik.errors.Password}</dd>
            <dt>City</dt>
            <dd>
              <select
                onChange={formik.handleChange}
                name="City"
                value={formik.values.City}
              >
                <option>Hyd</option>
                <option>Banglr</option>
                <option>Delhi</option>
              </select>
            </dd>
            <dd className="text-danger">{formik.errors.City}</dd>
          </dl>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="col">
        <h2>User Details</h2>
        <dl>
          <dt>User Name</dt>
          <dd>{formik.values.UserName}</dd>
          <dt>Password</dt>
          <dd>{formik.values.Password}</dd>
          <dt>City</dt>
          <dd>{formik.values.City}</dd>
        </dl>
      </div>
    </div>
  );
}
