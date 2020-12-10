---
title: Creating a footer or sidebar for your wiki
intro: You can add a custom sidebar or footer to your wiki to provide readers with more contextual information.
redirect_from:
  - /articles/creating-a-footer/
  - /articles/creating-a-sidebar/
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Creating a footer

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. At the bottom of the page, click **Add a custom footer**. ![Wiki add footer section](/assets/images/help/wiki/wiki_add_footer.png)
4. Use the text editor to type the content you want your footer to have. ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. Enter a commit message describing the footer you’re adding. ![Wiki commit message](/assets/images/help/wiki/wiki_commit_message.png)
6. To commit your changes to the wiki, click **Save Page**.

### Creating a sidebar

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Click **Add a custom sidebar**. ![Wiki add sidebar section](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Use the text editor to add your page's content. ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. Enter a commit message describing the sidebar you’re adding. ![Wiki commit message](/assets/images/help/wiki/wiki_commit_message.png)
6. To commit your changes to the wiki, click **Save Page**.

### Creating a footer or sidebar locally

If you create a file named `_Footer.<extension>` or `_Sidebar.<extension>`, we'll use them to populate the footer and sidebar of your wiki, respectively. Like every other wiki page, the extension you choose for these files determines how we render them.
