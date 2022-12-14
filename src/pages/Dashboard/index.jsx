import Logo from "../../assets/Logo.svg";
import Vector from "../../assets/Vector.svg";
import { DashboardContainer } from "./styles";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Modal from "./modalCreateTechs";
import { TechContext } from "../../context/TechContext";
import ModalUpdate from "./modalUpdateTech";

export const Dashboard = () => {
  const {
    dataUser,
    validateUser,
    isModal,
    setIsModal,
    isModalUpdate,
    setIsModalUpdate,
    techSelected,
    setTechSelected,
  } = useContext(UserContext);
  const { deleteTechsRequisition } = useContext(TechContext);
  const navigate = useNavigate();

  const cleanStorage = () => {
    localStorage.clear();
    navigate("/login");
  };
  const openModal = () => {
    setIsModal((oldState) => !oldState);
  };
  const openModalUpdate = (tech) => {
    setIsModalUpdate((oldState) => !oldState);
    setTechSelected(tech);
  };

  useEffect(() => {
    return validateUser();
  });

  return (
    <DashboardContainer>
      <div className="imgLogo">
        <img alt="" src={Logo} />
        <button onClick={cleanStorage} className="buttonOut">
          Sair
        </button>
      </div>
      <div className="divMain">
        <h2>Olá, {dataUser.name}</h2>
        <h3>{dataUser.course_module}</h3>
      </div>
      <div className="TitleTech">
        <h2>Tecnologias</h2>
        <div className="divButtonClose">
          <button onClick={openModal} className="buttonAdd">
            +
          </button>
        </div>
      </div>
      <ul>
        {dataUser.techs &&
          dataUser.techs.map((tech, index) => (
            <li key={index}>
              <h4
                onClick={() => {
                  openModalUpdate(tech);
                }}
              >
                {tech.title}
              </h4>
              <div className="divStatusTrash">
                <h5>{tech.status}</h5>
                <button onClick={() => deleteTechsRequisition(tech.id)}>
                  <img alt="" className="trash" src={Vector} />
                </button>
              </div>
            </li>
          ))}
      </ul>
      {isModal && <Modal openModal={openModal} />}
      {isModalUpdate && (
        <ModalUpdate
          techSelected={techSelected}
          openModalUpdate={openModalUpdate}
        />
      )}
    </DashboardContainer>
  );
};
