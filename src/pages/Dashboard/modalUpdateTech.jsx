import { useContext, useState } from "react";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TechContext } from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";

const ModalUpdate = ({ openModalUpdate, techSelected }) => {
  const { deleteTechsRequisition, updateTechsRequisition } =
    useContext(TechContext);

  const formSchema = yup.object().shape({
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitData = (data) => {
    updateTechsRequisition(data, techSelected);
  };

  return (
    <ModalContainer>
      <div>
        <h2> Tecnologia Detalhes </h2>
        <button onClick={openModalUpdate}>X</button>
      </div>
      <form onSubmit={handleSubmit(submitData)}>
        <label>Nome do projeto</label>
        <input
          disabled
          placeholder="Digite a tecnologia aqui..."
          value={techSelected.title}
        />
        <label>Status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div className="divButtonsUpdate">
          <button className="buttonUpdate" type="submit">
            Salvar alterações
          </button>
          <button
            className="removeUpdate"
            type="submit"
            onClick={() => deleteTechsRequisition(techSelected.id)}
          >
            Excluir
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default ModalUpdate;
