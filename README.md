# Programming Basics: Logical Operators
# True or False? 

### Instructions
- work in `solution.js`
#### 1. What type? 
* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
**Questions: Print out the number of the correct answer in the Terminal (one by one)** 
* Which of the following is used to compare the VALUE of two variables/values?
1.  =         
2.  ==          
3.  ===
4.  all of the above 
* Which of the following is used to compare the VALUE and TYPE of two variables/values?
5.  =         
6.  ==          
7.  ===         
8.  none of the above 
* Which of the following is used to ASSIGN a value to a variable?
9.  =         
10.  ==          
11.  ===         
12.  const 

#### 2. Not
* Complete the following ternary code to print out 'good evening' using 'myVar':
```javascript
let myVar = true;

console.log( .............. ? 'good morning' : 'good evening' );
```

#### 3. Short Circuit
* Complete the following code by filling the spaces with '&&' or '||' to get the value that fits the variable's name:
(PS: these values will always return false: `false` , `0`, `''`)

```javascript

let firstName = '' .... 'John' .... 0
let emptyStr  = '' .... false .... 'Hello World'
let zero  = '' .... false .... 0
let seven = 75 .... 'nine' .... 7

console.log(firstName,zero,emptyStr,seven);
```