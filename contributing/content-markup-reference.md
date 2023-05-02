# Markup reference for GitHub Docs <!-- omit in toc -->

## Table of contents <!-- omit in toc -->
- [Writing in Markdown](#writing-in-markdown)
- [Lists](#lists)
  - [Usage](#usage)
- [Callout tags](#callout-tags)
  - [Usage](#usage-1)
- [Code sample syntax highlighting](#code-sample-syntax-highlighting)
  - [Usage](#usage-2)
- [Octicons](#octicons)
  - [Usage](#usage-3)
- [Operating system tags](#operating-system-tags)
  - [Usage](#usage-4)
- [Tool tags](#tool-tags)
  - [Usage](#usage-5)
- [Reusable and variable strings of text](#reusable-and-variable-strings-of-text)
- [Tables with codeblocks](#tables-with-codeblocks)
- [Internal links with AUTOTITLE](#internal-links-with-autotitle)

## Writing in Markdown

[Markdown](http://daringfireball.net/projects/markdown/) is a human-friendly syntax for formatting plain text. Our documentation is written with [GitHub Flavored Markdown](https://docs.github.com/en/github/writing-on-github/about-writing-and-formatting-on-github), a custom version of Markdown based on the [CommonMark specification](https://github.github.com/gfm/), and it is used across GitHub.

This site's Markdown rendering is powered by [`/lib/render-content`](/lib/render-content), which is in turn built on the [`remark`](https://remark.js.org/) Markdown processor.

## Lists

In a list item, the general rules for additional content after the first paragraph are:

* Images and subsequent paragraphs should each **be on their own line and separated by a blank line**.
* All subsequent lines in a list item **must match up with the first text after the list marker**.

### Usage

For example, this is the correct way to write list items with multiple paragraphs or objects:

```markdown
1. Under your repository name, click **Actions**.

   ![Actions tab in the main repository navigation](/assets/images/help/repository/actions-tab.png)

   This is another paragraph in the list.
1. This is the next item.
```

![Screenshot of a CommonMark-compliant Markdown list, annotated with explanations of the spacing and indentation.](/contributing/images/commonmark-lists.png)

## Callout tags

Callouts highlight important information that customers need to know. We use standard formatting and colors for different types of callouts: notes, warnings, and danger notices. Use tags before and after the text you’d like included in the callout box.

### Usage

```
{% note %}

**Note:** Owners and administrators can add outside collaborators to a repository.

{% endnote %}
```

For information on when to use callout tags, see the [style guide](content-style-guide.md).

## Code sample syntax highlighting

To render syntax highlighting in command line instructions, we use triple backticks followed by the term `shell`.

### Usage

    ```shell
    git init YOUR_REPO
    ```

This syntax highlighting renders light text on a dark background, and should be reserved for command line instructions.

Within the command-line syntax, use all uppercase text to indicate placeholder text or content that varies for each user, such as a user or repository name. By default, codeblocks will escape the content within the triple backticks. If you need to write sample code that parses the content (for example, to italicize text within `<em>` tags instead of passing the tags through literally), wrap the codeblock in `<pre>` `</pre>` tags.

**Copy-able code blocks**

You can also add a header that includes the name of the language and a button to copy the contents of the code block:

    ```js{:copy}
    const copyMe = true
    ```

## Octicons

Octicons are icons used across GitHub’s interface. We reference octicons when documenting the user interface and to indicate binary values in tables. Find the name of specific octicons on the [Octicons site](https://primer.style/octicons). 

If you're referencing an octicon that appears in the UI, identify whether the octicon is the entire label of the UI element (e.g., a button that is labeled only with "+") or whether it's only decorative, in addition to another label (e.g., a button is labeled "+ Add message").

 - If the octicon is the entire label, use your browser's developer tools to inspect the octicon and determine what screen reader users will hear instead. Then, use that text for the `aria-label` (e.g., `{% octicon "plus" aria-label="Add file" %}`). Occasionally, in the UI, the octicon itself will not have an `aria-label`, but a surrounding element such as a `<summary>` or `<div>` tag will.
 - If the octicon is decorative, it's likely hidden to screen readers with the `aria-hidden=true` attribute. If so, for consistency with the product, use `aria-hidden="true"` in the Liquid syntax for the octicon in the docs as well (e.g., `"{% octicon "plus" aria-hidden="true" %} Add message"`). 

If you're using the octicon in another way, such as using the "check" and "x" icons to reflect binary values in tables, use the `aria-label` to describe the meaning of the octicon, not its visual characteristics. For example, if you're using a "x" icon in the "Supported" column of a table, use "Not supported" as the `aria-label`. For more information, see [Tables](./content-style-guide.md#use-clear-consistent-symbols-and-labels) in the style guide.

### Usage

```
{% octicon "<name of octicon>" %}
{% octicon "plus" %}
{% octicon "plus" aria-label="Add file" %}
"{% octicon "plus" aria-hidden="true" %} Add file"
```

## Operating system tags

We occasionally need to write documentation for different operating systems. Each operating system may require a different set of instructions. We use operating system tags to demarcate information for each operating system.

### Usage

```
{% mac %}

These instructions are pertinent to Mac users.

{% endmac %}
```

```
{% windows %}

These instructions are pertinent to Windows users.

{% endwindows %}
```

```
{% linux %}

 These instructions are pertinent to Linux users.

{% endlinux %}
```

You can define a default platform in the frontmatter. For more information, see the [content README](../content/README.md#defaultplatform).

## Tool tags

We occasionally need to write documentation for different tools (GitHub UI, GitHub CLI, GitHub Desktop, cURL, Codespaces, Visual Studio Code, JetBrains IDEs, GitHub Enterprise Importer CLI, GraphQL API). Each tool may require a different set of instructions. We use tool tags to demarcate information for each tool.

On rare occasions, we will add new tools. Before adding a new tool, read the [tool switcher content model](./tool-switcher.md). To add a new tool, add an entry to the `allTools` object in [`lib/all-tools.js`](../lib/all-tools.js) as a key-value pair. The key is the tag you'll use to refer to the tool in the article, the value is how the tool will be identified on the tool picker at the top of the article.

You can define a default tool in the frontmatter. For more information, see the [content README](../content/README.md#defaulttool).

### Usage

```
{% webui %}

These instructions are pertinent to GitHub UI users.

{% endwebui %}
```

```
{% cli %}

These instructions are pertinent to GitHub CLI users.

{% endcli %}
```

```
{% desktop %}

 These instructions are pertinent to GitHub Desktop.

{% enddesktop %}
```

```
{% curl %}

These instructions are pertinent to cURL users.

{% endcurl %}
```

```
{% codespaces %}

These instructions are pertinent to Codespaces users. They are mostly used outside the Codespaces docset, when we want to refer to how to do something inside Codespaces. Otherwise `webui` or `vscode` may be used.

{% endcodespaces %}
```

```
{% vscode %}

These instructions are pertinent to VS Code users.

{% endvscode %}
```

```
{% jetbrains %}

These instructions are pertinent to users of JetBrains IDEs.

{% endjetbrains %}
```

```
{% importer_cli %}

These instructions are pertinent to GitHub Enterprise Importer CLI users.

{% endimporter_cli %}
```

```
{% api %}

These instructions are pertinent to API users.

{% endapi %}
```

```
{% powershell %}

These instructions are pertinent to `pwsh` and `powershell` commands.

{% endpowershell %}
```

```
{% bash %}

These instructions are pertinent to Bash shell commands.

{% endbash %}
```

```
{% javascript %}

These instructions are pertinent to javascript users.

{% endjavascript %}
```

## Reusable and variable strings of text

Reusable strings (commonly called content references or conrefs) contain content that’s used in more than one place in our documentation and allow us to change the content in a single location rather than every place the string appears.

For longer strings, we use reusables, and for shorter strings, we use variables. For more information about reusables, see the [reusables README](../data/reusables/README.md). For more information about variables, see the [variables README](../data/variables/README.md).

## Table row headers

If you create a table where the first column contains headers for the table rows, wrap your table in the Liquid tag `{% rowheaders %} {% endrowheaders %}`. For more information, see "[Use proper markup for row and column headers](./content-style-guide.md#use-proper-markup-for-row-and-column-headers)" in the style guide.

### Example table with row headers

```
{% rowheaders %}

| | Mona | Tom | Hobbes |
|---|---|---|---|
|Type of cat| Octo | Tuxedo | Tiger |
|Likes to swim in the ocean| Yes | No | No |

{% endrowheaders %}
```

### Example table without row headers

```
| Name | Vocation |
| --- | --- |
| Mona | GitHub mascot |
| Tom | Mouse antagonist |
| Hobbes | Best friend | 
```

## Tables with codeblocks

Although using tables to contain block items, such as code blocks, is generally discouraged, occasionally it may be appropriate.

Because [tables in GitHub Flavored Markdown](https://github.github.com/gfm/#tables-extension-) cannot contain any line breaks or block-level structures, you must use HTML tags to write the table structure.

When HTML tables contain code blocks, the width of the table might exceed the regular width of page content, and then overflow into the area normally containing the mini table of contents.

If this happens, add the following CSS style to the `<table>` HTML tag:

```html
<table style="table-layout: fixed;">
```

For a current example of this usage, see the [GitHub Actions examples workflow library](https://docs.github.com/en/actions/examples).

## Internal links with AUTOTITLE

When linking to another GitHub docs page, use standard Markdown syntax like `[]()` but type `AUTOTITLE` instead of the page title. The application will replace `AUTOTITLE` with the title of the linked page during rendering. This special keyword is case-sensitive, so take care with your typing or the replacement will not work.

### Usage

- `For more information, see "[AUTOTITLE](/path/to/page)."`
- `For more information, see "[AUTOTITLE](/path/to/page#section-link)."`
- `For more information, see the TOOLNAME documentation in "[AUTOTITLE](/path/to/page?tool=TOOLNAME)."`

Note that **same-page section links do not work** with this keyword. Type out the full header text instead.

Read more about links in the [content style guide](./content-style-guide.md#links).
