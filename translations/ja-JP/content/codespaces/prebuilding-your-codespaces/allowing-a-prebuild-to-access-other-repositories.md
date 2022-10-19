---
title: Allowing a prebuild to access other repositories
shortTitle: Allow external repo access
intro: You can permit your prebuild to access other {% data variables.product.prodname_dotcom %} repositories so that it can be built successfully.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
---

By default, the {% data variables.product.prodname_actions %} workflow for a prebuild configuration can only access its own repository contents. Your project may use additional resources, located elsewhere, to build the development environment.

## Allowing a prebuild read access external resources

You can configure read access to other {% data variables.product.prodname_dotcom %} repositories, with the same repository owner, by specifying permissions in the `devcontainer.json` file used by your prebuild configuration. For more information, see "[Managing access to other repositories within your codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."

{% note %}

**Note**: You can only authorize read permissions in this way, and the owner of the target repository must be the same as the owner of the repository for which you're creating a prebuild. For example, if you're creating a prebuild configuration for the `octo-org/octocat` repository, then you'll be able to grant read permissions for other `octo-org/*` repositories if this is specified in the `devcontainer.json` file, and provided you have the permissions yourself.

{% endnote %}

When you create or edit a prebuild configuration for a `devcontainer.json` file that sets up read access to other repositories with the same repository owner, you'll be prompted to grant these permissions when you click **Create** or **Update**. For more information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)."

## Allowing a prebuild write access external resources

If your project requires write access to resources, or if the external resources reside in a repository with a different owner to the repository for which you are creating a prebuild configuration, you can use a {% data variables.product.pat_generic %} to grant this access.

You will need to create a new personal account and then use this account to create a {% data variables.product.pat_v1 %} with the appropriate scopes.

1. Create a new personal account on {% data variables.product.prodname_dotcom %}. 
   
   {% warning %}
   
   **Warning**: Although you can generate the {% data variables.product.pat_v1 %} using your existing personal account, we strongly recommend creating a new account with access only to the target repositories required for your scenario. This is because the access token's `repository` permission grants access to all of the repositories that the account has access to. For more information, see "[Signing up for a new GitHub account](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)" and "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)."
   
   {% endwarning %}
1. Give the new account read access to the required repositories. For more information, see "[Managing an individual's access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)."
1. While signed into the new account, create a {% data variables.product.pat_v1 %} with the `repo` scope. Optionally, if the prebuild will need to download packages from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, also select the `read:packages` scope. For more information, see "[Creating a {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

   !['repo' and 'packages' scopes selected for a {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/prebuilds-select-scopes.png) 
   
   If the prebuild will use a package from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, you will need to either grant the new account access to the package or configure the package to inherit the access permissions of the repository you are prebuilding. For more information, see "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."   
{% ifversion ghec %}1. Authorize the token for use with SAML single sign-on (SSO), so that it can access repositories that are owned by organizations with SSO enabled. For more information, see "[Authorizing a {% data variables.product.pat_generic %} for use with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."

   ![The button to configure SSO for a {% data variables.product.pat_v1 %}](/assets/images/help/codespaces/configure-SSO-for-PAT.png) 

{% endif %}
1. Copy the token string. You will assign this to a {% data variables.product.prodname_codespaces %} repository secret.
1. Sign back into the account that has admin access to the repository. 
1. In the repository for which you want to create {% data variables.product.prodname_github_codespaces %} prebuilds, create a new {% data variables.product.prodname_codespaces %} repository secret called `CODESPACES_PREBUILD_TOKEN`, giving it the value of the token you created and copied. For more information, see "[Managing encrypted secrets for your repository and organization for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)."

The {% data variables.product.pat_generic %} will be used for all subsequent prebuilds created for your repository. Unlike other {% data variables.product.prodname_codespaces %} repository secrets, the `CODESPACES_PREBUILD_TOKEN` secret is only used for prebuilding and will not be available to use in codespaces created from your repository.

## Further reading

- "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Troubleshooting prebuilds](/codespaces/troubleshooting/troubleshooting-prebuilds)"
