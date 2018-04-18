import React from 'react';
// import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPrismicDoc } from './actions';
import { selectPrismicDoc } from './selectors';

import Title from '../../components/typography/Title';

class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      doc: null,
      notFound: false,
    };
  }

  componentWillMount() {
    this.props.actions.getPrismicDoc();
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  render() {
    return <Title>Project</Title>;
  }
}

const mapStateToProps = state => ({
  apiData: selectPrismicDoc(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getPrismicDoc }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
