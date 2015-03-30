app.directive("ngRemove", ["$compile", function ($compile) {
	return {
		restrict: "A",
		link: function (scope, elem) {
			var innerHTML = $compile(elem[0].innerHTML)(scope);
			elem.replaceWith(innerHTML);
		}
	};
}]);