import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigator from './navigation/AppNavigator';

const queryClient = new QueryClient();

function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    )
}
export default App