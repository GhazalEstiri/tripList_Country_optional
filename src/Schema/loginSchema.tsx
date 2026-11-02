import { z } from "zod";
const loginSchema = z
  .object({
    name: z.string().min(1, "نام الزامی است"),
    password: z
      .string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
      .regex(
        /^(?=.*[A-Za-z])(?=.*[0-9]).+$/,
        "رمز عبور باید شامل حروف و اعداد باشد",
      ),
    email: z.string().email("ایمیل معتبر وارد کنید"),
    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزهای عبور یکسان نیستند",
    path: ["confirmPassword"],
  });
// confirmPassword:password
