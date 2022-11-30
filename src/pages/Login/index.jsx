import { LinkRegister } from "./styles";
import { api } from "../../services/api.js";
import Logo from "../../assets/Logo.svg";
import { FormLogin } from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Login({ setAuthentication }) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/dashboard");
  };

  const { register, handleSubmit } = useForm();

  const loginRequisition = (data) => {
    console.log(data);
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
      .catch((error) => console.log(error));
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
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button className="buttonSubmit" type="submit">
            Entrar
          </button>
          <p>Ainda não possui uma conta?</p>

          <LinkRegister to={"/"}>Cadastre-se</LinkRegister>
        </form>
      </div>
    </FormLogin>
  );
}
