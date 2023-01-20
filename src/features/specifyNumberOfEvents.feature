Feature: Specify number of events


Scenario: When user hasn’t specified a number, 32 is the default number
Given the user hasn't specified a number of events
When the event list is loaded
Then the maximum of 32 event should be visible



Scenario: User can change the number of events they want to see
Given the user has specified the number of events
When the event list is loaded
Then user should be able to see specified number of events