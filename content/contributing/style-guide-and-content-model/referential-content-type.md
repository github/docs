---
title: Referential content type
intro: 'Referential content provides detailed information that people need while they are actively using a feature.'
versions:
  feature: 'contributing'
---

We create referential articles and referential sections within other articles.
* Some major subjects may require their own referential article, especially if there is a large amount of referential content, such as for search syntax or YAML syntax in {% data variables.product.prodname_actions %}.
* For smaller amounts of content or more specific information, like a list of a feature’s supported languages or hardware requirements, use referential sections in context within procedural or conceptual articles.

## How to write referential content

For the referential content template, see "[AUTOTITLE](/contributing/writing-for-github-docs/templates#referential-article-template)."

* Write a sentence or an entire conceptual section to introduce the referential content.
* Present the actual referential content clearly and consistently.
* For subjects with a single element to explain, use a list.
  * Example: [AUTOTITLE](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#repository-roles-for-organizations)
* For subjects with multiple elements to explain, use a table.
  * Example: [AUTOTITLE](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permissions-for-each-role)
* For longer referential content, such as YAML syntax for workflows, use headers consistently.
  * H2 headers for each distinct section.
  * H3 headers for subsections, such as examples.
  * Example: [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions)

## Titles for referential content

* Referential articles or headers of referential sections clearly describe the contents of the section, and generally begin with nouns.
* Titles include enough information to be accessible to novice users and fully describe the contents of each section.
* Titles avoid stacked nouns - use prepositions to break up long strings of nouns.

## Examples of referential content

* Referential articles
  * [AUTOTITLE](/get-started/accessibility/keyboard-shortcuts)
  * [AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
  * [AUTOTITLE](/free-pro-team@latest/rest/reference/billing) in the REST API documentation
  * [AUTOTITLE](/graphql/reference/mutations) in the GraphQL API documentation
* Referential sections within other articles
  * "Supported languages" in [AUTOTITLE](/free-pro-team@latest/get-started/using-github/github-mobile#supported-languages-for-github-mobile)
  * "Hardware considerations" in [AUTOTITLE](/enterprise-server@latest/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
