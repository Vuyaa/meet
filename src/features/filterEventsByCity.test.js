import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';
import CitySearch from '../CitySearch';


const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {

    test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {

        given('user hasn’t searched for any city', () => {

        });


        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />) //Code to open the app
        });


        then('the user should see the list of upcoming events.', () => { 
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length); //Check if the app renders array from at least the number of events in the mockData
        });
    });


    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {

        let CitySearchWrapper; //ensure that the main Page(CitySearch) with its parameters is open
        given('the main page is open', () => {
            const locations = extractLocations(mockData);
            CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
        });

        when('the user starts typing in the city textbox', () => {       //When the user starts typing targeted value (berlin) it should change the state 
            CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        //Ensures that there is at least two suggestions 
        then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
            expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
        });
    });

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {

        
        let AppWrapper; 
        //Similar to the "when" statement(CitySearchWrapper = AppWrapper; and here is async code)
        given('user was typing “Berlin” in the city textbox', async () => {    
            AppWrapper = await mount(<App />);
            AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin'}});
        });

        //Similar to then statement in the second scenario
        and('the list of suggested cities is showing', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
        });


        when('the user selects a city (e.g., “Berlin, Germany”) from the list',  () => {
            AppWrapper.find('.suggestions li').at(0).simulate('click');
            // find an li (listitem) in the suggestions and simulate click on the first(0) item 
        });

        then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
        });

        and('the user should receive a list of upcoming events in that city', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });
    });
});