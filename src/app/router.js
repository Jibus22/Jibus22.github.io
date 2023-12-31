import Home from "./views/Home";
import About from "./views/About";
import Skillset from "./views/Skillset";
import Projects from "./views/Projects";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);

  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

export const navigateTo = (url) => {
  if (url !== location.pathname) {
    history.pushState(null, null, url);
    router();
  }
};

export const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/skillset", view: Skillset },
    { path: "/projects", view: Projects },
  ];

  // Test each route for a potential match.
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  await view.render("#content");
};
