## JavaScript

## jQuery
### Introducing jQuery
The setup almost always looks like the following:
```javascript
$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});
```
where "things to touch" is the HTML element you'll click on, hover over, or otherwise interact with, and "thing to affect" is the HTML element that fades away, change size, or undergoes some other transformation.  
  
Sometimes these elements are one and the same--you might hover over a <\div> to change its opacity. Ohter times you might interact with a separate element; for example, you might click on a button to resize a <\div>.
    
Sometimes if you want an effect to occur right away, without an event like .click() or .hover(), you'll skip the second line in the above:
```javascript
$(document).ready(function() {
    $('thingToAffect').effect();
})
```
  

### jQuery Fucntions

### Dynamic HTML
[Manipulating Elements](http://learn.jquery.com/using-jquery-core/manipulating-elements/)

