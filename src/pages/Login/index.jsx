import { LinkRegister } from "./styles";
import Logo from "../../assets/Logo.svg";
import { FormLogin } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const { loginRequisition, CardRequisition } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória com 4 a 8 caracteres")
      .matches("^.{4,8}$"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    return CardRequisition();
  });

  return (
    <FormLogin>
      <div className="divContainer">
        <img alt="" src={Logo} />
        <form onSubmit={handleSubmit(loginRequisition)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <button className="buttonSubmit" type="submit">
            Entrar
          </button>
          <h4>Ainda não possui uma conta?</h4>
<<<<<<< HEAD
          <LinkRegister to={"/register"}>Cadastre-se</LinkRegister>
=======
          <LinkRegister to={"/"}>Cadastre-se</LinkRegister>
>>>>>>> fcf9617ad768b1f76bfcd0834706f621620bafd8
        </form>
      </div>
    </FormLogin>
  );
};
