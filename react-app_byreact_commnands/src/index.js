import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NetflixRegister } from "./Components/NetflixRegisterComponent";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NetflixIndex } from "./Components/NetflixIndexComponent";
import { DataBindingComponent } from "./Components/DataBindingComponent";
import { DataBindingByUseStateComponent } from "./Components/DB_bu_UseStateComponent";
import { TwoWayDatabindingComponent } from "./Components/TwoWayDataBindingComponent";
import { TwoWaybinding_Cmponent } from "./Components/ClassComponetn_2_WayBinding";
import FormValidationbyEventsComponent from "./Components/FormValidationByEvents";
import Formvalidation_ByFormikLibrary from "./Components/FormValidation_ByFormikLibrary";
import { ClassLifeCycleDemo } from "./Components/LifeCycleHooks_ClassComponent";
import ReactHooksDemoComponent from "./Components/ReactHooksDemo";
import UseContextDemoComonent from "./Components/UseContextDemo";
import CookieDemoComponetn from "./Components/CookieDemo";
import { CookiesProvider } from "react-cookie";
import UseReducerComponent from "./Components/UseReducerComponent.js";
import { CustomHookUtilizeComponent } from "./Components/CustomHooksUtilize.js";
import { AjaxDemoComponent } from "./Components/AjaxDemoComponent.js";
import AxiosRegisterFormComponent from "./Components/AxiosRegisterForm.js";
import SpaCompomnent from "./RoutingPack/SPAComponent.jsx";
import IshopIndexComponent from "./IshopProject1/IshopIndex.jsx";
import MainComponent from "./BankApp/MainComponetn.jsx";
import MaterialUiMainComponent from "./material_ui_pactice/mui_main_page.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Material Ui Maincomponent  */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MaterialUiMainComponent />}></Route>
      </Routes>
    </BrowserRouter>

    {/* <NetflixIndex /> */}

    {/* <DataBindingComponent /> */}

    {/* <DataBindingByUseStateComponent /> */}
    {/* <TwoWayDatabindingComponent /> */}
    {/* <TwoWaybinding_Cmponent /> */}
    {/* <FormValidationbyEventsComponent /> */}
    {/* <Formvalidation_ByFormikLibrary /> */}
    {/* <ClassLifeCycleDemo /> */}
    {/* <ReactHooksDemoComponent /> */}
    {/* <UseContextDemoComonent /> */}

    {/* <CookiesProvider>
      <CookieDemoComponetn />
    </CookiesProvider> */}

    {/* <UseReducerComponent /> */}
    {/* <CustomHookUtilizeComponent /> */}

    {/* <AjaxDemoComponent /> */}
    {/* <AxiosRegisterFormComponent /> */}

    {/* Routiong Examples  */}
    {/* <SpaCompomnent /> */}

    {/* <IshopIndexComponent /> */}
    {/* <MainComponent /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
