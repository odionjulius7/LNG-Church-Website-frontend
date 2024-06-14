"use client";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <div className="container-fluid bg-white">
      <div className="row py-5">
        <div className="col-4 mx-auto py-5">
          <form className="form-wrapper p-4">
            <CustomInput className="mt-2" placaholder="Email Address" />
            <CustomButton
              title="Proceed"
              type="primary"
              className="w-100 d-block mt-3"
              onClick={() => router.push("/reset-password")}
            />
            <div className="my-3">
              <Link
                href={"/login"}
                className="text-dark text-decoration-none d-flex justify-content-center"
              >
                Go To Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
