export interface FormProps {
  form: {
    initialAmount: {
      label: string;
    };
    investmentTerm: {
      label: string;
    };
    estimatedAnnualInterestRate: {
      label: string;
    };
    additionalContribution: {
      label: string;
    };
    frequencyOfAdditionalContributions: {
      label: string;
    };
  };
  results: {
    totalInvested: {
      label: string;
    };
    interestEarned: {
      label: string;
    };
    total: {
      label: string;
    };
  };
}
