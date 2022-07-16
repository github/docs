---
title: Utilizar el CLI de GitHub en un ejecutor
shortTitle: Utilizar el CLI de GitHub en un ejecutor
intro: 'Cómo utilizar características avanzadas de {% data variables.product.prodname_actions %} para la integración continua (IC).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen de ejemplo

{% data reusables.actions.example-workflow-intro-ci %} Cuando se activa este flujo de trabajo, este ejecuta automáticamente un script que verifica si el sitio de {% data variables.product.prodname_dotcom %} Docs tiene enlaces rotos. Si se encuentra algún enlace roto, el flujo de trabajo utiliza el CLI de {% data variables.product.prodname_dotcom %} para crear una propuesta de {% data variables.product.prodname_dotcom %} con los detalles.

{% data reusables.actions.example-diagram-intro %}

![Diagrama de resumen de los pasos del flujo de trabajo](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## Características utilizadas en este ejemplo

{% data reusables.actions.example-table-intro %}

| **Característica** | **Implementación** |
| ------------------ | ------------------ |
|                    |                    |
{% data reusables.actions.cron-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.if-conditions-table-entry %}
{% data reusables.actions.secrets-table-entry %}
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Using a third-party action: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Running shell commands on the runner: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Running a script on the runner: | Using `script/check-english-links.js` | | Generating an output file: | Enlazar la salida utilizando el operador `>` | | Verificar si existen propuestas utilizando el {% data variables.product.prodname_cli %}: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Coentar en una propuesta utilizando el {% data variables.product.prodname_cli %}: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## Ejemplo de flujo de trabajo

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/main/.github/workflows/check-all-english-links.yml).

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
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
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

## Cómo entender el ejemplo

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

Define a `workflow_dispatch` y a `scheduled` como activadores para el flujo de trabajo:

* El `workflow_dispatch` te permite ejecutar manualmente este flujo de trabajo desde la IU. Para obtener más información, consulta [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* El evento `schedule` te permite utilizar la sintaxis de `cron` para definir un intervalo regular para activar el flujo de trabajo automáticamente. Para obtener más información, consulta [`schedule`](/actions/reference/events-that-trigger-workflows#schedule).
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

Modifica los permisos predeterminados que se otorgan al `GITHUB_TOKEN`. Esto variará dependiendo de las necesidades de tu flujo de trabajo. Para obtener más información, consulta la sección "[Asignar permisos a los jobs](/actions/using-jobs/assigning-permissions-to-jobs)".
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Agrupa todos los jobs que se ejecutan en el archivo de flujo de trabajo.
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

Define un job con la ID `check_all_english_links` y con el nombre `Check all links`, lo cual se almacena dentro de la clave `jobs`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

Solo ejecuta el job `check_all_english_links` si el repositorio se llama `docs-internal` y se encuentra dentro de la organización `github`. De otra forma, el job se marca como _skipped_.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Configura el job para ejecutarse en un ejecutor Ubuntu Linux. Esto significa que el job se ejecutará en una máquina virtual nueva hospedada en {% data variables.product.prodname_dotcom %}. Para obtener ejemplos de sintaxis utilizando otros ejecutores, consulta la sección "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)".
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

Crea variables de ambiente personalizadas y redefine la variable integrada `GITHUB_TOKEN` para utilizar un [secret] personalizado(/actions/security-guides/encrypted-secrets). Estas variables se referenciarán más adelante en el flujo de trabajo.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Agrupa todos los pasos que se ejecutarán como parte del job `check_all_english_links`. Cada job en el flujo de trabajo tiene su propia sección de `steps`.
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

La palabra clave `uses` le indica al job recuperar la acción llamada `actions/checkout`. Esta es una acción que revisa tu repositorio y lo descarga al ejecutor, lo que te permite ejecutar acciones contra tu código (tales como las herramientas de prueba). Debes utilizar la acción de verificación cada que tu flujo de trabajo se ejecute contra el código del repositorio o cada que estés utilizando una acción definida en el repositorio.
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

Este paso utiliza la acción `actions/setup-node` para instalar la versión especificada del paquete de software `node` en el ejecutor, lo cuál te da acceso al comando `npm`.
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

La palabra clave `run` le indica al job ejecutar un comando en el ejecutor. En este caso, los comandos `npm ci` y `npm run build` se ejecutan como pasos separados para instalar y compilar la aplicación de Node.js en el repositorio.
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

Este comando de `run` ejecuta un script que se almacena en el repositorio en `script/check-english-links.js` y enlaza la salida con un archivo llamado `broken_links.md`.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
```
</td>
<td>

Si el script `check-english-links.js` detecta enlaces rotos y se devuelve a un estado de salida no-cero (falla), entonces utiliza un [comando de flujo de trabajo](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) para configurar una salida que tiene el valor de la primera línea del archivo `broken_links.md` (este se utiliza en el siguiente paso).
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

Utiliza la acción `peter-evans/create-issue-from-file` para crear una propuesta nueva de {% data variables.product.prodname_dotcom %}. Este ejemplo está fijado a una versión específica de la acción, utilizando el SHA `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e`.
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

Utiliza [`gh issue list`](https://cli.github.com/manual/gh_issue_list) para ubicar la propuesta que se creó anteriormente a partir de ejecuciones anteriores. Esto se pone en [aliased](https://cli.github.com/manual/gh_alias_set) como `gh list-reports` para procesarse de forma más simple en pasos subsecuentes. Para obtener la URL de la propuesta, la expresión `jq` procesa la salida JSON resultante.

Entonces se utiliza [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para agregar un comentario a la propuesta nueva que enlaza a la anterior.
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

Si se abre una propuesta de una ejecución anterior y se le asigna a alguien, utiliza entonces [`gh issue comment`] (https://cli.github.com/manual/gh_issue_comment) para agregar un comentario con un enlace a la propuesta nueva.
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

Si la propuesta de una ejecución previa está abierta y no está asignada a nadie, entonces:

* Utiliza [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) para agregar un comentario con un enlace a la propuesta nueva.
* Utiliza [`gh issue close`](https://cli.github.com/manual/gh_issue_close) para cerrar la propuesta antigua.
* Utiliza [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit) para editar la propuesta antigua para eliminarla de un tablero de proyecto de {% data variables.product.prodname_dotcom %} específico.
</td>
</tr>
</tbody>
</table>

## Pasos siguientes

{% data reusables.actions.learning-actions %}
