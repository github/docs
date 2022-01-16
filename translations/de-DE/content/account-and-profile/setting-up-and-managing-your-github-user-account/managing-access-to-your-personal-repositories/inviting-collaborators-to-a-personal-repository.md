---
title: Mitarbeiter zu einem persönlichen Repository einladen
intro: 'Du kannst {% ifversion fpt %}Benutzer als Mitarbeiter zu Deinem persönlichen Repository einladen{% else %}Benutzer als Mitarbeiter zu Deinem persönlichen Repository hinzufügen{% endif %}.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator/
  - /articles/adding-collaborators-to-a-personal-repository/
  - /articles/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Invite collaborators
---

Repositorys, die einer Organisation gehören, können feiner abgestufte Zugriffsberechtigungen gewähren. Weitere Informationen findest Du unter „[Zugriffsberechtigungen auf {% data variables.product.product_name %}](/articles/access-permissions-on-github).“

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt %}

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you can only invite other members of your enterprise to collaborate with you. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**Hinweis:** {% data variables.product.company_short %} beschränkt die Anzahl an Personen, die innerhalb von 24 Stunden zu einem Repository eingeladen werden können. Wenn Du diese Grenze überschreitest, musst Du entweder 24 Stunden warten oder eine Organisation erstellen, um mit mehr Benutzern zusammenzuarbeiten.

{% endnote %}

{% endif %}

1. Bringen Sie den Benutzernamen der Person in Erfahrung, die Sie als Mitarbeiter einladen möchten.{% ifversion fpt %} Wenn diese Person noch keinen Benutzernamen hat, kann sie sich bei {% data variables.product.prodname_dotcom %} anmelden. Weitere Informationen finden Sie unter „[Für ein neues {% data variables.product.prodname_dotcom %}-Konto anmelden](/articles/signing-up-for-a-new-github-account)“.{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt %}
{% data reusables.repositories.navigate-to-manage-access %}
1. Klicke auf **Invite a collaborator** (Mitarbeiter einladen). ![Schaltfläche "Invite a collaborator" (Mitarbeiter einladen)](/assets/images/help/repository/invite-a-collaborator-button.png)
2. Beginne im Suchfeld den Namen der Person einzugeben, die Du einladen möchtest, dann klicke in der Liste der Übereinstimmungen auf einen Namen. ![Suchfeld für die Eingabe des Namens der Person, die Du zu einem Repository einladen willst](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Klicke auf **Add NAME to REPOSITORY** (füge NAME zum REPOSITORY hinzu). ![Schaltfläche, um Mitarbeiter hinzuzufügen](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. Klicke auf der linken Seitenleiste auf **Collaborators** (Mitarbeiter). ![Seitenleiste der Repository-Einstellungen, wobei „Collaborators“ (Mitarbeiter) hervorgehoben ist](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. Gib unter „Collaborators“ (Mitarbeiter) den Benutzernamen des Mitarbeiters ein.
7. Wähle den Benutzernamen des Mitarbeiters aus dem Dropdownmenü aus. ![Dropdownmenü „Collaborator list" (Liste der Mitarbeiter)](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Klicke auf **Add collaborator** (Mitarbeiter hinzufügen). !["Add collaborator" button](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% ifversion fpt %}
9. Der Benutzer erhält per E-Mail eine Einladung zum Repository. Wenn er die Einladung annimmt, hat er Mitarbeiterzugriff auf Dein Repository.
{% endif %}

## Weiterführende Informationen

- „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account)“
- „[Mitarbeiter aus einem persönlichen Repository entfernen](/articles/removing-a-collaborator-from-a-personal-repository)“
- „[Dich selbst aus dem Repository eines Mitarbeiters entfernen](/articles/removing-yourself-from-a-collaborator-s-repository)“
- „[Mitglieder in Teams organisieren](/organizations/organizing-members-into-teams)“
