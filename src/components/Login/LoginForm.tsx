import { useForm } from "react-hook-form";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();
  i18n.changeLanguage("ru-RU");

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {t("Testing Form")}

      <input {...register("firstName")} />
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
