import Button from "../components/button/Button";
import { Footer, Footer2 } from "../components/footer/Footer";
import Header from "../components/header/Header";
import '../App'
import Person from "../components/person/Person";

function MainPages() {
    return (
        <div>
            <Person name='Ares' age={17} address='Bishkek'/>
            <Header/>
            <Footer/>
            <Footer2/>
            <Button name='save' color='confirm'/>
            <Button name='delete' color='error'/>
            <Button name='edit' color='default'/>
            <button className="button">test</button>
        </div>
    );
}  
export default MainPages;