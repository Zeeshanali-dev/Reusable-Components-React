# Testing Setup

To ensure the quality and reliability of our React components, we utilize a set of powerful testing tools and libraries. Below is a summary of the essential libraries included in our project and their purposes:

## Key Testing Libraries

1. **`@testing-library/dom`**
   - **Purpose**: A core library that provides utilities for interacting with the DOM during testing. It is used to query and manipulate the DOM in a way that simulates user interactions.
   - **Key Features**:
     - Querying elements (e.g., `getByText`, `getByRole`)
     - Simulating events (e.g., clicks, typing)
   
2. **`@testing-library/react`**
   - **Purpose**: A React-specific library that builds on `@testing-library/dom`. It offers additional utilities tailored for testing React components.
   - **Key Features**:
     - Rendering React components (`render`)
     - React-specific querying methods
     - Handling asynchronous rendering and updates

3. **`@testing-library/user-event`**
   - **Purpose**: Enhances user interaction simulation by providing more realistic and user-like event simulations compared to `fireEvent`.
   - **Key Features**:
     - Typing, clicking, selecting, and other user actions
     - Complex interaction handling, such as filling out forms

4. **`jest`**
   - **Purpose**: A comprehensive testing framework that includes a test runner, assertion library, and more. It's the backbone of our testing suite, orchestrating the execution of our tests and providing powerful tools for writing and organizing them.
   - **Key Features**:
     - Snapshot testing
     - Mocking and spies
     - Code coverage reporting

## Installation

To set up the testing environment, you need to install the following libraries:

```bash
npm install @testing-library/dom @testing-library/react @testing-library/user-event jest --save-dev
