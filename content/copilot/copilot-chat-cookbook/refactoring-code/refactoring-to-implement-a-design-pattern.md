---
title: Refactoring to implement a design pattern
shortTitle: Design patterns
intro: '{% data variables.product.prodname_copilot_chat_short %} can suggest design patterns that you can use to improve your code.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/refactoring-code/refactoring-to-implement-a-design-pattern
versions:
  feature: copilot
category:
  - 'Refactoring code'
complexity:
  - Intermediate
octicon: rocket
topics:
  - Copilot
---

Code that doesn’t follow established design patterns (like Singleton, Factory, or Observer) can lead to issues like tight coupling, lack of flexibility, or duplicated code.

{% data variables.product.prodname_copilot_chat_short %} can help you use appropriate design patterns to make your code more flexible and maintainable. For example, it can recommend converting repetitive instantiations into a Factory pattern, or using the Observer pattern to decouple tightly connected classes.

> [!NOTE] The responses described in this article are examples. {% data variables.product.prodname_copilot_chat_short %} responses are non-deterministic, so you may get different responses from the ones shown here.

## Example scenario

This JavaScript code creates three `Person` objects, each with `name` and `age` properties. It then uses the name of a person to retrieve and print their age.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var people = {};

function addPerson(name, age) {
  people[name] = new Person(name, age);
}

function getAge(name) {
  if (people[name]) {
    console.log(name + " is " + people[name].age + " years old.");
  } else {
    console.log("Person not found.");
  }
}

addPerson("Ana", 30);
addPerson("Mario", 25);
addPerson("Louise", 40);

getAge("Mario");
```

## Example prompt 1

`What design patterns could improve this code? Don't show me code examples.`

## Example response 1

{% data variables.product.prodname_copilot_short %} suggests the following patterns:

* **Singleton pattern:** to ensure that there is only one instance of the `people` object.
* **Factory pattern:** to create a factory for creating `Person` objects.
* **Module pattern:** to encapsulate the `people` object and related functions within a module to avoid polluting the global namespace.

## Example prompt 2

You can now ask {% data variables.product.prodname_copilot_short %} to implement the pattern that you feel is most appropriate.

`Refactor this code using the module pattern`

## Example response 2

```javascript
const PersonModule = (function() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const people = {};

  function addPerson(name, age) {
    people[name] = new Person(name, age);
  }

  function getAge(name) {
    if (people[name]) {
      console.log(name + " is " + people[name].age + " years old.");
    } else {
      console.log("Person not found.");
    }
  }

  return {
    addPerson,
    getAge
  };
})();

PersonModule.addPerson("Ana", 30);
PersonModule.addPerson("Mario", 25);
PersonModule.addPerson("Louise", 40);

PersonModule.getAge("Mario");
```

The module pattern improves code organization, enhances data privacy, and reduces the risk of naming conflicts, making the code more maintainable and scalable.

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
