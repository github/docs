# Templates for GitHub Docs content

You can copy any of these templates into a new Markdown file as the first step in creating a new article and opening a pull request.

- [Conceptual](#conceptual)
- [Referential](#referential)
- [Procedural](#procedural)
- [Quickstart](#quickstart)
- [Tutorial](#tutorial)
- [Language guide for GitHub Actions](#language-guide-for-github-actions)

## Conceptual

Use the [content model](/contributing/content-model.md#conceptual) for full instructions and examples on how to write conceptual content.

```
---
title: About [subject]
intro: 'Article intro. See tips for a great intro below.'
product: '{{ optional product callout }}'
versions:
---

<!-- Follow the guidelines in https://github.com/github/docs/blob/main/contributing/content-model.md#conceptual to write this article.-- >
<!-- Great intros give readers a quick understanding of what's in the article, so they can tell whether it's relevant to them before moving ahead. For more tips, see https://github.com/github/docs/blob/main/contributing/content-model.md#intro. -->
<!-- For product callout info, see https://github.com/github/docs/tree/main/content#product.-->
<!-- For product version instructions, see https://github.com/github/docs/tree/main/content#versions.-->
<!-- Remove these comments from your article file when you're done writing. -->

## A section here

<!-- Write one or two paragraphs about the main idea of your topic, as a summary. -->
<!-- Make sure you don't have any content that isn't preceded by a header, or it won't be linkable in our TOC. -->

## Another section here

<!-- Write one or two paragraphs about another element of your topic. -->
<!-- Keep adding headers and sections until you've completed your article.  -->

## Further reading

<!-- Optionally, include a bulleted list of related articles the user can reference to extend the concepts covered in this article. Consider linking to procedural articles or tutorials that help the user use the information in your article. -->

- "[Article title](article-URL)"
```

## Referential 

Use the [content model](https://github.com/github/docs/blob/main/contributing/content-model.md#referential) for full instructions and examples on how to write referential content.

```
---
title: Nouns describing your subject
intro: 'Article intro. See tips for a great intro below.'
product: '{{ optional product callout }}'
versions:
---

<!-- Follow the guidelines in https://github.com/github/docs/blob/main/contributing/content-model.md#referential to write this article.-- >
<!-- Great intros give readers a quick understanding of what's in the article, so they can tell whether it's relevant to them before moving ahead. For more tips, see https://github.com/github/docs/blob/main/contributing/content-model.md#intro. -->
<!-- For product callout info, see https://github.com/github/docs/tree/main/content#product.-->
<!-- For product version instructions, see https://github.com/github/docs/tree/main/content#versions.-->
<!-- Remove these comments from your article file when you're done writing -->

## A section here

<!-- Write one or two paragraphs about the main idea of your topic, as a summary. -->
<!-- Make sure you don't have any content that isn't preceded by a header, or it won't be linkable in our TOC. -->

## Another section here

<!-- Write one or two paragraphs about another element of your topic. -->
<!-- Keep adding headers and sections until you've completed your article.  -->

## Further reading

<!-- Optionally, include a bulleted list of related articles the user can reference to extend the concepts covered in this article. Consider linking to procedural articles or tutorials that help the user use the information in your article. -->

- "[Article title](article-URL)"
```

## Procedural 

Use the [content model](https://github.com/github/docs/blob/main/contributing/content-model.md#procedural) for full instructions and examples on how to write procedural content.

```
---
title: Start with a gerund
intro: 'Article intro. See tips for a great intro below.'
product: '{{ optional product callout }}'
versions:
---

<!-- Follow the guidelines in https://github.com/github/docs/blob/main/contributing/content-model.md#procedural to write this article.-- >
<!-- Great intros give readers a quick understanding of what's in the article, so they can tell whether it's relevant to them before moving ahead. For more tips, see https://github.com/github/docs/blob/main/contributing/content-model.md#intro. -->
<!-- For product callout info, see https://github.com/github/docs/tree/main/content#product.-->
<!-- For product version instructions, see https://github.com/github/docs/tree/main/content#versions.-->
<!-- Remove these comments from your article file when you're done writing -->

## Procedural section header here

<!-- Include prerequisite information or specific permissions information here. -->
<!-- Then write procedural steps following the instructions in https://github.com/github/docs/blob/main/contributing/content-model.md#procedural-steps. -->
<!-- Check if there's already a reusable string for the step you want to write in https://github.com/github/docs/tree/main/data/reusables. Tip: Look at the source file for a procedure located in the same area of the user interface to find reusables. -->

## Optionally, another procedural section here 

<!-- Keep adding procedures until you've finished writing your article. -->

## Further reading

<!-- Optionally, include a bulleted list of related articles the user can reference to extend the concepts covered in this article. Consider linking to procedural articles or tutorials that help the user use the information in your article. -->

- "[Article title](article-URL)"
```

## Quickstart 

Use the [content model](https://github.com/github/docs/blob/main/contributing/content-model.md#quickstart) for full instructions and examples on how to write quickstarts.

```
---
title: Quickstart title
intro: 'Article intro. Highlight that the guide is quick and to the point.'
versions:
---

<!-- Follow the guidelines in https://github.com/github/docs/blob/main/contributing/content-model.md#quickstart to write this article.-->
<!-- For product version instructions, see https://github.com/github/docs/tree/main/content#versions.-->
<!-- The entire quickstart should be about 600 words long or take about five minutes to read.-->
<!-- Remove these comments from your article file when you're done writing -->

## Introduction

<!-- Build on the quick phrasing above by:
- Clarifying the audience
- Clearly stating prerequisites and prior knowledge needed
- Stating what the user will accomplish or build-->

## Step one: Action the user will take

<!-- In one sentence, describe what the user will do in this step -->
<!-- Steps should break down the tasks the user will complete in sequential order -->
<!-- Avoid replicating conceptual information that is covered elsewhere, provide inline links instead. Only include conceptual information unique to this use case. -->

### Task chunk

<!-- A step may require the user to perform several tasks - break those tasks down into chunks, allowing the user to scan quickly to find their place if they navigated away from this screen to perform the task. -->
<!-- An example might be creating a PAT for the action to use and then storing it in secrets -->
<!-- For UI based tasks, include the button or options the users should click -->
<!-- If the task adds code, include the code in context (don't just show `needs: setup` show the entire `setup` and `dependent` jobs) -->

### Another task chunk

<!-- remove all of these comments when you're done -->

## Step 2: Do the next thing

<!-- Rinse and repeat, adding steps and tasks until the tutorial is complete -->

## Next steps

<!-- Provide a quick recap of what has been accomplished in the quick start as a means of transitioning to next steps. Include 2-3 actionable next steps that the user take after completing the quickstart. Always link to conceptual content on the feature or product. You can also link off to other related information on docs.github.com or in GitHub Learning Labs. -->
```

## Tutorial 

Use the [content model](https://github.com/github/docs/blob/main/contributing/content-model.md#tutorial) for full instructions and examples on how to write tutorials.

```
---
title: Tutorial title
intro: 'Article intro. See tips for a great intro below'
product: '{{ optional product callout }}'
versions:
---

<!-- Follow the instructions in https://github.com/github/docs/blob/main/contributing/content-model.md#quickstart to write this article.-->
<!-- Great intros clarify who the tutorial is intended for, state what the user will accomplish, and state the technologies that will be used.-->
<!-- For product callout info, see https://github.com/github/docs/tree/main/content#product.-->
<!-- For product version instructions, see https://github.com/github/docs/tree/main/content#versions.-->
<!-- Remove these comments from your article file when you're done writing -->

## Introduction

<!-- The tutorial introduction should include the following in a short paragraph:

- Clarify audience
- State prerequisites and prior knowledge needed
- State what the user will accomplish or build and the user problem it solves
- Link to an example of the project the user will complete -->

## Step 1: Action the user will take

<!-- In one sentence, describe what the user will do in this step -->
<!-- Steps should break down the tasks the user will complete in sequential order -->
<!-- Avoid replicating conceptual information that is covered elsewhere, provide inline links instead. Only include conceptual information unique to this use case. -->

### Task chunk

<!-- A step may require the user to perform several tasks - break those tasks down into chunks, allowing the user to scan quickly to find their place if they navigated away from this screen to perform the task. -->
<!-- An example might be creating a PAT for the action to use and then storing it in secrets -->
<!-- For UI based tasks, include the button or options the users should click -->
<!-- If the task adds code, include the code in context (don't just show `needs: setup` show the entire `setup` and `dependent` jobs) -->

### Another task chunk

<!-- remove all of these comments when you're done -->

## Step 2: Do the next thing

<!-- Rinse and repeat, adding steps and tasks until the tutorial is complete

<!-- remember to show code snippets in context -->

<!-- ```yaml
on:
  schedule:
    - cron:  "40 19 * * *"
``` -->

## Further reading

<!-- include a bulleted list of tutorials or articles the user can reference to extend the concepts taught in this tutorial -->

- "[Article title](article-URL)"
```

## Language guides for GitHub Actions

Use the [tutorial content model](hhttps://github.com/github/docs/blob/main/contributing/content-model.md#tutorial) for full instructions and examples on how to language and framework guides for GitHub Actions.

```
---
title: Guide title
intro: 'Article intro. See tips for a great intro below'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
---

<!-- 
  - Great intros clarify who the guide is intended for, state what the user will accomplish, and state the technologies that will be used. 
  - Intros are typically 1-3 sentence summaries, with a longer "Introduction" section that follows.
  - Remove these comments from your article file when you're done writing
-->

## Introduction

<!-- 
  The language guide introduction should include the following in a short paragraph:
  - Clarify audience.
  - State prerequisites and prior knowledge needed.
  - Should the user have read any other articles?
  - State what the user will accomplish or build and the user problem it solves.
-->

## Starting with the <language> workflow template

<!--
  Language guides typically walk through and build upon a starter workflow template. If that format doesn't work, you can include a boilerplate workflow.
  - Link to the GitHub Actions CI starter workflow as the boilerplate reference code and then walk through and build on that code in this guide: https://github.com/actions/starter-workflows/tree/master/ci
  - Provide instructions for adding the starter workflow template to a repository.
  - Include the starter template workflow code.
-->

## Running on different operating systems

<!--
  Include a brief overview of how to choose the runner environment. These should be alternatives to what operating system is presented in the starter workflow/boilerplate template.
-->

## Configuring the <language> version
<!--
  - Describe when and how to use available setup actions that configure the version of the language on the runner (ex. actions/setup-node).
  - How does the setup action configure the version and what happens when the version isn't supported in the environment. What is the default version, when no version is configured.
  - Include any additional features the setup action might provide that are useful to CI.
  - If applicable, provide examples of configuring exact versions or major/minor versions.
  - Include information about software already installed on GitHub-hosted runners or software configuration necessary to build and test the project. 
  - Provide examples of configuring build matrix strategies.
  - Link out to any docs about available software on the GitHub-hosted runners. (Ex. https://docs.github.com/en/actions/reference/software-installed-on-github-hosted-runners).
  - Include code samples.
-->

## Installing dependencies

<!--
  - Include example of installing dependencies to prepare for building and testing.
  - Are there any dependencies or scenarios where people might need to install packages globally?
  - Include examples of common package managers.
  - If the language is supported by GitHub Packages, include an example installing dependencies from GitHub.
  - Include code samples.
-->

## Caching dependencies

<!--
  Include an example of restoring cached dependencies. We'll want to link out to the article about caching for more information (https://docs.github.com/en/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows).
-->

## Building your code

<!--
  - Include any compile steps.
  - Include any test commands.
  - Note that you can use the same commands that your repository needs to build and test your code by simply replacing the commands in the `run` keyword.
  - Include any basic examples or commands specific to test frameworks.
  - Include any common databases or services that might be needed. If so, we can link out to the services guides in the docs (https://docs.github.com/en/actions/configuring-and-managing-workflows/using-databases-and-service-containers).
-->

## Packaging workflow data as artifacts

<!--
  This section can simply link out to https://docs.github.com/en/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts or provide additional information about which artifacts might be typical to upload for a CI workflow.
-->
```
