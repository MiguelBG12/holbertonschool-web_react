import React, { Component, Fragment } from 'react';

class NotificationItem extends Component {
  render() {
    // Destructuring props for easier access
    const {
      type,
      value,
      html
    } = this.props;

    return (
      // Fragment to group multiple children without adding an extra node to the DOM
      <Fragment>
        {
          // Conditional rendering based on 'html' prop presence
          html !== undefined &&
          // Render <li> with HTML content if 'html' prop is defined
          <li
            data-priority-type={type}
            dangerouslySetInnerHTML={html}
          />
        }
        {
          // Conditional rendering when 'html' prop is not defined
          html === undefined &&
          // Render <li> with 'value' prop as its content
          <li
            data-priority-type={type}
          >
            {value}
          </li>
        }
      </Fragment>
    );
  }
}

export default NotificationItem;
