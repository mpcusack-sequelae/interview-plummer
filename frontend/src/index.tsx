import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { OpenAPI } from './client/core/OpenAPI';
import { Header } from './components/header';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Quiz } from './components/quiz';

OpenAPI.BASE = process.env.REACT_APP_API_URL ?? "http://localhost:8000";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

root.render(
  <React.StrictMode>
    <ChakraProvider theme={extendTheme({ config })} resetCSS>
      <Header />
      <Quiz />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
