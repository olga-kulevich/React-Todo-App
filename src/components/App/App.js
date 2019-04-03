import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import MainPage from '../MainPage';

class App extends React.Component {
  state = {
    activeMenu: 'all',
    search: '',
    todos: [],
  };

  componentWillMount() {
    this.setState({
      todos: localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem('todos'))
        : []
    });
  }

  saveTodos = (todos) => {
    this.setState({todos});
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  handleSubmitButton = (value) => {
    const {todos} = this.state;
    this.saveTodos([
      ...todos,
      {...value, done: false, important: false},
    ]);
  };

  handleDeleteTodo = (id) => {
    const {todos} = this.state;
    this.saveTodos(todos.filter(todo => todo.id !== id));
  };

  handleUpdateSearch = (value) => {
    this.setState({search: value});
  };

  handlerOnClickTodo = (id) => {
    const {todos} = this.state;
    this.saveTodos(todos.map(
      todo => (todo.id === id
        ? {
          ...todo,
          done: !todo.done
        }
        : todo)
    ));
  };

  handleMarkImportantButton = (id) => {
    const {todos} = this.state;
    this.saveTodos(todos.map(
      todo => (todo.id === id
        ? {
          ...todo,
          important: !todo.important
        }
        : todo)
    ));
  };

  handlerMenuClick = (value) => {
    this.setState({activeMenu: value});
  };

  render() {
    const {
      todos,
      search,
      activeMenu
    } = this.state;

    let filteredTodos = todos.filter(todo => todo.todo.indexOf(search) !== -1);
    if (activeMenu !== 'all') {
      filteredTodos = activeMenu === 'done'
        ? filteredTodos.filter(todo => todo.done === true)
        : filteredTodos.filter(todo => todo.done === false);
    }

    return (
      <div className="app">
        <Header search={search} handleUpdateSearch={this.handleUpdateSearch} />
        <Menu onMenuClick={this.handlerMenuClick} />
        <MainPage
          todos={filteredTodos}
          handleSubmitButton={this.handleSubmitButton}
          handleDeleteTodo={this.handleDeleteTodo}
          handlerOnClickTodo={this.handlerOnClickTodo}
          handleMarkImportantButton={this.handleMarkImportantButton}
        />
      </div>
    );
  }
}

export default App;
