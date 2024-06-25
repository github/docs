If a package belongs to a registry that supports granular permissions, anyone with admin permissions to the package can set the package to private or public, and can grant access permissions for the package that are separate from the permissions set at the organization and repository levels. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

In most registries, to pull a package, you must authenticate with a {% data variables.product.pat_generic %} or `GITHUB_TOKEN`, regardless of whether the package is public or private. However, in the {% data variables.product.prodname_container_registry %}, public packages allow anonymous access and can be pulled without authentication or signing in via the CLI.

{% ifversion packages-inherit-permissions %}
{% note %}

**Note:** If you publish a package that is linked to a repository, the package inherits its permissions from the linked repository by default. To access the package's granular permissions settings, you must remove the package's inherited permissions. If you're the owner of an organization, you can disable the automatic inheritance of permissions for all new packages scoped to your organization. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#selecting-whether-a-package-inherits-permissions-from-a-repository)" and "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#disabling-automatic-inheritance-of-access-permissions-in-an-organization)."

{% endnote %}
{% endif %}

When you publish a package, you automatically get admin permissions to the package. If you publish a package to an organization, anyone with the `owner` role in the organization also gets admin permissions to the package.

For packages scoped to a personal account, you can give any person an access role. For packages scoped to an organization, you can give any person or team in the organization an access role.

If you are using a {% data variables.product.prodname_actions %} workflow to manage your packages, you can grant an access role to the repository the workflow is stored in {% data variables.package_registry.package-settings-actions-access-menu %}. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."

| Permission | Access description |
|------------|--------------------|
| Read       | Can download package. <br> Can read package metadata. |
| Write      | Can upload and download this package. <br> Can read and write package metadata. |
| Admin      | Can upload, download, delete, and manage this package. <br> Can read and write package metadata. <br> Can grant package permissions.

{% data reusables.package_registry.delete-with-github-token-using-api-beta %}
