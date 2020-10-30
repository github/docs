---
title: Informationen zu Branches
intro: 'Verwende einen Branch, um die Entwicklungsarbeit ohne Auswirkungen auf andere Branches im Repository zu isolieren. Jedes Repository hat einen Standardbranch und kann mehrere weitere Branches haben. Du kannst einen Branch mit einem anderen Branch über einen Pull Request zusammenführen.'
redirect_from:
  - /articles/working-with-protected-branches/
  - /articles/about-branches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


### Einführung in Branches

Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository.

Du erstellst einen Branch immer aus einem existierenden Branch. Typically, you might create a new branch from the default branch of your repository. Da kannst dann in diesem Branch unabhängig von Änderungen arbeiten, die andere Personen im Repository machen. Ein Branch, den Du zur Erstellung einer Funktion aufbaust, wird häufig als Funktions-Branch oder Themen-Branch bezeichnet. Weitere Informationen findest Du unter „[Branches in Deinem Repository erstellen und löschen](/articles/creating-and-deleting-branches-within-your-repository/).“

Du kannst einen Branch auch verwenden, um eine {% data variables.product.prodname_pages %}-Website zu veröffentlichen. Weitere Informationen findest Du unter „[Was sind {% data variables.product.prodname_dotcom %}-Pages?](/articles/what-is-github-pages).“

Du benötigst Schreibzugriff auf ein Repository, um einen Branch zu erstellen, einen Pull Request zu öffnen oder Branches in einem Pull Request zu löschen und wiederherzustellen.  Weitere Informationen findest Du unter „[Zugriffsberechtigungen auf {% data variables.product.product_name %}](/articles/access-permissions-on-github).“

### About the default branch

{% data reusables.branches.new-repo-default-branch %} The default branch is the branch that {% data variables.product.prodname_dotcom %} displays when anyone visits your repository. The default branch is also the initial branch that Git checks out locally out when someone clones the repository. {% data reusables.branches.default-branch-automatically-base-branch %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

By default, the default branch name is `master`, but you can set the name to anything that makes sense for your workflow. For more information on the default branch name, see "[Managing the default branch name for your repositories](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)."

{% endif %}

{% data reusables.branches.set-default-branch %}

### Mit Branches arbeiten

Sobald Du mit Deiner Arbeit zufrieden bist, kannst Du einen Pull Request eröffnen, um die Änderungen im aktuellen Branch (dem *Head*-Branch) in einem anderen Branch (den *Basis*-Branch) zusammenzuführen. Weitere Informationen findest Du unter „[Informationen zu Pull Requests](/articles/about-pull-requests).“

Nachdem ein Pull Request zusammengeführt oder geschlossen wurde, kannst Du den Head-Branch löschen, da dieser nicht mehr länger benötigt wird. Du benötigst Schreibzugriff auf dem Repository, um Branches zu löschen. Du kannst keine Branches löschen, die direkt mit einem offenen Pull Request verbunden sind. Weitere Informationen findest Du unter „[Löschen und Wiederherstellen von Branches in einem Pull Request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
Die folgenden Diagramme veranschaulichen dies.

 Hier hat jemand einen Branch mit Namen `feature1` aus dem `master`-Branch erstellt, und Du hast dann einen Branch mit Namen `feature2` aus dem `feature1`-Branch erstellt. Es gibt für beide Branches offene Pull Requests. Der Pfeil zeigt den aktuellen Basis-Branch für jeden Pull Request an. Zu diesem Zeitpunkt ist `feature1` der Basis-Branch für `feature2`. Wenn nun der Pull Request für `feature2` zusammengeführt wird, wird der `feature2`-Branch in `feature1` zusammengeführt.

 ![Schaltfläche „Merge pull request“ (Pull Request zusammenführen)](/assets/images/help/branches/pr-retargeting-diagram1.png)

Im nächsten Diagramm hat jemand den Pull Request für `feature1` in den `master`-Branch zusammengeführt und danach den `feature1`-Branch gelöscht. Als Resultat hat {% data variables.product.prodname_dotcom %} automatisch den Pull Request für `feature2` umgeleitet, sodass dessen Basis-Branch jetzt `master` ist.

 ![Schaltfläche „Merge pull request“ (Pull Request zusammenführen)](/assets/images/help/branches/pr-retargeting-diagram2.png)

Wenn Du jetzt den `feature2` Pull Request zusammenführst, wird er in den `master`-Branch zusammengeführt.
{% endif %}

### Mit geschützten Branches arbeiten

Repository-Administratoren können den Schutz für einen Branch aktivieren. Wenn Du auf einem geschützten Branch arbeitest, kannst Du den Push an den Branch nicht löschen oder erzwingen. Repository-Administratoren können zusätzlich mehrere andere Einstellungen für geschützte Branches aktivieren, um verschiedene Workflows zu erzwingen, bevor ein Branch zusammengeführt werden kann.

{% note %}

**Hinweis:** Wenn Du ein Repository-Administrator bist, kannst Du Pull Requests auf geschützten Branches zusammenführen, auch wenn der Pull Request nicht den Anforderungen entspricht, es sei denn, der Branch-Schutz wurde auf „Include administrators“ (Administratoren einbeziehen) festgelegt.

{% endnote %}

Um zu ermitteln, ob Dein Pull Request zusammengeführt werden kann, wirf einen Blick in das Merge-Fenster am unteren Rand der Registerkarte **Conversation** (Unterhaltung) des Pull Requests. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/articles/about-protected-branches).“

Wenn ein Branch geschützt ist, trifft Folgendes zu:

- Du kannst einen Push an den Branch nicht löschen oder erzwingen.
- Wenn die erforderlichen Statuschecks für den Branch aktiviert sind, kannst Du Änderungen erst dann in den Branch zusammenführen, wenn alle erforderlichen CI-Tests bestanden sind. Weitere Informationen findest Du unter „[Informationen zu Statuschecks](/articles/about-status-checks).“
- Wenn erforderliche Pull-Request-Reviews auf dem Branch aktiviert sind, kannst Du Änderungen erst dann in den Branch zusammenführen, wenn alle Anforderungen der Richtlinie für Pull-Request-Reviews erfüllt sind. Weitere Informationen findest Du unter „[Einen Pull Request zusammenführen](/articles/merging-a-pull-request).“
- Wenn der erforderliche Review von einem Codeinhaber auf einem Branch aktiviert ist und der Code mit einem Inhaber durch einen Pull Request geändert wird, muss ein Codeinhaber den Pull Request genehmigen, bevor er zusammengeführt werden kann. Weitere Informationen findest Du unter „[Informationen zu Codeinhabern](/articles/about-code-owners).“
- Wenn die obligatorische Commit-Signatur auf einem Branch aktiviert ist, kannst Du keine Commits an den Branch übertragen, die nicht signiert und verifiziert sind. Weitere Informationen findest Du unter „[Informationen zur Verifizierung der Commit-Signatur](/articles/about-commit-signature-verification)“ und „[Informationen zur obligatorischen Commit-Signatur](/articles/about-required-commit-signing).“{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
- Wenn du den Konflikt-Editor von {% data variables.product.prodname_dotcom %} benutzt, um Konflikte für eine Pull Request zu beheben, die Du aus einem geschützten Branch erstellt hast, wird Dir {% data variables.product.prodname_dotcom %} helfen, einen alternativen Branch für den Pull-Request zu erstellen, so dass Deine Auflösung der Konflikte zusammengeführt werden kann. Weitere Informationen findest Du unter „[Einen Mergekonflikt auf {% data variables.product.prodname_dotcom %} beheben](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github).“{% endif %}

### Weiterführende Informationen

- „[Informationen zu Pull Requests](/articles/about-pull-requests)“
- „[Branch](/articles/github-glossary/#branch)“ im {% data variables.product.prodname_dotcom %}-Glossar
- „[Branches auf einen Blick](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)“ in der Git-Dokumentation
