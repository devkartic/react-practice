import {Component} from "react";
import {FormGroup, Input, Label} from "reactstrap";

class TaskInput extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <FormGroup floating>
                <Input onChange={this.props.onChange} type="text" id="name" placeholder="Task" value={this.props.name} />
                <Label for="name">Task</Label>
            </FormGroup>
        );
    }
}
export default TaskInput;