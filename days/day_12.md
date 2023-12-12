# Day 12 -  Forms

## Exercises Answers

- ### [Exercises:Level 1](#exercises-level-1)
- ### [Exercises:Level 2](#exercises-level-2)
- ### [Exercises:Level 3](#exercises-level-3)

### [Home](../README.md) | [<< Day 11](./day_11.md) | [Day 13>>](./day_13.md/) <hr>


## Exercises Level 1

1. What is the importance of form?
```
The main purpose of creating a form is to communicate and gather required information which should meet the expectations of the interested party.
```
2. How many input types do you know?

```js
<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />
```
3. Mention at least four attributes of an input element
```
type: This attribute specifies the type of input control to display. Some of the most common types include text, password, checkbox, radio, 
submit, reset, and file 

name: This attribute specifies the name of the input element. It is used to identify the input element when submitting the form 

value: This attribute specifies the initial value of the input element. It is used to pre-fill the input element with a value 

placeholder: This attribute specifies a short hint that describes the expected value of the input element. It is displayed in the input field before the user enters a value 
```
4. What is the importance of htmlFor?
```
Overall, the htmlFor attribute is an important part of HTML that helps to improve the accessibility and usability of web pages. By using the htmlFor attribute, you can create more accessible and user-friendly web pages that are easier for everyone to use.
```
5. Write an input type which is not given in the example if there is?
6. What is a controlled input?
```
The official documentation defines controlled inputs as: The React component that renders an element also controls what happens in that element on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled input.”
```
7. What do you need to write a controlled input?
```
checked : A boolean. For a checkbox input or a radio button, controls whether it is selected.
value : A string. For a text input, controls its text. (For a radio button, specifies its form data.)
```
8. What event type do you use to listen changes on an input field?
```
We can use onChange and submit events
```
9. What is the value of a checked checkbox?
```
The value of a checked checkbox is not the same as the value of the value attribute. Instead, the value of a checked checkbox is determined by the checked attribute. If the checked attribute is present, the value of the checkbox is considered to be “on” or “true”. If the checked attribute is not present, the value of the checkbox is considered to be “off” or “false”
```
10. When do you use onChange, onBlur, onSubmit?
```
The onChange event is triggered when the value of a form element changes. For example, it is triggered when you type in a text box or select a checkbox. This event can be used to retrieve and process the value of the form element.

The onBlur event is triggered when a form element goes out of focus. For example, it is triggered when exiting a text box. This event can be used to retrieve and process the value of the form element.

The onSubmit event is triggered when a form is submitted. For example, it is triggered when a user submits a form. This event can be used to process form data and send it to the server.
```
11. What is the purpose of writing e.preventDefault() inside the submit handler method?
```
The preventDefault() method is used to prevent the default action of an event from occurring. In the case of a form submission, the default action is to submit the form and reload the page. By calling preventDefault() inside the submit handler method, you can prevent the form from being submitted and the page from being reloaded.
```
12. How do you bind data in React? The first input field example is data binding in React.
```
In React, data binding is the process of synchronizing the state of a component with the user interface. There are two types of data binding in React: one-way data binding and two-way data binding.
```
13. What is validation?
```
Veri doğrulama, kullanıcı girişinin temiz, doğru ve kullanışlı olmasını sağlama sürecidir. Tipik doğrulama görevleri şunlardır: Kullanıcı gerekli tüm alanları doldurdu mu?
```
14. What is the event type you use to listen when an input changes?
```
We can use change event.
```
15. What are event types do you use to validate an input?
```

In addition to the input event, you can also use the change event to listen for changes in the input value. However, the change event is only fired when the value of the input element is committed, such as by pressing the enter key or selecting a value from a list of options 123.
```

## Exercises Level 2

1. Validate the form given above (a gif image or a video will be provided later). First try to validate without using any library then try it with [validator.js](https://www.npmjs.com/package/validator).

## Exercises Level 3

Coming ..


### [Home](../README.md) | [<< Day 11](./day_11.md) | [Day 13>>](./day_13.md/) <hr>
