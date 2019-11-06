function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};


>undefined


Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};


>ƒ () {
  console.log('Hi! I\'m ' + this.name.first + '.');
}


function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}


>undefined


Object.getOwnPropertyNames(Teacher.prototype)

>["constructor"]0: "constructor"length: 1__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object

Object.getOwnPropertyNames(Person.prototype)

>(2) ["constructor", "greeting"]

Person.prototype.greeting

>ƒ () {
  console.log('Hi! I\'m ' + this.name.first + '.');
}

Teacher.prototype.greeting
>undefined

Teacher.prototype= Object.create(Person.prototype);
>Person {}

Object.getOwnPropertyNames(Teacher.prototype)
>[]length: 0__proto__: Array(0)

Teacher.prototype.constructor
>ƒ Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false,
    writable: true });
>Person {constructor: ƒ}constructor: ƒ Teacher(first, last, age, gender, interests, subject)arguments: nullcaller: nulllength: 6name: "Teacher"prototype: Personconstructor: ƒ Teacher(first, last, age, gender, interests, subject)arguments: nullcaller: nulllength: 6name: "Teacher"prototype: Personconstructor: ƒ Teacher(first, last, age, gender, interests, subject)arguments: nullcaller: nulllength: 6name: "Teacher"prototype: Personconstructor: ƒ Teacher(first, last, age, gender, interests, subject)arguments: nullcaller: nulllength: 6name: "Teacher"prototype: Personconstructor: ƒ Teacher(first, last, age, gender, interests, subject)arguments: nullcaller: nulllength: 6name: "Teacher"prototype: Person {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM57:1[[Scopes]]: Scopes[2]__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM57:1[[Scopes]]: Scopes[2]__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM57:1[[Scopes]]: Scopes[2]__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM57:1[[Scopes]]: Scopes[2]__proto__: Object__proto__: ƒ ()[[FunctionLocation]]: VM57:1[[Scopes]]: Scopes[2]__proto__: Object

Teacher.prototype.constructor
>ƒ Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype.greeting = function() {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

 console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};
>ƒ () {
  var prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender ==…

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
>undefined

teacher1.greeting()
>Hello. My name is Mr. Griffiths, and I teach mathematics.
