import {Component} from "react";
import {FormGroup, Input, Label} from "reactstrap";

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        return (
            <div>
                <FormGroup floating>
                    <Input onChange={this.onChangeHandler} type="text" id={this.props.scale} placeholder={this.props.scale} value={this.props.temperature} />
                    <Label for={this.props.scale}>{this.props.scale}</Label>
                </FormGroup>
            </div>
        );
    }
}

export default TemperatureInput;