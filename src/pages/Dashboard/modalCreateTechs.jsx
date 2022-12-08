import { useContext } from "react";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TechContext } from "../../context/TechContext";

const Modal = ({ openModal }) => {
  const { createTechsRequisition } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalContainer>
      <div>
        <h2> Cadastrar Tecnologia </h2>
        <button onClick={openModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(createTechsRequisition)}>
        <label>Nome</label>
        <input
          placeholder="Digite a tecnologia aqui..."
          {...register("title")}
        />
        <span> {errors.title?.message}</span>
        <label>Selecionar status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediario">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button className="buttonRegisterTechs" type="submit">
          Cadastrar Tecnologia
        </button>
      </form>
    </ModalContainer>
  );
};

export default Modal;
