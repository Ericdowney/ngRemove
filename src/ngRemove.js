
(function(window, angular) {
	var module = angular.module("ngRemove", []);
	module.directive("ngRemove", ["$compile", function ($compile) {
		return {
			restrict: "A",
			link: function (scope, elem) {
				elem.replaceWith( $compile(elem[0].innerHTML)(scope) );
			}
		};
	}]);
})(window, window.angular);