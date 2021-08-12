---
title: Encrypted secrets
intro: 'Encrypted secrets allow you to store sensitive information in your organization{% ifversion fpt or ghes > 3.0 %}, repository, or repository environments{% else %} or repository{% endif %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About encrypted secrets

Secrets are encrypted environment variables that you create in an organization{% ifversion fpt or ghes > 3.0 or ghae %}, repository, or repository environment{% else %} or repository{% endif %}. The secrets that you create are available to use in {% data variables.product.prodname_actions %} workflows. {% data variables.product.prodname_dotcom %} uses a [libsodium sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to help ensure that secrets are encrypted before they reach {% data variables.product.prodname_dotcom %} and remain encrypted until you use them in a workflow.

{% data reusables.github-actions.secrets-org-level-overview %}

{% ifversion fpt or ghes > 3.0 or ghae %}
For secrets stored at the environment level, you can enable required reviewers to control access to the secrets. A workflow job cannot access environment secrets until approval is granted by required approvers.
{% endif %}

### Naming your secrets

{% data reusables.codespaces.secrets-naming %}

  For example, {% ifversion fpt or ghes > 3.0 or ghae %}a secret created at the environment level must have a unique name in that environment, {% endif %}a secret created at the repository level must have a unique name in that repository, and a secret created at the organization level must have a unique name at that level. 

  {% data reusables.codespaces.secret-precedence %}{% ifversion fpt or ghes > 3.0 or ghae %} Similarly, if an organization, repository, and environment all have a secret with the same name, the environment-level secret takes precedence.{% endif %}

To help ensure that {% data variables.product.prodname_dotcom %} redacts your secret in logs, avoid using structured data as the values of secrets. For example, avoid creating secrets that contain JSON or encoded Git blobs.

### Accessing your secrets

To make a secret available to an action, you must set the secret as an input or environment variable in the workflow file. Review the action's README file to learn about which inputs and environment variables the action expects. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)."

You can use and read encrypted secrets in a workflow file if you have access to edit the file. For more information, see "[Access permissions on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)."

{% warning %}

**Warning:** {% data variables.product.prodname_dotcom %} automatically redacts secrets printed to the log, but you should avoid printing secrets to the log intentionally.

{% endwarning %}

{% ifversion fpt or ghes > 3.0 or ghae %}
Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts.
{% endif %}

You can also manage secrets using the REST API. For more information, see "[Secrets](/rest/reference/actions#secrets)."

### Limiting credential permissions

When generating credentials, we recommend that you grant the minimum permissions possible. For example, instead of using personal credentials, use [deploy keys](/developers/overview/managing-deploy-keys#deploy-keys) or a service account. Consider granting read-only permissions if that's all that is needed, and limit access as much as possible. When generating a personal access token (PAT), select the fewest scopes necessary.

## Creating encrypted secrets for a repository

{% data reusables.github-actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New repository secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.

If your repository {% ifversion fpt or ghes > 3.0 or ghae %}has environment secrets or {% endif %}can access secrets from the parent organization, then those secrets are also listed on this page.

{% note %}

**Note:** Users with collaborator access can use the REST API to manage secrets for a repository. For more information, see "[{% data variables.product.prodname_actions %} secrets API](/rest/reference/actions#secrets)."

{% endnote %}

{% ifversion fpt or ghes > 3.0 or ghae %}

## Creating encrypted secrets for an environment

{% data reusables.github-actions.permissions-statement-secrets-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Click on the environment that you want to add a secret to.
1. Under **Environment secrets**, click **Add secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.
{% endif %}

## Creating encrypted secrets for an organization

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. Click **New organization secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. Click **Add secret**.

## Reviewing access to organization-level secrets

You can check which access policies are being applied to a secret in your organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. The list of secrets includes any configured permissions and policies. For example:
![Secrets list](/assets/images/help/settings/actions-org-secrets-list.png)
1. For more details on the configured permissions for each secret, click **Update**.

## Using encrypted secrets in a workflow

{% note %}

**Note:** {% data reusables.actions.forked-secrets %}

{% endnote %}

To provide an action with a secret as an input or environment variable, you can use the `secrets` context to access secrets you've created in your repository. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)" and "[Workflow syntax for {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

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

You can store up to 1,000 organization secrets{% ifversion fpt or ghes > 3.0 or ghae %}, 100 repository secrets, and 100 environment secrets{% else %} and 100 repository secrets{% endif %}.

A workflow created in a repository can access the following number of secrets:

* All 100 repository secrets.
* If the repository is assigned access to more than 100 organization secrets, the workflow can only use the first 100 organization secrets (sorted alphabetically by secret name).
{% ifversion fpt or ghes > 3.0 or ghae %}* All 100 environment secrets.{% endif %}

Secrets are limited to 64 KB in size. To use secrets that are larger than 64 KB, you can store encrypted secrets in your repository and save the decryption passphrase as a secret on {% data variables.product.prodname_dotcom %}. For example, you can use `gpg` to encrypt your credentials locally before checking the file in to your repository on {% data variables.product.prodname_dotcom %}. For more information, see the "[gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html)."

{% warning %}

**Warning**: Be careful that your secrets do not get printed when your action runs. When using this workaround, {% data variables.product.prodname_dotcom %} does not redact secrets that are printed in logs.

{% endwarning %}

1. Run the following command from your terminal to encrypt the `my_secret.json` file using `gpg` and the AES256 cipher algorithm.

 ``` shell
 $ gpg --symmetric --cipher-algo AES256 my_secret.json
 ```

1. You will be prompted to enter a passphrase. Remember the passphrase, because you'll need to create a new secret on {% data variables.product.prodname_dotcom %} that uses the passphrase as the value.

1. Create a new secret that contains the passphrase. For example, create a new secret with the name `LARGE_SECRET_PASSPHRASE` and set the value of the secret to the passphrase you selected in the step above.

1. Copy your encrypted file into your repository and commit it. In this example, the encrypted file is `my_secret.json.gpg`.

1. Create a shell script to decrypt the password. Save this file as `decrypt_secret.sh`.

  ``` shell
  #!/bin/sh

  # Decrypt the file
  mkdir $HOME/secrets
  # --batch to prevent interactive command
  # --yes to assume "yes" for questions
  gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
  --output $HOME/secrets/my_secret.json my_secret.json.gpg
  ```

1. Ensure your shell script is executable before checking it in to your repository.

  ``` shell
  $ chmod +x decrypt_secret.sh
  $ git add decrypt_secret.sh
  $ git commit -m "Add new decryption script"
  $ git push
  ```

1. From your workflow, use a `step` to call the shell script and decrypt the secret. To have a copy of your repository in the environment that your workflow runs in, you'll need to use the [`actions/checkout`](https://github.com/actions/checkout) action. Reference your shell script using the `run` command relative to the root of your repository.

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
        # This command is just an example to show your secret being printed
        # Ensure you remove any print statements of your secrets. GitHub does
        # not hide secrets that use this workaround.
        - name: Test printing your secret (Remove this step in production)
          run: cat $HOME/secrets/my_secret.json
  ```
{% endraw %}
