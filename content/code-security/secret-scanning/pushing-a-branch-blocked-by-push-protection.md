---
title: Pushing a branch blocked by push protection
intro: 'The push protection feature of {% data variables.product.prodname_secret_scanning %} proactively protects you against leaked secrets in your repositories. You can resolve blocked pushes and, once the detected secret is removed, you can push changes to your working branch from the command line or the web UI.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
---

## About push protection for {% data variables.product.prodname_secret_scanning %}

The push protection feature of {% data variables.product.prodname_secret_scanning %} helps to prevent security leaks by scanning for secrets before you push changes to your repository. {% data reusables.secret-scanning.push-protection-overview %} For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**Tip**
If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you can allow the secret and specify the reason why it should be allowed. For more information about bypassing push protection for a secret, see "[Allowing a blocked secret to be pushed](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)" and "[Bypassing push protection for a secret](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)" for the command line and the web UI, respectively.

{% endtip %}

{% ifversion push-protection-custom-link-orgs %}

Organization owners can provide a custom link that will be included in the message from {% data variables.product.product_name %} when your push is blocked. This custom link can contain resources and advice specific to your organization and its policies.
{% endif %}

## Resolving a blocked push on the command line

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

If the blocked secret was introduced by the latest commit on your branch, you can follow the guidance below.

1. Remove the secret from your code.
1. Commit the changes, by using `git commit --amend`.
1. Push your changes with `git push`.

You can also remove the secret if the secret appears in an earlier commit in the Git history.

1. Use `git log` to determine which commit surfaced in the push error came first in history.
1. Start an interactive rebase with `git rebase -i <commit-id>~1`. <commit-id> is the id of the commit from step 1.
1. Identify your commit to edit by changing `pick` to `edit` on the first line of the text that appears in the editor.
1. Remove the secret from your code.
1. Commit the change with `git commit --amend`.
1. Run `git rebase --continue` to finish the rebase.

## Resolving a blocked commit in the web UI

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

To resolve a blocked commit in the web UI, you need to remove the secret from the file, or use the options displayed in the dialog box to allow the secret. For more information about bypassing push protection from the web UI, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)."

If you confirm a secret is real, you need to remove the secret from the file. Once you remove the secret, you will be able to commit your changes.
