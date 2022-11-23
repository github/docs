---
title: Informationen zu Repositorys
intro: Ein Repository enthält alle Dateien deines Projekts und den Revisionsverlauf jeder Datei. Im Repository kannst du die Arbeit an deinem Projekt diskutieren und verwalten.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 95e4033aa41f7920b5447554773dc61a181f5861
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163505'
---
## Informationen zu Repositorys

Du kannst Repositorys einzeln besitzen oder die Inhaberschaft an Repositorys mit anderen Personen in einer Organisation teilen.

Du kannst einschränken, wer Zugriff auf ein Repository hat, indem du die Sichtbarkeit des Repositorys auswählst. Weitere Informationen findest du unter [Informationen zur Sichtbarkeit von Repositorys](#about-repository-visibility).

Bei benutzereigenen Repositorys kannst du anderen Personen Mitarbeiterzugriff geben, damit sie an deinem Projekt mitarbeiten können. Wenn ein Repository im Besitz einer Organisation ist, kannst du den Mitgliedern der Organisation Zugriffsberechtigungen für die Mitarbeit an deinem Repository erteilen. Weitere Informationen findest du unter [Berechtigungsebenen für ein Repository eines persönlichen Kontos](/articles/permission-levels-for-a-user-account-repository/) und unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% ifversion fpt or ghec %} Mit {% data variables.product.prodname_free_team %} für persönliche Konten und Organisationen kannst du mit einer unbegrenzten Anzahl an Projektmitarbeitern in unbegrenzten öffentlichen Repositorys mit allen Features oder in unbegrenzten privaten Repositorys mit begrenzten Features arbeiten. Um erweiterte Werkzeuge für private Repositorys zu erhalten, kannst du ein Upgrade auf {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} oder{% data variables.product.prodname_ghe_cloud %} durchführen. {% data reusables.gated-features.more-info %} {% else %} Jede Person und Organisation kann eine unbegrenzte Anzahl an Repositorys besitzen und eine unbegrenzte Menge an Projektmitarbeiter*innen zu allen Repositorys einladen.
{% endif %}

Du kannst Repositorys zum Verwalten deiner Arbeit und zur Zusammenarbeit mit anderen verwenden.
- Du kannst Issues verwenden, um Benutzerfeedback zu sammeln, Softwarefehler zu melden und auszuführende Aufgaben zu organisieren. Weitere Informationen findest du unter [Informationen zu Issues](/github/managing-your-work-on-github/about-issues). {% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- Du kannst Pull Requests verwenden, um Änderungen an einem Repository vorzuschlagen. Weitere Informationen findest du unter [Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).
- Du kannst Projektboards zum Organisieren und Priorisieren deiner Issues und Pull Requests verwenden. Weitere Informationen findest du unter [Informationen zu Projektboards](/github/managing-your-work-on-github/about-project-boards).

{% data reusables.repositories.repo-size-limit %}

Informationen zum effektiven Einsatz von Repositorys findest du unter [Bewährte Methoden für Repositorys](/repositories/creating-and-managing-repositories/best-practices-for-repositories).

## Informationen zur Sichtbarkeit eines Repositorys

Du kannst den Zugriff auf ein Repository einschränken, indem du die Sichtbarkeitstufe des Repositorys auswählst: {% ifversion ghes or ghec %}öffentlich, intern oder privat{% elsif ghae %}privat oder intern{% else %} öffentlich oder privat{% endif %}.

{% ifversion fpt or ghec or ghes %}

Wenn du ein Repository erstellst, kannst du auswählen, ob es öffentlich oder privat sein soll.{% ifversion ghec or ghes %} Wenn du das Repository in einer Organisation erstellst,{% ifversion ghec %} die sich im Besitz eines Unternehmenskontos befindet{% endif %}, kannst du das Repository auch als „intern“ auswählen.{% endif %}{% endif %}{% ifversion fpt %} Repositorys in Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden und sich im Besitz eines Unternehmenskontos befinden, können ebenfalls mit interner Sichtbarkeit erstellt werden. Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories).

{% elsif ghae %}

Wenn du ein Repository erstellst, das sich im Besitz deines persönlichen Kontos befindet, ist das Repository immer privat. Wenn du ein Repository erstellst, das sich im Besitz einer Organisation befindet, kannst du auswählen, ob das Repository privat oder intern sein soll.

{% endif %}

{%- ifversion fpt or ghec %}
- Öffentliche Repositorys sind für alle Benutzer im Internet zugänglich.
- Nur du hast Zugriff auf private Repositorys, außerdem noch Personen, denen du explizit Zugriff gewährt hast, und bestimmte Organisationsmitglieder auf Organisationsrepositorys.
{%- elsif ghes %}
- Wenn sich {% data variables.location.product_location %} nicht im privaten Modus oder hinter einer Firewall befindet, verfügen alle Personen im Internet über Zugriff auf öffentliche Repositorys. Andernfalls sind öffentliche Repositorys für alle Personen verfügbar, die {% data variables.location.product_location %} nutzen. Dies schließt auch externe Projektmitarbeiter ein.
- Nur du hast Zugriff auf private Repositorys, außerdem noch Personen, denen du explizit Zugriff gewährt hast, und bestimmte Organisationsmitglieder auf Organisationsrepositorys.
{%- elsif ghae %}
- Nur du hast Zugriff auf private Repositorys, außerdem noch Personen, denen du explizit Zugriff gewährt hast, und bestimmte Organisationsmitglieder auf Organisationsrepositorys.
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- Alle Unternehmensmitglieder verfügen über Zugriff auf interne Repositorys. Weitere Informationen findest du unter [Informationen zu internen Repositorys](#about-internal-repositories).
{%- endif %}

Organisationsinhaber haben immer Zugriff auf jedes Repository, das in einer Organisation erstellt wurde. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Personen mit Administratorberechtigungen für ein Repository können die Sichtbarkeit eines vorhandenen Repositorys ändern. Weitere Informationen findest du unter [Festlegen der Sichtbarkeit des Repositorys](/github/administering-a-repository/setting-repository-visibility).

{% ifversion ghes or ghec or ghae %}
## Informationen zu internen Repositorys

{% data reusables.repositories.about-internal-repos %} Weitere Informationen zu InnerSource findest du im Whitepaper [Eine Einführung in InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/) von {% data variables.product.prodname_dotcom %}.

{% ifversion ghec %} {% note %}

**Hinweis:** Du kannst nur interne Repositorys erstellen, wenn du {% data variables.product.prodname_ghe_cloud %} mit einem Unternehmenskonto verwendest. Ein Unternehmenskonto ist eine besondere Art von Konto, das einen zentralen Verwaltungspunkt für mehrere Organisationen bietet. Weitere Informationen findest du unter [Typen von {% data variables.product.prodname_dotcom %}-Konten](/get-started/learning-about-github/types-of-github-accounts).

{% endnote %} {% endif %}

Alle Unternehmensmitglieder verfügen über Berechtigungen für das interne Repository, doch interne Repositorys sind für Personen {% ifversion fpt or ghec %}außerhalb des Unternehmens,{% else %} die keine Mitglieder einer Organisation sind{% endif %}, nicht sichtbar. Dazu gehören auch externe Projektmitarbeiter*innen in Organisationsrepositorys. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members) und [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

{% ifversion ghes %} {% note %}

**Hinweis:** Benutzer*innen müssen Teil einer Organisation sein, um Unternehmensmitglieder zu sein und Zugriff auf interne Repositorys zu haben. Wenn ein {% data variables.location.product_location %}-Benutzer kein Mitglieder einer Organisation ist, hat dieser Benutzer keinen Zugriff auf interne Repositorys.

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %} Sofern dein Unternehmen nicht {% data variables.product.prodname_emus %} verwendet, können Mitglieder{% else %}Mitglieder{% endif %} des Unternehmens jedes interne Repository forken, das einer Organisation im Unternehmen gehört. Das geforkte Repository gehört dem persönlichen Konto des Mitglieds, und die Sichtbarkeit des Forks ist privat. Wenn Benutzer*innen aus allen Organisationen im Besitz des Unternehmens entfernt werden, werden die Forks interner Repositorys diser Benutzer*innen automatisch entfernt.

{% ifversion ghec %} {% note %}

**Hinweis:** {% data variables.enterprise.prodname_managed_users_caps %} können keine internen Repositorys forken. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts).

{% endnote %} {% endif %} {% endif %}

## Begrenzungen für die Anzeige von Inhalten und Diffs in einem Repository

Bestimmte Arten von Ressourcen können ziemlich groß sein, wodurch ihre Verarbeitung auf {% data variables.product.product_name %} sehr aufwendig ist. Daher werden Begrenzungen festgelegt, um sicherzustellen, dass Anforderungen in angemessener Zeit abgeschlossen werden.

Die meisten der nachfolgend genannten Begrenzungen gelten sowohl für {% data variables.product.product_name %} als auch für die API.

### Textbeschränkungen

Textdateien über **512 KB** werden immer als Nur-Text angezeigt. Die Syntax des Codes ist nicht hervorgehoben, und Dateien mit Fließtext werden nicht in HTML konvertiert (z. B. Markdown, AsciiDoc *etc.* ).

Textdateien über **5 MB** sind nur über ihre unformatierten URLs verfügbar, die über `{% data variables.product.raw_github_com %}` bereitgestellt werden, z. B. `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Klicke auf die Schaltfläche **Roh**, um die unformatierte URL einer Datei zu erhalten.

### Diff-Beschränkungen

Da Diffs sehr groß werden können, gelten Diff-Beschränkungen für Commits, Pull Requests und Vergleichsansichten:

- In einem Pull Request darf kein Gesamtdiff *20.000 Zeilen, die geladen werden können,* oder *1 MB* rohe Diffdaten überschreiten.
- Kein einzelnes Diff darf *20.000 Zeilen, die geladen werden können,* oder *500 KB* rohe Diffdaten überschreiten. *Vierhundert Zeilen* und *20 KB* werden für eine einzelne Datei automatisch geladen.
- Die Höchstzahl an Dateien in einem einzigen Diff liegt bei *300*.
- Die Höchstzahl renderbarer Dateien (wie Bilder, PDF- und GeoJSON-Dateien) in einem einzigen Diff liegt bei *25*.

Einige Teile einer eingeschränkten Diff werden möglicherweise angezeigt, aber alles, was über die Begrenzung hinausgeht, wird nicht angezeigt.

### Commit-Listenbeschränkung

Die Seiten „Ansicht vergleichen“ und „Pull Requests“ zeigen eine Liste von Commits zwischen den Überarbeitungen `base` und `head` an. Diese Listen sind auf **250** Commits beschränkt. Wenn diese Grenze überschritten wird, gibt ein Hinweis an, dass weitere Commits vorhanden sind (aber sie werden nicht angezeigt).

## Weiterführende Themen

- [Informationen zu Forks](/github/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Zusammenarbeiten mithilfe von Issues und Pull Requests](/categories/collaborating-with-issues-and-pull-requests)
- [Verwalten deiner Arbeit auf {% data variables.product.prodname_dotcom %}](/categories/managing-your-work-on-github/)
- [Verwalten eines Repositorys](/categories/administering-a-repository)
- [Visualisieren von Repositorydaten mit Graphen](/categories/visualizing-repository-data-with-graphs/)
- [Informationen zu Wikis](/communities/documenting-your-project-with-wikis/about-wikis)
- [Glossar zu {% data variables.product.prodname_dotcom %}](/articles/github-glossary)
