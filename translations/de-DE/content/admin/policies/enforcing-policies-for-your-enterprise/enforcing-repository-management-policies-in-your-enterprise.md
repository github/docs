---
title: Erzwingen von Repositoryverwaltungsrichtlinien in einem Unternehmen
intro: Du kannst Richtlinien für die Repositoryverwaltung in den Organisationen deines Unternehmens erzwingen oder Richtlinien in jeder Organisation festlegen lassen.
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Repository management policies
ms.openlocfilehash: 4abffb820c09b8d5896598fa1d233143e3872955
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147683711'
---
## Informationen zu Richtlinien für die Repositoryverwaltung in einem Unternehmen

Du kannst Richtlinien erzwingen, mit denen festgelegt wird, wie Mitglieder deines Unternehmens auf {% data variables.product.product_name %} Repositorys verwalten. Du kannst auch Organisationsbesitzer*innen erlauben, Richtlinien für die Repositoryverwaltung zu verwalten. Weitere Informationen findest du unter [Erstellen und Verwalten von Repositorys](/repositories/creating-and-managing-repositories) und [Organisationen und Teams](/organizations).

{% ifversion ghes or ghae %}

## Konfigurieren der Standardsichtbarkeit neuer Repositorys

Jedes Mal, wenn ein neues Repository in deinem Unternehmen erstellt wird, muss für das Repository eine Sichtbarkeit ausgewählt werden. Beim Konfigurieren einer Standardsichtbarkeitseinstellung für das Unternehmen gibst du an, welche Sichtbarkeit standardmäßig ausgewählt wird. Weitere Informationen zur Sichtbarkeit von Repositorys findest du unter [Informationen zu Repository](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

Wenn ein Unternehmensbesitzer Mitgliedern das Erstellen bestimmter Repositorytypen verwehrt, können Mitglieder kein Repository dieses Typs erstellen, auch dann nicht, wenn die Sichtbarkeitseinstellung diesen Typ als Standard vorgibt. Weitere Informationen findest du unter [Festlegen einer Richtlinie für die Repositoryerstellung](#setting-a-policy-for-repository-creation).

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. Verwende unter „Default repository visibility“ (Standardmäßige Sichtbarkeit für Repositorys) das Dropdown-Menü und wähle eine Standardsichtbarkeit.
  ![Dropdownmenü zum Auswählen der standardmäßige Sichtbarkeit von Repositorys für ein Unternehmen](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Erzwingen einer Richtlinie für Basisrepositoryberechtigungen

Für alle Organisationen im Besitz deines Unternehmens kannst du eine Basisrepository-Berechtigungsebene (keine, Lese-, Schreib- oder Administratorberechtigungen) für Organisationsmitglieder festlegen oder Besitzern die Verwaltung dieser Einstellung auf Organisationsebene gestatten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
4. Überprüfe unter „Basisberechtigungen“ die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle im Dropdownmenü unter „Basisberechtigungen“ eine Richtlinie aus.
  ![Dropdownmenü mit den Richtlinienoptionen für Repositoryberechtigungen](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)


## Erzwingen einer Richtlinie für die Repositoryerstellung

Du kannst in allen Organisationen, die deinem Unternehmen gehören, Mitgliedern das Erstellen von Repositorys erlauben, die Repositoryerstellung auf Organisationsbesitzer*innen beschränken oder Besitzer*innen die Verwaltung der Einstellung auf Organisationsebene erlauben. 

Wenn du Mitgliedern das Erstellen von Repositorys in deinen Organisationen gestattest, kannst du auswählen, welche Repositorytypen (öffentlich, privat und intern) von Mitgliedern erstellt werden können.

{% ifversion enterprise-namespace-repo-setting %} {% ifversion ghec %} Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, kannst du{% else %}Du kannst{% endif %} auch verhindern, dass Benutzer Repositorys erstellen, die sich im Besitz ihrer Benutzerkonten befinden.
{% endif %}

{% data reusables.repositories.internal-repo-default %} Weitere Informationen zu internen Repositorys findest du unter [Erstellen eines internen Repositorys](/articles/creating-an-internal-repository).

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfe unter „Repository creation“ (Repository-Erstellung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %} {% data reusables.enterprise-accounts.repo-creation-policy %} {% data reusables.enterprise-accounts.repo-creation-types %}{% ifversion enterprise-namespace-repo-setting %}
1. Um zu verhindern, dass Unternehmensmitglieder Repositorys erstellen, die im Besitz ihrer Benutzerkonten sind, wähle optional **die Erstellung von Benutzernamespace-Repositorys blockieren** aus.{% ifversion ghec %} Hierzu muss {% data variables.product.prodname_emus %} in deinem Unternehmen verwendet werden.{% endif %}
  ![Screenshot: Liste der deaktivierten Optionen aus der Forkrichtlinie](/assets/images/help/business-accounts/restrict-personal-namespace-enabled-setting.png){% endif %}

## Erzwingen einer Richtlinie zum Forken von privaten oder internen Repositorys

Du kannst in allen Organisationen, die deinem Unternehmen gehören, Personen mit Zugriff auf ein privates oder internes Repository erlauben, das Repository zu forken, das Forken privater oder interner Repositorys generell untersagen oder Besitzer*innen die Verwaltung der Einstellung auf Organisationsebene erlauben.

{% ifversion enterprise-namespace-repo-setting %} {% note %}

**Hinweis**: Wenn {% ifversion ghec %}dein Unternehmen {% data variables.product.prodname_emus %} verwendet und {% endif %}deine Richtlinie „Repositoryerstellung“ verhindert, dass Unternehmensmitglieder Repositorys im Besitz ihrer Benutzerkonten erstellen, dürfen Mitglieder unabhängig von deiner Richtlinie zum Forken von Repositorys kein Repository in ihren Benutzerkonten forken.

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. Informationen zum Ändern der Einstellung findest du unter „Repository forking“ (Repository-Forking). {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wähle im Dropdownmenü unter „Repository forking“ (Repository-Forking) eine Richtlinie aus.

  ![Dropdownmenü mit Richtlinienoptionen für das Repository-Forking](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png){% ifversion innersource-fork-policies %}
5. Wenn Forking aktiviert ist, kannst du angeben, wo Benutzer*innen Repositorys forken dürfen. Überprüfe die Informationen zum Ändern der Einstellung, und wähle eine Richtlinie aus.

    ![Screenshot: Liste der Richtlinienoptionen für das Forken von Repositorys](/assets/images/help/business-accounts/repository-forking-policy-settings.png){% endif %}
  
## Erzwingen einer Richtlinie zum Einladen von {% ifversion ghec %}externen{% endif %} Projektmitarbeiter*innen zu Repositorys

In allen Organisationen im Besitz deines Unternehmen kannst du Mitgliedern erlauben, {% ifversion ghec %}externe{% endif %} Projektmitarbeiter*innen zu Repositorys einzuladen, und {% ifversion ghec %}Einladungen externer Projektmitarbeiter*innen {% endif %} auf Organisationsbesitzer*innen beschränken, {% ifversion prevent-org-admin-add-outside-collaborator %}Einladungen {% ifversion ghec %}externer Projektmitarbeiter*innen {% endif %}auf Unternehmensbesitzer*innen beschränken {% endif %}oder Organisationsbesitzer*innen erlauben, die Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. Informationen zum Ändern der Einstellung findest du unter „{% ifversion ghec %}Externe Projektmitarbeiter*innen für{% elsif ghes or ghae %}Einladungen zu{% endif %} Repositorys“. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wähle unter „{% ifversion ghec %}Externe Projektmitarbeiter*innen für{% elsif ghes or ghae %}Einladungen zu{% endif %} Repositorys“ eine Richtlinie aus.

  {% ifversion ghec %} ![Dropdownmenü mit Richtlinienoptionen für die Einladung externer Projektmitarbeiter*innen](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png) {% elsif ghes or ghae %} ![Dropdownmenü mit Richtlinienoptionen für Einladungen](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)  
  {% endif %}

## Erzwingen einer Richtlinie für den Standardbranchnamen

Du kannst in allen Organisationen, die deinem Unternehmen gehören, für alle neuen Repositorys, die von Mitgliedern erstellt werden, den Standardbranchnamen festlegen. Du kannst erzwingen, dass dieser Standardbranchname in allen Organisationen verwendet wird, oder zulassen, dass in einzelnen Organisationen ein anderer Branchname festgelegt wird.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. Gib auf der Registerkarte **Repository policies** (Repositoryrichtlinien) unter „Default branch name“ (Standardbranchname) den Standardbranchnamen ein, der für neue Repositorys verwendet werden soll.
    ![Textfeld zum Eingeben des Standardbranchnamens](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Wenn du erzwingen möchtest, dass der Standardbranchname für alle Organisationen im Unternehmen verwendet wird, wähle **Enforce across this enterprise** (In diesem Unternehmen erzwingen) aus.
    ![Kontrollkästchen zum Erzwingen](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Klicken Sie auf **Aktualisieren**.
    ![Schaltfläche „Aktualisieren“](/assets/images/help/business-accounts/default-branch-name-update.png)

## Erzwingen einer Richtlinie für Änderungen an der Sichtbarkeit eines Repositorys

Du kannst in allen Organisationen, die deinem Unternehmen gehören, Mitgliedern mit Administratorzugriff das Ändern der Sichtbarkeit eines Repositorys erlauben, Änderungen an der Sichtbarkeit von Repositorys auf Organisationsbesitzer*innen beschränken oder allen Besitzer*innen die Verwaltung der Einstellung auf Organisationsebene erlauben. Wenn du verhinderst, dass Mitglieder die Sichtbarkeit eines Repositorys ändern, ist es nur Unternehmensbesitzer*innen möglich, die Sichtbarkeit eines Repositorys zu ändern.

Wenn ein Unternehmensbesitzer die Repositoryerstellung ausschließlich auf Organisationsbesitzer beschränkt hat, kann die Sichtbarkeit von Repositorys von Mitgliedern nicht geändert werden. Wenn ein Unternehmensbesitzer die Erstellung von Repositorys durch Mitglieder ausschließlich auf private Repositorys beschränkt hat, können Mitglieder die Sichtbarkeit eines Repositorys nur in „privat“ ändern. Weitere Informationen findest du unter [Festlegen einer Richtlinie für die Repositoryerstellung](#setting-a-policy-for-repository-creation).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. Überprüfe unter „Repository visibility change“ (Änderung der Repository-Sichtbarkeit) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Wähle im Dropdownmenü unter „Repository visibility change“ (Änderung der Repository-Sichtbarkeit) eine Richtlinie aus.
   ![Dropdownmenü mit den Richtlinienoptionen für die Repositorysichtbarkeit](/assets/images/help/business-accounts/repository-visibility-policy-drop-down.png)

## Erzwingen einer Richtlinie zum Löschen und Übertragen von Repositorys

Du kannst in allen Organisationen, die deinem Unternehmen gehören, Mitgliedern mit Administratorberechtigungen das Löschen oder Übertragen eines Repositorys erlauben, das Löschen und Übertragen von Repositorys auf Organisationsbesitzer*innen beschränken oder Besitzer*innen die Verwaltung der Einstellung auf Organisationsebene erlauben.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfe unter „Repository deletion and transfer“ (Repository-Löschung und -Übertragung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Erzwingen einer Richtlinie zum Löschen von Issues

Du kannst in allen Organisationen, die deinem Unternehmen gehören, Mitgliedern mit Administratorzugriff das Löschen von Issues erlauben, das Löschen von Issues auf Organisationsbesitzer*innen beschränken Besitzer*innen die Verwaltung der Einstellung auf Organisationsebene erlauben.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. Informationen zum Ändern der Einstellung findest du auf der Registerkarte **Repository policies** (Repositoryrichtlinien) unter „Repository issue deletion“ (Löschen von Repository-Issues). {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wähle im Dropdownmenü unter „Repository issue deletion“ (Löschen von Repository-Issues) eine Richtlinie aus.

  ![Dropdownmenü mit Richtlinienoptionen zum Löschen von Issues](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Erzwingen einer Richtlinie für Git-Pushlimits

Wenn du die Größe eines Repositorys verwaltbar halten und Leistungsprobleme vermeiden möchtest, kannst du für Repositorys in deinem Unternehmen eine Dateigrößenbeschränkung konfigurieren.

Wenn du Repository-Uploadlimits erzwingst, können Benutzer*innen standardmäßig keine Dateien hinzufügen oder aktualisieren, die größer als 100 MB sind.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Verwende unter „Repository upload limit“ (Upload-Begrenzung für Repository) das Dropdownmenü, und klicke auf eine maximale Objektgröße.
![Dropdownmenü mit Optionen für eine maximale Objektgröße](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Wenn du für alle Repositorys in deinem Unternehmen ein Uploadlimit festlegen möchtest, wähle **Enforce on all repositories** (In allen Repositorys erzwingen) 
![Option zur zwangsweisen Begrenzung der Objektgröße für alle Repositorys](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png) aus.

{% ifversion profile-name-enterprise-setting %}

## Erzwingen einer Richtlinie für die Anzeige von Membernamen in deinen Repositorys

In allen Organisationen, die deinem Unternehmen gehören, kannst du in Issues und Pull Requests von öffentlichen und internen Repositorys einstellen, dass Mitglieder neben dem Benutzernamen auch den Profilnamen von Kommentarautor*innen sehen können.

![Im Kommentar angezeigter Profilname des Verfassers](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**Hinweis:** Wenn diese Richtlinie für alle Repositorys im Unternehmen erzwungen wird, wird die Organisationseinstellung für private Repositorys außer Kraft gesetzt. Weitere Informationen findest du unter [Verwalten der Anzeige von Mitgliedsnamen in deiner Organisation](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization).

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Aktiviere „Mitglieder dürfen den Profilnamen von Kommentarautoren in öffentlichen und internen Repositorys anzeigen“, öffne das Dropdownmenü, und klicke auf eine Richtlinie.
![Screenshot der Seite „Optionen“ mit hervorgehobener Dropdownliste „Richtlinien“](/assets/images/enterprise/site-admin-settings/comment-authors-profile-name-drop-down.png)
5. Wenn du optional die Anzeige von Profilnamen für alle Repositorys in deinem Unternehmen erzwingen möchtest, wähle **Für alle Repositorys in der Instanz erzwingen** aus.
![Screenshot der hervorgehobenen Option „Für alle Repositorys in der Instanz erzwingen“](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## Konfigurieren des Editors für Mergekonflikte für Pull Requests zwischen Repositorys

Indem du festlegst, dass Benutzer Mergekonflikte lokal auf ihren Computern auflösen müssen, kannst du verhindern, dass sie über ein Fork versehentlich in ein vorgelagertes Repository schreiben.

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. Klicke unter „Conflict editor for pull requests between repositories“ (Editor für Mergekonflikte für Pull Requests zwischen Repositorys) im Dropdownmenü auf **Disabled** (Deaktiviert).
 ![Dropdownmenü mit der Option zum Deaktivieren des Editors für Mergekonflikte](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Konfigurieren von erzwungenen Pushs

Alle Repositorys erben eine Standardeinstellung für erzwungene Pushs von den Einstellungen des Benutzerkontos oder der Organisation, der das Repository gehört. Alle Organisationen und Benutzerkonten erben eine Standardeinstellung für erzwungene Pushs von der Einstellung für erzwungene Pushs für das Unternehmen. Wenn du die Einstellung für erzwungene Pushs für das Unternehmen änderst, wird die Richtlinie auf alle Repositorys angewendet, die einem Benutzer oder einer Organisation gehören.

### Blockieren von erzwungenen Pushs an alle Repositorys

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. Klicke im Dropdownmenü unter „Force pushes“ (Pushs erzwingen) auf **Allow** (Erlauben), **Block** (Blockieren) oder **Block to the default branch** (Pushs an den Standardbranch blockieren).
![Dropdownmenü „Force pushes“ (Erzwungene Pushs)](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Wähle optional **Enforce on all repositories** (In allen Repositorys erzwingen) aus. Damit werden Einstellungen für erzwungene Pushs auf Organisations- und Repositoryebene außer Kraft gesetzt.

### Blockieren von Pushs an ein bestimmtes Repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Wähle unter **Push and Pull** (Push und Pull) **Block** (Blockieren) oder **Block to the default branch** (Pushs an den Standardbranch blockieren) aus.
   ![Erzwungene Pushs blockieren](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Erzwungene Push-Vorgänge an Repositorys blockieren, die einem Benutzerkonto oder einer Organisation gehören

Repositorys übernehmen die Einstellungen für erzwungene Push-Vorgänge vom Benutzerkonto oder von der Organisation, zu dem bzw. zu der sie gehören. Benutzerkonten und Organisationen erben wiederum die Einstellungen für erzwungene Pushs von den Einstellungen für erzwungene Pushs für das Unternehmen.

Du kannst die standardmäßig übernommenen Einstellungen überschreiben, indem du die Einstellungen für ein Benutzerkonto oder für eine Organisation konfigurierst.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Wähle unter „Repository default settings“ (Repository-Standardeinstellungen) im Abschnitt in the „Force pushes“ (Erzwungene Push-Vorgänge) Folgendes aus:
    - **Block** (Blockieren), um erzwungene Pushs an alle Branches zu blockieren.
    - **Block to the default branch** (Pushs an den Standardbranch blockieren), um nur erzwungene Pushs an den Standardbranch zu blockieren.
  ![Erzwungene Pushs blockieren](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Wähle optional **Enforce on all repositories** (In allen Repositorys erzwingen) aus, um repositoryspezifische Einstellungen außer Kraft zu setzen. Damit werden unternehmensweite Richtlinien jedoch **nicht** außer Kraft gesetzt.
   ![Erzwungene Pushs blockieren](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Konfigurieren des anonymen Git-Lesezugriffs

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Wenn der [private Modus](/enterprise/admin/configuration/enabling-private-mode) {% data variables.product.product_location %} aktiviert ist, kannst du festlegen, dass Repositoryadministrator*innen den anonymen Git-Lesezugriff für öffentliche Repositorys aktivieren können.

Durch Aktivieren des anonymen Git-Lesezugriffs können Benutzer*innen die Authentifizierung für benutzerdefinierte Tools in deinem Unternehmen umgehen. Wenn du (oder ein Repositoryadministrator) diese Zugriffseinstellung für ein Repository änderst, haben nicht authentifizierte Git-Vorgänge (und alle Personen mit Netzwerkzugriff auf {% data variables.product.product_name %}) ohne Authentifizierung Lesezugriff auf das Repository.

Der anonyme Git-Lesezugriff ist standardmäßig deaktiviert.{% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 or ghes = 3.7 %} Wenn du ein Upgrade auf {% data variables.product.product_name %} 3.6 oder höher durchführst, wird der anonyme Git-Lesezugriff automatisch auf Anwendungsebene deaktiviert, und `git://`-Verbindungen auf Port 9418 geben den folgenden Fehler zurück.

```
The unauthenticated git protocol on port 9418 is no longer supported.
```

Wenn du das unauthentifizierte Git-Protokoll in deiner Umgebung unterstützen möchtest, musst du das Feature manuell reaktivieren. {% data variables.product.company_short %} empfiehlt, SSH anstelle des Git-Protokolls zu verwenden. Weitere Informationen findest du unter [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% endif %}



Bei Bedarf kannst du verhindern, dass Repositoryadministratoren anonyme Git-Zugriffseinstellungen für Repositorys in deinem Unternehmen ändern, indem du die Zugriffseinstellungen des Repositorys sperrst. Nachdem du die Einstellung für den Git-Lesezugriff eines Repositorys gesperrt hast, kann nur ein Websiteadministrator die Einstellung ändern.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Festlegen des anonymen Git-Lesezugriffs für alle Repositorys

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. Klicke im Dropdownmenü unter „Anonymous Git read access“ (Anonymer Git-Lesezugriff) auf **Enabled** (Aktiviert).
![Dropdownmenü „Anonymous Git read access“ (Anonymer Git-Lesezugriff) mit den Menüoptionen „Enabled“ (Aktiviert) und „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Wenn du verhindern möchtest, dass Repositoryadministrator*innen Einstellungen für den anonymen Git-Lesezugriff in allen Repositorys in deinem Unternehmen ändern, wähle **Prevent repository admins from changing anonymous Git read access** (Repositoryadministrator*innen daran hindern, den anonymen Git-Lesezugriff zu ändern) aus.
![Das Kontrollkästchen aktivieren, um zu verhindern, dass Repositoryadministrator*innen die Einstellungen für den anonymen Git-Lesezugriff für alle Repositorys in einem Unternehmen ändern](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Festlegen des anonymen Git-Lesezugriffs für ein bestimmtes Repository

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Klicke unter „Danger Zone“ (Gefahrenzone) neben „Enable Anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) auf **Enable** (Aktivieren).
![Schaltfläche „Aktiviert“ unter „Enable anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) in der Gefahrzone der Websiteadministratoreinstellungen eines Repositorys](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Überprüfen der Änderungen. Klicke zur Bestätigung auf **Yes, enable anonymous Git read access** (Ja, anonymen Git-Lesezugriff aktivieren).
![Einstellung zum Bestätigen des anonymen Git-Lesezugriffs im Popupfenster](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Wenn du verhindern möchtest, dass Repositoryadministratoren diese Einstellung für dieses Repository ändern, wähle **Prevent repository admins from changing anonymous Git read access** (Verhindern, dass Repositoryadministrator*innen den anonymen Git-Lesezugriff ändern) aus.
![Kontrollkästchen aktivieren, um zu verhindern, dass Repositoryadministratoren den anonymen Git-Lesezugriff für dieses Repository ändern](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
