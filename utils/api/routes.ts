import EnvHelper from "@/helpers/env-helper";

export default class ApiRoutes {

    private static _baseRoute = EnvHelper.serverUrl;
    private static _apiVersion = "1.0";
    private static buildRoute = (route: string) => `${ApiRoutes._baseRoute}/api/${ApiRoutes._apiVersion}${route}`;

    static authenticate = ApiRoutes.buildRoute("/user/authenticate");
    static signup = ApiRoutes.buildRoute("/user");
    static updateToken = ApiRoutes.buildRoute("/user/reauthenticate");
}