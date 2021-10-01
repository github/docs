---
title: Automatic token authentication
intro: '{% data variables.product.prodname_dotcom %} stellt ein Token zur Verfügung, mit dem Du Dich im Namen von {% data variables.product.prodname_actions %} authentifizieren kannst.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Automatic token authentication
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Informationen zum `GITHUB_TOKEN`-Geheimnis

At the start of each workflow run, {% data variables.product.prodname_dotcom %} automatically creates a unique `GITHUB_TOKEN` secret to use in your workflow. Du kannst den `GITHUB_TOKEN` verwenden, um Dich in einem Workflow zu authentifizieren.

Wenn Du {% data variables.product.prodname_actions %} aktivierst, installiert {% data variables.product.prodname_dotcom %} eine {% data variables.product.prodname_github_app %} in Deinem Repository. Das `GITHUB_TOKEN`-Geheimnis ist ein {% data variables.product.prodname_github_app %}-Token für Installations-Zugriff. Du kannst das Installationszugriffs-Token verwenden, um Dich im Namen der auf Deinem Repository installierten {% data variables.product.prodname_github_app %} zu authentifizieren. Die Berechtigungen des Tokens sind auf das Repository beschränkt, in dem sich der Workflow befindet. Weitere Informationen findest Du unter "[Berechtigungen für das `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Before each job begins, {% data variables.product.prodname_dotcom %} fetches an installation access token for the job. Das Token läuft ab, wenn der Auftrag abgeschlossen ist.

Das Token ist auch im `github.token`-Kontext verfügbar. Weitere Informationen finden Sie unter „[Kontexte](/actions/learn-github-actions/contexts#github-context)“.

## Das `GITHUB_TOKEN` in einem Workflow verwenden

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% data variables.product.prodname_dotcom %} API request.

{% ifversion fpt or ghes > 3.1 or ghae-next %}
{% note %}

**Important:** An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. Weitere Informationen findest Du unter "[Berechtigungen für das `GITHUB_TOKEN`](#permissions-for-the-github_token)."

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

### Example 1: passing the `GITHUB_TOKEN` as an input

Dieser Beispielworkflow verwendet die [Labeler-Aktion](https://github.com/actions/labeler), wofür das `GITHUB_TOKEN` als Wert für den Eingabeparameter `repo-token` benötigt wird:

```yaml
name: Pull request labeler

on: [ pull_request_target ]

{% ifversion fpt or ghes > 3.1 or ghae-next %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

### Example 2: calling the REST API

Du kannst das `GITHUB_TOKEN` verwenden, um authentifizierte API-Aufrufe durchzuführen. Dieser Beispiel-Workflow erzeugt eine Lieferung („issue“) mittels der {% data variables.product.prodname_dotcom %}-REST-API:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      issues: write {% endif %}
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Berechtigungen für das `GITHUB_TOKEN`

For information about the API endpoints {% data variables.product.prodname_github_apps %} can access with each permission, see "[{% data variables.product.prodname_github_app %} Permissions](/rest/reference/permissions-required-for-github-apps)."

{% ifversion fpt or ghes > 3.1 or ghae-next %}
The following table shows the permissions granted to the `GITHUB_TOKEN` by default. People with admin permissions to an {% ifversion not ghes %}enterprise, organization, or repository,{% else %}organization or repository{% endif %} can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your {% ifversion not ghes %}enterprise, organization, or repository,{% else %}organization or repository,{% endif %} see {% ifversion not ghes %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)," {% endif %}"[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)," or "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

| Scope                    | Default access<br>(permissive) | Default access<br>(restricted) | Maximum access<br>by forked repos |
| ------------------------ | ------------------------------------ | ------------------------------------ | --------------------------------------- |
| actions                  | Lesen/Schreiben                      | none                                 | Lesen                                   |
| checks (Prüfungen)       | Lesen/Schreiben                      | none                                 | Lesen                                   |
| contents (Inhalte)       | Lesen/Schreiben                      | Lesen                                | Lesen                                   |
| deployments              | Lesen/Schreiben                      | none                                 | Lesen                                   |
| Issues (Lieferungen)     | Lesen/Schreiben                      | none                                 | Lesen                                   |
| Metadaten                | Lesen                                | Lesen                                | Lesen                                   |
| Pakete                   | Lesen/Schreiben                      | none                                 | Lesen                                   |
| pull requests            | Lesen/Schreiben                      | none                                 | Lesen                                   |
| repository projects      | Lesen/Schreiben                      | none                                 | Lesen                                   |
| security events          | Lesen/Schreiben                      | none                                 | Lesen                                   |
| statuses (Statusangaben) | Lesen/Schreiben                      | none                                 | Lesen                                   |
{% else %}
| Scope                    | Zugriffstyp     | Zugriff durch geforktes Repository |
| ------------------------ | --------------- | ---------------------------------- |
| actions                  | Lesen/Schreiben | Lesen                              |
| checks (Prüfungen)       | Lesen/Schreiben | Lesen                              |
| contents (Inhalte)       | Lesen/Schreiben | Lesen                              |
| deployments              | Lesen/Schreiben | Lesen                              |
| Issues (Lieferungen)     | Lesen/Schreiben | Lesen                              |
| Metadaten                | Lesen           | Lesen                              |
| Pakete                   | Lesen/Schreiben | Lesen                              |
| pull requests            | Lesen/Schreiben | Lesen                              |
| repository projects      | Lesen/Schreiben | Lesen                              |
| statuses (Statusangaben) | Lesen/Schreiben | Lesen                              |
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% ifversion fpt or ghes > 3.1 or ghae-next %}
### Modifying the permissions for the `GITHUB_TOKEN`

You can modify the permissions for the `GITHUB_TOKEN` in individual workflow files. If the default permissions for the `GITHUB_TOKEN` are restrictive, you may have to elevate the permissions to allow some actions and commands to run successfully. If the default permissions are permissive, you can edit the workflow file to remove some permissions from the `GITHUB_TOKEN`. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

You can see the permissions that `GITHUB_TOKEN` had for a specific job in the "Set up job" section of the workflow run log. For more information, see "[Using workflow run logs](/actions/managing-workflow-runs/using-workflow-run-logs)."

You can use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. When the `permissions` key is used, all unspecified permissions are set to no access, with the exception of the `metadata` scope, which always gets read access.

{% data reusables.github-actions.forked-write-permission %}

The two workflow examples earlier in this article show the `permissions` key being used at the workflow level, and at the job level. In [Example 1](#example-1-passing-the-github_token-as-an-input) the two permissions are specified for the entire workflow. In [Example 2](#example-2-calling-the-rest-api) write access is granted for one scope for a single job.

For full details of the `permissions` key, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)."

#### How the permissions are calculated for a workflow job

The permissions for the `GITHUB_TOKEN` are initially set to the default setting for the enterprise, organization, or repository. If the default is set to the restricted permissions at any of these levels then this will apply to the relevant repositories. For example, if you choose the restricted default at the organization level then all repositories in that organization will use the restricted permissions as the default. The permissions are then adjusted based on any configuration within the workflow file, first at the workflow level and then at the job level. Finally, if the workflow was triggered by a pull request from a forked repository, and the **Send write tokens to workflows from pull requests** setting is not selected, the permissions are adjusted to change any write permissions to read only.

### Granting additional permissions
{% endif %}

Wenn Du ein Token benötigst, für das Berechtigungen erforderlich sind, die nicht im `GITHUB_TOKEN`-Geheimnis vorhanden sind, kannst Du ein persönliches Zugangstoken erstellen und als Geheimnis im Repository festlegen:

1. Verwende oder erstelle ein Token mit den entsprechenden Berechtigungen für dieses Repository. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."
1. Füge das Token als Geheimnis in das Repository Deines Workflows ein, und verweise darauf mit der Syntax {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Weitere Informationen findest Du unter "[Verschlüsselte Geheimnisse erstellen und verwenden](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
