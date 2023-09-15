# Content model for GitHub Docs

**Note:** This version of the content model is no longer maintained and will be deprecated. See the [style guide](https://docs.github.com/en/contributing/writing-for-github-docs/style-guide) on docs.github.com for the most up to date version. Open any pull requests against the `contributing/writing-for-github-docs/style-guide.md` file.

_Full TOC :arrow_upper_left:_

- [Introduction](#introduction)
- [Content structure](#content-structure)
- [Content types](#content-types)
- [Contents of a GitHub Docs article](#contents-of-a-github-docs-article)

## Introduction

This content model explains the goals of each type of content we create within GitHub Docs, and what to include when you're writing or updating an article. We use a model to ensure that our content consistently, clearly, and comprehensively communicates what people need to achieve their goals with GitHub quickly and easily.

We use these types across all documentation sets to provide a consistent user experience––any content type applies to any product or audience. Our content types evolve over time and we add new types as needed. We only publish content that follows the model.

Consistency helps people form mental models of the documentation and understand how to find the information they need as they return to GitHub Docs over time. It’s also more efficient to maintain and update consistent content, making it easier and quicker to contribute to docs whether you're an open source contributor making your first commit or a GitHub writer documenting an entire new product.

## Content structure

Docs are organized into multiple levels of hierarchy on our site:

- Top-level doc set
  - Categories
    - Map topics
      - Articles

### Homepage content

The GitHub Docs homepage, [docs.github.com](https://docs.github.com/), highlights the most important topics that people want to find. We limit the number of doc sets on the homepage so that people can find information and the homepage does not become overcrowded and difficult to search.

The homepage includes all top-level doc sets and some categories. Content on the homepage is organized around GitHub concepts and practices. For example, the "CI/CD and DevOps" group includes top-level doc sets for GitHub Actions, GitHub Packages, and GitHub Pages.

#### Adding a doc set to the homepage

The goal of the homepage is to help people find information about the GitHub feature or product that they want to learn about. Every item on the homepage dilutes the discoverability of every other item, so we limit the number of doc sets included on the homepage.

If a new top-level doc set is created, it is added to the homepage. 

If a category serves as the starting point for using a GitHub product or feature, it can be added to the homepage.

For example, under the "Security" grouping on the homepage, in addition to the "[Code security](https://docs.github.com/en/code-security)" top-level doc set, the "[Supply chain security](https://docs.github.com/en/code-security/supply-chain-security)," "[Security advisories](https://docs.github.com/en/code-security/security-advisories)," "[Dependabot](https://docs.github.com/en/code-security/dependabot)," "[Code scanning](https://docs.github.com/en/code-security/code-scanning)," and "[Secret scanning](https://docs.github.com/en/code-security/secret-scanning)" categories are included because each of those categories are the entry point to GitHub products and features. "[Security overview](https://docs.github.com/en/code-security/security-overview)" is not included on the homepage because it provides additional information for using code security products and is not an introduction to a product or feature.

### Top-level doc set

Top-level doc sets are organized around a GitHub product, feature, or core workflow. All top-level doc sets appear on the Docs homepage. You should only create a top-level doc set when there is a large amount of content to be contained in the new doc set, multiple categories that are broken down into map topics, and the topic applies across products, features, or account types. If the content could fit in any existing top-level doc set, it probably belongs in that existing doc set.
- Top-level doc sets are of roughly equal importance to one another (each is centered on a GitHub product or major feature)
- Most top-level doc sets have a landing page layout, unless there is a significant exception. For example, the "[Site policy](https://docs.github.com/en/site-policy)" doc set does not have guides or procedural articles like other doc sets, so it does not use a landing page layout.

#### Titles for top-level doc sets
- Feature or product based.
- Describes what part of GitHub someone is using.
- Examples
  - [Organizations](https://docs.github.com/en/organizations)
  - [GitHub Issues](https://docs.github.com/en/issues)

### Category

Categories are usually organized around a feature or a discrete set of tasks within a top-level doc set, aligning with product themes. A category's subject isn't so broad that its contents are hard to manage or the category grows too large to use. Some categories appear on the Docs homepage.
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
  - [Understanding your software supply chain](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain)
  - [Managing users in your enterprise](https://docs.github.com/en/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise)

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

Titles fully describe what a page is about, and what a user will know by reading it. 

Titles are challenging! Use these general guidelines to help create clear, helpful, and descriptive titles. See below for specific guidelines for each content type.

#### Titles for all content types
- Titles clearly describe what a page is about. They are descriptive and specific.
  - Use: Browsing actions in the workflow editor
  - Use: Example of configuring a codespace
  - Avoid: Using the workflow editor sidebar
  - Avoid: Example
  - Titles have hard limits for length to keep them easy to understand (and easier to render on the site): 
     - Category titles: 67 characters and [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) < 27 characters
     - Map topic titles: 63 characters and [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) < 30 characters
     - Article titles: 80 characters, 60 if possible, and [`shortTitle`](https://github.com/github/docs/tree/main/content#shorttitle) < 31 characters, ideally 20-25 characters
- Titles are consistent across a content type
  - See specific guidelines for each content type
  - Titles aren’t repetitive––vary the verbs used for procedure or map topic titles when possible
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

### Topics

Topics are used to filter articles and are searchable across the docs site. For some layouts, such as landing pages or guides, people can select which articles are displayed by filtering topics. Use these guidelines to help choose which topics to add to an article's frontmatter. For more information on adding topics to an article see, "[Topics](https://github.com/github/docs/tree/main/content#topics)" and for a list of all allowed topics, see [`allowed-topics`](https://github.com/github/docs/blob/main/data/allowed-topics.js).

#### Topics for all content types
- All articles should have at least one topic
- Use nouns as topics
- Topics help people meaningfully group content
  - When possible, use more specific topics that are relevant and not just broad topics. For example, `REST` or `GraphQL` rather than just `API`
  - Ensure that topics on similar articles are consistent so that people who filter by a topic get all of the relevant articles. For example, all articles about CI should have the `CI` topic plus more specific topics
  - Avoid ambiguous topics. For example, `Actions` may not be a useful topic within the Actions product since it could refer to the product GitHub Actions or the product element called an action
- Topics add value beyond and do not replicate the article’s title, type, or category
  - For example, within the Actions product, `Actions` does not add value since someone in this section of the docs would already know that they are looking at Actions docs
- Use `Fundamentals` for articles related to the core concepts of a product area.
  - Use: `Fundamentals` in an article like “Introduction to GitHub Actions”
  - Avoid: `Actions` in an article like "Introduction to GitHub Actions"
- Commonly-recognized abbreviations can be used, but obscure or ambiguous abbreviations should be avoided
  - Use: `CI` instead of `Continuous integration`
  - Avoid: `AS` instead of `Advanced Security`
- Use the short forms of GitHub product names
  - Use: `Actions` instead of `GitHub Actions`

#### Checklist for choosing topics
Consider these questions to help choose topics for an article. Not every article will have a topic for each item in the checklist.

- [ ] What is the feature or product area?
  - Example: `Enterprise`
- [ ] Is the article about a sub-feature (unless the product name matches the feature name)?
  - Example: `Dependabot`
- [ ] Is the feature part of a restricted program?
  - Example: `Advanced Security`
- [ ] What element of the feature or product is the article?
  - Example: `Organizations`
- [ ] What is the broad purpose of the article?
  - Example: `Permissions`
- [ ] What programming languages, package managers, or ecosystems does the article explicitly address? (Note: only include these topics if it adds value to someone filtering the docs, not just if an article lists supported languages, package managers, or ecosystems.)
  - Example: `Ruby`

### Reusing content

We use reusable and variable strings to use the same chunk of content, such as a procedural step or a conceptual paragraph, in multiple places. We generally don't reuse large sections of articles without a specific reason. When an entire section of an article might be relevant in more than one article, take a look at the purpose of both. Is there an opportunity to create a single, long-form article? Refer to the content models to clarify the best permanent home for the information, and link to it from the other article.

## Content types

Any of these content types can be shared as an article on its own, and some content types can also be used as sections within a larger article.

### Conceptual

Conceptual content helps people understand a feature or topic by providing a clear, high-level overview, explanation of how the feature or topic can help them on their journey, and context like use cases or examples. Conceptual content is clear enough for a novice audience but also includes relevant information for advanced users. People most often use conceptual content when they're learning.

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

Referential content provides detailed information that people need while they're actively using a feature.

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
  - Supported languages in [GitHub Mobile](https://docs.github.com/en/get-started/using-github/github-mobile#supported-languages-for-github-mobile)
  - Hardware considerations in [Installing GitHub Enterprise Server on AWS](https://docs.github.com/en/enterprise-server@latest/admin/installation/installing-github-enterprise-server-on-aws)

### Procedural

Procedural content helps people complete a task from start to finish while they're using GitHub. Procedural content gives context on how the task fits into someone's larger journey.

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

### Release notes

Release notes enable readers to understand and prepare for the customer-facing changes in each release of GitHub's versioned enterprise products (e.g., GitHub Enterprise Server). Good release notes provide administrators the necessary information to plan system upgrades in environments that require change control, and support end users who want to understand and prepare to use new GitHub features and functionality. 

Writers source, edit, and publish release notes in collaboration with product DRIs, feature owners, and individual engineers at GitHub. For each individual release, we group release notes by predefined types.

We publish the release notes for [GitHub Enterprise Server](https://docs.github.com/enterprise-server/admin/release-notes) (GHES) and [GitHub AE](https://docs.github.com/github-ae@latest/admin/release-notes) (GHAE) on GitHub Docs, in the "Enterprise administrators" documentation set. 

#### Types of releases

GitHub Docs provides release notes for feature releases of GHES and GHAE, and for patch releases of GHES. For more information about releases of each product, see "About upgrades to new releases" in the [GHES](https://docs.github.com/enterprise-server/admin/overview/about-upgrades-to-new-releases) or [GHAE](https://docs.github.com/github-ae@latest/admin/overview/about-upgrades-to-new-releases) documentation.

#### Guidance and example release notes

You can find guidance for the format, style, and tone of release notes, as well as examples of each type of note, in the [Content style guide for GitHub Docs](https://github.com/github/docs/blob/main/contributing/content-style-guide.md#release-notes).

### Troubleshooting

Troubleshooting content includes built-in errors we expect users to encounter, common problems reported to support, and situations people might encounter while completing tasks. Use troubleshooting sections in guides or procedural articles to keep solutions close to procedures. Work with support and product managers to surface common errors and include them in the documentation.

#### Known issues
Known issues are a subset of troubleshooting content specifically designed to respond to bugs, UX/UI issues, and other product quirks that generate a high volume of support tickets. Where troubleshooting content can describe errors that people *might* encounter, known issues explain problems that people *will* encounter.

Like all troubleshooting content, known issues can be a section in an article or a standalone article. If a known issue applies to a specific article, document it in that article. If a known issue applies to a specific set of articles or conceptual grouping of features, or if a product or feature has multiple known issues that should be grouped together, create a dedicated "Known issues with NAME" article.

Known issue content for a product or feature does not need to be comprehensive. Unlike other troubleshooting content, some known issues may not have workarounds. The goal of documenting an issue without a workaround is to help people confirm that the issue exists and save them time searching for a solution that doesn't exist yet after GitHub has already determined there isn't a workaround.

Product and feature owners (PMs and EMs) should help plan and review known issue content.

Use known issues to explain the following situations.

- Product behavior that regularly contradicts user expectations, but is not yet prioritized for remediation.
- Behavior that regularly prevents the use of the product or feature for a common purpose.
- Rare or severe bugs that GitHub has not yet prioritized fixing, and that are not explained in the product or by existing content on GitHub Docs.

#### How to write troubleshooting content 
- Use any GitHub Docs content type to create troubleshooting sections.
- Whenever possible, keep troubleshooting content contained within procedural content or guides.
- You can create a troubleshooting article when it makes sense to keep it separate, such as when there’s a large amount of troubleshooting content on a particular topic.
- You can create a troubleshooting map topic if a product or feature has many troubleshooting articles, for example "[Troubleshooting SSH](https://docs.github.com/en/authentication/troubleshooting-ssh)."

#### Title guidelines for troubleshooting content
- Troubleshooting FEATURE
- Error: ERROR NAME
- Known issues for PRODUCT

#### Examples of troubleshooting content
- "[Troubleshooting SSH](https://docs.github.com/authentication/troubleshooting-ssh)"
- "[Using GitHub Enterprise Server with a load balancer](https://docs.github.com/enterprise-server@latest/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#troubleshooting-connectivity-through-a-load-balancer)"
- [Known issues](https://docs.github.com/enterprise-server@3.7/admin/release-notes#3.7.8-known-issues) in the GitHub Enterprise Server release notes
- "[Error: We're doing an SSH key audit](https://docs.github.com/en/authentication/troubleshooting-ssh/error-were-doing-an-ssh-key-audit)"

### Combining multiple content types

Often, it's helpful to group information in context to help people complete a complex task, understand a set of related tasks, or illustrate an entire workflow. Use longer articles combining content types to ensure people find contextual content in the right place. Longer articles also help eliminate duplication of content and prepare content to scale as more options are added to the product. People most often need longer articles while actively using the product, and they may need to consult the article at different points on their journey.

#### How to combine multiple content types in an article
- Use conceptual, procedural, referential, troubleshooting, or known issue content in a longer article, and do not use quickstart or tutorials
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

Quickstarts are useful when someone already understands the feature or product and is ready to try it out. Users of quickstarts are not looking for an explanation and don't need to be convinced to use the product––they just want instructions quickly. Users who don't understand a step are willing to dig deeper in a separate doc.

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
  - Include 2-3 actionable next steps that the user take after completing the quickstart. Always link to conceptual content on the feature or product. You can also link off to other related information on docs.github.com or in GitHub Skills.

#### Title guidelines for quickstarts
- When the guide helps someone get started with a new tool, preface the title with "Quickstart", e.g. "Quickstart for GitHub Actions" or "Quickstart: Procedural title"
- For other use cases, follow the title guidelines for procedures and omit the word "Quickstart"

#### Examples of quickstarts
- [Quickstart for GitHub Actions](https://docs.github.com/en/actions/quickstart)
- [Quickstart for GitHub Discussions](https://docs.github.com/en/discussions/quickstart)
- [Quickstart for GitHub Educators](https://docs.github.com/en/education/quickstart)

### Tutorial

Tutorials help people learn about products and solve real world problems by guiding them through the entire workflow to complete a task. Tutorials are more conversational in tone than other content. A tutorial feels like a developer-to-developer conversation while remaining accessible to readers with varied technical knowledge. Products with tutorials must already have a quickstart. For bite-sized workflows, use the quickstart model instead.

Tutorials are useful when someone has a basic understanding of the product and is interested in extending their understanding to solve a specific problem. Tutorials are for people who want expert advice and a detailed discussion of best practices related to their problem. Tutorials also help people who've implemented similar solutions in the past with other products use GitHub. Tutorials can also help people validate whether the solution is appropriate for their needs.

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
    - Relevant GitHub Skills
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
5. Tool switcher (conditional)
6. Table of contents
7. Conceptual content
8. Referential content
9. Prerequisites
10. Procedural content
11. Troubleshooting content
12. Further reading (conditional)

Here's what some of these elements look like rendered in an article.

![Article with title, intro, permissions, product callout, conceptual section, procedural section, and table of contents labeled](/contributing/images/illustration-of-article-contents.png)

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

### Permissions statements

Every procedure includes a permissions statement explaining the role required to take the action described in the procedure, which helps people understand whether they'll be able to complete the task.

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

### Tool switcher

Some articles have content that varies depending on what tool someone uses to complete a task, such as the GitHub CLI or GitHub Desktop. For most content, the same conceptual or procedural information will be accurate for multiple tools. However, if the only way to make information clear and accurate is by distinguishing content by tool, use the tool switcher. Do not use the tool switcher just to show examples in different languages. Only use the tool switcher if the tasks or concepts change based on what tool someone uses. For more information on using the tool switcher, see the [tool switcher content model](./tool-switcher.md).

### Table of contents
Tables of contents are automatically generated. For more information see "[Autogenerated mini-TOCs](https://github.com/github/docs/tree/main/content#autogenerated-mini-tocs)."

### Conceptual content
Conceptual content helps people understand or learn about a topic. See "[Conceptual](#conceptual)" above.

### Referential content
Referential content provides structured information related to actively using a product or feature. See "[Referential](#referential)" above.

### Prerequisites

Prerequisites are information that people need to know before proceeding with a procedure, so that they can prepare everything they need before starting the task.

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

### Procedural content
Procedural content helps people complete tasks. See "[Procedural](#procedural)" above.

### Troubleshooting content

Troubleshooting content helps people avoid or work through errors. See "[Troubleshooting](#troubleshooting)" above.

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
