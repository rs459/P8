import { ReactNode, createContext, useEffect, useState } from "react";
import Logement from "../types/Logement-type";

type DataContextType = {
  data: Logement[] | null;
  setData: (data: Logement[] | null) => void;
  isLoading: boolean;
};

export const DataContext = createContext<DataContextType>({
  data: null,
  setData: () => {
    throw new Error("setData function is not initialized");
  },
  isLoading: true,
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Logement[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./logements.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data as Logement[]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
