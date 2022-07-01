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

![Image demonstrating how to write CommnMark-compliant Markdown lists](/assets/images/commonmark-lists.png)

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
    git init <em>YOUR_REPO</em>
    ```

This syntax highlighting renders light text on a dark background, and should be reserved for command line instructions.

Within the command-line syntax, you can also use the `<em>` helper tag to indicate content that varies for each user, such as a user or repository name.

**Copy-able code blocks**

You can also add a header that includes the name of the language and a button to copy the contents of the code block:

    ```js{:copy}
    const copyMe = true
    ```

## Octicons

Octicons are icons used across GitHub’s interface. We reference Octicons when documenting the user interface. Find the name of the Octicon on the [Octicons site](https://primer.style/octicons). For accessibility purposes, use [the `aria-label` option](https://primer.style/octicons/packages/javascript#aria-label) to describe the Octicon.

### Usage

```
{% octicon "<name of octicon>" %}
{% octicon "plus" %}
{% octicon "plus" aria-label="The plus icon" %}
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

We occasionally need to write documentation for different tools (GitHub UI, GitHub CLI, GitHub Desktop, cURL, Codespaces, VS Code, GitHub Enterprise Importer CLI, GraphQL API). Each tool may require a different set of instructions. We use tool tags to demarcate information for each tool. To modify the list of possible tools, edit [`lib/all-tools.js`](../lib/all-tools.js).

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
{% importer_cli %}

These instructions are pertinent to GitHub Enterprise Importer CLI users.

{% endimporter_cli %}
```

```
{% graphql %}

These instructions are pertinent to GraphQL API users.

{% endgraphql %}
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

You can define a default tool in the frontmatter. For more information, see the [content README](../content/README.md#defaulttool).

## Reusable and variable strings of text

Reusable strings (commonly called content references or conrefs) contain content that’s used in more than one place in our documentation and allow us to change the content in a single location rather than every place the string appears.

For longer strings, we use reusables, and for shorter strings, we use variables. For more information about reusables, see the [reusables README](../data/reusables/README.md). For more information about variables, see the [variables README](../data/variables/README.md).

## Tables with codeblocks

Although using tables to contain block items, such as code blocks, is generally discouraged, occasionally it may be appropriate.

Because [tables in GitHub Flavored Markdown](https://github.github.com/gfm/#tables-extension-) cannot contain any line breaks or block-level structures, you must use HTML tags to write the table structure.

When HTML tables contain code blocks, the width of the table might exceed the regular width of page content, and then overflow into the area normally containing the mini table of contents.

If this happens, add the following CSS style to the `<table>` HTML tag:

```html
<table style="table-layout: fixed;">
```

For a current example of this usage, see the [GitHub Actions examples workflow library](https://docs.github.com/en/actions/examples).
