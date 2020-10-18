---
title: Produkte von GitHub
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.prodname_dotcom %} bietet kostenlose und kostenpflichtige Produkte an. Die Preise und eine vollständige Liste der Features für jedes Produkt findest Du unter {% data variables.product.pricing_url %}. {% data reusables.products.product-roadmap %}

### {% data variables.product.prodname_free_user %} für Benutzerkonten

Mit {% data variables.product.prodname_free_team %} für Benutzerkonten kannst Du mit einer unbegrenzten Anzahl von Mitarbeitern an unbegrenzten öffentlichen Repositorys mit einem vollen Funktionsumfang arbeiten, und an unbegrenzten privaten Repositorys mit einem begrenzten Funktionsumfang.

Mit {% data variables.product.prodname_free_user %} umfasst Dein Benutzerkonto folgendes:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Erzwingung der Zwei-Faktor-Authentifizierung,
- 2.000 {% data variables.product.prodname_actions %}-Minuten
- 500 MB {% data variables.product.prodname_registry %}-Speicher

### {% data variables.product.prodname_pro %}

Zusätzlich zu den mit {% data variables.product.prodname_free_user %} verfügbaren Funktionen für Benutzerkonten enthält {% data variables.product.prodname_pro %} noch folgendes:
- {% data variables.contact.github_support %} via email
- 3.000 {% data variables.product.prodname_actions %}-Minuten
- 2 GB {% data variables.product.prodname_registry %}-Speicher
- Erweiterte Tools und Einblicke in private Repositorys:
  - Erforderliche Pull-Request-Reviewer
  - Mehrfache Pull-Request-Reviewer
  - Automatisch verknüpfte Referenzen
  - {% data variables.product.prodname_pages %}
  - Wikis
  - geschützte Branches
  - Codeinhaber
  - Repository-Insights-Diagramm: Pulse, Mitarbeiter, Traffic, Commits, Code-Verlauf, Netzwerk und Forks

### {% data variables.product.prodname_free_team %} für Organisationen

Mit {% data variables.product.prodname_free_team %} für und Organisationen kannst Du mit einer unbegrenzten Anzahl von Mitarbeitern an unbegrenzten öffentlichen Repositorys mit einem vollen Funktionsumfang arbeiten oder an unbegrenzten privaten Repositorys mit einem begrenzten Funktionsumfang.

Zusätzlich zu den mit {% data variables.product.prodname_free_user %} für Benutzerkonten verfügbaren Funktionen enthält {% data variables.product.prodname_free_team %} für Organisationen noch folgendes:
- {% data variables.product.prodname_gcf %}
- Teamdiskussionen,
- Team-Zugriffskontrollen für die Verwaltung von Gruppen
- 2.000 {% data variables.product.prodname_actions %}-Minuten
- 500 MB {% data variables.product.prodname_registry %}-Speicher

### {% data variables.product.prodname_team %}

Zusätzlich zu den mit {% data variables.product.prodname_free_team %} verfügbaren Funktionen für Organisationen enthält {% data variables.product.prodname_team %} noch folgendes:
- {% data variables.contact.github_support %} via email
- 3.000 {% data variables.product.prodname_actions %}-Minuten
- 2 GB {% data variables.product.prodname_registry %}-Speicher
- Erweiterte Tools und Einblicke in private Repositorys:
  - Erforderliche Pull-Request-Reviewer
  - Mehrfache Pull-Request-Reviewer
  - {% data variables.product.prodname_pages %}
  - Wikis
  - geschützte Branches
  - Codeinhaber
  - Repository-Insights-Diagramm: Pulse, Mitarbeiter, Traffic, Commits, Code-Verlauf, Netzwerk und Forks
  - Entwürfe für Pull Requests
  - Team-Pull-Request-Reviewer
  - Geplante Erinnerungen

{% data reusables.github-actions.actions-billing %}

### {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} bietet zwei Bereitstellungsoptionen: in der Cloud gehostet und selbst gehostet.

Zusätzlich zu den mit {% data variables.product.prodname_team %} verfügbaren Funktionen enthält {% data variables.product.prodname_enterprise %} noch folgendes:
- {% data variables.contact.enterprise_support %}
- zusätzliche Steuerungsoptionen für Sicherheit, Compliance und Bereitstellung
- Authentifizierung mit SAML Single Sign-On
- Zugriffsbereitstellung mit SAML oder SCIM
- {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_ghe_cloud %} umfasst außerdem
- {% data variables.contact.enterprise_support %}. Weitere Informationen findest Du unter „<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %}-Support</a>“ und „<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %}-Nachtrag</a>.“
- 50.000 {% data variables.product.prodname_actions %}-Minuten
- 50 GB {% data variables.product.prodname_registry %}-Speicher
- Ein Service Level Agreement über eine monatliche Verfügbarkeit von 99,95 %,
- Die Option, die Richtlinien und Abrechnungen für mehrere {% data variables.product.prodname_dotcom_the_website %}-Organisationen mit Enterprise-Konto zentral zu verwalten. Weitere Informationen findest Du unter "<a href="/articles/about-enterprise-accounts" class="dotcom-only">About enterprise accounts</a>" (Über Enterprise-Konten).

Du kannst eine Testversion einrichten, um {% data variables.product.prodname_ghe_cloud %} zu testen. Weitere Informationen findest Du unter „[Eine Testversion von {% data variables.product.prodname_ghe_cloud %} einrichten](/articles/setting-up-a-trial-of-github-enterprise-cloud).“

Um weitere Informationen über das Hosten Deiner eigenen [{% data variables.product.prodname_ghe_server %}](https://enterprise.github.com)-Instanz zu erhalten, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %}. {% data reusables.enterprise_installation.request-a-trial %}

### {% data variables.product.prodname_ghe_one %}

{% data variables.product.prodname_ghe_one %} enthält [{% data variables.product.prodname_enterprise %}](#github-enterprise) sowie:

- {% data variables.contact.github_support %} {% data variables.product.premium_plus_support_plan %}
- {% data variables.product.prodname_insights %}
- {% data variables.product.prodname_advanced_security %}{% if currentVersion == "free-pro-team@latest" %}. For more information, see "[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)" and "[About {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning) (beta)."{% endif %}{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}. For more information, see "[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning) (beta)."{% endif %}
- [{% data variables.product.prodname_learning %} für Organisationen](https://lab.github.com/organizations)

Weitere Informationen zur Anmeldung für {% data variables.product.prodname_ghe_one %} erhältst Du beim [{% data variables.product.product_name %}-Vertriebsteam](https://enterprise.github.com/contact).
