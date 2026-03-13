---
title: Push protection from the command line
shortTitle: Command line protection
intro: Understand how {% data variables.product.github %} uses push protection to prevent secret leaks from the command line.
permissions: '{% data reusables.permissions.push-protection-resolve-block %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
contentType: concepts
---

Push protection prevents you from accidentally committing secrets to a repository by blocking pushes containing supported secrets.

When you attempt to push a supported secret from the command line to a repository secured by push protection, {% data variables.product.prodname_dotcom %} will block the push.

You should either:

* **Remove** the secret from your branch. For more information, see [Resolving a blocked push](/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/working-with-push-protection-from-the-command-line#resolving-a-blocked-push).
* **Follow a provided URL** to see what options are available to you to allow the push. For more information, see [Bypassing push protection](/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/working-with-push-protection-from-the-command-line#bypassing-push-protection) and [Requesting bypass privileges](/code-security/how-tos/secure-your-secrets/work-with-leak-prevention/working-with-push-protection-from-the-command-line#requesting-bypass-privileges).

Up to five detected secrets will be displayed at a time on the command line. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

If you confirm a secret is real and that you intend to fix it later, you should aim to remediate the secret as soon as possible. For example, you might revoke the secret and remove the secret from the repository's commit history. Real secrets that have been exposed must be revoked to avoid unauthorized access. You might consider first rotating the secret before revoking it. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}
