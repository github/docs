---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116193"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die ausgeführte Aktion. Mögliche Werte sind:<ul><li>`completed`: Alle Überprüfungsausführungen in einer Überprüfungssammlung sind abgeschlossen.</li><li>`requested`: Tritt auf, wenn neuer Code in das Repository der App gepusht wird. Wenn du `requested`-Aktionsereignisse erhältst, musst du [eine neue Überprüfungsausführung erstellen](/rest/reference/checks#create-a-check-run).</li><li>`rerequested`: Tritt auf, wenn jemand die erneute Ausführung der gesamten Überprüfungssammlung über die Pull Request-Benutzeroberfläche anfordert. Wenn du `rerequested`-Aktionsereignisse erhältst, musst du [eine neue Überprüfungsausführung erstellen](/rest/reference/checks#create-a-check-run). Weitere Informationen zur GitHub-Benutzeroberfläche findest du unter [Informationen zu Statusüberprüfungen](/articles/about-status-checks#checks).</li></ul>
`check_suite`|`object` | [check_suite](/rest/reference/checks#suites).
`check_suite[head_branch]`|`string` | Der Name des Headbranchs, in dem sich die Änderungen befinden.
`check_suite[head_sha]`|`string` | Der SHA-Wert des letzten Commits für diese Überprüfungssammlung.
`check_suite[status]`|`string` | Der Zusammenfassungsstatus für alle Überprüfungsausführungen, die Teil der Überprüfungssammlung sind. Dies kann `queued`, `requested`, `in_progress` oder `completed` sein.
`check_suite[conclusion]`|`string`| Die abschließende Zusammenfassung für alle Überprüfungsausführungen, die Teil der Überprüfungssammlung sind. Mögliche Werte: `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` oder `stale`. Dieser Wert ist `null`, bis die Überprüfungsausführung `completed` ist.
`check_suite[url]`|`string` | Ein Array, das auf die API-Ressource der Überprüfungssammlung verweist.
`check_suite[pull_requests]`|`array`| Ein Array aus Pull Requests, die dieser Überprüfungssammlung entsprechen. Ein Pull Request entspricht einer Überprüfungssammlung, wenn sie denselben Wert für `head_branch` aufweisen.<br/><br/>**Hinweis:**<ul><li>Der `head_sha`-Wert einer Überprüfungssammlung kann vom `sha`-Wert des Pull Requests abweichen, wenn nachfolgende Pushes in den Pull Request erfolgen.</li><li>Wenn sich der `head_branch` der Überprüfungssammlung in einem Forkrepository befindet, lautet der Wert `null`, und das `pull_requests`-Array ist leer.</li></ul>
