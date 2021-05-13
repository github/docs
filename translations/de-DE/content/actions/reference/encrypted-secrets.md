---
title: Encrypted secrets
intro: 'Encrypted secrets allow you to store sensitive information in your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}, repository, or repository environments{% else %} or repository{% endif %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.environments-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Informationen zu verschlüsselten Geheimnissen

Secrets are encrypted environment variables that you create in an organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}, repository, or repository environment{% else %} or repository{% endif %}. The secrets that you create are available to use in {% data variables.product.prodname_actions %} workflows. {% data variables.product.prodname_dotcom %} uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to help ensure that secrets are encrypted before they reach {% data variables.product.prodname_dotcom %} and remain encrypted until you use them in a workflow.

{% data reusables.github-actions.secrets-org-level-overview %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
For secrets stored at the environment level, you can enable required reviewers to control access to the secrets. A workflow job cannot access environment secrets until approval is granted by required approvers.
{% endif %}

#### Benennen Ihrer Geheimnisse

Die folgenden Regeln gelten für geheime Namen:

* Geheime Namen dürfen nur alphanumerische Zeichen (`[a-z]`, `[A-Z]`, `[0-9]`) oder Unterstriche (`_`) enthalten. Leerzeichen sind nicht zulässig.
* Geheime Namen dürfen nicht mit dem `GITHUB_` -Präfix beginnen.
* Geheime Namen dürfen nicht mit einer Zahl beginnen.
* Secret names are not case-sensitive.
* Geheime Namen müssen auf der Ebene eindeutig sein, auf der sie erstellt werden. For example, {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}a secret created at the environment level must have a unique name in that environment, {% endif %}a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  If a secret with the same name exists at multiple levels, the secret at the lower level takes precedence. For example, if an organization-level secret has the same name as a repository-level secret, then the repository-level secret takes precedence.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %} Similarly, if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence.{% endif %}

To help ensure that {% data variables.product.prodname_dotcom %} redacts your secret in logs, avoid using structured data as the values of secrets. Vermeide beispielsweise Geheimnisse zu erstellen, die JSON oder codierte Git-Blobs enthalten.

#### Zugriff auf Ihre Geheimnisse

Um ein Geheimnis für eine Aktion verfügbar zu machen, legen Sie das Geheimnis als Eingabe oder Umgebungsvariable in der Workflow-Datei fest. In der README-Datei der Aktion erfahren Sie, welche Eingaben und Umgebungsvariablen die Aktion erwartet. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)“.

Du kannst verschlüsselte Geheimnisse in einer Workflow-Datei verwenden und lesen, wenn Du auf die Datei Bearbeitungs-Zugriff hast. Weitere Informationen findest Du unter „[Zugriffsberechtigungen auf {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)“.

{% warning %}

**Warnung:** {% data variables.product.prodname_dotcom %} redigiert Geheimnisse zwar automatisch bei Ausgabe ins Log, aber Du solltest nicht vorsätzlich Geheimnisse ins Log schreiben.

{% endwarning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts.
{% endif %}

Sie können Geheimnisse auch mit der REST-API verwalten. For more information, see "[Secrets](/rest/reference/actions#secrets)."

#### Einschränken von Anmeldeinformationsberechtigungen

Beim Generieren von Anmeldeinformationen wird empfohlen, möglichst geringe Berechtigungen zu erteilen. Anstatt z.B. persönliche Anmeldeinformationen zu verwenden, solltest Du [Bereitstellen von Schlüsseln](/developers/overview/managing-deploy-keys#deploy-keys) oder einen „Service-Account“ (Dienstkonto) benuzen. Ziehe in Erwägung, Nur-Lese-Berechtigungen zu gewähren, wenn dies ausreicht, und schränke den Zugriff so weit wie möglich ein. Wähle beim Generieren eines persönlichen Zugriffstokens („personal access token“, PAT) die geringsmöglichen Anwendungsbereiche („scopes“) aus.

### Erstellen verschlüsselter Geheimnisse für ein Repository

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New repository secret**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den Wert für Ihr Geheimnis ein.
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

If your repository {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0"or currentVersion == "github-ae@latest" %}has environment secrets or {% endif %}can access secrets from the parent organization, then those secrets are also listed on this page.

{% note %}

**Note:** Users with collaborator access can use the REST API to manage secrets for a repository. For more information, see "[{% data variables.product.prodname_actions %} secrets API](/rest/reference/actions#secrets)."

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" }
### Creating encrypted secrets for an environment

{% data reusables.github-actions.permissions-statement-secrets-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Click on the environment that you want to add a secret to.
1. Under **Environment secrets**, click **Add secret**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den Wert für Ihr Geheimnis ein.
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).
{% endif %}

### Erstellen verschlüsselter Geheimnisse für eine Organisation

Beim Erstellen eines geheimen Schlüssels in einer Organisation können Sie eine Richtlinie verwenden, um einzuschränken, welche Repositorys auf diesen geheimen Schlüssel zugreifen können. Sie können z. B. Zugriff auf alle Repositorys gewähren oder den Zugriff auf nur private Repositorys oder eine angegebene Liste von Repositorys beschränken.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New organization secret**.
1. Geben Sie einen Namen für Ihr Geheimnis in das Eingabefeld **Name** ein.
1. Geben Sie den **Value** für Ihr Geheimnis ein.
1. Wählen Sie im **Repository-Zugriff** Dropdownliste eine Zugriffsrichtlinie aus.
1. Klicken Sie auf **Add secret** (Geheimnis hinzufügen).

### Überprüfen des Zugriffs auf Geheimnisse auf Organisationsebene

Sie können überprüfen, welche Zugriffsrichtlinien auf einen geheimen Schlüssel in Ihrer Organisation angewendet werden.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Die Liste der Geheimnisse enthält alle konfigurierten Berechtigungen und Richtlinien. Ein Beispiel: ![Geheimliste](/assets/images/help/settings/actions-org-secrets-list.png)
1. Weitere Informationen zu den konfigurierten Berechtigungen für jeden geheimen Schlüssel finden Sie unter **Aktualisieren**.

### Verschlüsselte Geheimnisse in einem Workflow verwenden

{% data reusables.actions.forked-secrets %}

Um eine Aktion mit einem Geheimnis als Eingabe- oder Umgebungsvariable zu versehen, kannst Du den `secrets` Kontext verwenden, um auf Geheimnisse zuzugreifen, die Du in Deinem Repository erstellt hast. Weitere Informationen findest Du unter "[Kontext und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)" und "[Workflow-Syntax für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Das Geheimnis als Eingabe setzen
      super_secret: ${{ secrets.SuperSecret }}
    env: # Oder als Umgebunsvariable ("environment variable")
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

Wann immer dies möglich ist, vermeide die Übergabe von Geheimnissen zwischen Prozessen von der Befehlszeile aus. Befehlszeilen-Prozesse können für andere Benutzer (mithilfe des Befehls `ps`) sichtbar sein oder von [„security audit events“ (Ereignissen zur Sicherheits-Überprüfung)](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing) erfasst werden. Um den Schutz von Geheimnissen zu unterstützen, solltest Du die Verwendung von Umgebungsvariablen, `STDIN` oder andere vom Zielprozess unterstützte Mechanismen in Betracht ziehen.

Wenn Sie Geheimnisse innerhalb einer Kommandozeile übergeben müssen, umschließe sie im Rahmen der gültigen Quotierungsregeln. Geheimnisse enthalten oft Sonderzeichen, die in Deiner Shell unbeabsichtigte Wirkungen entfalten können. Um diese Sonderzeichen zu vermeiden, verwende Deine Umgebungsvariablen mit Anführungszeichen. Ein Beispiel:

#### Beispiel mit Bash

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

#### Beispiel mit PowerShell

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

#### Beispiel mit Cmd.exe

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

### Einschränkungen für Geheimnisse

You can store up to 1,000 secrets per organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}, 100 secrets per repository, and 100 secrets per environment{% else %} and 100 secrets per repository{% endif %}. A workflow may use up to 100 organization secrets and 100 repository secrets.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %} Additionally, a job referencing an environment may use up to 100 environment secrets.{% endif %}

Geheimnisse sind auf 64 KB beschränkt. Um Geheimnisse zu verwenden, die größer als 64 KB sind, kannst Du verschlüsselte Geheimnisse in Deinem Repository speichern und die Passphrase zur Entschlüsselung als Geheimnis auf {% data variables.product.prodname_dotcom %} speichern. Du kannst beispielsweise `gpg` verwenden, um Deine Anmeldeinformationen lokal zu verschlüsseln, bevor Du die Datei in Ihrem Repository auf {% data variables.product.prodname_dotcom %} eincheckst. Weitere Informationen finden Sie auf der „[gpg-Manpage](https://www.gnupg.org/gph/de/manual/r1023.html)“.

{% warning %}

**Warnung**: Achte darauf, dass Deine Geheimnisse nicht gedruckt werden, wenn Deine Aktion ausgeführt wird. Wenn Du diesen Workaround verwendest, redigiert {% data variables.product.prodname_dotcom %} keine Geheimnisse, die in Protokollen gedruckt werden.

{% endwarning %}

1. Führe den folgenden Befehl von Deinem Terminal aus, um die Datei `my_secret.json` mit `gpg` und dem Verschlüsselungs-Algorithmus AES256 zu verschlüsseln.

 ``` shell
 $ gpg --symmetric --cipher-algo AES256 my_secret.json
 ```

1. Du wirst aufgefordert, eine Passphrase einzugeben. Merken Sie sich die Passphrase, denn Sie müssen ein neues Geheimnis auf {% data variables.product.prodname_dotcom %} mit der Passphrase als Wert erstellen.

1. Erstellen Sie einen neuen Geheimschlüssel, der die Passphrase enthält. Erstelle beispielsweise ein neues Geheimnis mit dem Namen `LARGE_SECRET_PASSPHRASE` und setze den Wert des Geheimnisses auf die Passphrase, die Du im obigen Schritt ausgewählt hast.

1. Kopiere Deine verschlüsselte Datei in Dein Repository und committe sie. In diesem Beispiel ist die verschlüsselte Datei `my_secret.json.gpg`.

1. Erstellen Sie ein Shell-Skript, um das Passwort zu entschlüsseln. Speichern Sie diese Datei als `decrypt_secret.sh`.

  ``` shell
  

  Die Datei
  mkdir $HOME/secrets
  --batch entschlüsseln, um den interaktiven Befehl
  zu verhindern - --ja, um "Ja" für Fragen
  gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE"
  --output $HOME/secrets/my_secret.json my_secret.json.gp
  ```

1. Stellen Sie sicher, dass Ihr Shell-Skript ausführbar ist, bevor Sie es in Ihrem Repository einchecken.

  ``` shell
  $ chmod +x decrypt_secret.sh
  $ git add decrypt_secret.sh
  $ git commit -m "Add new decryption script"
  $ git push
  ```

1. Verwenden Sie in Ihrem Workflow einen `step`, um das Shell-Skript aufzurufen und das Geheimnis zu entschlüsseln. Um in der Umgebung, in der Dein Workflow läuft, eine Kopie Deines Projektarchivs zu haben, musst Du die Aktion [`actions/checkout`](https://github.com/actions/checkout) verwenden. Referenzieren Sie Ihr Shell-Skript mit dem Befehl `run` relativ zum Root Ihres Repositorys.

{% raw %}
  ```yaml
  name: Workflows with large secrets

  on: push

  jobs:
    my-job:
      name: My Job
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: Decrypt large secret
          run: ./.github/scripts/decrypt_secret.sh
          env:
            LARGE_SECRET_PASSPHRASE: ${{ secrets.LARGE_SECRET_PASSPHRASE }}
        # Dieser Befehl ist nur ein Beispiel, um zu zeigen, dass Dein Geheimnis ausgegeben wird
        # Stelle sicher, dass Du alle Druckanweisungen Deiner Geheimnisse entfernst. Github
        # verbirgt keine Geheimnisse, die diese Umgehung verwenden.
        - name: Test printing your secret (Remove this step in production)
          run: cat $HOME/secrets/my_secret.json
  ```
{% endraw %}
