import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { useAuth } from "../hooks";

interface FormProps {
  name: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>();
  const { handleLogin } = useAuth();

  const onLogin = (data: FormProps) => {
    console.log(data);
    const response = handleLogin({
      email: "",
      password: "",
    });
    console.log(response);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onLogin)}>
        <div>
          <TextField label="Nombre" {...register("name")} />
          {errors.name && <span>Este campo es requerido</span>}
        </div>

        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;
