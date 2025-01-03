import {
    type RouteConfig,
    route, layout, prefix,
} from "@react-router/dev/routes";

export default [
    // * matches all URLs, the ? makes it optional so it will match / as well
    layout("./infrastructure/views/layouts/AuthLayout.tsx", [
        route("/dashboard", "./infrastructure/views/pages/DashboardPage.tsx"),

        ...prefix('michelle', [
            route("", "./infrastructure/views/pages/MichellePage.tsx"),
        ]),

    ]),
    route("/login", "./infrastructure/views/pages/LoginPage.tsx"),
    route("*?", "catchall.tsx"),
] satisfies RouteConfig;
