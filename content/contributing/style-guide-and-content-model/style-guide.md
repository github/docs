---
title: Style guide
intro: 'Follow this guide to make sure {% data variables.product.company_short %}''s documentation stays consistent and follows clear patterns that our readers can understand.'
versions:
  feature: 'contributing'
redirect_from:
  - /contributing/writing-for-github-docs/style-guide
---

> [!NOTE]
> These guidelines are specific to {% data variables.product.company_short %}'s documentation. For general style questions or guidance on topics not covered here, see the [Microsoft Style Guide](https://docs.microsoft.com/style-guide/welcome/). For markup specific to source content on docs.github.com, see "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/using-markdown-and-liquid-in-github-docs)." For any questions about the GitHub brand, see our "[GitHub Brand Guide](https://brand.github.com)."<!-- markdownlint-disable-line search-replace -->

## The {% data variables.product.prodname_docs %} approach to style

* Our style guide aims for simplicity. Guidelines should be easy to apply to a range of scenarios.
* Decisions aren’t about what’s right or wrong according to the rules of grammar or the style guide, but about what’s best for our users. We're flexible and open to change while maintaining consistency.
* To scale the style guide as our team and documentation sets grow, and to create high-quality, meaningful content that serves users, we focus our attention on high-impact, high-value scenarios rather than attempting to comprehensively cover every style question.
* Consistency and grammatical correctness are important, but not as important as clarity and meaning.
* When making a style or structure decision, we consider the flow of information within the unit of content and the context of the information.
* When a question specific to help documentation isn’t covered by the style guide, we think it through using these principles, then make a decision. If a reviewer asks about it, we're prepared to discuss the decision.

## Audit log events

We document each of the events that may appear in the audit logs for each type of account: user, organization, and enterprise.

* "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events)"
* "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization)"
* "[AUTOTITLE]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)" {% ifversion fpt %}in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}

When writing the description for an audit log event, describe the event that took place in a way that applies to all versions, using past tense and passive voice. Do not begin the sentence with phrases that are already implied by the context of the article, such as "Triggered by."

* **Use**: The visibility of a repository was changed.
* **Use**: Secret scanning was enabled for all new repositories.
* **Avoid**: An organization owner disabled a two-factor authentication requirement for the organization.
* **Avoid**: Triggered when a user updates which repositories a codespace can access.

## Alerts

Alerts emphasize information within an article that is of special importance and justifies breaking the flow of information.

Use alerts sparingly. Do not use consecutive alerts, or more than one alert per section.

Alerts should be concise. If the information consists of more than a couple of sentences, or requires an ordered or unordered list, consider placing the information under a section heading instead.

### Alert types

We use four types of alerts: Note, Tip, Warning, and Caution.

#### Note

Provides additional context that users may need to take into account. Tasks can be accomplished without the information in note alerts, but some users in some contexts may benefit from the note.

Notes are particularly useful for communicating parenthetical information that is not central to the process being described:
* Caveats that might affect the outcome of a process, such as specific user settings.
* Products and features that are subject to changes in availability, such as those in beta or being deprecated.

For example, "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#reviewing-github-token-metadata)" uses a note to inform users that metadata for {% data variables.product.prodname_dotcom %} tokens is currently in beta.

> [!NOTE]
> Metadata for {% data variables.product.prodname_dotcom %} tokens is currently in public beta and subject to change.

#### Tip

Recommendations, best practices or product hints. Tips contain non-essential information that users can follow at their discretion. Particularly useful in articles aimed at new users.

For example, "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile)" uses a tip alert to help users understand what to expect when they @mention an organization.

> [!TIP]
> When you @mention an organization, only those that you're a member of will autocomplete. You can still @mention organizations that you're not a member of, like a previous employer, but the organization name won't autocomplete for you.

#### Warning

Highlights potential risks that a user should be aware of before starting or continuing with a task.

Warning alerts are particularly relevant for processes that occur outside the {% data variables.product.prodname_dotcom %} UI, such as in the command line or through an API.

For example, "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)" includes instructions for the command line, and uses a warning alert to inform users that once issued, certificates cannot be revoked:

> [!WARNING]
> After a certificate has been signed and issued, the certificate cannot be revoked. Make sure to use the -V flag to configure a lifetime for the certificate, or the certificate can be used indefinitely.

#### Caution

Alerts users to dangerous or destructive actions that warrant extreme caution before performing, particularly where there is a security risk or potential for data loss.

Caution alerts will generally only be necessary when describing processes that occur outside the {% data variables.product.prodname_dotcom %} UI, such as in the command line or through an API.

### Formatting alerts

We use standard formatting and colors for different types of alerts across doc sets.

Alerts are rendered using Markdown.

Note:

```markdown
> [!NOTE]
> Keep this in mind.
```

Tip:

```markdown
> [!TIP]
> Here's a suggestion.
```

Warning:

```markdown
> [!WARNING]
> Be careful.
```

Caution:

```markdown
> [!CAUTION]
> Be extremely careful.
```

Liquid syntax for alerts is still supported and may still appear in older articles, but should not be used for new alerts.

For more information on formatting alerts, see “Alerts” in "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/using-markdown-and-liquid-in-github-docs#alerts)."

## Buttons

Landing pages and some articles have buttons that take people to relevant content in other articles or on other {% data variables.product.prodname_dotcom %} webpages. Buttons should be used when someone needs to navigate to another page to complete the task being described. For example, "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud)" has a button that takes people to the trial sign up page since that is the next step in the process of setting up a trial. The "[AUTOTITLE](/migrations)" landing page uses a button to direct people to the article that most people will need to read to start a migration.

If a button encourages people to navigate away from the {% data variables.product.prodname_docs %} site, follow the call to action (CTA) button guidelines. If you want to include another type of button on a landing page or article, you must get approval from the {% data variables.product.prodname_docs %} team.

## Call to action (CTA) buttons

CTA buttons emphasize a link that we expect or encourage people to navigate to after reading an article or as part of completing the task that an article describes. CTAs should only take people to {% data variables.product.company_short %}-owned domains. For example, the "Try {% data variables.product.prodname_copilot %}" CTA in "[AUTOTITLE](/free-pro-team@latest/copilot/using-github-copilot/getting-started-with-github-copilot)" links to the [GitHub Copilot settings menu](https://github.com/settings/copilot) on {% data variables.product.prodname_dotcom_the_website %}.

Only include a CTA button if navigating to the link supports user needs. Do not use CTA buttons solely for marketing GitHub features or products. In the above example, someone who wants to try {% data variables.product.prodname_copilot %} must navigate to the {% data variables.product.prodname_copilot_short %} settings menu and would likely want to after reading the article. In contrast, even though someone might use {% data variables.product.prodname_copilot_short %} as part of writing code that they then create a pull request for, we would not add a "Try {% data variables.product.prodname_copilot %}" CTA to "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)" since {% data variables.product.prodname_copilot_short %} is not connected to the user needs of "Creating a pull request." Most people will create pull requests without using {% data variables.product.prodname_copilot_short %}. But people visiting articles about getting started with {% data variables.product.prodname_copilot_short %} are probably interested in trying {% data variables.product.prodname_copilot_short %} if they are not already using it. So we add the CTA button to help people get where they are trying to go.

Style your CTAs using the following format.

```html
{% raw %}<a href="https://github.com/DESTINATION/URL?ref_cta=CTA+NAME&ref_loc=LOCATION&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Try PRODUCT NAME</span> {% octicon "link-external" height:16 %}</a>{% endraw %}
```

Replace the placeholders with the relevant information for your CTA.
* `DESTINATION/URL`: The URL that the button should navigate to.
* `CTA+NAME`: The name of the CTA. For example, `GHEC+trial` or `Copilot+Business+Trial`.
* `LOCATION`: The location in {% data variables.product.prodname_docs %} of the CTA. For example, `Setting+up+a+trial+of+GitHub+Enterprise+Cloud`.

## Code

### Code blocks

Keep lines in code samples to about 60 characters, to avoid requiring readers to scroll horizontally in the code block. Locate explanatory text before the code block, rather than using comments inside the code block. See "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/using-markdown-and-liquid-in-github-docs#code-sample-syntax-highlighting)" for more information on the syntax and formatting of code blocks.

Within code blocks:
* Specify the language of the sample after the first code fence. For a list of all supported languages, see "[Code languages](https://github.com/github/docs/blob/main/data/code-languages.yml)" in the [`github/docs`](https://github.com/github/docs) repository.
* Do not use HTML to style or markup a code block.
* Style any placeholders that people need to replace with their own values in all caps.
  * **Use:** `git checkout -b BRANCH-NAME`
  * **Avoid:** `git checkout -b <branch-name>`
* Do not use command prompts like `$` before the command itself. These prompts make it challenging for readers to copy and paste the command.
  * If you show a command and the command's output, comment out the output in the example.
  * **Use:**

    ```shell
    command
    # output
    ```

  * **Avoid:**

    ```shell
    $ command
    output
    ```

* If your code example includes `{` or `}` that should render, wrap that section in <code>&#123;% raw %&#125;</code> <code>&#123;% endraw %&#125;</code> to disable Liquid processing for that section.
  * **Use**:

    <pre>
    GITHUB_TOKEN: &#123;% raw %&#125;$&#123;&#123; secrets.GITHUB_TOKEN &#125;&#125;&#123;% endraw %&#125;
    </pre>

  * **Avoid**:

    <pre>
    GITHUB_TOKEN: $&#123;&#123; secrets.GITHUB_TOKEN &#125;&#125;
    </pre>

* If your code example includes content that should be parsed, wrap that section in `<pre>` `</pre>` tags to parse rather than escape the content in the section.

### Commands

Use inline code blocks to refer to short command names.
* **Use:** To check the status of a running cluster, use the `ghe-cluster-status` command.

Use command blocks for longer or more complex commands.
* **Use:** Enable maintenance mode according to your scheduled window by connecting to the administrative shell of any cluster node and running:

  ```shell
  ghe-cluster-maintenance -s
  ```

Do not include command prompts such as `$`. Avoid inline links in command names.

### Outputs

If you show the output of a command, comment out the output in the example so that people can copy and paste the command and execute it without modification.

* **Use:**

  ```shell
  git lfs install
  # Git LFS initialized.
  ```

* **Avoid:**

  ```shell
  $ git lfs install
  > Git LFS initialized.
  ```

### Examples

When code examples refer to a larger file, show the relevant section of the file, so that users understand how to edit their own code in context.
* **Use:**

<!-- markdownlint-disable yaml-scheduled-jobs -->
```yaml
on:
  schedule:
    - cron:  "40 19 * * *"
```

* **Avoid:**

```yaml
schedule:
  - cron:  "40 19 * * *"
```
<!-- markdownlint-enable yaml-scheduled-jobs -->

### File names and directory names

Use backticks to format references to file names and directory names in a monospaced font. If a file type generally follows a specific capitalization convention, such as all caps for README files, use the established convention.

* **Use:** In your `README.md` file, add info about your repository.
* **Use:** In your `.github/workflows/` directory, create the `example-workflow.yml` file.
* **Avoid:** In your _.github/workflows/_ directory, create the `example-workflow.yml` file.
* **Avoid:** Delete the **example.js** file.

### Indentation

In YAML examples, such as actions and workflow files, use two spaces to indent lines within nested lists and block sequences.

* **Use:**

```yaml
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ matrix.python }}{% endraw %}
```

To indent reusables, see [`data/reusables/README.md`](https://github.com/github/docs/tree/main/data/reusables#readme).

### Scheduled workflows

Workflow runs are delayed when too many workflows run at once. Since many users copy code from {% data variables.product.prodname_docs %}, we should use examples that guide users away from congested times.

* Do not use examples that run on the hour as these are the most congested times.
* Do not use examples that run more frequently than necessary. For example, instead of running every five minutes, consider if the example makes sense to run every 30 minutes instead.
* Use a different time for each example.

## Emphasis

Use bold to emphasize words or parts of a sentence. Use emphasis sparingly (no more than five contiguous words), and remember that it is a visual aid for scannability for sighted users.

* Do not bold words that have other formatting applied, such as all caps for placeholder text.
* For accessibility, do not use bolding as the only way to convey meaning or emphasis.

For example:

* **Use:** Managed user accounts **cannot create public content** or collaborate outside your enterprise.
* **Avoid:** Next to _**Title**_, add a descriptive label for your new key.

## Error messages

When you include the text of an error message from a {% data variables.product.company_short %} product or interface in an article, format the text according to the interface where the message appears.

* If the message appears in {% data variables.product.prodname_dotcom %}'s web interface, or in a graphical client app like {% data variables.product.prodname_desktop %} or {% data variables.product.prodname_mobile %}, treat the message like other text in the UI. For more information, see "[User interface text](#user-interface-text)."

* If the message appears in a command-line interface, log output, or a response from an API, reproduce the text exactly and use backticks to format the message using a monospaced font.

## Expiring content

In general, do not document content that will expire. Anyone who visits {% data variables.product.prodname_docs %} should be confident that the information is accurate and up to date.

If you must document content that you know will expire, you can use the content linter to tag and track the content's expiration date. This will flag the content as outdated and avoids tracking expiration dates outside of the content itself. See "[AUTOTITLE](/contributing/collaborating-on-github-docs/using-the-content-linter#syntax-for-expiring-and-expired-content)" for information on how to format expiring content tags.

## Footnotes

Avoid using footnotes where possible. Consider instead whether you could use a [alert](#alerts) or present the information in another way. See some [examples of alternatives to footnotes from NICE.org.uk](https://www.nice.org.uk/corporate/ecd6/chapter/footnotes).

If you must use footnotes, use [Markdown-native footnotes](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes) (`[^1]`). Footnote markers will be hyperlinked to the footnote reference, which will be listed at the bottom of the page with a backlink to the marker.

Note that regardless of the identifier you use (letters, words), footnotes will render as sequential numbers.

 {% rowheaders %}

| | Mona | Ursula | Paul | Davy Jones[^1] |
|---|---|---|---|---|
|Favorite pastime| Shipping code | Tricking mermaids[^2] | Predicting sports | Haunting seafarers |
|Uses powers for good| Yes | No | Yes | No |

[^1]: Not to be confused with Davy Jones of The Monkees
[^2]: Also humans

{% endrowheaders %}

````markdown
| | Mona | Ursula | Paul | Davy Jones[^1] |
|---|---|---|---|---|
|Favorite pastime| Shipping code | Tricking mermaids[^2] | Predicting sports | Haunting seafarers |
|Uses powers for good| Yes | No | Yes | No |
[^1]: Not to be confused with Davy Jones of The Monkees
[^2]: Also humans
````

## Headers

Headers must adequately describe the content under them. Headers can either follow the guidelines for writing titles or can be written as questions. Use sentence casing for headers. Each header on a page must be unique.

If an article has headers, the headers must start with an H2 level header. You can use H3 and H4 level headers to further organize content into related groups, but you cannot skip header levels. There must be text content between a header and subheader, such as an introduction.
* **Use:**

  ```markdown
  ## HEADER (H2)
  TEXT

  ### SUBHEADER (H3)
  TEXT

  #### SUBHEADER (H4)
  TEXT
  ```

* **Avoid:**

  ```markdown
  ## HEADER (H2)

  #### SUBHEADER (H4)
  ```

When referring to headers, surround the header name with quotation marks.
* **Use:** Under "User licenses," view your total licenses.

For more information, see the "[AUTOTITLE](/contributing/style-guide-and-content-model/contents-of-a-github-docs-article)."

## Images

We use static images including screenshots, diagrams, and graphs throughout the docs to complement textual information.

Do not use animated GIFs in the docs.

### Alt text

Every image must include alt text providing a textual equivalent of the visual information.

* Express the core idea or meaning of the image, rather than describing it literally.
* Use 40–150 characters.
* End with a punctuation mark. This should generally be a period unless the alt text is describing an image of text that ends with other punctuation, such as a question mark or exclamation point.
* Don't start with "Image…" or "Graphic…". Screen readers say this automatically.
* Do begin with the _type_ of graphic: "Screenshot of…" or "Diagram that shows…"
* Follow standard language used to describe UI elements in article text.
* Put multi-word titles, such as names of menu items, in double quotation marks ("").
* If an area of the image is visually highlighted, describe how. This enables screen-reader users to understand and describe to a sighted friend/colleague what to look for from a visual language standpoint.

#### Alt text for screenshots

Alt text provides a short description of a screenshot's content to benefit people who cannot see it.

* Alt text only needs to include the most relevant elements of an image, not every detail.
* Alt text is not intended to provide instructions for using the GitHub interface. These should be included in accompanying article text.

##### Format

> Screenshot of the `Product name` + `UI element` shown. The `UI element` + `state of the element/controls`, and its `keyboard shortcut XYZ`, are outlined in dark orange.

* For `Product name`, use the {% data variables.product.company_short %} product or feature name, such as "{% data variables.product.prodname_actions %}" or "{% data variables.product.company_short %} repository," rather than just "{% data variables.product.company_short %}."
* Use a variable for the word `{% data variables.product.company_short %}` as we do in running copy: `{% raw %}{% data variables.product.prodname_dotcom %}{% endraw %}`
* Describe UI elements consistently with written documentation.
* Be flexible with word order when needed for clarity.
  * For example, write "Screenshot of the Debug menu in {% data variables.product.prodname_vscode %}…" rather than "Screenshot of the {% data variables.product.prodname_vscode %} Debug menu…," to avoid multiple nouns in a row.

##### Examples

> Screenshot of the {% data variables.product.prodname_dotcom %} committers by repository table. The horizontal kebab icon and "Download CSV report" button are outlined in dark orange.

> Screenshot of file options in a {% data variables.product.prodname_dotcom %} repository. A button with an arrow indicating a dropdown menu, labeled "Code," is outlined in dark orange.

![Screenshot of file options in a GitHub repository. A button with an arrow indicating a dropdown menu, labeled "Code," is outlined in dark orange.](/assets/images/contributing/repository-code-button.png)

#### Alt text for diagrams and graphs

Explain the information conveyed in the diagram or graph in text on the page.

Use alt text to express the core idea of the image, without duplicating the webpage text.

##### Example

> Diagram showing a five-step process by which a {% data variables.product.prodname_actions %} runner can be automatically added to named classes of runners and then requested by specific jobs.

For example, see [accompanying explanation of this diagram in the Actions documentation](/free-pro-team@latest/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners#architectural-overview-of-larger-runners).

#### Alt text for images of command-line interfaces

Do not use screenshots of command-line interfaces to convey commands and their output. Instead, directly provide the commands a user should use. For more information, see the "[Commands](#commands)" section of the style guide.

When using a screenshot of a command-line interface to show user interface elements, follow standard alt text guidelines for screenshots.

### File names for images

Be descriptive when naming image files: include the name, action, and UI element in the file name. Mirror product language. Use kebab case. Do not use Liquid conditionals in file names. If replacing an image, use the exact file name.
* **Use:** `data-pack-purchase-button.png`
* **Avoid:** `purchase_button.png`
* **Avoid:** `purchase-button{% ifversion ghes %}-for-admins{% endif %}.png`

### Screenshots

To learn about creating and versioning images, see "[Creating and updating screenshots](/contributing/writing-for-github-docs/creating-screenshots)."

### Diagrams

To learn about creating diagrams, see "[AUTOTITLE](/contributing/writing-for-github-docs/creating-diagrams-for-github-docs)."

## Inclusive language

As home to the largest developer community in the world, {% data variables.product.company_short %} is committed to promoting diversity and inclusion in every aspect of what we do. All of our documentation is inclusive and respectful of our audience, which consists of people in widely varying circumstances from all over the planet. When we write our documentation, we use words that are inclusive, anti-racist, and accessible.

Individual words might be small, but together they can create community, belonging, and equity. Be empathetic in all word and style choices. Be accurate when referring to people and communities.

| Use | Avoid |
| --- | --- |
| Allowlist | Whitelist |
| Denylist | Blacklist |
| Default/Main branch | Master branch |

### Resources about inclusive language

The Microsoft Style Guide offers resources on bias-free communication, accessibility terms, and writing for all abilities:
* [Bias-free communication](https://docs.microsoft.com/style-guide/bias-free-communication)
* [Writing for all abilities](https://docs.microsoft.com/style-guide/accessibility/writing-all-abilities)
* [Accessibility terms](https://docs.microsoft.com/style-guide/a-z-word-list-term-collections/term-collections/accessibility-terms)

More resources for learning about inclusive and accessible language and style:
* [18F Content Guide on Inclusive Language](https://content-guide.18f.gov/our-style/inclusive-language/)
* MailChimp Content Style Guide:
  * [Writing About People](https://styleguide.mailchimp.com/writing-about-people/)
  * [Writing for Accessibility](https://styleguide.mailchimp.com/writing-for-accessibility/)
* [Readability Guidelines](https://readabilityguidelines.co.uk/)
* [Conscious Style Guide](https://consciousstyleguide.com/)

## Keyboard shortcuts

For presenting keyboard shortcuts, follow the [Microsoft Style Guide](https://docs.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/keys-keyboard-shortcuts), **except for the following differences**:

* Use the HTML `<kbd>` tag for each individual key.

  * **Use:** `<kbd>Command</kbd>+<kbd>B</kbd>`
  * **Avoid:** `Command+B`
* Use full words instead of symbols for Apple modifier keys.

  * **Use:** `Command`
  * **Avoid:** `⌘`
* Use symbols for keys of special character, not full words.

  * **Use:** `.`, `,`, and `→`.
  * **Avoid:** `Period`, `Comma`, and `Right arrow`.

### Usage highlights

Below are some usage highlights for how we present keyboard shortcuts in our documentation:

* The basic syntax is to show keys with `+` between key combinations, without any spaces.

  * **Use:** `<kbd>Command</kbd>+<kbd>B</kbd>`, which is rendered as <kbd>Command</kbd>+<kbd>B</kbd>.
  * **Avoid:** `<kbd>Command</kbd> + <kbd>B</kbd>` or `<kbd>Command + B</kbd>` which are  rendered as <kbd>Command</kbd> + <kbd>B</kbd> or <kbd>Command + B</kbd>.
* Always capitalize letter keys for general references and keyboard shortcuts.

  * **Use:** <kbd>Command</kbd>+<kbd>B</kbd>
  * **Avoid:** <kbd>Command</kbd>+<kbd>b</kbd>.
* Use the correct modifier keys for the each operating system.

  **Note:** Windows and Linux have <kbd>Ctrl</kbd> abbreviated, whereas on Mac it is spelled in full: <kbd>Control</kbd>.

  * For Windows and Linux:

    * **Use:** <kbd>Ctrl</kbd>, <kbd>Alt</kbd>.
    * **Avoid:** <kbd>Control</kbd>
  * For Mac:

    * **Use:** <kbd>Command</kbd>, <kbd>Option</kbd>, <kbd>Control</kbd>.
    * **Avoid:** <kbd>Cmd</kbd>, <kbd>⌘</kbd>, <kbd>Opt</kbd>, <kbd>⌥</kbd>, <kbd>Ctrl</kbd>, <kbd>⌃</kbd>
* Don't confuse key combinations with keys in a sequence.

  * <kbd>Command</kbd>+<kbd>B</kbd> indicates that the user should hold down the <kbd>Command</kbd> key and press the <kbd>B</kbd> key.
  * <kbd>G</kbd> <kbd>I</kbd> indicates that the user should press the <kbd>G</kbd> key, then press the <kbd>I</kbd> key.
* When describing a keyboard shortcut for multiple operating systems, append the operating system in brackets after the shortcut. Describe the Mac shortcut first, then Windows/Linux.

  * **Use:** `<kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)`, presented as:

     <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows / Linux)
  * **Avoid:** `<kbd>Ctrl</kbd>+<kbd>B</kbd> or <kbd>Command</kbd>+<kbd>B</kbd>`, presented as:

    <kbd>Ctrl</kbd>+<kbd>B</kbd> or <kbd>Command</kbd>+<kbd>B</kbd>

## Licensed content

{% data variables.product.prodname_docs %} is licensed under a [CC-BY license](https://github.com/github/docs/blob/main/LICENSE). If you reuse or modify licensed content in an article, you must make sure that the license is compatible and properly attributed.

Do not create reusables for license attributions. We must use the exact license a project is licensed under, so any attributions must be accurately written for the articles that they appear in.

If you are unsure of the legality of reusing any content, contact legal. If you are adding content with a license that is not listed below, you must receive a legal review before you can publish the content.

### Attributing MIT-licensed content

If we reuse or modify content under an MIT license, we must attribute the MIT license where the content appears.

At the end of the article containing MIT-licensed content
* Create a header titled `Legal notice`
* Attribute where the content comes from and that it is licensed under the MIT license. Include a link to the project
* Paste the full text of the MIT license from the project that you are attributing in a codeblock

#### Example MIT license attribution

This text is only an example. Always use the license text from the project you are attributing.

`````markdown
## Legal notice

Portions have been adapted from [PROJECT](/LINK/TO/PROJECT) under the MIT license:

```
MIT License

Copyright YEAR COPYRIGHT-HOLDER

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

`````

## Linebreaks

For plain text, use linebreaks to separate paragraphs in the source (two consecutive linebreaks), rather than to create visual space in the source. Avoid unneeded linebreaks, especially in lists.

## Links

Links are used to connect people to additional information and to progress through tasks that require reading multiple articles.

**Be frugal with links.** Including too many links can distract from the main content or steal people's focus. All links should be considered in the context of the user journey: why might we send someone to this link and how do we get them back on track to complete their task?

Before adding a link, decide if someone must visit the link to understand the content or be successful using {% data variables.product.prodname_dotcom %}.

* If the link is not necessary, remove it.
* If the link relates to the main topic of an article and lets someone continue learning, but isn't necessary to complete the task, consider moving the link to the end of the article as further reading.
* If the link takes someone to the next step in a process, include the link in a next steps section at the end of the article.
* If the link provides information that can be critical to completing a task or troubleshooting a step, include the link in the main body of the article.

Links must be consistent, accessible to as many people as possible, translatable, and clear. People need to know where a link leads to and how it relates to what they want to accomplish.

Some best practices for using links:
* Links should be meaningful and provide high value to the user’s journey. Link out thoughtfully.
* Do not repeat the same link more than once in the same article.
* Consider adding "earlier/later in this article" after a link to a section in the same article.
* Do not include the `apiVersion` query parameter in REST links unless you need to link to a specific calendar version of the REST docs. (This should be a rare occurrence.)

### Formatting links

You can introduce links with just the verb "see" if the context makes it clear what the link is for. If the context is not clear, use a phrase or sentence to introduce the link such as "For more information, see" or "To learn more about X, see Y."

Use the title of the documentation article, or external web page, as the link text. For any link that points to another article on the {% data variables.product.prodname_docs %} site, use the special keyword `AUTOTITLE` for the link text. See details in the [content markup reference](https://github.com/github/docs/blob/main/contributing/content-markup-reference.md#internal-links-with-autotitle).

* For links to other pages: `See "[AUTOTITLE](/PATH/TO/PAGE)."`
* For links to sections in other pages: `For more information, see "[AUTOTITLE](/PATH/TO/PAGE#SECTION-LINK)."`

Do not use inline links, where words within the sentence are hyperlinked without any additional words to indicate that the sentence contains a link. This can be difficult to translate and read.

Do not include quotation marks within a hyperlink.

* **Use:** `OAuth2 tokens can be acquired programmatically for applications that are not websites. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)" and "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)."`
* **Avoid:** `Read [more about OAuth2](/apps/building-integrations/setting-up-and-registering-oauth-apps/). Note that OAuth2 tokens can be [acquired programmatically](/enterprise-server@2.22/rest/reference/oauth-authorizations/#create-a-new-authorization), for applications that are not websites.`

### Links between versions

Sometimes, you need to link from one version of {% data variables.product.prodname_docs %} to another. When you want to link to a different version of the _same_ page, you should use the `currentArticle` property.

For example, the Free, Pro, & Team version of "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" might link to the {% data variables.product.prodname_ghe_cloud %} version of the same article like this:

```text
You can choose to allow or disallow the publication of GitHub Pages sites.

{% raw %}Organizations that use {% data variables.product.prodname_ghe_cloud %} can choose to allow publicly published sites, privately published sites, both, or neither. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/{{ currentArticle }}).{% endraw %}
```

To link to a different article in a different version, use this format:

```markdown
For more information, see "[ARTICLE TITLE](/)" in the VERSION documentation.
```

To link to the same article in a different version, use this format:

```markdown
{% raw %}For more information, see [the VERSION documentation](/VERSION/{{ currentArticle }}).{% endraw %}
```

To link to a specific version, you must include the version in the path (e.g., `{% raw %}/enterprise-cloud@latest/{{ currentArticle }}{% endraw %}`).

### Links to specific sections of articles

Links to specific sections of articles must be descriptive enough that someone understands that they are in the correct spot after following a link.

To link to a specific header in the same article, use this format:

```markdown
For more information, see "[HEADER TITLE](#HEADER-TITLE)," later in this article.
```

Same-page section links do **not** work with `AUTOTITLE`. Instead, you must type out the full header text.

To link to a specific header in a different article, use this format:

```markdown
For more information, see "[AUTOTITLE](PATH-TO-ARTICLE#HEADER-TITLE)."
```

To link to two or more specific headers in a different article, use this format:

```markdown
For more information, see "[HEADER-TITLE-1](PATH-TO-ARTICLE#SECTION-LINK-1)" and "[HEADER-TITLE-2](PATH-TO-ARTICLE#SECTION-LINK-2)" in "ARTICLE-TITLE."
```

### Links to a specific tool

If you link to content with a specific tool selected, make sure that it is clear that the link will be for a specific tool even if someone doesn't interact with the tool switcher tab in the article.

```markdown
For more information, see the TOOLNAME documentation in "[ARTICLE TITLE](/PATH/TO/ARTICLE?tool=TOOLNAME)."
```

### Links to learning paths

Use this format to link to a learning path.

```markdown
For more information, follow the "[LEARNING PATH TITLE](/)" learning path.
```

### Links to external resources

When linking to an external site, choose the most useful resource for the context of the link. You can link to a whole site if it's a general reference or to a specific page if that would be more helpful.

It's not necessary to link to an external product’s website when we mention an external product.

For links to an external page (any website that isn't managed by {% data variables.product.prodname_dotcom %}), type out the full page title and destination site. Do not put the link in quotation marks.

* **Use:** `See [PAGE-TITLE](https://some-docs.com/PATH/TO/PAGE) in the XYZ documentation.`
* **Avoid:** `See [PAGE-TITLE](https://some-docs.com/PATH/TO/PAGE).`
* **Avoid:** `See [the OTHER WEBSITE](https://some-docs.com/PATH/TO/PAGE).`

### Adding anchors to preserve links

If you know that there are links to a specific section of an article, you can add an anchor to the section to preserve the link. For example, if an external resource links to a specific section of an article, you could add an anchor so that the link directs to the correct section even if the section title changes.

Use this format for link anchors. The anchor name should be the section name that is being preserved. Use an HTML comment to explain why you are adding the anchor.

```markdown
<!-- Anchor to maintain the current example link. -->
<a name="SECTION-TITLE-THAT-MIGHT-CHANGE"></a>
```

## Lists

Capitalize the first letter in each line of a list. Use periods at the end of lines in a list only if the line contains a complete sentence.

When writing a list of items that consist of primary and secondary text, such as a `term` and its definition, use a colon delimiter. The secondary text should be capitalized as if it was the beginning of the line. For example:

* `foo`: Something that provides bar.
* `bar`: Something provided by foo.

Formatting unordered lists:

* If the order of items in the list is not important, alphabetize the list items.
* If the order is important, then order the list by the importance to the reader (for example, moving from broadest audience and applicability to a more specialized audience).
* Use asterisks (`*`) for list items.

When introducing a list, avoid short, nonspecific sentences using terms like “the following” or “these”, which are difficult to localize without context. Instead, create a descriptive sentence that clearly conveys the subject of the list, yet allows the list to scale or change without having to update the description.

**Use:**
* For an introduction to {% data variables.product.prodname_dotcom %}, see the following articles:
* SMS authentication is supported in these countries:

**Avoid:**
* There are several articles that provide an introduction to {% data variables.product.prodname_dotcom %}. See the following:
* SMS authentication is supported in 50 countries. These include:

## Permission statements and product callouts

Use permission statements and product callouts to communicate tasks that require specific roles or products to complete.

* [**Permissions statements**](/contributing/style-guide-and-content-model/contents-of-a-github-docs-article#permissions-statements): The role required to take an action or do a task described in the article. Example: "Enterprise owners."
* [**Product callout**](/contributing/style-guide-and-content-model/contents-of-a-github-docs-article#product-callout): The product or products required to take an action or do a task described in the article. Example: "Organization and enterprise accounts with a subscription to {% data variables.product.prodname_copilot_business_short %}."

Together, permission statements and product callouts tell readers who can use the feature being described in an article.

### Guidelines for creating scannable product callouts

#### Define permissions versus product requirements

Consider what information belongs in a permission statement or a product callout.

For example, when creating permissions and product callouts for the article "[AUTOTITLE](/free-pro-team@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization)," the permission statement would answer "What role can manage policies and features for {% data variables.product.prodname_copilot %} in an organization?" And the product callout would answer "What {% data variables.product.prodname_copilot_short %} subscriptions do users need to manage {% data variables.product.prodname_copilot_short %} policies and features for an organization?"

#### Focus on key information, not explanations

Permission statements and product callouts need to communicate who can perform a task and what product is required. They do not need to explain why a role or product is required.

If multiple roles or products apply to a permission statement or product callout, format them using an unordered list. You can introduce complex permission statements and product callouts with a sentence, but always try to use as few words as necessary to communicate who can do what the article is about.

#### Use inline links

You can use inline links to provide more information about a role or product. The linked text must match the link destination so that it is clear where following the link will lead to.

## Placeholders

Style any placeholder text in all caps. If a placeholder is multiple words, connect the words with dashes (kebab-case). If you use a placeholder, explain what someone might replace it with. This helps people modify examples to fit their needs and helps identify placeholders for people who use assistive technology.

**Use:**
* In the following example, replace YOUR-REPOSITORY with the name of your repository. `git init YOUR-REPOSITORY`
* Click **Add USERNAME.** Where USERNAME is the username of the person you want to add.

**Avoid:**
* `git init your repository`
* `git init <your-repository>`
* Click **Add _username_.**

## Procedural steps

Procedures give readers a set of sequential steps to follow to complete a task. Always use numbered lists for procedures. Give readers all of the prerequisites or conceptual information they’ll need to complete the task before the procedure, rather than including it within a specific step.

Each step must include an action. You can also choose to include whether a step is optional, explain the reason or result of the step, and orient the reader by describing the location of the action, before guiding them to complete the action.

Use a consistent order to present information within each step.
1. If the step is optional, indicate that first.
1. When needed for clarity, or to reinforce the severity of a destructive or confusing action, explain the reason for or result of the step.
1. Describe the location the user will find the action in.
1. Action.

**Use:** Optionally, to `REASON`, in `LOCATION`, take `ACTION`.

Examples:
* Click **Payment information**.
* Under your organization name, click **Settings**.
* To confirm your change, click **Remove credit card**.
* Optionally, to see your plan’s details, click **Show details**.
* Under "{% data variables.product.prodname_sponsors %}", to the right of the sponsored open source contributor, click {% octicon "triangle-down" aria-label="More options" %} next to your sponsored amount, then click **Change tier**.

## Product names

Use full product names. Do not abbreviate or shorten product names unless directly reproducing content from the product (e.g. UI copy or API responses). Product names are never possessive.

Use product name variables to render product names—do not write product names in plain text. This makes product name changes easier to implement across the site and avoids typos in our product names. For more information about product name variables, see “[Reusables and variables](#reusables-and-variables)” in this document and the [data directory](https://github.com/github/docs/tree/main/data) of the [`github/docs`](https://github.com/github/docs) repository.

Product names are always singular.
* **Use:** {% data variables.product.prodname_actions %} helps you automate your software development workflows.
* **Avoid:** {% data variables.product.prodname_actions %} help you automate your software development workflows.

Take care to distinguish between product names and product features. Product features are always lowercase.

| Product | Feature |
| --- | --- |
| {% data variables.product.prodname_actions %} | an action |
| {% data variables.product.prodname_github_codespaces %} | a codespace |
| {% data variables.product.prodname_registry %} | a package |
| {% data variables.product.prodname_pages %} | a GitHub Pages site |

Do not capitalize commonly used features like pull requests, topics, or issues.

## Product-specific conventions

This section describes additional conventions that are specific to GitHub products.

### {% data variables.product.prodname_actions %}

#### Reusables for first-party actions

Code examples that use first-party actions must use the respective reusable for that action. This makes action version updates (e.g. from `v1` to `v2`) easier to manage for products like {% data variables.product.prodname_ghe_server %}, which might not have the same action version available until a future {% data variables.product.prodname_ghe_server %} release.

Actions reusables are located in `/data/reusables/actions/` and have a file name like `action-<action_name>.md`

For example, to use the `actions/checkout` action in an example, use its reusable:

```yaml
steps:
  - name: Checkout
    uses: {% data reusables.actions.action-checkout %}
```

For {% data variables.product.prodname_docs %} purposes, a first-party action is any action that has the `actions/`, `github/` or `octo-org/` prefix. For example, this is a first-party action:

```yaml
steps:
  - uses: {% data reusables.actions.action-checkout %}
```

#### Disclaimers for third-party actions

Code examples that use third-party actions must include the following disclaimer as part of the code block:

```yaml
# This workflow uses actions that are not certified by {% data variables.product.company_short %}.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.
```

To insert this disclaimer, use the `{% raw %}{% data reusables.actions.actions-not-certified-by-github-comment %}{% endnote %}{% endraw %}` reusable.

For {% data variables.product.prodname_docs %} purposes, a third-party action is any action that doesn't have the `actions/`, `github/` or `octo-org/` prefix. For example, this is a first-party action:

```yaml
steps:
  - uses: actions/checkout@main
```

This is an example of a third-party action:

```yaml
steps:
    - uses: google-github-actions/setup-gcloud@1bee7de035d65ec5da40a31f8589e240eba8fde5
```

Examples:
* See the code block in "[Publishing to package registries](/actions/guides/building-and-testing-python#publishing-to-package-registries)"

#### Pinning version numbers to SHA

Code examples that use third-party actions must always pin to a full length commit SHA, instead of the version number or branch:

```yaml
steps:
    - uses: google-github-actions/setup-gcloud@1bee7de035d65ec5da40a31f8589e240eba8fde5
```

For {% data variables.product.prodname_docs %} purposes, a third-party action is any action that doesn't have one of the following prefixes: `actions/`, `github/`, and `octo-org/`. For example, this is a first-party action:

```yaml
steps:
  - uses: actions/javascript-action@main
```

For more information, see "[Using SHAs](/actions/learn-github-actions/finding-and-customizing-actions#using-shas)"

### {% data variables.product.prodname_codespaces %}

When referring to the product {% data variables.product.prodname_codespaces %}, always include "{% data variables.product.company_short %}", except in these circumstances:
* In the `shortTitle` front matter.
* In subheadings within an article, if "{% data variables.product.prodname_codespaces %}" has already been used anywhere in the article prior to the subheading.

Variables: `{% raw %}{% data variables.product.prodname_github_codespaces %}{% endraw %}` ("GitHub Codespaces") and `{% raw %}{% data variables.product.prodname_codespaces %}{% endraw %}` ("Codespaces").

When referring to instances of remote working environments created with this technology, refer to these as "codespaces" (lowercase c). For example, "to delete your codespace" or "to list your codespaces."

Always use "dev container" (or, where clarification is needed, its longer form "development container") and not "devcontainer" (one word), except in file/path names. The single word could form could be considered a brand, which we want to avoid, and we also want to be consistent with the two-word form used in [the {% data variables.product.prodname_vscode %} documentation](https://code.visualstudio.com/docs/remote/create-dev-container#_path-to-creating-a-dev-container).

Use "development container configuration files" to refer to all of the files in the `.devcontainer` directory (plus the `.devcontainer.json` if that's being used rather than `devcontainer.json` in the `.devcontainer` directory). Don't refer to these as "development container files" or "devcontainer files" to avoid this being taken as referring to `devcontainer.json` files. "Development container configuration files" refers to all of the files that can be used to configure a dev container, including `Dockerfile` and `docker-compose.yml` files. Don't use "the development container configuration file" (singular) when referring specifically to a `devcontainer.json` file. Instead refer to this file by its name.

### {% data variables.product.prodname_GH_advanced_security %} (GHAS)

Use the terms `licenses` and `active committers` when you refer to {% data variables.product.prodname_GH_advanced_security %} billing.

We used to use the term `seats` to describe the number of accounts that can use {% data variables.product.prodname_GH_advanced_security %} in an enterprise. People can be confused by the term `seats`, so we removed this term from GitHub.com in autumn 2022 and versions from GHES 3.7 onward do not use it.

### {% data variables.product.pat_generic_caps_plural %}

{% data variables.product.company_short %} has two types of {% data variables.product.pat_generic_plural %}:

* {% data variables.product.pat_v2_caps %}s: Offer granular control over repository access and permissions
* {% data variables.product.pat_v1_caps %}: Use scopes and grant access to all repositories that the token owner can access

You should use variables to refer to these types of tokens, as well as to {% data variables.product.pat_generic_plural %} in general:

* Use `{% raw %}{% data variables.product.pat_generic %}{% endraw %}`or `{% raw %}{% data variables.product.pat_generic_caps %}{% endraw %}` to refer to {% data variables.product.pat_generic %} in general. Use `{% raw %}{% data variables.product.pat_generic_title_case %}{% endraw %}` if the phrase should be in title case ("{% data variables.product.pat_generic_title_case %}") in order to match UI text.
* Use `{% raw %}{% data variables.product.pat_v2 %}{% endraw %}` or `{% raw %}{% data variables.product.pat_v2_caps %}{% endraw %}` to refer to {% data variables.product.pat_v2 %}s.
* Use `{% raw %}{% data variables.product.pat_v1 %}{% endraw %}`, `{% raw %}{% data variables.product.pat_v1_plural %}{% endraw %}`, `{% raw %}{% data variables.product.pat_v1_caps %}{% endraw %}`, or `{% raw %}{% data variables.product.pat_v1_caps_plural %}{% endraw %}` to refer to {% data variables.product.pat_v1 %}.

For more information about {% data variables.product.prodname_dotcom %}'s {% data variables.product.pat_generic_plural %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#about-personal-access-tokens)."

## Punctuation

Follow standard American English punctuation rules. For more guidance, see “[Punctuation](https://docs.microsoft.com/style-guide/punctuation)” in the Microsoft Style Guide.

## Release notes

A set of release notes on {% data variables.product.prodname_docs %} tell readers about administrator- or user-facing changes to a versioned release of a product like {% data variables.product.prodname_ghe_server %} (GHES). Release notes appear in the [AUTOTITLE](/enterprise-server@latest/admin/release-notes).

A good release note is a few sentences that sequentially answer the reader's questions about the change. For more information, see [AUTOTITLE](/contributing/style-guide-and-content-model/release-note-content-type).

Each release note in a set describes one of the following changes.

* [Features](#features): brand-new behavior or functionality
* [Security fixes](#security-fixes): fixes to flaws or unexpected behavior that have security implications
* [Bug fixes](#bug-fixes): fixes to flaws or unexpected behavior
* [Changes](#changes): notable changes to past behavior
* [Known issues](#known-issues): issues that {% data variables.product.company_short %} has identified, but cannot or has not yet prioritized
* [Deprecations](#deprecations): removal of a feature or behavior
* [Errata](#errata): correction to inaccurate release note or documentation

You can also review guidelines for updating release notes in "[Adding or updating a release note](#adding-or-updating-a-release-note)" and "[Removing a release note](#removing-a-release-note)."

### Features

A release note for a feature summarizes brand-new behavior. Generally, notes for features are only part of feature releases.

#### Writing release notes for features

A release note for a feature answers the following questions.

1. Does this new functionality apply to me, with my role or access?
1. What need does the functionality satisfy?
1. What is the functionality?
1. If applicable, where can I read more about the functionality?

> _AUDIENCE_ (**1**) can _DESCRIPTION OF NEED_ (**2**) by _DESCRIPTION OF FEATURE'S USE_ (**3**). For more information, see "[_ARTICLE TITLE_](/)" (**4**).

* Categorize each feature in a section, under a feature heading.
* Write in the present tense.
* To reduce repetition and unnecessary words, "now" is usually implied.
* To clarify actors and impact, avoid passive language when possible.

#### Examples of feature release notes

* > Site administrators can increase the security of the Management Console by configuring the rate limit for sign-in attempts, as well as the lockout duration after exceeding the rate limit. For more information, see "[Configuring rate limits](/enterprise-server@3.7/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-authentication-to-the-management-console)."

* > Enterprise owners can control where users can fork repositories. Forking can be limited to preset combinations of organizations, the same organization as the parent repository, user accounts, or everywhere. For more information, see "[Enforcing repository management policies in your enterprise](/enterprise-server@3.7/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."

* > Users can create files with geoJSON, topoJSON, and STL diagrams and render the diagrams in the web interface. For more information, see "[Working with non-code files](/enterprise-server@3.7/repositories/working-with-files/using-files/working-with-non-code-files)."

### Security fixes

A release note for a security fix summarizes a change that mitigates or prevents exploitation of a security-related issue in the product. Generally, notes for security fixes are only part of patch releases.

#### Writing release notes for security fixes

A release note for a security fix answers the following questions.

1. If available, what is the [NVD vulnerability severity rating](https://nvd.nist.gov/vuln-metrics/cvss) for the vulnerability that's fixed?
1. What is the attack that an attacker could accomplish by exploiting the vulnerability?
1. What type of vulnerability is exploitable?
1. If available, what is the vulnerability's [CVE identifier](https://cve.mitre.org/cve/identifiers/), pending or active?
1. Did someone report the vulnerability via the [GitHub Bug Bounty program](https://bounty.github.com)?

> _SEVERITY_ (**1**): An attacker could _DESCRIPTION OF IMPACT_ (**2**) by _DESCRIPTION OF EXPLOIT_ (**3**). GitHub has requested CVE ID [_CVE-####-#####_](/) (**4**) for this vulnerability, which was reported via the [GitHub Bug Bounty program](https://bounty.github.com) (**5**).

#### Examples of release notes for security fixes

* > **MEDIUM**: An attacker could cause unbounded resource exhaustion on the instance by making parallel requests to the Markdown REST API. To mitigate this issue, {% data variables.product.company_short %} has updated [CommonMarker](https://github.com/gjtorikian/commonmarker). {% data variables.product.company_short %} has requested CVE ID [CVE-2022-39209](https://nvd.nist.gov/vuln/detail/CVE-2022-39209) for this vulnerability.

* > **MEDIUM**: An attacker could embed dangerous links in the instance's web UI because pull request preview links did not properly sanitize URLs. This vulnerability was reported via the [{% data variables.product.company_short %} Bug Bounty program](https://bounty.github.com).

#### Base image and package updates

We also include base image and dependent package updates in the "Security fixes" section, since these updates often address security issues. We consolidate all of these updates in the following note.

> Packages have been updated to the latest security versions.

### Bug fixes

A release note for a bug fix describes a correction to an undesired or otherwise unexpected behavior. Generally, notes for bug fixes are only part of patch releases.

#### Writing release notes for bug fixes

A release note for a bug fix answers the following questions.

1. Did the behavior affect me, with my role or access?
1. What behavior would the reader experience prior to the fix?

> _AUDIENCE_ (**1**) _DESCRIPTION OF BEHAVIOR_ (**2**).

* Because the bug is now fixed, write in the past tense.
* Language like "fixed a bug…" or "fixed an issue…" is implied and unnecessary.
* To reduce repetition and unnecessary words, "now" is usually implied.
* To clarify actors and impact, avoid passive language when possible.
* If the release note includes an error message, format the message according to the guidance in "[Error messages](#error-messages)."

#### Examples of release notes for bug fixes

* > After a user imported a repository with push protection enabled, the repository was not immediately visible in the security overview's "Security Coverage" view.

* > On an instance with {% data variables.product.prodname_actions %} enabled, a workflow job for {% data variables.product.prodname_actions %} would not start if a matching runner group was unavailable when the job was initially queued, even if a matching runner group became available after the job entered the queue.

* > Commands that site administrators ran via SSH on any of the instances nodes were not logged in ``/var/log/ssh-console-audit.log``.

### Changes

A release note for a change describes a notable, but minor change to existing behavior. Notes for changes answer the following questions.

#### Writing release notes for changes

A release note for a change answers the following questions.

1. Did the behavior affect me, with my role or access?
1. If the change solves or avoids a problem, what's that problem?
1. What's the new behavior?
1. If relevant, what was the behavior before the change?

> _AUDIENCE_ (**1**) / _DESCRIPTION OF PROBLEM CHANGE SOLVES_ (**2**) _DESCRIPTION OF NEW BEHAVIOR_ (**3**) _DESCRIPTION OF OLD BEHAVIOR_ (**4**).

* Because the change applies to the release in question, write notes for changes in the present tense.
* To reduce repetition and unnecessary words, "now" is usually implied.
* To clarify actors and impact, avoid passive language when possible.
* Often, the audience is implied.
* If useful, include relevant links to GitHub Docs.

#### Examples of release notes for changes

* > On an instance with a {% data variables.product.prodname_GH_advanced_security %} license, users who author custom patterns for secret scanning can provide expressions that must or must not match that are up to 2,000 characters. This limit is an increase from 1,000 characters.

* > For administrators who need to review or modify SAML mappings, the default path for output from `ghe-saml-mapping-csv -d` is `/data/user/tmp` instead of `/tmp`. For more information, see "[Command-line utilities](/enterprise-server@3.8/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-saml-mapping-csv)."

* > To avoid intermittent issues with the success of Git operations on an instance with multiple nodes, {% data variables.product.prodname_ghe_server %} checks the status of the MySQL container before attempting a SQL query. The timeout duration has also been reduced.

### Known issues

A release note for a known issue describes an issue that GitHub has identified, but cannot or has not yet prioritized.

#### Writing release notes for known issues

A release note for a known issue answers the following questions.

1. Does the behavior affect me, with my role or access?
1. What are any error messages or other recognizable UI elements that appear?
1. Do I need to act? If so, what should I do?

> _AUDIENCE_ (**1**) _DESCRIPTION OF ISSUE_ (**2**) _DETAILS OF BEHAVIOR_ (**3**) _NEXT STEPS_ (**4**).

* To clarify actors and impact, avoid passive language when possible.
* To reduce repetition and unnecessary words, "now" is usually implied.
* If the release note includes an error message, format the message according to the guidance in "[Error messages](#error-messages)."
* If useful, include relevant links to GitHub Docs.
* Known issues are also a type of content on GitHub Docs. For more information, see "[AUTOTITLE](/contributing/style-guide-and-content-model/troubleshooting-content-type#known-issues)." If useful, write or link to more in-depth and contextually relevant content in the docs.

#### Examples of release notes for known issues

* > After a user enables the option for a repository to allow users with read access to create discussions, the feature is not enabled.

* > After an administrator begins a configuration run, a `No such object error` may occur during the validation phase for the Notebook and Viewscreen services. This error can be ignored as the services should still correctly start.

### Deprecations

A deprecation release note summarizes a behavior or feature that {% data variables.product.company_short %} has removed or plans to remove. Generally, notes for deprecations are only part of feature releases.

#### Writing release notes for deprecations

A release note for a deprecation answers the following questions.

1. Does this existing functionality apply to me, with my role or access?
1. What is the functionality that's being deprecated?
1. If applicable, what replaces the deprecated functionality?
1. If applicable, where can I read more?

> _AUDIENCE_ (**1**) _DESCRIPTION OF DEPRECATED FUNCTIONALITY_ (**2**) _REPLACEMENT FUNCTIONALITY_ (**3**) For more information, see "[_ARTICLE TITLE_](/)" (**4**).

* Notes are in the present tense, or the future tense for upcoming changes. If applicable, specify the upcoming release where the deprecation will occur.
* To reduce repetition and unnecessary words, "now" is usually implied.
* To clarify actors and impact, avoid passive language when possible.
* Categorize each feature in a section, under a feature heading.

#### Examples of release notes for deprecations

* > **Upcoming deprecation**: In {% data variables.product.prodname_ghe_server %} 3.8 and later, to ensure instance security, unsecure algorithms will be disabled for SSH connections to the administrative shell.

* > Commit comments, which are comments that users add directly to a commit outside of a pull request, no longer appear in the pull request timeline. Users could not reply to or resolve these comments. The Timeline events REST API and the GraphQL API's `PullRequest` object also no longer return commit comments.

### Errata

Errata corrects inaccurate information previously published in the release notes or documentation for a release.

#### Writing errata

Errata answers the following questions.

1. If applicable, which section of the release notes or content on {% data variables.product.prodname_docs %} was affected?
1. Did the incorrect information apply to me, with my role or access?
1. What did the release note or documentation describe that was incorrect?
1. When was the errata published?

> _CONTENT_ (**1**) incorrectly indicated that _AUDIENCE_ (**2**) can _SUMMARY OF INACCURATE INFORMATION_ (**3**). [Updated: _PUBLICATION DATE_ **4**]

* Format the publication date according to the guidance in [Adding or updating a release note](#adding-or-updating-a-release-note).

#### Example of errata

* > "[Features](/)" incorrectly indicated that users of the {% data variables.product.prodname_advisory_database %} can see advisories for Elixir, Erlang's Hex package manager, and more. This feature is unavailable in GitHub Enterprise Server 3.7, and will be available in a future release. [Updated 2023-06-01]

### Adding or updating a release note

To signal to readers that you've added or changed a note, or to indicate the publication date of errata, append a datestamp in the format "[Updated: YYYY-MM-DD]".

### Removing a release note

To signal that we have removed a release note, add an "Errata" section detailing which note you removed and (if relevant) which version the removed note actually pertains to. See "[Writing errata](#writing-errata)."

## Reusables and variables

Use reusable strings for individual nouns (e.g. product names) or for complete sentences or paragraphs. Sentence fragments and phrases should not be contained in reusable strings as they can cause problems when content is localized. For more information, see the [data directory](https://github.com/github/docs/tree/main/data) in the [`github/docs`](https://github.com/github/docs) repository, "[Creating reusable content](/contributing/writing-for-github-docs/creating-reusable-content)", and the “[Product names](#product-names)” section of this document.

## Sectional TOCs

If a section of an article uses `H3` or `H4` headers to further divide the content and only some of the content is relevant to a reader, you can use a sectional table of contents (TOC) to help readers identify and navigate to the information that is most relevant to them. For example, in "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#setting-up-streaming-to-amazon-s3)" people will probably only set up audit log streaming for one provider, so the sectional TOC in "Setting up audit log streaming" allows people to select their provider and navigate to the relevant content without reading the entire section.

Do not add a sectional TOC if `H3` or `H4` headers are used only to group content and all information could be of relevance to a reader. For example, in "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)," people should read and consider each section as it relates to their enterprise. We do not include a sectional TOC in this article because people should be reading through each section, not picking and choosing between them. Adding a sectional TOC would also force people who use screenreaders or other adaptive technology to tab and scroll through more headers before finding what they need.

Format sectional TOCs as a list. Include all subsections in the order that they appear in the article and refer to them using the full header title.

Sectional TOCs must be introduced with a sentence or paragraph that helps people understand how the content is organized and select the section that is most relevant to them. Do not include a sectional TOC directly beneath a header.

### Example of sectional TOCs

```markdown
## Setting up the application

Set up your application according to your operating system.

* [Setting up for macOS](#setting-up-for-macOS)
* [Setting up for Windows](#setting-up-for-windows)
* [Setting up for Linux](#setting-up-for-linux)

### Setting up for macOS

TEXT

### Setting up for Windows

The application is supported for all versions of Windows, but the set up steps differ.

* [Windows 98](#windows-98)
* [Windows Vista](#windows-vista)
* [Windows 11](#windows-11)

#### Windows 98

TEXT

#### Windows Vista

TEXT

#### Windows 11

TEXT

### Setting up for Linux

TEXT
```

## Tables

Tables are added to the {% data variables.product.prodname_docs %} using Markdown. Because tables can be challenging to read and maintain, make sure that the data in a table is best represented in a table and not another format, like a list, before creating a table. Every row in a table must begin and end with a pipe, `|`.

### Use tables only for presenting tabular information

Tables work best for presenting tabular data, such as information that needs to be compared or values with multiple attributes. Do not use tables for simple lists - see the "[Lists](#lists)" section of this document.

### Avoid describing table data

A table’s data and why it is important should be clear from any preceding content, the column headers, and (if needed) the row headers. Avoid unneeded descriptions of the data in a table. If the data in a table is unclear without a lengthy description, consider if your table needs row headers or if the information would be better communicated in a different way.

For example, in "[AUTOTITLE](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#recommended-autoscaling-solutions)," a table comparing the features between two supported autoscaling solutions is introduced with the sentence `Each solution has certain specifics that may be important to consider.` The article does not describe any of the different features that are compared because that information is clearly communicated by the table.

* **Use:** "Different size limits per repository apply depending on your GHES version."
* **Avoid:** "The first row of the table shows the information for GitHub Enterprise Cloud. The second row shows the information for GitHub Enterprise Server."
* **Avoid:** “The table below shows what kind of migration data is exported.”

### Use proper markup for row and column headers

Tables in which the first column describes the data values in the table (but is not data itself) need to be marked up with row headers. This is important for assistive technology to understand relationships between cells.

For example in the following table, in order to make sense of the "Yes" and "No" values in the table, you need to know both the column header (role) and row header (permission).

<table>
  <tr>
    <th>Organization permission</th>
    <th>Owners</th>
    <th>Members</th>
    <th>Moderators</th>
    <th>Billing managers</th>
    <th>Security managers</th>
  </tr>
  <tr>
    <th>Create repositories</th>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
    <td>Yes</td>
  </tr>
  <tr>
    <th>View and edit billing information</th>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <th>Invite people to join the organization</th>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
    <td>No</td>
    <td>No</td>
  </tr>
</table>

To add row headers for a Markdown table, wrap the table in the Liquid tags `{% raw %}{% rowheaders %} {% endrowheaders %}{% endraw %}`. For more information about using row headers, see "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/using-markdown-and-liquid-in-github-docs#table-row-headers)."

### Include a value for every cell

Every cell in a table must contain a value.

For cells with no data, use "None" or "Not applicable". Do not use "NA" or "N/A".

For tables with row headers, the first cell (cell "A1") should describe the row headers to help people understand the whole table. However, if doing this would make the table less clear or add redundant information, you can leave this cell empty. For example, in the article "[AUTOTITLE](/actions/automating-builds-and-tests/building-and-testing-powershell#powershell-module-locations)," the first cell could be labeled as "Modules", but since each row header already includes the word "module", this header would repeat information that does not add descriptive value to understanding the table as a whole.

### Use clear, consistent symbols and labels

For tables that use symbols:

* Populate all cells. For example in a permissions table, do not mark only the cells for things that require a permission.
* Use octicons or SVG. Do not use emoji. For more information about octicons, see "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/using-markdown-and-liquid-in-github-docs#octicons)."
* Use a [check mark](https://primer.style/octicons/check-16) for affirmative values ("Yes", "Required", "Supported") and a [cross](https://primer.style/octicons/x-16) for negative values ("No", "Optional", "Unsupported").
* Use `aria-label` to describe the meaning of the symbol, not its visual characteristics. For example, "Required", not "Check mark icon".

Where table data is not truly binary (every value is either "Yes" or "No", for example), text values may be needed in addition to, or instead of, symbols. For example on the page "[AUTOTITLE](/support/learning-about-github-support/about-github-support)", some features are marked as "Available to purchase".

### Use footnotes sparingly

See "[Footnotes](#footnotes)."

### Align table content consistently

All columns in a table should be left-aligned, except for columns containing only octicons which should be center-aligned. If a column contains both text and octicons, use center alignment.

Table content is left-aligned by default. Use Markdown table formatting, colons (`:`) to either the right or left of the dashes in the header row, to specify the alignment of each column. Read "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables#formatting-content-within-your-table)" for more information.

The following example shows part of a table from "[AUTOTITLE](/free-pro-team@latest/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)."

<table>
<thead>
<tr>
<th align=left>Option</th>
<th align=center>Required</th>
<th align=center>Security Updates</th>
<th align=center>Version Updates</th>
<th align=left>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align=left><code>package-ecosystem</code></td>
<td align=center>
{% octicon "check" aria-label="Supported" %}
</td>
<td align=center>
{% octicon "x" aria-label="Not supported" %}
</td>
<td align=center>
{% octicon "check" aria-label="Supported" %}
</td>
<td align=left>Package manager to use</td>
</tr>
<tr>
<td style="text-align:left"><code>directory</code></td>
<td align=center>
{% octicon "check" aria-label="Supported" %}
</td>
</td>
<td align=center>
{% octicon "x" aria-label="Not supported" %}
</td>
<td align=center>
{% octicon "check" aria-label="Supported" %}
</td>
</td>
<td align=left>Location of package manifests</td>
</tr>
<tr>
<td style="text-align:left"><code>schedule.interval</code></td>
<td align=center>
{% octicon "check" aria-label="Supported" %}
</td>
</td>
<td align=center>
{% octicon "x" aria-label="Not supported" %}
</td>
<td align=center>
{% octicon "check" aria-label="Supported" %}
</td>
</td>
<td align=left>How often to check for updates</td>
</tr>
</tbody>
</table>

The table is generated with the following alignment syntax.

```text
| Option              | Required | Security Updates | Version Updates | Description                    |
|---------------------|:--------:|:----------------:|:---------------:|--------------------------------|
| `package-ecosystem` |{% raw %}{% octicon "check" aria-label="Supported" %}|{% octicon "x" aria-label="Not supported" %}|{% octicon "check" aria-label="Supported" %}{% endraw %}| Package manager to use         |
| `directory`         |{% raw %}{% octicon "check" aria-label="Supported" %}|{% octicon "x" aria-label="Not supported" %}|{% octicon "check" aria-label="Supported" %}{% endraw %}| Location of package manifests  |
| `schedule.interval` |{% raw %}{% octicon "check" aria-label="Supported" %}|{% octicon "x" aria-label="Not supported" %}|{% octicon "check" aria-label="Supported" %}{% endraw %}| How often to check for updates |
```

## Titles

Use quotation marks around article titles, whether the article is hosted on GitHub Docs or elsewhere. Do not include quotation marks around the names of external sites.

For further guidance, see “[Formatting titles](https://docs.microsoft.com/style-guide/text-formatting/formatting-titles)” in Microsoft’s Style Guide.

## Short titles

We use short titles to populate the sidebar navigation. Since short titles appear in the sidebar navigation, they can use context to convey meaning and be slightly less precise than full titles. The goal of short titles is to help people find the content that they are looking for without having sidebar navigation items that are too long. Short titles give people contextual understanding of an article and align to the following standards.

* Short titles are 2-3 words long.
  * For categories, short titles must be less than 27 characters.
  * For map topics, short titles must be less than 30 characters.
  * For articles, short titles must be less than 31 characters and are ideally between 20 and 25 characters.
* Short titles use the base form of verbs instead of gerunds.
  * **Use:** "Configure notifications" instead of "Configuring notifications."
* Short titles for categories, map topics, and articles can omit product and feature names if it is clear what product or feature they relate to.
  * **Use:** "Configure notifications" as the short title for "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)" since the article is in the "{% data variables.product.prodname_dependabot_alerts %}" map topic.
* Short titles do not introduce new words that are not in the full title.
* Short titles should be parallel to short titles for similar content.
  * **Use:** "Organizations and teams" and "Enterprise accounts"
  * **Avoid:** "Organizations and teams" and "Managing enterprise accounts"

Writing short titles can be challenging. To help get short titles under the character count, consider the short title in context. Remove any repeated words if possible and any product or feature names that are in the map topic or category that the content belongs to.

## Site policy content

Do not use reusables or variables in site policy content. Site policy articles are legal documents and must have a human-readable source.

Site policy content otherwise uses the same style and content models as the rest of {% data variables.product.prodname_docs %}.

## User interface elements

### Boldface

Use bold to describe UI elements that can be interacted with.
* In the left sidebar, click **Billing**.
* Look in the merge box at the bottom of the pull request's **Conversation** tab.
* Next to **Title**, add a descriptive label for your new key.

### Branch names

Use code formatting for branch names.
* `main`
* `USERNAME.github.io`

### Buttons

Format button names in bold and, whenever possible, omit the word “button.” To describe using a button, write “click”, not push or press.
* **Use:** Click **Pull request**.
* **Avoid:** Press the Pull request button.

### Checkboxes

Format checkbox names in bold and omit the word “checkbox.” To describe choosing or clearing a checkbox, use “select” or “deselect.”
* **Use:** Select **Enable for all new repositories**.
* **Avoid:** Check the “Enable for all new repositories” checkbox.

### Dynamic text

Use capital letters to indicate text that changes in the user interface or that the user needs to supply in a command or code snippet.
* **Use:** Click **Add USERNAME to REPONAME**.

### Lists and list items

Format lists and clickable list items in bold. To describe interacting with a list, such as a dropdown menu or UI element that expands, regardless of whether the list name is a word or an octicon, write "select." To describe choosing a list item, write "click."
* **Use:** Select the **Backup email addresses** dropdown menu and click **Only allow primary email**.
* **Avoid:** Click the "Backup email addresses" dropdown menu and click **Only allow primary email**.

### Location

Describe a user interface element’s location with standard terms.
* Under or above
* Next to
* Upper-left, upper-right, lower-left, lower-right
* Top of the page, bottom of the page, right side of the page, left side of the page

### Panels

When possible, avoid referring to panels. Instead, describe what someone needs to do.
* **Use:** Click **View charts and graphs** for your repository, then select the time period you want to view from the dropdown menu.
* **Avoid:** Click the **View charts and graphs** to open the panel for your selected repository, then select the time period you want to view from the dropdown menu.

If you need to refer to a panel to describe a change to the UI or to explain how to interact with the UI, format the panel name as [user interface text](#user-interface-text). Only include the word panel if it adds clarity or if the panel has no name in the UI.

* **Use:** In the "Security coverage" panel, select **Enable** or **Disable**.
* **Use:** In the panel, select **Enable** or **Disable**.

### Radio buttons

Format radio button labels in bold and omit the words “radio button” or any other descriptor. To describe using a radio button, write "select."

### Repository names

Style repository names in monospace font using backticks. Provide a link to repositories when people are expected to navigate to them.
* **Use:** See the [`github/docs`](https://github.com/github/docs) repository for more information.

### Responsive elements

We only document the responsive states of UI elements when they create ambiguity or confusion. If a task is unclear because of a responsive UI element, describe the interaction that someone must do to achieve the goal of the task. Do not just describe the visual state of the UI element.

* **Use:** Click **Security**. If Security is not visible, click **⋮** to expand the repository menu.

### User interface text

When referencing text in the user interface, reproduce the text exactly. Use quotation marks to surround UI text that cannot be interacted with.
* **Use:** Under “IP allow list”, click **Edit**.

### More resources

Microsoft Style Guide:
* [Formatting text in instructions](https://docs.microsoft.com/style-guide/procedures-instructions/formatting-text-in-instructions)

## Videos

You may add videos to reinforce text-based information but videos should never replace written content. Videos are inaccessible to some users and are also difficult to find by searching.

Videos on the GitHub Docs website must be well-produced and contain fewer barriers for people with disabilities, and conform to our content model for videos. For more information, see "[About using videos in GitHub Docs](/contributing/writing-for-github-docs/using-videos-in-github-docs)."

## Voice and tone

Use clear, simple language that’s approachable for a wide range of readers. Be authentic, empathetic, and confident with your writing.

Write for your audience: some jargon and technical terms are necessary, but don't rely on the assumption that every reader has the same level of technical expertise.

Use the active voice whenever possible. Passive voices is acceptable when you need to emphasize the object of an action.

We are a global developer community. Avoid turns of phrase, idioms, and slang that are specific to a particular region or country.

To learn more about writing approachable content, see “[Microsoft's brand voice: Above all, simple and human](https://docs.microsoft.com/style-guide/brand-voice-above-all-simple-human) and “[Top 10 tips for Microsoft style and voice](https://docs.microsoft.com/style-guide/top-10-tips-style-voice).”

## Word choice and terminology

For general guidance and GitHub-specific terms, see our "[Glossary](/get-started/learning-about-github/github-glossary)". For more detailed guidance, see the “[A-Z word list](https://docs.microsoft.com/style-guide)” in Microsoft’s style guide.

### Abbreviations

Spell out words except when referring to a word that’s explicitly shortened in the product itself.
* **Use:** Repository
* **Avoid:** Repo
* **Use:** Administrator, people with admin permissions
* **Avoid:** Admins

Do not use symbols or octicons that aren’t used in GitHub’s user interface.
* **Use:** Click **File**, then click **Edit**.
* **Avoid:** Click **File > Edit**.

### Accounts

#### Product names and accounts

To avoid ambiguity and confusion, do not use product names as adjectives to describe accounts in any of our products. Instead, clarify the account type and choose clearer phrasing that avoids conflating accounts and products. When talking about accounts, only refer to the product name when needed to disambiguate between products. For more information about types of accounts available in GitHub's products, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."
* **Use:** Your organization on {% data variables.product.prodname_ghe_cloud %}
* **Avoid:** Your {% data variables.product.prodname_ghe_cloud %} account
* **Avoid:** Your {% data variables.product.prodname_ghe_server %} organization
* **Use:** You can highlight your work on {% data variables.product.prodname_ghe_server %} by sending the contribution counts to your GitHub.com profile.

#### Individual people's accounts on {% data variables.product.company_short %}

We refer to an account that an individual person signs into in various ways depending on the context.

Unless the content is about administering an enterprise product, describe an individual person's account on {% data variables.product.company_short %} as a "personal account." This creates consistency with the UI and prevents readers from being confused by seeing two terms that mean the same thing.

* **Use:** Managing scheduled reminders for your personal account
* **Avoid:** Managing scheduled reminders for your user account

#### Accounts for enterprise products

With {% data variables.product.company_short %}'s enterprise products, administrators manage an enterprise account. An enterprise account can own multiple organizations, and people's user accounts can be members of the organizations. For more information, see the "Roles in an enterprise" article for each product.

* [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
* [{% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)

If the reader manages an enterprise account, and you're describing the people's accounts that they manage, use "user account." This applies to the following products.

* {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}
  * **Use:** With {% data variables.product.prodname_emus %}, you can create and manage user accounts for your enterprise members.
  * **Avoid:** With {% data variables.product.prodname_emus %}, you can create and manage the personal accounts for your enterprise members.
* {% data variables.product.prodname_ghe_server %}
  * **Use:** If you need to temporarily take over a user account…
  * **Avoid:** If you need to temporarily take over a personal account…

The following documentation should reference "user accounts."

* The "[AUTOTITLE](/enterprise-cloud@latest/admin)" product
* Enterprise-specific billing documentation, like "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise)"
* Content within other products that's intended for an administrative audience, like "[AUTOTITLE](/enterprise-cloud@latest/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)" in the "Code security" product or "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud)" in the "Get started" product
* Enterprise-specific API content, like the "[AUTOTITLE](/enterprise-cloud@latest/rest/reference/enterprise-admin)" REST API reference documentation

For enterprises on {% data variables.product.prodname_ghe_cloud %} that don't use {% data variables.product.prodname_emus %}, use "personal account" when describing members of organizations owned by the enterprise.

* **Use:** If you configure SAML SSO, members of your organization will continue to sign into their personal accounts on {% data variables.product.prodname_dotcom_the_website %}.
* **Avoid:** If you configure SAML SSO, members of your organization will continue to sign into their user accounts on {% data variables.product.prodname_dotcom_the_website %}.

Documentation that describes {% data variables.product.prodname_ghe_cloud %} without {% data variables.product.prodname_emus %} is generally in the "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization)" category.

#### People's accounts for other services

When you describe a person's account for a service other than {% data variables.product.company_short %}, such as an integration or authentication provider, use "user account."

### Acronyms

Spell out acronyms the first time they’re used in an article, except in titles or headers.

### Apps

Use "app" or "application" in general content.
* **Use:** Publish and list your app in {% data variables.product.prodname_marketplace %}

Use "app" when referring to {% data variables.product.prodname_oauth_apps %} since these are not a product.
* **Use:** Register an {% data variables.product.prodname_oauth_app %}
* **Avoid:** Register an OAuth App

Use "App" when referring to {% data variables.product.prodname_github_apps %} since this is a product.
* **Use:** Register a {% data variables.product.prodname_github_app %}

{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} consist of two parts: the app registration, and the code that makes the app do something.

* To refer to just the {% data variables.product.prodname_github_app %} settings/configuration in the {% data variables.product.prodname_dotcom %} UI, use terminology like "register" and "{% data variables.product.prodname_github_app %} registration".
   * **Use:** Register a {% data variables.product.prodname_github_app %}
   * **Use:** Update a {% data variables.product.prodname_github_app %} registration
   * **Avoid:** Create a {% data variables.product.prodname_github_app %}
   * **Avoid:** Modify a {% data variables.product.prodname_github_app %}

* To refer to just the code for the app, use terminology like "code for your app" or "your app's code".
   * **Use:** code for your app
   * **Use:** code for your {% data variables.product.prodname_github_app %}
   * **Use:** your app's code
   * **Avoid:** Your {% data variables.product.prodname_github_app %}
   * **Avoid:** Your {% data variables.product.prodname_oauth_app %}

* To refer to the whole app collectively (registration + code), refer to it as a {% data variables.product.prodname_github_app %} or {% data variables.product.prodname_oauth_app %}.

{% data variables.product.prodname_github_apps %} can be installed on organization and user accounts. To refer to an installation of the app, use "{% data variables.product.prodname_github_app %} installation" instead of "{% data variables.product.prodname_github_app %}."

### Currency

When referring to dollars, cents, amounts of currency or using the `$` sign, ensure the currency used is defined even if the amount is zero. Use the [ISO standard currency name](https://www.iso.org/iso-4217-currency-codes.html), and the [ISO standard currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=currency-codes) where possible.

Use lowercase for currency names, but capitalize the reference to the country or region.
* **Use:** US dollar.
* **Avoid:** US Dollar, $USD dollar.

Use uppercase for currency codes.
* **Use:** USD.

Where there is only one reference in an article, use the currency name without a `$` sign preceding the amount.
* **Use:** `10 US dollars` for a single reference to currency.

Where an article contains several references to the same currency, ensure that the first reference uses the currency name without a `$` sign preceding the amount and includes the currency code in parentheses following the currency name.

For subsequent references to currency in an article or where appropriate (such as when space is a consideration, or when several amounts are presented in a table or list), include the `$` sign preceding the amount and use the ISO standard currency code following the amount.
* **Use:** `10 US dollars (USD)` for the first reference, and `$0.25 USD` for subsequent references.
* **Avoid:** `$10 US dollars (USD)`, `USD$0.25`.

Where the first reference concerns cents or a non-dollar amount, capitalize the reference to the country or region of the currency used in parentheses immediately after the first reference. Subsequent currency references are treated using the guidelines above.

* **Use:** `99 cents (US currency)` for the first reference, and `99 cents` for subsequent references.
* **Avoid:** `$0.99 (US currency)`, `$0.99 USD cents`, `USD$0.99 cents`.

### Permissions

A **permission** is the ability to perform a specific action. For example, the ability to delete an issue is a permission.

A **role** is a set of permissions that can be assigned to a user. Roles exist at different levels.

* Accounts (e.g., organization owner, billing manager for an enterprise account)
* Resources (e.g., write for a repository, admin for a security advisory)
* Teams (e.g., team maintainer)

A person's **access** refers generally to all the abilities the person has in a particular context, regardless of which roles or individual permissions those abilities come from.

Only use **permission** or **role** when the distinction between the two is important. Otherwise, use **access**.

* **Use:** To create a custom repository role, you choose an inherited role and then add individual permissions.
* **Use:** Managing a team's access to your organization's repository
* **Use:** If your team membership gives you a different level of access than your role as organization owner…
* **Use:** People with write access can…
* **Avoid:** People with the write access can...
* **Avoid:** People with the write role can…
* **Avoid:** People with write permissions can…
* **Avoid:** People with write privileges can…

When specifying the access required to take an action, refer only to the role at the same level as the action. For example, you need admin access to a repository, which is a repository-level role, to configure protected branches. You can get admin access to a repository by being an organization owner, an organization-level role, but the repository-level role is what actually governs your ability to take the action, so that is the only role that should be mentioned.

* **Use:** People with write access to a repository can do X to the repository.
* **Avoid:** Organization owners and people with write access can do X to the repository.

For more information about word choice for permissions statements, see "[AUTOTITLE](/contributing/style-guide-and-content-model/contents-of-a-github-docs-article#permissions-statements)" in the content model.

### Prepositions

Avoid ending a sentence with a preposition unless the rewritten sentence would sound awkward or too formal.

### Product names

See the “[Product names](#product-names)” section of this guide.

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
| frontmatter | front matter, front-matter |
| on {% data variables.product.company_short %} | on a remote repository |
| press (a key) | hit, tap |
| type (in the user interface) | enter (in the user interface) |
| enter (in the command line) | type (in the command line) |

## Word choice

### Ambiguous verbs

When a task is required, or one option is preferred to another, avoid using ambiguous modal auxiliary verbs such as "may," "might," "ought," "should," "could," "would," and "can." These verbs can be interpreted as either a command or a suggestion. Instead, use verbs that clearly indicate whether the action is required or optional. If something is an option or suggestion, you can use these verbs so long as you make it clear that the action is optional.

* **Use:** You can decide which keyboard shortcuts to use.
* **Use:** Use the `git clone` command to clone a repository.
* **Avoid:** You can use the `git clone` command to clone a repository.
* **Avoid:** You could delete the branch.

### Invisible plurals

Avoid invisible plurals, which are words that have ambiguous meaning because they can be interpreted as singular or plural. For example, "file retrieval" could refer to retrieving a single file or multiple files.

* **Use:** After the file is retrieved, select where to save it.
* **Avoid:** After file retrieval, select where to save it.

### Nominalizations

Avoid nominalizations, which are nouns created from verbs or adjectives. Nominalizations can make sentences longer, harder to understand, and harder to translate.

* **Use:** After the workflow concludes, the package will be visible.
* **Avoid:** After the workflow has reached its conclusion, the package will be visible.

### Strings of nouns

Avoid stacked modifiers (strings of nouns), which can lead to incorrect translations because translations may not be able to tell which word is modifying the other. You can rephrase the string of nouns using a preposition. If using a stacked modifier is essential, make sure the background information and context are clear so that readers and the translator can understand what is being modified.
* **Use:** Default source settings for public repositories
* **Avoid:** Public repository default source settings

### Vague nouns and pronouns

If a pronoun seems to refer to more than one antecedent, either reword the sentence to make the antecedent clear or replace the pronoun with a noun to eliminate ambiguity.

* **Use:** After you make your final commit to your branch and merge your pull request, you can delete your branch.
* **Avoid:** After you make your final commit to your branch and merge your pull request, you can delete it.
