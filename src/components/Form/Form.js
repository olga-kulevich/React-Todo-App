import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import guid from '../../utils';

class Form extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    todo: ''
  };

  handleChangeInput = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();

    const {onSubmit} = this.props;
    const {todo} = this.state;
    const result = {
      id: guid(),
      todo
    };

    onSubmit(result);
    this.setState({todo: ''});
  };

  render() {
    const {todo} = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
          New Task
        <textarea
          value={todo}
          name="todo"
          maxLength="120"
          onChange={this.handleChangeInput}
          className="form-area"
        />
        <button className="add-btn" type="submit" disabled={todo.length === 0}>ADD</button>
      </form>
    );
  }
}

export default Form;
