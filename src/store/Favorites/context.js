import { useReducer } from "react";
import { createContext } from "react";
import { favoritesReducer, initialState } from "./reducer";

export const FavoritesContext = createContext();

export const FavoritesProvider = props => {
  const { children } = props;
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const favoritesContextValue = {
    favoritesState: state,
    favoritesDispatch: dispatch,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
