import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [educationList, setEducation] = useState([]);
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        return setEducation(data);
      } catch (error) {
        console.log(error);
      }
    };

    // Se ejecuta la informaión
    fetchEducation();
  }, []);

  return educationList;
};

// Se retorna el componente
export default useInitialState;