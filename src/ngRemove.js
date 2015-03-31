
(function(window, angular) {
	var module = angular.module("ngRemove", []);
	module.directive("ngRemove", [function () {
		return {
			restrict: "A",
			link: function (scope, elem) {
				elem.replaceWith(elem.contents());
			}
		};
	}]);
})(window, window.angular);