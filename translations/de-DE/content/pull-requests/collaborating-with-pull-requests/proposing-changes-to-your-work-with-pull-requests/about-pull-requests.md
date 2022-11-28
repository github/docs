---
title: Informationen zu Pull Requests
intro: 'Mit Pull Requests kannst du andere Benutzer*innen über Änderungen informieren, die du an einen Branch in einem Repository auf {% data variables.product.product_name %} gepusht hast. Sobald ein Pull Request geöffnet ist, kannst du die potenziellen Änderungen mit Mitarbeiter*innen besprechen und überprüfen und Follow-up-Commits hinzufügen, bevor deine Änderungen in den Basisbranch gemergt werden.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 6912f0ca38cc522d5698a9e8b1a1042f445b999e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111108'
---
## Informationen zu Pull Requests

{% note %}

**Hinweis:** Bei der Arbeit mit Pull Requests gilt es Folgendes zu beachten:
* Wenn du im [freigegebenen Repositorymodell](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models) arbeitest, empfiehlt es sich, einen Topic-Branch für deinen Pull Request zu verwenden. Zwar kannst du Pull Requests von jedem Branch oder Commit aus senden, aber mit einem Themen-Branch kannst du Follow-up-Commits übertragen, wenn du deine vorgeschlagenen Änderungen aktualisieren musst.
* Du solltest beim erzwungenen Pushen von Commits an einen Pull Request vorsichtig sein. Erzwungene Pushes ändern den Repositoryverlauf und können deinen Pull Request beschädigen. Wenn andere Projektmitarbeiter*innen das Projekt vor einem erzwungenen Push branchen, überschreibt der erzwungene Push möglicherweise Commits, auf denen die Arbeit anderer Projektmitarbeiter*innen basiert.

{% endnote %}

Du kannst Pull Requests auf {% data variables.product.prodname_dotcom_the_website %} erstellen, mit {% data variables.product.prodname_desktop %}, in {% data variables.product.prodname_github_codespaces %}, auf {% data variables.product.prodname_mobile %} und wenn du die GitHub-CLI verwendest.

Nach der Initialisierung eines Pull Requests siehst du eine Review-Seite, die einen detaillierten Überblick über die Änderungen zwischen deinem Branch (dem Vergleichs-Branch) und dem Basis-Branch des Repositorys bietet. Du kannst eine Zusammenfassung der vorgeschlagenen Änderungen hinzufügen, die durch Commits vorgenommenen Änderungen überprüfen, Kennzeichnungen, Meilensteine und Bearbeiter*innen hinzufügen sowie einzelne Mitwirkende oder Teams erwähnen (@mention). Weitere Informationen findest du unter [Erstellen eines Pull Requests](/articles/creating-a-pull-request).

Sobald du einen Pull Request erstellt hast, kannst du Commits aus deinem Themen-Branch übertragen, um sie zu deinem bestehenden Pull Request hinzuzufügen. Diese Commits werden in chronologischer Reihenfolge in deinem Pull Request angezeigt, und die Änderungen sind auf der Registerkarte „Files changed“ (Dateien geändert) sichtbar.

Andere Mitarbeiter können deine vorgeschlagenen Änderungen überprüfen, Review-Kommentare hinzufügen, zur Diskussion über den Pull Request beitragen und sogar Commits zum Pull Request hinzufügen. {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %} Du kannst auf der Registerkarte „Konversation“ Informationen zum aktuellen Bereitstellungsstatus des Branchs und zu vergangenen Bereitstellungsaktivitäten anzeigen. Weitere Informationen findest du unter [Anzeigen der Bereitstellungsaktivitäten für ein Repository](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository).
{% endif %}

Wenn du mit den vorgeschlagenen Änderungen einverstanden bist, kannst du den Pull Request zusammenführen. Wenn du in einem Modell mit gemeinsamen Repositorys arbeitest, erstellst du einen Pull Request und du oder jemand anders wird deine Änderungen von deinem Funktions-Branch in den Basis-Branch zusammenführen, den du im Pull Request angegeben hast. Weitere Informationen findest du unter [Mergen eines Pull Requests](/articles/merging-a-pull-request).

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Tipps:**
- Du musst <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> gedrückt halten und auf **Veraltete anzeigen** oder **Veraltete ausblenden** klicken, um alle veralteten Überprüfungskommentare in einem Pull Request zu reduzieren bzw. zu erweitern. Weitere Tastenkombinationen findest du unter [Tastenkombinationen](/articles/keyboard-shortcuts).
- Du kannst beim Zusammenführen eines Pull Requests Commits squashen, um eine optimierte Ansicht der Änderungen zu erhalten. Weitere Informationen findest du unter [Informationen zum Mergen von Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges).

{% endtip %}

In deinem Dashboard findest du schnell Links zu zuletzt aktualisierten Pull Requests, an denen du gerade arbeitest oder die du abonniert hast. Weitere Informationen findest du unter [Informationen zu deinem persönlichen Dashboard](/articles/about-your-personal-dashboard).

## Pull Requests entwerfen

{% data reusables.gated-features.draft-prs %}

Wenn du einen Pull Request erstellst, kannst du wählen, ob du einen für den Review bereiten Pull Request oder einen Pull-Request-Entwurf erstellen möchten. Pull-Request-Entwürfe können nicht zusammengeführt werden, und Code-Inhaber werden nicht automatisch aufgefordert, Pull-Request-Entwürfe zu überprüfen. Weitere Informationen zum Erstellen eines Entwurfs-Pull-Requests findest du unter [Erstellen eines Pull Requests](/articles/creating-a-pull-request) und [Erstellen eines Pull Requests über einen Fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

{% data reusables.pull_requests.mark-ready-review %} Du kannst einen Pull Request jederzeit in einen Entwurf umwandeln. Weitere Informationen findest du unter [Ändern der Stage eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).

## Unterschiede zwischen Commits auf Vergleichsseiten und Pull-Request-Seiten

Vergleichsseiten und Pull-Request-Seiten nutzen verschiedene Methoden, um den Unterschied für geänderte Dateien zu berechnen:

- Vergleichsseiten zeigen den Unterschied zwischen dem Anfang der Headreferenz und dem aktuellen gemeinsamen Vorgänger (also der Mergebasis) der Head- bzw. Basisreferenz.
- Pull-Request-Seiten zeigen den Unterschied zwischen dem Anfang der Headreferenz und dem gemeinsamen Vorgänger der Head- bzw. Basisreferenz zum Zeitpunkt der Erstellung des Pull Requests. Folglich kann die für den Vergleich verwendete Mergebasis unterschiedlich sein.

## Weiterführende Themen

- [Pull Request](/articles/github-glossary/#pull-request) im {% data variables.product.prodname_dotcom %}-Glossar
- [Informationen zu Branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Kommentieren eines Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
- [Schließen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)
