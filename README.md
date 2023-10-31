```markdown
# Hadz Error Handler

`hadz-error-handler` is a custom error boundary component for React that helps you handle and display errors gracefully within your application.

## Installation

You can install `hadz-error-handler` using npm:

```bash
npm install hadz-error-handler
```

## Usage

Wrap your application with the `ErrorBoundary` component to capture and handle errors. This component will display an error message when an error occurs within its children. You can also provide a custom error message to be displayed.

```jsx
import React from 'react';
import ErrorBoundary from 'hadz-error-handler';

function App() {
  return (
    <ErrorBoundary
      action={(error) => {
        // Define the action to take on error, like reporting it
        // to a server or displaying a user-friendly error message.
      }
    >
      {/* Your application content */}
    </ErrorBoundary>
  );
}

export default App;
```

## Customization

You can customize the error handling behavior by providing an `action` prop to the `ErrorBoundary` component, which specifies the action to be taken on an error. Modify the `componentDidCatch` method in the component to handle error reporting or logging.

```jsx
<ErrorBoundary
  action={(error) => {
    // Define the action to take on error, like reporting it
    // to a server or displaying a user-friendly error message.
  }
>
  {/* Your application content */}
</ErrorBoundary>
```

## Custom Error Message

You can also provide a custom error message to be displayed when an error occurs by passing the `customError` prop:

```jsx
<ErrorBoundary
  action={(error) => {
    // Define the action to take on error, like reporting it
    // to a server or displaying a user-friendly error message.
  }
  customError={<div>Error: Something went wrong.</div>}
>
  {/* Your application content */}
</ErrorBoundary>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Hady Abi Rizk

## Contributing

Feel free to contribute by submitting issues and pull requests.

## Acknowledgments

- Inspired by the need for a simple error boundary component.
```