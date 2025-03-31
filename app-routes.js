app.config(function($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginController"
        })
        .when("/booksearch", {
            templateUrl: "booksearch.html",
            controller: "bookController"
        })
        .when("/databinding", {
            templateUrl: "databinding.html",
            controller: "dataController"
        })
        .otherwise({
            redirectTo: "/login"
        });
});
