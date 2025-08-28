
**Question 1:   What is the difference between - getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

###  Ans: 
**getElementById**

- Finds an element by its id.
- Since id should be unique, it always returns only one element.
  
**getElementsByClassName**
- Finds elements by a given class name.
- Returns all matches in an HTMLCollection (array-like, but not a real array).
  
**querySelector**
- Uses CSS selectors to find elements.
- Returns only the first matching element.
  
**querySelectorAll**
- Also uses CSS selectors, but returns all matching elements.
- The result is a NodeList (array-like and supports forEach).


##


**Question 2: How do you create and insert a new element into the DOM?**

### Ans:
To add a new element in the DOM, an element is first need to create any element using document.createElement(""). 
The newly created element is then added inside a parent element with appendChild("").



##



**Question 3: What is Event Bubbling and how does it work?**

### Ans:
Event bubbling is when an event starts at the element you click or interact with, and then moves up to its parent, 
then grandparent, and so on. This way, the same event can trigger handlers on multiple elements. It’s useful because 
you can put one listener on a parent to handle events from its children, but sometimes you may want to stop it from 
going up using stopPropagation()


##


**Question 4: What is Event Delegation in JavaScript? Why is it useful?**

### Ans:
Event delegation is a way where instead of adding separate listeners to many small elements, you add just one listener to 
their parent. When an event happens on a child, it bubbles up to the parent, and the parent’s listener can check which 
child triggered the event.

It is useful because it reduces code and memory usage. Also, if new child elements are added later, you don’t need to add 
separate listeners for them the parent’s listener will still work.


##


**Question 5: What is the difference between preventDefault() and stopPropagation() methods?**

### Ans:
**preventDefault()**
- Stops the default action of an element from happening.
- It doesn’t stop the event from bubbling, the event still travels up the DOM.
 
**stopPropagation()**
- Stops the event from bubbling up or capturing down the DOM.
- It doesn’t stop the default action of the element.
