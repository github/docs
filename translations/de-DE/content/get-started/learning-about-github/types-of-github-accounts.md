---
title: Arten von GitHub-Konten
intro: 'Ihr Benutzerkonto ist Ihre Identität auf {% data variables.product.product_location %}. Dein Benutzerkonto kann Mitglied einer beliebigen Anzahl von Organisationen sein.{% ifversion fpt %} Organisationen können zu Enterprise-Konten gehören.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

{% ifversion fpt %}
Eine vollständige Liste der Funktionen für jedes {% data variables.product.product_name %}-Produkt findest Du auf „[{% data variables.product.prodname_dotcom %}-Produkte](/github/getting-started-with-github/githubs-products)."
{% endif %}

## Persönliche Benutzerkonten

Jede Person, die {% data variables.product.product_location %} benutzt, hat ihr eigenes Benutzerkonto, welches folgendes umfasst:

{% ifversion fpt %}

- Unbegrenzte Anzahl an öffentlichen und privaten Repositorys mit {% data variables.product.prodname_free_user %}
- Unbegrenzte Anzahl Mitarbeiter mit {% data variables.product.prodname_free_user %}
- Zusätzliche Funktionen für private Repositorys mit {% data variables.product.prodname_pro %}
- Möglichkeit, [Mitarbeiter zu einem Repository einzuladen](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- Unbegrenzte Anzahl an Repositorys und [Mitarbeitern](/articles/permission-levels-for-a-user-account-repository)
- Möglichkeit, [eine unbegrenzte Anzahl an Repository-Mitarbeitern einzuladen](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% ifversion fpt %}

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

{% ifversion fpt %}
### {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, instead of using your personal account, members of an {% data variables.product.prodname_emu_enterprise %} are provisioned accounts using the enterprise's identity provider (IdP). {% data variables.product.prodname_managed_users_caps %} authenticate using their IdP instead of a {% data variables.product.prodname_dotcom_the_website %} username and password.

{% data variables.product.prodname_managed_users_caps %} can only interact with users, repositories, and organizations that are part of their enterprise. {% data variables.product.prodname_managed_users_caps %} have read-only access to the rest of {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[About {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% endif %}

## Organisations-Konten

Organisationen sind gemeinsame Konten, in denen Personengruppen projektübergreifend zusammenarbeiten können. Inhaber und Administratoren können den Mitgliederzugriff auf Daten und Projekte der Organisation mit komplexen Sicherheits- und Administrationsfunktionen verwalten.

{% data reusables.organizations.organizations_include %}

{% ifversion fpt %}

## Enterprise-Konten

Mit Enterprise-Konten können Sie die Richtlinien und Abrechnungen mehrerer {% data variables.product.prodname_dotcom_the_website %}-Organisationen zentral verwalten. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## Weiterführende Informationen

{% ifversion fpt %}- „[Für ein neues {% data variables.product.prodname_dotcom %}-Konto anmelden](/articles/signing-up-for-a-new-github-account)“
- „[Produkte von {% data variables.product.prodname_dotcom %}](/articles/githubs-products)"{% endif %}
- „[Neues Organisationskonto erstellen](/articles/creating-a-new-organization-account)“
