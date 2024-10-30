import { Detail, Main, NotFound} from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function routes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default routes; 