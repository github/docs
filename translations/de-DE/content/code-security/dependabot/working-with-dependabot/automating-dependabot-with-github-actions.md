---
title: Automatisieren von Dependabot mit GitHub Actions
intro: 'Beispiele für die Verwendung von {% data variables.product.prodname_actions %} zum Automatisieren allgemeiner {% data variables.product.prodname_dependabot %}-bezogener Aufgaben.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
ms.openlocfilehash: 3280b42309b388c5faf2071d6e3a39d9a0e58474
ms.sourcegitcommit: 67aba5f277f3a8ef2ab1ccb14465ae486eabaa2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165081'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zu {% data variables.product.prodname_dependabot %} und {% data variables.product.prodname_actions %}

Von {% data variables.product.prodname_dependabot %} werden Pull Requests erstellt, damit die Abhängigkeiten auf dem aktuellen Stand gehalten werden. Außerdem kannst du {% data variables.product.prodname_actions %} verwenden, um automatisierte Aufgaben auszuführen, wenn diese Pull Requests erstellt werden. Rufe beispielsweise zusätzliche Artefakte ab, füge Bezeichnungen hinzu, führe Tests aus, oder ändere den Pull Request anderweitig.

## Reagieren auf Ereignisse

Von {% data variables.product.prodname_dependabot %} können {% data variables.product.prodname_actions %}-Workflows in den zugehörigen Pull Requests und Kommentaren ausgelöst werden. Bestimmte Ereignisse werden jedoch anders behandelt.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Für Workflows, die von {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) mithilfe der Ereignisse `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment` und `deployment_status` initiiert werden, gelten die folgenden Einschränkungen: {% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` verfügt über Schreibschutzberechtigungen, es sei denn, der Administrator hat Einschränkungen entfernt.{% else %}`GITHUB_TOKEN` verfügt standardmäßig über Schreibschutzberechtigungen.{% endif %}
- {% ifversion ghes = 3.3 %}Auf Geheimnisse kann nicht zugegriffen werden, es sei denn, der Administrator hat Einschränkungen entfernt.{% else %}Geheimnisse werden aus {% data variables.product.prodname_dependabot %}-Geheimnissen gefüllt. {% data variables.product.prodname_actions %}-Geheimnisse sind nicht verfügbar.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Für Workflows, die von {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) mithilfe des Ereignisses `pull_request_target` initiiert werden, ist das `GITHUB_TOKEN` schreibgeschützt, und Geheimnisse sind nicht verfügbar, wenn der Basisverweis des Pull Requests von {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) erstellt wurde.
{% endif %}

{% ifversion actions-stable-actor-ids %} Diese Einschränkungen gelten auch dann, wenn der Workflow von einem anderen Akteur erneut ausgeführt wird.{% endif %}

Weitere Informationen findest du unter [Aufrechterhalten der Sicherheit von GitHub Actions und GitHub-Workflows: Verhindern von pwn-Anforderungen](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

{% ifversion fpt or ghec or ghes > 3.3 %}

### Ändern von `GITHUB_TOKEN`-Berechtigungen

Standardmäßig erhalten {% data variables.product.prodname_actions %}-Workflows, die von {% data variables.product.prodname_dependabot %} ausgelöst werden, ein `GITHUB_TOKEN` mit Schreibschutzberechtigungen. Du kannst den Schlüssel `permissions` in deinem Workflow verwenden, um den Zugriff für das Token zu erhöhen:

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

Weitere Informationen findest du unter [Ändern der Berechtigungen für GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token).

### Zugreifen auf Geheimnisse

Wenn von einem {% data variables.product.prodname_dependabot %}-Ereignis ein Workflow ausgelöst wird, sind die einzigen für den Workflow verfügbaren Geheimnisse {% data variables.product.prodname_dependabot %}-Geheimnisse. {% data variables.product.prodname_actions %}-Geheimnisse sind nicht verfügbar. Daher musst du alle Geheimnisse, die von einem Workflow verwendet werden, der von {% data variables.product.prodname_dependabot %}-Ereignissen ausgelöst wird, als {% data variables.product.prodname_dependabot %}-Geheimnisse speichern. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot).

{% data variables.product.prodname_dependabot %}-Geheimnisse werden dem `secrets`-Kontext hinzugefügt und mit exakt derselben Syntax wie Geheimnisse für {% data variables.product.prodname_actions %} referenziert. Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).

Wenn du über einen Workflow verfügst, der von {% data variables.product.prodname_dependabot %} und auch von anderen Akteuren ausgelöst wird, besteht die einfachste Lösung darin, das Token mit den erforderlichen Berechtigungen in einer Aktion und in einem {% data variables.product.prodname_dependabot %}-Geheimnis mit identischen Namen zu speichern. Anschließend kann der Workflow einen einzelnen Aufruf dieser Geheimnisse enthalten. Wenn das Geheimnis für {% data variables.product.prodname_dependabot %} einen anderen Namen aufweist, verwendest du Bedingungen, um die richtigen Geheimnisse für unterschiedliche Akteure anzugeben. Beispiele für die Verwendung von Bedingungen findest du unter [Gängige Automatisierungen](#common-dependabot-automations).

Für den mittels Benutzernamen und Kennwort erfolgenden Zugriff auf eine private Containerregistrierung in AWS muss ein Workflow ein Geheimnis für `username` und `password` enthalten. Wenn von {% data variables.product.prodname_dependabot %} im nachstehenden Beispiel der Workflow ausgelöst wird, werden die {% data variables.product.prodname_dependabot %}-Geheimnisse mit den Namen `READONLY_AWS_ACCESS_KEY_ID` und `READONLY_AWS_ACCESS_KEY` verwendet. Wenn ein anderer Akteur den Workflow auslöst, werden die Aktionsgeheimnisse mit diesen Namen verwendet.

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**Hinweis:** Dein Websiteadministrator kann diese Einschränkungen für {% data variables.location.product_location %} außer Kraft setzen. Weitere Informationen findest du unter [Problembehandlung bei {% data variables.product.prodname_actions %} für dein Unternehmen](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows).

Wenn die Einschränkungen entfernt werden, verfügt ein Workflow, der von {% data variables.product.prodname_dependabot %} ausgelöst wird, über Zugriff auf {% data variables.product.prodname_actions %}-Geheimnisse. Außerdem kann vom Workflow der Begriff `permissions` zum Erhöhen des `GITHUB_TOKEN`-Standardumfangs von schreibgeschütztem Zugriff verwendet werden. Du kannst die spezifischen Schritte in den Abschnitten „Behandeln von `pull_request`-Ereignissen“ und „Behandeln von `push`-Ereignissen“ ignorieren, da sie nicht mehr gelten.

{% endnote %}

### Behandlung von `pull_request`-Ereignissen

Wenn der Workflow Zugriff auf Geheimnisse oder ein `GITHUB_TOKEN` mit Schreibberechtigungen benötigt, hast du zwei Optionen: Verwende `pull_request_target` oder zwei separate Workflows. In diesem Abschnitt wird die Verwendung von `pull_request_target` genauer erläutert. Die Verwendung von zwei Workflows wird weiter unten im Abschnitt [Behandeln von `push`-Ereignissen](#handling-push-events) ausführlicher beschrieben.

Nachfolgend findest du ein einfaches Beispiel für einen `pull_request`-Workflow, der jetzt möglicherweise fehlschlägt:

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

Du kannst `pull_request` durch `pull_request_target` ersetzen; pull_request_target wird für Pull Requests von Forks und explizit dazu verwendet, den `HEAD` des Pull Requests auszuchecken.

{% warning %}

**Warnung:** Die Verwendung von `pull_request_target` als Ersatz für `pull_request` ist mit der Gefahr verbunden, dass unsicheres Verhalten auftreten kann. Es wird empfohlen, die Methode zu verwenden, die zwei Workflows beinhaltet, wie unten in [Behandeln von `push`-Ereignissen](#handling-push-events) beschrieben.

{% endwarning %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Es wird auch dringend empfohlen, den Umfang der Berechtigungen zu reduzieren, die dem `GITHUB_TOKEN` gewährt werden, damit verhindert wird, dass ein Token mit mehr Berechtigungen als erforderlich verfügbar gemacht wird. Weitere Informationen findest du unter [Berechtigungen für das `GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token).

### Behandlung von `push`-Ereignissen

Da es keine `pull_request_target`-Entsprechung für `push`-Ereignisse gibt, musst du zwei Workflows verwenden: einen nicht vertrauenswürdigen Workflow, der mit dem Hochladen von Artefakten endet. Dadurch wird ein zweiter vertrauenswürdiger Workflow ausgelöst, bei dem Artefakte heruntergeladen werden und die Verarbeitung fortgesetzt wird.

Im ersten Workflow werden alle nicht vertrauenswürdigen Arbeiten ausgeführt:

{% raw %}

```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```

{% endraw %}

Im zweiten Workflow werden vertrauenswürdige Arbeiten ausgeführt, nachdem der erste Workflow erfolgreich abgeschlossen wurde:

{% raw %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types:
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```

{% endraw %}

{% endif %}

### Manuelles erneutes Ausführen eines Workflows

{% ifversion actions-stable-actor-ids %}

Wenn du einen Dependabot-Workflow manuell erneut ausführst, wird er mit den gleichen Berechtigungen ausgeführt wie zuvor, auch wenn der/die Benutzer*in, von dem bzw. der die erneute Ausführung initiiert wurde, unterschiedliche Berechtigungen aufweist. Weitere Informationen findest du unter [Erneutes Ausführen von Workflows und Aufträgen](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

{% else %}

Du kannst einen fehlgeschlagenen Dependabot-Workflow auch manuell erneut ausführen. Der Workflow wird dann mit einem Lese-/Schreibtoken und Zugriff auf Geheimnisse ausgeführt. Bevor du einen fehlgeschlagenen Workflow manuell erneut ausführst, solltest du immer die aktualisierte Abhängigkeit überprüfen. So kannst du sicherzustellen, dass durch die Änderung kein böswilliges oder unbeabsichtigtes Verhalten eingeführt wird.

{% endif %}

## Gängige Dependabot-Automatisierungen

Nachstehend sind mehrere gängige Szenarios aufgeführt, in denen mithilfe von {% data variables.product.prodname_actions %} eine Automatisierung durchgeführt werden kann.

{% ifversion ghes = 3.3 %}

{% note %}

**Hinweis:** Wenn der Websiteadministrator Einschränkungen für {% data variables.product.prodname_dependabot %} für {% data variables.location.product_location %} außer Kraft gesetzt hat, kannst du in den folgenden Workflows `pull_request` anstelle von `pull_request_target` verwenden.

{% endnote %}

{% endif %}

### Abrufen von Metadaten zu einem Pull Request

Eine große Anzahl von Automatisierungen erfordert Wissen über den Inhalt des Pull Requests: Du musst den Abhängigkeitsnamen kennen und wissen, ob es um eine Produktionsabhängigkeit geht und ob es sich um ein Haupt-, Neben- oder Patchupdate handelt.

Die Aktion `dependabot/fetch-metadata` macht all diese Informationen für dich verfügbar:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```

{% endraw %}

{% endif %}

Weitere Informationen findest du im [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata)-Repository.

### Bezeichnen eines Pull Requests

Wenn du über andere Automatisierungs- oder Selektierungsworkflows verfügst, die auf {% data variables.product.prodname_dotcom %}-Bezeichnungen basieren, kannst du eine Aktion konfigurieren, um Bezeichnungen basierend auf den bereitgestellten Metadaten zuzuweisen.

Wenn du beispielsweise alle Produktionsabhängigkeitsaktualisierungen mit einer Bezeichnung kennzeichnen möchtest:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% endif %}

### Genehmigen eines Pull Requests

Wenn du Pull Requests von Dependabot automatisch genehmigen möchtest, kannst du die {% data variables.product.prodname_cli %} in einem Workflow verwenden:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

### Aktivieren der automatischen Zusammenführung für einen Pull Request

Wenn du Maintainern erlauben möchtest, bestimmte Pull Requests für automatisches Mergen zu markieren, kannst du die automatische Mergefunktion von {% data variables.product.prodname_dotcom %} nutzen. Dadurch kann der Pull Request zusammengeführt werden, wenn Tests und Genehmigungen der Regeln für den Schutz von Branches erfolgreich erfüllt werden. Weitere Informationen findest du unter [Automatisches Zusammenführen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) und [Verwalten einer Branchschutzregel](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule).

{% note %}

**Hinweis:** Wenn du Statusüberprüfungen zum Testen von Pull Requests verwendest, solltest du **Statusüberprüfungen müssen vor dem Zusammenführen bestanden werden** für den Zielbranch für Pull Requests von {% data variables.product.prodname_dependabot %} aktivieren. Diese Branchschutzregel stellt sicher, dass Pull Requests nicht zusammengeführt werden, es sei denn, alle erforderlichen Statusüberprüfungen sind erfolgreich. Weitere Informationen findest du unter [Informationen zu Branchschutzregeln](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule).

{% endnote %}

Du kannst stattdessen {% data variables.product.prodname_actions %} und die {% data variables.product.prodname_cli %} verwenden. Es folgt ein Beispiel, in dem alle Patchupdates automatisch in `my-dependency` gemergt werden:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
  pull-requests: write
  
jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

## Problembehandlung bei fehlgeschlagenen Workflowausführungen

Überprüfe Folgendes, wenn die Workflowausführung fehlschlägt:

{% ifversion ghes = 3.3 %}

- Du führst den Workflow nur aus, wenn er vom richtigen Akteur ausgelöst wird.
- Du checkst den richtigen `ref` für den `pull_request` aus.
- Du versuchst nicht, innerhalb eines von Dependabot ausgelösten `pull_request`-, `pull_request_review`-, `pull_request_review_comment`- oder `push`-Ereignisses auf Geheimnisse zuzugreifen.
- Du versuchst nicht, innerhalb eines von Dependabot ausgelösten `pull_request`-, `pull_request_review`-, `pull_request_review_comment`- oder `push`-Ereignisses `write`-Aktionen durchzuführen.

{% else %}

- Du führst den Workflow nur aus, wenn er vom richtigen Akteur ausgelöst wird.
- Du checkst den richtigen `ref` für den `pull_request` aus.
- Die Geheimnisse sind in {% data variables.product.prodname_dependabot %}-Geheimnissen und nicht als {% data variables.product.prodname_actions %}-Geheimnisse verfügbar.
- Du verfügst über ein `GITHUB_TOKEN` mit den richtigen Berechtigungen.

{% endif %}

Informationen zum Schreiben und Debuggen von {% data variables.product.prodname_actions %} findest du unter [Informationen zu GitHub Actions](/actions/learn-github-actions).
