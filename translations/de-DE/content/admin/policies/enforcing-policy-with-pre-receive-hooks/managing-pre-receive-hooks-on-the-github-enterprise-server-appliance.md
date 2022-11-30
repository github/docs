---
title: Pre-Receive-Hooks auf der GitHub Enterprise Server-Appliance verwalten
intro: 'Konfiguriere, wie Benutzer*innen Pre-Receive-Hooks in ihrer {% data variables.product.prodname_ghe_server %}-Appliance verwenden.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145102847'
---
## Pre-Receive-Hooks erstellen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. Klicke **Pre-Receive-Hook hinzufügen**.
![Pre-Receive-Hook hinzufügen](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. Gib in das Feld **Hook-Name** den Namen des Hooks ein, den du erstellen möchtest.
![Pre-Receive-Hook benennen](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. Wähle aus dem Dropdownmenü **Umgebung** die Umgebung aus, in der der Hook ausgeführt werden soll.
![Hook-Umgebung](/assets/images/enterprise/site-admin-settings/environment.png)
7. Wähle im Dropdownmenü **Hook-Repository auswählen** unter **Skript** das Repository aus, in dem dein Pre-Receive-Hook-Skript enthalten ist. Wähle im Dropdownmenü **Datei auswählen** den Dateinamen des Pre-Receive-Hook-Skripts aus.
![Hook-Skript](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Wähle **Exit-Status zum Akzeptieren oder Ablehnen von Push-Vorgängen** verwenden aus, um dein Skript zu erzwingen. Wenn du diese Option deaktivierst, kannst du das Skript testen, wobei der Exit-Status-Wert ignoriert wird. In diesem Modus kann der Benutzer die Skriptausgabe an der Befehlszeile, nicht aber auf der Benutzeroberfläche anzeigen.
![Exit-Status verwenden](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Wähle **Diesen Pre-Receive-Hook standardmäßig auf allen Repositorys aktivieren** aus, wenn der Pre-Receive-Hook auf allen Repositorys ausgeführt werden soll.
![Option zum Aktivieren des Hooks auf allen Repositorys](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Wähle **Administratoren können diesen Hook aktivieren und deaktivieren** aus, damit Organisationsmitglieder mit Administrator- oder Inhaberberechtigungen diesen Pre-Receive-Hook aktivieren oder deaktivieren können.
![Option zum Aktivieren oder Deaktivieren des Hooks durch Administratoren](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## Pre-Receive-Hooks bearbeiten

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. Klicke neben dem Pre-Receive-Hook, den du bearbeiten möchtest, auf {% octicon "pencil" aria-label="The edit icon" %}.
![Pre-Receive bearbeiten](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## Pre-Receive-Hooks löschen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. Klicke neben dem Pre-Receive-Hook, den du löschen möchtest, auf {% octicon "x" aria-label="X symbol" %}.
![Pre-Receive bearbeiten](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## Pre-Receive-Hooks für eine Organisation konfigurieren

Ein Organisationsadministrator kann die Hook-Berechtigungen für eine Organisation nur konfigurieren, wenn der Website-Administrator die Option **Administratoren können diesen Hook aktivieren oder deaktivieren** ausgewählt hat, als er den Pre-Receive-Hook erstellt hat. Zum Konfigurieren von Pre-Receive-Hooks für ein Repository musst du ein Organisationsadministrator oder -inhaber sein.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Klicke auf der linken Randleiste auf **Hooks**.
![Hooks-Randleiste](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Klicke neben dem Pre-Receive-Hook, den du konfigurieren möchtest, auf das Dropdownmenü **Hook-Berechtigungen**. Wähle aus, ob der Pre-Receive-Hook aktiviert oder deaktiviert werden soll, oder lege fest, dass er vom Repository-Administrator konfiguriert werden kann.
![Hook-Berechtigungen](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## Pre-Receive-Hooks für ein Repository konfigurieren

Ein Repository-Inhaber kann nur dann einen Hook konfigurieren, wenn der Website-Administrator die Option **Administratoren können diesen Hook aktivieren oder deaktivieren** ausgewählt hat, als er den Pre-Receive-Hook erstellt hat. In einer Organisation muss der Organisationsinhaber auch die Berechtigung **Konfigurierbarer** Hook ausgewählt haben. Zum Konfigurieren von Pre-Receive-Hooks für ein Repository musst du ein Repository-Inhaber sein.

{% data reusables.profile.enterprise_access_profile %}
2. Klicke auf **Repositorys** und wähle das Repository aus, für das du Pre-Receive-Hooks konfigurieren möchtest.
![Repositorys](/assets/images/enterprise/repos/repositories.png) {% data reusables.repositories.sidebar-settings %}
4. Klicke auf der linken Randleiste auf **Hooks & Dienste**.
![Hooks und Dienste](/assets/images/enterprise/repos/hooks-services.png)
5. Klicke neben dem Pre-Receive-Hook, den du konfigurieren möchtest, auf das Dropdownmenü **Hook-Berechtigungen**. Wähle aus, ob der Pre-Receive-Hook aktiviert oder deaktiviert werden soll.
![Repository-Hook-Berechtigungen](/assets/images/enterprise/repos/repo-hook-permissions.png)
