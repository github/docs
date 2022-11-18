---
title: Utilisation de l’interface CLI GitHub sur un exécuteur
shortTitle: Use the GitHub CLI on a runner
intro: 'Comment utiliser les fonctionnalités avancées de {% data variables.product.prodname_actions %} pour l’intégration continue (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: e0787d09cd194de0038d259c1aff777cc91a4a6a
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111584'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Présentation des exemples

{% data reusables.actions.example-workflow-intro-ci %} Lorsque ce workflow est déclenché, il exécute automatiquement un script qui vérifie si le site {% data variables.product.prodname_dotcom %} Docs a des liens brisés. Si des liens brisés sont trouvés, le workflow utilise l’interface CLI {% data variables.product.prodname_dotcom %} pour créer un problème {% data variables.product.prodname_dotcom %} avec les détails.

{% data reusables.actions.example-diagram-intro %}

![Diagramme de vue d’ensemble des étapes de workflow](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## Fonctionnalités utilisées dans cet exemple

{% data reusables.actions.example-table-intro %}

| **Fonctionnalité**  | **Implémentation** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Utilisation d’une action tierce : | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Exécution de commandes shell sur l’exécuteur : | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Exécution d’un script sur l’exécuteur : | Utilisation de `script/check-english-links.js` | | Génération d’un fichier de sortie : | Redirection de la sortie en utilisant l’opérateur `>` | | Vérification des problèmes existants en utilisant {% data variables.product.prodname_cli %} : | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Commenter un problème en utilisant {% data variables.product.prodname_cli %} : | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## Exemple de flux de travail

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/6e01c0653836c10d7e092a17566a2c88b10504ce/.github/workflows/check-all-english-links.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:70%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: Check all English links

# **What it does**: This script once a day checks all English links and reports in issues.
# **Why we have it**: We want to know if any links break.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  schedule:
    - cron: '40 19 * * *' # once a day at 19:40 UTC / 11:40 PST

permissions:
  contents: read
  issues: write

jobs:
  check_all_english_links:
    name: Check all links
    if: github.repository == 'github/docs-internal'
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      FIRST_RESPONDER_PROJECT: Docs content first responder
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
    steps:
      - name: Check out repo's default branch
        uses: {% data reusables.actions.action-checkout %}
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
      - name: npm ci
        run: npm ci
      - name: npm run build
        run: npm run build
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md

      # check-english-links.js returns 0 if no links are broken, and 1 if any links
      # are broken. When an Actions step's exit code is 1, the action run's job status
      # is failure and the run ends. The following steps create an issue for the
      # broken link report only if any links are broken, so {% raw %}`if: ${{ failure() }}`{% endraw %}
      # ensures the steps run despite the previous step's failure of the job.

      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          {% raw %}NEW_REPORT_URL: 'https://github.com/${{ env.REPORT_REPOSITORY }}/issues/${{ steps.broken-link-report.outputs.issue-number }}'{% endraw %}
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }} \{% endraw %}
                                       --author {% raw %}${{ env.REPORT_AUTHOR }} \{% endraw %}
                                       --label {% raw %}'${{ env.REPORT_LABEL }}'"{% endraw %}

          # Link to the previous report from the new report that triggered this
          # workflow run.

          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"

          # If an old report is open and assigned to someone, link to the newer
          # report without closing the old report.

          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
            fi
          done

          # Link to the newer report from any older report that is still open,
          # then close the older report and remove it from the first responder's
          # project board.

          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }})"{% endraw %}
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}"{% endraw %}
            fi
          done
```
</tr>
</td>
</tbody>
</table>

## Vue d’ensemble de l’exemple

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Code</b></th>
    <th style="width:40%"><b>Explication</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: Check all English links
```
</td>
<td>

{% data reusables.actions.explanation-name-key %}
</td>
</tr>
<tr>
<td>

```yaml{:copy}
on:
  workflow_dispatch:
  schedule:
    - cron: '40 20 * * *' # once a day at 20:40 UTC / 12:40 PST
```
</td>
<td>

Définit les `workflow_dispatch` et `scheduled` comme déclencheurs du workflow :

* `workflow_dispatch` vous permet d’exécuter manuellement ce workflow à partir de l’interface utilisateur. Pour plus d’informations, consultez [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* L’événement `schedule` vous permet d’utiliser la syntaxe `cron` pour définir un intervalle régulier pour déclencher automatiquement le workflow. Pour plus d’informations, consultez [`schedule`](/actions/reference/events-that-trigger-workflows#schedule).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  issues: write
```
</td>
<td>

Modifie les autorisations par défaut octroyées à `GITHUB_TOKEN`. Cela varie en fonction des besoins de votre workflow. Pour plus d’informations, consultez « [Affectation d’autorisations à des travaux](/actions/using-jobs/assigning-permissions-to-jobs) ».
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Regroupe tous les travaux qui s’exécutent dans le fichier de workflow.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check_all_english_links:
    name: Check all links
```
</td>
<td>

Définit un travail avec l’ID `check_all_english_links` et le nom `Check all links`, qui est stocké dans la clé `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

N’exécutez le travail `check_all_english_links` que si le référentiel est nommé `docs-internal` et se trouve dans l’organisation `github`. Sinon, le travail est marqué comme étant _ignoré_.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Configure le travail pour qu’il soit exécuté sur un exécuteur Ubuntu Linux. Cela signifie que le travail sera exécuté sur une machine virtuelle fraîche hébergée par {% data variables.product.prodname_dotcom %}. Pour obtenir des exemples de syntaxe utilisant d’autres exécuteurs, consultez [« Syntaxe de workflow pour {% data variables.product.prodname_actions %} ».](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
```
</td>
<td>

Crée des variables d’environnement personnalisées et redéfinit la variable intégrée `GITHUB_TOKEN` pour utiliser un [secret](/actions/security-guides/encrypted-secrets) personnalisé. Ces variables seront référencées plus loin dans le workflow.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Regroupe toutes les étapes qui s’exécutent dans le cadre du travail `check_all_english_links`. Chaque travail du workflow a sa propre section `steps`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo's default branch
        uses: {% data reusables.actions.action-checkout %}
```
</td>
<td>

Le mot clé `uses` indique au travail de récupérer l’action nommée `actions/checkout`. Il s’agit d’une action qui extrait votre dépôt et le télécharge dans l’exécuteur, ce qui vous permet d’exécuter des actions sur votre code (par exemple des outils de test). Vous devez utiliser l’action de validation chaque fois que votre workflow s’exécutera sur le code du référentiel ou que vous utilisez une action définie dans le référentiel.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.8.x
          cache: npm
```
</td>
<td>

Cette étape utilise l’action `actions/setup-node` pour installer la version spécifiée du package logiciel `node` sur l’exécuteur, ce qui vous donne accès à la commande `npm`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run the "npm ci" command
        run: npm ci
      - name: Run the "npm run build" command
        run: npm run build
```
</td>
<td>

Le mot clé `run` indique au travail d’exécuter une commande sur l’exécuteur. Dans ce cas, les commandes `npm ci` et `npm run build` sont exécutées en tant qu’étapes distinctes pour installer et générer l’application Node.js dans le référentiel.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md
```
</td>
<td>

Cette commande `run` exécute un script qui est stocké dans le référentiel à l’emplacement `script/check-english-links.js`, et dirige la sortie vers un fichier appelé `broken_links.md`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
```
</td>
<td>

Si le script `check-english-links.js` détecte les liens brisés et retourne un état de sortie non nul (échec), utilisez une [commande de workflow](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) pour définir une sortie qui a la valeur de la première ligne du fichier `broken_links.md` (nous l’utiliserons à l’étape suivante).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
```
</td>
<td>

Utilise l’action `peter-evans/create-issue-from-file` pour créer un nouveau problème {% data variables.product.prodname_dotcom %}. Cet exemple est épinglé à une version spécifique de l’action, à l’aide du SHA `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          NEW_REPORT_URL: 'https://github.com/{% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}/issues/{% raw %}${{ steps.broken-link-report.outputs.issue-number }}{% endraw %}'
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %} \
                                       --author {% raw %}${{ env.REPORT_AUTHOR }}{% endraw %} \
                                       --label '{% raw %}${{ env.REPORT_LABEL }}{% endraw %}'"
          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"
```
</td>
<td>

Utilise [`gh issue list`](https://cli.github.com/manual/gh_issue_list) pour localiser le problème créé précédemment à partir d’exécutions antérieures. Il s’agit d’un [alias](https://cli.github.com/manual/gh_alias_set) de `gh list-reports` pour un traitement plus simple dans les étapes ultérieures. Pour obtenir l’URL du problème, l’expression `jq` traite la sortie JSON résultante.

[`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) est ensuite utilisé pour ajouter un commentaire au nouveau problème qui renvoie au précédent.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != "${{ env.NEW_REPORT_URL }}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report](${{ env.NEW_REPORT_URL }})"
            fi
          done
```
</td>
<td>

Si un problème d’une exécution précédente est ouvert et affecté à une personne, utilisez [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) pour ajouter un commentaire avec un lien vers le nouveau problème.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != "{% raw %}${{ env.NEW_REPORT_URL }}{% endraw %}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}{% endraw %}"
            fi
          done
```
</td>
<td>

Si un problème d’une exécution précédente est ouvert et n’est attribué à personne, alors :

* Utilisez [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) pour ajouter un commentaire avec un lien vers le nouveau problème.
* Utilisez [`gh issue close`](https://cli.github.com/manual/gh_issue_close) pour fermer l’ancien problème.
* Utilisez [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) pour modifier l’ancien problème afin de le supprimer d’un tableau de projet spécifique {% data variables.product.prodname_dotcom %}.
</td>
</tr>
</tbody>
</table>

## Étapes suivantes

{% data reusables.actions.learning-actions %}
