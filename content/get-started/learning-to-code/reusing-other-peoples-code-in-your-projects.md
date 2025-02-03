---
title: Reusing other people's code in your projects
intro: 'Increase your coding efficiency and knowledge by integrating existing code into your projects.'
shortTitle: Reuse people's code
versions:
  fpt: '*'
allowTitleToDifferFromFilename: true
---

One of the best things about open source software is the ability to reuse other people's code. Repurposing code helps you save time, discover new functionality, and learn other programming styles. There are two main ways to reuse code:
* **Copying and pasting a code snippet directly into your project.** If you're new to coding, this is the quickest way to start reusing code.
* **Importing a library into your project.** While this approach takes some time to learn, it's ultimately easier and more efficient. It's also a foundational skill for software development.

## Using other people's code snippets in your project

As you are learning to code, you might copy and paste other people's code snippets into your project. While using code snippets is a great way to learn to code and save time, there are a few key steps you should always take before copying another developer's code.

### 1. Finding and understanding a code snippet

Your first step is to choose a code snippet you want to reuse. To find eligible code, try [searching {% data variables.product.github %}](https://github.com/search). You can narrow your search with search qualifiers like `language:YOUR-SEARCH-LANGUAGE`.

For example, let's say you want to reuse Python code that calculates the factorial of a number. By searching {% data variables.product.github %} for `factorial language:python is:repository`, we find the [`new2code/python-factorial`](https://github.com/new2code/python-factorial) repository, which implements the calculator in [`factorial_finder.py`](https://github.com/new2code/python-factorial/blob/main/factorial_finder.py) using a loop:

```python
# Initialize the factorial result to 1
factorial = 1

# Initialize the input number to 6
number = 6

# Loop from 1 to number (inclusive) and multiply factorial by each number
for i in range(1, number + 1):
    factorial *= i

print(f"The factorial of {number} is {factorial}")
```

If you don't immediately understand a code snippet, you can ask {% data variables.product.prodname_copilot_short %} to explain it. In the menu bar at the top of the [`factorial_finder.py`](https://github.com/new2code/python-factorial/blob/main/factorial_finder.py) file, click {% octicon "copilot" aria-label="Ask Copilot about this file" %} to start a conversation about the file, then ask {% data variables.product.prodname_copilot_short %} to `Explain this program`.

  ![Screenshot of the {% data variables.product.prodname_copilot_short %} button, outlined in dark orange, at the top of the file view.](/assets/images/help/copilot/factorial-finder-copilot-button.png)

### 2. Understanding project licensing

Before you can reuse the code you've found, you need to understand its licensing. Licenses determine how you can use the code in a project, including your ability to copy, modify, and distribute that code.

You can find the license for a project in the "About" section of the main page of the repository. For example, we can see that the [`new2code/python-factorial`](https://github.com/new2code/python-factorial) repository is licensed under the MIT license. To read the license, click {% octicon "law" aria-hidden="true" %} **MIT license**.

  ![Screenshot of the main page of the new2code/python-factorial repository. In the right sidebar, "MIT license" is outlined in dark orange.](/assets/images/help/repository/license-info-python-factorial.png)

> [!NOTE] If the code you want to use is under a different license, use the license summaries in [Licenses](https://choosealicense.com/licenses/) to understand it.

We want to copy the entire `factorial_finder.py` file, so the MIT license indicates that we should include a copy of the license in our own project. At the top of your Python file, paste the license as a comment.

### 3. Using and modifying code snippets

Now that you understand the code and its licensing, you can paste the code snippet into your project. While you may be able to use the code as is, you'll often need to modify it for your specific use case.

For our factorial example, let's say we want to quickly calculate the factorials of 5, 7, 9, and 10. Instead of copying and pasting the entire program for each number, we can move our calculator into a function that takes a number as an argument.

To help us make these changes, let's [ask {% data variables.product.prodname_copilot_short %}](https://github.com/copilot) to suggest and explain an implementation. We can paste our current code into the chat window, then prompt {% data variables.product.prodname_copilot_short %} to `Wrap the Python code above in a function`. {% data variables.product.prodname_copilot_short %} will generate code that looks something like this:

```python copy
def calculate_factorial(number):
    # Initialize the factorial result to 1
    factorial = 1

    # Loop from 1 to number (inclusive) and multiply factorial by each number
    for i in range(1, number + 1):
        factorial *= i

    return factorial
```

With our new function, we can easily find the factorials of our numbers by adding the following code to our project, then running the Python program:

```python copy
print(calculate_factorial(5))
print(calculate_factorial(7))
print(calculate_factorial(9))
print(calculate_factorial(10))
```

Congratulations! You've successfully found, understood, and modified an example code snippet.

## Using code from libraries in your project

Using libraries is standard practice for developers. Libraries are essentially collections of code written by other developers to perform specific tasks. You can import libraries into your project to use the pre-written code, saving you time and effort.

In this section, we'll continue working with the Python factorial calculator example from the previous section. For reference, here's our current code:

```python copy
def calculate_factorial(number):
    # Initialize the factorial result to 1
    factorial = 1

    # Loop from 1 to number (inclusive) and multiply factorial by each number
    for i in range(1, number + 1):
        factorial *= i

    return factorial

print(calculate_factorial(5))
print(calculate_factorial(7))
print(calculate_factorial(9))
print(calculate_factorial(10))
```

### 1. Finding a library

Once you know what functionality you want to add to your project, you can search for a library with relevant code. {% data variables.product.prodname_copilot_chat_short %} is an easy way to search for libraries, since you can use natural language to describe exactly what you're looking for.

Returning to our factorial calculator, finding a factorial is a pretty common function, and there's a good chance someone included that function in an existing library. If we [ask {% data variables.product.prodname_copilot_short %}](https://github.com/copilot) `Is there a Python library with a function for calculating a factorial?`, {% data variables.product.prodname_copilot_short %} will tell us a factorial function is included in the [`math`](https://docs.python.org/3/library/math.html) module from the standard Python library.

### 2. Prioritizing security in your project

When you add a library or module to your project, you create what's called a dependency. Dependencies are pre-written code bundles that your project relies on to function correctly, and if they aren't carefully written or maintained, they can introduce security vulnerabilities to your work. Thankfully, there are some steps you can take to best protect your project.

#### Using popular libraries

Popular libraries are more likely to be secure because they are actively maintained and used by many developers. One good marker of popularity is the number of stars a repository has. If you can't find the {% data variables.product.github %} repository for a dependency, try [asking {% data variables.product.prodname_copilot_short %}](https://github.com/copilot) for help.

For example, for the `math` module, we can prompt {% data variables.product.prodname_copilot_short %} to `Find the GitHub repository containing the code for the math module in Python`. {% data variables.product.prodname_copilot_short %} will tell us that the `math` module is defined in [`python/cpython`](https://github.com/python/cpython), which has over 64,000 stars.

#### Enabling {% data variables.product.prodname_dependabot_alerts %} for your project

If enabled, {% data variables.product.prodname_dependabot_alerts %} are automatically generated when {% data variables.product.prodname_dependabot %} detects a security issue in your dependencies, helping you quickly fix vulnerabilities. {% data variables.product.prodname_dependabot %} is available for free on all open source {% data variables.product.github %} repositories.

To turn {% data variables.product.prodname_dependabot_alerts %} on, click the **Security** tab for your project's {% data variables.product.github %} repository. Next to {% data variables.product.prodname_dependabot_alerts %}, click **Enable {% data variables.product.prodname_dependabot_alerts %}**. You can access {% data variables.product.prodname_dependabot_alerts %} from the **{% data variables.product.prodname_dependabot %}** tab of the sidebar.

  ![Screenshot of the "Security" page of a repository. The "Security" tab, "{% data variables.product.prodname_dependabot %}" tab, and "Enable {% data variables.product.prodname_dependabot_alerts %}" button are all outlined in dark orange.](/assets/images/help/dependabot/learners-enable-dependabot.png)

### 3. Implementing code from a library

Now that you have taken steps to secure your work, you need to import the library into your project, then use its contents in your code. You can read the documentation for the library to learn how to do it yourself, or you can ask {% data variables.product.prodname_copilot_short %} to suggest and explain an implementation for you.

For our factorial program, we can [ask {% data variables.product.prodname_copilot_short %}](https://github.com/copilot) something like `How do I use the factorial function of the math module in my Python project?` {% data variables.product.prodname_copilot_short %} will then suggest a version of the following code:

```python copy
import math

# Calculate the factorial of a number
number = 5
result = math.factorial(number)

print(f"The factorial of {number} is {result}")
```

After you replace the existing code in your project with the above implementation, you've successfully reused code from a library in your example project!
