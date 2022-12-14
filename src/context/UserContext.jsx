import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [techSelected, setTechSelected] = useState({});

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/dashboard");
  };

  const navigateRegister = useNavigate();
  const handleRedirectRegister = () => {
    navigateRegister("/");
  };

  const registerRequisition = (data) => {
    api
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        toast("Conta criada com sucesso!");
        console.log(response.data);
        setTimeout(() => {
          handleRedirectRegister();
        }, 1000);
      })
      .catch((error) => {
        toast("Ops! Algo deu errado");
        console.log(error);
      });
  };

  const loginRequisition = (data) => {
    api
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response.data);
        localStorage.clear();
        localStorage.setItem("authToken", response.data.token);
        setTimeout(() => {
          handleRedirect();
        }, 1000);
      })
      .catch((error) => {
        toast("Email ou senha incorretos");
        console.log(error);
      });
  };

  const CardRequisition = () => {
    const token = localStorage.getItem("authToken");
    console.log(token);
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api
        .get("/profile")
        .then((response) => {
          setDataUser(response.data);
          navigate("/dashboard");
        })
        .catch((error) => console.log(error));
    }
  };
  const validateUser = () => {
    const token = localStorage.getItem("authToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get("/profile")
      .then((response) => {
        setDataUser(response.data);
      })
      .catch((error) => navigate("/login"));
  };

  return (
    <UserContext.Provider
      value={{
        registerRequisition,
        loginRequisition,
        CardRequisition,
        dataUser,
        setDataUser,
        validateUser,
        isModal,
        setIsModal,
        isModalUpdate,
        setIsModalUpdate,
        techSelected,
        setTechSelected,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
