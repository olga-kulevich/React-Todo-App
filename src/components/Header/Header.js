import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from '../Logo';
import SearchField from '../SearchField';

class Header extends React.Component {
  static propTypes = {
    handleUpdateSearch: PropTypes.func.isRequired,
  };

  updateSearch = (search) => {
    const {handleUpdateSearch} = this.props;
    handleUpdateSearch(search);
  };

  render() {
    return (
      <header className="header">
        <Logo />
        <SearchField updateSearch={this.updateSearch} />
      </header>
    );
  }
}

export default Header;
