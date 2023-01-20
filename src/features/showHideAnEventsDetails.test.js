import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme';
import App from "../App";



const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {
        
        
        given('the event element is closed', () => {
           
        });
            
        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should not see the event details', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.Event.expanded')).toHaveLength(0);
        });
    });

   //Feature file has a scenario titled "User can expand an event to see its details", but no match found in step definitions. Try adding the following code:      

    test('User can expand an event to see its details', ({ given, when, then }) => {
        
    
        given('the event list is loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user opens the event element', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the user should see the event details', () => {
            expect(AppWrapper.find('.summary h1')).toBeDefined();
        });
    });

    //Feature file has a scenario titled "User can collapse an event to hide its details", but no match found in step definitions. Try adding the following code:   

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        

        given('the event details are shown',async () => {
            AppWrapper =await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        when('the user closes the event element', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the details should be hidden', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".description")).toBeDefined();
        });
    });
});
