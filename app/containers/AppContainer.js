var React = require('react');
var ReactRouter = require('react-router');
var HashRouter = ReactRouter.HashRouter;
var Match = ReactRouter.Match;
var Miss = ReactRouter.Miss;
var Link = ReactRouter.Link;
var Home = require('../components/Home');
var ForeCastContainer = require('../containers/ForeCastContainer');
var NoMatch = require('../components/NoMatch');

function AppContainer() {
    return (
        <HashRouter>
            <div>
                <Link to="/forecast">forecast</Link>
                <Match exactly pattern="/" component={Home} />
                <Match exactly pattern="/forecast" component={ForeCastContainer} />
                <Miss component={NoMatch} />
            </div>
        </HashRouter>
    );
};

module.exports = AppContainer;