import React, { ReactNode, useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  action: (error:Error) => void;
  customError?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, action, customError }) => {
  const [errorState, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const componentDidCatch = (error: Error) => {
      setErrorState({ hasError: true, error });
      // Handle error logging or reporting here
      action(error)
    };

    window.addEventListener('error', (event: ErrorEvent) => {
      // Extract the Error object from ErrorEvent
      const error = event.error as Error;
      componentDidCatch(error);
    });

    return () => {
      window.removeEventListener('error', (event: ErrorEvent) => {
        const error = event.error as Error;
        componentDidCatch(error);
      });
    };
  }, []);

  if (errorState.hasError) {

    if (customError) return <>{customError}</>

    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{errorState.error?.toString()}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;