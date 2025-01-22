---
title: Using secrets in GitHub Actions
shortTitle: Using secrets
intro: 'Secrets allow you to store sensitive information in your organization, repository, or repository environments.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
  - /actions/security-guides/encrypted-secrets
  - /actions/security-guides/using-secrets-in-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About secrets

Secrets are variables that you create in an organization, repository, or repository environment. The secrets that you create are available to use in {% data variables.product.prodname_actions %} workflows. {% data variables.product.prodname_actions %} can only read a secret if you explicitly include the secret in a workflow.

{% data reusables.actions.secrets-org-level-overview %}

For secrets stored at the environment level, you can enable required reviewers to control access to the secrets. A workflow job cannot access environment secrets until approval is granted by required approvers.

> [!NOTE]
> {% data reusables.actions.about-oidc-short-overview %}

### Naming your secrets

The following rules apply to secret names:

{% data reusables.actions.actions-secrets-and-variables-naming %}

  For example, a secret created at the environment level must have a unique name in that environment, a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level.

  {% data reusables.codespaces.secret-precedence %} Similarly, if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence.

To help ensure that {% data variables.product.prodname_dotcom %} redacts your secret in logs, avoid using structured data as the values of secrets. For example, avoid creating secrets that contain JSON or encoded Git blobs.

### Accessing your secrets

To make a secret available to an action, you must set the secret as an input or environment variable in the workflow file. Review the action's README file to learn about which inputs and environment variables the action expects. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

You can use and read secrets in a workflow file if you have access to edit the file. For more information, see [AUTOTITLE](/get-started/learning-about-github/access-permissions-on-github).

{% data reusables.actions.secrets-redaction-warning %}

Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts.

You can also manage secrets using the REST API. For more information, see [AUTOTITLE](/rest/actions/secrets).

### Limiting credential permissions

When generating credentials, we recommend that you grant the minimum permissions possible. For example, instead of using personal credentials, use [deploy keys](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys) or a service account. Consider granting read-only permissions if that's all that is needed, and limit access as much as possible.

When generating a {% data variables.product.pat_v1 %}, select the fewest scopes necessary. When generating a {% data variables.product.pat_v2 %}, select the minimum permissions and repository access required.

Instead of using a {% data variables.product.pat_generic %}, consider using a {% data variables.product.prodname_github_app %}, which uses fine-grained permissions and short lived tokens, similar to a {% data variables.product.pat_v2 %}. Unlike a {% data variables.product.pat_generic %}, a {% data variables.product.prodname_github_app %} is not tied to a user, so the workflow will continue to work even if the user who installed the app leaves your organization. For more information, see [AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow).

> [!NOTE]
> Users with collaborator access to a repository can use the REST API to manage secrets for that repository, and users with admin access to an organization can use the REST API to manage secrets for that organization. For more information, see [AUTOTITLE](/rest/actions/secrets).

## Creating secrets for a repository

{% data reusables.actions.permissions-statement-secrets-variables-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-secrets-and-variables %}
{% data reusables.actions.actions-secrets-tab %}
   ![Screenshot of the "Actions secrets and variables" page. The "Secrets" tab is outlined in dark orange.](/assets/images/help/repository/actions-secrets-tab.png)
1. Click **New repository secret**.
1. In the **Name** field, type a name for your secret.
1. In the **Secret** field, enter the value for your secret.
1. Click **Add secret**.

If your repository has environment secrets or can access secrets from the parent organization, then those secrets are also listed on this page.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To add a repository secret, use the `gh secret set` subcommand. Replace `secret-name` with the name of your secret.

```shell
gh secret set SECRET_NAME
```

The CLI will prompt you to enter a secret value. Alternatively, you can read the value of the secret from a file.

```shell
gh secret set SECRET_NAME < secret.txt
```

To list all secrets for the repository, use the `gh secret list` subcommand.

{% endcli %}

## Creating secrets for an environment

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Click on the environment that you want to add a secret to.
1. Under **Environment secrets**, click **Add secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.

{% endwebui %}

{% cli %}

To add a secret for an environment, use the `gh secret set` subcommand with the `--env` or `-e` flag followed by the environment name.

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

To list all secrets for an environment, use the `gh secret list` subcommand with the `--env` or `-e` flag followed by the environment name.

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## Creating secrets for an organization

{% data reusables.actions.actions-secrets-variables-repository-access %}

{% data reusables.actions.permissions-statement-secrets-and-variables-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secrets-and-variables %}
{% data reusables.actions.actions-secrets-tab %}

   ![Screenshot of the "Actions secrets and variables" page. The "Secrets" tab is outlined in dark orange.](/assets/images/help/repository/actions-secrets-tab.png)

   {% data reusables.actions.secrets-and-variables-org-permissions %}

1. Click **New organization secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add secret**.

{% endwebui %}

{% cli %}

> [!NOTE]
> By default, {% data variables.product.prodname_cli %} authenticates with the `repo` and `read:org` scopes. To manage organization secrets, you must additionally authorize the `admin:org` scope.
>
> ```shell
> gh auth login --scopes "admin:org"
> ```

To add a secret for an organization, use the `gh secret set` subcommand with the `--org` or `-o` flag followed by the organization name.

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

By default, the secret is only available to private repositories. To specify that the secret should be available to all repositories within the organization, use the `--visibility` or `-v` flag.

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

To specify that the secret should be available to selected repositories within the organization, use the `--repos` or `-r` flag.

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2
```

To list all secrets for an organization, use the `gh secret list` subcommand with the `--org` or `-o` flag followed by the organization name.

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## Reviewing access to organization-level secrets

You can check which access policies are being applied to a secret in your organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secrets-and-variables %}
1. The list of secrets includes any configured permissions and policies. For more details about the configured permissions for each secret, click **Update**.

## Using secrets in a workflow

> [!NOTE]
> * {% data reusables.actions.forked-secrets %}
> * Secrets are not automatically passed to reusable workflows. For more information, see [AUTOTITLE](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow).

To provide an action with a secret as an input or environment variable, you can use the `secrets` context to access secrets you've created in your repository. For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts) and [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).

{% raw %}

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```

{% endraw %}

Secrets cannot be directly referenced in `if:` conditionals. Instead, consider setting secrets as job-level environment variables, then referencing the environment variables to conditionally run steps in the job. For more information, see [AUTOTITLE](/actions/learn-github-actions/contexts#context-availability) and [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif).

If a secret has not been set, the return value of an expression referencing the secret (such as {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} in the example) will be an empty string.

Avoid passing secrets between processes from the command line, whenever possible. Command-line processes may be visible to other users (using the `ps` command) or captured by [security audit events](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing). To help protect secrets, consider using environment variables, `STDIN`, or other mechanisms supported by the target process.

If you must pass secrets within a command line, then enclose them within the proper quoting rules. Secrets often contain special characters that may unintentionally affect your shell. To escape these special characters, use quoting with your environment variables. For example:

### Example using Bash

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

### Example using PowerShell

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

### Example using Cmd.exe

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

## Limits for secrets

You can store up to 1,000 organization secrets, 100 repository secrets, and 100 environment secrets.

A workflow created in a repository can access the following number of secrets:

* All 100 repository secrets.
* If the repository is assigned access to more than 100 organization secrets, the workflow can only use the first 100 organization secrets (sorted alphabetically by secret name).
* All 100 environment secrets.

Secrets are limited to 48 KB in size. To store larger secrets, see the [Storing large secrets](#storing-large-secrets) workaround below.

### Storing large secrets

To use secrets that are larger than 48 KB, you can use a workaround to store secrets in your repository and save the decryption passphrase as a secret on {% data variables.product.prodname_dotcom %}. For example, you can use `gpg` to encrypt a file containing your secret locally before checking the encrypted file in to your repository on {% data variables.product.prodname_dotcom %}. For more information, see the [gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html).

> [!WARNING]
> Be careful that your secrets do not get printed when your workflow runs. When using this workaround, {% data variables.product.prodname_dotcom %} does not redact secrets that are printed in logs.

1. Run the following command from your terminal to encrypt the file containing your secret using `gpg` and the AES256 cipher algorithm. In this example, `my_secret.json` is the file containing the secret.

   ```shell
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. You will be prompted to enter a passphrase. Remember the passphrase, because you'll need to create a new secret on {% data variables.product.prodname_dotcom %} that uses the passphrase as the value.

1. Create a new secret that contains the passphrase. For example, create a new secret with the name `LARGE_SECRET_PASSPHRASE` and set the value of the secret to the passphrase you used in the step above.

1. Copy your encrypted file to a path in your repository and commit it. In this example, the encrypted file is `my_secret.json.gpg`.

   > [!WARNING]
   > Make sure to copy the encrypted `my_secret.json.gpg` file ending with the `.gpg` file extension, and **not** the unencrypted `my_secret.json` file.

   ```shell
   git add my_secret.json.gpg
   git commit -m "Add new secret JSON file"
   ```

1. Create a shell script in your repository to decrypt the secret file. In this example, the script is named `decrypt_secret.sh`.

   ```shell copy
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. Ensure your shell script is executable before checking it in to your repository.

   ```shell
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. In your {% data variables.product.prodname_actions %} workflow, use a `step` to call the shell script and decrypt the secret. To have a copy of your repository in the environment that your workflow runs in, you'll need to use the [`actions/checkout`](https://github.com/actions/checkout) action. Reference your shell script using the `run` command relative to the root of your repository.

   ```yaml
   name: Workflows with large secrets

   on: push

   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Storing Base64 binary blobs as secrets

You can use Base64 encoding to store small binary blobs as secrets. You can then reference the secret in your workflow and decode it for use on the runner. For the size limits, see [AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets).

> [!NOTE]
> Note that Base64 only converts binary to text, and is not a substitute for actual encryption.

1. Use `base64` to encode your file into a Base64 string. For example:

   On macOS, you could run:

   ```shell
   base64 -i cert.der -o cert.base64
   ```

   On Linux, you could run:

   ```shell
   base64 -w 0 cert.der > cert.base64
   ```

1. Create a secret that contains the Base64 string. For example:

   ```shell
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. To access the Base64 string from your runner, pipe the secret to `base64 --decode`. For example:

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```

> [!NOTE]
> Using another shell might require different commands for decoding the secret to a file. On Windows runners, we recommend [using a bash shell](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell) with `shell: bash` to use the commands in the `run` step above.

## Redacting secrets from workflow run logs

{% data variables.product.prodname_actions %} automatically redacts the contents of all {% data variables.product.prodname_dotcom %} secrets that are printed to workflow logs.

{% data variables.product.prodname_actions %} also redacts information that is recognized as sensitive, but is not stored as a secret. Currently {% data variables.product.prodname_dotcom %} supports the following:

* 32-byte and 64-byte Azure keys
* Azure AD client app passwords
* Azure Cache keys
* Azure Container Registry keys
* Azure Function host keys
* Azure Search keys
* Database connection strings
* HTTP Bearer token headers
* JWTs
* NPM author tokens
* NuGet API keys
* v1 GitHub installation tokens
* v2 GitHub installation tokens (`ghp`, `gho`, `ghu`, `ghs`, `ghr`)
* v2 GitHub PATs

> [!NOTE] If you would like other types of sensitive information to be automatically redacted, please reach out to us in our [community discussions](https://github.com/orgs/community/discussions?discussions_q=is%3Aopen+label%3AActions).

As a habit of best practice, you should mask all sensitive information that is not a {% data variables.product.prodname_dotcom %} secret by using `::add-mask::VALUE`. This causes the value to be treated as a secret and redacted from logs. For more information about masking data, see [AUTOTITLE](/actions/using-workflows/workflow-commands-for-github-actions#masking-a-value-in-a-log).

Redacting of secrets is performed by your workflow runners. This means a secret will only be redacted if it was used within a job and is accessible by the runner. If an unredacted secret is sent to a workflow run log, you should delete the log and rotate the secret. For information on deleting logs, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#deleting-logs).
