# Liquid helpers <!-- omit in toc -->

We use the [Liquid template language](https://shopify.github.io/liquid/basics/introduction/) (specifically, [this Node.js port](https://github.com/harttle/liquidjs)) and a custom `{% ifversion ... %}` tag to create versions of our documentation.

Note: If you are an open source contributor, you should not worry about versioning content. This document is only here as reference.

:arrow_upper_left:  TOC

## Versioned documentation

We provide versioned documentation for users of GitHub.com plans and Enterprise Cloud, Enterprise Server, and GitHub AE. If multiple versions of a page exist on the site, readers can choose the version from the version picker at the top of the page.

### GitHub.com

Documentation for GitHub.com has two possible versions:

#### Free, Pro, or Team plans

For Free, Pro, or Team plans on GitHub.com, use `free-pro-team@latest`. The short name is `fpt`.

#### Enterprise Cloud

For GitHub Enterprise Cloud, use `enterprise-cloud@latest`. The short name is `ghec`.

### Enterprise Server

Documentation for Enterprise Server has multiple versions and can be divided into two types: documentation for **supported releases** (we support four at any one time), and documentation for **deprecated releases** (we do not link to these on the Docs site but we support a "frozen" snapshot of these docs in perpetuity, so they can still be accessed if you know the URLs). See `lib/enterprise-server-releases.js` for a list.

The versions are named `enterprise-server@<release>`. The short name is `ghes`. In Liquid conditionals, we can specify ranges, like `ghes > 3.0`. (See more on operators below.)

### GitHub AE

Versioning for GitHub AE uses the `github-ae@latest` version. The short name is `ghae`.

## Versioning in the YAML frontmatter

Use the `versions` property within the file's frontmatter to define which products an entire page applies to. For more information, see [the _content_ directory's README](/content#versions).

## Liquid conditional operators

If you define multiple products in the `versions` key within a page's YAML frontmatter, you can use the conditional operators `ifversion`/`else` (or `ifversion`/`elsif`/`else`) in the Markdown to control how the site renders content on the page for a particular product. For example, a feature may have more options on Dotcom than on GitHub Enterprise Server, so you can version the content for both Dotcom and GitHub Enterprise Server via the `versions` frontmatter, and use Liquid conditionals to describe the additional options for Dotcom.

Important notes:

* Use `ifversion` for product-based versioning and [feature-based versioning](#feature-based-versioning).
* Do not use `if` or `unless`.
* Make sure to use `elsif` and not `else if`. Liquid does not recognize `else if` and will not render content inside an `else if` block.

### Comparison operators

For versions that don't have numbered releases (like `fpt` and `ghae`), you have two options:

* `{% ifversion ghae %}`
* `{% ifversion not ghae %}`

For versions that have numbered releases (currently only `ghes`), you can do the same for content that is either available in all of the releases or not available in any of the releases:

* `{% ifversion ghes %}`
* `{% ifversion not ghes %}`

If you need to denote content that is only available (or not available) in **certain** releases, you can use the following operators:

|Operator | Meaning| Example
|--|--|--|
|`=`| Equal to| `{% ifversion ghes = 3.0 %}`
|`>`| Newer than| `{% ifversion ghes > 3.0 %}`
|`<`| Older than| `{% ifversion ghes < 3.0 %}`
|`!=`| Not equal to| `{% ifversion ghes != 3.0 %}` (don't use `not` in ranges)

The Liquid operators `==`, `>=`, and `<=` are not supported in the GitHub Docs.

### Logical operators

When **all** operands must be true for the condition to be true, use the operator `and`:

```
{% ifversion ghes > 2.21 and ghes < 3.1 %}
```

When **at least one** operand must be true for the condition to be true, use the operator `or`:

```
{% ifversion fpt or ghes > 2.21 %}
```

Do **not** use the operators `&&` or `||`. Liquid does not recognize them, and the content will not render in the intended versions.

### Feature-based versioning

You can define an arbitrarily named feature and associate specific product versions with that named feature using feature-based versioning. When you use the named version in a Liquid conditional block, the versions that you associate will apply to the content within the block. If the versioning for the feature changes, you can update one file instead of every individual Liquid tag. You can use the `else` operator with feature-based versioning, but not the `not` operator. For more information, see [data/features/README.md](/data/features).
