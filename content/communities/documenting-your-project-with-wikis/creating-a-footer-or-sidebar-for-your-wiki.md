---
title: Creating a footer or sidebar for your wiki
intro: You can add a custom sidebar or footer to your wiki to provide readers with more contextual information.
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
---

## Creating a footer

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
1. At the bottom of the page, click **Add a custom footer**.
1. Use the text editor to type the content you want your footer to have.
1. In the "Edit message" field, enter a commit message describing the footer you’re adding.
1. To commit your changes to the wiki, click **Save Page**.

## Creating a sidebar

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
1. Click **Add a custom sidebar** on the right side of the page.
1. Use the text editor to add your page's content.
1. In the "Edit message" field, enter a commit message describing the sidebar you’re adding.
1. To commit your changes to the wiki, click **Save Page**.

## Creating a footer or sidebar locally

If you create a file named `_Footer.<extension>` or `_Sidebar.<extension>`, we'll use them to populate the footer and sidebar of your wiki, respectively. Like every other wiki page, the extension you choose for these files determines how we render them.
