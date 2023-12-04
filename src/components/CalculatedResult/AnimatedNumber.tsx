import React, { useState, useEffect } from "react";

const AnimatedNumber = ({ number }: { number: number }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    // Reiniciar el contador a 0 cuando number cambia
    setCurrentNumber(0);
  }, [number]);

  useEffect(() => {
    const duration = 1000; // Duración total de la animación en milisegundos
    const frameRate = 1000 / 60; // 60 frames por segundo
    const incrementoPorFrame = number / (duration / frameRate);

    if (currentNumber < number) {
      const timer = setTimeout(() => {
        setCurrentNumber((prevNumber) => {
          const nextNumber = prevNumber + incrementoPorFrame;
          return nextNumber > number ? number : nextNumber;
        });
      }, frameRate);

      return () => clearTimeout(timer);
    }
  }, [currentNumber, number]);

  return (
    <>
      $
      {currentNumber.toLocaleString("es-MX", {
        maximumFractionDigits: 2,
      })}
    </>
  );
};

export default AnimatedNumber;
