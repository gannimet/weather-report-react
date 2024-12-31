import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./index.scss";
import NavBar from "./navigation/NavBar";
import TodosPage from "./todos/TodosPage";
import WeatherPage from "./weather/WeatherPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="weather" element={<WeatherPage />} />
          <Route path="todo" element={<TodosPage />} />
          <Route path="*" element={<Navigate to="/weather" />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
