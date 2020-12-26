---
title: Interaktionen in Deinem Repository begrenzen
intro: 'You can temporarily enforce a period of limited activity for certain users on a public repository.'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
permissions: People with admin permissions to a repository can temporarily limit interactions in that repository.
---

### About temporary interaction limits

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} After the duration of your limit passes, users can resume normal activity in your repository.

{% data reusables.community.types-of-interaction-limits %}

You can also enable activity limitations on all repositories owned by your user account or an organization. If a user-wide or organization-wide limit is enabled, you can't limit activity for individual repositories owned by the account. For more information, see "[Limiting interactions for your user account](/github/building-a-strong-community/limiting-interactions-for-your-user-account)" and "[Limiting interactions in your organization](/github/building-a-strong-community/limiting-interactions-in-your-organization)."

### Interaktionen in Deinem Repository begrenzen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the left sidebar, click **Moderation settings**. !["Moderation settings" in repository settings sidebar](/assets/images/help/repository/repo-settings-moderation-settings.png)
1. Under "Moderation settings", click **Interaction limits**. ![Interaktionsbeschränkungen in den Repository-Einstellungen ](/assets/images/help/repository/repo-settings-interaction-limits.png)
{% data reusables.community.set-interaction-limit %}
  ![Optionen für die temporäre Interaktionsbeschränkung](/assets/images/help/repository/temporary-interaction-limits-options.png)

### Weiterführende Informationen
- „[Missbrauch oder Spam melden](/articles/reporting-abuse-or-spam)“
- „[Den Zugriff einer Person auf ein Repository einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-repository)“
- „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository)"
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
