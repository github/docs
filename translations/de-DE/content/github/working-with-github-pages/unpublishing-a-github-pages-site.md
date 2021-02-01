---
title: Veröffentlichung einer GitHub Pages-Website zurückziehen
intro: 'You can unpublish your {% data variables.product.prodname_pages %} site so that the site is no longer available to {% if currentVersion == "free-pro-team@latest" %}the public{% else %}everyone using {% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Veröffentlichung einer Projektwebsite zurückziehen

{% data reusables.repositories.navigate-to-repo %}
2. Wenn das Repository einen Branch `gh-pages` enthält, lösche den Branch `gh-pages`. Weitere Informationen findest Du unter „[Branches in Deinem Repository erstellen und löschen](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch).“
3. Falls der Branch `gh-pages` als Veröffentlichungsquelle fungierte,
{% if currentVersion == "free-pro-team@latest" %}skip to step 6{% else %}your site is now unpublished and you can skip the remaining steps{% endif %}.
{% data reusables.repositories.sidebar-settings %}
5. Under "
{% data variables.product.prodname_pages %}", use the **Source** drop-down menu and select **None.**
  ![Dropdownmenü zum Auswählen einer Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

### Veröffentlichung einer Benutzer- oder Organisations-Website zurückziehen

{% data reusables.repositories.navigate-to-repo %}
2. Delete the branch that you're using as a publishing source, or delete the entire repository. Weitere Informationen findest Du unter „[Branches in Deinem Repository erstellen und löschen](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)“ und „[Repository löschen](/articles/deleting-a-repository).“
{% data reusables.pages.update_your_dns_settings %}
