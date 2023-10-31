# Hadz Error Handler

`hadz-error-handler` is a custom error boundary component for React that helps you handle and display errors gracefully within your application.

## Installation

You can install `hadz-error-handler` using npm:

```bash
npm install hadz-error-handler
```

## Usage

Wrap your application with the `ErrorBoundary` component to capture and handle errors. This component will display an error message when an error occurs within its children.

```jsx
import React from 'react';
import ErrorBoundary from 'my-error-handler';

function App() {
  return (
    <ErrorBoundary>
      {/* Your application content */}
    </ErrorBoundary>
  );
}

export default App;
```

## Customization

You can customize the error handling behavior by handling the error and reporting it within the `ErrorBoundary` component. Modify the `componentDidCatch` method in the component to handle error reporting or logging.

```tsx
class ErrorBoundary extends Component {
  componentDidCatch(error, info) {
    // Handle error logging or reporting here
  }
  // ...
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Hady Abi Rizk

## Contributing

Feel free to contribute by submitting issues and pull requests.

## Acknowledgments

- Inspired by the need for a simple error boundary component.

---