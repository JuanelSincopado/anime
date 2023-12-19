import { useContext } from "react";
import GlobalContext from "./Context";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext debe usarse dentro de un GlobalContextProvider');
  }
  return context;
};