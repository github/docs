---
title: Verwalten einer Branchschutzregel
intro: "Du kannst eine Regel für den Schutz von Branches erstellen, um bestimmte Workflows für einen oder mehrere Branches zu erzwingen. Dazu gehört z.\_B. eine erforderliche Genehmigungsüberprüfung oder das Übergeben von Statusprüfungen für alle Pull Requests, die im geschützten Branch zusammengeführt wurden."
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
ms.openlocfilehash: aed3ab7599d8c74c16d95e4667e94aa3264c9491
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614175'
---
## Informationen zu Branchschutzregeln

{% data reusables.repositories.branch-rules-example %}

Du kannst eine Regel für alle aktuellen und zukünftigen Branches in deinem Repository mit der Platzhaltersyntax `*` erstellen. Da {% data variables.product.company_short %} das Flag `File::FNM_PATHNAME` für die Syntax `File.fnmatch` verwendet, entspricht das Platzhalterzeichen keinen Verzeichnistrennzeichen (`/`). `qa/*` entspricht beispielsweise allen Branches, die mit `qa/` beginnen und einen einzelnen Schrägstrich enthalten. Du kannst mit `qa/**/*` mehrere Schrägstriche einschließen, und du kannst die Zeichenfolge `qa` mit `qa**/**/*` erweitern, um die Regel auszudehnen. Weitere Informationen zu Syntaxoptionen für Branchregeln findest du in der [Dokumentation zu fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Wenn ein Repository mehrere Branch-Schutzregeln hat, die dieselben Branches betreffen, haben die Regeln, die einen spezifischen Branch-Namen enthalten, die höchste Priorität. Wenn es mehr als eine Branch-Schutzregel gibt, die auf den gleichen spezifischen Branch-Namen verweist, hat die zuerst erstellte Branch-Regel eine höhere Priorität.

Branchschutzregeln mit einem Sonderzeichen, wie `*`, `?` oder `]` werden in der Reihenfolge ihrer Erstellung angewandt, sodass ältere Regeln mit diesen Zeichen eine höhere Priorität haben.

Um eine Ausnahme für eine vorhandene Branch-Regel zu erstellen, erstellst du eine neue Branch-Schutzregel mit höherer Priorität, z. B. eine Branch-Regel für einen bestimmten Branch-Namen.

Weitere Informationen zu den verfügbaren Branchschutzeinstellungen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches).

## Erstellen einer Branchschutzregel

Um eine Branchregel zu erstellen, darf der von dir angegebene Branch noch nicht im Repository vorhanden sein.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %} {% data reusables.repositories.add-branch-protection-rules %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. Aktiviere optional erforderliche Pull Requests.
   - Wähle unter „Übereinstimmende Branches schützen“ die Option **Pull Request vor dem Zusammenführen anfordern** aus.
     ![Kontrollkästchen für Einschränkungen bei Pull Request-Reviews](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Wenn du optional Genehmigungen erzwingen möchtest, bevor ein Pull Request zusammengeführt werden kann, wähle **Genehmigungen erforderlich**, klicke auf das Dropdownmenü **Erforderliche Anzahl von Genehmigungen vor dem Zusammenführen**, und wähle dann die Anzahl der Genehmigungen aus, die für den Branch erzwungen werden sollen.
     ![Dropdownmenü zur Auswahl der Anzahl an erforderlichen genehmigenden Reviews](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. Aktiviere optional erforderliche Pull Requests-Reviews.
   - Wähle unter „Übereinstimmende Branches schützen“ die Option **Pull Request-Reviews vor dem Zusammenführen anfordern** aus.
     ![Kontrollkästchen für Einschränkungen bei Pull Request-Reviews](/assets/images/help/repository/PR-reviews-required.png)
   - Klicke auf das Dropdownmenü **Erforderliche genehmigende Reviews**, und wähle dann die Anzahl an genehmigenden Reviews aus, die du für den Branch erzwingen möchtest. 
     ![Dropdownmenü zur Auswahl der Anzahl an erforderlichen genehmigenden Reviews](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - Um optional genehmigende Pull Request-Reviews zu überspringen, wenn ein Commit mit geändertem Code an den Branch gepullt wird, wähle **Alte Pull Request-Genehmigungen verwerfen, wenn neue Commits gepusht werden** aus.
     ![Kontrollkästchen „Alte Pull Request-Genehmigungen verwerfen, wenn neue Commits gepusht werden“](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Wähle optional **Review von Codebesitzern erforderlich** aus, damit ein Review von einem Codebesitzer erforderlich ist, wenn der Pull Request sich auf Code auswirkt, für den es einen bestimmten Besitzer gibt. Weitere Informationen findest du unter [Informationen zu Codebesitzern](/github/creating-cloning-and-archiving-repositories/about-code-owners).
     ![Erfordern einer Überprüfung von Codebesitzern](/assets/images/help/repository/PR-review-required-code-owner.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - Du kannst optional zulassen, dass bestimmte Akteure Code in den Branch pushen, ohne Pull Requests zu erstellen, wenn sie erforderlich sind, indem du **Angegebenen Akteuren erlauben, erforderliche Pull Requests zu umgehen** auswählst. Suche dann die Akteure, die das Erstellen eine Pull Requests überspringen dürfen, und wähle sie aus.
     ![Kontrollkästchen „Bestimmten Akteuren erlauben, erforderliche Pull Requests zu umgehen“]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - Wenn das Repository zu einer Organisation gehört, kannst du optional **Einschränken, wer Pull Request-Reviews verwerfen kann** auswählen. Suche dann die Akteure, die Pull Request-Reviews verwerfen dürfen, und wähle sie aus. Weitere Informationen findest du unter [Schließen eines Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).
     ![Kontrollkästchen „Einschränken, wer Pull Request-Reviews verwerfen kann“]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
1. Aktiviere optional erforderliche Statusüberprüfungen. Weitere Informationen findest du unter [Informationen zu Statusüberprüfungen](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).
   - Wähle **Statusüberprüfungen müssen vor dem Zusammenführen bestanden werden** aus.
     ![Option für erforderliche Statusüberprüfungen](/assets/images/help/repository/required-status-checks.png)
   - Wenn du optional sicherstellen möchtest, dass Pull Requests mit dem neuesten Code im geschützten Branch getestet werden, wählst du **Aktualität von Branches vor dem Mergen erfordern** aus.
     ![Kontrollkästchen für lockere oder strenge erforderliche Statusüberprüfungen](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Suche nach Statusüberprüfungen, und wähle die gewünschten Überprüfungen aus.
     ![Durchsuchen der Schnittstelle nach verfügbaren Statusprüfungen mit einer Liste der erforderlichen Überprüfungen](/assets/images/help/repository/required-statuses-list.png)
1. Optional kannst du auch **Erfordern der Klärung von Konversationen vor dem Zusammenführen** auswählen.
  ![Option „Auflösung von Konversationen vor dem Mergen erfordern“](/assets/images/help/repository/require-conversation-resolution.png)
1. Wähle optional **Erfordern signierter Commits** aus.
  ![Option „Erfordern signierter Commits“](/assets/images/help/repository/require-signed-commits.png)
1. Wähle optional **Erfordern eines linearen Verlaufs** aus.
  ![Option „Erfordern eines linearen Verlaufs“](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. Optional kannst du Pull Requests auch mithilfe einer Mergewarteschlange zusammenführen, indem du **Erfordern von Mergewarteschlangen** auswählst. {% data reusables.pull_requests.merge-queue-references %} ![Option „Erfordern von Mergewarteschlangen“](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **Tipp:** Das Warteschlangenfeature für das Zusammenführen von Pull Requests befindet sich derzeit in der eingeschränkten öffentlichen Betaphase und kann jederzeit geändert werden. Organisationsbesitzer können frühzeitigen Zugriff auf die Betaversion anfordern, indem sie sich auf die [Warteliste](https://github.com/features/merge-queue/signup) setzen lassen.

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. Wenn du optional auswählen möchtest, in welchen Umgebungen die Änderungen vor dem Zusammenführen erfolgreich bereitgestellt werden müssen, wählst du **Erfordern erfolgreicher Bereitstellungen vor dem Mergen** und dann die Umgebungen aus.
   ![Option „Erfordern erfolgreicher Bereitstellungen vor dem Mergen“](/assets/images/help/repository/require-successful-deployment.png) {%- endif %}
1. Optional kannst du {% ifversion bypass-branch-protections %}**Umgehung der obigen Einstellungen nicht erlauben** auswählen.
![Kontrollkästchen „Umgehung der obigen Einstellungen nicht erlauben“](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %}**Obige Regeln auf Administratoren anwenden**.
![Kontrollkästchen „Obige Regeln auf Administratoren anwenden“](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. {% ifversion fpt or ghec %} Wenn dein Repository in {% data variables.product.prodname_team %} oder {% data variables.product.prodname_ghe_cloud %},{% endif %} einer Organisation gehört, kannst du optional Brancheinschränkungen aktivieren.
   - Wähle **Einschränken der Berechtigungen zum Pushen an übereinstimmende Branches** aus.
     ![Kontrollkästchen für Brancheinschränkungen](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - Wenn du optional auch die Erstellung von übereinstimmenden Branches einschränken möchtest, wählst du **Pushes einschränken, die übereinstimmende Branches erstellen** aus.
     ![Kontrollkästchen zum Einschränken der Brancherstellung](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - Suche die Personen, Teams oder Apps, die die Berechtigung zum Pushen in den geschützten Branch erhalten sollen, und wähle sie aus, oder erstelle einen übereinstimmenden Branch.
     ![Suche für Brancheinschränkungen]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. Wähle unter „Regeln für jedermann, Administratoren inbegriffen“ die Option **Erlaube erzwungene Pushes** aus.
  ![Option „Erlaube erzwungene Pushes“](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %} Wähle danach aus, wer Pushes in den Branch erzwingen darf.
    - Wähle **Jeder** aus, um allen Personen, die mindestens über Schreibberechtigungen für das Repository verfügen, das erzwungene Pushen in den Branch zu erlauben (einschließlich jenen mit Administratorberechtigungen).
    - Wähle **Angeben, wer Pushes erzwingen darf** aus, damit nur bestimmte Akteure Pushes in den Branch erzwingen können. Suche dann nach diesen Akteuren, und wähle sie aus.
      ![Screenshot der Optionen zum Angeben der Personen, die Pushen erzwingen können]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    Weitere Informationen zu erzwungenen Pushes findest du unter [Zulassen von erzwungenen Pushes](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes).
1. Wähle optional **Löschungen zulassen** aus.
  ![Option zum Zulassen von Branchlöschungen](/assets/images/help/repository/allow-branch-deletions.png)
1. Klicken Sie auf **Erstellen**.

## Bearbeiten einer Branchschutzregel

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Klicke rechts neben der Branchschutzregel, die du bearbeiten möchtest, auf **Bearbeiten**.
  ![Schaltfläche „Bearbeiten“](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Nimm die gewünschten Änderungen an der Branchschutzregel vor.
1. Klicke auf **Änderungen speichern**.
  ![Schaltfläche „Nachricht bearbeiten“](/assets/images/help/repository/save-branch-protection-rule.png)

## Löschen einer Branchschutzregel

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Klicke rechts neben der Branchschutzregel, die du löschen möchtest, auf **Löschen**.
    ![Schaltfläche „Löschen“](/assets/images/help/repository/delete-branch-protection-rule.png)
