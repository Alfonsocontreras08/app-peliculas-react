import RoutesComponent from "./Router";
import AppProvider from './context/AppProvider'

function App() {
  return (
    <AppProvider>
      <RoutesComponent/>
    </AppProvider>
  );
}

export default App;
