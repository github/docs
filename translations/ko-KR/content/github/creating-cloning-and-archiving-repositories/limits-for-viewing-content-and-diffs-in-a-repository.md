---
title: Limits for viewing content and diffs in a repository
intro: 'Certain types of resources can be quite large, requiring excessive processing on {% data variables.product.product_name %}. Because of this, limits are set to ensure requests complete in a reasonable amount of time.'
redirect_from:
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository/
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Most of the limits below affect both {% data variables.product.product_name %} and the API.

### Text limits

Text files over **1 MB** are always displayed as plain text. Code is not syntax highlighted, and prose files are not converted to HTML (such as Markdown, AsciiDoc, *etc.*).

Text files over **5 MB** are only available through their raw URLs, which are served through `{% data variables.product.raw_github_com %}`; for example, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Click the **Raw** button to get the raw URL for a file.

### Diff limits

Because diffs can become very large, we impose these limits on diffs for commits, pull requests, and compare views:

- No single file's diff may exceed *20,000 lines that you can load* or *1 MB* of raw diff data. *Four hundred lines* and *20 KB* are automatically loaded for a single file.
- The maximum number of files in a single diff is limited to *3,000*.
- The maximum number of renderable files (such as images, PDFs, and GeoJSON files) in a single diff is limited to *25*.

Some portions of a limited diff may be displayed, but anything exceeding the limit is not shown.

### Commit listings limits

The compare view and pull requests pages display a list of commits between the `base` and `head` revisions. These lists are limited to **250** commits. If they exceed that limit, a note indicates that additional commits are present (but they're not shown).
