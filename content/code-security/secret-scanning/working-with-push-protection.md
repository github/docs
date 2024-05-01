---
title: Working with push protection
intro: 'Push protection proactively secures you against leaked secrets in your repositories by blocking pushes containing secrets. To push a commit containing a secret, you must specify a reason for bypassing the block{% ifversion push-protection-delegated-bypass %}, or, if required, request bypass privileges to bypass the block{% endif %}.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Work with push protection
---

## About working with push protection

Push protection prevents you from accidentally committing secrets to a repository by blocking pushes containing supported secrets.

You can work with push protection from the command line or from the web UI.

For more information on working with push protection, including how to bypass the block if necessary, see "[Using push protection from the command line](#using-push-protection-from-the-command-line)" and "[Using push protection from the web UI](#using-push-protection-from-the-web-ui)" in this article.

## Using push protection from the command line

{% data reusables.secret-scanning.push-protection-command-line-choice %}

Up to five detected secrets will be displayed at a time on the command line. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)."

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For example, you might revoke the secret and remove the secret from the repository's commit history. Real secrets that have been exposed must be revoked to avoid unauthorized access. You might consider first rotating the secret before revoking it. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

In some cases, you may need to bypass the block on a secret. {% ifversion push-protection-delegated-bypass %} Whether or not you are able to bypass the block depends on the permissions that have been set for you by your repository administrator or organization owner.

You may be able to bypass the block by specifying a reason for allowing the push. {% endif %} For more information on how to bypass push protection and push a blocked secret, see "[Bypassing push protection when working with the command line](#bypassing-push-protection-when-working-with-the-command-line)."

{% ifversion push-protection-delegated-bypass %} Alternatively, you may be required to submit a request for "bypass privileges" in order to push the secret. For information on how to request permission to bypass push protection and push the blocked secret, see "[Requesting bypass privileges when working with the command line](#requesting-bypass-privileges-when-working-with-the-command-line)."

{% endif %}

### Bypassing push protection when working with the command line

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to push, you {% ifversion push-protection-delegated-bypass %}may be able to {% else %}can {% endif %}bypass the block by specifying a reason for allowing the secret to be pushed.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

{% ifversion push-protection-delegated-bypass %}

If you don't see the option to bypass the block, the repository administrator or organization owner has configured tighter controls around push protection. Instead, you should remove the secret from the commit, or submit a request for "bypass privileges" in order to push the blocked secret. For more information, see "[Requesting bypass privileges when working with the command line](#requesting-bypass-privileges-when-working-with-the-command-line)."

{% endif %}

{% data reusables.secret-scanning.push-protection-visit-URL %}
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
{% data reusables.secret-scanning.push-protection-public-repos-bypass %}
1. Click **Allow me to push this secret**.
1. Reattempt the push on the command line within three hours. If you have not pushed within three hours, you will need to repeat this process.

{% ifversion push-protection-delegated-bypass %}

### Requesting bypass privileges when working with the command line

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

If your push has been blocked by push protection and you believe the secret is safe to push, you can request permission to bypass the block. Your request is sent to a designated group of reviewers, who will either approve or deny the request.

Requests expire after 7 days.

{% data reusables.secret-scanning.push-protection-visit-URL %}
{% data reusables.secret-scanning.push-protection-bypass-request-add-comment %}
{% data reusables.secret-scanning.push-protection-submit-bypass-request %}
{% data reusables.secret-scanning.push-protection-bypass-request-check-email %}

{% data reusables.secret-scanning.push-protection-bypass-request-decision-email %}

If your request is approved, you can push the commit (or commits) containing the secret to the repository, as well as any future commits that contain the same secret.

If your request is denied, you will need to remove the secret from all commits containing the secret before pushing again. For information on how to remove a blocked secret, see "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)."

{% endif %}

## Using push protection from the web UI

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

For a blocked commit, you can remove the secret from the file using the web UI. Once you remove the secret, you will be able to commit your changes.

{% ifversion push-protection-block-uploads %}

{% data variables.product.prodname_dotcom %} will also block the commit if you attempt to upload files containing supported secrets. The dialog box will show you which files contain the secret. You should remove the secret from the files before attempting to upload the files again.

{% data reusables.secret-scanning.push-protection-web-UI-uploads-beta %}

{% endif %}

{% data variables.product.prodname_dotcom %} will only display one detected secret at a time in the web UI. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

Organization owners can provide a custom link that will be displayed when a push is blocked. This custom link can contain resources and advice specific to your organization. For example, the custom link can point to a README file with information about the organization's secret vault, which teams and individuals to escalate questions to, or the organization's approved policy for working with secrets and rewriting commit history.

You can bypass the block by specifying a reason for allowing the secret. For more information on how to bypass push protection and commit the blocked secret, see "[Bypassing push protection when working with the web UI](#bypassing-push-protection-when-working-with-the-web-ui)."

### Bypassing push protection when working with the web UI

{% data reusables.secret-scanning.push-protection-remove-secret %} For more information about remediating blocked secrets, see "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)."

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)."

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to commit, you {% ifversion push-protection-delegated-bypass %}may be able to {% else %}can {% endif %}bypass the block by specifying a reason for allowing the secret.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. In dialog box that appeared when {% data variables.product.prodname_dotcom %} blocked your commit, review the name and location of the secret.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
{% data reusables.secret-scanning.push-protection-public-repos-bypass %}
1. Click **Allow secret**.

## Further reading

- "[AUTOTITLE](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection)"
- "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-repositories-and-organizations)"
