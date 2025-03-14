---
title: 'Improving code readability and maintainability'
shortTitle: Improve code readability
intro: '{% data variables.product.prodname_copilot_chat_short %} can suggest ways to make your code easier to understand and maintain.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/refactoring-code/improving-code-readability-and-maintainability
versions:
  feature: copilot
category:
  - 'Refactoring code'
complexity:
  - Simple
octicon: rocket
topics:
  - Copilot
---

Code with poor readability is difficult for other developers to maintain and extend. {% data variables.product.prodname_copilot_chat_short %} can help in a number of ways. For example, by:
* [Suggesting improvements to variable names](#improving-variable-names)
* [Avoiding sequential conditional checks](#avoiding-sequential-conditional-checks)
* [Reducing nested logic](#reducing-nested-logic)
* [Splitting large methods into smaller, more readable ones](#splitting-up-large-methods)

Documenting your code is another way to improve the maintainability of your code. For information about using {% data variables.product.prodname_copilot_chat_short %} to help you add useful comments to your code, see the example prompts in [Documenting code](/copilot/copilot-chat-cookbook/documenting-code).

> [!NOTE] The responses shown in this article are examples. {% data variables.product.prodname_copilot_chat_short %} responses are non-deterministic, so you may get different responses from the ones shown here.

## Improving variable names

Descriptive variable names and parameter names make it easier to understand their purpose.

### Example scenario

This JavaScript code logs a message about a person's age to the console. The abstract parameter names make it difficult to understand the purpose of the code.

```javascript
function logPersonsAge(a, b, c) {
  if (c) {
    console.log(a + " is " + b + " years old.");
  } else {
    console.log(a + " does not want to reveal their age.");
  }
}
```

### Example prompt

In the editor, select the function you want to change, then ask {% data variables.product.prodname_copilot_chat_short %}:

`Improve the variable names in this function`

### Example response

{% data variables.product.prodname_copilot_short %} suggests descriptive variable names.

```javascript
function logPersonAge(name, age, revealAge) {
  if (revealAge) {
    console.log(name + " is " + age + " years old.");
  } else {
    console.log(name + " does not want to reveal their age.");
  }
}
```

## Avoiding sequential conditional checks

`if...else` chains can be difficult to read, especially when they are long.

### Example scenario

This Python code prints the sound that various animals make, if defined, or "Unknown animal" if the animal type is not recognized. However, the chain of `if...else` statements makes the code inefficient and cumbersome.

```python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Bird(Animal):
    def speak(self):
        return "Tweet!"

def animal_sound(animal_type):
    if animal_type == "dog":
        return Dog().speak()
    elif animal_type == "cat":
        return Cat().speak()
    elif animal_type == "bird":
        return Bird().speak()
    else:
        return "Unknown animal"

print(animal_sound("dog"))
print(animal_sound("cat"))
print(animal_sound("bird"))
print(animal_sound("fish"))
```

### Example prompt

`Simplify this code. Avoid using if/else chains but retain all function return values.`

### Example response

{% data variables.product.prodname_copilot_short %} suggests using a dictionary to map the animal types to their corresponding classes.

```python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Bird(Animal):
    def speak(self):
        return "Tweet!"

def animal_sound(animal_type):
    animals = {
        "dog": Dog,
        "cat": Cat,
        "bird": Bird
    }
    animal_class = animals.get(animal_type, Animal)
    return animal_class().speak() if animal_class != Animal else "Unknown animal"

print(animal_sound("dog"))
print(animal_sound("cat"))
print(animal_sound("bird"))
print(animal_sound("fish"))
```

## Reducing nested logic

Deeply nested structures can make the code hard to follow, making it difficult to modify or extend the logic of the code in future.

### Example scenario

This Ruby code prints information about a user account based on three parameters. The use of nested `if...else` statements makes the code unnecessarily complex.

```ruby
def determine_access(user_role, has_permission, is_active)
  if user_role == "admin"
    if has_permission
      if is_active
        "Active admin account with full access."
      else
        "Inactive admin account."
      end
    else
      "Admin account lacks necessary permissions."
    end
  else
    "Access denied."
  end
end

puts determine_access("admin", true, true)
puts determine_access("admin", true, false)
puts determine_access("admin", false, true)
puts determine_access("user", true, true)
```

### Example prompt

`Rewrite this code to avoid the nested if/else statements`

### Example response

{% data variables.product.prodname_copilot_short %} suggests using guard clauses to handle the conditions early and return the appropriate messages.

```ruby
def determine_access(user_role, has_permission, is_active)
  return "Access denied." unless user_role == "admin"
  return "Admin account lacks necessary permissions." unless has_permission
  return "Inactive admin account." unless is_active

  "Active admin account with full access."
end

puts determine_access("admin", true, true)
puts determine_access("admin", true, false)
puts determine_access("admin", false, true)
puts determine_access("user", true, true)
```

## Splitting up large methods

It can be difficult to grasp exactly what a method or function does if it is too long, making it difficult to maintain. Methods or functions that perform multiple tasks may not be reusable in other contexts. It may also be difficult to test each task in isolation.

### Example scenario

This Java method processes a customer order and prints a message. It performs multiple tasks in a single method.

```java
public void processOrder(Order order) {
  if (order == null || order.getItems().isEmpty()) {
    throw new IllegalArgumentException("Order is invalid.");
  }

  double totalPrice = 0.0;
  for (Item item : order.getItems()) {
    totalPrice += item.getPrice() * item.getQuantity();
  }
  order.setTotalPrice(totalPrice);

  if (totalPrice > 0) {
    order.setStatus("Processed");
  } else {
    order.setStatus("Pending");
  }

  System.out.println("Order for customer " + order.getCustomerName() + " has been processed. Total price: " + totalPrice);
}
```

### Example prompt

`How could the processOrder method be refactored to be more useful and easier to maintain`

### Example response

{% data variables.product.prodname_copilot_short %} suggests breaking this method down into smaller, more focused methods.

```java
public void processOrder(Order order) {
    validateOrder(order);
    double totalPrice = calculateTotalPrice(order);
    updateOrderStatus(order, totalPrice);
    printOrderSummary(order, totalPrice);
}

private void validateOrder(Order order) {
    if (order == null || order.getItems().isEmpty()) {
        throw new IllegalArgumentException("Order is invalid.");
    }
}

private double calculateTotalPrice(Order order) {
    double totalPrice = 0.0;
    for (Item item : order.getItems()) {
        totalPrice += item.getPrice() * item.getQuantity();
    }
    order.setTotalPrice(totalPrice);
    return totalPrice;
}

private void updateOrderStatus(Order order, double totalPrice) {
    if (totalPrice > 0) {
        order.setStatus("Processed");
    } else {
        order.setStatus("Pending");
    }
}

private void printOrderSummary(Order order, double totalPrice) {
    System.out.println("Order for customer " + order.getCustomerName() + " has been processed. Total price: " + totalPrice);
}
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
