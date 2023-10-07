# Redner chid components & persist the render method invoked how many times

1. We want to show the counter how many time particular component is rendered.
2. When we reload the page then counter should update to zero.

## General solution(that people thik about general solution)

1. We will try to use localstorage to session storage for this purpose but we need code more for the same.

## Solution:

1. React functional component has the hooks that in built <a href="https://www.w3schools.com/react/react_useref.asp" _target="_blank" >hook</a> useRef() is used to persist the value between render.

2. This solution will show the render the child components
3. This will create the custom hook in react

## Use callback hook

1.  One reason to use useCallback <a href="https://www.w3schools.com/react/react_usecallback.asp" 
    _target="_blank" >hook</a>is to prevent a component from re-rendering unless its props have changed.
