import {Component} from "react";
import TemperatureInput from "./TemperatureInput";
import AlertNotifications from "./AlertNotifications";
import {Card, CardBody, CardHeader} from "reactstrap";

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <AlertNotifications type="success" >The water would boil.</AlertNotifications>;
    }
    return <AlertNotifications type="warning" >The water would not boil.</AlertNotifications>
}
class TemperatureCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celsius: 'Celsius',
            fahrenheit: 'Fahrenheit',
            temperature: '',
            scale: 'celsius',
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature) {
        temperature = this.handleNumericVerify(temperature);
        this.setState({scale: 'celsius', temperature});
    }

    handleFahrenheitChange(temperature) {
        temperature = this.handleNumericVerify(temperature);
        if(isNaN(Number(temperature))) temperature = '';
        this.setState({scale: 'fahrenheit', temperature});
    }

    handleNumericVerify(temperature){
        if(isNaN(Number(temperature))) {
            temperature = '';
        }
        return temperature;
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'fahrenheit' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'celsius' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <Card color="info" className="mb-3">
                <CardHeader><h3>Temperature Calculator</h3></CardHeader>
                <CardBody>
                    <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
                    <TemperatureInput scale={this.state.celsius} temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                    <TemperatureInput scale={this.state.fahrenheit} temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                </CardBody>
            </Card>
        );
    }
}

export default TemperatureCalculator;