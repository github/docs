---
title: Arten von GitHub-Konten
intro: 'Ihr Benutzerkonto ist Ihre Identität auf {% data variables.product.product_location %}. Dein Benutzerkonto kann Mitglied einer beliebigen Anzahl von Organisationen sein.{% if currentVersion == "free-pro-team@latest" %} Organisationen können zu Enterprise-Konten gehören.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

{% if currentVersion == "free-pro-team@latest" %}
Eine vollständige Liste der Funktionen für jedes {% data variables.product.product_name %}-Produkt findest Du auf „[{% data variables.product.prodname_dotcom %}-Produkte](/github/getting-started-with-github/githubs-products)."
{% endif %}

### Persönliche Benutzerkonten

Jede Person, die {% data variables.product.product_location %} benutzt, hat ihr eigenes Benutzerkonto, welches folgendes umfasst:

{% if currentVersion == "free-pro-team@latest" %}

- Unbegrenzte Anzahl an öffentlichen und privaten Repositorys mit {% data variables.product.prodname_free_user %}
- Unbegrenzte Anzahl Mitarbeiter mit {% data variables.product.prodname_free_user %}
- Zusätzliche Funktionen für private Repositorys mit {% data variables.product.prodname_pro %}
- Möglichkeit, [Mitarbeiter zu einem Repository einzuladen](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- Unbegrenzte Anzahl an Repositorys und [Mitarbeitern](/articles/permission-levels-for-a-user-account-repository)
- Möglichkeit, [eine unbegrenzte Anzahl an Repository-Mitarbeitern einzuladen](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tips**:

- Du kannst ein Konto für mehrere Zwecke verwenden, beispielsweise für den persönlichen Gebrauch und für das Geschäft. Wir empfehlen, nicht mehr als ein Konto zu erstellen. Weitere Informationen findest Du unter „[Mehrere Benutzerkonten zusammenführen](/articles/merging-multiple-user-accounts).“
- Benutzerkonten sind an sich für Menschen vorgesehen. Bei Bedarf kannst Du aber auch ein Benutzerkonto für einen Roboter erstellen, beispielsweise für einen Continuous Integration (CI)-Bot.

{% endtip %}

{% else %}

{% tip %}

**Tipp**: Benutzkonten sind an sich für Menschen vorgesehen. Bei Bedarf können Sie aber auch ein Benutzerkonto für einen Roboter erstellen, beispielsweise für einen Continuous Integration (CI)-Bot.

{% endtip %}

{% endif %}

### Organisations-Konten

Organisationen sind gemeinsame Konten, in denen Personengruppen projektübergreifend zusammenarbeiten können. Inhaber und Administratoren können den Mitgliederzugriff auf Daten und Projekte der Organisation mit komplexen Sicherheits- und Administrationsfunktionen verwalten.

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}

### Enterprise-Konten

Mit Enterprise-Konten können Sie die Richtlinien und Abrechnungen mehrerer {% data variables.product.prodname_dotcom_the_website %}-Organisationen zentral verwalten. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Weiterführende Informationen

{% if currentVersion == "free-pro-team@latest" %}- „[Für ein neues {% data variables.product.prodname_dotcom %}-Konto anmelden](/articles/signing-up-for-a-new-github-account)“
- „[Produkte von {% data variables.product.prodname_dotcom %}](/articles/githubs-products)"{% endif %}
- „[Neues Organisationskonto erstellen](/articles/creating-a-new-organization-account)“
