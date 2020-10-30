---
title: Warnungen für angreifbare Abhängigkeiten in Deiner Organisation verwalten
intro: 'Organization owners and repository admins receive {% data variables.product.prodname_dependabot_alerts %} when we detect a vulnerable dependency in an organization''''s repository. You can specify additional organization members or teams with write access to also receive alerts for vulnerable dependencies.'
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.you-can-manage-access-to-security-alerts %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. In the left sidebar, click **Dependabot alerts**. ![Dependabot alerts tab in the settings sidebar](/assets/images/help/settings/settings-sidebar-dependabot-alerts.png)
4. Type the name of the person or team you'd like to receive {% data variables.product.prodname_dependabot_alerts %} when {% data variables.product.product_name %} detects a vulnerable dependency, then click their username or team name to select it.
5. After you've selected all of the people or teams you'd like to receive {% data variables.product.prodname_dependabot_alerts %}, click **Save changes**.

### Weiterführende Informationen

- "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- „[Angreifbare Abhängigkeiten in Deinem Repository anzeigen und aktualisieren](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)“
- "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
