import { NetflixFooter } from "./NetflixFooterComponent";
import { NetflixHeader } from "./NetflixHeaderComponent";
import './NetflixIndexComponent.css';
import { NetflixMain } from "./NetflixMainComponet";
import { NetflixRegister } from "./NetflixRegisterComponent";

export function NetflixIndex(){
    return(
        <div className="container-fluid">
            <div className="box">
                <header>
                    <NetflixHeader/>
                </header>
            </div>
            <section className="d-flex justify-content-center align-items-center">
                <main>
                    <NetflixMain></NetflixMain>
                    <NetflixRegister></NetflixRegister>
                </main>
            </section>
            <footer>
                <NetflixFooter />
            </footer>
        </div>
    )

}