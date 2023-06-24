# Totoro
Its the (unofficial) database for Studio Ghibli films!

## Instructions
To start using the webapp on localhost, just run ``` npm i && npm run dev ```

## Tech Stack
Totoro is built entirely on React with Tailwind CSS, using Vite as the dev server
Packages used includes:
- React
- Vite
- React Router
- Tailwind CSS
- Axios
- Cypress

Information about the films are obtained from the [free Ghibli Film API](https://ghibliapi.vercel.app/#tag/Films)
This is a fully frontend webapp, so not backend code is needed.

## Functionalities
1. Overview Page containing all the Studio Ghibli Filmography (Paginated to 10 films a page)
2. Film details page for more detailed information of each film when you click on the films you are interested in
3. Search by title and/or year!

## Design Considerations / Notes
### User First
Focus was put on having larger poster thumbnails (```image```) because users are likely be able to spot the film they are looking for through the visuals faster than through reading the titles. 

Entire film card can be clicked to get into the film detail page instead of just the thumbnail due to past experiences of frustration of ambiguous click zones to get more information

When hovering the cursor over any part of the entire card, the user is brought to attention to both the clickability of the card and their current cursor position through a cursor change, highting of the card border, and dimming of the thumbnail on hover to 

Loading wheel was added while the app fetches the information from the Ghibli Film API or performing searches so that users have feedback that something is happening

Current page is highlited in the page navigation to allow user to know which page they are on at a glance

Page Navigation at the top and bottom of the list of films to allow for easy navigation without to much scrolling, and both locations are familiar regions where page navigations can be found in most websites

Routing between different pages in the webapp is done through React Router with the appropriate endpoint and URL parameters to allow for users with specific links to the pages they want to visit to be able to do so and share the link with their friends.

Certain terminologies from the object obtained from the API had been changed on the frontend to better reflect what the information is:
1. ```people``` -> Character
2. ```release_date``` -> Release Year
3. ```running_time``` ->  Length

### Search Logic
Search Term are broken down into tokens separated by a space (```' '```) and stored in an array.

Stop words are removed from search token array
- Stop words are common particles and conjuctions found in the movie titles
- Stop word in this case includes the following: ```exclusions = ['THE', 'OF', 'A', 'AN', 'FOR', 'BY', 'IN', 'AND'];```
- This is to prevent searching for "The Wind Rises" to return "Castle in The Sky" as well because both titles contain "the"

Both film and search tokens are converted to uppercase to allow case-insensitive search

Film titles (```title```) are broken down into tokens with stop words removed as well

Each film title token array is compared against the search token array, if at least one token matches, the film will be returned

If the film release date  (```release_date```) matches a search token, it will also be returned

Example:
Seach Term: "The Wind Rises 2002" 

Search Tokens after cleanup: ```[WIND, RISES, 2002]```

Search Results:
1. The Wind Rises (title match)
2. The Cat Returns (release year match)

This search logic allows for the most flexible search without returning unhelpful results.

### State Managaement?
No application state managers such as Redux was used in this application

All state is managed by React's built in component state and passed through props and callbacks. 

Centralised app-level state management is not needed because the data flow in this application is simple and easily trackable, mostly following the parent-to-child data flow restriction innate to React. Parent components that require information from their child are done through callbacks instead.

### API Issues (Missing ```people``` information)
Not every film have a valid list of ```people``` to display in the film detail page. 

For some films, the API return a generic link to retrieve the information all people in the database instead of specific links to retrieve information on the people specific to the films

As such, films without such information will have a "No information available currently." message shown instead.

### Disclaimers
2 components of the application are apapted from the FOSS Tailwind UI library Flowbite - the Search Bar and the Loading Wheel with some modifications to fit Totoro better

These components are taken from Flowbite due to their common nature but tediousness in creating.

## Testing
Testing is done on Cypress.
Run `npx cypress open` to start the test.
Disclaimer: some of the test may fail due to API call being too slow. Refreshing the test should make it ok.

## Credits
Banner image was obtained from https://studioghiblimovies.com/awesome-collection-of-my-neighbor-totoro-fan-art-and-artwork-fanart-friday/, original artist unknown.