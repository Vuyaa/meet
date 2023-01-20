import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper, event;

  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("renders summary correcly", () => {
    expect(EventWrapper.find(".summary h1")).toBeDefined();
  });

  test("renders start time correctly", () => {
    expect(EventWrapper.find(".start p")).toBeDefined();
  });
  
  
  test("details are hidden before details button is pushed", () => {
    const detailsButton = EventWrapper.find(".details-btn");
    expect(EventWrapper.state("collapsed")).toBe(true);
    expect(detailsButton).toBeDefined();
    expect(EventWrapper.find(".summary h1")).toBeDefined();
    expect(EventWrapper.find(".start p")).toBeDefined();
  });

  test("details are expanded when button is pushed", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
    expect(EventWrapper.find(".summary h1")).toBeDefined();
    expect(EventWrapper.find(".start p")).toBeDefined();
  });
});
