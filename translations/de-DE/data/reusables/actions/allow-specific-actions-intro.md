---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883497"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### Zulassen ausgewählter Aktionen{% ifversion actions-workflow-policy %} und das Ausführen wiederverwendbarer Workflows{% endif %}

Wenn du {% data reusables.actions.policy-label-for-select-actions-workflows %} auswählst, werden lokale Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} zugelassen, und du verfügst über zusätzliche Optionen, andere spezifische Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} zu erlauben:

- **Zulassen von Aktionen, die durch {% data variables.product.prodname_dotcom %} erstellt wurden:** Du kannst alle durch {% data variables.product.prodname_dotcom %} erstellte Aktionen zum Verwenden durch Workflows erlauben. Aktionen, die durch {% data variables.product.prodname_dotcom %} erstellt wurden, befinden sich in den Organisationen `actions` und `github`. Weitere Informationen findest du in den Organisationen [`actions`](https://github.com/actions) und [`github`](https://github.com/github).
- **Marketplace-Aktionen durch überprüfte Ersteller zulassen:** {% ifversion ghes or ghae %}Diese Option ist verfügbar, wenn du {% data variables.product.prodname_github_connect %} aktiviert und mit {% data variables.product.prodname_actions %} konfiguriert hast. Weitere Informationen findest du unter [Aktivieren des automatischen Zugriffs auf GitHub.com-Aktionen mit GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).{% endif %} Du kannst alle {% data variables.product.prodname_marketplace %}-Aktionen für das Verwenden durch Workflows zulassen, die von verifizierten Ersteller*innen erstellt wurden. Wenn GitHub die Ersteller*innen der Aktion als Partnerorganisation verifiziert hat, wird der Badge {% octicon "verified" aria-label="The verified badge" %} neben der Aktion auf dem {% data variables.product.prodname_marketplace %} angezeigt.
- **Zulassen angegebener Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbarer Workflows{% endif %}:** Du kannst Workflows darauf beschränken, Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} in spezifischen Organisationen und Repositorys zu verwenden.

  Um den Zugriff auf bestimmte Tags oder Commit-SHA-Werte einer Aktion{% ifversion actions-workflow-policy %} oder eines wiederverwendbaren Workflows{% endif %} einzuschränken, verwende dieselbe Syntax, die im Workflow genutzt wird, um die Aktion{% ifversion actions-workflow-policy %} oder den wiederverwendbaren Workflow{% endif %} auszuwählen.
  
  - Für eine Aktion ist die Syntax `<OWNER>/<REPO>@<TAG OR SHA>`. Verwende beispielsweise `actions/javascript-action@v1.0.1` zum Auswählen eines Tags oder `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` zum Auswählen eines SHA-Werts. Weitere Informationen findest du unter [Suchen und Anpassen von Aktionen](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions).
  {%- ifversion actions-workflow-policy %}
  - Für einen wiederverwendbaren Workflow ist die Syntax `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. Beispiel: `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow).
  {%- endif %}

  Du kannst das Platzhalterzeichen `*` verwenden, um Muster abzugleichen. Um beispielsweise alle Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} in Organisationen zu erlauben, die mit `space-org` beginnen, kannst du `space-org*/*` angeben. Um alle Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} in Repositorys zu erlauben, die mit „octocat“ beginnen, kannst du `*/octocat**@*` verwenden. Weitere Informationen zum Platzhalterzeichen `*` findest du unter [Workflowsyntax für GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet).

  {% ifversion fpt or ghec %} {% note %}

  **Hinweis:** Die Option **Zulassen angegebener Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbarer Workflows{% endif %}** ist nur in öffentlichen Repositorys mit den Plänen {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} für Organisationen oder dem Plan {% data variables.product.prodname_team %} verfügbar.

  {% endnote %} {% endif %}

In dieser Prozedur wird gezeigt, wie du der Zulassungsliste bestimmte Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} hinzufügst.
