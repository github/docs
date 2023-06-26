---
title: Adding or editing wiki pages
intro: 'You can add and edit wiki pages directly on {% data variables.product.product_name %} or locally using the command line.'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface
  - /articles/editing-wiki-pages-via-the-online-interface
  - /articles/adding-and-editing-wik-pages-locally
  - /articles/adding-and-editing-wiki-pages-locally
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage wiki pages
---

## Adding wiki pages

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
1. In the upper-right corner of the page, click **New Page**.
1. Optionally, to write in a format other than Markdown, use the "Edit mode" dropdown to choose a different format.

   ![Screenshot of the "Create new page" page. The "Edit mode" dropdown is outlined in dark orange.](/assets/images/help/wiki/wiki-edit-mode-dropdown.png)

1. Use the text editor to add your page's content.
1. In the "Edit message" field, type a commit message describing the new file you’re adding.
1. To commit your changes to the wiki, click **Save Page**.

## Editing wiki pages

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
1. Using the wiki sidebar on the right, navigate to the page you want to change. In the upper-right corner of the page, click **Edit**.
1. Use the text editor to edit the page's content.
1. In the "Edit message" field, type a commit message describing the new file you’re adding.
1. To commit your changes to the wiki, click **Save Page**.

## Adding or editing wiki pages locally

Wikis are part of Git repositories, so you can make changes locally and push them to your repository using a Git workflow.

### Cloning wikis to your computer

Every wiki provides an easy way to clone its contents down to your computer.
Once you've created an initial page on {% data variables.product.product_name %}, you can clone the repository to your computer with the provided URL:

```shell
$ git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.wiki.git
# Clones the wiki locally
```

Once you have cloned the wiki, you can add new files, edit existing ones, and commit your changes. You and your collaborators can create branches when working on wikis, but only changes pushed to the default branch will be made live and available to your readers.

## About wiki filenames

The filename determines the title of your wiki page, and the file extension determines how your wiki content is rendered.

Wikis use [our open-source Markup library](https://github.com/github/markup) to convert the markup, and it determines which converter to use by a file's extension. For example, if you name a file _foo.md_ or _foo.markdown_, wiki will use the Markdown converter, while a file named _foo.textile_ will use the Textile converter.

Don't use the following characters in your wiki page's titles: `\ / : * ? " < > |`. Users on certain operating systems won't be able to work with filenames containing these characters. Be sure to write your content using a markup language that matches the extension, or your content won't render properly.
