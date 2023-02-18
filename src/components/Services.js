import {Component} from "react";
import {Container} from "reactstrap";
import TemperatureCalculator from "./calculator/TemperatureCalculator";
class Services extends Component{
    render() {
        return(
            <Container className="bg-light mt-3 p-5">
                <TemperatureCalculator/>
            </Container>
        );
    }
}

export default Services;