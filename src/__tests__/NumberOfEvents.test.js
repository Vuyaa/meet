import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<Event /> component", () => {
  let NumberWrapper, noeInput;

  beforeAll(() => {
    NumberWrapper = shallow(<NumberOfEvents />);
    noeInput = NumberWrapper.find(".noe-Input input");
  });

  test("renders NumberOfEvents and noe-Input", () => {
    expect(NumberWrapper).toBeDefined();
    expect(noeInput).toBeDefined();
  });

  test("renders a list of events", () => {
    expect(NumberWrapper.find("numOfEvents div")).toBeDefined();
  });

  test("noe-input is 5 (number type) by default", () => {
    expect(NumberWrapper.find("input.noe-Input").prop("type")).toBe("number");
    expect(NumberWrapper.state("eventCount")).toBe(32);
  });
});