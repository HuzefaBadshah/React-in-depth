# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e Testing

# Theory Notes

- RTL is build upon DOM testing library
- Jest is javascript standard testinf library
- RTL uses jest behind the scenes
- Jest uses babel and more can be read form [here](https://jestjs.io/)

# Installation notes

- install RTL from [here](https://testing-library.com/docs/react-testing-library/intro/)
- install jest from [here](https://jestjs.io/docs/getting-started)
- Also we need to install babel dependencies for jest [here](https://jestjs.io/docs/getting-started#using-babel)
- Also we need to configure babel with babel.config.js as per docs.
- Since parcel already uses babel, writing babel.config will interfere with parcel's babel configuration.
- Therefore we need to create parcelrc file to ignore your [Babel config instead](https://parceljs.org/languages/javascript/#usage-with-other-tools).
- Do jest init with command npx jest --init
- [If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.](https://testing-library.com/docs/react-testing-library/setup#jest-28)
- Install @babel/preset-react - To make jsx work in test cases.
- Now include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom - So that methods such as "toBeInTheDocument" is available on assertion with "expect".
