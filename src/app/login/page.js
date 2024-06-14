"use client";
import Cookies from "js-cookie";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { message } from "antd";

import "./login.css";
import { loginUser } from "@/features/user/useSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

const loginSchema = yup.object({
  email: yup.string().email().required("Email Address Is Required!"),
  password: yup.string().nullable().required("Password Is Required!"),
});

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [messageApi, contextHolder] = message.useMessage();

  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUser(values))
        .then(unwrapResult)
        .then((res) => {
          if (res?.data.status) {
            messageApi
              .open({
                type: "loading",
                content: "Action in progress..",
                duration: 1,
              })
              .then(() => message.success(res?.data.message, 1.5))
              .then(() =>
                message.info(
                  `Redirecting to ${
                    res?.data?.role === "user" ? "Home" : "Dashboard"
                  }...`,
                  1.4
                )
              );
            // .then(() => {
            //   router.push("/");
            // });
            // set timer for the cookie token
            const expirationTimeInMinutes = 2;
            Cookies.set("Bearer", res?.data.token, {
              expires: expirationTimeInMinutes,
            });
            setTimeout(() => {
              localStorage.clear();
              Cookies.remove("Bearer");
              router.push("/login");
            }, expirationTimeInMinutes * 60 * 60 * 1000);
            // end set timer for the cookie token
            localStorage.setItem("LMS_token", JSON.stringify(res?.data));
            res?.data?.role === "user"
              ? router.push("/")
              : router.push("/admin/dashboard");
          } else {
            messageApi.error(res?.data.message);
          }
        })
        .then((error) => console.log(error));
    },
  });

  return (
    <div className="container-fluid bg-white">
      {contextHolder}
      <div className="row py-5">
        <div className="col-4 mx-auto py-5">
          <form onSubmit={formik.handleSubmit} className="form-wrapper p-4">
            <CustomInput
              className="mt-2"
              name="email"
              prefix={<AiOutlineMail />}
              placaholder="Email Address"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
            <CustomInput
              className="mt-3"
              name="password"
              prefix={<RiLockPasswordLine />}
              placaholder="Enter Password"
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
            />
            <div className="my-3 text-end">
              <Link
                href={"/forgot-password"}
                className="text-dark text-decoration-none "
              >
                Forgot Password?
              </Link>
            </div>
            <CustomButton
              title="Login"
              type="primary"
              className="w-100 d-block mt-3"
              onClick={formik.handleSubmit}
            />
            <div className="my-3">
              <Link
                href={"/signup"}
                className="text-dark text-decoration-none d-flex justify-content-center"
              >
                Do you have an account? <b>Register</b>.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
