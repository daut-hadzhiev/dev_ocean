import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { List } from './features/list/List';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import { getRoutePath } from './app/utils';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
    queryCache: new QueryCache(),
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>

        <div className="App-container">
            <BrowserRouter>
                <Switch>
                    <Route path={getRoutePath("/list")}>
                        <List />
                    </Route>
                    <Route path={getRoutePath("/counter")}>
                        <Counter />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    </QueryClientProvider>
  );
}

export default App;
