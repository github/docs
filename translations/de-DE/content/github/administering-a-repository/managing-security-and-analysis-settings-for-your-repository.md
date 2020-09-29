---
title: Sicherheits- und Analyseeinstellungen für Dein Repository verwalten
intro: 'Du kannst Funktionen steuern, die Code in Deinem Projekt auf {% data variables.product.prodname_dotcom %} sichern und analysieren.'
permissions: Personen mit Administratorberechtigungen für ein Repository können Sicherheits- und Analyseeinstellungen für das Repository verwalten.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

### Sicherheits- und Analysefunktionen aktivieren oder deaktivieren

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Configure security and analysis features", to the right of the feature, click **Disable** or **Enable**. !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### Granting access to {% data variables.product.prodname_dependabot_alerts %}

After you enable {% data variables.product.prodname_dependabot_alerts %} for a repository in an organization, organization owners and repository administrators can view the alerts by default. You can give additional teams and people access to the alerts for a repository.

{% note %}

Organization owners and repository administrators can only grant access to view {% data variables.product.prodname_dependabot_alerts %} to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Dependabot alerts", in the search field, start typing the name of the person or team you'd like to find, then click a name in the list of matches. ![Search field for granting people or teams access to Dependabot alerts](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
5. Klicke auf **Save changes** (Änderungen speichern). !["Save changes" button for changes to Dependabot alert settings](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### Removing access to {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Dependabot alerts", to the right of the person or team whose access you'd like to remove, click {% octicon "x" aria-label="X symbol" %}. !["x" button to remove someone's access to Dependabot alerts for your repository](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)

### Weiterführende Informationen

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
