---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066210"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die ausgeführte Aktion. Kann eine der folgenden Aktionen sein: <ul><li> `created`: Eine neue Überprüfungsausführung wurde erstellt.</li><li> `completed`: Der `status` der Überprüfungsausführung lautet `completed`.</li><li> `rerequested`: Jemand hat die erneute Ausführung deiner Überprüfungssammlung über die Pull Request-Benutzeroberfläche angefordert. Weitere Informationen zur GitHub-Benutzeroberfläche findest du unter [Informationen zu Statusüberprüfungen](/articles/about-status-checks#checks). Wenn du eine `rerequested`-Aktion erhältst, musst du [eine neue Überprüfungsausführung erstellen](/rest/reference/checks#create-a-check-run). Nur die {% data variables.product.prodname_github_app %}, für die jemand eine erneute Ausführung der Überprüfung anfordert, erhält die Payload `rerequested`.</li><li> `requested_action`: Jemand hat die Ausführung einer Aktion angefordert, die deine App bereitstellt. Nur die {% data variables.product.prodname_github_app %}, für die jemand die Ausführung einer Aktion anfordert, erhält die Payload `requested_action`. Weitere Informationen zu Überprüfungsausführungen und angeforderten Aktionen findest du unter [Überprüfungsausführungen und angeforderte Aktionen](/rest/reference/checks#check-runs-and-requested-actions).</li></ul>
`check_run`|`object` | [check_run](/rest/reference/checks#get-a-check-run).
`check_run[status]`|`string` | Der aktuelle Status der Überprüfungsausführung. Kann `queued`, `in_progress` oder `completed` sein.
`check_run[conclusion]`|`string` | Das Ergebnis der abgeschlossenen Überprüfungsausführung. Mögliche Werte: `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` oder `stale`. Dieser Wert ist `null`, bis die Überprüfungsausführung `completed` ist.
`check_run[name]`|`string` | Der Name der Überprüfungsausführung.
`check_run[check_suite][id]`|`integer` | Die ID der Überprüfungssammlung, zu der diese Überprüfungsausführung gehört.
`check_run[check_suite][pull_requests]`|`array`| Ein Array aus Pull Requests, die dieser Überprüfungssammlung entsprechen. Ein Pull Request entspricht einer Überprüfungssammlung, wenn sie denselben Wert für `head_branch` aufweisen.<br/><br/>**Hinweis:**<ul><li>Der `head_sha`-Wert einer Überprüfungssammlung kann vom `sha`-Wert des Pull Requests abweichen, wenn nachfolgende Pushes in den Pull Request erfolgen.</li><li>Wenn sich der `head_branch` der Überprüfungssammlung in einem Forkrepository befindet, lautet der Wert `null`, und das `pull_requests`-Array ist leer.</li></ul>
`check_run[check_suite][deployment]`|`object`| Eine Bereitstellung in einer Repositoryumgebung. Dies wird nur aufgefüllt, wenn die Überprüfungsausführung von einem {% data variables.product.prodname_actions %}-Workflowauftrag erstellt wurde, der auf eine Umgebung verweist.
`requested_action`|`object` | Die vom Benutzer angeforderte Aktion.
`requested_action[identifier]`|`string` | Der Integratorverweis der vom Benutzer angeforderten Aktion.
