---
title: Zugriffsberechtigungen auf GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
intro: 'Während Du Mitarbeitern in einem persönlichen Repository Lese-/Schreibzugriff gewähren kannst, können Mitglieder einer Organisation feiner abgestufte Zugriffsberechtigungen für die Repositorys der Organisation haben.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Permissions
  - Accounts
---

### Persönliche Benutzerkonten

Ein Repository, das einem Benutzerkonto gehört, hat zwei Berechtigungsebenen: den *Repository-Inhaber* und *Mitarbeiter*. Weitere Informationen findest Du unter „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository)."

### Organisations-Konten

Organization members can have *owner*{% if currentVersion == "free-pro-team@latest" %}, *billing manager*,{% endif %} or *member* roles. Owners have complete administrative access to your organization{% if currentVersion == "free-pro-team@latest" %}, while billing managers can manage billing settings{% endif %}. Die Standardrolle für alle übrigen Personen lautet „Mitglied“. Du kannst die Zugriffsberechtigungen für mehrere Mitglieder gleichzeitig in Teams verwalten. Weitere Informationen findest Du unter:
- „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)"
- „[Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)“
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
- „[Informationen zu Teams](/articles/about-teams)“

{% if currentVersion == "free-pro-team@latest" %}

### Enterprise-Konten

*Enterprise-Inhaber* haben die endgültige Kontrolle über das Enterprise-Konto und können sämtliche Aktionen im Enterprise-Konto durchführen. *Abrechnungsmanager* können die Abrechnungseinstellungen Deines Enterprise-Kontos verwalten. Mitglieder und externe Mitarbeiter von Organisationen im Besitz Deines Enterprise-Kontos sind automatisch Mitglieder des Enterprise-Kontos, aber sie haben keinen Zugriff auf das Enterprise-Konto selbst oder dessen Einstellungen. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)."

{% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Weiterführende Informationen

- „[Arten von {% data variables.product.prodname_dotcom %}-Konten](/articles/types-of-github-accounts)“
