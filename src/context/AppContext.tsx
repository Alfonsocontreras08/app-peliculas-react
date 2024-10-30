import { createContext } from "react";
import { AppState } from "../interfaces/AppState";


/**
 * es el estado inicial de la aplicacion
 */

type State = {
  state: AppState
}

const context = createContext<State>({} as State)


  export default context;