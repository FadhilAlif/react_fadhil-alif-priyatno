import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./LoginPage.css";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleFormInput = (e) => {
    const { name, value } = e.target;

    // handle state form change / cara mengubah state data secara immutable
    setForm({
      ...form, // nyalin
      [name]: value, // mengubah
    });

    validateLogin(e);
  };

  // melakukan HTTP request
  const postLogin = () => {
    // sign in with Firebase
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/CreateProduct");
        sessionStorage.setItem(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    // login()

    // TODO: memanggil fungsi yang melakukan HTTP request ke /login
    postLogin();
  };

  const validateLogin = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/;

    if (name === "email") {
      // validasi email tidak boleh kosong
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          email: "Email tidak boleh kosong.",
        });
      } else if (!emailRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          email: "Masukkan email yang valid.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          email: "",
        });
      }
    } else if (name === "password") {
      // validasi password tidak boleh kosong
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          password: "Password tidak boleh kosong.",
        });
      } else if (!passwordRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          password:
            "Password harus memiliki setidaknya 6 character, angka, dan huruf.",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          password: "",
        });
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-5">
            <h1 className="text-center text-primary">Login</h1>
            <form id="login-form">
              <div className="form-group mt-4">
                <label className="mb-2">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  className="form-control"
                  value={form.email}
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => handleFormInput(e)}
                />
                <small id="emailHelp" className="error text-danger form-text">
                  {errorMsg.email}
                </small>
              </div>
              <div className="form-group mt-4">
                <label className="mb-2">Password</label>
                <Input
                  type="password"
                  id="password"
                  className="form-control"
                  value={form.password}
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => handleFormInput(e)}
                />
                <small
                  id="passworderror"
                  className="error text-danger form-text"
                >
                  {errorMsg.password}
                </small>
              </div>
              <Button
                text="Login"
                className="btn btn-primary mt-4"
                onClick={(e) => handleClickLogin(e)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
