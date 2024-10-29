---
title: Editing wiki content
intro: 'You can add images and links to content in your wiki, and use some supported MediaWiki formats.'
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
---

## Adding links

You can create links in wikis using the standard markup supported by your page, or using MediaWiki syntax. For example:

* If your pages are rendered with Markdown, the link syntax is `[Link Text](full-URL-of-wiki-page)`.
* With MediaWiki syntax, the link syntax is `[[Link Text|nameofwikipage]]`.

## Adding images

Wikis can display PNG, JPEG, and GIF images.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
1. Using the wiki sidebar, navigate to the page you want to change, and then click **Edit**.
1. In the wiki toolbar, click {% octicon "image" aria-hidden="true" %}.

   ![Screenshot of the toolbar on the edit page of the wiki. The icon to add an image is outlined in dark orange.](/assets/images/help/wiki/wiki-add-image.png)

1. In the "Insert Image" dialog box, type the image URL and the alt text (which is used by search engines and screen readers).
1. Click **OK**.

### Linking to images in a repository

You can link to an image in a repository on {% data variables.product.product_name %} by copying the URL in your browser and using that as the path to the image. For example, embedding an image in your wiki using Markdown might look like this:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

## Adding mathematical expressions and diagrams

{% data reusables.getting-started.math-and-diagrams %}

## Supported MediaWiki formats

No matter which markup language your wiki page is written in, certain MediaWiki syntax will always be available to you.
* Links ([except AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
* Horizontal rules via `---`
* Shorthand symbol entities (such as `&delta;` or `&euro;`)

For security and performance reasons, some syntaxes are unsupported.
* [Transclusion](https://www.mediawiki.org/wiki/Transclusion)
* Definition lists
* Indentation
* Table of contents
