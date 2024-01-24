# Exercises

## Exercises Level 1

1. What is HTTP request?
```
An HTTP request is a message sent by a client, usually a web browser, to a server to request resources or to trigger an action
```
2. What are the most common HTTP requests?
```
En yaygın HTTP istekleri get post put delete ve head'dir.
```
3. What is fetch?
```
Fetch is a JavaScript API used to make HTTP requests in web browsers. 
```
4. What is axios?
```
Axios is a simple promise-based HTTP client for the browser and node.js. It is a small package with a very extensible interface, providing a simple and convenient way to make HTTP requests.
```
5. What is the difference between fetch and axios?
```
Browser support: Fetch is built into modern web browsers and is supported by all major browsers, including Chrome, Firefox, Safari, and Edge. Axios, on the other hand, is not built into browsers and must be installed as a separate library.
Node.js support: Axios supports both the browser and node.js environments, while Fetch is primarily designed for use in the browser.
Request cancellation: Axios supports request cancellation, while Fetch does not.
Interceptors: Axios supports interceptors, which allow you to intercept and modify requests and responses before they are handled by the rest of the application. Fetch does not have a built-in interceptor mechanism, but you can use middleware or other libraries to achieve similar functionality.
Automatic data transformation: Axios automatically transforms request and response data to JSON, while Fetch does not.
Error handling: Axios provides more detailed error messages and handles network errors more gracefully than Fetch.
Size: Axios is larger than Fetch, with a larger bundle size and more dependencies.
```
6. Do you prefer fetch to axios for make HTTP requests?
```
I prefered fetch
```

## Exercises Level 2

1. Find the average metric weight and life span of cats in the following [API](https://api.thecatapi.com/v1/breeds). There are 67 breeds of cats in the API.

![Average cat weight and age](../images/average_cat_weight_and_age.png)

## Exercises Level 3

1. How many countries do have cat breeds?
2. Which country has the highest number of cat breeds?
3. Arrange countries in ascending order based on the number of cat breeds they have?