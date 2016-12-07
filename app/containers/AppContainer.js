var React = require('react');
var ReactRouter = require('react-router');
var HashRouter = ReactRouter.HashRouter;
var Match = ReactRouter.Match;
var Miss = ReactRouter.Miss;
var Home = require('../components/Home');
var Header = require('../components/Header');
var NoMatch = require('../components/NoMatch');
var ForecastContainer = require('../containers/ForecastContainer');
var DetailContainer = require('../containers/DetailContainer');

function AppContainer() {
    return (
        <HashRouter>
            <div className="mdl-layout mdl-js-layout">
                <Header />
                <main className="mdl-layout__content fullView">
                    <Match exactly pattern="/" component={Home} />
                    <Match exactly pattern="/forecast/:cityName" component={ForecastContainer} />
                    <Match exactly pattern="/detail/:cityName" component={DetailContainer} />
                    <Miss component={NoMatch} />
                </main>
            </div>
        </HashRouter>
    );
};

module.exports = AppContainer;