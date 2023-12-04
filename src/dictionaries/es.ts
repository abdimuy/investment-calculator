export default {
  metadata: {
    title: "Calculadora de Inversión",
    description:
      "Maximiza tus ahorros con nuestra Calculadora de Inversiones. Fácil de usar y versátil, ofrece cálculos de interés compuesto, ajustes de inflación y visualizaciones detalladas. Ideal para planificar tu futuro financiero y explorar diversas opciones de inversión. Comienza a construir tu patrimonio hoy.",
    keywords: "inversión, calculadora, interés compuesto, inflación, ahorros",
  },
  title: "Calculadora de Inversión",
  description:
    "Maximiza tus ahorros con nuestra Calculadora de Inversiones. Fácil de usar y versátil, ofrece cálculos de interés compuesto, ajustes de inflación y visualizaciones detalladas. Ideal para planificar tu futuro financiero y explorar diversas opciones de inversión. Comienza a construir tu patrimonio hoy.",
  form: {
    initialAmount: {
      label: "Monto de inversión inicial.",
    },
    investmentTerm: {
      label: "Plazo de la inversión (en años o meses).",
    },
    estimatedAnnualInterestRate: {
      label: "Tasa de interés anual estimada.",
    },
    additionalContribution: {
      label:
        "Contribución adicional, con su frecuencia (monthly, annually, etc.) ",
    },
    frequencyOfAdditionalContributions: {
      label: "Frecuencia de las contribuciones adicionales.",
    },
  },
  results: {
    totalInvested: {
      label: "Total invertido",
    },
    interestEarned: {
      label: "Intereses ganados",
    },
    total: {
      label: "Total",
    },
  },
  share: {
    label: "¡Comparte esta calculadora con tus amigos!",
    twitter: "Compartir en Twitter",
    facebook: "Compartir en Facebook",
    linkedin: "Compartir en LinkedIn",
    email: "Compartir por correo electrónico",
    copyLink: "Copiar enlace",
  },
};
