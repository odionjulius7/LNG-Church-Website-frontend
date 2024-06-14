"use client";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

import { message } from "antd";
import { registerUser } from "@/features/user/useSlice";

const signupSchema = yup.object({
  email: yup.string().email().required("Email Address Is Required!"),
  mobile: yup.string().nullable().required("mobile Number Is Required!"),
  firstname: yup.string().required("first name Is Required!"),
  lastname: yup.string().required("last name Is Required!"),
  password: yup.string().nullable().required("Password Is Required!"),
});

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [messageApi, contextHolder] = message.useMessage();

  const formik = useFormik({
    validationSchema: signupSchema,
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      mobile: "",
    },
    onSubmit: (values) => {
      dispatch(registerUser(values))
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
              .then(() => message.info("Redirecting to login page...", 1.4))
              .then(() => {
                router.push("/login");
              });

            // messageApi.success(res?.data.message);
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
          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="form-wrapper p-4"
          >
            <CustomInput
              className="mt-2"
              placaholder="First Name"
              name="firstname"
              onChange={formik.handleChange("firstname")}
              onBlur={formik.handleBlur("firstname")}
              value={formik.values.firstname}
              error={formik.touched.firstname && formik.errors.firstname}
            />
            <CustomInput
              className="mt-2"
              placaholder="Last Name"
              onChange={formik.handleChange("lastname")}
              onBlur={formik.handleBlur("lastname")}
              value={formik.values.lastname}
              error={formik.touched.lastname && formik.errors.lastname}
            />
            <CustomInput
              className="mt-2"
              placaholder="Email Address"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
            <CustomInput
              className="mt-2"
              placaholder="Mobile Number"
              onChange={formik.handleChange("mobile")}
              onBlur={formik.handleBlur("mobile")}
              value={formik.values.mobile}
              error={formik.touched.mobile && formik.errors.mobile}
            />
            <CustomInput
              className="mt-3"
              placaholder="Enter Password"
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
            />

            <CustomButton
              title="Sign Up"
              type="primary"
              className="w-100 d-block mt-3"
              onClick={formik.handleSubmit}
            />
            <div className="my-3">
              <Link
                href={"/login"}
                className="text-dark text-decoration-none d-flex justify-content-center"
              >
                Already Hav An Account? <b>Login</b>.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
