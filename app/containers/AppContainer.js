var React = require("react");
var Router = require("react-router-dom");
var MemoryRouter = Router.MemoryRouter;
var Route = Router.Route;
var Switch = Router.Switch;
var Home = require("../components/Home");
var Header = require("../components/Header");
var NoMatch = require("../components/NoMatch");
var ForecastContainer = require("../containers/ForecastContainer");
var DetailContainer = require("../containers/DetailContainer");

function AppContainer() {
    return (
        <MemoryRouter>
            <div className="mdl-layout mdl-js-layout">
                <Header />
                <main className="mdl-layout__content fullView">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/forecast/:cityName" component={ForecastContainer} />
                        <Route path="/detail/:cityName" component={DetailContainer} />
                        <Route component={NoMatch} />
                    </Switch>
                </main>
            </div>
        </MemoryRouter>
    );
};

module.exports = AppContainer;