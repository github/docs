---
title: Debugging invalid JSON
shortTitle: Debug invalid JSON
intro: '{% data variables.product.prodname_copilot_chat_short %} can identify and resolve syntax errors or structural issues in JSON data.'
redirect_from:
  - /copilot/example-prompts-for-github-copilot-chat/debugging-errors/debugging-invalid-json
versions:
  feature: copilot
category:
  - 'Debugging code'
complexity:
  - Intermediate
octicon: bug
topics:
  - Copilot
---

When working with JSON data, you may encounter issues such as trailing commas, mismatched braces, or incorrect data types that make the JSON invalid. {% data variables.product.prodname_copilot_chat %} can help you debug and fix these errors by suggesting corrections to fix invalid JSON.

## Example scenario

Consider a scenario where an application consumes JSON data from an API, but the response fails to parse due to invalid formatting. You receive the error message:

```bash
Error: Parse error
----------------------^
Expecting 'STRING', 'NUMBER', 'NULL', 'TRUE', 'FALSE', '{', '[', got 'undefined'
```

Below is the JSON data that caused the error:

```json
{
  "location": "San Francisco",
  "current_weather": {
    "temperature": 18,
    "unit": "Celsius",
    "conditions": "Cloudy
  },
  "forecast": {
    "day": "Monday",
    "high": 22,
    "low": 15,
    "precipitation": 10
  }
}
```

## Example prompt

`Why is my JSON object invalid and how can I fix it?`

## Example response

{% data reusables.copilot.example-prompts.response-is-an-example %}

{% data variables.product.prodname_copilot_short %} might suggest that your JSON is invalid because it's missing a closing quote for the `conditions` value. Here is the corrected JSON:

```json
{
  "location": "San Francisco",
  "current_weather": {
    "temperature": 18,
    "unit": "Celsius",
    "conditions": "Cloudy"
  },
  "forecast": {
    "day": "Monday",
    "high": 22,
    "low": 15,
    "precipitation": 10
  }
}
```

In this example response, {% data variables.product.prodname_copilot_short %}'s suggestions include fixing the closing quote for the `conditions` value, which resolves the JSON parsing error.

## Further reading

{% data reusables.copilot.example-prompts.further-reading-items %}
