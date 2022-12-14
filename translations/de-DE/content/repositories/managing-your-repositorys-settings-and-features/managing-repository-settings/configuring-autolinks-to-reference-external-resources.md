---
title: Automatische Verlinkungen von externen Ressourcen konfigurieren
intro: 'Du kannst Autolinks externen Ressourcen wie JIRA-Issues oder Zendesk-Tickets hinzufügen, um Deinen Workflow zu optimieren.'
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure autolinks
ms.openlocfilehash: ae6e10f55a880a4fa389149ad137300ef3a81514
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146748589'
---
## Informationen zu Autolinks

Alle Benutzer mit Administratorberechtigungen für ein Repository können automatische Links konfigurieren, um Issues, Pull Requests, Commit-Mitteilungen und Release-Beschreibungen mit externen Diensten von Dritten zu verbinden.

{% ifversion autolink-reference-alphanumeric %} Autolinkverweise können jetzt alphanumerische Zeichen akzeptieren. Bei ihrer ursprünglichen Einführung waren benutzerdefinierte Autolinks auf externe Ressourcen beschränkt, die numerische Bezeichner verwendeten. Benutzerdefinierte Autolinks funktionieren jetzt mit alphanumerischen Bezeichnern. Ältere Autolinkverweise, die nur numerische Bezeichner erkennen, sind veraltet und werden mit der Beschriftung „Legacy“ angezeigt.

Zum Definieren benutzerdefinierter Autolinks gibst du ein Verweispräfix und eine Ziel-URL an.
- Die Namen von Verweispräfixen dürfen keine Überlappungen aufweisen. Beispielsweise kann ein Repository keine zwei benutzerdefinierten Autolinks mit Präfixen wie `TICKET` und `TICK` haben, da beide Präfixe mit der Zeichenfolge `TICKET123a`übereinstimmen würden.
- Ziel-URLs enthalten eine `<num>`-Variable, die die folgenden Zeichen unterstützt: `a-z` (Groß-/Kleinschreibung muss nicht beachtet werden), `0-9`und `-`.
{% endif %}

## Automatische Verlinkungen von externen Ressourcen konfigurieren

Im Folgenden wird gezeigt, wie Autolinks zum Verweisen auf externe Ressourcen konfiguriert werden. Wenn du z. B. Zendesk verwendest, um Tickets von Benutzern nachzuverfolgen, kannst du in dem Pull Request, den du zur Fehlerbehebung öffnest, auf eine Ticketnummer verweisen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Klicke im Abschnitt "Integrations" (Integrationen) der Seitenleiste auf **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Automatisch verknüpfte Verweise**.
{% else %}
1. Klicke auf der linken Seitenleiste auf **Autolink references** (Automatisch verknüpfte Verweise).
![Registerkarte "Autolink references" (Automatisch verknüpfte Verweise) auf der linken Seitenleiste](/assets/images/help/repository/autolink-references-tab.png) {% endif %}
1. Klicke auf **Add autolink reference** (Automatisch verknüpften Verweis hinzufügen).
![Schaltfläche zum Eingeben von Informationen zu automatisch verknüpften Verweisen](/assets/images/help/repository/add-autolink-reference-details.png)
5. Gib unter „Reference prefix“ (Verweis-Präfix) ein kurzes, aussagekräftiges Präfix ein, das Mitarbeiter verwenden sollen, um automatische Links der externen Ressource zu erzeugen.
{% ifversion autolink-reference-alphanumeric %}![Feld zum Eingeben der Abkürzung für das externe System](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Feld zum Eingeben der Abkürzung für das externe System](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. Gib unter „Target URL“ (Ziel-URL) den Link zum gewünschten externen System ein. Stelle sicher, dass `<num>` als Variable für die Referenznummer beibehalten wird.
{% ifversion autolink-reference-alphanumeric %}![Feld zum Eingeben der Abkürzung für das externe System](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Feld zum Eingeben der Abkürzung für das externe System](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. Klicke auf **Add autolink reference** (Automatisch verknüpften Verweis hinzufügen).
{% ifversion autolink-reference-alphanumeric %} {% else %}![Schaltfläche zum Hinzufügen des Autolinkverweises](/assets/images/help/repository/add-autolink-reference.png){% endif %}
