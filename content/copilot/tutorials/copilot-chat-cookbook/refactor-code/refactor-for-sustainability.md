---
title: Refactoring for environmental sustainability
shortTitle: Refactor for sustainability
intro: '{% data variables.copilot.copilot_chat_short %} can suggest ways to make code more environmentally friendly.'
versions:
  feature: copilot
category:
  - Refactoring code
complexity:
  - Simple
octicon: rocket
topics:
  - Copilot
contentType: tutorials
---

Code that is inefficient in its use of computational resources can lead to higher energy consumption, which has a negative impact on the environment. Examples of such code include algorithms with high time complexity, excessive memory usage, and unnecessary processing.

{% data variables.copilot.copilot_chat_short %} can help identify inefficient algorithms or resource-intensive operations in your code that contribute to higher energy consumption. By suggesting more efficient alternatives, it can help reduce the environmental impact of your software.

## Example scenario

The following Python code reads a large text file and counts the number of lines. However, it loads the entire file into memory, which can be inefficient for large files and lead to higher energy consumption. It also manually counts the lines instead of using built-in functions.

```python id=inefficient-code
def count_lines(filename):
    with open(filename, 'r') as f:
        data = f.read()
        lines = data.split('\n')
        count = 0
        for line in lines:
            count += 1
        return count

print(count_lines('largefile.txt'))
```

## Example prompt

Here is an example prompt you can use with {% data variables.copilot.copilot_chat_short %} to refactor the above code for better environmental sustainability:

```copilot copy prompt ref=inefficient-code
Refactor this code to improve its environmental sustainability by reducing memory usage and computational overhead.
```

## Example response

> [!NOTE] {% data variables.copilot.copilot_chat_short %} responses are non-deterministic, so you may get a different response from the one shown here.

{% data variables.product.prodname_copilot_short %} suggests using a generator expression to read the file line by line, which reduces memory usage. It also uses the built-in `sum` function to count the lines more efficiently.

```python
def count_lines(filename):
    with open(filename, 'r') as f:
        return sum(1 for _ in f)  # Efficiently counts lines without loading all into memory

print(count_lines('largefile.txt'))
```

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
