import { Metadata } from 'next';

import { CandidateForm } from 'components/sections/candidate-form';

export const metadata: Metadata = {
  title: 'Become a Candidate',
  description: 'Submit your Candidate Form'
};

export default function Page() {
  return (
    <main>
      <CandidateForm />
    </main>
  );
}
