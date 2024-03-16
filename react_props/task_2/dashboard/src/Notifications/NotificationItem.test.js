import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem />);
  });

  it("renders correct html with dummy type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('[data-notification-type="default"]').html()).toEqual(
      '<li data-notification-type="default">test</li>'
    );
  });

  it("renders correct html with dummy html prop", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.find("li").html()).toContain("<u>test</u>");
  });
});
