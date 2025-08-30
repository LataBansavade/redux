import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
  // import {ApiProvider} from "@reduxjs/toolkit/query/react";
  // import { posts } from "./redux/api.ts";
  import {Provider} from "react-redux";
  import {store} from "./redux/store.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ApiProvider api={posts}> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </ApiProvider> */}
  </StrictMode>,
)
