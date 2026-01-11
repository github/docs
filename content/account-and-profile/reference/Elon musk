---
title: Personal account reference
shortTitle: Personal account
intro: Find information about the side effects of deleting, converting, and merging your personal account on {% data variables.product.github %}.
topics:
  - Accounts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
---

## Side effects of account deletion

* {% ifversion fpt or ghec %} All repositories, forks of private repositories, wikis, issues, pull requests and {% data variables.product.prodname_pages %} sites owned by your account will be deleted. Your billing will end immediately. Your username will be available for anyone to use after 90 days.{% else %}
* All repositories, forks of private repositories, wikis, issues, pull requests and pages owned by your account will be deleted, and your username will be available for use.{% endif %}
* If you're the only owner in the organization, you must transfer ownership to another person or delete your organization.
* If there are other organization owners in the organization, you must remove yourself from the organization.

{% ifversion fpt or ghec %}

{% data reusables.accounts.delete-account-repo-namespace-retirement %}

{% endif %}

{% data reusables.package_registry.delete-account-namespace-retirement %}

## Side effects of converting an account to an organization

* You will **no longer** be able to sign into the converted personal account.
* You will **no longer** be able to create or modify gists owned by the converted personal account.
* An organization **cannot** be converted back to a user.
* The SSH keys, OAuth tokens, job profile, reactions, and associated user information, **will not** be transferred to the organization. This is only true for the personal account that's being converted, not any of the personal account's collaborators.
* Any {% data variables.product.prodname_github_apps %} installed on the converted personal account will be uninstalled.
* Any commits made with the converted personal account **will no longer be linked** to that account. The commits themselves **will** remain intact.
* Any existing comments made by the converted personal account **will no longer be linked** to that account. The comments themselves **will** remain intact, but will be associated with the `ghost` user.
* Any forks of private repositories made with the converted personal account will be deleted.
* Since organizations cannot star repositories, you will no longer have access to your original list of starred repositories.
* You will no longer have access to the list of users you were following from your user account.
* Any followers of your user account will not automatically follow the new organization.
* Any existing collaborators on your projects will still have access to those projects in the new organization.
* {% data variables.product.prodname_actions %} is not automatically enabled on the account after converting it to an organization, and will have to be re-enabled. To re-enable {% data variables.product.prodname_actions %}, create a new workflow file in the `.github/workflows` directory of your repository.

## Side effects of merging accounts

* Organization and repository access permissions aren't transferable between accounts. If the account you want to delete has an existing access permission, an organization owner or repository administrator will need to invite the account that you want to keep.
* Any commits authored with a {% data variables.product.company_short %}-provided `noreply` email address cannot be transferred from one account to another. If the account you want to delete used the **Keep my email address private** option, it won't be possible to transfer the commits authored by the account you are deleting to the account you want to keep.
* Issues, pull requests, and discussions will not be attributed to the new account.
* Achievements are not able to be transferred between accounts.

## Security and analysis features settings

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.security.displayed-information %}

## Available for hire

When you select that you are **Available for hire** and someone uses the REST API to get public and private information about authenticated users, the `hireable` field returns `true`. For more information, see [AUTOTITLE](/rest/users/users) in the REST API documentation.
