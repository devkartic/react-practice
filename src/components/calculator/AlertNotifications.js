import {Component} from "react";

class AlertNotifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            type: ''
        }
    }

    componentDidMount() {
        if (this.state.isOpen) {
            this.setState({type: 'info'});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        switch (this.state.type) {
            case 'primary':
                return (<div className="alert alert-primary text-start" role="alert">{this.props.children}</div>);
            case 'secondary':
                return (<div className="alert alert-secondary text-start" role="alert">{this.props.children}</div>);
            case 'success':
                return (<div className="alert alert-success text-start" role="alert">{this.props.children}</div>);
            case 'danger':
                return (<div className="alert alert-danger text-start" role="alert">{this.props.children}</div>);
            case 'warning':
                return (<div className="alert alert-warning text-start" role="alert">{this.props.children}</div>);
            case 'info':
                return (<div className="alert alert-info text-start" role="alert">{this.props.children}</div>);
            default:
                return;
        }
    }
}

export default AlertNotifications;