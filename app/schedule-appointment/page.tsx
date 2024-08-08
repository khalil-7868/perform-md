import { Metadata } from 'next';

import { AboutDoctor } from 'components/sections/about-doctor';
import { CTA } from 'components/sections/cta';
import { ScheduleAppointment } from 'components/sections/schedule-appointment';

export const metadata: Metadata = {
  title: 'Schedule Appointment',
  description: 'Schedule your appointment here'
};

export default function Page() {
  return (
    <main>
      <ScheduleAppointment />
      <AboutDoctor />
      <CTA />
    </main>
  );
}
