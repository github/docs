---
title: Konfigurieren von Tagschutzregeln
shortTitle: Tag protection rules
intro: 'Du kannst Tagschutzregeln für dein Repository konfigurieren, um Mitwirkende daran zu hindern, Tags zu erstellen oder zu löschen.'
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063202'
---
{% note %}

**Hinweis:** Tagschutzregeln befinden sich derzeit in der Betaversion und können noch geändert werden.

{% endnote %}

Wenn du eine Tagschutzregel hinzufügst, werden alle Tags, die dem bereitgestellten Muster entsprechen, geschützt. Nur Benutzer mit Berechtigungen als Administrator oder zum Verwalten im Repository können geschützte Tags erstellen, und nur Benutzer mit Administratorberechtigungen im Repository können geschützte Tags löschen. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role). {% data variables.product.prodname_github_apps %} erfordern die `Repository administration: write` Berechtigung zum Ändern eines geschützten Tags.

{% ifversion custom-repository-roles %} Darüber hinaus kannst du benutzerdefinierte Repositoryrollen erstellen, um anderen Benutzergruppen das Erstellen oder Löschen von Tags zu ermöglichen, die den Tagschutzregeln entsprechen. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Klicke auf der Seitenleiste im Abschnitt "Code and Automation" (Code und Automatisierung) auf **{% octicon "tag" aria-label="The tag icon" %} Tags**.
1. Klicke auf **New rule** (Neue Regel).
![Neue Tagschutzregel](/assets/images/help/repository/new-tag-protection-rule.png)
1. Gib unter "Tag name pattern" (Tagnamensmuster) das Muster der Tags ein, den du schützen möchtest. In diesem Beispiel schützt die Eingabe "\*" alle Tags. 
![Festlegen des Tagschutzmusters](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Klicken Sie auf **Regel hinzufügen**.
![Hinzufügen der Tagschutzregel](/assets/images/help/repository/add-tag-protection-rule.png)
