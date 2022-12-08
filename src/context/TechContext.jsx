import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { dataUser, setDataUser } = useContext(UserContext);

  const createTechsRequisition = (data) => {
    api
      .post("/users/techs", data)
      .then((response) => {
        toast("Tecnologia criada com sucesso!");
        console.log(response.data);
      })
      .catch((error) => {
        toast("Ops! Algo deu errado");
        console.log(error);
      });
  };

  const deleteTechsRequisition = (id) => {
    console.log(id);
    api
      .delete(`users/techs/${id}`)
      .then((response) => {
        toast("Tecnologia deletada com sucesso!");
        const deleteTechs = dataUser.techs.filter(
          (element) => element.id !== id
        );
        setDataUser(deleteTechs);
        console.log(dataUser);
        console.log(response.data);
      })
      .catch((error) => {
        toast("Ops! Algo deu errado");
        console.log(error);
      });
  };

  const updateTechsRequisition = (newStatus, techSelected) => {
    api
      .put(`users/techs/${techSelected.id}`, newStatus)
      .then((response) => {
        toast("Tecnologia atualizada com sucesso!");
        /* const updateTech = dataUser.techs.map((element) => {
          if (techSelected.id === element.id) {
            return (element.status = newStatus);
          }
          return element;
        }); */

        console.log(response.data);
      })
      .catch((error) => {
        toast("Ops! Algo deu errado");
        console.log(error);
      });
  };

  return (
    <TechContext.Provider
      value={{
        createTechsRequisition,
        deleteTechsRequisition,
        updateTechsRequisition,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
