
(function(window, angular) {
	var module = angular.module("ngRemove", []);
	module.directive("ngRemove", [function () {
		return {
			restrict: "A",
			compile: function (tElem, tAttrs) {
				tElem.replaceWith(tElem.html());
			}
		};
	}]);
})(window, window.angular);