Feature: show/hide event details

Scenario: An event element is collapsed by default
Given the event element is closed
When the user opens the app
Then the user should not see the event details

Scenario: User can expand an event to see its details
Given the event list is loaded
When the user opens the event element
Then the user should see the event details

Scenario: User can collapse an event to hide its details
Given the event details are shown
When the user closes the event element
Then the details should be hidden