import React from "react";
import AppRoute from './route/route';
import AppLayout from './components/layout/index'
import './App.css';

function App() {
  return (
    <>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="stylesheet" href="./App.css"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Rubik&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous"
          />

          <title>React App</title>
        </head>
        <body>
          <div className="App">
            <AppLayout>
              <AppRoute />
            </AppLayout>
          </div>
        </body>
      </html>
      <script src="/main.js" async=""></script>
    </>
  );
}

export default App;
