# Gumtree AU Front-end Technical Test

This test is designed to simulate implementing a feature based on a design mock and requirements.

An application framework based on `create-react-app` has been provided to you, please work within this framework.

Please pay close attention to the requirements outlined below.

## Getting Started
* run `npm install` to install the required dependencies.
* run `npm run start` to start the development server.
* You will now have a development node server running and a blank page open in your browser at http://localhost:3000/
* You can begin implementing your component(s) in `src` directory with `App.jsx` as the application entry point. 
* You will *not* need to modify any of the existing application outside of the `src` directory.

## Task

* Implement a collapsible, multi-panel, item information component.
* Ensure the finished product matches the provided design mock (see `design-mock.png`).
* Please stick to the defined scope. *A functional solution that meets the minimum requirements is preferred to an over-engineered solution which is incomplete*.

### Technical Requirements
* Must use React.
* Must not use third party plugins for functionality.
* Must not use a third party CSS framework (Bootstrap, Material, etc.).
* All content must come from the provided `public/data/content.json` file (Do not modify this file).
* Javascript must pass modified air-bnb linting rules (run with `npm run lint` and see `.eslintrc` for modified rules).

### Product Requirements
* Prev/Next buttons must correctly cycle through the content panels.
* The Up/Down toggle in the header must correctly collapse/expand the content.
* Feature must be responsive and work correctly at all screen sizes.
* Feature must render correctly on latest version of Chrome.

### Other Considerations
* Re-usability.
* Accessibility.
* Performance.
* SEO.
