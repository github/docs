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

Let's try this out with an example repository: [`new2code/debug-with-copilot`](https://github.com/new2code/debug-with-copilot).

#### Cloning the example repository

First, we need to create a local copy of the repository:

1. [Start cloning the new2code/debug-with-copilot repository](vscode://vscode.git/clone?url=https://github.com/new2code/debug-with-copilot) in {% data variables.product.prodname_vscode_shortname %}. <!-- markdownlint-disable-line GHD003 -->
1. Choose a location to save the repository on your computer, then click **Select as Repository Destination**.
1. When prompted, open the repository.

#### Running the bugged file

Now, let's run the [`bugged_dice_battle.py`](https://github.com/new2code/debug-with-copilot/blob/main/bugged_dice_battle.py) file. This program simulates a dice battle between two players.

1. In {% data variables.product.prodname_vscode_shortname %}, open and review the `bugged_dice_battle.py` file.
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

#### Debugging the file

To understand what this error means, [open {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}](vscode://GitHub.Copilot-Chat), then paste and send the following prompt: <!-- markdownlint-disable-line GHD003 -->

```text copy
Explain in depth why my code produces the following error and how I can fix it:

TypeError: can only concatenate str (not "int") to str
```

{% data variables.product.prodname_copilot_short %} will respond that the error occurs because we are trying to concatenate the integers `die_1` and `die_2` to strings, and you can only concatenate strings to strings.

It will also provide an **updated version of our code** that fixes the bug by using the `str()` function to convert the integers to strings before concatenating them. Practice the final step of debugging by applying {% data variables.product.prodname_copilot_short %}'s suggestion to the file.

### Debugging an incorrect output with {% data variables.product.prodname_copilot %}

Sometimes, bugged code runs without throwing any errors, but the output is clearly incorrect. In this case, debugging can be more difficult because {% data variables.product.prodname_vscode_shortname %} can't tell you the location or description of the bug.

For these "invisible" bugs, {% data variables.product.prodname_copilot_short %} is particularly useful. Let's get some hands-on experience with the other file in our example repository: `bugged_factorial_finder.py`. It's a Python program that's supposed to calculate a factorial.

#### Running the bugged file

First, let's run the program to see the incorrect output:

1. Open and review the `bugged_factorial_finder.py` file.
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

#### Debugging the file

To understand what went wrong, [open {% data variables.copilot.copilot_chat_short %}](vscode://GitHub.Copilot-Chat) and send the following prompt: <!-- markdownlint-disable-line GHD003 -->

```text copy
Why is the output of this code so much higher than expected? Please explain in depth and suggest a solution.
```

{% data variables.product.prodname_copilot_short %} will point out that, because we're using the `*=` operator, we're actually multiplying `factorial` by both `i` **and** `factorial`. In other words, we're multiplying by an extra `factorial` for each iteration of the loop.

To fix this error, {% data variables.product.prodname_copilot_short %} will suggest code that removes the extra `factorial` from the equation, or that changes the `*=` operator to `=`. Make that change now!

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

As you continue coding, you'll likely encounter specific problem scenarios and errors that are difficult to debug. For a list of potential issues and example {% data variables.copilot.copilot_chat_short %} prompts to fix them, see [AUTOTITLE](/copilot/copilot-chat-cookbook/debugging-errors).
