---
title: My commit is blocked by push protection
intro: 'To keep your repository secure, push protection prevents you from accidentally committing secrets to the repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Commit blocked by push protection
---

## Understanding why push protection has blocked your commit

Leaked secrets can pose serious security risks to your repository and your supply chain. Push protection prevents you from accidentally introducing secrets to your codebase where they could be exploited by malicious actors.

If the repository you're contributing to on {% data variables.product.github %} is secured by push protection, you'll encounter a push protection block whenever you:

* **Push commits** containing recognized secrets **from the command line** to the remote repository.
* **Commit changes** {% ifversion push-protection-block-uploads %}or upload files {% endif %}containing recognized secrets to a repository in the **{% data variables.product.github %} UI**. {% ifversion secret-scanning-push-protection-content-endpoints %}
* **Make certain requests** containing recognized secrets in **the REST API**.{% endif %}

## Resolving a push protection block

In order to resolve the block, you should remove the secret from the commit {% ifversion secret-scanning-push-protection-content-endpoints %}(or request){% endif %}. If you believe the secret is safe to push, you may be able to bypass the block. For more information on how to remove the secret or, if necessary, bypass the block, see:

* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line)
* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui){% ifversion secret-scanning-push-protection-content-endpoints %}
* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-rest-api){% endif %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)
