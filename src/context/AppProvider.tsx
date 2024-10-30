import AppContext from './AppContext'
import { PropsProvider } from '../interfaces/propsProvider'
import { AppState } from '../interfaces/AppState'

const INITIAL_STATE: AppState = {
  name: "Iron Man",
  time: "2 horas",
  url: "http://marvel.io/bw"
}

const AppProvider = ({ children }: PropsProvider) => {
  return (
    <AppContext.Provider value={ {state: INITIAL_STATE} }>
      { children}
    </AppContext.Provider>
  )
}

export default  AppProvider 