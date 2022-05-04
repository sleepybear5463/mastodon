import { Children, Component, PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import ColumnLoading from '../components/column_loading';
import BundleColumnError from '../components/bundle_column_error';
import BundleContainer from '../containers/bundle_container';

// Small wrapper to pass multiColumn to the route components
export class WrappedSwitch extends PureComponent {

  render () {
    const { multiColumn, children } = this.props;

    return (
      <Switch>
        {Children.map(children, child => cloneElement(child, { multiColumn }))}
      </Switch>
    );
  }

}

WrappedSwitch.propTypes = {
  multiColumn: PropTypes.bool,
  children: PropTypes.node,
};

// Small Wrapper to extract the params from the route and pass
// them to the rendered component, together with the content to
// be rendered inside (the children)
export class WrappedRoute extends Component {

  static propTypes = {
    component: PropTypes.func.isRequired,
    content: PropTypes.node,
    multiColumn: PropTypes.bool,
    componentParams: PropTypes.object,
  };

  static defaultProps = {
    componentParams: {},
  };

  renderComponent = ({ match }) => {
    const { component, content, multiColumn, componentParams } = this.props;

    return (
      <BundleContainer fetchComponent={component} loading={this.renderLoading} error={this.renderError}>
        {Component => <Component params={match.params} multiColumn={multiColumn} {...componentParams}>{content}</Component>}
      </BundleContainer>
    );
  }

  renderLoading = () => {
    return <ColumnLoading />;
  }

  renderError = (props) => {
    return <BundleColumnError {...props} />;
  }

  render () {
    const { component: Component, content, ...rest } = this.props;

    return <Route {...rest} render={this.renderComponent} />;
  }

}
