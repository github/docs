---
title: Personen mit Zugriff auf Dein Repository anzeigen
intro: 'Organisationsinhaber können den Zugriff von Personen auf ein Repository innerhalb einer Organisation anzeigen. Organisationsinhaber mit {% data variables.product.prodname_ghe_cloud %} oder {% data variables.product.prodname_ghe_server %} können zudem eine CSV-Liste der Personen exportieren, die auf ein Repository zugreifen können.'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Anhand dieser Informationen können Administratoren außenstehende Personen unterstützen, Daten für Compliance-Zwecke erfassen und andere allgemeine Sicherheitsüberprüfungen durchführen.

![Liste mit Berechtigungen für Personen im Repository](/assets/images/help/repository/repository-permissions-list.png)

### Personen mit Zugriff auf Dein Repository anzeigen

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Hinweis**: Du kannst auch eine kombinierte Übersicht über Teams und Personen mit Zugriff auf Dein Repository sehen. Weitere Informationen findest Du unter „[Teams und Personen mit Zugriff auf Dein Repository verwalten](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)."

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}

### Liste der Personen mit Zugriff auf Dein Repository exportieren

Organisationsinhaber auf {% data variables.product.prodname_ghe_cloud %} oder {% data variables.product.prodname_ghe_server %} können eine CSV-Liste der Personen exportieren, die auf ein Repository zugreifen können.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. Klicke auf **Export CSV** (CSV exportieren). ![Registerkarte „People“ (Personen) auf der Repository-Seitenleiste](/assets/images/help/repository/export-repository-permissions.png)
