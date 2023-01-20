import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from 'enzyme';
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let NumberWrapper;
    let AppWrapper;
    NumberWrapper = shallow(<NumberOfEvents />);
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

        
        given("the user hasn't specified a number of events", () => {
            
        });
        
        when('the event list is loaded', () => {           
            AppWrapper = mount(<App />);
        });

        then(/^the maximum of (\d+) event should be visible$/, (arg0) => {
            expect(AppWrapper.find('App')).toBeDefined();
            expect(NumberWrapper.state("eventCount")).toBe(32);
        });
    });

    //Feature file has a scenario titled "User can change the number of events they want to see", but no match found in step definitions. Try adding the following code:

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper = mount(<App />)
        given('the user has specified the number of events', () => {
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 2 } };
            NumberOfEventsWrapper.find('.noe-Input').simulate(
              'change',
              eventObject
            );
        });

        when('the event list is loaded', () => {
            AppWrapper = mount(<App />);
        });

        then('user should be able to see specified number of events', () => {
            expect(NumberWrapper.find("input.noe-Input").prop("type")).toBe("number");
        });
    });
});