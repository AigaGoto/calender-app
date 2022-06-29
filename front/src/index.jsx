import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { createStore } from "redux";

import CalendarBoard from "./components/CalendarBoard/container";

import rootReducer from "./redux/rootReducer";

import dayjs from "dayjs";
import "dayjs/locale/ja";

// 日本時刻でローカライズ
dayjs.locale("ja");

// storeはindex.jsxに生成
const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <CalendarBoard />
    </Provider>
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />);
