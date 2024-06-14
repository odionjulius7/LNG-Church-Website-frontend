"use client";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="container-fluid bg-white">
      <div className="row py-5">
        <div className="col-4 mx-auto py-5">
          <form className="form-wrapper p-4">
            <CustomInput className="mt-2" placaholder="Email Password" />
            <CustomInput className="mt-2" placaholder="Confirm Password" />
            <CustomButton
              title="Proceed"
              type="primary"
              className="w-100 d-block mt-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
