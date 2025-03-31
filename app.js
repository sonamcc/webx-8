var app = angular.module('myApp', []);

// Authentication Controller
app.controller('AuthController', function ($scope, AuthService) {
    $scope.user = {}; // Stores username & password input

    $scope.login = function () {
        var isValid = AuthService.authenticate($scope.user.username, $scope.user.password);

        if (isValid) {
            $scope.message = "✅ Login Successful!";
        } else {
            $scope.message = "❌ Invalid Username or Password!";
        }
    };
});

// Book Controller
app.controller('BookController', function ($scope) {
    $scope.books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Drama" },
        { title: "1984", author: "George Orwell", genre: "Dystopian" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Coming-of-age" },
        { title: "Moby Dick", author: "Herman Melville", genre: "Adventure" }
    ];
});