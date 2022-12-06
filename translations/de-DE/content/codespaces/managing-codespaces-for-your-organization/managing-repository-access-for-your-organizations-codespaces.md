---
title: Verwalten des Repositoryzugriffs für die Codespaces deiner Organisation
shortTitle: Repository access
intro: 'Du kannst die Repositorys in deiner Organisation verwalten, auf die {% data variables.product.prodname_github_codespaces %} zugreifen kann.'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: 9fdec24104a61170977053195446db0b4cf0a62f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160233'
---
{% warning %}

**Hinweis zu veralteten Funktionen**: Die unten beschriebene Zugriffs- und Sicherheitseinstellung ist mittlerweile veraltet und wird hier nur zu Referenzzwecken dokumentiert. Um erweiterten Zugriff auf andere Repositorys zu aktivieren, füge deiner Konfigurationsdatei `devcontainer.json` die angeforderten Berechtigungen hinzu. Weitere Informationen findest du unter [Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

{% endwarning %}

Standardmäßig kann ein Codespace nur auf das Repository zugreifen, in dem er erstellt wurde. Wenn du den Zugriff und die Sicherheit für ein Repository aktivierst, das sich im Besitz deiner Organisation befindet, erhalten alle Codespaces, die für dieses Repository erstellt werden, auch Leserechte für alle anderen Repositorys, die sich im Besitz der Organisation befinden und für die der Codespace-Ersteller Zugriffsberechtigungen besitzt. Wenn du die Repositorys einschränken möchtest, auf die ein Codespace zugreifen kann, kannst du ihn entweder auf das Repository beschränken, in dem der Codespace erstellt wurde, oder auf bestimmte Repositorys. Du solltest Zugriff und Sicherheit nur für Repositorys aktivieren, denen du vertraust.

Unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization) wird erläutert, wie du verwalten kannst, welche Benutzer in deiner Organisation {% data variables.product.prodname_github_codespaces %} verwenden können.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Wähle unter „Zugriff und Sicherheit“ die gewünschte Einstellung für deine Organisation aus.
  ![Optionsfelder zum Verwalten vertrauenswürdiger Repositorys](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Wenn du „Ausgewählte Repositorys“ ausgewählt hast, wähle das Dropdownmenü aus, und klicke dann auf ein Repository, damit die Codespaces des Repositorys auf andere Repositorys zugreifen können, die sich im Besitz deiner Organisation befinden. Wiederhole diesen Vorgang für alle Repositorys, deren Codespaces auf andere Repositorys zugreifen können sollen.
    ![Dropdownmenü „Ausgewählte Repositorys“](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Weiterführende Themen

- [Verwalten des Repositoryzugriffs für deine Codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)
