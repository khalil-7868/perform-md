import { AboutDoctor } from "components/sections/about-doctor";
import { CTA } from "components/sections/cta";
import { ScheduleAppointment } from "components/sections/schedule-appointment";

export default function Page() {
  return (
    <main>
      <ScheduleAppointment />
      <AboutDoctor />
      <CTA />
    </main>
  );
}
