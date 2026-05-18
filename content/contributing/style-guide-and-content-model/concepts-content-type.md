---
title: Concepts content type
intro: People most often use conceptual content when they are learning about something new to them.
category:
  - Follow the style guide and content model
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /contributing/style-guide-and-content-model/conceptual-content-type
---

Conceptual content helps people understand a feature or topic by providing a clear, high-level overview, explanation of how the feature or topic can help them on their journey, and context like use cases or examples.

We create concepts articles and conceptual sections within other articles. Most major products, features, or subjects have their own concepts article.

## Deciding between an article or a section

How-tos or tutorials can have 1-2 brief introductory sentences before the steps. If more explanation beyond a couple of sentences is needed, that’s when we should consider whether it merits a spot in a concepts article. 

However, we should be selective. Not every concept or “About X” section needs its own article. Generally this comes down to how much information will be useful to the user that we need to include.  

## How to write conceptual content

For the conceptual content template, see [AUTOTITLE](/contributing/writing-for-github-docs/templates#concepts-article-template).

* Describe in plain language what the feature, product, or topic is.
* Describe its purpose and why it’s useful to the reader.
* Share use cases or examples.

## Titles for conceptual content

Short titles for articles should be one word or a noun phrase. If the articles appear under Concepts in the sidebar avoid using "About", unless the article appears under a heading of the same name. Ex: "Coding agent" and "About coding agent".  

Headers of conceptual sections in articles start with "About [subject]”.
* Use a noun to describe the subject.
  * Use: "About {% data variables.product.prodname_code_scanning %}"
  * Avoid: "About scanning your code for vulnerabilities"

## Examples of conceptual content

* Conceptual articles
  * [About GitHub Sponsors](/free-pro-team@latest/sponsors/getting-started-with-github-sponsors/about-github-sponsors)
  * [About Enterprise accounts](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)
* Conceptual sections within other articles
  * "About security policies" in [AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies)
  * "About maintenance mode" in [AUTOTITLE](/enterprise-server@latest/admin/configuration/enabling-and-scheduling-maintenance-mode#about-maintenance-mode)
