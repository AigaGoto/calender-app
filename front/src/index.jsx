import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./redux/rootReducer";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import  {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers';

import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";

// 日本時刻でローカライズ
dayjs.locale("ja");

// storeはindex.jsxに生成
const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
        </LocalizationProvider>
    </Provider>
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />);
