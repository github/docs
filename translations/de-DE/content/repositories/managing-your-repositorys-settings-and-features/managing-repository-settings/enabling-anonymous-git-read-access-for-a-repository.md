---
title: Anonymen Git-Lesezugriff für ein Repository aktivieren
intro: 'Als Repository-Administrator kannst du anonyme Git-Lesezugriffe für öffentliche Repositorys aktivieren oder deaktivieren, wenn diese bestimmte Voraussetzungen erfüllen.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132159'
---
Repository-Administratoren können die Einstellung für den anonymen Git-Lesezugriff für ein bestimmtes Repository ändern, wenn folgende Voraussetzungen erfüllt sind:
- Ein Websiteadministrator hat den privaten Modus und den anonymen Git-Lesezugriff aktiviert.
- Das Repository ist für das Unternehmen öffentlich und ist keine Fork.
- Ein Websiteadministrator hat den anonymen Git-Lesezugriff für das Repository nicht deaktiviert.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Klicke neben „Anonymen Git-Lesezugriff aktivieren“ auf **Aktivieren**.
![Schaltfläche „Aktiviert“ unter „Anonymer Git-Lesezugriff“](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Überprüfen der Änderungen. Gib zur Bestätigung den Namen des Repositorys ein, und klicke auf **Ich habe verstanden und möchte den anonymen Git-Lesezugriff aktivieren**.
