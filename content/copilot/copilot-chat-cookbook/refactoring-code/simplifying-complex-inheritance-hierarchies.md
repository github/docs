---
title: Simplifying complex inheritance hierarchies
shortTitle: Simplify inheritance hierarchies
intro: '{% data variables.product.prodname_copilot_chat_short %} can help you to refactor code to avoid classes with multiple layers of inheritance.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/refactoring-code/simplifying-complex-inheritance-hierarchies
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

Deep inheritance hierarchies, or improper use of inheritance, can lead to code that is hard to maintain, making it difficult to follow relationships between classes, or to extend them without causing breakage.

{% data variables.product.prodname_copilot_chat_short %} can suggest refactoring inheritance-based designs into more flexible composition-based designs (favoring composition over inheritance). It can also recommend applying patterns like Strategy or Decorator to make the system more extensible without adding complexity to the inheritance structure.

## Example scenario

The following C# code has a deep inheritance hierarchy where each class builds on the previous one. The result is a long chain of inheritance that makes it difficult to know what properties each class has.

A multi-level inheritance hierarchy like this can be difficult to understand, modify, and extend.

```csharp
public class Employee
{
    public string Name { get; set; }
    public int EmployeeID { get; set; }
}

public class Manager : Employee
{
    public int NumberOfTeams { get; set; }
}

public class SeniorManager : Manager
{
    public string Region { get; set; }
}

public class Director : SeniorManager
{
    public int NumberOfDepartments { get; set; }
}

public class VicePresident : Director
{
    public string Division { get; set; }
}

public class President : VicePresident
{
    public string Company { get; set; }
}
```

## Example prompt

In this situation you might decide to use a parent `Employee` class whose properties other classes should inherit, but to avoid any other inheritance by defining all other properties separately for each class.

`Refactor this code so that classes only inherit the properties of the Employee class. All of the other properties that each class currently inherits should instead be declared independently in each class definition.`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} suggests the following code:

```csharp
public class Employee
{
    public string Name { get; set; }
    public int EmployeeID { get; set; }
}

public class Manager : Employee
{
    public int NumberOfTeams { get; set; }
}

public class SeniorManager : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
}

public class Director : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
    public int NumberOfDepartments { get; set; }
}

public class VicePresident : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
    public int NumberOfDepartments { get; set; }
    public string Division { get; set; }
}

public class President : Employee
{
    public int NumberOfTeams { get; set; }
    public string Region { get; set; }
    public int NumberOfDepartments { get; set; }
    public string Division { get; set; }
    public string Company { get; set; }
}
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
