---
title: About writing and formatting on GitHub
intro: GitHub combines a syntax for formatting text called GitHub Flavored Markdown with a few unique writing features.
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About writing & formatting
---
[Markdown](http://daringfireball.net/projects/markdown/) is an easy-to-read, easy-to-write syntax for formatting plain text.

We've added some custom functionality to create {% data variables.product.prodname_dotcom %} Flavored Markdown, used to format prose and code across our site.

You can also interact with other users in pull requests and issues using features like [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [issue and PR references](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests), and [emoji](/articles/basic-writing-and-formatting-syntax/#using-emoji).

## Text formatting toolbar

Every comment field on {% data variables.product.product_name %} contains a text formatting toolbar, allowing you to format your text without learning Markdown syntax. In addition to Markdown formatting like bold and italic styles and creating headers, links, and lists, the toolbar includes {% data variables.product.product_name %}-specific features such as @mentions, task lists, and links to issues and pull requests.

{% ifversion fixed-width-font-gfm-fields %}

## Enabling fixed-width fonts in the editor

You can enable a fixed-width font in every comment field on {% data variables.product.product_name %}. Each character in a fixed-width, or monospace, font occupies the same horizontal space which can make it easier to edit advanced Markdown structures such as tables and code snippets.

![Screenshot showing the {% data variables.product.product_name %} comment field with fixed-width fonts enabled](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}
1. Under "Markdown editor font preference", select **Use a fixed-width (monospace) font when editing Markdown**.
  ![Screenshot showing the {% data variables.product.product_name %} comment field with fixed width fonts enabled](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Further reading

- [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
- "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax)"
- "[Working with advanced formatting](/articles/working-with-advanced-formatting)"
- "[Quickstart for writing on {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
