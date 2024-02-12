---
title: Quickstart content type
intro: 'Quickstarts are best for people who want instructions quickly without lengthy explanations of how something works or why they would want to use it.'
product: '{% data reusables.contributing.product-note %}'
versions:
  feature: 'contributing'
---

Quickstarts enable people to quickly complete a discrete, focused task by illustrating a workflow with only essential steps, in about five minutes or 600 words. Quickstarts can be used for quickly getting set up with a new tool, or for quickly completing another task. For more complex tasks, use a tutorial.

Quickstarts are useful when someone already understands the feature or product and is ready to try it out.

We collectively refer to tutorials and quickstarts as "guides" across the site. On `/guides` landing pages, we include tutorials, quickstarts, and certain procedural articles in the list of guides for a doc set.

## How to write a quickstart

For the quickstart template, see "[AUTOTITLE](/contributing/writing-for-github-docs/templates#quickstart-article-template)."

Contents of quickstarts:
- Introduction:
  - Highlights that this guide is quick and to-the-point by using phrasing like:
      - Quickly add [FEATURE] to your project
      - The essentials for getting started with [PRODUCT]
      - An abbreviated guide for people who are familiar with [FEATURE]
  - Clarifies audience
  - Clearly states prerequisites and prior knowledge needed
  - States what someone will accomplish or build
- Procedural sections
  - Based on the quickstart's audience, the steps can be less explicit and formal than those used in procedural content. You do not have to use existing reusables to form these steps if the audience doesn’t require that level of detail.
  - Link out to other articles or resources rather than replicating them, to avoid interrupting the flow of information.
  - Give visual cues. Use code blocks and screenshots heavily to help reassure people that they are performing the correct actions.
- Troubleshooting (optional)
  - If relevant troubleshooting content exists for the quickstart, provide links to it.
- Next steps
  - Provide a quick recap of what has been accomplished in the quickstart as a means of transitioning to next steps.
  - Include 2-3 actionable next steps that someone can take after completing the quickstart. Always link to conceptual content on the feature or product. You can also link off to other related information on docs.github.com or in {% data variables.product.prodname_learning %}.

## Title guidelines for quickstarts

- When the guide helps someone get started with a new tool, preface the title with "Quickstart", e.g. "Quickstart for GitHub Actions" or "Quickstart: Procedural title."
- For other use cases, follow the title guidelines for procedures and omit the word "Quickstart."

## Examples of quickstarts

- [AUTOTITLE](/free-pro-team@latest/actions/quickstart)
- [AUTOTITLE](/free-pro-team@latest/discussions/quickstart)
- [Quickstart for GitHub Educators](/free-pro-team@latest/education/quickstart)
