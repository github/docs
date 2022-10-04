---
title: Basic writing and formatting syntax
intro: Create sophisticated formatting for your prose and code on GitHub with simple syntax.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
---
## Headings

To create a heading, add one to six <kbd>#</kbd> symbols before your heading text. The number of <kbd>#</kbd> you use will determine the size of the heading.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![Rendered H1, H2, and H6 headings](/assets/images/help/writing/headings-rendered.png)

When you use two or more headings, GitHub automatically generates a table of contents which you can access by clicking {% octicon "list-unordered" aria-label="The unordered list icon" %} within the file header. Each heading title is listed in the table of contents and you can click a title to navigate to the selected section. 

![Screenshot highlighting the table of contents icon](/assets/images/help/repository/headings_toc.png)

## Styling text

You can indicate emphasis with bold, italic, strikethrough, subscript, or superscript text in comment fields and `.md` files.  

| Style | Syntax | Keyboard shortcut | Example | Output |
| --- | --- | --- | --- | --- |
| Bold | `** **` or `__ __`| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **This is bold text** |
| Italic | `* *` or `_ _`     | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*This text is italicized*` | *This text is italicized* |
| Strikethrough | `~~ ~~` | | `~~This was mistaken text~~` | ~~This was mistaken text~~ |
| Bold and nested italic | `** **` and `_ _` | | `**This text is _extremely_ important**` | **This text is _extremely_ important** |
| All bold and italic | `*** ***` | | `***All this text is important***` | ***All this text is important*** |
| Subscript | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>This is a subscript text</sub> |
| Superscript | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>This is a superscript text</sup> |

## Quoting text

You can quote text with a <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![Rendered quoted text](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Tip:** When viewing a conversation, you can automatically quote text in a comment by highlighting the text, then typing <kbd>R</kbd>. You can quote an entire comment by clicking {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then **Quote reply**. For more information about keyboard shortcuts, see "[Keyboard shortcuts](/articles/keyboard-shortcuts/)."

{% endtip %}

## Quoting code

You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted. You can also press the <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) keyboard shortcut to insert the backticks for a code block within a line of Markdown.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Rendered inline code block](/assets/images/help/writing/inline-code-rendered.png)

To format code or text into its own distinct block, use triple backticks.

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![Rendered code block](/assets/images/help/writing/code-block-rendered.png)

For more information, see "[Creating and highlighting code blocks](/articles/creating-and-highlighting-code-blocks)."

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Supported color models

In issues, pull requests, and discussions, you can call out colors within a sentence by using backticks. A supported color model within backticks will display a visualization of the color.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![Rendered supported color model.](/assets/images/help/writing/supported-color-models-rendered.png)

Here are the currently supported color models.

| Color | Syntax | Example | Output |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Rendered supported color model in HEX format.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Rendered supported color model in RGB format.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Rendered supported color model in HSL format.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**Notes:**

- A supported color model cannot have any leading or trailing spaces within the backticks.
- The visualization of the color is only supported in issues, pull requests, and discussions.

{% endnote %}

## Links

You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`. You can also use the keyboard shortcut <kbd>Command</kbd>+<kbd>K</kbd> to create a link.{% ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %} When you have text selected, you can paste a URL from your clipboard to automatically create a link from the selection.{% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %} You can also create a Markdown hyperlink by highlighting the text and using the keyboard shortcut <kbd>Command</kbd>+<kbd>V</kbd>. If you'd like to replace the text with the link, use the keyboard shortcut <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>.{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Rendered link](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Tip:** {% data variables.product.product_name %} automatically creates links when valid URLs are written in a comment. For more information, see "[Autolinked references and URLs](/articles/autolinked-references-and-urls)."

{% endtip %}

## Section links

{% data reusables.repositories.section-links %}

## Relative links

{% data reusables.repositories.relative-links %}

## Images

You can display an image by adding <kbd>!</kbd> and wrapping the alt text in `[ ]`. Then wrap the link for the image in parentheses `()`.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![Rendered Image](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} supports embedding images into your issues, pull requests{% ifversion fpt or ghec %}, discussions{% endif %}, comments  and `.md` files. You can display an image from your repository, add a link to an online image, or upload an image. For more information, see "[Uploading assets](#uploading-assets)."

{% tip %}

**Tip:** When you want to display an image which is in your repository, you should use relative links instead of absolute links.

{% endtip %}

Here are some examples for using relative links to display an image.

| Context | Relative Link |
| ------ | -------- |
| In a `.md` file on the same branch | `/assets/images/electrocat.png` |
| In a `.md` file on another branch | `/../main/assets/images/electrocat.png` |
| In issues, pull requests and comments of the repository | `../blob/main/assets/images/electrocat.png?raw=true` |
| In a `.md` file in another repository | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| In issues, pull requests and comments of another repository | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Note**: The last two relative links in the table above will work for images in a private repository only if the viewer has at least read access to the private repository which contains these images.

{% endnote %}

For more information, see "[Relative Links](#relative-links)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### Specifying the theme an image is shown to

You can specify the theme an image is displayed for in Markdown by using the HTML `<picture>` element in combination with the `prefers-color-scheme` media feature. We distinguish between light and dark color modes, so there are two options available. You can use these options to display images optimized for dark or light backgrounds. This is particularly helpful for transparent PNG images.

For example, the following code displays a sun image for light themes and a moon for dark themes:

{% data reusables.getting-started.picture-element-example %}

The old method of specifying images based on the theme, by using a fragment appended to the URL (`#gh-dark-mode-only` or `#gh-light-mode-only`), is deprecated and will be removed in favor of the new method described above.
{% endif %}

## Lists

You can make an unordered list by preceding one or more lines of text with <kbd>-</kbd> or <kbd>*</kbd>.

```markdown
- George Washington
- John Adams
- Thomas Jefferson
```

![Rendered unordered list](/assets/images/help/writing/unordered-list-rendered.png)

To order your list, precede each line with a number.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Rendered ordered list](/assets/images/help/writing/ordered-list-rendered.png)

### Nested Lists

You can create a nested list by indenting one or more list items below another item.

To create a nested list using the web editor on {% data variables.product.product_name %} or a text editor that uses a monospaced font, like [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), you can align your list visually. Type space characters in front of your nested list item, until the list marker character (<kbd>-</kbd> or <kbd>*</kbd>) lies directly below the first character of the text in the item above it.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**Note**: In the web-based editor, you can indent or dedent one or more lines of text by first highlighting the desired lines and then using <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> respectively.

{% endtip %}

![Nested list with alignment highlighted](/assets/images/help/writing/nested-list-alignment.png)

![List with two levels of nested items](/assets/images/help/writing/nested-list-example-1.png)

To create a nested list in the comment editor on {% data variables.product.product_name %}, which doesn't use a monospaced font, you can look at the list item immediately above the nested list and count the number of characters that appear before the content of the item. Then type that number of space characters in front of the nested list item.

In this example, you could add a nested list item under the list item `100. First list item` by indenting the nested list item a minimum of five spaces, since there are five characters (`100. `) before `First list item`.

```markdown
100. First list item
     - First nested list item
```

![List with a nested list item](/assets/images/help/writing/nested-list-example-3.png)   

You can create multiple levels of nested lists using the same method. For example, because the first nested list item has seven characters (`␣␣␣␣␣-␣`) before the nested list content `First nested list item`, you would need to indent the second nested list item by seven spaces.

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![List with two levels of nested items](/assets/images/help/writing/nested-list-example-2.png)    

For more examples, see the [GitHub Flavored Markdown Spec](https://github.github.com/gfm/#example-265).

## Task lists

{% data reusables.repositories.task-list-markdown %}

If a task list item description begins with a parenthesis, you'll need to escape it with <kbd>\\</kbd>:

`- [ ] \(Optional) Open a followup issue`

For more information, see "[About task lists](/articles/about-task-lists)."

## Mentioning people and teams

You can mention a person or [team](/articles/setting-up-teams/) on {% data variables.product.product_name %} by typing <kbd>@</kbd> plus their username or team name. This will trigger a notification and bring their attention to the conversation. People will also receive a notification if you edit a comment to mention their username or team name. For more information about notifications, see "[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications)."

{% note %}

**Note:** A person will only be notified about a mention if the person has read access to the repository and, if the repository is owned by an organization, the person is a member of the organization.

{% endnote %}

`@github/support What do you think about these updates?`

![Rendered @mention](/assets/images/help/writing/mention-rendered.png)

When you mention a parent team, members of its child teams also receive notifications, simplifying communication with multiple groups of people. For more information, see "[About teams](/articles/about-teams)."

Typing an <kbd>@</kbd> symbol will bring up a list of people or teams on a project. The list filters as you type, so once you find the name of the person or team you are looking for, you can use the arrow keys to select it and press either tab or enter to complete the name. For teams, enter the @organization/team-name and all members of that team will get subscribed to the conversation.

The autocomplete results are restricted to repository collaborators and any other participants on the thread.

## Referencing issues and pull requests

You can bring up a list of suggested issues and pull requests within the repository by typing <kbd>#</kbd>. Type the issue or pull request number or title to filter the list, and then press either tab or enter to complete the highlighted result.

For more information, see "[Autolinked references and URLs](/articles/autolinked-references-and-urls)."

## Referencing external resources

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Content attachments

Some {% data variables.product.prodname_github_apps %} provide information in {% data variables.product.product_name %} for URLs that link to their registered domains. {% data variables.product.product_name %} renders the information provided by the app under the URL in the body or comment of an issue or pull request.

![Content attachment](/assets/images/github-apps/content_reference_attachment.png)

To see content attachments, you must have a {% data variables.product.prodname_github_app %} that uses the Content Attachments API installed on the repository.{% ifversion fpt or ghec %} For more information, see "[Installing an app in your personal account](/articles/installing-an-app-in-your-personal-account)" and "[Installing an app in your organization](/articles/installing-an-app-in-your-organization)."{% endif %}

Content attachments will not be displayed for URLs that are part of a markdown link.

For more information about building a {% data variables.product.prodname_github_app %} that uses content attachments, see "[Using Content Attachments](/apps/using-content-attachments)."{% endif %}

## Uploading assets

You can upload assets like images by dragging and dropping, selecting from a file browser, or pasting. You can upload assets to issues, pull requests, comments, and `.md` files in your repository.

## Using emoji

You can add emoji to your writing by typing `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Rendered emoji](/assets/images/help/writing/emoji-rendered.png)

Typing <kbd>:</kbd> will bring up a list of suggested emoji. The list will filter as you type, so once you find the emoji you're looking for, press **Tab** or **Enter** to complete the highlighted result.

For a full list of available emoji and codes, check out [the Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Paragraphs

You can create a new paragraph by leaving a blank line between lines of text.

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
## Footnotes

You can add footnotes to your content by using this bracket syntax:

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

The footnote will render like this:

![Rendered footnote](/assets/images/site/rendered-footnote.png)

{% tip %}

**Note**: The position of a footnote in your Markdown does not influence where the footnote will be rendered. You can write a footnote right after your reference to the footnote, and the footnote will still render at the bottom of the Markdown.

Footnotes are not supported in wikis.

{% endtip %}
{% endif %}

## Hiding content with comments

You can tell {% data variables.product.product_name %} to hide content from the rendered Markdown by placing the content in an HTML comment.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Ignoring Markdown formatting

You can tell {% data variables.product.product_name %} to ignore (or escape) Markdown formatting by using <kbd>\\</kbd> before the Markdown character.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Rendered escaped character](/assets/images/help/writing/escaped-character-rendered.png)

For more information, see Daring Fireball's "[Markdown Syntax](https://daringfireball.net/projects/markdown/syntax#backslash)."

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}

## Disabling Markdown rendering

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

## Further reading

- [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
- "[About writing and formatting on GitHub](/articles/about-writing-and-formatting-on-github)"
- "[Working with advanced formatting](/articles/working-with-advanced-formatting)"
- "[Quickstart for writing on {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
