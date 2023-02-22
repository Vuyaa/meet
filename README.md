# meet

<h3>Description:</h3>
The meetApp is a progressive web application (PWA) developed to connect the developers and everyone who finds IT world interesting from the same area.
It can filter events by the city and the subject refered to the specific city. 

<h3>Technologies used:</h3>
<ul>
<li>React</li>
<li>AWS lambda</li>
<li>Google Calendar API</li>
<li>OAuth2 authentication flow</li>
<li>Tailwind CSS</li>
<li>Unit & Integration Testing: Jest, Enzyme</li>
<li>Acceptance Testing: Jest Cucumber</li>
<li>End-to-end Testing: Puppeteer</li>
</ul>

<h3> User Stories:</h3>
<ul> 
<li>As a user, I would like to be able to show or hide event details so that I can see more or less information about an event</li>
<li>As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once</li>
<li>As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online</li>
<li>As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organizing in which city</li>
</ul>

<h3>Given-When-Then</h3>

<h4>FEATURE 1: SHOW/HIDE AN EVENT'S DETAILS</h4>
<ul>
    <h5>Scenario 1: An event element is collapsed by default</h5>
     <ul>
      <li>Given the event element is closed</li>
      <li>When the user opens the app</li>
      <li>Then the user should not see the event details</li>
     </ul>  
   <h5>Scenario 2: User can expand an event to see its details</h5>
    <ul>
     <li>Given the event list is loaded</li>
     <li>When the user opens the event element</li>
     <li>Then the user should see the event details</li>
    </ul> 
  <h5>Scenario 3: User can collapse an event to hide its details</h5>
   <ul>
    <li>Given the event details are shown</li>
    <li>When the user closes the event elemente</li>
    <li>Then the details should be hidden</li>
   </ul> 
</ul>

<h4>FEATURE 2: SPECIFY NUMBER OF EVENTS</h4>
<ul>
  <h5>Scenario 1: When user hasn’t specified a number, 32 is the default number</h5>
    <ul>
      <li>Given the user hasn't specified a number of events</li>
      <li>When the event list is loaded</li>
      <li>Then the maximum of 32 event should be visible</li>
    </ul>
   <h5>Scenario 2: User can change the number of events they want to see</h5> 
    <ul>
      <li>Given the user has specified the number of events</li>
      <li>When the event list is loaded</li>
      <li>Then user should be able to see specified number of events</li>
    </ul>
</ul>

<h4>FEATURE 3: USE THE APP WHEN OFFLINE</h4>
<ul>
<h5>Scenario 1: Show cached data when there’s no internet connection</h5>
  <ul>
    <li>Given the user has no connection to the internet</li>
    <li>When the user opens the app</li>
    <li>Then the user should still be able to see cached data</li>
  </ul>
 <h5>Scenario 2: Show error when user changes the settings (city, time range)</h5>
  <ul>
    <li>Given there is no internet connection</li>
    <li>When the user attempts to change a setting with data stored online</li>
    <li>Then the user should recieve an error message indicating that the specified setting change requires an internet connection</li>
  </ul>
</ul>

<h4>FEATURE 4: DATA VISUALIZATION</h4>
<ul>
<h5>Scenario 1: Show a chart with the number of upcoming events in each city</h5>
  <ul>
    <li>Given the user has opened the app</li>
    <li>When the user opens a specific city</li>
    <li>Then the user should see a chart with number of upcoming events</li>
  </ul>
</ul>
