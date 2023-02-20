import {Component} from "react";
import {Card, CardBody, CardHeader, Table, Button, Row, Col, Label, Input, FormGroup, Form} from "reactstrap";
import TaskInput from "./TaskInput";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, name: 'Task 1'},
                {id: 2, name: 'Task 2'},
                {id: 3, name: 'Task 3'}
            ],
            todo: {id: '', name: ''},
            edit: false
        }
        this.onchangeHandler = this.onchangeHandler.bind(this)
        this.onsubmitHandler = this.onsubmitHandler.bind(this)
        this.taskEditHandler = this.taskEditHandler.bind(this)
        this.taskDeletedHandler = this.taskDeletedHandler.bind(this)
    }

    onchangeHandler(event) {
        let id = this.state.todo.id;
        if (this.state.todo.id==='') {
            id = Math.max.apply(null, this.state.todos.map(function (element) {
                return element.id;
            }));
            id += 1;
        }

        this.setState({
            todo: {id, name: event.target.value}
        })
    }

    onsubmitHandler(event) {
        event.preventDefault();
        if (this.state.edit) {
            let id = this.state.todo.id;
            let name = this.state.todo.name;
            this.setState({
                todos: this.state.todos.map((element) => element.id === this.state.todo.id ? {
                    ...element,
                    id,
                    name
                } : element)
            });
            this.setState({edit: false});
        } else {
            if (this.state.todo.name !== '') {
                this.setState(prevState => ({
                    todos: [...prevState.todos, this.state.todo]
                }));
            }
        }
        this.setState({todo: {id: '', name: ''}});
    }

    taskEditHandler(todo_id) {
        let todo = this.state.todos.filter((todo) => todo.id === todo_id);
        if (todo.length > 0) {
            this.setState({edit: true, todo: todo[0]});
        }
    }

    taskDeletedHandler(todo_id) {
        this.setState({
            todos: this.state.todos.filter((element) => element.id !== todo_id)
        });
    }

    render() {
        const taskList = this.state.todos.map((todo, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{++index}</th>
                    <td>{todo.name}</td>
                    <td>Pending</td>
                    <td>
                        <Button color="warning" className="me-1"
                                onClick={() => this.taskEditHandler(todo.id)}>Edit</Button>
                        <Button color="danger" onClick={() => this.taskDeletedHandler(todo.id)}>Delete</Button>
                    </td>
                </tr>
            );
        })

        let btnLabel = 'Create';
        if (this.state.edit) btnLabel = 'Update';

        return (
            <Card color="info" className="mb-3">
                <CardHeader><h3>Todo Application</h3></CardHeader>
                <CardBody>
                    <Form onSubmit={this.onsubmitHandler}>
                        <Row className="row-cols-lg-auto g-3 align-items-center">
                            <Col>
                                <TaskInput onChange={this.onchangeHandler} name={this.state.todo.name}/>
                            </Col>
                            <Col>
                                <Button color="primary" type="submit">{btnLabel}</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th onClick={this.onchangeHandler}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {taskList}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        );
    }
}

export default TodoList;