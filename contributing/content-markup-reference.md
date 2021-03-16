# Markup reference for GitHub Docs <!-- omit in toc -->

## Table of contents <!-- omit in toc -->
- [Writing in Markdown](#writing-in-markdown)
- [Callout tags](#callout-tags)
  - [Usage](#usage)
- [Code sample syntax highlighting](#code-sample-syntax-highlighting)
  - [Usage](#usage-1)
- [Octicons](#octicons)
  - [Usage](#usage-2)
- [Operating system tags](#operating-system-tags)
  - [Usage](#usage-3)
- [Reusable and variable strings of text](#reusable-and-variable-strings-of-text)

## Writing in Markdown

[Markdown](http://daringfireball.net/projects/markdown/) is a human-friendly syntax for formatting plain text. Our documentation is written with [GitHub Flavored Markdown](https://docs.github.com/en/github/writing-on-github/about-writing-and-formatting-on-github), a custom version of Markdown used across GitHub.

This site's Markdown rendering is powered by [`/lib/render-content`](/lib/render-content), which is in turn built on the [`remark`](https://remark.js.org/) Markdown processor.

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

## Reusable and variable strings of text

Reusable strings (commonly called content references or conrefs) contain content that’s used in more than one place in our documentation and allow us to change the content in a single location rather than every place the string appears.

For longer strings, we use reusables, and for shorter strings, we use variables. For more information about reusables, see the [reusables README](../data/reusables/README.md). For more information about variables, see the [variables README](../data/variables/README.md).
