---
title: Storing prompts in GitHub repositories
shortTitle: Store prompts
intro: 'Store prompts directly in your GitHub repositories to leverage automated text summarization and other AI-driven functionalities.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
---

Prompts can be stored as files directly within {% data variables.product.github %} repositories. This unlocks the ability to view your prompts in an organized UI, share them with non-technical stakeholders, and run seamless iterations and comparisons on adjustments to models and prompts.

## Benefits

* Easy integration with the new suite of AI development tools directly on {% data variables.product.github %}.
* Simple and scalable from simple to complex use cases.
* Uses a widely supported format, compatible with existing tools.

## Supported file format

Store prompts in YAML files.

The file can be located anywhere in your repository, but _must have the extension `.prompt.yml` or `.prompt.yaml`._

Example:

``` yaml copy
name: Text Summarizer
description: Summarizes input text concisely
model: openai/gpt-4o-mini
modelParameters:
  temperature: 0.5
messages:
  - role: system
    content: You are a text summarizer. Your only job is to summarize text given to you.
  - role: user
    content: |
      Summarize the given text, beginning with "Summary -":
      <text>
      {% raw %}{{input}}{% endraw %}
      </text>
testData:
  - input: |
      The quick brown fox jumped over the lazy dog.
      The dog was too tired to react.
    expected: Summary - A fox jumped over a lazy, unresponsive dog.
evaluators:
  - name: Output should start with 'Summary -'
    string:
      startsWith: 'Summary -'
```

## Prompt structure

Prompts have two key parts:

* **Runtime information** (required)
  * Prompt templates (system, user, etc.) using simple {% raw %}`{{variable}}`{% endraw %} placeholders
* **Development information** (optional)
  * Human-readable name and description
  * Model identifier and parameters
  * Sample data for testing and evaluations
  * Data describing the evaluators themselves

## Limitations

You cannot store prompts for:

* Complex templating languages
* Proprietary or complex file formats (such as `.ghprompt`, or `.prompty`)
