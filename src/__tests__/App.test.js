import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {

  
  test("App passes 'events' state as a prop to EventList", () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });


  test("App passes 'locations' state as a prop to CitySearch", () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });



  test("get list of events matching the city selected by the user", async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const EventsToShow = allEvents.filter(
      (event) => event.location === selectedCity  
    );
    expect(AppWrapper.state("events")).toEqual(EventsToShow);
    AppWrapper.unmount()
  });
    


  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).toEqual(
      allEvents.slice(0, AppWrapper.state("eventCount"))
    );
    AppWrapper.unmount();
  });


  test("check if number of events is properly passed on as a prop to NumberOfEvents", () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ eventCount: 32 });
    expect(AppWrapper.find(NumberOfEvents).props().eventCount).toBe(32);
    AppWrapper.unmount();
  });


  test("check to see if state changes when number of events is changed", async () => {
    const AppWrapper = mount(<App />);
    const NumberWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 9 } };
    NumberWrapper.find("input.noe-Input").simulate("change", eventObject);
    await getEvents();
    expect(NumberWrapper.state("eventCount")).toBe(9);
    expect(AppWrapper.state("eventCount")).toBe(9);
    AppWrapper.unmount();
  });


  test("The content of the event rendered matching the content of the mock API", async () => {
    const AppWrapper = mount(<App />);
    const NumberWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 1 } };
    await NumberWrapper.instance().noeInput(eventObject);
    await getEvents();
    expect(AppWrapper.state("events")).toEqual([mockData[0]]);
    AppWrapper.unmount();
  });
});