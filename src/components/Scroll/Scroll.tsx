import React, {ReactComponentElement} from 'react';
import {Waypoint} from 'react-waypoint';

import {classNames} from '../utils/classNames';
import styles from './Scroll.module.scss';

// ===================================================================================
// Scroll.LoadAnimation
// ===================================================================================
interface LoadAnimationProps {
  contentInView: boolean;
  propogateAnimation?: boolean;
}

const LoadAnimation: React.FC<LoadAnimationProps> = ({
  children,
  contentInView,
  propogateAnimation,
}) => {
  const LoadAnimationClass = contentInView
    ? styles.LoadAnimation
    : styles.LoadAnimationPaused;

  const animationData = contentInView ? 'scroll--animate' : '';
  const PropogateAnimationClass = propogateAnimation
    ? styles.PropogateAnimation
    : null;

  return (
    <>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          className: classNames(
            child.props.className,
            LoadAnimationClass,
            PropogateAnimationClass,
          ),
          data: animationData,
        });
      })}
    </>
  );
};

// ===================================================================================
// Scroll.LoadContent
// ===================================================================================
interface LoadContentProps {
  contentInView: boolean;
}

const LoadContent: React.FC<LoadContentProps> = ({children, contentInView}) => {
  const content = contentInView ? children : '';
  return <>{content}</>;
};

// ===================================================================================
// Scroll
// ===================================================================================
interface NoProps {}

interface Props {
  bottomOffset?: string;
}
interface State {
  contentInView: boolean;
}

type ComposedProps = Props;

class Scroll extends React.PureComponent<ComposedProps, State> {
  static LoadContent: React.FC<NoProps>;
  static LoadAnimation: React.FC<Omit<LoadAnimationProps, 'contentInView'>>;
  state: State = {
    contentInView: false,
  };
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
  }

  handleOnEnter() {
    this.setState({contentInView: true});
  }

  render() {
    const {children, bottomOffset = '5%'} = this.props;
    const {contentInView} = this.state;

    // window object does not exist in Webpack's Node environment, this is to prevent the error
    const browserWindow = typeof window !== 'undefined' ? window : null;

    // Blocks are used with refs in Waypoint to determine the size of the DOM node
    class Block extends React.PureComponent<{innerRef: any}, {}> {
      render() {
        const {children, innerRef} = this.props;
        return <div ref={innerRef}>{children}</div>;
      }
    }

    const BlockWithRef = React.forwardRef((props, ref) => {
      return (
        <Block innerRef={ref} {...props}>
          {React.Children.map(children, (child: any) => {
            return React.cloneElement(child, {contentInView});
          })}
        </Block>
      );
    });
    return (
      <div>
        <Waypoint
          scrollableAncestor={browserWindow}
          onEnter={this.handleOnEnter}
          bottomOffset={bottomOffset}
        >
          <BlockWithRef />
        </Waypoint>
      </div>
    );
  }
}

Scroll.LoadAnimation = LoadAnimation;
Scroll.LoadContent = LoadContent;

export default Scroll;
