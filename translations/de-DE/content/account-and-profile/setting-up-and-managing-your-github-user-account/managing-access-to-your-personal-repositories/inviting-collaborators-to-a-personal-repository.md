---
title: Mitarbeiter in ein persönliches Repository einladen
intro: You can {% ifversion fpt or ghec %}invite users to become{% else %}add users as{% endif %} collaborators to your personal repository.
redirect_from:
- /articles/how-do-i-add-a-collaborator
- /articles/adding-collaborators-to-a-personal-repository
- /articles/inviting-collaborators-to-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Invite collaborators
ms.openlocfilehash: 6db661abfc48b87ae7eae2c515be2e14e3717ec4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090097"
---
Repositorys, die einer Organisation gehören, können feiner abgestufte Zugriffsberechtigungen gewähren. Weitere Informationen findest Du unter [Zugriffsberechtigungen für {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github).

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt or ghec %}

Wenn Du Mitglied eines {% data variables.product.prodname_emu_enterprise %} bist, kannst Du nur andere Mitglieder Deines Unternehmens einladen, mit Dir zusammenzuarbeiten. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**Hinweis:** {% data variables.product.company_short %} begrenzt die Anzahl an Personen, die innerhalb von 24 Stunden zu einem Repository eingeladen werden können. Wenn Du diese Grenze überschreitest, musst Du entweder 24 Stunden warten oder eine Organisation erstellen, um mit mehr Benutzern zusammenzuarbeiten.

{% endnote %}

{% endif %}

1. Bringe den Benutzernamen der Person in Erfahrung, die Du als Mitarbeiter einladen möchtest.{% ifversion fpt or ghec %} Wenn diese Person noch keinen Benutzernamen hat, kann sie sich bei {% data variables.product.prodname_dotcom %} anmelden. Weitere Informationen findest Du unter "[Für ein neues {% data variables.product.prodname_dotcom %}-Konto anmelden](/articles/signing-up-for-a-new-github-account)".{% endif %}
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658%} {% data reusables.repositories.click-collaborators-teams %}
1. Klicke auf **Invite a collaborator** (Mitarbeiter einladen).
  ![Schaltfläche "Invite a collaborator" (Mitarbeiter einladen)](/assets/images/help/repository/invite-a-collaborator-button.png)
2. Beginne im Suchfeld den Namen der Person einzugeben, die Du einladen möchtest, dann klicke in der Liste der Übereinstimmungen auf einen Namen.
  ![Suchfeld für die Eingabe des Namens der Person, die Du zu einem Repository einladen willst](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Klicke auf **Add NAME to REPOSITORY** (NAME zum REPOSITORY hinzufügen).
    ![Schaltfläche zum Hinzufügen eines Mitarbeiters](/assets/images/help/repository/add-collaborator-user-repo.png) {% else %}
5. Klicke auf der linken Randleiste auf **Mitarbeiter**.
![Seitenleiste der Repository-Einstellungen, wobei „Collaborators“ (Mitarbeiter) hervorgehoben ist](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. Gib unter „Collaborators“ (Mitarbeiter) den Benutzernamen des Mitarbeiters ein.
7. Wähle den Benutzernamen des Mitarbeiters aus dem Dropdownmenü aus.
   ![Dropdownmenü "Collaborator list" (Liste der Mitarbeiter)](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Klicke auf **Add collaborator** (Mitarbeiter hinzufügen).
   ![Schaltfläche "Add collaborator" (Mitarbeiter hinzufügen)](/assets/images/help/repository/repo-settings-collab-add.png) {% endif %} {% ifversion fpt or ghec %}
9. Der Benutzer erhält per E-Mail eine Einladung zum Repository. Wenn er die Einladung annimmt, hat er Mitarbeiterzugriff auf Dein Repository.
{% endif %}

## <a name="further-reading"></a>Weiterführende Themen

- "[Berechtigungsebenen für ein Repository eines persönlichen Kontos](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)"
- "[Entfernen eines Mitarbeiters aus einem persönlichen Repository](/articles/removing-a-collaborator-from-a-personal-repository)"
- [Sich selbst aus dem Repository eines Projektmitarbeiters entfernen](/articles/removing-yourself-from-a-collaborator-s-repository)
- "[Organisieren von Mitgliedern in Teams](/organizations/organizing-members-into-teams)"
