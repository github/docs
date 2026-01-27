---
title: Choosing the right AI tool for your task
shortTitle: AI tools
intro: 'Understand {% data variables.product.github %}''s AI tools and how they can be used to help develop software.'
versions:
  fpt: '*'
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/guides-on-using-github-copilot/choosing-the-right-ai-tool-for-your-task
  - /copilot/tutorials/choosing-the-right-ai-tool-for-your-task
  - /copilot/concepts/choosing-the-right-ai-tool-for-your-task
  - /copilot/concepts/ai-tools
contentType: concepts
category: 
  - Learn about Copilot
---

## Overview

The use of AI tools is increasingly becoming a standard part of a software developer's daily workflow. To be competitive in the job market, it's important to know which AI tools to use for each task you face as a developer.

{% data variables.product.github %}'s AI tools assist with every phase of the software development lifecycle (SDLC):

* **Planning**:
  * **{% data variables.copilot.copilot_chat_short %}** can help you brainstorm and identify the best technologies for your project.
  * **{% data variables.copilot.copilot_chat_short %}** can create issues to help track your ideas.
* **Code creation**:
  * **{% data variables.product.prodname_copilot_short %} inline suggestions** help add code as you type.
  * **{% data variables.copilot.next_edit_suggestions_caps %}** ({% data variables.release-phases.public_preview %}) predicts the next edit you are likely to make and suggests a completion for it.
  * **{% data variables.copilot.copilot_chat_short %}** can answer questions and offer suggestions in a conversational environment.
  * You can assign **{% data variables.copilot.copilot_coding_agent %}** to an open issue and it will automatically raise a pull request to address the necessary changes.
* **Reviews**:
  * **{% data variables.copilot.copilot_code-review_short %}** gives you feedback in your favorite IDE, or as a pull request review on {% data variables.product.github %}.
* **Testing**:
  * **{% data variables.copilot.copilot_chat_short %}** can help you write and debug tests.
* **Deployment**:
  * **{% data variables.copilot.copilot_chat_short %}** can help you configure continuous integration and continuous deployment (CI/CD) pipelines.
* **Operation**:
  * **{% data variables.copilot.copilot_coding_agent %}** can raise pull requests for open issues.
  * **{% data variables.copilot.copilot_chat_short %}** can help with tasks you're working on yourself.

## Planning

During the planning phase, you define the goals, scope, and requirements of your project, setting the direction for development by outlining what needs to be built and how it will be achieved.

On {% data variables.product.github %}, use **{% data variables.product.prodname_copilot_short %}-powered issue creation** ({% data variables.release-phases.public_preview %}) to streamline the tracking of your ideas. Provide a short natural language prompt (or upload an image), and {% data variables.product.prodname_copilot_short %} will generate a structured issue for you.

Once you've chosen an issue to address, **{% data variables.copilot.copilot_chat_short %}** can help you brainstorm ideas for your project and learn about the various tools, libraries, and resources you might need. You can ask {% data variables.copilot.copilot_chat_short %} generalized questions about the project you're envisioning to get suggestions on a path forward. For example:

`I'd like to build an web app that helps users track their daily habits and provides personalized recommendations. Can you suggest features and technologies I could use?`

## Creation

During the creation phase, you'll write and refine the code for your application. This is where you can bring the project to life by implementing features, fixing bugs, and iterating on the codebase.

{% data variables.product.prodname_copilot_short %} provides auto-complete style **coding suggestions** as you code in your favorite IDE or on {% data variables.product.github %}, helping you draft and refine your code faster. You can write code directly or describe your intent in natural language using comments in your IDE, and {% data variables.product.prodname_copilot_short %} will generate relevant suggestions.

With **{% data variables.copilot.next_edit_suggestions %}** ({% data variables.release-phases.public_preview %}), {% data variables.product.prodname_copilot_short %} predicts related edits based on the changes you’re actively making. For example, if you rename a variable or update a function’s parameters, it suggests corresponding updates throughout your code. This helps maintain consistency and reduces the chance of errors.

### Using {% data variables.copilot.copilot_chat_short %} in ask mode

Use {% data variables.copilot.copilot_chat_short %} in **ask mode** as your pair programmer to get help with coding tasks, understand tricky concepts, and improve your code. You can ask it questions, get explanations, or request suggestions in real time.

* `Can you explain what this JavaScript function does? I'm not sure why it uses a forEach loop instead of a for loop.`

* `What’s the difference between let, const, and var in JavaScript? When should I use each one?`

### Using {% data variables.copilot.copilot_chat_short %} in edit mode

Use {% data variables.copilot.copilot_chat_short %} in **edit mode** when you want more granular control over the edits that {% data variables.product.prodname_copilot_short %} proposes. In edit mode, you choose which files {% data variables.product.prodname_copilot_short %} can make changes to, provide context to {% data variables.product.prodname_copilot_short %} with each iteration, and decide whether or not to accept the suggested edits.

* `Refactor the calculateTotal function to improve readability and efficiency.`

* `The login function is not working as expected. Can you debug it?`

* `Format this code to follow Python’s PEP 8 style guide.`

### Using {% data variables.copilot.copilot_chat_short %} in agent mode

In **agent mode**, {% data variables.copilot.copilot_chat_short %} can assist with automating repetitive tasks and managing your workflow directly within your project. Use it to create pull requests after you make code changes. You can also use it to run tests and linters in the background while you're working on your project.

* `Create a pull request for the recent changes in the user-auth module and include a summary of the updates.`

* `Run all tests and linters for the payment-processing module and provide a summary of any issues or errors found.`

## Reviews

The **review** phase ensures the quality and reliability of your code. It involves analyzing changes, identifying potential issues, and improving the overall structure and functionality of the codebase.

While you're coding in your IDE, ask {% data variables.product.prodname_copilot_short %} to:

* **Review a selection of changes:** Highlight specific parts of your code and ask {% data variables.product.prodname_copilot_short %} for an initial review. This is great for quick feedback on smaller edits.
* **Review all changes:** Request a deeper review of all your changes in a file or a project. {% data variables.product.prodname_copilot_short %} will analyze your work and provide suggestions for improvements.

When you're ready to get feedback from others on the {% data variables.product.github %} website, first **assign {% data variables.product.prodname_copilot_short %} as a reviewer** on your pull request. It will automatically add comments to highlight areas where you can improve code quality or identify potential bugs before human review.

## Testing

The testing phase validates that your application works as intended. This phase involves writing and running tests to catch bugs, ensure functionality, and maintain code quality before deployment.

**{% data variables.copilot.copilot_chat_short %}** can assist by generating unit and integration tests, debugging failures, and suggesting additional test cases to ensure comprehensive coverage. Here are some example prompts:

* `Write unit tests for this function to calculate the factorial of a number. Include edge cases like 0 and negative numbers.`

* `How do I run these tests using Python's unittest framework?`

* `Write integration tests for the deposit function in the BankAccount class. Use mocks to simulate the NotificationSystem.`

* `What additional tests should I include to ensure full coverage for this module?`

## Deployment

The deployment phase involves preparing your code for production and ensuring a smooth release.

**{% data variables.copilot.copilot_chat_short %}** can help you configure deployment scripts, set up CI/CD pipelines, and troubleshoot issues. Here are some example prompts:

* `Write a deployment script for a Node.js application using GitHub Actions to deploy to an AWS EC2 instance.`

* `Set up a GitHub Actions workflow to build, test, and deploy a Python application to Heroku.`

* `Analyze this deployment log and suggest why the deployment failed.`

## Operation

During the operation phase, the focus is on maintaining and monitoring your application in production to ensure it runs smoothly and meets user expectations. This phase often involves tasks like debugging production issues, optimizing performance, and ensuring system reliability.

You can use the **{% data variables.copilot.copilot_coding_agent %}** as an autonomous agent that can help maintain and improve your application in production. Assign a {% data variables.product.github %} issue to {% data variables.product.prodname_copilot_short %}, and it will autonomously explore the repository, identify potential fixes, and create a pull request with the proposed changes. Then it will automatically request a review from you.

For issues you're tackling yourself, use **{% data variables.copilot.copilot_chat_short %}** for help analyzing logs, debugging issues, and suggesting optimizations. For example:

* `Analyze this error log and suggest possible causes for the issue.`

* `Write a script to monitor the memory usage of this application and alert when it exceeds a threshold.`

* `How can I optimize the database queries in this code to improve performance?`

## Next steps

Before you start your next task, take a moment to identify the right tool to make your work faster and more efficient.

{% note %}

Do you feel prepared to identify the right AI tool for your next task?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}
