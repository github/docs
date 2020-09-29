---
title: Rendering differences in prose documents
redirect_from:
  - /articles/rendering-differences-in-prose-documents
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Commits and pull requests that include prose documents have the ability to represent those documents with *source* and *rendered* views.

The source view shows the raw text that has been typed, while the rendered view shows how that text would look once it's rendered on {% data variables.product.product_name %}. For example, this might be the difference between showing `**bold**` in Markdown, and **bold** in the rendered view.

Prose rendering is supported for rendered documents supported by [github/markup](https://github.com/github/markup):

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Paper icon to view rendered prose document](/assets/images/help/repository/rendered_prose_diff.png)

You can click {% octicon "file" aria-label="The paper icon" %} to see the changes made to the document as part of a commit.

![Rendered Prose changes](/assets/images/help/repository/rendered_prose_changes.png)

### Visualizing attribute changes

We provide a tooltip describing changes to attributes that, unlike words, would not otherwise be visible in the rendered document. For example, if a link URL changes from one website to another, we'd show a tooltip like this:

![Rendered Prose attribute changes](/assets/images/help/repository/prose_diff_attributes.png)

### Commenting on changes

[Commit comments](/articles/commenting-on-differences-between-files) can only be added to files within the *source* view, on a line-by-line basis.

### Linking to headers

As with [other rendered prose documents](/articles/about-readmes), hovering over a header in your document creates a link icon. You can link readers of your rendered prose diff to specific sections.

### Viewing complex diffs

Some pull requests involve a large number of changes with large, complex documents. When the changes take too long to analyze, {% data variables.product.product_name %} can't always produce a rendered view of the changes. If this happens, you'll see an error message when you click the rendered button.

![Message when view can't be rendered](/assets/images/help/repository/prose_diff_rendering.png)

You can still use the source view to analyze and comment on changes.

### Viewing HTML elements

We don't directly support rendered views of commits to HTML documents. Some formats, such as Markdown, let you embed arbitrary HTML in a document. When these documents are shown on {% data variables.product.product_name %}, some of that embedded HTML can be shown in a preview, while some (like an embedded YouTube video) cannot.

In general, rendered views of changes to a document containing embedded HTML will show changes to the elements that are supported in {% data variables.product.product_name %}'s view of the document. Changes to documents containing embedded HTML should always be reviewed in both the rendered and source views for completeness.
