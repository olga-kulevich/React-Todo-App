import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

class TodoItem extends React.PureComponent {
  static propTypes = {
    todo: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handlerOnClickTodo: PropTypes.func.isRequired,
    handleMarkImportantButton: PropTypes.func.isRequired,
    toggleDeleteButton: PropTypes.func.isRequired
  };

  state = {
    isHovering: false,
  };

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  handleDeleteButton = () => {
    const {toggleDeleteButton, id} = this.props;

    toggleDeleteButton(id);
  };

  handleMarkImportantButton = () => {
    const {handleMarkImportantButton} = this.props;
    handleMarkImportantButton();
  };

  toggleHoverState = state => ({
    isHovering: !state.isHovering
  });

  handlerOnClickButton = () => {
    const {handlerOnClickTodo} = this.props;
    handlerOnClickTodo();
  };

  render() {
    const {todo, done, important} = this.props;
    const {isHovering} = this.state;

    return (
      <div
        className="todo-item"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <li
          className={`todo-text ${done ? 'done' : ''} ${important ? 'important' : ''}`}
          onClick={this.handlerOnClickButton}
          role="presentation"
        >
          {important && (
          <img src="/images/star_border.png" alt="important" />
          )}

          {todo}
        </li>
        {isHovering && (
          <div>
            <button type="button" className={important ? 'gray' : 'green'} onClick={this.handleMarkImportantButton}>
              {important ? 'Not important' : 'Mark important'}
            </button>
            <button type="button" className="delete-button" onClick={this.handleDeleteButton}>
              <img src="/images/Delete.png" alt="delete" />
            </button>
          </div>
        )}

      </div>
    );
  }
}

export default TodoItem;
