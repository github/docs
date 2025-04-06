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
  ghec: '*'
shortTitle: About writing & formatting
---
{% data reusables.getting-started.what-is-markdown %}

We've added some custom functionality to create {% data variables.product.prodname_dotcom %} Flavored Markdown, used to format prose and code across our site.

You can also interact with other users in pull requests and issues using features like @-mentions, issue and PR references, and emoji. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)."

## Text formatting toolbar

Every comment field on {% data variables.product.product_name %} contains a text formatting toolbar, which allows you to format your text without learning Markdown syntax. In addition to Markdown formatting like bold and italic styles and creating headers, links, and lists, the toolbar includes {% data variables.product.product_name %}-specific features such as @-mentions, task lists, and links to issues and pull requests.

{% ifversion fixed-width-font-gfm-fields %}

## Enabling fixed-width fonts in the editor

You can enable a fixed-width font in every comment field on {% data variables.product.product_name %}. Each character in a fixed-width, or monospace, font occupies the same horizontal space. This can make it easier to edit advanced Markdown structures such as tables and code snippets.

![Screenshot of a {% data variables.product.prodname_dotcom %} comment showing a sample Markdown table listing two Git commands. All letters in the table are the same visual width.](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}
1. Under "Markdown editor font preference", select **Use a fixed-width (monospace) font when editing Markdown**.
   ![Screenshot of {% data variables.product.prodname_dotcom %} user settings for Markdown preference. The checkbox to use a fix-width font in Markdown is checked and outlined in dark orange.](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Further reading

* [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
* "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)"
* "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting)"
* "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
