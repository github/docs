---
title: Automatische Links von externen Ressourcen konfigurieren
intro: Du kannst automatische Links von externen Ressourcen, wie JIRA-Issues oder Zendesk-Tickets, hinzufügen, um Deinen Workflow zu optimieren.
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

Anyone with admin permissions to a repository can configure autolink references to link issues, pull requests,{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %} commit messages, and release descriptions{% else %} and commit messages{% endif %} to external third-party services.

Wenn Du Zendesk verwendest, um beispielsweise Tickets von Benutzern nachzuverfolgen, kannst Du in dem Pull Request, den Du zur Fehlerbehebung öffnest, auf eine Ticketnummer verweisen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke auf der linken Seitenleiste auf „**Autolink references**“ (Automatisch verknüpfte Verweise). ![Registerkarte „Autolink references“ (Automatisch verknüpfte Verweise) in der linken Seitenleiste](/assets/images/help/repository/autolink-references-tab.png)
4. Klicke auf „**Add autolink reference**“ (Automatisch verknüpften Verweis hinzufügen). ![Schaltfläche, um Informationen zu automatisch verknüpften Verweisen einzugeben](/assets/images/help/repository/add-autolink-reference-details.png)
5. Gib unter „Reference prefix“ (Verweis-Präfix) ein kurzes, aussagekräftiges Präfix ein, das Mitarbeiter verwenden sollen, um automatische Links der externen Ressource zu erzeugen. ![Feld zum Eingeben der Abkürzung für das externe System](/assets/images/help/repository/add-reference-prefix-field.png)
6. Gib unter „Target URL“ (Ziel-URL) den Link zum gewünschten externen System ein. Stelle sicher, dass Du `<num>` als Variable für die Verweisnummer beibehältst. ![Feld zum Eingeben der URL des externen Systems](/assets/images/help/repository/add-target-url-field.png)
7. Klicke auf „**Add autolink reference**“ (Automatisch verknüpften Verweis hinzufügen). ![Schaltfläche zum Hinzufügen des automatisch verknüpften Verweises](/assets/images/help/repository/add-autolink-reference.png)
