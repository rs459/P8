import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const useData = () => {
  const context = useContext(DataContext);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};

export default useData;
