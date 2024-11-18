---
title: Allowing a prebuild to access other repositories
shortTitle: Allow external repo access
intro: 'You can permit your prebuild to access other {% data variables.product.prodname_dotcom %} repositories so that it can be built successfully.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with admin access to a repository can configure prebuilds for the repository.
product: '{% data reusables.gated-features.codespaces-repo %}'
---

By default, the {% data variables.product.prodname_actions %} workflow for a prebuild configuration can only access its own repository contents. Your project may use additional resources, located elsewhere, to build the development environment.

## Allowing a prebuild read access to external resources

You can configure read access to other {% data variables.product.prodname_dotcom %} repositories, with the same repository owner, by specifying permissions in the `devcontainer.json` file used by your prebuild configuration. For more information, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."

{% note %}

**Notes**:

* You can only authorize read permissions in this way, and the owner of the target repository must be the same as the owner of the repository for which you're creating a prebuild. For example, if you're creating a prebuild configuration for the `octo-org/octocatrepository`, then you'll be able to grant read permissions for other repositories, such `asocto-org/octodemo`, if this is specified in the `devcontainer.json` file, and provided you have the permissions yourself.
* You can't use wildcards to specify repositories. You must define permissions for each repository for which you want to grant access.

{% endnote %}

When you create or edit a prebuild configuration for a `devcontainer.json` file that sets up read access to other repositories with the same repository owner, you'll be prompted to grant these permissions when you click **Create** or **Update**. For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

## Allowing a prebuild write access to external resources

If your project requires write access to resources, or if the external resources reside in a repository with a different owner than the repository for which you are creating a prebuild configuration, you can use a {% data variables.product.pat_generic %} to grant this access.

You will need to create a new personal account and then use this account to create a {% data variables.product.pat_v1 %} with the appropriate scopes.

1. Create a new personal account on {% data variables.product.prodname_dotcom %}.

   {% warning %}

   **Warning**: Although you can generate the {% data variables.product.pat_v1 %} using your existing personal account, we strongly recommend creating a new account with access only to the target repositories required for your scenario. This is because the access token's `repository` permission grants access to all of the repositories that the account has access to. For more information, see "[AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github)" and "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)."

   {% endwarning %}
1. Give the new account read access to the required repositories. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)."
1. While signed into the new account, create a {% data variables.product.pat_v1 %} with the `repo` scope. Optionally, if the prebuild will need to download packages from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, also select the `read:packages` scope. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)."

   ![Screenshot of the "Select scopes" configuration options for a {% data variables.product.pat_v1 %}, with the "repo" and "read:packages" scopes selected.](/assets/images/help/codespaces/prebuilds-select-scopes.png)

   If the prebuild will use a package from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, you will need to either grant the new account access to the package or configure the package to inherit the access permissions of the repository you are prebuilding. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."
{% ifversion ghec %}
1. Click **Configure SSO** and authorize the token for use with SAML single sign-on (SSO), so that it can access repositories that are owned by organizations with SSO enabled. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."

   ![Screenshot of the "{% data variables.product.pat_v1_caps_plural %}" page. The "Configure SSO" button for a PAT is highlighted with a dark orange outline.](/assets/images/help/codespaces/configure-sso-for-pat.png)

{% endif %}
1. Copy the token string. You will assign this to a {% data variables.product.prodname_codespaces %} repository secret.
1. Sign back into the account that has admin access to the repository.
1. In the repository for which you want to create {% data variables.product.prodname_github_codespaces %} prebuilds, create a new {% data variables.product.prodname_codespaces %} repository secret called `CODESPACES_PREBUILD_TOKEN`, giving it the value of the token you created and copied. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-development-environment-secrets-for-your-repository-or-organization#adding-secrets-for-a-repository)."

The {% data variables.product.pat_generic %} will be used for all subsequent prebuilds created for your repository. Unlike other {% data variables.product.prodname_codespaces %} repository secrets, the `CODESPACES_PREBUILD_TOKEN` secret is only used for prebuilding and will not be available for use in codespaces created from your repository.

## Further reading

* "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
* "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-prebuilds)"
