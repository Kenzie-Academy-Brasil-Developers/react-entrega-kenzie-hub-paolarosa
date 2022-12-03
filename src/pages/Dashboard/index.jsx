import Logo from "../../assets/Logo.svg";
import { DashboardContainer, LinkOut } from "./styles";
import { api } from "../../services/api.js";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const CardRequisition = () => {
      const token = localStorage.getItem("authToken");
      api.defaults.headers.authorization = `Bearer ${token}`;
      api
        .get("https://kenziehub.herokuapp.com/profile")
        .then((response) => {
          setDataUser(response.data);
        })
        .catch((error) => console.log(error));
    };
    CardRequisition();
  }, []);

  const cleanStorage = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <DashboardContainer>
      <div className="imgLogo">
        <img src={Logo} />
        <button onClick={cleanStorage} className="buttonOut">
          Sair
        </button>
      </div>
      <div className="divMain">
        <h2>Olá, {dataUser.name}</h2>
        <h3>{dataUser.course_module}</h3>
      </div>
      <p>
        Que pena! Estamos em desenvolvimento :( <br />
        Nossa aplicação está em desenvolvimento, em breve teremos novidades
      </p>
    </DashboardContainer>
  );
};
