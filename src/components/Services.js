import {Component} from "react";
import {Container} from "reactstrap";
import TemperatureCalculator from "./calculator/TemperatureCalculator";
import TodoList from "./todo/TodoList";
class Services extends Component{
    render() {
        return(
            <Container className="bg-light mt-3 p-5">
                {/*<TemperatureCalculator/>*/}
                <TodoList/>
            </Container>
        );
    }
}

export default Services;