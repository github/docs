---
title: Uso de la CLI de GitHub en un ejecutor
shortTitle: Use the GitHub CLI on a runner
intro: 'Cómo usar características avanzadas de {% data variables.product.prodname_actions %} para la integración continua (CI).'
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111589'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Información general de ejemplo

{% data reusables.actions.example-workflow-intro-ci %} Cuando se desencadena este flujo de trabajo, ejecuta automáticamente un script que comprueba si el sitio de {% data variables.product.prodname_dotcom %} Docs tienen vínculos rotos. Si se encuentran vínculos rotos, el flujo de trabajo usa la CLI de {% data variables.product.prodname_dotcom %} para crear una incidencia de {% data variables.product.prodname_dotcom %} con los detalles.

{% data reusables.actions.example-diagram-intro %}

![Diagrama general de los pasos del flujo de trabajo](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## Características que se usan en este ejemplo

{% data reusables.actions.example-table-intro %}

| **Característica**  | **Implementación** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Uso de una acción de terceros: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Ejecución de comandos de shell en el ejecutor: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Ejecución de un script en el ejecutor: | Uso de `script/check-english-links.js` | | Generación de un archivo de salida: | Canalización de la salida mediante el operador `>` | | Comprobación de incidencias existentes mediante la {% data variables.product.prodname_cli %}: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Realización de comentarios sobre una incidencia mediante la {% data variables.product.prodname_cli %}: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## Flujo de trabajo de ejemplo

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

## Descripción del ejemplo

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Código</b></th>
    <th style="width:40%"><b>Explicación</b></th>
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

Define `workflow_dispatch` y `scheduled` como desencadenadores para el flujo de trabajo:

* `workflow_dispatch` permite ejecutar manualmente este flujo de trabajo desde la interfaz de usuario. Para más información, vea [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* El evento `schedule` permite usar la sintaxis `cron` para definir un intervalo regular para desencadenar automáticamente el flujo de trabajo. Para más información, vea [`schedule`](/actions/reference/events-that-trigger-workflows#schedule).
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

Modifica los permisos predeterminados concedidos a `GITHUB_TOKEN`. Esto variará en función de las necesidades del flujo de trabajo. Para obtener más información, consulta "[Asignación de permisos a trabajos](/actions/using-jobs/assigning-permissions-to-jobs)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Agrupa todos los trabajos que se ejecutan en el archivo de flujo de trabajo.
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

Define un trabajo con el identificador `check_all_english_links` y el nombre `Check all links`, que se almacena en la clave `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

El trabajo `check_all_english_links` solo se ejecuta si el repositorio se denomina `docs-internal` y está dentro de la organización `github`. De lo contrario, el trabajo se marca como _omitido_.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Configura el job para ejecutarse en un ejecutor Ubuntu Linux. Esto significa que el trabajo se ejecutará en una máquina virtual nueva que se hospede en {% data variables.product.prodname_dotcom %}. Para obtener ejemplos de sintaxis con otros ejecutores, consulta «[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)».
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

Crea variables de entorno personalizadas y vuelve a definir la variable `GITHUB_TOKEN` integrada para usar un [secreto](/actions/security-guides/encrypted-secrets) personalizado. Se hará referencia a estas variables más adelante en el flujo de trabajo.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todos los pasos que se ejecutarán como parte del trabajo `check_all_english_links`. Cada trabajo del flujo de trabajo tiene su propia sección `steps`.
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

La palabra clave `uses` le indica al trabajo que recupere la acción denominada `actions/checkout`. Esta es una acción que revisa tu repositorio y lo descarga al ejecutor, lo que te permite ejecutar acciones contra tu código (tales como las herramientas de prueba). Debes utilizar la acción de verificación cada que tu flujo de trabajo se ejecute contra el código del repositorio o cada que estés utilizando una acción definida en el repositorio.
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

En este paso, se usa la acción `actions/setup-node` para instalar la versión especificada del paquete de software `node` en el ejecutor, lo que te da acceso al comando `npm`.
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

La palabra clave `run` indica al trabajo que ejecute un comando en el ejecutor. En este caso, los comandos `npm ci` y `npm run build` se ejecutan como pasos independientes para instalar y compilar la aplicación Node.js en el repositorio.
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

Este comando `run` ejecuta un script que se almacena en el repositorio en `script/check-english-links.js` y canaliza la salida a un archivo denominado `broken_links.md`.
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

Si el script `check-english-links.js` detecta vínculos rotos y devuelve un estado de salida distinto de cero (error), usa un [comando de flujo de trabajo](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) para establecer una salida que tenga el valor de la primera línea del archivo `broken_links.md` (se usa el paso siguiente).
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

Usa la acción `peter-evans/create-issue-from-file` para crear una incidencia de {% data variables.product.prodname_dotcom %}. Este ejemplo se ancla a una versión específica de la acción mediante el SHA `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e`.
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

Usa [`gh issue list`](https://cli.github.com/manual/gh_issue_list) para buscar la incidencia creada previamente a partir de ejecuciones anteriores. Se le asigna el [alias](https://cli.github.com/manual/gh_alias_set) `gh list-reports` para facilitar el procesamiento en pasos posteriores. Para obtener la dirección URL de la incidencia, la expresión `jq` procesa la salida JSON resultante.

Después, se usa [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para agregar un comentario a la nueva incidencia que vincula a la anterior.
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

Si una incidencia de una ejecución anterior está abierta y asignada a alguien, usa [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para agregar un comentario con un vínculo a la nueva incidencia.
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

Si una incidencia de una ejecución anterior está abierta y no está asignada a nadie, haz lo siguiente:

* Usa [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para agregar un comentario con un vínculo a la nueva incidencia.
* Usa [`gh issue close`](https://cli.github.com/manual/gh_issue_close) para cerrar la incidencia antigua.
* Usa [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) para editar la incidencia antigua y quitarla de un panel de proyecto específico de {% data variables.product.prodname_dotcom %}.
</td>
</tr>
</tbody>
</table>

## Pasos siguientes

{% data reusables.actions.learning-actions %}
