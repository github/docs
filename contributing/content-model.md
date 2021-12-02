# Content model for GitHub Docs

_Full TOC :arrow_upper_left:_

- [Introduction](#introduction)
- [Content structure](#content-structure)
- [Content types](#content-types)
- [Contents of a GitHub Docs article](#contents-of-a-github-docs-article)

## Introduction

This content model explains the goals of each type of content we create within GitHub Docs, and what to include when you're writing or updating an article. We use a model to ensure that our content consistently, clearly, and comprehensively communicates what our customers need to achieve their goals with GitHub quickly and easily.  

We use these types across all documentation sets to provide a consistent user experience––any content type applies to any product or audience. Our content types evolve over time and we add new types as needed. We don't publish content that doesn't follow the model. 

Consistency helps customers form mental models of the documentation and understand how to find the information they need as they return to GitHub Docs over time. It’s also more efficient to maintain and update consistent content, making it easier and quicker to contribute to docs whether you're an open source contributor making your first commit or a GitHub writer documenting an entire new product.

## Content structure

Docs are organized into multiple levels of hierarchy on our site:

Top-level doc set
- Categories
  - Map topics
    - Articles 

### Category

Categories are usually organized around a feature or a discrete set of tasks within a top-level doc set, aligning with product themes. A category's subject isn't so broad that its contents are hard to manage or the category grows too large to use.
- Categories often start small and grow with the product.
- Large categories may contain map topics to subdivide content around more specific user journeys or tasks.
- Use long procedural articles to group related chunks of content and keep articles within the category streamlined. 
- When categories have more than ten articles, consider breaking the content into map topics or additional categories, unless there's a reason to keep all of the content together.

#### Titles for categories
- Task-based (begins with a gerund)
- Describes the big-picture purpose or goal of using the feature or product
- General or high-level enough to scale with future product enhancements
- Category titles must be 67 characters or shorter and have a [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) less than 27 characters
- Examples
  - [Setting up and managing your GitHub user account](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account)
  - [Installing GitHub Enterprise](https://docs.github.com/en/enterprise-server@3.0/admin/installation)
  
#### Intros for categories
All categories have intros. Keep the intros one sentence long, and general or high-level enough to scale with future product changes without having to remember to update the intro. If you significantly change a category’s structure, check its intro for needed updates.

### Map topic

Map topics introduce a section of a category, grouping articles within a category around more specific workflows or subjects that are part of the category’s larger task.

Map topics contain at least three articles. When map topics have more than eight articles, it may be useful to consider breaking the content into more specific map topics, unless there’s a reason to keep all of the information together.

#### Titles for map topics
- Task-based (begins with a gerund)
- Describes a more specific task within the larger workflow of the category it’s in
- General or high-level enough to scale with future additions to the product
- Map topic titles must be 63 characters or shorter and have a [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) less than 30 characters
- Examples
  - [Securing your account with two-factor authentication](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)
  - [Setting policies for organizations in your enterprise account](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account)

#### Intros for map topics
All map topics have intros. Keep the intros one sentence long, and general or high-level enough to scale with future product changes without having to remember to update the intro. If you add or remove articles in a map topic, check its intro for needed updates.

### Article

An article is the basic unit of content for GitHub Docs––while we use multiple content types, they're all published as articles. Each content type has its own purpose, format, and structure, yet we use standard elements in every article type, like intros, to ensure articles provide a consistent user experience.

### Content order

We organize content predictably within categories, map topics, and articles, from broadest applicability to most specific, narrow, or advanced, following this order:
- Conceptual content
- Referential content
- Procedural content for enabling a feature or setting
- Procedural content on using a feature
- Procedural content on managing a feature or setting
- Procedural content on disabling a feature or setting
- Procedural content on destructive actions (e.g. deletion) 
- Troubleshooting information

### Titles

Titles are challenging! Use these general guidelines to help create clear, helpful, descriptive titles, and see below for specific guidelines for each content type.

#### Titles for all content types
- Titles are clear, descriptive, and specific, but not wordy
  - Use: Browsing actions in the workflow editor
  - Avoid: Using the workflow editor sidebar
- Titles are consistent across a content type
  - See specific guidelines for each content type
  - Titles aren’t overly repetitive––vary the verbs used for procedure or map topic titles when possible
- Titles are general enough to scale with product changes, reflect all of the content within the article, or include content on multiple products
  - Use: "GitHub's billing plans"
  - Avoid: "Billing plans for user and organization accounts"
- Titles use consistent terminology
  - Develop and follow patterns within a category or on similar subjects
- Titles use terminology from the product itself
- Write the title and the intro at the same time
  - Use the intro to develop the ideas presented in the title
  - See guidance on intros for more information
- If it's hard to come up with a title, consider the content type. Sometimes trouble choosing a title indicates that another content type would fit better.
- Think about how the title will appear in search results for multiple products
  - What specific words do we need to include in the title or intro so that folks don’t mistake it for content about a different product?
- Think about how the title will look in production
- Titles have hard limits for length to keep them easy to understand (and easier to render on the site): 
  - Category titles: 67 characters and [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) < 27 characters
  - Map topic titles: 63 characters and [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) < 30 characters
  - Article titles: 80 characters, 60 if possible, and [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) < 31 characters, ideally 20-25 characters

### Reusing content

We use reusable and variable strings to use the same chunk of content, such as a procedural step or a conceptual paragraph, in multiple places. We generally don't reuse large sections of articles without a specific reason. When an entire section of an article might be relevant in more than one article, take a look at the purpose of both. Is there an opportunity to create a single, long-form article? Refer to the content models to clarify the best permanent home for the information, and link to it from the other article.

## Content types

Any of these content types can be shared as an article on its own, and some content types can also be used as sections within a larger article.

### Conceptual

Conceptual content helps customers understand a feature or topic by providing a clear, high-level overview, explanation of how the feature or topic can help them on their journey, and context like use cases or examples. Conceptual content is clear enough for a novice audience but also includes relevant information for advanced users. Customers most often use conceptual content when they're learning.

We create conceptual articles and conceptual sections within other articles. Most major products, features, or subjects have their own conceptual article.

#### How to write conceptual content
Use the [conceptual content template](https://github.com/github/docs/blob/main/contributing/content-templates.md#conceptual) to write a conceptual article. 

- Describe in plain language what the feature, product, or topic is
- Describe its purpose and why it’s useful to the reader
- Share use cases or examples
- If relevant, describe how the feature or topic works (be mindful of audience and the right location for deep dives into technical details)
- Highlight any details the reader needs to know to use the feature
- Include next steps for getting started with the feature (whether through further reading links or content within the article itself)

#### Titles for conceptual content
- Conceptual articles or headers of conceptual sections start with "About [subject]”
- Use a noun to describe the subject
  - Use: "About code scanning"
  - Avoid: "About scanning your code for vulnerabilities"

#### Examples of conceptual content
- Conceptual articles
  - [About GitHub Sponsors](https://docs.github.com/en/github/supporting-the-open-source-community-with-github-sponsors/about-github-sponsors)
  - [About enterprise accounts](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/about-enterprise-accounts)
- Conceptual sections within other articles
  - About security policies in [Adding a security policy to your repository](https://docs.github.com/en/code-security/security-advisories/adding-a-security-policy-to-your-repository)
  - About GitHub Enterprise licenses in [Managing your GitHub Enterprise Server license](https://docs.github.com/en/enterprise-server@latest/admin/overview/managing-your-github-enterprise-license)
  - About maintenance mode in [Enabling and scheduling maintenance mode](https://docs.github.com/en/enterprise-server@latest/admin/configuration/enabling-and-scheduling-maintenance-mode)

### Referential

Referential content provides detailed information that customers need while they're actively using a feature. 

We create referential articles and referential sections within other articles.
- Some major subjects may require their own referential article, especially if there is a large amount of referential content, such as for search syntax or YAML syntax in GitHub Actions.
- For smaller amounts of content or more specific information, like a list of a feature’s supported languages or hardware requirements, use referential sections in context within procedural or conceptual articles.

#### How to write referential content
Use the [referential content template](https://github.com/github/docs/blob/main/contributing/content-templates.md#referential) to write a referential article.

- Write a sentence or an entire conceptual section to introduce the referential content
- Present the actual referential content clearly and consistently
- For subjects with a single element to explain, use a list
  - Example: [Navigating code on GitHub](https://docs.github.com/en/github/managing-files-in-a-repository/navigating-code-on-github)
- For subjects with multiple elements to explain, use a table
  - Example: [Repository permission levels for an organization](https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)
- For longer referential content, such as YAML syntax for workflows, use headers consistently:
  - H2 headers for each distinct section
  - H3 headers for subsections, such as examples
  - Example: [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

#### Titles for referential content
- Referential articles or headers of referential sections clearly describe the contents of the section, and generally begin with nouns
- Titles include enough information to be accessible to novice users and fully describe the contents of each section
- Titles avoid stacked nouns - use prepositions to break up long strings of nouns

#### Examples of referential content
- Referential articles
  - [Keyboard shortcuts](hhttps://docs.github.com/en/github/getting-started-with-github/keyboard-shortcuts)
  - [Roles in an enterprise](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)
  - [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
  - [Billing](https://docs.github.com/en/rest/reference/billing) in the REST API documentation
  - [Mutations](https://docs.github.com/en/graphql/reference/mutations) in the GraphQL API documentation
- Referential sections within other articles
  - Supported languages in [GitHub for mobile](https://docs.github.com/en/github/getting-started-with-github/github-for-mobile#supported-languages-for-github-for-mobile)
  - Hardware considerations in [Installing GitHub Enterprise Server on AWS](https://docs.github.com/en/enterprise-server@latest/admin/installation/installing-github-enterprise-server-on-aws)

### Procedural

Procedural content helps customers complete a task from start to finish while they're using GitHub. Procedural content gives context on how the task fits into the customer's larger journey.

We create procedural articles and procedural sections within larger articles. 

#### How to write procedural articles
Use the [procedural content template](https://github.com/github/docs/blob/main/contributing/content-templates.md#procedural) to write a procedural article.

- Follow the [style guidelines for procedural steps](https://github.com/github/docs/blob/main/contributing/content-style-guide.md#procedural-steps).
- Procedural content can get repetitive––look for opportunities to group related content into a single longer article.
  - Group multiple related procedures into a single article unless there's a reason not to.
  - If disabling a setting or undoing a task requires the same steps and has no special implications, do not write a separate procedure.
  - If disabling a setting or undoing a task requires different steps or has important or special implications, create a longer article to contain both procedures. Use an agnostic title.
- Tell readers the expected outcome of the procedure.
- Include troubleshooting tips as frequently as possible.

#### Titles for procedural content
- Procedural articles or procedural sections within articles are task-based and begin with a gerund
  - Use: "Applying for a student developer pack"
- Use active and specific verbs (brainstorm or use a thesaurus when needed)
- Titles specifically describe the task contained within the article or header, but are general enough to reflect all of the content
- Article title length: maximum 80 characters, 60 if possible

#### Examples of procedural content
- [Adding information to your receipts](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/adding-information-to-your-receipts)
- [Inviting people to manage your enterprise account](https://docs.github.com/en/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)
- [Setting up continuous integration using workflow templates](https://docs.github.com/en/actions/guides/setting-up-continuous-integration-using-workflow-templates)

### Combining multiple content types

Often, it's helpful to group information in context to help customers complete a complex task, understand a set of related tasks, or illustrate an entire workflow. Use longer articles combining content types to ensure the customer finds contextual content in the right place. Longer articles also help eliminate duplication of content and prepare content to scale as more options are added to the product. Customers most often need longer articles while actively using the product, and may need to consult the article at different points on their journey.

#### How to combine multiple content types in an article
- Use conceptual, procedural, referential, or troubleshooting content in a longer article, and do not use quickstart or tutorials
- Use sections of different content types in the article as needed, and follow title guidelines for the content type
- Most often, these articles will contain at least one procedural section plus at least one additional conceptual, referential, or procedural section
- Use the content ordering guidelines to organize headers within the article.
- Use troubleshooting information as frequently as possible.
- You can replicate the article’s title in a header if needed

#### Title guidelines for articles that combine multiple content types
- If there's a procedure within the article, use a task-based title that begins with a gerund
- Titles are general enough to describe the range of information and tasks contained within the article
- Titles describe the setting being toggled and are agnostic about what setting the reader chooses, e.g., "Setting repository visibility” instead of "Making a private repository public”

#### Examples of articles that combine multiple content types
- [Setting repository visibility](https://docs.github.com/en/github/administering-a-repository/setting-repository-visibility)
- [Enforcing repository management policies for organizations in your enterprise account](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account)
- [Upgrading your GitHub subscription](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription)
- [Enabling and scheduling maintenance mode](https://docs.github.com/en/enterprise-server@latest/admin/configuration/enabling-and-scheduling-maintenance-mode)

### Quickstart

Quickstarts enable a user to quickly complete a discrete, focused task by illustrating a workflow with only essential steps, in about five minutes or 600 words. Quickstarts can be used for quickly getting set up with a new tool, or for quickly completing another task. For more complex tasks, use a tutorial.

Quickstarts are useful when the customer already understands the feature or product and is ready to try it out. Users of quickstarts are not looking for an explanation and don't need to be convinced to use the product––they just want instructions quickly. Users who don't understand a step are willing to dig deeper in a separate doc.

#### How to write a quickstart
Use the [quickstart template](https://github.com/github/docs/blob/main/contributing/content-templates.md#quickstart) to create a quickstart guide.

Contents of quickstarts:
- Introduction:
  - Highlights that this guide is quick and to-the-point by using phrasing like:
      - Quickly add [FEATURE] to your project
      - The essentials for getting started with [PRODUCT]
      - An abbreviated guide for people who are familiar with [FEATURE]
  - Clarifies audience
  - Clearly states prerequisites and prior knowledge needed
  - States what the user will accomplish or build
- Procedural sections
  - Based on the quickstart's audience, the steps can be less explicit and formal than those used in procedural content. You do not have to use existing reusables to form these steps if the audience doesn’t require that level of detail.
  - Link out to other articles or resources rather than replicating them, to avoid interrupting the flow of information.
  - Give visual cues. Use code blocks and screenshots heavily to help reassure users that they're performing the correct actions.
- Troubleshooting (optional)
  - In an ideal world, the guidance provided in a quick start will always work. If it exists, link out to any relevant troubleshooting content rather than including it in the document.
- Next steps
  - Provide a quick recap of what has been accomplished in the quick start as a means of transitioning to next steps.
  - Include 2-3 actionable next steps that the user take after completing the quickstart. Always link to conceptual content on the feature or product. You can also link off to other related information on docs.github.com or in GitHub Learning Labs.

#### Title guidelines for quickstarts
- When the guide helps someone get started with a new tool, preface the title with "Quickstart", e.g. "Quickstart for GitHub Actions" or "Quickstart: Procedural title"
- For other use cases, follow the title guidelines for procedures and omit the word "Quickstart"

#### Examples of quickstarts
- [Quickstart for GitHub Actions](https://docs.github.com/en/actions/quickstart)
- [Quickstart for GitHub Discussions](https://docs.github.com/en/discussions/quickstart)
- [Quickstart for GitHub Educators](https://docs.github.com/en/education/quickstart)

### Tutorial

Tutorials help customers learn about products and solve real world problems by guiding them through the entire workflow to complete a task. Tutorials are more conversational in tone than other content. A tutorial feels like a developer-to-developer conversation while remaining accessible to readers with varied technical knowledge. Products with tutorials must already have a quickstart. For bite-sized workflows, use the quickstart model instead.

Tutorials are useful when the customer has a basic understanding of the product and is interested in extending their understanding to solve a specific problem. Tutorials are for customers who want expert advice and a detailed discussion of best practices related to their problem. Tutorials also help customers who've implemented similar solutions in the past with other products use GitHub. Tutorials can also help customers validate whether the solution is appropriate for their needs. 

#### How to write a tutorial
Use the [tutorial template](https://github.com/github/docs/blob/main/contributing/content-templates.md#tutorial) to create a tutorial. 

Contents of tutorials:
- Introduction
  - Clarifies audience
  - Clearly states prerequisites and prior knowledge needed
  - States what the user will accomplish or build
  - Includes an example of a successful project
  - Does not include the expected amount of time that it may take users to complete the task - this depends on the experience level of the user and can be demoralizing for beginners
- Procedural sections
  - Based on the tutorial's audience, the steps can be less explicit and formal than those used in procedural content. You do not have to use existing reusables to form these steps if the audience doesn’t require that level of detail.
    - Use: "From your profile, click **Settings, and then click **Developer settings**.”
    - Avoid: In the upper-right corner of any page, click your profile photo, then click **Settings**. In the left sidebar, click **Developer settings**.
  - Link out to other articles or resources rather than replicating them, to avoid interrupting the flow of information in the tutorial.
  - Give visual cues. Use code blocks and screenshots heavily to help reassure users that they're performing the correct actions.
  - Provide real examples.
    - For example, don't tell a user to "Enter a commit message" - instead, give them an appropriate example commit message that matches the previous steps.
- Troubleshooting
  - Acknowledge what may go wrong in the task and list a few common problems readers might run into with solutions.
- Conclusion
  - Review what the user has accomplished or built. Refer back to the project provided in the introduction as an example of a successful project.
- Next steps
  - Include 2-3 actionable next steps that the user take after completing the tutorial. Link off to other related information like:
    - Projects on GitHub that illustrate the introduced concepts
    - Relevant information on docs.github.com
    - Relevant GitHub Learning Labs
    - Relevant published talks, blog posts, or Community Forum series posts by Hubbers

#### Title guidelines for tutorials
- Follow the title guidelines for procedural articles
- Don’t use "tutorial” or "guide” in the title

#### Examples of tutorials
Tutorials:
- [Adding labels to issues](https://docs.github.com/en/actions/guides/adding-labels-to-issues)
- [Installing an Apple certificate on macOS runners for Xcode development](https://docs.github.com/en/actions/guides/installing-an-apple-certificate-on-macos-runners-for-xcode-development)

Language and framework guides:
- [Building and testing Node.js](https://docs.github.com/en/actions/guides/building-and-testing-nodejs)
- [Building and testing Python](https://docs.github.com/en/actions/guides/building-and-testing-python)
- [Publishing Java packages with Maven](https://docs.github.com/en/actions/guides/publishing-java-packages-with-maven)

### Guides 

We collectively refer to tutorials and quickstarts as "guides" across the site. On `/guides` landing pages, we include tutorials, quickstarts, and certain procedural articles in the list of guides for a doc set.

## Contents of a GitHub Docs article

Every article includes a few standard elements, and may include conditional or optional elements. We also use a standard order for content within an article. Check out the guidelines below for more details about each element.

Within an article, there is a standard order of content sections. Every article contains required elements. Articles will also contain conditional elements and optional elements outlined in content design or creation. See the guidelines below for more details.

1. Title
2. Product callout (conditional)
3. Intro
4. Permissions statement (conditional)
5. Table of contents
6. Conceptual content
7. Referential content
8. Prerequisites
9. Procedural content
10. Troubleshooting
11. Further reading (conditional)

Here's what some of these elements look like rendered in an article.

![Article with title, intro, permissions, product callout, conceptual section, procedural section, and table of contents labeled](/contributing/images/illustration-of-article-contents.png)

### Intro

The top of every page has an intro that provides context and sets expectations, allowing readers to quickly decide if the page is relevant to them. Intros also are displayed in search results to provide contextual information to help readers choose a result.

#### How to write an intro
- Article intros are one to two sentences long.
- Map topic and category intros are one sentence long.
- API reference intros are one sentence long.
  - The intro for an API page should define the feature so that a user knows whether the feature meets their needs without reading the entire article.
- Intros contain a high-level summary of the page’s content, developing the idea presented in a title with more detail. 
  - Use approachable synonyms of words in the page’s title to help readers understand the article’s purpose differently. Avoid repeating words from the title when possible. 
- Intros are relatively evergreen and high-level, so they can scale with future changes to the content on the page without needing to be frequently updated.
- For searchability, include keywords on the page's subject in the intro. 
- When a term in the intro has an acronym we’ll use elsewhere in the article, indicate the acronym.
- Intros generally don't contain permissions for any tasks contained within the article.

### Product callout

Use the product callout when a feature is available in specific products only and that availability cannot be conveyed by versioning alone. For example, if a feature is available for GHEC, GHES, and GHAE, you can version content about the feature for GHEC, GHES, and GHAE only. If a feature is available for Pro, Team, GHEC, GHES, and GHAE (but not Free), use a product callout to convey that availability.

All product callouts are stored as reusables in [`gated-features`](https://github.com/github/docs/tree/main/data/reusables/gated-features) and added in YAML frontmatter for relevant articles.

#### How to write a product callout
- Product callouts follow a strict format, clearly identifying the feature and which products it’s available in. 
- Product callouts also include a link to "GitHub’s products” and occasionally to another relevant article.
- Examples:
  - [Feature name] is available in [product(s)]. For more information, see "GitHub’s products.”
  - [Feature name] is available in public repositories with [free product(s), and in public and private repositories with [paid products]. For more information, see "GitHub’s products.”

#### Examples of articles with product callouts
Check the source files and `gated-features` to see how source content is written.
- [Roles in an enterprise](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)
- [Managing a branch protection rule](https://docs.github.com/en/github/administering-a-repository/managing-a-branch-protection-rule)
- [Managing team synchronization for an organization](https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)

### Permissions statements

Every procedure includes a permissions statement explaining the role required to take the action described in the procedure, helping customers understand whether they'll be able to complete the task.

Occasionally, it's relevant to mention required permissions in conceptual content, especially in standalone conceptual articles. Make sure to also include a permissions statement in related procedures (or write a longer article combining all of the content).

#### How to write a permissions statement
- When a single set of permissions applies to all procedures in an article, use the [permissions frontmatter](https://github.com/github/docs/tree/main/content#permissions). 
- When an article contains multiple procedures and different permissions apply, include a separate permissions statement under each relevant header, before each procedure. 
- Don't include permissions in an article’s intro.
- Roles exist at different levels. Refer only to the role at the same level as the action. For example, you need admin access to a repository (repository-level role) to configure protected branches. You can get admin access to a repository by being an organization owner (organization-level role), but the repository-level role is what actually governs your ability to take the action, so that is the only role that should be mentioned in the permissions statement.
- Language to use in a permissions statement:
  - [ACCOUNT ROLE] can [ACTION].
  - People with [FEATURE ROLE] access for a [FEATURE] can [ACTION].
  - AVOID: [ACCOUNT ROLE] and people with [FEATURE ROLE] access for a [FEATURE] can [ACTION].

#### Examples of permissions statements
- Article with separate permissions statements for each procedure: [Upgrading your GitHub subscription](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription)
- Article with single permissions statement for multiple procedures: [Enforcing repository management policies in your enterprise account](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account)

### Table of contents
Tables of contents are automatically generated. For more information see "[Autogenerated mini-TOCs](https://github.com/github/docs/tree/main/content#autogenerated-mini-tocs)."

### Prerequisites

Prerequisites are information that customers need to know before proceeding with a procedure, so that they can prepare everything they need before starting the task.

#### How to write prerequisites
- Write prerequisites immediately before a procedure's numbered steps.
- You can use a list, a sentence, or a paragraph to explain prerequisites.
- You can also use a separate prerequisites section when:
  - The prerequisite information is very important and should not be missed.
  - There's more than one prerequisite.
- To repeat or highlight important information about data loss or destructive actions, you may also use a warning or danger callout to share a prerequisite.

#### Title guidelines for prerequisites
- When using a separate section, use a header called `Prerequisites`

#### Examples of articles with prerequisites sections
- [Installing GitHub Enterprise Server on AWS](https://docs.github.com/en/enterprise-server@latest/admin/installation/installing-github-enterprise-server-on-aws)
- [Enabling subdomain isolation](https://docs.github.com/en/enterprise-server@latest/admin/configuration/enabling-subdomain-isolation)

### Troubleshooting content

Troubleshooting content includes built-in errors we expect users to encounter, or common problems reported to support. Use troubleshooting sections in guides or procedural articles to keep solutions close to procedures. Work with support ombuds and product managers to surface common errors and include them in the documentation.

#### How to write troubleshooting content 
- Use any GitHub Docs content type to create troubleshooting sections.
- Whenever possible, keep troubleshooting content contained within procedural content or guides. 
- You can create a troubleshooting article when it makes sense to keep it separate, such as when there’s a large amount of troubleshooting content on a particular topic.

#### Title guidelines for troubleshooting content
- Troubleshooting [noun]
- Error: [error name]

#### Examples of troubleshooting content
- Troubleshooting SSH key generation
- Placeholder: Upcoming Pages error article

### Further reading

Further reading sections highlight additional targeted articles that aren’t already included within the article’s content or sidebar. Use further reading sections sparingly when they provide real value.

#### How to write a further reading section
- Use a bulleted list. 
- Use further reading sections sparingly and when they provide high value - see style guide for guidelines on linking.

#### Title and format for further reading sections
```
### Further reading
- "[Article title](article-URL)”
- [External resource title](external-resource-URL) in External Resource Name
```
