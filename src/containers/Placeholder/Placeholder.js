import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';
import Error404Page from '../../components/pages/Error404Page';
// import { Helmet } from 'react-helmet';

class Placeholder extends React.Component {
  constructor() {
    super();

    this.state = {
      doc: null,
      notFound: false,
    };
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    // this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('placeholder', 'placeholder', {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    if (this.state.doc) {
      const { doc } = this.state;
      return (
        <div data-wio-id={this.state.doc.id}>
          {/* This is how to get an image into your template */}
          <img alt="cover" src={doc.data.placeholder_image.url} />
          {/* This is how to insert a Rich Text field as plain text */}
          <h1>{PrismicReact.RichText.asText(doc.data.placeholder_tagline)}</h1>
          {/* This is how to insert a Rich Text field into your template as html */}
          {PrismicReact.RichText.render(
            doc.data.placeholder_text,
            this.props.prismicCtx.linkResolver,
          )}
        </div>
      );
    } else if (this.state.notFound) {
      return <Error404Page />;
    }
    return <h1>Loading</h1>;
  }
}

Placeholder.propTypes = {
  prismicCtx: PropTypes.isRequired,
};

export default Placeholder;
