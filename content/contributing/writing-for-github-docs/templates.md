---
title: Templates
intro: 'This article contains starter templates for the different content types used in {% data variables.product.prodname_docs %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
category:
  - Follow the style guide and content model
---

## Conceptual article template

Use the content model for full instructions and examples on how to write conceptual content. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/conceptual-content-type).

<!-- markdownlint-disable search-replace -->

```yaml
{% raw %}---
title: 'About <subject>'
shortTitle: '<subject>'
intro: 'Article intro. See tips for a great intro below.'
product: "optional product callout"
contentType: concepts
versions:
  - version
---

{% comment %}
- Follow the guidelines in https://docs.github.com/contributing/writing-for-github-docs/content-model#conceptual to write this article.
- Great intros give readers a quick understanding of what's in the article, so they can tell whether it's relevant to them before moving ahead. For more tips, see https://docs.github.com/contributing/writing-for-github-docs/content-model
- For product callout info, see https://github.com/github/docs/tree/main/content#product
- For product version instructions, see https://github.com/github/docs/tree/main/content#versioning
- Remove these comments from your article file when you're done writing.
{% endcomment %}

## A section here

{% comment %}
Write one or two paragraphs about the main idea of your topic, as a summary.
Make sure you don't have any content that isn't preceded by a header, or it won't be linkable in our table of contents.
{% endcomment %}

## Another section here

{% comment %}
Write one or two paragraphs about another element of your topic.
Keep adding headers and sections until you've completed your article.
{% endcomment %}

## Further reading

{% comment %}
Optionally, include a bulleted list of related articles the user can reference to extend the concepts covered in this article. Consider linking to procedural articles or tutorials that help the user use the information in your article.
{% endcomment %}

- [Article title](article-URL){% endraw %}
```

<!-- markdownlint-enable search-replace -->

## Reference article template

Use the content model for full instructions and examples on how to write reference content. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/reference-content-type).

<!-- markdownlint-disable search-replace -->

```yaml
{% raw %}---
title: Nouns describing your subject
shortTitle: <subject> # Max 31 characters
intro: 'Article intro. See tips for a great intro below.'
product: "{{ optional product callout }}"
contentType: reference
versions:
  - <version>
---

{% comment %}
Follow the guidelines in https://docs.github.com/contributing/writing-for-github-docs/content-model to write this article.-- >
Great intros give readers a quick understanding of what's in the article, so they can tell whether it's relevant to them before moving ahead. For more tips, see https://docs.github.com/en/contributing/style-guide-and-content-model/contents-of-a-github-docs-article#intro
For product callout info, see https://github.com/github/docs/tree/main/content#product
For product version instructions, see https://github.com/github/docs/tree/main/content#versioning
Remove these comments from your article file when you're done writing
{% endcomment %}

## A section here

{% comment %}
Write one or two paragraphs about the main idea of your topic, as a summary.
Make sure you don't have any content that isn't preceded by a header, or it won't be linkable in our table of contents.
{% endcomment %}

## Another section here

{% comment %}
Write one or two paragraphs about another element of your topic.
Keep adding headers and sections until you've completed your article.
{% endcomment %}

## Further reading

{% comment %}
Optionally, include a bulleted list of related articles the user can reference to extend the concepts covered in this article. Consider linking to procedural articles or tutorials that help the user use the information in your article.
{% endcomment %}

- [Article title](article-URL){% endraw %}
```

<!-- markdownlint-enable search-replace -->

## How-to article template

Use the content model for full instructions and examples on writing how-to content. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/how-to-content-type).

<!-- markdownlint-disable search-replace -->

```yaml
{% raw %}---
title: Start with a present participle
shortTitle: <subject> # Max 31 characters
intro: 'Article intro. See tips for a great intro below.'
product: "{{ optional product callout }}"
contentType: how-tos
versions:
  - <version>
---

{% comment %}
Follow the guidelines in https://docs.github.com/contributing/writing-for-github-docs/content-model to write this article.
Great intros give readers a quick understanding of what's in the article, so they can tell whether it's relevant to them before moving ahead. For more tips, see https://docs.github.com/contributing/writing-for-github-docs/content-model
For product callout info, see https://github.com/github/docs/tree/main/content#product
For product version instructions, see https://github.com/github/docs/tree/main/content#versioning
Remove these comments from your article file when you're done writing
{% endcomment %}

## Procedural section header here

{% comment %}
Include prerequisite information or specific permissions information here.
Then write procedural steps following the instructions in https://docs.github.com/contributing/style-guide-and-content-model/style-guide#procedural-steps.
Check if there's already a reusable string for the step you want to write in https://github.com/github/docs/tree/main/data/reusables. Look at the source file for a procedure located in the same area of the user interface to find reusables.
{% endcomment %}

## Optionally, another procedural section here

{% comment %}
Keep adding procedures until you've finished writing your article.
{% endcomment %}

## Further reading

{% comment %}
Optionally, include a bulleted list of related articles the user can reference to extend the concepts covered in this article. Consider linking to procedural articles or tutorials that help the user use the information in your article.
{% endcomment %}

- [Article title](article-URL){% endraw %}
```

<!-- markdownlint-enable search-replace -->

## Quickstart article template

Use the content model for full instructions and examples on how to write quickstarts. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/quickstart-content-type).

<!-- markdownlint-disable search-replace -->

```yaml
{% raw %}---
title: Quickstart title
shortTitle: <subject> # Max 31 characters
intro: 'Article intro. Highlight that the guide is quick and to the point.'
contentType: get-started
versions:
  - <version>
---

{% comment %}
Follow the guidelines in https://docs.github.com/contributing/writing-for-github-docs/content-model#quickstart to write this article.
For product version instructions, see https://github.com/github/docs/tree/main/content#versions.
The entire quickstart should be about 600 words long or take about five minutes to read.
Remove these comments from your article file when you're done writing
{% endcomment %}

## Introduction

{% comment %}
Build on the quick phrasing above by
- Clarifying the audience
- Clearly stating prerequisites and prior knowledge needed
- Stating what the user will accomplish or build
{% endcomment %}

## Step one: Action the user will take

{% comment %}
In one sentence, describe what the user will do in this step
Steps should break down the tasks the user will complete in sequential order
Avoid replicating conceptual information that is covered elsewhere, provide inline links instead. Only include conceptual information unique to this use case.
{% endcomment %}

### Task chunk

{% comment %}
A step may require the user to perform several tasks - break those tasks down into chunks, allowing the user to scan quickly to find their place if they navigated away from this screen to perform the task.
An example might be creating a {% endraw %}{% data variables.product.pat_generic %}{% raw %} for the action to use and then storing it in secrets
For UI based tasks, include the button or options the users should click
If the task adds code, include the code in context (don't just show `needs setup` show the entire `setup` and `dependent` jobs)
{% endcomment %}

### Another task chunk

## Step 2: Do the next thing

{% comment %}
Rinse and repeat, adding steps and tasks until the tutorial is complete
{% endcomment %}

## Next steps

{% comment %}
Provide a quick recap of what has been accomplished in the quick start as a means of transitioning to next steps. Include 2-3 actionable next steps that the user take after completing the quickstart. Always link to conceptual content on the feature or product. You can also link off to other related information on docs.github.com or in GitHub Skills.
{% endcomment %}{% endraw %}
```

<!-- markdownlint-enable search-replace -->

## Tutorial article template

Use the content model for full instructions and examples on how to write tutorials. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/tutorial-content-type).

<!-- markdownlint-disable search-replace -->

```yaml
{% raw %}---
title: Tutorial title
shortTitle: <subject> # Max 31 characters
intro: 'Article intro. See tips for a great intro below'
product: "{{ optional product callout }}"
contentType: tutorials
versions:
  - <version>
---

{% comment %}
Follow the instructions in https://docs.github.com/contributing/writing-for-github-docs/content-model#quickstart to write this article.
Great intros clarify who the tutorial is intended for, state what the user will accomplish, and state the technologies that will be used.
For product callout info, see https://github.com/github/docs/tree/main/content#product
For product version instructions, see https://github.com/github/docs/tree/main/content#versioning
Remove these comments from your article file when you're done writing
{% endcomment %}

## Introduction

{% comment %}
The tutorial introduction should include the following in a short paragraph -

- Clarify audience
- State prerequisites and prior knowledge needed
- State what the user will accomplish or build and the user problem it solves
- Link to an example of the project the user will complete
{% endcomment %}

## Step 1: Action the user will take

{% comment %}
In one sentence, describe what the user will do in this step
Steps should break down the tasks the user will complete in sequential order
Avoid replicating conceptual information that is covered elsewhere, provide inline links instead. Only include conceptual information unique to this use case.
{% endcomment %}

### Task chunk

{% comment %}
A step may require the user to perform several tasks - break those tasks down into chunks, allowing the user to scan quickly to find their place if they navigated away from this screen to perform the task.
An example might be creating a {% endraw %}{% data variables.product.pat_generic %}{% raw %} for the action to use and then storing it in secrets
For UI based tasks, include the button or options the users should click
If the task adds code, include the code in context (don't just show `needs: setup` show the entire `setup` and `dependent` jobs)
{% endcomment %}

### Another task chunk

## Step 2: Do the next thing

{% comment %}
Rinse and repeat, adding steps and tasks until the tutorial is complete
Remember to show code snippets in context
{% endcomment %}

## Further reading

{% comment %}
Include a bulleted list of tutorials or articles the user can reference to extend the concepts taught in this tutorial
{% endcomment %}

- [Article title](article-URL){% endraw %}
```

<!-- markdownlint-enable search-replace -->

## Language guides for GitHub Actions

Use the content model for full instructions and examples on how to write for {% data variables.product.prodname_docs %}. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/about-the-content-model).

<!-- markdownlint-disable search-replace -->

```yaml
{% raw %}---
title: Guide title
shortTitle: <subject> # Max 31 characters
intro: 'Article intro. See tips for a great intro below'
product: "{{ optional product callout }}"
contentType: tutorials
versions:
  - <version>
---

{% comment %}
- Great intros clarify who the guide is intended for, state what the user will accomplish, and state the technologies that will be used.
- Intros are typically 1-3 sentence summaries, with a longer "Introduction" section that follows.
- Remove these comments from your article file when you're done writing
{% endcomment %}

## Introduction

{% comment %}
The language guide introduction should include the following in a short paragraph -
- Clarify audience.
- State prerequisites and prior knowledge needed.
- Should the user have read any other articles?
- State what the user will accomplish or build and the user problem it solves.
{% endcomment %}

## Starting with the <language> workflow template

{% comment %}
Language guides typically walk through and build upon a workflow template. If that format doesn't work, you can include a boilerplate workflow.
- Link to the GitHub Actions CI workflow template as the boilerplate reference code and then walk through and build on that code in this guide - https://github.com/actions/starter-workflows/tree/main/ci
- Provide instructions for adding the workflow template to a repository.
- Include the starter template workflow code.
{% endcomment %}

## Running on different operating systems

{% comment %}
Include a brief overview of how to choose the runner environment. These should be alternatives to what operating system is presented in the workflow template/boilerplate template.
{% endcomment %}

## Configuring the <language> version

{% comment %}
- Describe when and how to use available setup actions that configure the version of the language on the runner (ex. actions/setup-node).
- How does the setup action configure the version and what happens when the version isn't supported in the environment. What is the default version, when no version is configured.
- Include any additional features the setup action might provide that are useful to CI.
- If applicable, provide examples of configuring exact versions or major/minor versions.
- Include information about software already installed on GitHub-hosted runners or software configuration necessary to build and test the project.
- Provide examples of configuring matrix strategies.
- Link out to any docs about available software on the GitHub-hosted runners. (Ex. https://docs.github.com/en/actions/reference/software-installed-on-github-hosted-runners).
- Include code samples.
{% endcomment %}

## Installing dependencies

{% comment %}
- Include example of installing dependencies to prepare for building and testing.
- Are there any dependencies or scenarios where people might need to install packages globally?
- Include examples of common package managers.
- If the language is supported by GitHub Packages, include an example installing dependencies from GitHub.
- Include code samples.
{% endcomment %}

## Caching dependencies

{% comment %}
Include an example of restoring cached dependencies. We'll want to link out to the article about caching for more information (https://docs.github.com/en/actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows).
{% endcomment %}

## Building your code

{% comment %}
- Include any compile steps.
- Include any test commands.
- Note that you can use the same commands that your repository needs to build and test your code by simply replacing the commands in the `run` keyword.
- Include any basic examples or commands specific to test frameworks.
- Include any common databases or services that might be needed. If so, we can link out to the services guides in the docs (https://docs.github.com/en/actions/configuring-and-managing-workflows/using-databases-and-service-containers).
{% endcomment %}

## Packaging workflow data as artifacts

{% comment %}
This section can simply link out to https://docs.github.com/en/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts or provide additional information about which artifacts might be typical to upload for a CI workflow.
{% endcomment %}{% endraw %}
```

{% ifversion copilot %}

<!-- markdownlint-enable search-replace -->

## Application or platform service cards

Use this template for responsible AI application or platform service cards published in {% data variables.product.prodname_docs %}. For examples of published cards, see the articles in [AUTOTITLE](/copilot/responsible-use).

<!-- markdownlint-disable search-replace -->
<!-- rai-card-template-source: The GHD064 linter rule reads this code block as its source of truth. Do not remove this marker. -->

```yaml
{% raw %}---
title: 'Application card: APPLICATION'
shortTitle: APPLICATION-OR-PLATFORM-SERVICE # Short, human-readable label for this card
intro: 'Describe what this application or platform service card covers in one or two sentences.'
versions:
  feature: copilot
contentType: rai
category:
  - Responsible use
---

{% comment %}
For the article title, replace APPLICATION with the name of the AI application, for example `Application card: Copilot chat`. 

If this content is for an AI platform service, then the title should be: "Platform service card: PLATFORM-SERVICE". In this case, replace PLATFORM-SERVICE with the name of the platform service, for example `Platform service card: GitHub Models`. 
{% endcomment %}

## What is an application card? 

{% data reusables.rai.copilot.application-card-intro %}

{% comment %}
Instructions: For a platform service card, the heading for this section should be `## What is a platform service card?`
{% endcomment %}

## 1. Overview

FREE-TEXT

{% comment %}
Instructions: Describe the following:

- The purpose of the application/platform and how it uses AI. The problem it is solving and/or the benefits of the application/platform.
- The intended customers or downstream users of the application or platform (e.g., enterprise customers, consumers, developers)
- Link to demos or other relevant documentation.

Present the content in 2-3 paragraphs, ensure the content is easy to understand for a semi-technical audience, and use a professional tone.
{% endcomment %}

## 2. Key terms

The following list provides a glossary of key terms related to APPLICATION-OR-PLATFORM-SERVICE:

FREE-TEXT

{% comment %}
Instructions: List and define technical terms in alphabetical order. Technical terms used more than 3 times throughout the document should be included. For terms used less than 3 times, define/explain the term in context. Use [ORA's AI Glossary](https://microsoft.sharepoint.com/sites/ResponsibleAI/SitePages/RAI%20Standard%20Glossary.aspx) for standard definitions. If a term is not listed, then provide your own. Format the term and definition as such:

**TERM**: Definition in a few sentences.

Keep the boilerplate language to introduce the terms and replace APPLICATION-OR-PLATFORM-SERVICE with the name of the AI application or platform service.
{% endcomment %}

## 3. Key features or capabilities

The key features and capabilities outlined here describe what APPLICATION-OR-PLATFORM-SERVICE is designed to do and how it performs across supported tasks.

FREE-TEXT

{% comment %}
Instructions: Describe the following:

- The capabilities of what the application/platform can do or help the end-user achieve.
- If the application/platform service is considered Autonomous Agentic AI, then describe the specific capabilities of the application such as planning, adaptability, memory, or extensibility. If in a multi-agent architecture, describe each agent's role.

Ensure the description of the application's key features and capabilities is clear and concise for a semi-technical audience. Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.

Format the capabilities using bullet points, with each bullet structured like this:

* **FEATURE-NAME**: 2-4 sentences explaining the feature in plain language.

Keep the boilerplate language to introduce the section and replace APPLICATION-OR-PLATFORM-SERVICE with the name of the application or platform service.
{% endcomment %}

## 4. Intended uses

APPLICATION-OR-PLATFORM-SERVICE can be used in multiple scenarios across a variety of industries. Some examples of use cases include:

FREE-TEXT

{% comment %}
Instructions: Describe the following:

- Real-world, illustrative use cases where the user or customer could leverage the application/platform and explain the benefits the user would experience
- Ensure examples are diverse in terms of capabilities, industry/domain (government, education, financial platforms, media, consumer goods), and high vs. low stakes, as appropriate.
- If the application or platform service is Autonomous Agentic AI then specify if the agent is intended to be general purpose or if the agent has a defined action space or set of boundaries.

Ensure the description of the application's intended uses are clear and concise for a semi-technical audience. Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.

Format the intended uses using bullet points, with each bullet structured like this:

* **SHORT-USE-CASE-DESCRIPTION**: 3-5 sentences illustrating the use case in plain language.

Keep the boilerplate language to introduce the section and replace APPLICATION-OR-PLATFORM-SERVICE with the name of the application or platform service.
{% endcomment %}

## 5. Models and training data

APPLICATION-OR-PLATFORM-SERVICE leverages a variety of AI models to power the experience that users see. Some examples include LIST-MODELS-HERE. To learn more about the data used to train the foundation models behind APPLICATION-OR-PLATFORM-SERVICE, refer to the linked model cards to find the relevant data cards.

{% comment %}
Instructions: Keep the boilerplate language and replace APPLICATION-OR-PLATFORM-SERVICE with the name of the application or platform service. Then list a few examples of models powering the application and hyperlink the model cards where the text says LIST-MODELS-HERE. Prioritize listing GitHub models if relevant. If there are OpenAI models, link to the Azure OpenAI Service transparency note
{% endcomment %}

## 6. Performance

FREE-TEXT

{% comment %}
Instructions: In 3-5 paragraphs describe the following:

- The conditions or environment where the application or platform is expected to perform reliably, meaning its ability to perform its intended function over many iterations.
- List all the appropriate modalities of intended inputs and expected outputs.
- If the application or platform has multi-lingual capabilities, list the supported languages the application or platform was designed and evaluated for.

Ensure the description of the application's intended uses are clear and concise for a semi-technical audience. Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.
{% endcomment %}

## 7. Limitations

Understanding APPLICATION-OR-PLATFORM-SERVICE's limitations is crucial to determine it is used within safe and effective boundaries. While we encourage customers to leverage APPLICATION-OR-PLATFORM-SERVICE in their innovative solutions or applications, it's important to note that APPLICATION-OR-PLATFORM-SERVICE was not designed for every possible scenario. We encourage users to refer to either the [Microsoft Enterprise AI Services Code of Conduct](https://review.learn.microsoft.com/en-us/legal/ai-code-of-conduct) (for organizations) or the [Code of Conduct section in the Microsoft Services Agreement](https://www.microsoft.com/servicesagreement#3_codeOfConduct) (for individuals) as well as the following considerations when choosing a use case:

{% comment %}
Instructions: Keep the boilerplate language and replace APPLICATION-OR-PLATFORM-SERVICE with the name of the application or platform service.

Then describe the following:

- The conditions or parameters where the performance of an application or platform may degrade. Explain why performance degrades in certain conditions and note if there are any known conditions under which the application/platform will fail.
- For each limitation, explain why it's important for the user to carefully evaluate the limitation when choosing a use case. For example, the application was developed and tested primarily in English. Using unsupported languages may impact performance, so users should exercise caution when operating outside the intended language scope.
- Any known conditions that the application or platform should not be used for as it may present risks due to its limitations. For example, underrepresented populations in the training data may yield less accurate outputs for those groups.
- Any prohibited uses of the application or platform.

Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional. Format the response using bullet points, with each bullet structured like this:

* **SHORT-LIMITATION-DESCRIPTION**: 3-5 sentences explaining why this limitation exists and what users should be aware of when choosing a use case.

Keep the boilerplate language to introduce the section and replace APPLICATION-OR-PLATFORM-SERVICE with the name of the application or platform service.
{% endcomment %}

## 8. Evaluations

{% data reusables.rai.copilot.application-card-evaluations %}

<!-- optional-section -->
### Performance and quality evaluations

Performance evaluations for AI applications are essential to improving their reliability in real-world applications. Metrics like groundedness, relevance, and coherence help assess the accuracy and consistency of AI-generated outputs, so that they are factually supported in grounded content scenarios, contextually appropriate, and logically structured. For APPLICATION-OR-PLATFORM-SERVICE, we conducted [performance evaluations](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-evaluators/general-purpose-evaluators) for the following metrics, which are available through [Microsoft Foundry](https://ai.azure.com/?tid=72f988bf-86f1-41af-91ab-2d7cd011db47):

- Groundedness
- Coherence
- Fluency
- Similarity

{% comment %}
Instructions: If the application or platform service used automated performance evaluations through Microsoft Foundry, keep the boilerplate language. Replace APPLICATION-OR-PLATFORM-SERVICE with the name of the application or platform service. Of the metrics listed, keep the metrics that were used in the automated evaluations, remove the ones that were not used. If there were no automated performance evaluations conducted, remove this section entirely.
{% endcomment %}

<!-- optional-section -->
### Performance and quality evaluation methods

FREE-TEXT

{% comment %}
Instructions: If no automated performance evaluations were used for the application or platform service, remove this section entirely. If there were automated performance evaluations used for the application or platform service, then in 2-3 paragraphs, describe the following:

- For generative AI capabilities, identify the modalities (text, image, video, audio) that were evaluated.
- Explain the evaluation methodology and describe what an ideal result would be and what a suboptimal result would be.

Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.
{% endcomment %}

<!-- optional-section -->
### Risk and safety evaluations

Evaluating potential risks associated with AI-generated content is essential for safeguarding against content risks with varying degrees of severity. This includes evaluating an AI application's predisposition towards generating harmful content or testing vulnerabilities to jailbreak attacks. For APPLICATION-OR-PLATFORM-SERVICE, we conducted [risk and safety evaluations](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-evaluators/risk-safety-evaluators) for the following metrics available through [Microsoft Foundry](https://ai.azure.com/?tid=72f988bf-86f1-41af-91ab-2d7cd011db47):

* Hate and unfairness
* Sexual
* Violence
* Self-harm
* Protected material
* Indirect jailbreak
* Direct jailbreak
* Code vulnerability
* Ungrounded attributes

{% comment %}
Instructions: If the application or platform service used automated risk and safety evaluations through Microsoft Foundry, keep the boilerplate language. Replace APPLICATION-OR-PLATFORM-SERVICE with the name of the application or platform service. Of the metrics listed, keep the metrics that were used in the automated evaluations, remove the ones that were not used. If there were no automated risk and safety evaluations conducted, remove this section entirely.
{% endcomment %}

<!-- optional-section -->
### Risk and safety evaluation methods

FREE-TEXT

{% comment %}
Instructions: If no automated risk and safety evaluations were used for the application or platform service, remove this section entirely. If there were automated risk and safety evaluations used for the application or platform service, then in 2-3 paragraphs, describe the following:

- For generative AI capabilities, identify the modalities (text, image, video, audio) that were evaluated.
- Explain the evaluation methodology and describe what an ideal result would be and what a suboptimal result would be.

Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.
{% endcomment %}

### Evaluation data for quality and safety

{% data reusables.rai.copilot.application-card-evaluation-data-for-quality-and-safety %}

### Custom evaluations

FREE-TEXT

{% comment %}
Instructions: If the application or platform service used custom evaluations, then in 2-3 paragraphs, describe the following:

- The metrics you evaluated for and for what modalities.
- For generative AI capabilities, identify the modalities (text, image, video, audio) that were evaluated.
- Explain the evaluation methodology and describe what an ideal result would be and what a suboptimal result would be.

Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.
{% endcomment %}

## 9. Safety components and mitigations

FREE-TEXT

{% comment %}
Instructions: Describe the following:

- Active safety components; it's okay to leave off specific components if describing them may compromise safety (for example with regards to jailbreaks).
- Mitigation measures that address performance or safety risks that emerged before or after conducting evaluations. If your team identified disparities in how your application performs across different groups of people, describe measures to reduce those gaps.
- Cybersecurity measures put into place

Format the response in bullet points as such:

* SHORT-SAFETY-COMPONENT-DESCRIPTION: 3-5 sentences explaining why the safety component was applied or what risks are being mitigated. If appropriate, explain how a user can configure the safety component.

Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.
{% endcomment %}

## 10. Best practices for deploying and adopting APPLICATION-OR-PLATFORM-SERVICE

Responsible AI is a shared commitment between GitHub and its customers. While GitHub builds AI applications with safety, fairness, and transparency at the core, customers play a critical role in deploying and using these technologies responsibly within their own contexts. To support this partnership, we offer the following best practices for deployers and end users to help customers implement responsible AI effectively.

### Deployers and end-users should

- **Exercise caution and evaluate outcomes when using APPLICATION-OR-PLATFORM-SERVICE for consequential decisions or in sensitive domains**: {% data reusables.rai.copilot.application-card-consequential-decisions %}
- **Evaluate legal and regulatory considerations**: {% data reusables.rai.copilot.application-card-evaluate-legal-regulatory %}

{% comment %}
Instructions: Replace APPLICATION-OR-PLATFORM-SERVICE with the name of the AI application or platform service. Otherwise, do not modify this text. If there are other best practices for both deployers and end-users, include them in this section. Format the best practice as such:

* SHORT-BEST-PRACTICE-DESCRIPTION: 3-5 sentences explaining the best practice and why deployers and end-users should consider applying the best practice. Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.
{% endcomment %}

### End-users should

FREE-TEXT

- **Exercise human oversight when appropriate**: Human oversight is an important safeguard when interacting with AI applications. While we continuously improve our AI applications, AI might still make mistakes. The outputs generated may be inaccurate, incomplete, biased, misaligned, or irrelevant to your intended goals. This could happen due to various reasons, such as ambiguity in the inputs or limitations of the underlying models. As such, users should review the responses generated by APPLICATION-OR-PLATFORM-SERVICE and verify that they match their expectations and requirements.
- **Be aware of the risk of overreliance**: {% data reusables.rai.copilot.application-card-overreliance %}
- **Exercise caution when designing agentic AI in sensitive domains**: {% data reusables.rai.copilot.application-card-agentic-ai-caution %}

{% comment %}
Instructions: Consider the questions below as guidance to describe best practices to end-users. You do not have to answer all the questions because the relevance of each question may differ for your application/platform. Use your own discretion and you are encouraged to expand beyond the suggested questions to include any best practices that could benefit end-users.

- How can the customer/end users provide feedback or flag concerns about the application/platform?
- What makes a prompt clear and effective? Provide an example specific to your application.
- How can an end-user monitor and detect performance drift?

Format the best practice as such:

* SHORT-BEST-PRACTICE-DESCRIPTION: 3-5 sentences explaining the best practice and why end-users should consider applying the best practice. Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional. Replace APPLICATION-OR-PLATFORM-SERVICE with the name of the AI application or platform service. If there is a risk of overreliance for the AI application or platform service, explain why
{% endcomment %}

### Deployers should

FREE-TEXT

{% comment %}
Instructions: Consider the questions below as guidance to describe best practices for deployers. You do not have to answer all the questions because the relevance of each question may differ for your application/platform. Use your own discretion, and you are encouraged to expand beyond the suggested questions to include any best practices that could benefit deployers.

- What security vulnerabilities should the customer/end user be aware of and how can they protect against these vulnerabilities?
- How can the customer configure the platform/application to optimize their intended use case? Explain these steps clearly, this is also an opportunity to build upon the intended use case examples earlier in the doc.
- What settings can the customer configure that may affect safety (e.g., content classifier thresholds)? It's okay to describe at a high level here and link to additional documentation.
- What additional testing might be required when considering different use cases?
- Describe how users can resolve predictable or known failures (tip: consider the issues mentioned in the limitations section)
- How can the customer monitor and detect performance drift?

Format the best practice as such:

* SHORT-BEST-PRACTICE-DESCRIPTION: 3-5 sentences explaining the best practice and why end-users should consider applying the best practice. Use plain English, avoid technical jargon, and explain any acronyms. Keep the tone professional.
{% endcomment %}

## 11. Learn more about APPLICATION-OR-PLATFORM-SERVICE

For additional guidance on the responsible use of APPLICATION-OR-PLATFORM-SERVICE, we recommend reviewing the following documentation:

{% comment %}
Instructions: Replace APPLICATION-OR-PLATFORM-SERVICE with the name of the AI application or platform service. Link to the application or platform service's learn.microsoft.com documentation page or other related materials. Include a link to [Copilot Trust Center](https://copilot.github.trust.page/).
{% endcomment %}

### Learn more about responsible AI

* [Microsoft AI principles](https://www.microsoft.com/en-us/ai/responsible-ai)
* [Microsoft responsible AI resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources)
* [Microsoft Azure Learning courses on responsible AI](https://docs.microsoft.com/en-us/learn/paths/responsible-ai-business-principles/)

{% comment %}
Instructions: Once all sections have been completed, remove all instruction comments.
{% endcomment %}{% endraw %}
```

<!-- markdownlint-enable search-replace -->

{% endif %}
