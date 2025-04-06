---
title: Working with push protection in the GitHub UI
shortTitle: Push protection in the GitHub UI
intro: 'Learn your options for unblocking your commit when {% data variables.product.prodname_secret_scanning %} detects a secret in your changes.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
---

## About push protection in the {% data variables.product.prodname_dotcom %} UI

When you are creating and editing files in the {% data variables.product.prodname_dotcom %} UI, push protection prevents you from accidentally committing secrets to a repository by blocking commits containing supported secrets.

{% ifversion push-protection-block-uploads %}

{% data variables.product.prodname_dotcom %} will also block the commit if you attempt to upload files containing supported secrets.

{% data reusables.secret-scanning.push-protection-web-UI-uploads-beta %}

{% endif %}

You should either:

* **Remove** the secret from the commit. For more information, see "[Resolving a blocked commit](#resolving-a-blocked-commit)."
* **Review** the instructions in the dialog box {% ifversion push-protection-delegated-bypass %}to see what options are available to you{% endif %} to allow the push. For more information, see "[Bypassing push protection](#bypassing-push-protection){% ifversion push-protection-delegated-bypass %}" and "[Requesting bypass privileges](#requesting-bypass-privileges){% endif %}."

{% data variables.product.prodname_dotcom %} will only display one detected secret at a time in the web UI. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

Organization owners can provide a custom link that will be displayed when a push is blocked. This custom link can contain resources and advice specific to your organization. For example, the custom link can point to a README file with information about the organization's secret vault, which teams and individuals to escalate questions to, or the organization's approved policy for working with secrets and rewriting commit history.

## Resolving a blocked commit

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

To resolve a blocked commit in the web UI, you need to remove the secret from the file. Once you remove the secret, you will be able to commit your changes.

>[!NOTE] To learn how to resolved a blocked push on the command line, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line#resolving-a-blocked-push)."

## Bypassing push protection

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to commit, you {% ifversion push-protection-delegated-bypass %}may be able to {% else %}can {% endif %}bypass the block by specifying a reason for allowing the secret.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. In dialog box that appeared when {% data variables.product.prodname_dotcom %} blocked your commit, review the name and location of the secret.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
{% data reusables.secret-scanning.push-protection-public-repos-bypass %}
1. Click **Allow secret**.

{% ifversion push-protection-delegated-bypass %}

If you don't see the option to bypass the block, the repository administrator or organization owner has configured tighter controls around push protection. Instead, you should remove the secret from the commit, or submit a request for "bypass privileges" in order to push the blocked secret. For more information, see "[Requesting bypass privileges](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui#requesting-bypass-privileges)."

{% endif %}

{% ifversion push-protection-delegated-bypass %}

## Requesting bypass privileges

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

If your commit has been blocked by push protection, you can request permission to bypass the block. The request is sent to a designated group of reviewers, who will either approve or deny the request.

Requests expire after 7 days.

1. In dialog box that appeared when {% data variables.product.prodname_dotcom %} blocked your commit, review the name and location of the secret.
1. Click **Start request**. The request will open in a new tab.
{% data reusables.secret-scanning.push-protection-bypass-request-add-comment %}
{% data reusables.secret-scanning.push-protection-submit-bypass-request %}
{% data reusables.secret-scanning.push-protection-bypass-request-check-email %}

{% data reusables.secret-scanning.push-protection-bypass-request-decision-email %}

If your request is approved, you can commit the changes containing the secret to the file. You can also commit any future changes that contain the same secret.

If your request is denied, you will need to remove the secret from the file before you can commit your changes.

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line)
