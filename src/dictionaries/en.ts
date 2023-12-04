export default {
  metadata: {
    title: "Investment Calculator",
    description:
      "Maximize your savings with our Investment Calculator. User-friendly and versatile, it provides compound interest calculations, inflation adjustments, and detailed visualizations. Ideal for planning your financial future and exploring various investment options. Start building your wealth today.",
    keywords: "investment, calculator, compound interest, inflation, savings",
  },
  title: "Investment Calculator",
  description:
    "Maximize your savings with our Investment Calculator. User-friendly and versatile, it provides compound interest calculations, inflation adjustments, and detailed visualizations. Ideal for planning your financial future and exploring various investment options. Start building your wealth today.",
  form: {
    initialAmount: {
      label: "Initial investment amount.",
    },
    investmentTerm: {
      label: "Investment term (in years or months).",
    },
    estimatedAnnualInterestRate: {
      label: "Estimated annual interest rate.",
    },
    additionalContribution: {
      label:
        "Additional contribution, with its frequency (monthly, annually, etc.)",
    },
    frequencyOfAdditionalContributions: {
      label: "Frequency of additional contributions.",
    },
  },
  results: {
    totalInvested: {
      label: "Total invested",
    },
    interestEarned: {
      label: "Interest earned",
    },
    total: {
      label: "Total",
    },
  },
  share: {
    label: "Share this calculator with your friends!",
    twitter: "Share on Twitter",
    facebook: "Share on Facebook",
    linkedin: "Share on LinkedIn",
    email: "Share via Email",
    copyLink: "Copy Link",
  },
};
