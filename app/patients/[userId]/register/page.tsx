import Image from "next/image";
import React from "react";
import Logo from "@/app/public/assets/icons/logo-icon.svg";
import RegisterPic from "@/app/public/assets/images/register-img.png";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={Logo}
            alt="patient"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />

          <p className="justify-items-end text-dark-600 xl:text-left py-12">
            © 2024 CarePlus
          </p>
        </div>
      </section>

      <Image
        src={RegisterPic}
        height={1000}
        width={1000}
        alt="Patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
