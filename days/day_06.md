# Exercises Day 6 -Mapping Arrays

## [Home](../README.md) | [<< Day 5](day_05.md) | [Day 7 >>](day_07.md) 



### [Exercises:Level 1](#exercises-level-1)

1. Why you need to map an array ?
2. Why we need keys during mapping an array ?
3. What is the importance of destructuring your code ?
4. Does destructuring make your code clean and easy to read ?
### [Exercises Level 2](#exercises-level-2)

1. In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component
Number Generator

```
.number-generator {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
    grid-gap: 5px;
    padding: 10px;
   }
   
   .number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-weight: bold;
   }
   
   .even {
    background-color: green;
    color: white;
   }
   
   .odd {
    background-color: yellow;
    color: black;
   }
   
   .prime {
    background-color: red;
    color: white;
   }
   
   function NumberGenerator() {
 const isPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(num); i++)
      if(num % i === 0) return false;
    return num > 1;
 }

 const numbers = Array.from({length: 31}, (_, i) => i + 1);

 return (
    <div className="number-generator">
      {numbers.map((number) => (
        <div
          key={number}
          className={`number ${
            number % 2 === 0 ? 'even' : 'odd'
          } ${isPrime(number) ? 'prime' : ''}`}
        >
          {number}
        </div>
      ))}
    </div>
 );
}

```

2. Create the following hexadecimal colors using React component
Number Generator

### [Exercises:Level 3](#exercises-level-3)

1. Make the following bar group using the given data

## [Home](../README.md) | [<< Day 5](day_05.md) | [Day 7 >>](day_07.md) 



//____________________________________________________//

### Exercises Level 1

1. Why you need to map an array ?

```
In order to access the elements in the array and perform operations on them, we need to map the array
```

2. Why we need keys during mapping an array ?
```
 Keys should be given to the elements inside the array to give the elements a stable identity.
 ```
3. What is the importance of destructuring your code ?
```
To increase code readability and write less code
```
4. Does destructuring make your code clean and easy to read ?

```
Definitely
```
### [Exercises Level 2](#exercises-level-2)

1. In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component
Number Generator

2. Create the following hexadecimal colors using React component
Number Generator

### [Exercises Level 3](#exercises-level-3)

1. Make the following bar group using the given data

## [Home](../README.md) | [<< Day 5](day_05.md) | [Day 7 >>](day_07.md) 
