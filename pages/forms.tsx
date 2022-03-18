import { FieldErrors, useForm } from "react-hook-form";

// Better validation
// Better Erros (set, clear, display)
// Have control over inputs

interface LoginForm {
  username: string;
  password: string;
  email: string;
  error?: string;
  
}

export default function Forms() {
  const { 
    register, 
    handleSubmit, 
    formState: {errors} ,
    watch,
    setError,
    setValue,
    reset,
    resetField
  } = useForm<LoginForm>({
    mode: "onChange"
  });
  const onValid = (data: LoginForm) => {
    console.log("im valid bby");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log("x");
  };
  
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", { 
          required: "Email is required" ,
          validate: {
            notGamail: (value) => !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
          }
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.error?.message}
    </form>
  );
}