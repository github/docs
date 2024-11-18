---
title: About topics
shortTitle: About topics
intro: 'Use topics to make articles searchable.'
versions:
  feature: 'contributing'
---

Topics are used to filter articles and are searchable across the {% data variables.product.prodname_docs %} site. For some layouts, such as landing pages or guides, people can select which articles are displayed by filtering topics. Also, an article can be defined as being relevant to one or more topics by having those topics listed in the article's frontmatter. For example:

```yaml
---
title: "Managing branches in your repository"
topics:
  - "GitHub"
  - "Git"
  - "Repositories"
---
```

For more information on adding topics to an article see, "[AUTOTITLE](/contributing/writing-for-github-docs/using-yaml-frontmatter#topics)". For a list of all allowed topics, see [`allowed-topics`](https://github.com/github/docs/blob/main/data/allowed-topics.js).

## Topics for all content types

* All articles should have at least one topic
* Use nouns as topics
* Topics help people meaningfully group content
  * When possible, use more specific topics that are relevant and not just broad topics. For example, `REST` or `GraphQL` rather than just `API`
  * Ensure that topics on similar articles are consistent so that people who filter by a topic get all of the relevant articles. For example, all articles about CI should have the `CI` topic plus more specific topics
  * Avoid ambiguous topics. For example, `Actions` may not be a useful topic within the Actions product since it could refer to the product {% data variables.product.prodname_actions %} or the product element called an action
* Topics add value beyond and do not replicate the article’s title, type, or category
  * For example, within the Actions product, `Actions` does not add value since someone in this section of the docs would already know that they are looking at Actions docs
* Use `Fundamentals` for articles related to the core concepts of a product area.
  * Use: `Fundamentals` in an article like “Introduction to {% data variables.product.prodname_actions %}”
  * Avoid: `Actions` in an article like "Introduction to {% data variables.product.prodname_actions %}"
* Commonly-recognized abbreviations can be used, but obscure or ambiguous abbreviations should be avoided
  * Use: `CI` instead of `Continuous integration`
  * Avoid: `AS` instead of `Advanced Security`
* Use the short forms of {% data variables.product.prodname_dotcom %} product names
  * Use: `Actions` instead of `GitHub Actions`

## Checklist for choosing topics

Consider these questions to help choose topics for an article. Not every article will have a topic for each item in the checklist.

* What is the feature or product area?
  * Example: `Enterprise`
   Is the article about a sub-feature (unless the product name matches the feature name)?
  * Example: `Dependabot`
* Is the feature part of a restricted program?
  * Example: `Advanced Security`
* What element of the feature or product is the article?
  * Example: `Organizations`
* What is the broad purpose of the article?
  * Example: `Permissions`
* What programming languages, package managers, or ecosystems does the article explicitly address? Only include these topics if it adds value to someone filtering the docs, not just if an article lists supported languages, package managers, or ecosystems.
  * Example: `Ruby`
