import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

class Menu extends React.PureComponent {
  static propTypes = {
    onMenuClick: PropTypes.func.isRequired,
  };

  state = {
    active: 'all'
  };

  onClick = (e) => {
    const {onMenuClick} = this.props;
    this.setState({active: e.target.getAttribute('name')});
    onMenuClick(e.target.getAttribute('name'));
  };

  render() {
    const {active} = this.state;
    return (
      <ul onClick={this.onClick} role="presentation">
        <li className={active === 'all' ? 'active' : ''} name="all">All</li>
        <li className={active === 'active' ? 'active' : ''} name="active">Active</li>
        <li className={active === 'done' ? 'active' : ''} name="done">Done</li>
      </ul>
    );
  }
}

export default Menu;
