import { LinkRegister } from "./styles";
import { api } from "../../services/api.js";
import Logo from "../../assets/Logo.svg";
import { FormLogin } from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

export const Login = ({ setAuthentication }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/dashboard");
  };

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

  return (
    <FormLogin>
      <div className="divContainer">
        <img src={Logo} />
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

          <LinkRegister to={"/"}>Cadastre-se</LinkRegister>
        </form>
      </div>
    </FormLogin>
  );
};
