---
title: Getting started with prompts for {% data variables.copilot.copilot_chat_short %} on {% data variables.product.github %}
intro: 'Explore example prompts to ask {% data variables.copilot.copilot_chat_short %} about code, repositories, pull requests, and more.'
versions:
  feature: copilot
shortTitle: Get started with chat
contentType: how-tos
category:
  - Author and optimize with Copilot
---

<a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 mb-3 no-underline">
    <span>Chat with {% data variables.product.prodname_copilot_short %} on {% data variables.product.github %}</span> {% octicon "link-external" height:16 aria-label:"link-external" %}
</a>

{% data variables.copilot.copilot_chat_short %} responds differently depending on where you are on {% data variables.product.github %}. The following examples show the kinds of questions you can ask in each context.

## General software questions

* {% prompt %}tell me about nodejs web server frameworks{% endprompt %}
* {% prompt %}how can I create an Express app{% endprompt %}
* {% prompt %}what is the best way to update an npm package{% endprompt %}

## Repository questions

Navigate to a repository to ask about its purpose, structure, code, or history. {% data variables.copilot.copilot_chat_short %} grounds its answers in the actual files and symbols in the repository, so you can get a high-level overview and then ask follow-up questions within the same context.

* {% prompt %}What is the main purpose of this repo?{% endprompt %}
* {% prompt %}Give me an overview of how this project is structured.{% endprompt %}
* {% prompt %}How do I set up and run this project locally?{% endprompt %}
* {% prompt %}Where is rate limiting implemented in our API?{% endprompt %}
* {% prompt %}What was the last merged PR by USERNAME{% endprompt %}

## File and code questions

Open a file or select specific lines, then ask about them.

* {% prompt %}Explain this file.{% endprompt %}
* {% prompt %}How could I improve this code?{% endprompt %}
* {% prompt %}Write a unit test for this method.{% endprompt %}

## Pull request questions

Navigate to a pull request to ask about changes, reviews, or failing workflows.

* {% prompt %}Summarize the changes in this PR.{% endprompt %}
* {% prompt %}What's the purpose of this file?{% endprompt %}
* {% prompt %}Tell me why this job failed{% endprompt %}
* {% prompt %}What did {% data variables.product.prodname_copilot_short %} change in this PR and why?{% endprompt %}
* {% prompt %}What did {% data variables.product.prodname_copilot_short %} validate before opening this PR?{% endprompt %}

## Debugging questions

Navigate to a failed workflow run, a pull request with a failing check, or paste a stack trace to get help diagnosing and fixing the problem.

* {% prompt %}Why did this workflow run fail?{% endprompt %}
* {% prompt %}Explain this stack trace and suggest a fix.{% endprompt %}
* {% prompt %}Which change in this PR most likely caused the failing test?{% endprompt %}

## Security alert questions

Navigate to a {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_secret_scanning %}, or {% data variables.product.prodname_dependabot %} alert to ask about it.

* {% prompt %}How would I fix this alert?{% endprompt %}
* {% prompt %}Which line of code is this alert referencing?{% endprompt %}

## Issue, discussion, and commit questions

Navigate to any issue, discussion, or commit and ask {% data variables.copilot.copilot_chat_short %} about it.

* {% prompt %}What is the purpose of this issue?{% endprompt %}
* {% prompt %}What is the expected output of this commit?{% endprompt %}
