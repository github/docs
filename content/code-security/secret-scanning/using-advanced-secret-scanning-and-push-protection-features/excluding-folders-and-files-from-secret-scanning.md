---
title: Excluding folders and files from secret scanning
intro: 'You can customize {% data variables.product.prodname_secret_scanning %} to exclude directories or files from analysis, by configuring a `secret_scanning.yml` file in your repository.'
product: '{% data reusables.gated-features.secret-scanning %}'
shortTitle: Exclude folders and files
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
---

## About {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} automatically detects tokens or credentials that have been checked into a repository. You can view {% ifversion fpt or ghec %}{% data variables.secret-scanning.user_alerts %}{% else %}alerts{% endif %} for any secrets that {% data variables.product.company_short %} finds in your code, in the **Security** tab of the repository, so that you know which tokens or credentials to treat as compromised.{% data reusables.secret-scanning.alert-type-links %}

## About excluding directories from {% data variables.secret-scanning.user_alerts %}

You may have a reason to commit a secret to a repository, such as when you want to provide a fake secret in documentation, or in an example application. In these scenarios, you can quickly dismiss the alert and document the reasons. However, there may be cases where you want to ignore a directory entirely to avoid creating false positive alerts at scale. For example, you might have a monolithic application with several integrations containing a file of dummy keys that could set off numerous false alerts to triage.

You can configure a `secret_scanning.yml` file to exclude directories from {% data variables.product.prodname_secret_scanning %}, including when you use push protection.

## Excluding directories from {% data variables.secret-scanning.user_alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, enter ".github/secret_scanning.yml".
1. Under **Edit new file**, type `paths-ignore:` followed by the paths you want to exclude from {% data variables.product.prodname_secret_scanning %}.

    ``` yaml copy
    paths-ignore:
      - "docs/**"
    ```

    This tells {% data variables.product.prodname_secret_scanning %} to ignore everything in the `docs` directory. You can use this example file as a template to add the files and folders you’d like to exclude from your own repositories.

    You can also use special characters, such as `*` to filter paths. For more information about filter patterns, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

    ``` yaml copy
    paths-ignore:
      - "foo/bar/*.js"
    ```

    {% note %}

    **Notes:**
    * If there are more than 1,000 entries in `paths-ignore`, {% data variables.product.prodname_secret_scanning %} will only exclude the first 1,000 directories from scans.
    * If `secret_scanning.yml` is larger than 1 MB, {% data variables.product.prodname_secret_scanning %} will ignore the entire file.

    {% endnote %}

## Verifying that the folder is excluded from {% data variables.product.prodname_secret_scanning %}

1. Open a file in a directory that you have excluded from secret scanning
1. Paste a pre-invalidated secret, or a test secret.
1. Commit the change.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %} There should be no new open alerts for the secret you just introduced into the file.

## Best practices

Best practices include:

* Minimizing the number of directories excluded and being as precise as possible when defining exclusions. This ensures that the instructions are as clear as possible, and that exclusions work as intended.
* Explaining why a particular file or folder is excluded in a comment in the `secret_scanning.yml` file. As with regular code, using comments clarifies your intention, making it easier for others to understand the desired behavior.
* Reviewing the `secret_scanning.yml` file on a regular basis. Some exclusions may no longer apply with time, and it is good practice to keep the file clean and current. The use of comments, as advised above, can help with this.
* Informing the security team what files and folders you've excluded, and why. Good communication is vital in ensuring that everyone is on the same page, and understands why specific folders or files are excluded.
