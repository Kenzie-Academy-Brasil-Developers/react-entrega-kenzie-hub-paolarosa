import { Link } from "./styles";
import { api } from "../../services/api.js";
import Logo from "../../assets/Logo.svg";
import { FormRegister } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Register() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/login");
  };
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória com 4 a 8 caracteres")
      .matches("^.{4,8}$"),
    contact: yup
      .string()
      .required(
        "Telefone obrigatório em formato: (99) 9999-9999 ou (99) 99999-9999"
      )
      .matches("^((\\+\\d{2}\\s)?\\(\\d{2}\\)\\s?\\d{4}\\d?\\-\\d{4})?$"),
    bio: yup.string().required("Bio obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submit = (data) => {
    console.log(data);
    api
      .post("/users", data)
      .then((response) => {
        toast("Conta criada com sucesso!");
        console.log(response.data);
        setTimeout(() => {
          handleRedirect();
        }, 1000);
      })
      .catch((error) => {
        toast("Ops! Algo deu errado");
        console.log(error);
      });
  };

  return (
    <FormRegister>
      <div className="divContainer">
        <div className="imgLogo">
          <img src={Logo} />
          <Link to={"/login"}>Voltar</Link>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <h2>Crie sua conta</h2>
          <h3>Rápido e grátis, vamos nessa</h3>
          <label>Nome</label>
          <input placeholder="Digite aqui seu nome" {...register("name")} />
          <p> {errors.name?.message}</p>
          <label>Email</label>
          <input placeholder="Digite aqui seu email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <label>Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <label>Bio</label>
          <textarea placeholder="Fale sobre você" {...register("bio")} />
          <p>{errors.bio?.message}</p>
          <label>Contato</label>
          <input placeholder="Opção de contato" {...register("contact")} />
          <p>{errors.contact?.message}</p>
          <label>Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <button className="buttonSubmit" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </FormRegister>
  );
}
