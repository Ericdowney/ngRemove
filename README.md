# ngRemove
AngularJS directive to remove an element from the DOM but keep the element's children. ngRemove is an attribute directive.  It can be placed on any element and that element will be removed from the DOM, however, the children of the element will still be present.

#### Usage

```html
<div ng-remove>
  <div>1</div>
  <div>2</div>
  <span>3</span>
</div>
```
becomes
```html
  <div>1</div>
  <div>2</div>
  <span>3</span>
```

This is useful in situations where you need an element with a specific scope, like ng-repeat, but you don't want the repeat element to show up in the DOM or in your css styles.

```html
<!-- Outer div is a flex box with a flex direction row -->
<div class="flex">
  <div ng-repeat="item in [0,1,2,3]>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</div>
```
This will show up as 
```
1
2
3
```
when you want your page to show up as 
```
1 2 3
```
