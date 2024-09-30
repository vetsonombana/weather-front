import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrentWeatherPage from "./pages/current-weather-page";
import ForecastWeatherPage from "./pages/forecast-weather-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CurrentWeatherPage />}></Route>
          <Route path="/forecast" element={<ForecastWeatherPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
