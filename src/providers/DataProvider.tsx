import { ReactNode, createContext, useEffect, useState } from "react";
import Logement from "../types/Logement-type";

type DataContextType = {
  data: Logement[] | null;
  setData: (data: Logement[] | null) => void;
};

export const DataContext = createContext<DataContextType>({
  data: null,
  setData: () => {
    throw new Error("setData function is not initialized");
  },
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Logement[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/logements.json");
      const data = (await response.json()) as Logement[];
      setData(data);
    }

    void fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
