---
title: Learning to debug with GitHub Copilot
intro: 'Identify and fix errors in your code by asking {% data variables.product.prodname_copilot %} for help.'
topics:
  - Copilot
versions:
  fpt: '*'
shortTitle: Debug with Copilot
---

Finding and fixing bugs in code can be frustrating, especially when you're a new developer. Thankfully, tools like {% data variables.product.prodname_copilot %} can quickly identify and squash bugs, letting you focus on more creative, interesting work.

## Prerequisites

The examples in this article assume you're using {% data variables.product.prodname_copilot %} to debug a Python project in {% data variables.product.prodname_vscode %} ({% data variables.product.prodname_vscode_shortname %}). To follow the examples, you need to:
* Complete [Set up {% data variables.product.prodname_vscode %} with {% data variables.product.prodname_copilot_short %}](https://code.visualstudio.com/docs/copilot/setup-simplified) in the {% data variables.product.prodname_vscode %} documentation.
* [Download Python](https://www.python.org/downloads/).
* Install the [Python extension for {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

## Learning to debug through examples

There are two main situations you'll encounter when you try to run bugged code:

* Your code exits before it finishes running, and you receive an error message.
* Your code runs without errors, but the output is different from what you expected.

Thankfully, {% data variables.product.prodname_copilot_short %} can help debug your code in both situations. To learn how, work through the following examples.

### Debugging an error with {% data variables.product.prodname_copilot %}

When you run bugged code, you'll often receive an error message. The message tells you the file and line where the error occurred and briefly describes what went wrong. However, error messages can be confusing. To fully understand and fix the bug, we can ask {% data variables.product.prodname_copilot_short %} for help.

Let's try this out with the [`bugged_dice_battle.py`](https://github.com/new2code/debug-with-copilot/blob/main/bugged_dice_battle.py) file in the [`new2code/debug-with-copilot`](https://github.com/new2code/debug-with-copilot) repository. This program simulates a dice battle between two players using the following code:

```python
# Import the random module to easily generate pseudo-random numbers
import random

# Define a function that simulates a dice battle between two players
def dice_battle():

    # Generate random numbers between 1 and 6 for each player's die roll
    die_1 = random.randint(1, 6)
    die_2 = random.randint(1, 6)

    # Compare the die rolls and return the result as a string
    if die_1 > die_2:
        return "Player 1 rolled a " + die_1 + " and Player 2 rolled a " + die_2 + ". Player 1 wins!"
    elif die_1 < die_2:
        return "Player 1 rolled a " + die_1 + " and Player 2 rolled a " + die_2 + ". Player 2 wins!"
    else:
        return "Player 1 rolled a " + die_1 + " and Player 2 rolled a " + die_2 + ". It's a tie!"

print(dice_battle())
```

First, we need to create a local copy of the example repository:

1. [Start cloning the new2code/debug-with-copilot repository](vscode://vscode.git/clone?url=https://github.com/new2code/debug-with-copilot) in {% data variables.product.prodname_vscode_shortname %}. <!-- markdownlint-disable-line GHD003 -->
1. Choose a location to save the repository on your computer, then click **Select as Repository Destination**.
1. When prompted, open the repository.

Now that we've cloned the repository, let's run `bugged_dice_battle.py` to see the output:

1. Open the Command Palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type `Terminal: Create New Terminal` and press <kbd>Enter</kbd>.
1. In the terminal tab, paste the following command.

    Windows:

    ```shell copy
    py bugged_dice_battle.py
    ```

    Mac or Linux:

    ```shell copy
    python bugged_dice_battle.py
    ```

1. Press <kbd>Enter</kbd> to run the program.

Unfortunately, we get some error text in our terminal ending with the following message:

> TypeError: can only concatenate str (not "int") to str

To understand what this means, press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>I</kbd> (Windows/Linux) or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> (Mac) to **open {% data variables.product.prodname_copilot_chat_short %}**, then paste and send the following prompt:

```text copy
Explain in depth why my code produces the following error and how I can fix it:

TypeError: can only concatenate str (not "int") to str
```

{% data variables.product.prodname_copilot_short %} will respond that the error occurs because we are trying to concatenate the integers `die_1` and `die_2` to strings, and you can only concatenate strings to strings. It will then provide an updated version of our code that fixes the bug by using the `str()` function to convert the integers to strings before concatenating them.

### Debugging an incorrect output with {% data variables.product.prodname_copilot %}

Sometimes, bugged code runs without throwing any errors, but the output is clearly incorrect. In this case, debugging can be more difficult because {% data variables.product.prodname_vscode_shortname %} can't tell you the location or description of the bug.

For these "invisible" bugs, {% data variables.product.prodname_copilot_short %} is particularly useful. Let's get some hands-on experience using the [`bugged_factorial_finder.py`](https://github.com/new2code/debug-with-copilot/blob/main/bugged_factorial_finder.py) file in the [`new2code/debug-with-copilot`](https://github.com/new2code/debug-with-copilot) repository. The Python program is supposed to calculate a factorial, and it contains the following code:

```python
# Initialize the factorial result to 1
factorial = 1

# Initialize the input number to 6
number = 6

# Loop from 1 to number (inclusive) and multiply factorial by each number
for i in range(1, number + 1):
    factorial *= factorial * i

print(f"The factorial of {number} is {factorial}")
```

Since we've already cloned the repository locally, let's run `bugged_factorial_finder.py` to see the output:

1. In the terminal you created earlier, paste the following command.
    Windows:

    ```shell copy
    py bugged_factorial_finder.py
    ```

    Mac or Linux:

    ```shell copy
    python bugged_factorial_finder.py
    ```

1. Press <kbd>Enter</kbd> to run the program.

Unfortunately, the code isn't working as expected. We want it to return `720`, the correct value of 6 factorial, but the output is much higher than that.

To understand what went wrong, with the `bugged_factorial_finder.py` file open in {% data variables.product.prodname_vscode_shortname %}, open {% data variables.product.prodname_copilot_chat_short %} and send the following prompt:

```text copy
Why is the output of this code so much higher than expected? Please explain in depth and suggest a solution.
```

{% data variables.product.prodname_copilot_short %} will point out that, because we're using the `*=` operator, we're actually multiplying `factorial` by both `i` **and** `factorial`. In other words, we're multiplying by an extra `factorial` for each iteration of the loop.

To fix this error, {% data variables.product.prodname_copilot_short %} will suggest code that removes the extra `factorial` from the equation, or that changes the `*=` operator to `=`.

{% note %}

Did you successfully debug `bugged_factorial_finder.py`?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Debugging your own project

Now that you've practiced debugging some simple programs with {% data variables.product.prodname_copilot_short %}, you can use the same methodologies to find and fix bugs hiding in your own work.

For example, to debug an error message generated by your code, send {% data variables.product.prodname_copilot_short %} the following prompt:

```text copy
Explain in depth why my code produces the following error and how I can fix it:

YOUR-ERROR-MESSAGE
```

Otherwise, if you're debugging an incorrect output, ask {% data variables.product.prodname_copilot_short %} why the output is incorrect and how you can fix it. For the best results, provide as much context as possible on how the output differs from your expectations.

With these tactics, you're well equipped to start squashing bugs in your project!

## Next steps

As you continue coding, you'll likely encounter specific problem scenarios and errors that are difficult to debug. For a list of potential issues and example {% data variables.product.prodname_copilot_chat_short %} prompts to fix them, see [AUTOTITLE](/copilot/copilot-chat-cookbook/debugging-errors).
