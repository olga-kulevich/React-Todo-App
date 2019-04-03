import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MainPage.css';
import Form from '../Form';
import TodoItem from '../TodoItem';

class MainPage extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleMarkImportantButton: PropTypes.func.isRequired,
    handlerOnClickTodo: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    handleSubmitButton: PropTypes.func.isRequired
  };

  handleSubmitButton = (value) => {
    const {handleSubmitButton} = this.props;
    handleSubmitButton(value);
  };

  handleDeleteTodo = (id) => {
    const {handleDeleteTodo} = this.props;
    handleDeleteTodo(id);
  };

  handlerOnClickTodo = (id) => {
    const {handlerOnClickTodo} = this.props;
    handlerOnClickTodo(id);
  };

  handleMarkImportantButton = (id) => {
    const {handleMarkImportantButton} = this.props;
    handleMarkImportantButton(id);
  };

  render() {
    const {todos} = this.props;
    return (
      <div className="main">
        <Form onSubmit={this.handleSubmitButton} />
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              toggleDeleteButton={this.handleDeleteTodo}
              handlerOnClickTodo={() => this.handlerOnClickTodo(todo.id)}
              handleMarkImportantButton={() => this.handleMarkImportantButton(todo.id)}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default MainPage;
