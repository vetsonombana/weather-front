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
import { CurrentWeatherData } from "../models/current";

const CurrentWeather: React.FC<{
  searchCurrentWeather: Function;
  currentWeather: CurrentWeatherData | undefined;
}> = ({ searchCurrentWeather, currentWeather }) => {
  const [city, setCity] = useState("");
  return (
    <>
      <div>
        <h1>Current weather</h1>
        <p>Show current weather by city name</p>
        <TextField
          value={city}
          id="outlined-basic"
          label="City"
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" onClick={() => searchCurrentWeather(city)}>
          Search
        </Button>
        {currentWeather && (
          <>
            <h1> Results : </h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Température (en °C)</TableCell>
                    <TableCell align="right">Vent (en Km/H)</TableCell>
                    <TableCell align="right">
                      Humidité relative (en %)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {currentWeather?.description}
                    </TableCell>
                    <TableCell align="right">
                      {currentWeather?.temperature} °C
                    </TableCell>
                    <TableCell align="right">
                      {currentWeather?.wind_speed} Km/H
                    </TableCell>
                    <TableCell align="right">
                      {currentWeather?.humidity} %
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </div>
    </>
  );
};
export default CurrentWeather;
