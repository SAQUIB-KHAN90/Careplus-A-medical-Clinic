import Image from "next/image";
import Logo from "../../../public/assets/icons/logo-full.svg";
import AppointmentForm from "@/components/forms/AppointmentForm";
import Link from "next/link";
import HeroImage from "../../../public/assets/images/appointment-img.png";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen ">
      {/* TODO : OTP VERIFICATION */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={Logo}
            alt="patient"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 CarePlus
          </p>
        </div>
      </section>

      <Image
        src={HeroImage}
        height={1000}
        width={1000}
        alt="appotnment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
