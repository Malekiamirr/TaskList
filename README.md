# Task List App

This task list application allows you to organize your daily tasks into three different categories: "To Do," "Doing," and "Done." It provides a simple and intuitive user interface for managing your tasks efficiently.

## Features

- **Accurate UI Implementation:** The application has been meticulously designed and developed to ensure a visually pleasing and user-friendly experience.

- **Task Management:** You can easily add, move, and remove tasks between different columns (To Do, Doing, and Done) to keep track of your tasks' status.

- **Local Storage:** The app utilizes local storage to persist your tasks even after refreshing the page or closing the browser. Your tasks are safe and accessible whenever you need them.

## Libraries and Packages Used

- [React Icons](https://react-icons.github.io/react-icons/): A library that provides a collection of popular icons for use in your React application.

- [UUID](https://www.npmjs.com/package/uuid): A package for generating universally unique identifiers (UUIDs) to ensure unique task IDs.

## Installation and Setup

1. Clone the repository: `git clone https://github.com/your-username/TaskList`
2. Navigate to the project directory: `cd TaskList`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## My opinion about Best Practice in React

- **Use JSDoc Comments:** Incorporate JSDoc comments directly in your component files to provide descriptions of component props, their types, and any relevant details. This is especially useful when other developers need to use or modify your components.

- **Write Clear Component Names:** Choose descriptive and meaningful names for your components. This makes it easier for team members to understand the purpose of each component at a glance.
- **Create a Separate Documentation Folder:** Set up a dedicated folder in your project for component documentation. Within this folder, create Markdown files for each component.
- **Update Documentation Continuously:** As your project evolves, ensure that you keep the documentation up to date. When you make changes to a component, update the documentation to reflect those changes.

### Coordination in a Development Team

1.  **Version Control (Git/GitHub):** Use version control to manage code changes. Collaborate with team members through branches, pull requests, and code reviews.
2.  **Task Management:** Use a project management tool like Trello, Asana, or Jira to track tasks and assign them to team members. Ensure clear task descriptions and priorities.
3.  **Communication:** Maintain open and clear communication channels within the team. Regular stand-up meetings, chat platforms (e.g., Slack), and video conferencing can facilitate communication.
4.  **Code Reviews:** Implement a code review process where team members review each other's code. Provide constructive feedback and suggestions for improvements.
