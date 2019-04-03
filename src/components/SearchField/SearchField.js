import React from 'react';
import PropTypes from 'prop-types';
import './SearchField.css';

class SearchField extends React.PureComponent {
  static propTypes = {
    updateSearch: PropTypes.func.isRequired,
  };

  state = {
    search: ''
  };

  updateSearch = (e) => {
    this.setState({search: e.target.value});
    const {updateSearch} = this.props;
    updateSearch(e.target.value);
  };

  render() {
    const {search} = this.state;
    return (
      <input type="text" placeholder="Search task for to do" value={search} onChange={this.updateSearch} />
    );
  }
}

export default SearchField;
