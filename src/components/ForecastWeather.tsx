import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ForecastWeather as ForecastWeatherData } from "../models/forecast";

const ForecastWeather: React.FC<{
  searchForecastWeather: Function;
  forecastWeather: ForecastWeatherData | null;
}> = ({ searchForecastWeather, forecastWeather }) => {
  const [city, setCity] = useState("");
  return (
    <>
      <div>
        <h1>Forecast weather</h1>
        <p>Show forecast weather by city name</p>
        <TextField
          value={city}
          id="outlined-basic"
          label="City"
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" onClick={() => searchForecastWeather(city)}>
          Search
        </Button>
        <>
          <h1> Results : </h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>General evolution</TableCell>
                  <TableCell align="right">Temperature trend</TableCell>
                  <TableCell align="right">Barometric pressure trend</TableCell>
                  <TableCell align="right">
                    Average winds over the period
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {forecastWeather?.general_trend}
                  </TableCell>
                  <TableCell align="right">
                    {forecastWeather?.temperature_trend}
                  </TableCell>
                  <TableCell align="right">
                    {forecastWeather?.pressure_trend}
                  </TableCell>
                  <TableCell align="right">
                    {forecastWeather?.wind_speed_avg}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </div>
    </>
  );
};
export default ForecastWeather;
