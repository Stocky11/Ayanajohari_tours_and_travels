import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/search-results" component={SearchResultPage} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
