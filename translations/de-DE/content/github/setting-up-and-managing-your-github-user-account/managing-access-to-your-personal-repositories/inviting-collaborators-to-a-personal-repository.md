---
title: Mitarbeiter zu einem persönlichen Repository einladen
intro: 'Du kannst {% if currentVersion == "free-pro-team@latest" %}Benutzer als Mitarbeiter zu Deinem persönlichen Repository einladen{% else %}Benutzer als Mitarbeiter zu Deinem persönlichen Repository hinzufügen{% endif %}.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator/
  - /articles/adding-collaborators-to-a-personal-repository/
  - /articles/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
  - Repositories
---
Repositorys, die einer Organisation gehören, können feiner abgestufte Zugriffsberechtigungen gewähren. Weitere Informationen findest Du unter „[Zugriffsberechtigungen auf {% data variables.product.product_name %}](/articles/access-permissions-on-github).“

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.org-invite-expiration %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Hinweis:** {% data variables.product.company_short %} beschränkt die Anzahl an Personen, die innerhalb von 24 Stunden zu einem Repository eingeladen werden können. Wenn Du diese Grenze überschreitest, musst Du entweder 24 Stunden warten oder eine Organisation erstellen, um mit mehr Benutzern zusammenzuarbeiten.

{% endnote %}

{% endif %}

1. Frage nach dem Benutzernamen der Person, die Du als Mitarbeiter einlädst.

{% if currentVersion == "free-pro-team@latest" %} Wenn die Person noch keinen Benutzernamen besitzt, kann sie sich für {% data variables.product.prodname_dotcom %} anmelden. Weitere Informationen findest Du unter „[Für ein neues {% data variables.product.prodname_dotcom %}-Konto anmelden](/articles/signing-up-for-a-new-github-account)“.{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
1. Klicke auf **Invite a collaborator** (Mitarbeiter einladen). ![Schaltfläche "Invite a collaborator" (Mitarbeiter einladen)](/assets/images/help/repository/invite-a-collaborator-button.png)
2. Beginne im Suchfeld den Namen der Person einzugeben, die Du einladen möchtest, dann klicke in der Liste der Übereinstimmungen auf einen Namen. ![Suchfeld für die Eingabe des Namens der Person, die Du zu einem Repository einladen willst](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Klicke auf **Add NAME to REPOSITORY** (füge NAME zum REPOSITORY hinzu). ![Schaltfläche, um Mitarbeiter hinzuzufügen](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. Klicke auf der linken Seitenleiste auf **Collaborators** (Mitarbeiter). ![Seitenleiste der Repository-Einstellungen, wobei „Collaborators“ (Mitarbeiter) hervorgehoben ist](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. Gib unter „Collaborators“ (Mitarbeiter) den Benutzernamen des Mitarbeiters ein.
7. Wähle den Benutzernamen des Mitarbeiters aus dem Dropdownmenü aus. ![Dropdownmenü „Collaborator list" (Liste der Mitarbeiter)](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Klicke auf **Add collaborator** (Mitarbeiter hinzufügen). ![Schaltfläche „Add“ (Hinzufügen)](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
9. Der Benutzer erhält per E-Mail eine Einladung zum Repository. Wenn er die Einladung annimmt, hat er Mitarbeiterzugriff auf Dein Repository.
{% endif %}

### Weiterführende Informationen

- „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account)“
- „[Mitarbeiter aus einem persönlichen Repository entfernen](/articles/removing-a-collaborator-from-a-personal-repository)“
- „[Dich selbst aus dem Repository eines Mitarbeiters entfernen](/articles/removing-yourself-from-a-collaborator-s-repository)“
- „[Mitglieder in Teams organisieren](/organizations/organizing-members-into-teams)“
