---
title: Informationen zu geschützten Branches
intro: "Du kannst wichtige Branches schützen, indem du Regeln für den Schutz von Branches festlegst. Diese definieren, ob Projektmitarbeiter*innen den Branchs löschen oder Pushes an ihn erzwingen können. Auch werden die Anforderungen für Pushes an den Branch festgelegt, z.\_B. das Bestehen von Statusüberprüfungen oder einen linearen Commitverlauf."
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 5b0d73d92a877bd932474471f2835ffda3fd2266
ms.sourcegitcommit: ec712c0fd32e7fe2f74c2b6d5da95f700dfd8111
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110377'
---
## Informationen zu Branchschutzregeln

Durch das Erstellen von Branchschutzregeln kannst du bestimmte Workflows oder Anforderungen erzwingen, bevor ein*e Projektmitarbeiter*in Änderungen an einen Branch in deinem Repository pushen kann (einschließlich des Mergens eines Pull Requests in den Branch).

Standardmäßig deaktiviert jede Branchschutzregel erzwungene Pushes an die übereinstimmenden Branches und verhindert, dass die übereinstimmenden Branches gelöscht werden. Du kannst diese Einschränkungen optional deaktivieren und zusätzliche Branchschutzeinstellungen aktivieren.

{% ifversion bypass-branch-protections %} Standardmäßig gelten die Einschränkungen einer Branchschutzregel nicht für Personen mit Administratorrechten für das Repository oder für benutzerdefinierte Rollen mit der Berechtigung zum Umgehen des Branchschutzes. Optional kannst du die Einschränkungen auch auf Administratoren und Rollen mit der Berechtigung zum Umgehen des Branchschutzes anwenden. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{% else %} Die Einschränkungen einer Branchschutzregel gelten standardmäßig nicht für Personen mit Administratorberechtigungen für das Repository. Optional kannst du auch Administratoren einschließen.{% endif %}

{% data reusables.repositories.branch-rules-example %} Weitere Informationen zu Branchnamenmustern findest du unter [Verwalten einer Branchschutzregel](/github/administering-a-repository/managing-a-branch-protection-rule).

{% data reusables.pull_requests.you-can-auto-merge %}

## Informationen zu Branchschutzeinstellungen

Für jede Branchschutzregel kannst du die folgenden Einstellungen aktivieren oder deaktivieren.
- [Erfordern von Pull-Request-Reviews vor dem Mergen](#require-pull-request-reviews-before-merging)
- [Erfordern von Statusüberprüfungen vor dem Mergen](#require-status-checks-before-merging)
- [Erfordern der Klärung von Konversationen vor dem Mergen](#require-conversation-resolution-before-merging)
- [Erfordern signierter Commits](#require-signed-commits)
- [Erfordern eines linearen Verlaufs](#require-linear-history) {% ifversion fpt or ghec %}
- [Erzwingen von Mergewarteschlangen](#require-merge-queue) {% endif %} {%- ifversion required-deployments %}
- [Anfordern erfolgreicher Bereitstellungen vor dem Mergen](#require-deployments-to-succeed-before-merging) {%- endif %} {%- ifversion lock-branch %}
- [Sperren eines Branches](#lock-branch) {%- endif %} {% ifversion bypass-branch-protections %}- [Umgehung der obigen Einstellungen nicht erlauben](#do-not-allow-bypassing-the-above-settings){% else %}- [Einbeziehen von Administratoren](#include-administrators){% endif %}
- [Einschränken der Berechtigungen zum Pushen an übereinstimmende Branches](#restrict-who-can-push-to-matching-branches)
- [Erlauben erzwungener Pushes](#allow-force-pushes)
- [Zulassen von Löschvorgängen](#allow-deletions)

Weitere Informationen zum Einrichten des Branchschutzes findest du unter [Verwalten einer Branchschutzregel](/github/administering-a-repository/managing-a-branch-protection-rule).

### Erfordern von Pull-Request-Reviews vor dem Mergen

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Wenn du erforderliche Reviews aktivierst, können Projektmitarbeiter*innen Änderungen nur an einen geschützten Branch über einen Pull Request pushen, der von der erforderlichen Anzahl von Reviewer*innen mit Schreibberechtigungen genehmigt wurde.

Wenn eine Person mit Administratorberechtigungen bei einem Review auf die Option **Änderungen anfordern** klickt, muss diese Person den Pull Request genehmigen, bevor der Pull Request gemergt werden kann. Wenn Reviewer*innen, die Änderungen an einem Pull Request anfordern, der nicht verfügbar ist, können alle Benutzer*innen mit Schreibberechtigungen für das Repository den blockierenden Review verwerfen.

{% data reusables.repositories.review-policy-overlapping-commits %}

Wenn ein*e Projektmitarbeiter*in versucht, einen Pull Request mit ausstehenden oder abgelehnten Reviews in den geschützten Branch zu mergen, wird eine Fehlermeldung ausgegeben.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Optional kannst du veraltete Pull-Request-Genehmigungen verwerfen, wenn Commits gepusht werden. Wenn jemand einen Commit pusht, der Code in einen genehmigten Pull Request ändert, wird die Genehmigung verworfen, und der Pull Request kann nicht gemergt werden. Dies gilt nicht, wenn Projektmitarbeiter*innen Commits pushen, die keinen Code ändern (z. B. Mergen des Basisbranchs in den Branch des Pull Requests). Weitere Informationen zum Basisbranch findest du unter [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Optional kannst du die Berechtigung zum Verwerfen von Pull-Request-Reviews für bestimmte Personen oder Teams einschränken. Weitere Informationen findest du unter [Verwerfen eines Pull-Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).

Optional kannst du Reviews von Codebesitzer*innen anfordern. In diesem Fall muss jeder Pull Request, der sich auf Code mit Codebesitzer*innen auswirkt, von diesen Codebesitzer*innen genehmigt werden, bevor der Pull Request in den geschützten Branch gemergt werden kann.

{% ifversion last-pusher-require-approval %} Optional kannst du die Zustimmung einer anderen als der letzten Person anfordern, die einen Push für einen Branch durchführt, bevor ein Pull Request gemergt werden kann. Dadurch wird sichergestellt, dass mehr als eine Person die Pull Requests in ihrem endgültigen Zustand sieht, bevor sie in einem geschützten Branch zusammengeführt werden. Wenn du diese Funktion aktivierst, benötigt der letzte Benutzer zum Pushen seiner Änderungen eine Genehmigung, unabhängig vom erforderlichen Genehmigungsschutz für den Branch. Benutzer, die einen Pull Request bereits überprüft haben, können ihn nach dem letzten Push erneut genehmigen, um diese Anforderung zu erfüllen.
{% endif %}

### Erfordern von Statusüberprüfungen vor dem Mergen

Mithilfe von erforderlichen Statuschecks wird sichergestellt, dass alle erforderlichen CI-Tests bestanden werden, bevor Mitarbeiter Änderungen an einem geschützten Branch vornehmen können. Weitere Informationen findest du unter „<a href="/articles/configuring-protected-branches/">Geschützte Branches konfigurieren</a>“ und „<a href="/articles/enabling-required-status-checks">Erforderliche Statuschecks aktivieren</a>“. Weitere Informationen findest du unter [Informationen zu Statusüberprüfungen](/github/collaborating-with-issues-and-pull-requests/about-status-checks).

Bevor du die erforderlichen Statusüberprüfungen aktivieren kannst, musst du das Repository für die Verwendung der Commitstatus-API konfigurieren. Weitere Informationen findest du unter [Commitstatuswerte](/rest/commits/statuses) in der REST-API-Dokumentation.

Nach der Aktivierung erforderlicher Statusüberprüfungen müssen alle erforderlichen Statusüberprüfungen durchlaufen werden, bevor Projektmitarbeiter*innen Änderungen in den geschützten Branch mergen können. Nachdem alle erforderlichen Statuschecks durchlaufen sind, müssen alle Commits entweder in einen anderen Branch übertragen und dann zusammengeführt oder direkt in den geschützten Branch übertragen werden.

Jede Person oder Integration mit Schreibberechtigungen für ein Repository kann den Status einer Statusüberprüfung im Repository festlegen{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}, aber in manchen Fällen möchtest du vielleicht nur eine Statusüberprüfung von einer bestimmten {% data variables.product.prodname_github_app %} akzeptieren. Wenn du eine erforderliche Statusüberprüfung hinzufügst, kannst du eine App auswählen, die diese Überprüfung kürzlich als erwartete Quelle von Statusupdates festgelegt hat.{% endif %} Wenn der Status von einer anderen Person oder Integration festgelegt wird, ist das Mergen nicht zulässig. Wenn du „Beliebige Quelle“ auswählst, kannst du die Autor*innen jedes Status weiterhin manuell überprüfen (im Mergefeld aufgeführt).

Du kannst die erforderlichen Statusprüfungen entweder als "loose" (locker) oder als "strict" (streng) einrichten. Die Art der erforderlichen Statuschecks bestimmt, ob dein Branch vor dem Zusammenführen auf dem aktuellen Stand mit dem Basisbranch sein muss.

| Art des erforderlichen Statuschecks | Einstellung | Merge-Anforderungen | Überlegungen |
| --- | --- | --- | --- |
| **Strict** | Das Kontrollkästchen **Aktualität von Branches vor dem Mergen erfordern** ist aktiviert. | Der Branch **muss** vor dem Mergen auf dem Stand des Basisbranchs sein. | Dies ist das Standardverhalten für erforderliche Statuschecks. Weitere Builds können erforderlich sein, da du den Head-Branch auf den neuesten Stand bringen musst, nachdem andere Mitarbeiter Pull Requests in den geschützten Basisbranch überführt haben.|
| **Locker** | Das Kontrollkästchen **Aktualität von Branches vor dem Mergen erfordern** ist **nicht** aktiviert. | Der Branch muss vor dem Mergen **nicht** auf dem Stand des Basisbranchs sein. | Es sind weniger Builds erforderlich, da du den Head-Branch nicht auf den neuesten Stand bringen musst, nachdem andere Mitarbeiter Pull Requests überführt haben. Statuschecks schlagen nach dem Zusammenführen deines Branches möglicherweise fehl, wenn inkompatible Änderungen am Basisbranch vorliegen. |
| **Deaktiviert** | Das Kontrollkästchen **Durchlaufen von Statusüberprüfungen vor dem Mergen erfordern** ist **nicht** aktiviert. | Für den Branch gelten keine Merge-Einschränkungen. | Wenn die erforderlichen Statuschecks nicht aktiviert sind, können Mitarbeiter den Branch unabhängig von seinem Stand gegenüber dem Basisbranch jederzeit zusammenführen. Die Wahrscheinlich inkompatibler Änderungen erhöht sich dadurch jedoch.

Informationen zur Problembehandlung findest du unter [Problembehandlung bei erforderlichen Statusüberprüfungen](/github/administering-a-repository/troubleshooting-required-status-checks).

### Erfordern der Klärung von Konversationen vor dem Mergen

Alle Kommentare zum Pull Request müssen geklärt sein, bevor dieser in einen geschützten Branch gemergt werden kann. Auf diese Weise wird sichergestellt, dass vor dem Mergen alle Kommentare geklärt oder berücksichtigt wurden.

### Erfordern signierter Commits

Wenn du die erforderliche Commitsignierung für einen Branch aktivierst, können Mitwirkende {% ifversion fpt or ghec %}und Bots{% endif %} nur Commits pushen, die für den Branch signiert und verifiziert wurden. Weitere Informationen findest du unter [Informationen zur Commitsignaturverifizierung](/articles/about-commit-signature-verification).

{% note %}

{% ifversion fpt or ghec %} **Hinweise:** 

* Wenn du den wachsamen Modus aktiviert hast, der angibt, dass deine Commits immer signiert werden, werden alle von {% data variables.product.prodname_dotcom %} als „Teilweise überprüft“ identifizierten Commits für Branches genehmigt, die signierte Commits erfordern. Weitere Informationen zum wachsamen Modus findest du unter [Anzeigen von Verifizierungsstatus für alle Commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits).
* Wenn ein*e Projektmitarbeiter*in einen nicht signierten Commit an einen Branch pusht, der Commitsignaturen erfordert, muss ein Rebase für den Commit ausgeführt werden, damit eine verifizierte Signatur eingebunden und dann ein Push des neu geschriebenen Commits in den Branch erzwungen wird.

{% else %} **Hinweis:** Wenn ein*e Projektmitarbeiter*in einen nicht signierten Commit an einen Branch pusht, der Commitsignaturen erfordert, muss ein Rebase für den Commit ausgeführt werden, damit eine verifizierte Signatur eingebunden und dann ein Push des neu geschriebenen Commits in den Branch erzwungen wird.
{% endif %}

{% endnote %}

Du kannst jederzeit lokale Commits zum Branch übertragen, wenn die Commits signiert und verifiziert sind. {% ifversion fpt or ghec %}Du kannst signierte und verifizierte Commits auch mithilfe eines Pull Requests auf {% data variables.product.product_name %} in den Branch mergen. Du kannst jedoch keinen Pull Request in den Branch auf {% data variables.product.product_name %} squashen und mergen, es sei denn, du bist Autor*in des Pull Requests.{% else %} Du kannst jedoch keine Pull Requests in den Branch auf {% data variables.product.product_name %} mergen.{% endif %} Du kannst Pull Requests lokal {% ifversion fpt or ghec %}squashen und {% endif %}mergen. Weitere Informationen findest du unter [Lokales Auschecken von Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally).

{% ifversion fpt or ghec %} Weitere Informationen zu Mergemethoden findest du unter [Informationen zu Mergemethoden auf {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github).{% endif %}

### Erfordern eines linearen Verlaufs

Durch das Erzwingen eines linearen Commitverlaufs wird verhindert, dass Projektmitarbeiter*innen Mergecommits an den Branch pushen. Dies bedeutet, dass alle Pull Requests, die in den geschützten Branch zusammengeführt sind, einen Squash-Merge oder einen Rebase-Merge verwenden müssen. Ein streng linearer Commitverlauf kann Teams dabei helfen, Änderungen einfacher rückgängig zu machen. Weitere Informationen zu Mergemethoden findest du unter [Informationen zu Pull-Request-Merges](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges).

Bevor du einen linearen Commit-Verlauf verlangen kannst, muss dein Repository Squash-Merge oder Rebase-Merge erlauben. Weitere Informationen findest du unter [Konfigurieren von Pull-Request-Merges](/github/administering-a-repository/configuring-pull-request-merges).

{% ifversion fpt or ghec %}
### Erfordern von Mergewarteschlangen

{% data reusables.pull_requests.merge-queue-beta %} {% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %} {% data reusables.pull_requests.merge-queue-references %}

{% endif %}

### Erfordern erfolgreicher Bereitstellungen vor dem Mergen

Du kannst festlegen, dass Änderungen erfolgreich in bestimmten Umgebungen bereitgestellt werden müssen, bevor ein Branch gemergt werden kann. Du kannst diese Regel beispielsweise verwenden, um sicherzustellen, dass Änderungen erfolgreich in einer Stagingumgebung bereitgestellt werden, bevor die Änderungen in deinen Standardbranch gemergt werden.

{% ifversion lock-branch %}
### Sperren eines Branches

Durch das Sperren eines Branches wird sichergestellt, dass keine Commits an den Branch durchgeführt werden können. Standardmäßig unterstützt ein geforktes Repository keine Synchronisierung mit dem vorgelagerten Repository. Du kannst **Forksynchronisierung zulassen** aktivieren, um Änderungen aus dem vorgelagerten Repository abzurufen und gleichzeitig andere Beiträge zur Kopie des Branches zu verhindern.
{%  endif %}

{% ifversion bypass-branch-protections %}### Umgehung der oben genannten Einstellungen nicht zulassen{% else %}
### Administratoren einschließen{% endif %}

{% ifversion bypass-branch-protections %} Standardmäßig gelten die Einschränkungen einer Branchschutzregel nicht für Personen mit Administratorrechten für das Repository oder für benutzerdefinierte Rollen mit der Berechtigung zum Umgehen des Branchschutzes in einem Repository. 

Du kannst diese Einstellung aktivieren, um die Einschränkungen auch auf Administratoren und Rollen mit der Berechtigung zum Umgehen des Branchschutzes anzuwenden.  Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{% else %} Standardmäßig gelten Branchschutzregeln nicht für Personen mit Administratorberechtigungen für ein Repository. Du kannst diese Einstellung aktivieren, um Administratoren in deine Branchschutzregeln einzuschließen.{% endif %}

### Einschränken der Berechtigungen zum Pushen an übereinstimmende Branches

{% ifversion fpt or ghec %} Du kannst Brancheinschränkungen aktivieren, wenn sich dein Repository im Besitz einer Organisation befindet, die {% data variables.product.prodname_team %} oder {% data variables.product.prodname_ghe_cloud %} nutzt.
{% endif %}

Wenn du Brancheinschränkungen aktivierst, können nur Benutzer*innen, Teams oder Apps mit den erforderlichen Berechtigungen an den geschützten Branch pushen. Du kannst die Benutzer*innen, Teams oder Apps mit Pushzugriff auf einen geschützten Branch in den Einstellungen für den geschützten Branch anzeigen und bearbeiten. Wenn Statusüberprüfungen erforderlich sind, werden die Personen, Teams und Apps, die die Berechtigung haben, in einen geschützten Branch zu pushen, trotzdem am Mergen in diesen Branch gehindert, wenn die erforderlichen Überprüfungen fehlschlagen. Personen, Teams und Apps, die über die Berechtigung zum Pushen an einen geschützten Branch verfügen, müssen weiterhin einen Pull Request erstellen, wenn Pull Requests erforderlich sind.

{% ifversion restrict-pushes-create-branch %} Optional kannst du die gleichen Einschränkungen auch auf die Erstellung von Branches anwenden, die der Regel entsprechen. Wenn du z. B. eine Regel erstellst, die es nur einem bestimmten Team erlaubt, in Branches zu pushen, die das Wort `release` enthalten, können nur Mitglieder dieses Teams einen neuen Branch erstellen, der das Wort `release` enthält.
{% endif %}

Du kannst nur Benutzern, Teams oder installierten {% data variables.product.prodname_github_apps %} mit Schreibzugriff auf ein Repository den Pushzugriff auf einen geschützten Branch oder die Berechtigung zum Erstellen eines entsprechenden Branches erteilen. Personen und Apps mit Administratorberechtigungen für ein Repository sind stets in der Lage, einen Push in einen geschützten Branch durchzuführen oder einen entsprechenden Branch zu erstellen.

### Erlauben erzwungener Pushes

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Erzwungene Pushes werden von {% data variables.product.product_name %} standardmäßig für alle geschützten Branches blockiert. Wenn du erzwungene Pushes an einen geschützten Branch aktivierst, kannst du eine von zwei Gruppen auswählen, die Pushes erzwingen können:

1. Jedem, der mindestens über Schreibberechtigungen für das Repository verfügt, das erzwungene Pushen an den Branch erlauben (einschließlich Benutzer*innen mit Administratorberechtigungen)
1. Nur bestimmten Personen oder Teams das erzwungene Pushen an den Branch erlauben

Wenn jemand einen Push an einen Branch erzwingt, überschreibt der erzwungene Push möglicherweise Commits, auf denen die Arbeit anderer Projektmitarbeiter*innen basiert. Bei Benutzer*innen können Mergekonflikte oder beschädigte Pull Requests auftreten.

{% else %} {% data variables.product.product_name %} blockiert standardmäßig erzwungene Pushes an alle geschützten Branches. Wenn du erzwungene Pushes zu einem geschützten Branch aktivierst, kann jeder Benutzer mit mindestens Schreibberechtigungen im Repository Pushes zum Branch erzwingen, inbegriffen Benutzer mit Administratorberechtigungen. Wenn jemand einen Push an einen Branch erzwingt, überschreibt der erzwungene Push möglicherweise Commits, auf denen die Arbeit anderer Projektmitarbeiter*innen basiert. Bei Benutzer*innen können Mergekonflikte oder beschädigte Pull Requests auftreten.
{% endif %}

Das Aktivieren erzwungener Pushes wird keine anderen Branch-Schutzregeln überschreiben. Wenn ein Branch beispielsweise einen linearen Commit-Verlauf verlangt, kannst du keine Merge-Commit-Pushes zu diesem Branch erzwingen.

{% ifversion ghes or ghae %}Du kannst erzwungene Pushes für einen geschützten Branch nicht aktivieren, wenn Websiteadministrator*innen erzwungene Pushes an alle Branches in deinem Repository blockiert haben. Weitere Informationen findest du unter [Blockieren erzwungener Pushes in Repositorys im Besitz eines persönlichen Kontos oder einer Organisation](/enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization).

Wenn ein Websiteadministrator erzwungene Pushes nur auf den Standardbranch blockiert hat, kannst du erzwungene Pushes trotzdem für jeden anderen geschützten Branch aktivieren.{% endif %}

### Zulassen von Löschvorgängen

Standardmäßig kannst du einen geschützten Branch nicht löschen. Wenn du das Löschen eines geschützten Branchs aktivierst, können alle Benutzer*innen den Branch löschen, die mindestens über Schreibberechtigungen für das Repository verfügen.
