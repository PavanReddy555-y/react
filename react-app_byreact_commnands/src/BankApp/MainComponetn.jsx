import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalHome from "./personal/PersonalHome";
import NriHome from "./Nri/NriHome";
import BankHomeComponent from "./BankHome";
import PersonalLogin from "./personal/PersonalLogin";
import PersonalRegister from "./personal/PersonalRegoster";
import NriLogin from "./Nri/NriLogin";
import NriRegister from "./Nri/NriRegister";


export default function MainComponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BankHomeComponent />}>
                        <Route path="personal" element={<PersonalHome />}>
                            <Route path="plogin" element={<PersonalLogin />}></Route>
                            <Route path="pregister" element={<PersonalRegister />}></Route>
                        </Route>
                        <Route path="nri" element={<NriHome />}>
                            <Route path="nlogin" element={<NriLogin />}></Route>
                            <Route path="nregister" element={<NriRegister />}></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}