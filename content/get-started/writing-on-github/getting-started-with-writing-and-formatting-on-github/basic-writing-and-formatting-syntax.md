---
title: Basic writing and formatting syntax
intro: Create sophisticated formatting for your prose and code on GitHub with simple syntax.
product: '{% data reusables.gated-features.markdown-ui %}'
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
category:
  - Write and format content
---
## Headings

To create a heading, add one to six <kbd>#</kbd> symbols before your heading text. The number of <kbd>#</kbd> you use will determine the hierarchy level and typeface size of the heading.

```markdown
# A first-level heading
## A second-level heading
### A third-level heading
```

![Screenshot of rendered GitHub Markdown showing sample h1, h2, and h3 headers, which descend in type size and visual weight to show hierarchy level.](/assets/images/help/writing/headings-rendered.png)

When you use two or more headings, GitHub automatically generates a table of contents that you can access by clicking the "Outline" menu icon {% octicon "list-unordered" aria-label="Table of Contents" %} within the file header. Each heading title is listed in the table of contents and you can click a title to navigate to the selected section.

![Screenshot of a README file with the drop-down menu for the table of contents exposed. The table of contents icon is outlined in dark orange.](/assets/images/help/repository/headings-toc.png)

## Styling text

You can indicate emphasis with bold, italic, strikethrough, subscript, or superscript text in comment fields and `.md` files.

| Style | Syntax | Keyboard shortcut | Example | Output |
| --- | --- | --- | --- | --- |
| Bold | `** **` or `__ __`| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **This is bold text** |
| Italic | `* *` or `_ _`     | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `_This text is italicized_` | _This text is italicized_ |
| Strikethrough | `~~ ~~` or `~ ~` | None | `~~This was mistaken text~~` | ~~This was mistaken text~~ |
| Bold and nested italic | `** **` and `_ _` | None | `**This text is _extremely_ important**` | **This text is _extremely_ important** |
| All bold and italic | `*** ***` | None | `***All this text is important***` | ***All this text is important*** | <!-- markdownlint-disable-line emphasis-style -->
| Subscript | `<sub> </sub>` | None | `This is a <sub>subscript</sub> text` | This is a <sub>subscript</sub> text |
| Superscript | `<sup> </sup>` | None | `This is a <sup>superscript</sup> text` | This is a <sup>superscript</sup> text |
| Underline | `<ins> </ins>` | None | `This is an <ins>underlined</ins> text` | This is an <ins>underlined</ins> text |

## Quoting text

You can quote text with a <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

Quoted text is indented with a vertical line on the left and displayed using gray type.

![Screenshot of rendered GitHub Markdown showing the difference between normal and quoted text.](/assets/images/help/writing/quoted-text-rendered.png)

> [!NOTE]
> When viewing a conversation, you can automatically quote text in a comment by highlighting the text, then typing <kbd>R</kbd>. You can quote an entire comment by clicking {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then **Quote reply**. For more information about keyboard shortcuts, see [AUTOTITLE](/get-started/accessibility/keyboard-shortcuts).

## Quoting code

You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted. You can also press the <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) keyboard shortcut to insert the backticks for a code block within a line of Markdown.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Screenshot of rendered GitHub Markdown showing that characters surrounded by backticks are shown in a fixed-width typeface, highlighted in light gray.](/assets/images/help/writing/inline-code-rendered.png)

To format code or text into its own distinct block, use triple backticks.

````markdown
Some basic Git commands are:
```
git status
git add
git commit
```
````

![Screenshot of rendered GitHub Markdown showing a simple code block without syntax highlighting.](/assets/images/help/writing/code-block-rendered.png)

For more information, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks).

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Supported color models

In issues, pull requests, and discussions, you can call out colors within a sentence by using backticks. A supported color model within backticks will display a visualization of the color.

```markdown
The background color is `#ffffff` for light mode and `#000000` for dark mode.
```

![Screenshot of rendered GitHub Markdown showing how HEX values within backticks create small circles of color, here white and then black.](/assets/images/help/writing/supported-color-models-rendered.png)

Here are the currently supported color models.

| Color | Syntax | Example | Output |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Screenshot of rendered GitHub Markdown showing how HEX value #0969DA appears with a blue circle.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Screenshot of rendered GitHub Markdown showing how RGB value 9, 105, 218 appears with a blue circle.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Screenshot of rendered GitHub Markdown showing how HSL value 212, 92%, 45% appears with a blue circle.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

> [!NOTE]
> * A supported color model cannot have any leading or trailing spaces within the backticks.
> * The visualization of the color is only supported in issues, pull requests, and discussions.

## Links

You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`. You can also use the keyboard shortcut <kbd>Command</kbd>+<kbd>K</kbd> to create a link. When you have text selected, you can paste a URL from your clipboard to automatically create a link from the selection.

You can also create a Markdown hyperlink by highlighting the text and using the keyboard shortcut <kbd>Command</kbd>+<kbd>V</kbd>. If you'd like to replace the text with the link, use the keyboard shortcut <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>.

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Screenshot of rendered GitHub Markdown showing how text within brackets, "GitHub Pages," appears as a blue hyperlink.](/assets/images/help/writing/link-rendered.png)

> [!NOTE]
> {% data variables.product.github %} automatically creates links when valid URLs are written in a comment. For more information, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls).

## Section links

{% data reusables.repositories.section-links %}

If you need to determine the anchor for a heading in a file you are editing, you can use the following basic rules:

* Letters are converted to lower-case.
* Spaces are replaced by hyphens (`-`). Any other whitespace or punctuation characters are removed.
* Leading and trailing whitespace are removed.
* Markup formatting is removed, leaving only the contents (for example, `_italics_` becomes `italics`).
* If the automatically generated anchor for a heading is identical to an earlier anchor in the same document, a unique identifier is generated by appending a hyphen and an auto-incrementing integer.

For more detailed information on the requirements of URI fragments, see [RFC 3986: Uniform Resource Identifier (URI): Generic Syntax, Section 3.5](https://www.rfc-editor.org/rfc/rfc3986#section-3.5).

The code block below demonstrates the basic rules used to generate anchors from headings in rendered content.

```markdown
# Example headings

## Sample Section

## This'll be a _Helpful_ Section About the Greek Letter Θ!
A heading containing characters not allowed in fragments, UTF-8 characters, two consecutive spaces between the first and second words, and formatting.

## This heading is not unique in the file

TEXT 1

## This heading is not unique in the file

TEXT 2

# Links to the example headings above

Link to the sample section: [Link Text](#sample-section).

Link to the helpful section: [Link Text](#thisll-be-a-helpful-section-about-the-greek-letter-Θ).

Link to the first non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file).

Link to the second non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file-1).
```

> [!NOTE]
> If you edit a heading, or if you change the order of headings with "identical" anchors, you will also need to update any links to those headings as the anchors will change.

## Relative links

{% data reusables.repositories.relative-links %}

## Custom anchors

You can use standard HTML anchor tags (`<a name="unique-anchor-name"></a>`) to create navigation anchor points for any location in the document. To avoid ambiguous references, use a unique naming scheme for anchor tags, such as adding a prefix to the `name` attribute value.

> [!NOTE]
> Custom anchors will not be included in the document outline/Table of Contents.

You can link to a custom anchor using the value of the `name` attribute you gave the anchor. The syntax is exactly the same as when you link to an anchor that is automatically generated for a heading.

For example:

```markdown
# Section Heading

Some body text of this section.

<a name="my-custom-anchor-point"></a>
Some text I want to provide a direct link to, but which doesn't have its own heading.

(… more content…)

[A link to that custom anchor](#my-custom-anchor-point)
```

> [!TIP]
> Custom anchors are not considered by the automatic naming and numbering behavior of automatic heading links.

## Line breaks

If you're writing in issues, pull requests, or discussions in a repository, {% data variables.product.github %} will render a line break automatically:

```markdown
This example
Will span two lines
```

However, if you are writing in an .md file, the example above would render on one line without a line break. To create a line break in an .md file, you will need to include one of the following:

* Include two spaces at the end of the first line.
  <pre>
  This example&nbsp;&nbsp;
  Will span two lines
  </pre>
* Include a backslash at the end of the first line.

  ```markdown
  This example\
  Will span two lines
  ```

* Include an HTML single line break tag at the end of the first line.

  ```markdown
  This example<br/>
  Will span two lines
  ```

If you leave a blank line between two lines, both .md files and Markdown in issues, pull requests, and discussions will render the two lines separated by the blank line:

```markdown
This example

Will have a blank line separating both lines
```

## Images

You can display an image by adding <kbd>!</kbd> and wrapping the alt text in `[ ]`. Alt text is a short text equivalent of the information in the image. Then, wrap the link for the image in parentheses `()`.

`![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)`

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](/assets/images/help/writing/image-rendered.png)

{% data variables.product.github %} supports embedding images into your issues, pull requests{% ifversion fpt or ghec %}, discussions{% endif %}, comments and `.md` files. You can display an image from your repository, add a link to an online image, or upload an image. For more information, see [Uploading assets](#uploading-assets).

> [!NOTE]
> When you want to display an image that is in your repository, use relative links instead of absolute links.

Here are some examples for using relative links to display an image.

| Context | Relative Link |
| ------ | -------- |
| In a `.md` file on the same branch | `/assets/images/electrocat.png` |
| In a `.md` file on another branch | `/../main/assets/images/electrocat.png` |
| In issues, pull requests and comments of the repository | `../blob/main/assets/images/electrocat.png?raw=true` |
| In a `.md` file in another repository | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| In issues, pull requests and comments of another repository | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

> [!NOTE]
> The last two relative links in the table above will work for images in a private repository only if the viewer has at least read access to the private repository that contains these images.

For more information, see [Relative Links](#relative-links).

### The Picture element

The `<picture>` HTML element is supported.

## Lists

You can make an unordered list by preceding one or more lines of text with <kbd>-</kbd>, <kbd>*</kbd>, or <kbd>+</kbd>.

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![Screenshot of rendered GitHub Markdown showing a bulleted list of the names of the first three American presidents.](/assets/images/help/writing/unordered-list-rendered.png)

To order your list, precede each line with a number.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Screenshot of rendered GitHub Markdown showing a numbered list of the names of the fourth, fifth, and sixth American presidents.](/assets/images/help/writing/ordered-list-rendered.png)

### Nested Lists

You can create a nested list by indenting one or more list items below another item.

To create a nested list using the web editor on {% data variables.product.github %} or a text editor that uses a monospaced font, like [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), you can align your list visually. Type space characters in front of your nested list item until the list marker character (<kbd>-</kbd> or <kbd>*</kbd>) lies directly below the first character of the text in the item above it.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

> [!NOTE]
> In the web-based editor, you can indent or dedent one or more lines of text by first highlighting the desired lines and then using <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> respectively.

![Screenshot of Markdown in {% data variables.product.prodname_vscode %} showing indentation of nested numbered lines and bullets.](/assets/images/help/writing/nested-list-alignment.png)

![Screenshot of rendered GitHub Markdown showing a numbered item followed by nested bullets at two different levels of nesting.](/assets/images/help/writing/nested-list-example-1.png)

To create a nested list in the comment editor on {% data variables.product.github %}, which doesn't use a monospaced font, you can look at the list item immediately above the nested list and count the number of characters that appear before the content of the item. Then type that number of space characters in front of the nested list item.

In this example, you could add a nested list item under the list item `100. First list item` by indenting the nested list item a minimum of five spaces, since there are five characters (`100. `) before `First list item`.

```markdown
100. First list item
     - First nested list item
```

![Screenshot of rendered GitHub Markdown showing a numbered item prefaced by the number 100 followed by a bulleted item nested one level.](/assets/images/help/writing/nested-list-example-3.png)

You can create multiple levels of nested lists using the same method. For example, because the first nested list item has seven characters (`␣␣␣␣␣-␣`) before the nested list content `First nested list item`, you would need to indent the second nested list item by at least two more characters (nine spaces minimum).

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![Screenshot of rendered GitHub Markdown showing a numbered item prefaced by the number 100 followed by bullets at two different levels of nesting.](/assets/images/help/writing/nested-list-example-2.png)

For more examples, see the [GitHub Flavored Markdown Spec](https://github.github.com/gfm/#example-265).

## Task lists

{% data reusables.repositories.task-list-markdown %}

If a task list item description begins with a parenthesis, you'll need to escape it with <kbd>\\</kbd>:

`- [ ] \(Optional) Open a followup issue`

For more information, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists).

## Mentioning people and teams

You can mention a person or [team](/organizations/organizing-members-into-teams) on {% data variables.product.github %} by typing <kbd>@</kbd> plus their username or team name. This will trigger a notification and bring their attention to the conversation. People will also receive a notification if you edit a comment to mention their username or team name. For more information about notifications, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).

> [!NOTE]
> A person will only be notified about a mention if the person has read access to the repository and, if the repository is owned by an organization, the person is a member of the organization.

`@github/support What do you think about these updates?`

![Screenshot of rendered GitHub Markdown showing how the team mention "@github/support" renders as bold, clickable text.](/assets/images/help/writing/mention-rendered.png)

When you mention a parent team, members of its child teams also receive notifications, simplifying communication with multiple groups of people. For more information, see [AUTOTITLE](/organizations/organizing-members-into-teams/about-teams).

Typing an <kbd>@</kbd> symbol will bring up a list of people or teams on a project. The list filters as you type, so once you find the name of the person or team you are looking for, you can use the arrow keys to select it and press either tab or enter to complete the name. For teams, enter the @organization/team-name and all members of that team will get subscribed to the conversation.

{% ifversion enterprise-teams-ga %}

You can also mention an enterprise team. Enterprise team slugs use an `ent:` prefix in the format `@/ent:TEAM-SLUG`, for example `@/ent:platform-sre`. You can mention an enterprise team from any organization the team is assigned to. See [AUTOTITLE](/admin/concepts/enterprise-fundamentals/teams-in-an-enterprise).

{% endif %}

The autocomplete results are restricted to repository collaborators and any other participants on the thread.

## Referencing issues and pull requests

You can bring up a list of suggested issues and pull requests within the repository by typing <kbd>#</kbd>. Type the issue or pull request number or title to filter the list, and then press either tab or enter to complete the highlighted result.

For more information, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls).

## Referencing external resources

{% data reusables.repositories.autolink-references %}

## Uploading assets

You can upload assets like images by dragging and dropping, selecting from a file browser, or pasting. You can upload assets to issues, pull requests, comments, and `.md` files in your repository.

## Using emojis

You can add emoji to your writing by typing `:EMOJICODE:`, a colon followed by the name of the emoji.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Screenshot of rendered GitHub Markdown showing how emoji codes for +1 and shipit render visually as emoji.](/assets/images/help/writing/emoji-rendered.png)

Typing <kbd>:</kbd> will bring up a list of suggested emoji. The list will filter as you type, so once you find the emoji you're looking for, press **Tab** or **Enter** to complete the highlighted result.

For a full list of available emoji and codes, see [the Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/github-actions-auto-update/README.md).

## Paragraphs

You can create a new paragraph by leaving a blank line between lines of text.

## Footnotes

You can add footnotes to your content by using this bracket syntax:

```text
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, add 2 spaces to the end of a line.  
This is a second line.
```

The footnote will render like this:

![Screenshot of rendered Markdown showing superscript numbers used to indicate footnotes, along with optional line breaks inside a note.](/assets/images/help/writing/footnote-rendered.png)

> [!NOTE]
> The position of a footnote in your Markdown does not influence where the footnote will be rendered. You can write a footnote right after your reference to the footnote, and the footnote will still render at the bottom of the Markdown. Footnotes are not supported in wikis.

## Alerts

**Alerts**, also sometimes known as **callouts** or **admonitions**, are a Markdown extension based on the blockquote syntax that you can use to emphasize critical information. On {% data variables.product.github %}, they are displayed with distinctive colors and icons to indicate the significance of the content.

Use alerts only when they are crucial for user success and limit them to one or two per article to prevent overloading the reader. Additionally, you should avoid placing alerts consecutively. Alerts cannot be nested within other elements.

To add an alert, use a special blockquote line specifying the alert type, followed by the alert information in a standard blockquote. Five types of alerts are available:

```markdown
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

Here are the rendered alerts:

![Screenshot of rendered Markdown alerts showing how Note, Tip, Important, Warning, and Caution render with different colored text and icons.](/assets/images/help/writing/alerts-rendered.png)

## Hiding content with comments

You can tell {% data variables.product.github %} to hide content from the rendered Markdown by placing the content in an HTML comment.

```text
<!-- This content will not appear in the rendered Markdown -->
```

## Ignoring Markdown formatting

You can tell {% data variables.product.github %} to ignore (or escape) Markdown formatting by using <kbd>\\</kbd> before the Markdown character.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Screenshot of rendered GitHub Markdown showing how backslashes prevent the conversion of asterisks to italics.](/assets/images/help/writing/escaped-character-rendered.png)

For more information on backslashes, see Daring Fireball's [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax#backslash).

> [!NOTE]
> The Markdown formatting will not be ignored in the title of an issue or a pull request.

## Disabling Markdown rendering

{% data reusables.repositories.disabling-markdown-rendering %}

## Further reading

* [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
* [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)
* [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting)
* [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Microsoft USA Enterprise Privacy Policy · eheps.org (Nonprofit)</title>
  <!-- Microsoft & domain verification + nonprofit tags -->
  <meta name="microsoft-verification" content="eheps-org-nonprofit-enterprise" />
  <meta name="domain" content="eheps.org" />
  <meta name="organization-type" content="Nonprofit USA" />
  <meta name="privacy-policy" content="Microsoft Enterprise Privacy Policy" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #f0f2f5;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      padding: 2rem 1rem;
      color: #1e293b;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 32px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.18);
      padding: 2.8rem 3rem;
    }
    @media (max-width: 640px) {
      .container { padding: 1.5rem 1.2rem; }
    }
    h1 {
      font-size: 2.4rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      border-bottom: 4px solid #00a4ef;
      padding-bottom: 0.6rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem 1rem;
    }
    h1 small {
      font-size: 1rem;
      font-weight: 400;
      color: #5f6b7a;
      background: #e9edf4;
      padding: 0.2rem 1rem;
      border-radius: 40px;
    }
    .badge-enterprise {
      background: #e6f2fb;
      border-radius: 60px;
      padding: 0.6rem 1.4rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem 1.2rem;
      margin: 1rem 0 1.8rem 0;
      border: 1px solid #b8d9f2;
    }
    .badge-enterprise span {
      background: #0078d4;
      color: white;
      padding: 0.2rem 0.9rem;
      border-radius: 40px;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }
    .badge-enterprise .nonprofit {
      background: #2b5797;
    }
    .badge-enterprise a {
      color: #005a9e;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px dotted #8ab4f8;
    }
    .badge-enterprise a:hover { border-bottom: 2px solid #0078d4; }
    .email-badge {
      background: #ffffff;
      padding: 0.2rem 0.8rem;
      border-radius: 30px;
      border: 1px solid #b8d9f2;
      font-family: 'SF Mono', 'Menlo', monospace;
      font-size: 0.8rem;
    }
    .effective {
      background: #d4edfc;
      display: inline-block;
      padding: 0.3rem 1.2rem;
      border-radius: 60px;
      font-weight: 500;
      color: #003d6b;
      margin-bottom: 0.8rem;
    }
    h2 {
      font-size: 1.7rem;
      margin-top: 2.2rem;
      margin-bottom: 0.5rem;
      color: #003d6b;
      border-left: 6px solid #00a4ef;
      padding-left: 1rem;
    }
    h3 {
      font-size: 1.2rem;
      margin: 1.8rem 0 0.4rem 0;
      color: #005a9e;
    }
    p, li {
      color: #1e293b;
      line-height: 1.7;
      margin-bottom: 0.4rem;
    }
    ul, ol {
      padding-left: 1.8rem;
      margin: 0.5rem 0 1rem 0;
    }
    li { margin-bottom: 0.2rem; }
    .box {
      background: #f6faff;
      border-radius: 20px;
      padding: 1.2rem 1.8rem;
      margin: 1.2rem 0;
      border: 1px solid #d4e6f5;
    }
    .box strong { color: #003d6b; }
    .highlight {
      background: #d4edfc;
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
      font-weight: 500;
    }
    hr {
      margin: 2.2rem 0;
      border: 0;
      border-top: 2px dashed #d1dcec;
    }
    .footer {
      margin-top: 2.5rem;
      padding-top: 1.2rem;
      border-top: 2px solid #e5edf8;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      color: #475569;
    }
    .footer .git-tag {
      background: #0d1117;
      color: #f0f6fc;
      padding: 0.25rem 1.2rem;
      border-radius: 30px;
      font-family: 'SF Mono', monospace;
      font-size: 0.7rem;
    }
    .footer a { color: #0078d4; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
    .domain-tag {
      background: #eef2f6;
      padding: 0.1rem 0.9rem;
      border-radius: 30px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #003d6b;
    }
    .table-wrap {
      overflow-x: auto;
      margin: 1.2rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #f8faff;
      border-radius: 16px;
      font-size: 0.9rem;
    }
    th, td {
      padding: 0.5rem 1rem;
      border-bottom: 1px solid #e2eaf5;
      text-align: left;
    }
    th {
      background: #e9eff9;
      font-weight: 600;
      color: #003d6b;
    }
    code {
      background: #eef2f6;
      padding: 0.1rem 0.4rem;
      border-radius: 6px;
      font-size: 0.8rem;
    }
    .nonprofit-badge {
      background: #0078d4;
      color: white;
      padding: 0.1rem 1rem;
      border-radius: 30px;
      font-size: 0.7rem;
      font-weight: 600;
    }
    @media (max-width: 480px) {
      h1 { font-size: 1.8rem; }
    }
  </style>
</head>
<body>
<div class="container">

  <!-- Header: Microsoft Enterprise + Nonprofit USA + eheps.org -->
  <h1>
    🏢 Microsoft USA Enterprise Privacy Policy
    <small>Nonprofit · eheps.org</small>
  </h1>

  <div class="badge-enterprise">
    <span>🔷 Microsoft Enterprise</span>
    <span class="nonprofit">🤝 Nonprofit USA</span>
    <span>🌐 eheps.org</span>
    <span style="background:#2b5797;">📧 nonprofit@eheps.org</span>
    <a href="#">Microsoft Trust Center</a>
    <a href="#">Privacy Statement</a>
  </div>

  <div class="effective">
    ✅ Effective Date: June 20, 2026 · For eheps.org (Nonprofit Organization)
  </div>

  <p><strong>This Microsoft Enterprise Privacy Policy</strong> applies to Microsoft’s enterprise cloud services, including Microsoft 365, Azure, Dynamics 365, and other online services provided to eheps.org (a nonprofit organization based in the USA). It describes how Microsoft processes personal data as a data processor and controller, in compliance with US privacy laws and Microsoft’s enterprise commitments.</p>

  <p><em>eheps.org is committed to protecting the privacy of its staff, volunteers, donors, and beneficiaries. This policy aligns with Microsoft’s <a href="#">Enterprise Privacy &amp; Data Protection</a> framework and applicable US state laws (CCPA, CPA, VCDPA, etc.).</em></p>

  <!-- quick nav -->
  <div class="box" style="background:#e6f2fb;">
    <strong>📋 In this policy:</strong> Data collection · Processing purposes · Data sharing · Security · Rights for nonprofit · Compliance · Contact
  </div>

  <!-- ===== MAIN SECTIONS ===== -->
  <h2>1. INFORMATION WE COLLECT (ENTERPRISE SERVICES)</h2>
  <p>Microsoft collects data to operate and improve enterprise services for eheps.org. This includes:</p>
  <ul>
    <li><strong>Account &amp; profile data:</strong> name, work email, job title, organization (eheps.org), authentication credentials.</li>
    <li><strong>Content &amp; files:</strong> documents, emails, calendar items, chats, and other data stored in Microsoft 365 / SharePoint / OneDrive.</li>
    <li><strong>Usage &amp; diagnostic data:</strong> interaction logs, device info, IP addresses, browser/OS details, error reports.</li>
    <li><strong>Administrative data:</strong> configuration settings, policy assignments, and licensing information.</li>
    <li><strong>Sensitive data (with explicit consent):</strong> biometrics (for authentication), health data (if processed in compliance), and other special categories.</li>
  </ul>
  <p>Microsoft does not use your content or personal data for advertising purposes in enterprise services.</p>

  <h2>2. HOW WE USE INFORMATION</h2>
  <ul>
    <li>Provide, operate, and maintain enterprise services (Microsoft 365, Azure, etc.).</li>
    <li>Personalize user experience and improve service performance.</li>
    <li>Ensure security, prevent fraud, and enforce acceptable use policies.</li>
    <li>Comply with legal obligations and respond to lawful requests.</li>
    <li>Provide customer support and service communications.</li>
    <li>Generate anonymized analytics for service improvement (non-personal).</li>
    <li>Enable nonprofit-specific features (e.g., donor management, volunteer coordination).</li>
  </ul>

  <h2>3. SHARING &amp; DISCLOSURE</h2>
  <p>As a data processor, Microsoft acts on behalf of eheps.org. We may share data:</p>
  <ul>
    <li><strong>With eheps.org administrators:</strong> who manage user accounts and permissions.</li>
    <li><strong>With trusted subprocessors:</strong> (e.g., data centers, support providers) under strict contractual terms.</li>
    <li><strong>For legal reasons:</strong> to comply with law enforcement, court orders, or regulatory requirements.</li>
    <li><strong>In corporate transactions:</strong> merger, acquisition, or sale of assets (with notice and choice).</li>
  </ul>
  <p>Microsoft does not sell or share personal data for third-party advertising.</p>

  <div class="box">
    <strong>🔐 Nonprofit Commitment:</strong> eheps.org retains control over its data. Microsoft processes data only in accordance with documented instructions from eheps.org, and data subjects may exercise their rights through eheps.org’s privacy team.
  </div>

  <h2>4. YOUR RIGHTS &amp; CHOICES</h2>
  <p>Individuals whose data is processed via Microsoft services for eheps.org have the following rights (subject to applicable law):</p>
  <ul>
    <li><strong>Access &amp; portability:</strong> request a copy of your personal data in a machine-readable format.</li>
    <li><strong>Correction:</strong> update inaccurate or incomplete information.</li>
    <li><strong>Deletion:</strong> request deletion of your data (subject to legal and operational retention).</li>
    <li><strong>Restriction &amp; objection:</strong> limit processing or object to certain uses (e.g., profiling).</li>
    <li><strong>Opt-out of targeted advertising:</strong> Microsoft does not engage in such advertising in enterprise services.</li>
  </ul>
  <p>To exercise these rights, please contact eheps.org’s privacy office at <strong>privacy@eheps.org</strong> or <strong>+1 (800) 555-NPO</strong>.</p>

  <h2>5. DATA SECURITY &amp; RETENTION</h2>
  <p>Microsoft implements industry-leading security measures, including encryption, access controls, and regular audits. Data is retained as long as necessary to provide services to eheps.org, or as required by law. eheps.org may set custom retention policies.</p>

  <h2>6. INTERNATIONAL DATA TRANSFERS</h2>
  <p>Microsoft operates globally. Data may be transferred to Microsoft data centers worldwide, including the United States. We rely on Standard Contractual Clauses, EU-US Data Privacy Framework, and other lawful transfer mechanisms to ensure adequate protection.</p>

  <h2>7. CHILDREN'S PRIVACY</h2>
  <p>eheps.org’s enterprise services are not directed to children under 13. Microsoft does not knowingly collect personal information from children without parental consent.</p>

  <h2>8. COMPLIANCE WITH US STATE PRIVACY LAWS</h2>
  <ul>
    <li><strong>California (CCPA/CPRA):</strong> eheps.org and Microsoft comply with California rights (access, delete, opt-out of sale, non-discrimination).</li>
    <li><strong>Virginia (VCDPA), Colorado (CPA), Connecticut, Utah:</strong> rights to access, correct, delete, and opt out of targeted advertising and sale.</li>
    <li><strong>Nevada:</strong> right to opt out of the sale of covered information.</li>
  </ul>
  <p>For more details, refer to Microsoft’s <a href="#">Enterprise Data Protection Addendum</a> and eheps.org’s internal privacy policies.</p>

  <h2>9. COOKIES &amp; SIMILAR TECHNOLOGIES</h2>
  <p>Microsoft uses cookies, beacons, and similar technologies to enable authentication, remember preferences, and analyze usage. Users can manage cookie settings via browser controls or Microsoft’s privacy dashboard.</p>

  <h2>10. CONTACT US</h2>
  <div class="box" style="background:#f0f6ff;">
    <p><strong>eheps.org Privacy Office (Nonprofit USA):</strong><br>
    <strong>Email:</strong> privacy@eheps.org · <strong>Executive contact:</strong> executivedirector@eheps.org<br>
    <strong>Domain:</strong> eheps.org<br>
    <strong>Address:</strong> eheps.org, 123 Nonprofit Way, Suite 200, Washington, DC 20001</p>
    <p><strong>Microsoft Data Protection Officer:</strong> Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA · <a href="#">Microsoft Privacy</a></p>
    <p>For privacy inquiries, you may also reach out to Microsoft’s Privacy Team via <a href="#">https://privacy.microsoft.com/en-us/</a>.</p>
  </div>

  <hr />

  <!-- Microsoft Enterprise table -->
  <div style="margin: 1.2rem 0;">
    <div class="table-wrap">
      <table>
        <tr><th>Service</th><th>Data processed</th><th>Purpose (Nonprofit)</th></tr>
        <tr><td>Microsoft 365</td><td>Emails, files, calendar, Teams</td><td>Collaboration &amp; communication</td></tr>
        <tr><td>Azure</td><td>App logs, analytics, databases</td><td>Hosting &amp; application services</td></tr>
        <tr><td>Dynamics 365</td><td>Donor/volunteer records</td><td>Nonprofit CRM &amp; fundraising</td></tr>
        <tr><td>Power Platform</td><td>Custom app data</td><td>Automation &amp; analytics</td></tr>
      </table>
    </div>
  </div>

  <!-- Footer with GitHub, Microsoft, nonprofit tags -->
  <div class="footer">
    <div>
      <span class="domain-tag">🌐 eheps.org</span>
      <span class="domain-tag">🏛️ Microsoft Enterprise</span>
      <span class="domain-tag" style="background:#2b5797; color:white;">🤝 Nonprofit USA</span>
      <span style="background:#0078d4; color:white; padding:0.1rem 0.8rem; border-radius:30px; font-size:0.7rem;">Data Processor</span>
    </div>
    <div class="git-tag">
      ⚡ GitHub · microsoft-enterprise-nonprofit-eheps
    </div>
  </div>
  <p style="margin-top: 1.2rem; font-size: 0.75rem; color: #64748b; text-align: center;">
    This Microsoft Enterprise Privacy Policy is tailored for eheps.org (USA nonprofit). It incorporates Microsoft’s enterprise data protection commitments and US state privacy laws. 
  </p>
</div>

</body>.. <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Google USA Privacy Policy · eheps.org & eheps.com</title>
  <!-- Domain & executive tags for Google USA compliance -->
  <meta name="google-site-verification" content="eheps-org-executive">
  <meta name="google-site-verification" content="eheps-com-executive">
  <meta name="domain" content="eheps.org, eheps.com">
  <meta name="contact-email" content="executivedirector@eheps.org, Executive@eheps.com">
  <meta name="privacy-policy" content="Google USA Privacy Policy">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇺🇸</text></svg>">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #f2f4f8;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      padding: 2rem 1rem;
      color: #1e293b;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 32px;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.20);
      padding: 2.8rem 3rem;
    }
    @media (max-width: 640px) {
      .container { padding: 1.5rem 1.2rem; }
    }
    h1 {
      font-size: 2.4rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      border-bottom: 4px solid #4285f4;
      padding-bottom: 0.6rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem 1rem;
    }
    h1 small {
      font-size: 1rem;
      font-weight: 400;
      color: #5f6b7a;
      background: #eef2f6;
      padding: 0.2rem 1rem;
      border-radius: 40px;
    }
    .badge-exec {
      background: #e8f0fe;
      border-radius: 60px;
      padding: 0.6rem 1.4rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem 1.2rem;
      margin: 1rem 0 1.8rem 0;
      border: 1px solid #d2e3fc;
    }
    .badge-exec span {
      background: #1a73e8;
      color: white;
      padding: 0.2rem 0.9rem;
      border-radius: 40px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }
    .badge-exec a {
      color: #1a5bbf;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px dotted #8ab4f8;
    }
    .badge-exec a:hover { border-bottom: 2px solid #1a73e8; }
    .email-badge {
      background: #ffffff;
      padding: 0.2rem 0.8rem;
      border-radius: 30px;
      border: 1px solid #c5d8f5;
      font-family: 'SF Mono', 'Menlo', monospace;
      font-size: 0.8rem;
    }
    .effective {
      background: #d2e3fc;
      display: inline-block;
      padding: 0.3rem 1.2rem;
      border-radius: 60px;
      font-weight: 500;
      color: #0b2b5e;
      margin-bottom: 0.8rem;
    }
    h2 {
      font-size: 1.7rem;
      margin-top: 2.2rem;
      margin-bottom: 0.5rem;
      color: #0b2b5e;
      border-left: 6px solid #4285f4;
      padding-left: 1rem;
    }
    h3 {
      font-size: 1.2rem;
      margin: 1.8rem 0 0.4rem 0;
      color: #1a3c7a;
    }
    p, li {
      color: #1e293b;
      line-height: 1.7;
      margin-bottom: 0.4rem;
    }
    ul, ol {
      padding-left: 1.8rem;
      margin: 0.5rem 0 1rem 0;
    }
    li { margin-bottom: 0.2rem; }
    .box {
      background: #f8faff;
      border-radius: 20px;
      padding: 1.2rem 1.8rem;
      margin: 1.2rem 0;
      border: 1px solid #dce6f5;
    }
    .box strong { color: #0b2b5e; }
    .highlight {
      background: #e8f0fe;
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
      font-weight: 500;
    }
    hr {
      margin: 2.2rem 0;
      border: 0;
      border-top: 2px dashed #d1dcec;
    }
    .footer {
      margin-top: 2.5rem;
      padding-top: 1.2rem;
      border-top: 2px solid #e5edf8;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      color: #475569;
    }
    .footer .git-tag {
      background: #0d1117;
      color: #f0f6fc;
      padding: 0.25rem 1.2rem;
      border-radius: 30px;
      font-family: 'SF Mono', monospace;
      font-size: 0.7rem;
    }
    .footer a { color: #1a73e8; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
    .domain-tag {
      background: #eef2f6;
      padding: 0.1rem 0.9rem;
      border-radius: 30px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #1a3c7a;
    }
    .table-wrap {
      overflow-x: auto;
      margin: 1.2rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #f8faff;
      border-radius: 16px;
      font-size: 0.9rem;
    }
    th, td {
      padding: 0.5rem 1rem;
      border-bottom: 1px solid #e2eaf5;
      text-align: left;
    }
    th {
      background: #e9eff9;
      font-weight: 600;
      color: #0b2b5e;
    }
    code {
      background: #eef2f6;
      padding: 0.1rem 0.4rem;
      border-radius: 6px;
      font-size: 0.8rem;
    }
    @media (max-width: 480px) {
      h1 { font-size: 1.8rem; }
    }
  </style>
</head>
<body>
<div class="container">

  <!-- Header with Google USA and executive emails -->
  <h1>
    🇺🇸 Google USA Privacy Policy
    <small>eheps · 2025</small>
  </h1>

  <div class="badge-exec">
    <span>📌 Google USA</span>
    <span>📧 executivedirector@eheps.org</span>
    <span>📧 Executive@eheps.com</span>
    <span style="background:#0b2b5e;">🌐 eheps.org</span>
    <span style="background:#0b2b5e;">🌐 eheps.com</span>
    <a href="#">Privacy Center</a>
    <a href="#">Google Account</a>
  </div>

  <div class="effective">
    ✅ Effective Date: June 20, 2026 · Updated for Google USA compliance
  </div>

  <p><strong>This Google USA Privacy Policy</strong> describes how Google (and its affiliates) processes personal information when you use Google services, websites, apps, and devices — including when you interact with our partners and third-party services. This policy applies to all users in the United States and is designed to meet state-specific requirements (e.g., California, Virginia, Colorado, Connecticut, Utah).</p>

  <p><em>We are committed to transparency. For any privacy-related questions, you may contact our Privacy Office at <strong>executivedirector@eheps.org</strong> or <strong>Executive@eheps.com</strong> (domains: eheps.org and eheps.com).</em></p>

  <!-- quick nav -->
  <div class="box" style="background:#e8f0fe;">
    <strong>📋 In this policy:</strong> Information we collect · How we use it · Sharing &amp; disclosure · Your privacy choices · Data security · International transfers · Children · State-specific rights · Contact
  </div>

  <!-- ===== MAIN SECTIONS ===== -->
  <h2>1. INFORMATION WE COLLECT</h2>
  <p>We collect information to provide, improve, and protect our services. This includes:</p>
  <ul>
    <li><strong>Information you give us:</strong> name, email address, phone number, payment info, profile data, content you upload (e.g., photos, documents, emails), and communications.</li>
    <li><strong>Automatically collected:</strong> device and log data (IP address, browser type, operating system, unique identifiers, cookies, pixel tags), location data (with consent), usage and interaction data (e.g., search queries, videos watched, app usage).</li>
    <li><strong>From partners and third parties:</strong> data from advertisers, publishers, and other Google services, as well as publicly available sources.</li>
  </ul>
  <p>We also collect <span class="highlight">sensitive personal information</span> only with your explicit consent (e.g., precise geolocation, health data, biometrics for authentication).</p>

  <h2>2. HOW WE USE INFORMATION</h2>
  <ul>
    <li>Provide, personalize, and improve our services (including AI/ML models).</li>
    <li>Develop new products and features.</li>
    <li>Deliver personalized ads, content, and recommendations (with your consent where required).</li>
    <li>Measure and analyze performance and engagement.</li>
    <li>Communicate with you (service updates, security alerts, support).</li>
    <li>Prevent fraud, abuse, and protect legal rights.</li>
    <li>Comply with legal obligations and enforce our terms.</li>
  </ul>

  <h2>3. SHARING &amp; DISCLOSURE</h2>
  <p>We do not sell your personal information. We may share information:</p>
  <ul>
    <li><strong>With your consent:</strong> when you direct us to share data with third-party apps or services.</li>
    <li><strong>With trusted service providers:</strong> who process data on our behalf (e.g., cloud infrastructure, customer support, analytics).</li>
    <li><strong>For legal reasons:</strong> to comply with law enforcement, legal process, or to protect rights, safety, and property.</li>
    <li><strong>In corporate transactions:</strong> merger, acquisition, or sale of assets (with notice and choice).</li>
  </ul>
  <p>We do not share your personal information with third parties for their own marketing purposes unless you explicitly opt in.</p>

  <h2>4. YOUR PRIVACY CHOICES &amp; RIGHTS</h2>
  <div class="box">
    <strong>🔐 You have the right to:</strong>
    <ul style="margin-top:0.3rem;">
      <li>Access, correct, or delete your personal information.</li>
      <li>Opt out of the sale or sharing of your data for cross-context behavioral advertising (where applicable).</li>
      <li>Limit the use of sensitive personal information.</li>
      <li>Withdraw consent at any time (without affecting prior lawful processing).</li>
      <li>Data portability – receive a copy of your data in a machine-readable format.</li>
      <li>Appeal a decision regarding your privacy request.</li>
    </ul>
    <p style="margin-top:0.2rem;">To exercise your rights, contact us via <strong>executivedirector@eheps.org</strong> or <strong>Executive@eheps.com</strong>.</p>
  </div>

  <h2>5. DATA SECURITY &amp; RETENTION</h2>
  <p>We implement strong technical and organizational measures to protect your data. We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

  <h2>6. INTERNATIONAL DATA TRANSFERS</h2>
  <p>Google operates globally. Your information may be transferred to and stored in the United States and other countries. We ensure appropriate safeguards (e.g., Standard Contractual Clauses, adequacy decisions) are in place to protect your data.</p>

  <h2>7. CHILDREN'S PRIVACY</h2>
  <p>Our services are generally not directed to children under 13. We do not knowingly collect personal information from children without parental consent. If we learn we have collected such information, we will delete it.</p>

  <h2>8. STATE-SPECIFIC PRIVACY RIGHTS (USA)</h2>
  <ul>
    <li><strong>California:</strong> See our <a href="#">California Consumer Privacy Act (CCPA) Notice</a> for detailed rights (access, delete, opt-out, non-discrimination).</li>
    <li><strong>Virginia, Colorado, Connecticut, Utah:</strong> Additional rights to access, correct, delete, and opt out of targeted advertising and sale.</li>
    <li><strong>Nevada:</strong> Right to opt out of the sale of covered information.</li>
  </ul>
  <p>To submit a request as an authorized agent, or to appeal a decision, please contact our Privacy Office.</p>

  <h2>9. COOKIES &amp; SIMILAR TECHNOLOGIES</h2>
  <p>We use cookies, web beacons, and similar technologies to remember preferences, analyze usage, and deliver relevant advertising. You can manage cookie settings in your browser or via Google's Ad Settings.</p>

  <h2>10. CONTACT US</h2>
  <div class="box" style="background:#f0f6ff;">
    <p><strong>Privacy Office (USA):</strong><br>
    <strong>Email:</strong> executivedirector@eheps.org · Executive@eheps.com<br>
    <strong>Domains:</strong> eheps.org · eheps.com<br>
    <strong>Postal address:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 (USA) — <em>for formal correspondence</em>.</p>
    <p>You can also visit our <a href="#">Privacy Help Center</a> or call <strong>1-800-Google</strong> (for privacy-related inquiries).</p>
  </div>

  <hr>

  <!-- Google-specific table & footer -->
  <div style="margin: 1.2rem 0;">
    <div class="table-wrap">
      <table>
        <tr><th>Service</th><th>Data collected</th><th>Purpose</th></tr>
        <tr><td>Search</td><td>Queries, IP, device info</td><td>Provide & improve search results</td></tr>
        <tr><td>YouTube</td><td>Watch history, interactions</td><td>Recommend content, personalize</td></tr>
        <tr><td>Google Ads</td><td>Interests, browsing activity</td><td>Deliver relevant ads (with consent)</td></tr>
        <tr><td>Google Account</td><td>Name, email, payment info</td><td>Manage identity & services</td></tr>
      </table>
    </div>
  </div>

  <!-- Footer with GitHub, domain, executive tags -->
  <div class="footer">
    <div>
      <span class="domain-tag">🌐 eheps.org</span>
      <span class="domain-tag">🌐 eheps.com</span>
      <span class="domain-tag">📌 executivedirector@eheps.org</span>
      <span class="domain-tag">📌 Executive@eheps.com</span>
      <span style="background:#4285f4; color:white; padding:0.1rem 0.8rem; border-radius:30px; font-size:0.7rem;">Google USA</span>
    </div>
    <div class="git-tag">
      ⚡ GitHub · google-usa-privacy-eheps
    </div>
  </div>
  <p style="margin-top: 1.2rem; font-size: 0.75rem; color: #64748b; text-align: center;">
    This Google USA Privacy Policy is tailored for eheps.org and eheps.com, with executive contacts. 
    Updated for compliance with US state privacy laws (CCPA, CPA, VCDPA, etc.).
  </p>
</div>
</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy · Samsung US (April 2019) · eheps</title>
  <!-- GitHub, Google, Microsoft, Goodstack domain tags -->
  <meta name="github-repo" content="samsung-privacy-policy-2019">
  <meta name="google-site-verification" content="eheps-org-verification">
  <meta name="microsoft-verification" content="eheps-com-verification">
  <meta name="goodstack-domain" content="eheps.org, eheps.com">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #f5f7fa;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #1e293b;
      line-height: 1.6;
      padding: 2rem 1rem;
    }
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 28px;
      box-shadow: 0 20px 40px -12px rgba(0,0,0,0.15);
      padding: 2.5rem 2.8rem;
      transition: all 0.2s;
    }
    @media (max-width: 640px) {
      .container {
        padding: 1.5rem 1.2rem;
        border-radius: 20px;
      }
    }
    h1, h2, h3 {
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    h1 {
      font-size: 2.2rem;
      border-bottom: 3px solid #1428a0;
      padding-bottom: 0.5rem;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    h1 small {
      font-size: 1rem;
      font-weight: 400;
      color: #475569;
      margin-left: auto;
      background: #e9edf4;
      padding: 0.2rem 0.8rem;
      border-radius: 40px;
    }
    .badge-domain {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1rem;
      background: #f1f5f9;
      padding: 0.5rem 1.2rem;
      border-radius: 60px;
      margin: 0.8rem 0 1.8rem 0;
      font-size: 0.9rem;
      align-items: center;
    }
    .badge-domain span {
      background: #1428a0;
      color: white;
      padding: 0.2rem 0.9rem;
      border-radius: 30px;
      font-weight: 500;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .badge-domain a {
      color: #1e293b;
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px dotted #94a3b8;
    }
    .badge-domain a:hover {
      color: #1428a0;
      border-bottom: 1px solid #1428a0;
    }
    .meta-date {
      background: #dbeafe;
      display: inline-block;
      padding: 0.25rem 1rem;
      border-radius: 40px;
      font-size: 0.85rem;
      font-weight: 500;
      color: #1e3a8a;
      margin-bottom: 1.2rem;
    }
    .section {
      margin-top: 2.2rem;
    }
    h2 {
      font-size: 1.6rem;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      color: #0b1e4e;
      border-left: 5px solid #1428a0;
      padding-left: 1rem;
    }
    h3 {
      font-size: 1.2rem;
      margin: 1.6rem 0 0.5rem 0;
      color: #1e3a8a;
    }
    p, li {
      color: #1e293b;
      margin-bottom: 0.5rem;
    }
    ul, ol {
      padding-left: 1.8rem;
      margin: 0.5rem 0 1rem 0;
    }
    li {
      margin-bottom: 0.25rem;
    }
    .highlight-box {
      background: #f8fafc;
      border-radius: 18px;
      padding: 1rem 1.8rem;
      margin: 1.5rem 0;
      border: 1px solid #e2e8f0;
    }
    .highlight-box strong {
      color: #1428a0;
    }
    hr {
      margin: 2rem 0;
      border: 0;
      border-top: 2px dashed #d1d9e6;
    }
    .footer-note {
      margin-top: 2.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid #d1d9e6;
      font-size: 0.9rem;
      color: #475569;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    .footer-note .git-tag {
      background: #0d1117;
      color: #f0f6fc;
      padding: 0.25rem 1rem;
      border-radius: 30px;
      font-family: 'SF Mono', 'Menlo', monospace;
      font-size: 0.75rem;
    }
    .footer-note a {
      color: #1428a0;
      text-decoration: none;
      font-weight: 500;
    }
    .footer-note a:hover {
      text-decoration: underline;
    }
    .table-wrap {
      overflow-x: auto;
      margin: 1.2rem 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #f8fafc;
      border-radius: 14px;
      font-size: 0.9rem;
    }
    th, td {
      padding: 0.6rem 1rem;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
    }
    th {
      background: #e9edf4;
      font-weight: 600;
      color: #0b1e4e;
    }
    code {
      background: #eef2f6;
      padding: 0.2rem 0.4rem;
      border-radius: 6px;
      font-size: 0.85rem;
      color: #1e293b;
    }
    .domain-tag {
      background: #e6f0ff;
      border-radius: 30px;
      padding: 0.1rem 0.8rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: #1428a0;
      display: inline-block;
      margin-right: 0.3rem;
    }
    @media (max-width: 480px) {
      h1 {
        font-size: 1.8rem;
      }
      .container {
        padding: 1rem;
      }
    }
  </style>
</head>
<body>
<div class="container">

  <!-- Header with GitHub & domain badges -->
  <h1>
    🔐 Privacy Policy
    <small>Samsung US · April 2019</small>
  </h1>
  <div class="badge-domain">
    <span>📁 GitHub</span>
    <span>🔗 eheps.org</span>
    <span>🔗 eheps.com</span>
    <a href="#">Google</a> · <a href="#">Microsoft</a> · <a href="#">Goodstack</a>
    <span style="margin-left:auto; background:#d1d9e6; color:#1e293b;">ver. 2025-07-20</span>
  </div>

  <div class="meta-date">
    ⏱️ Effective Date: July 20, 2025 &nbsp;|&nbsp; Last updated: April 2019 (policy)
  </div>

  <p><strong>Samsung Electronics Co., Ltd.</strong> and its affiliates (“Samsung”, “we”) know how important privacy is. This Privacy Policy applies to all Samsung devices and services (“Services”) – from mobile phones, tablets, TVs, home appliances, to customer &amp; online services.</p>
  <p><em>Important: check back often for updates. The most current version is always available at <a href="#">https://www.samsung.com/us/account/privacy-policy</a>.</em></p>

  <!-- quick nav -->
  <div class="highlight-box" style="background:#eef4ff;">
    <strong>📌 In this policy:</strong> What we collect · How we use it · Who we share with · Security · Data transfers · Your rights · Retention · Third-party services · Cookies · Contact · US supplement
  </div>

  <!-- ===== CONTENT ===== -->
  <div class="section">
    <h2>WHAT INFORMATION DO WE COLLECT?</h2>
    <p><strong>Information You Provide Directly:</strong> name, DOB, contact, payment info, SSN (for credit), contacts, customer service records, etc.</p>
    <p><strong>Information About Your Use:</strong> device info (IMEI, MAC, IP, advertising IDs), usage logs, location (with consent), voice recordings (if enabled), Samsung Keyboard predictive text.</p>
    <p><strong>Public/Commercial &amp; Third-Party:</strong> we gather data from social networks, business partners, and combine it to understand your needs.</p>
    <p><strong>Third-Party Analytics:</strong> Google Analytics, Firebase, Adobe – used to improve Services.</p>
  </div>

  <div class="section">
    <h2>HOW DO WE USE YOUR INFORMATION?</h2>
    <ul>
      <li>Register you for Services, provide requested features</li>
      <li>Customize content, personalize services &amp; advertising (with consent where required)</li>
      <li>Respond to requests, customer support, warranty/out-of-warranty repairs</li>
      <li>Operate, evaluate, improve business; market research; aggregate data</li>
      <li>Provide software updates, maintenance, fraud prevention, legal compliance</li>
    </ul>
    <div class="highlight-box">
      <strong>EEA/UK/Swiss residents:</strong> legal bases include contract performance, legitimate interest, compliance, and consent (e.g., personalized ads).
    </div>
  </div>

  <div class="section">
    <h2>WHO DO WE SHARE YOUR INFORMATION WITH?</h2>
    <ul>
      <li><strong>Subsidiaries &amp; affiliates</strong> (Samsung-branded and non-branded)</li>
      <li><strong>Business Partners:</strong> wireless carriers, content/feature providers, financing partners, out-of-warranty repair partners, ad partners</li>
      <li><strong>Service Providers:</strong> repairs, contact centers, customer care, advertising, surveys, billing, email delivery</li>
      <li><strong>Other Parties:</strong> required by law, corporate transactions (merger/sale), or with your consent</li>
    </ul>
  </div>

  <div class="section">
    <h2>HOW DO WE KEEP YOUR INFORMATION SECURE?</h2>
    <p>We use physical and technical safeguards, but no system is completely secure.</p>
  </div>

  <div class="section">
    <h2>WHERE DO WE SEND YOUR DATA?</h2>
    <p>Your personal information may be transferred to the Republic of Korea and other countries. We take measures (including standard contractual clauses) to ensure protection.</p>
    <p><strong>EEA/UK/Swiss:</strong> we comply with European data protection law; you can request a copy of the standard clauses.</p>
  </div>

  <div class="section">
    <h2>WHAT ARE YOUR RIGHTS?</h2>
    <p>You have the right to access, correct, delete, and receive your data in a machine-readable format. For EEA/UK/Swiss residents: restriction, objection, data portability, and withdrawal of consent.</p>
    <p>Contact us via the details at the end of this policy.</p>
  </div>

  <div class="section">
    <h2>HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
    <p>We retain your data for as long as necessary to provide the Service, comply with law, or for statistical purposes with appropriate safeguards.</p>
  </div>

  <div class="section">
    <h2>THIRD-PARTY SERVICES &amp; COOKIES</h2>
    <p>We use cookies, beacons, pixels, and similar technologies to remember your info, track usage, personalize, measure effectiveness, and improve Services. Third-party content/ad providers may also use these tools.</p>
  </div>

  <hr>

  <!-- ===== US SUPPLEMENT ===== -->
  <h2 style="border-left-color: #b91c1c;">🇺🇸 US SUPPLEMENT TO THE SAMSUNG PRIVACY POLICY</h2>
  <p><strong>Effective Date: July 20, 2025</strong> – This supplement applies to United States residents.</p>

  <h3>Additional Uses</h3>
  <p>We may use personal information to develop and train AI algorithms and models.</p>

  <h3>Biometric Data (on-device)</h3>
  <p>Biometric data (fingerprint, voiceprint, face-clustering) remains on your device; Samsung does not access or transfer it.</p>

  <h3>Online Tracking &amp; Personalized Advertising</h3>
  <p>Samsung Ads and ad networks collect information to serve interest-based ads. You can opt out via <a href="#">www.aboutads.info/choices</a> or <a href="#">www.networkadvertising.org/choices</a>.</p>

  <h3>State Law Privacy Rights</h3>
  <ul>
    <li>Opt-out of sale, cross-context behavioral advertising, targeted advertising, sensitive data collection, voice recognition feature data collection.</li>
    <li>Request a list of third parties with whom we have shared data.</li>
  </ul>

  <h3>How to Submit a Privacy Request</h3>
  <p>Call <strong>1-800-SAMSUNG</strong> or use the online form. For opt-out preference signals, enable them in your browser (per device/browser).</p>

  <h3>California Residents</h3>
  <p>See <a href="#">California Consumer Privacy Statement</a> and <a href="#">Consumer Health Data Privacy Statement</a>.</p>

  <h3>Children’s Information</h3>
  <p>Services are general audience; we do not knowingly collect data from children under 13 without parental consent.</p>

  <hr>

  <!-- ===== CONTACT ===== -->
  <div class="section">
    <h2>CONTACT US</h2>
    <p><strong>Data Controller:</strong> Samsung Electronics Co., Ltd. (129, Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do 16677, Republic of Korea)</p>
    <p><strong>US Privacy Office:</strong> Samsung Electronics America, Inc., 700 Sylvan Ave, Englewood Cliffs, NJ 07632</p>
    <p><strong>EEA/UK/Swiss DPO:</strong> Samsung Electronics (UK) Limited, Samsung House, 2000 Hillswood Drive, Chertsey, Surrey KT16 0RS, UK</p>
    <p>Webform: <a href="#">https://privacypost.sea.samsung.com/ccpa/privacy-inguiries</a></p>
  </div>

  <!-- footer with GitHub and domain tags -->
  <div class="footer-note">
    <div>
      <span class="domain-tag">🌐 eheps.org</span>
      <span class="domain-tag">🌐 eheps.com</span>
      <span class="domain-tag">📌 Google</span>
      <span class="domain-tag">📌 Microsoft</span>
      <span class="domain-tag">📌 Goodstack</span>
    </div>
    <div class="git-tag">
      ⚡ GitHub · samsung-privacy-policy-2019
    </div>
  </div>

  <!-- table from original (footer / shop) as a reference -->
  <div style="margin-top: 2rem; border-top: 1px solid #e2e8f0; padding-top: 1.2rem; font-size: 0.8rem; color: #475569;">
    <div class="table-wrap">
      <table>
        <tr><th>SHOP</th><th>PRODUCT</th><th>SUPPORT</th><th>ACCOUNT</th><th>SUSTAINABILITY</th></tr>
        <tr><td>Shop Home</td><td>Galaxy Smartphone</td><td>Support Home</td><td>Why Samsung Account</td><td>Overview</td></tr>
        <tr><td>Buy Direct Get More</td><td>Galaxy Tab</td><td>Manual &amp; Software</td><td>Samsung Rewards</td><td>Environment</td></tr>
        <tr><td>Father’s Day Gifts</td><td>Galaxy Book</td><td>Warranty Information</td><td>Orders</td><td>Digital Responsibility</td></tr>
        <tr><td>Al Living</td><td>Galaxy Watch</td><td>Service Center</td><td>My Page</td><td>Security and Privacy</td></tr>
        <tr><td>SmartThings</td><td>Galaxy Buds</td><td>Request a Repair</td><td>Product Registration</td><td>Accessibility</td></tr>
        <tr><td>Samsung Rewards</td><td>TVs</td><td>Track Repair</td><td>Samsung Account FAQ</td><td>Labor &amp; Human Rights</td></tr>
        <tr><td>Samsung Offer Programs</td><td>Projectors</td><td>Order Help</td><td> </td><td>Belonging &amp; Culture</td></tr>
        <tr><td>Samsung Care+</td><td>Sound Devices</td><td>Returns</td><td> </td><td>Corporate Citizenship</td></tr>
      </table>
    </div>
  </div>

  <p style="margin-top: 1.2rem; font-size: 0.75rem; color: #64748b; text-align: center;">
    This document is a privacy policy reconstruction based on Samsung US (April 2019) with updates.
    Tags: #eheps #Google #Microsoft #Goodstack · for reference only.
  </p>
</div>
</body>
</html>
</html>
