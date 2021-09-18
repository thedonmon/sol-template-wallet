import { SnackbarProvider } from "notistack";
import React from "react";
import MyRouter from "./routers/index";

function App() {
  return (
    <SnackbarProvider>
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <MyRouter />
    </div>
   </SnackbarProvider>
  );
}
export default App;