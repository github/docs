---
title: Eine Veröffentlichungsquelle für Deine GitHub Pages-Website konfigurieren
intro: 'Wenn Du die Standard-Veröffentlichungsquelle für Deine {% data variables.product.prodname_pages %}-Website verwendest, wird Deine Website automatisch veröffentlicht. You can also choose to publish your{% if currentVersion ver_lt "enterprise-server@2.22" %} project{% endif %} site from a different branch or folder.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Weitere Informationen zu Veröffentlichungsquellen finden Sie unter „[Informationen zu {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)“.

### Eine Veröffentlichungsquelle auswählen

Before you configure a publishing source, make sure the branch{% if currentVersion ver_lt "enterprise-server@2.22" %} or folder{% endif %} you want to use as your publishing source already exists in your repository.{% if currentVersion ver_lt "enterprise-server@2.22" %} For example, before you can publish your project site from the `/docs` folder on the `master` branch of your repository, you or a collaborator must create a `/docs` folder on the default `master` branch of your repository.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
3. Under "{% data variables.product.prodname_pages %}", use the **None** or **Branch** drop-down menu and select a publishing source. ![Drop-down menu to select a publishing source](/assets/images/help/pages/publishing-source-drop-down.png)
4. Optionally, use the drop-down menu to select a folder for your publishing source. ![Drop-down menu to select a folder for publishing source](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Klicke auf **Save** (Speichern). ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png)
  {% else %}
3. Wähle unter „{% data variables.product.prodname_pages %}“ im Dropdownmenü „**Source**“ (Quelle) eine Veröffentlichungsquelle aus. ![Dropdownmenü zum Auswählen einer Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### Fehler bei der Veröffentlichung Deiner {% data variables.product.prodname_pages %}-Website beheben

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}any{% else %}the `master`{% endif %} branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. Weitere Informationen findest Du unter „[Jekyll-Build-Fehler für {% data variables.product.prodname_pages %}-Websites beheben](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder).“
