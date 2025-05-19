---
title: Storing prompts in GitHub repositories
shortTitle: Store prompts
intro: 'Store prompts directly in your GitHub repositories to leverage automated text summarization and other AI-driven functionalities.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
---

Prompts can be stored as files directly within GitHub repositories. This unlocks the ability to view your prompts in an organized UI, share them with non-technical stakeholders, and run seamless iterations and comparisons on adjustments to models and prompts.

## Benefits

* Easy integration with the new suite of AI development tools directly on GitHub.
* Simple and scalable from simple to complex use cases.
* Uses a widely supported format, compatible with existing tools.

## Supported file format

Store prompts in markdown files with optional YAML front matter.

The file can be located anywhere in your repository, but it **must have the extension `.prompt.md`**.

Example:

```yaml
---
name: Summarizer
description: Summarizes a given text
model: openai/gpt-4o
model_parameters:
  temperature: 0.5
---
system:
You are a text summarizer. Your only job is to summarize a given text to you.
user:
Summarize the given text:
<text>
{% raw %}{{text}}{% endraw %}
</text>
```

## Prompt structure

Prompts have two key parts:

* **Runtime information** (required)
  * Prompt templates (system, user, etc.) using simple {{variable}} placeholders
* **Development information** (optional)
  * Human-readable name and description
  * Model identifier and parameters
  * Sample data for testing and evaluations

## Limitations

You cannot store prompts for:

* Complex templating languages
* Proprietary or complex file formats (such as `.ghprompt`, or `.prompty`)
