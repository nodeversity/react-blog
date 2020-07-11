This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose 
This is meant to be a proof-of-concept application using the new hook-based ReactJS app dev style (for UI component creation) and the Context API for state management.


## Tech Used:
* [ReactJS 16.9](https://reactjs.org)
* [react-router-dom](https://www.npmjs.com/package/axios): For app routing
* [Axios](https://www.npmjs.com/package/axios): For  remote API calls

## App Structure
I have divided the main app's codebase (inside the `src` directory) to allow for DRYness ("don't repeat yourself") and preserve the sanity of a developer and the enable a new developer to easily learn how to create a react app using hooks and the Context API (for state management).

These main sub-directories that hold the codebase for the app include:

* `index.js`: This is the main file where the app's context data is constructed, the main/global Provider component initialized and the `initialState` created. These are then used to wrap the main/root App component (in App.js) using the exported `AppProvider` component.

* `/api`: This holds the custom Axios object (in the `index.js` file) and the API Services that call the actual 'backend' endpoints (graciously provided by [http://jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com)) . These two API services are in the `PostApi.js` and `CommentApi.js` files.

* `components`: This is where the UI components for the application are. I have sub-divided them into the `layout` components (which contain 'global' UI elements) and `blog` components (which are the main blogging app's UI elements)

* `contextData`: These hold the codebase that helps the app interact with Reacts's Context API to enable management of component state/data across the app (i.e 'globally') without having to pass these down through the component hierarchy. 

The sub-directories herein (i.e inside the `/contextData` dir) are:

* `/actions`: These hold the ACTION types (aka 'scenarios' in the `actions/types` sub-folder)

* `/reducers`: These contain the reducers for the posts (in `postReducer.js`), the comments (in `commentReducer.js`) and the root/main/global AppReducer (in `AppReducer.js`)


## Additional Resources:
* [JSONPlaceholder.typicode.com](https://JSONPlaceholder.typicode.com): For making CRUD calls against a faux (but functional) API server.

## Running this App
* `npm start`: To start the development server
* `npm run build`: To create a production-ready 'build' ready for deployment. This will be in a new `build` directory adjacent to the dev workspace.

### Caveat:
* This app is a (very basic) proof-of-concept and work-in-progress. So, please, study it to gain some insight, but don't 'copy-and-paste' into production code! Por Favor! :)
* Please, excuse any typos, grammatical errors, etc. I didn't put on my 'Editor's Hat' while writing these docs! :)

## Contact Me
If you are reading this, you can contact me with offers, comments or suggestions. I am available on these platforms:

## Resources:
For more resources on Frontend web development, ReactJS and more, please, see:
* [DevRoom on NodeVersity.com](https://nodeversity.com/dev): For tutorials
* [Developer Guides](https://nodeversity.com/versity/guides): For detailed developer guides on subject matter tech and frameworks like ReactJS, etc.
* [Fluent React](https://fluentreact.com): For my recent course **React Web Development** using Hooks, the Context API and modern JavaScript.

* [Muhammad Jalloh on Twitter](https://twitter.com/nodesultan)
* [Muhammad Jaloh on LinkedIn](https://linkedin.com/in/muhammadjalloh)
* [NodeVersity](https://nodeversity.com/)
