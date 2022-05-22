# Content style guide for GitHub Docs <!-- omit in toc -->

Welcome to the content style guide for [GitHub Docs](https://docs.github.com/).

These guidelines are specific to GitHub’s documentation. For general style questions or guidance on topics not covered here, see the [GitHub Brand Guide](https://brand.github.com/content/) first, then the [Microsoft Style Guide](https://docs.microsoft.com/style-guide/welcome/). For markup specific to source content on docs.github.com, see our [markup reference guide](content-markup-reference.md).

## Table of contents <!-- omit in toc -->
- [The GitHub Docs approach to style](#the-github-docs-approach-to-style)
- [Callouts](#callouts)
  - [Formatting callouts](#formatting-callouts)
- [Code](#code)
  - [Code blocks](#code-blocks)
  - [Commands](#commands)
  - [Examples](#examples)
  - [Indentation](#indentation)
  - [Scheduled workflows](#scheduled-workflows)
- [Headers](#headers)
- [Images](#images)
  - [Alt text](#alt-text)
  - [Filenames](#filenames)
  - [Screenshots](#screenshots)
- [Inclusive language](#inclusive-language)
  - [Resources about inclusive language](#resources-about-inclusive-language)
- [Linebreaks](#linebreaks)
- [Links](#links)
  - [Links to external resources](#links-to-external-resources)
- [Lists](#lists)
- [Procedural steps](#procedural-steps)
- [Product names](#product-names)
- [Punctuation](#punctuation)
- [Reusables and variables](#reusables-and-variables)
- [Tables](#tables)
- [Titles](#titles)
- [User interface elements](#user-interface-elements)
  - [Boldface](#boldface)
  - [Branch names](#branch-names)
  - [Buttons](#buttons)
  - [Checkboxes](#checkboxes)
  - [Drop-down menus](#drop-down-menus)
  - [Dynamic text](#dynamic-text)
  - [Location](#location)
  - [Radio buttons](#radio-buttons)
  - [Repository names](#repository-names)
  - [User interface text](#user-interface-text)
  - [More resources](#more-resources)
- [Voice and tone](#voice-and-tone)
- [Word choice and terminology](#word-choice-and-terminology)
  - [Abbreviations](#abbreviations)
  - [Accounts](#accounts)
  - [Acronyms](#acronyms)
  - [Apps](#apps)
  - [Inclusive language](#inclusive-language-1)
  - [Prepositions](#prepositions)
  - [Product names](#product-names-1)
  - [Terms to use or avoid](#terms-to-use-or-avoid)
- [Word order](#word-order)
  - [Strings of nouns](#strings-of-nouns)

## The GitHub Docs approach to style

- Our style guide aims for simplicity. Guidelines should be easy to apply to a range of scenarios.
- Decisions aren’t about what’s right or wrong according to the rules of grammar or the style guide, but about what’s best for our users. We're flexible and open to change while maintaining consistency.
- To scale the style guide as our team and documentation sets grow, and to create high-quality, meaningful content that serves users, we focus our attention on high-impact, high-value scenarios rather than attempting to comprehensively cover every style question.
- Consistency and grammatical correctness are important, but not as important as clarity and meaning.
- When making a style or structure decision, we consider the flow of information within the unit of content and the context of the information.
- When a question specific to help documentation isn’t covered by the style guide, we think it through using these principles, then make a decision. If a reviewer asks about it, we're prepared to discuss the decision.

## Callouts

Callouts highlight important information that customers need to know. We use standard formatting and colors for different types of callouts across doc sets.

Use callouts sparingly for high-value information - do not include general information, permissions, or prerequisites in callouts. Do not include more than two bullet points in a callout.

There are three types of in-content callouts: notes, warnings, and danger notices.

### Formatting callouts

Each callout starts with text indicating the type of callout (e.g. **Warning**:) to orient the reader (whether accessing the site visually or with a screen reader) and helps every user gauge the importance and necessity of the information in the callout.

Notes are rendered in blue `{% note %}` tags.
- Notes provide useful information or reminders for the user, but the information is not required to follow. Notes may not be relevant or necessary to every user.
- Precede note content with `**Note:**`.

Warnings and danger notices are rendered in red `{% warning %}` tags.
- Warnings are potentially dangerous actions that a user should heed before continuing with a task. They are often non-optional steps.
  - Precede content with `**Warning:**`.
- Danger notices are dangerous actions that a user should exercise extreme caution before performing. They often involve the potential for data loss or other destructive actions.
  - Precede content with `**Danger:**`.

For more information on formatting callouts, see “Callouts” in the [markup reference guide](content-markup-reference.md).

## Code

### Code blocks

Keep lines in code samples to about 60 characters, to avoid requiring readers to scroll horizontally in the code block. Locate explanatory text before the code block, rather than using comments inside the code block.

Within code blocks:
- Do not use markup before the command output.
- Only use `$` before the command itself if you’re showing the command’s output in the same block.

### Commands

Use inline code blocks to refer to short command names.
- **Use:** To check the status of a running cluster, use the `ghe-cluster-status` command.

Use command blocks for longer or more complex commands.
- **Use:** Enable maintenance mode according to your scheduled window by connecting to the administrative shell of any cluster node and running:

  ```
  ghe-cluster-maintenance -s
  ```

Avoid inline links in command names.

### Examples

When code examples refer to a larger file, show the relevant section of the file, so that users understand how to edit their own code in context.
- **Use:**

```
on:
  schedule:
    - cron:  "40 19 * * *"
```

- **Avoid:**

```
schedule:
  - cron:  "40 19 * * *"
```

### Indentation

In YAML examples, such as actions and workflow files, use two spaces to indent lines within nested lists and block sequences.

- **Use:**

```yaml
    steps:
      - uses: actions/checkout@v2
      - name: Setup Python
        uses: actions/setup-python@v2
        with:
          python-version: ${{ matrix.python }}
```

### Scheduled workflows

Workflow runs are delayed when too many workflows run at once. Since many users copy code from the GitHub docs, we should use examples that guide users away from congested times.

- Do not use examples that run on the hour. (The Actions team reports that times at the start of the hour, especially UTC midnight, are disproportionately overloaded.)
- Do not use examples that run more frequently than necessary. For example, instead of running every 5 minutes, consider if the example makes sense to run every 30 minutes instead.
- Use a different time for each example.

## Headers

Use H3 for headers, and H4 for subheaders. When referring to headers, surround the header name with quotation marks.
- **Use:** Under “User licenses”, view your total licenses.

To orient readers and help them understand if the section is relevant to them, include introductory content after a header - don’t locate a subheader directly following a header.

## Images

### Alt text

Every image must include an alt attribute that provides a complete description of the image for the user. For more information, see “[Images, image maps, and multimedia](https://docs.microsoft.com/style-guide/accessibility/graphics-design-media#images-image-maps-and-multimedia)” in Microsoft’s Style Guide.

### Filenames

Be descriptive when naming image files: include the name, action, and UI element in the filename. Mirror product language. Use kebab case. If replacing an image, use the exact filename.
- **Use:** `data-pack-purchase-button.png`
- **Avoid:** `purchase_button.png`

### Screenshots

When you take a screenshot, avoid overly wide images. If you're trying to bring attention to a button, don't take a shot of the entire page. Focus on the area around the button instead and crop near the focal point of the image. Leave enough of a margin around the focal point so that some other elements of the page are visible, helping the viewer find the area of the screenshot when looking at the user interface.

Do not include your username or avatar in any images. If a screenshot must include a username or avatar, use the Inspect function in your browser to add the [Octocat](https://github.com/octocat)'s username or avatar instead.

## Inclusive language

As home to the largest developer community in the world, GitHub is committed to promoting diversity and inclusion in every aspect of what we do. It is critical that all of our documentation is inclusive and respectful of our audience, which consists of people in widely varying circumstances from all over the planet. When we write our documentation, we use words that are inclusive, anti-racist, and accessible.

Individual words might be small, but together they can create community, belonging, and equity. Be empathetic in all word and style choices. Be accurate when referring to people and communities.

| Use | Avoid |
| --- | --- |
| Allowlist | Whitelist |
| Denylist | Blacklist |
| Default/Main branch | Master branch |

### Resources about inclusive language

GitHub Brand Guide:
- [People and communities](https://brand.github.com/content/grammar#people-and-communities)

The Microsoft Style Guide offers resources on bias-free communication, accessibility terms, and writing for all abilities:
- [Bias-free communication](https://docs.microsoft.com/style-guide/bias-free-communication)
- [Writing for all abilities](https://docs.microsoft.com/style-guide/accessibility/writing-all-abilities)
- [Accessibility terms](https://docs.microsoft.com/style-guide/a-z-word-list-term-collections/term-collections/accessibility-terms)

More resources for learning about inclusive and accessible language and style:
- [18F Content Guide on Inclusive Language](https://content-guide.18f.gov/inclusive-language/)
- MailChimp Content Style Guide:
  - [Writing About People](https://styleguide.mailchimp.com/writing-about-people/)
  - [Writing for Accessibility](https://styleguide.mailchimp.com/writing-for-accessibility/)
- [Readability Guidelines](https://readabilityguidelines.co.uk/)
- [Conscious Style Guide](https://consciousstyleguide.com/)

## Linebreaks

For plain text, use linebreaks to separate paragraphs in the source (two consecutive linebreaks), rather than to create visual space in the source. Avoid unneeded linebreaks, especially in lists.

## Links

Introduce links consistently using a standard format that clearly indicates where we’re linking: "For more information, see X [or "Page/article title"] in the X documentation." Do not include quotation marks within a hyperlink.

Links should be meaningful and provide high value to the user’s journey - link out carefully. Move links that are helpful but not necessary to an article’s further reading section. Do not repeat the same link more than once in the same article or under the same H3 header.

For accessibility and readability, avoid inline or midsentence links.
- **Use:** OAuth2 tokens can be acquired programmatically for applications that are not websites. For more information, see "[Setting up and registering OAuth Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/)" and "[Create a new authorization](https://docs.github.com/en/enterprise-server@2.22/rest/reference/oauth-authorizations/#create-a-new-authorization)."
- **Avoid:** Read [more about OAuth2.](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/) Note that OAuth2 tokens can be [acquired programmatically](https://docs.github.com/en/enterprise-server@2.22/rest/reference/oauth-authorizations/#create-a-new-authorization), for applications that are not websites.     

For more information on links and accessibility, see “[Links](https://readabilityguidelines.co.uk/content-design/links/)” in the Readability Guidelines project.

### Links to external resources

When linking to an external site, choose the most useful resource for the context of the link - you can link to a whole site if it's a general reference or to a specific page if that would be more helpful.

It's not necessary to link to an external product’s website when we mention an external product.

## Lists

For general guidelines, see “[Lists](https://brand.github.com/content/grammar#lists)” in GitHub’s Brand Guide.

Capitalize the first letter in each line of a list. Use periods at the end of lines in a list only if the line contains a complete sentence.

When writing a list of items that consist of primary and secondary text, such as a `term` and its definition, use a colon delimiter. The secondary text should be capitalized as if it was the beginning of the line. For example:
* `foo`: Something that provides bar.
* `bar`: Something provided by foo.

Formatting unordered lists:
- If the order of items in the list is not important, alphabetize the list items.
- If the order is important, then order the list by the importance to the reader (for example, moving from broadest audience and applicability to a more specialized audience).

When introducing a list, avoid phrasing like “the following” or “these”, terms which are difficult to localize. Instead, be descriptive, yet general enough to allow a list to scale or change without having to update the description.

## Procedural steps

Procedures give readers a set of sequential steps to follow to complete a task. Always use numbered lists for procedures. Give readers all of the prerequisites or conceptual information they’ll need to complete the task before the procedure, rather than including it within a specific step.

Each step must include an action. You can also choose to include whether a step is optional, explain the reason or result of the step, and orient the reader by describing the location of the action, before guiding them to complete the action.

Use a consistent order to present information within each step.
1. If the step is optional, indicate that first.
2. When needed for clarity, or to reinforce the severity of a destructive or confusing action, explain the reason for or result of the step.
3. Describe the location the user will find the action in.
4. Action.

**Use:** Optionally, to [REASON], in [LOCATION], take [ACTION].

Examples:
- Click **Payment information**.
- Under your organization name, click **Settings**.
- To confirm your change, click **Remove credit card**.
- Optionally, to see your plan’s details, click **Show details**.
- Under "GitHub Sponsors", to the right of the sponsored open source contributor, click [down arrow octicon] next to your sponsored amount, then click **Change tier**.

## Product names

Use full product names. Do not abbreviate or shorten product names unless directly reproducing content from the product (e.g. UI copy or API responses).

Use product name variables to render product names - do not write product names in plain text. This makes product name changes easier to implement across the site and avoids typos in our product names. For more information about product name variables, see “Reusables and variables” in this document and the data directory of the github/docs repository.

Product names are always singular.
- **Use:** GitHub Actions helps you automate your software development workflows.
- **Avoid:** GitHub Actions help you automate your software development workflows.

Take care to distinguish between product names and product elements. For more information, see “[Terminology](https://brand.github.com/content/terminology)” in GitHub’s Brand Guide.

| Product | Element |
| --- | --- |
| GitHub Actions | an action |
| GitHub Packages | a package |
| GitHub Pages | a GitHub Pages site |

## Punctuation

Follow standard American English punctuation rules. For more guidance, see “[Punctuation](https://brand.github.com/content/grammar#punctuation)” in GitHub’s Brand Guide and “[Punctuation](https://docs.microsoft.com/style-guide/punctuation)” in the Microsoft Style Guide.

## Reusables and variables
Use reusable strings for individual nouns (e.g. product names) or for complete sentences or paragraphs. Sentence fragments and phrases should not be contained in reusable strings as they can cause problems when content is localized. For more information, see the [data directory](../data) in the github/docs repository and the “[Product names](#product-names)” section of this document.

## Tables

A table’s contents should be clear from the preceding content - avoid unneeded descriptions. If you must describe a table, use complete sentences closed with a period.
- **Use:** Nothing or a clear header.
- **Avoid:** “The table below shows what kind of migration data is exported:”

## Titles

Use quotation marks around article titles, whether the article is hosted on GitHub Docs or elsewhere. Do not include quotation marks around the names of external sites.

For further guidance, see “[Formatting titles](https://docs.microsoft.com/style-guide/text-formatting/formatting-titles)” in Microsoft’s Style Guide.

## User interface elements

### Boldface

Use bold to describe UI elements that can be interacted with.
- In the left sidebar, click **Billing**.
- Look in the merge box at the bottom of the pull request's **Conversation** tab.
- Next to **Title**, add a descriptive label for your new key.

### Branch names

Use code formatting for branch names.
- `main`
- `<username>.github.io`

### Buttons

Format button names in bold and, whenever possible, omit the word “button.” To describe using a button, write “click”, not push or press.
- **Use:** Click **Pull request**.
- **Avoid:** Press the Pull request button.

### Checkboxes

Format checkbox names in bold and omit the word “checkbox.” To describe choosing or clearing a checkbox, use “select” or “deselect.”
- **Use:** Select **Enable for all new repositories**.
- **Avoid:** Check the “Enable for all new repositories” checkbox.

### Drop-down menus

Format drop-down menus in regular text and format clickable items within a menu in bold. Select drop-down menus (regardless of whether the menu name is a word or an octicon), and click their menu items.
- **Use:** Select the Backup email addresses drop-down menu and click **Only allow primary email**.

### Dynamic text

Use capital letters to indicate text that changes in the user interface or that the user needs to supply in a command or code snippet.
- **Use:** Click **Add USERNAME to REPONAME**.

### Location

Describe a user interface element’s location with standard terms.
- Under or above
- Next to
- Upper-left, upper-right, lower-left, lower-right
- Top of the page, bottom of the page, right side of the page, left side of the page

### Radio buttons

Format radio button labels in bold and omit the words “radio button” or any other descriptor. To describe using a radio button, write "select."

### Repository names

Use a standard format to refer to repositories. Link to repositories when helpful.
- **Use:** in the [account-name/repository-name](URL) repository

### User interface text

When referencing text in the user interface, reproduce the text exactly. Use quotation marks to surround UI text that cannot be interacted with.
- **Use:** Under “IP allow list”, click **Edit**.

### More resources
GitHub Brand Guide:
- [Referring to GitHub features and product elements](https://brand.github.com/content/terminology/#referring-to-github-features-and-product-elements)
- [Page names and UI references](https://brand.github.com/content/grammar#page-names-and-ui-references)
Microsoft Style Guide:
- [Formatting text in instructions](https://docs.microsoft.com/style-guide/procedures-instructions/formatting-text-in-instructions)

## Voice and tone

Use clear, simple language that’s approachable and accessible for a wide range of readers. For more information, see “[Voice](https://brand.github.com/content/voice)” in GitHub’s Brand Guide. To learn more about writing approachable content, see “[Microsoft's brand voice: Above all, simple and human](https://docs.microsoft.com/style-guide/brand-voice-above-all-simple-human) and “[Top 10 tips for Microsoft style and voice](https://docs.microsoft.com/style-guide/top-10-tips-style-voice).”

## Word choice and terminology

For general guidance and GitHub-specific terms, see “[Terminology](https://brand.github.com/content/terminology)” and “[Words that can be tricky](https://brand.github.com/content/grammar#words-that-can-be-tricky)” in GitHub’s Brand Guide. For more detailed guidance, see the “[A-Z word list](https://docs.microsoft.com/style-guide)” in Microsoft’s style guide.

### Abbreviations

Spell out words except when referring to a word that’s explicitly shortened in the product itself.
- **Use:** Repository
- **Avoid:** Repo
- **Use:** Administrator, people with admin permissions
- **Avoid:** Admins

Do not use symbols or octicons that aren’t used in GitHub’s user interface.
- **Use:** Click **File**, then click **Edit**.
- **Avoid:** Click **File > Edit**.

### Accounts

To avoid ambiguity and confusion, do not use product names as adjectives to describe accounts in any of our products. Instead, clarify the account type and choose clearer phrasing that avoids conflating accounts and products. When talking about accounts, only refer to the product name when needed to disambiguate between products.
- **Use:** Your organization account
- **Use:** Your user account on GitHub Enterprise Cloud
- **Avoid:** Your GitHub Enterprise Server organization
- **Use:** You can highlight your work on GitHub Enterprise Server by sending the contribution counts to your GitHub.com profile.

### Acronyms

Spell out acronyms the first time they’re used in an article, except in titles or headers.

### Apps

Use "apps" or "applications" in general content.
- **Use:** Publish and list your apps in GitHub Marketplace

Use "Apps" when referring to specific apps or types of apps.
- **Use:** GitHub App, OAuth App

GitHub Apps is always capitalized, because it’s a feature name.

### Inclusive language

See the “Inclusive language” section of this guide.

### Prepositions

Avoid ending a sentence with a preposition unless the rewritten sentence would sound awkward or too formal.

### Product names

See the “Product names” section of this guide.

### Terms to use or avoid

| Use | Avoid |
| --- | --- |
| person | user, customer |
| terminal | shell |
| username | login |
| sign in  | log in, login |
| sign up | signup |
| recommended limit | soft limit |
| email | e-mail |
| on GitHub | on a remote repository |
| press (a key) | hit, tap |
| type (in the user interface) | enter (in the user interface) |
| enter (in the command line) | type (in the command line) |

## Word order

### Strings of nouns

Avoid stacked modifiers (strings of nouns), which can lead to incorrect translations because translations may not be able to tell which word is modifying the other. You can rephrase the string of nouns using a preposition. If using a stacked modifier is essential, make sure the background information and context are clear so that readers and the translator can understand what is being modified.
- **Use:** Default source settings for public repositories
- **Avoid:** Public repository default source settings
