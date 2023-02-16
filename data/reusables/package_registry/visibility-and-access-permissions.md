If a package belongs to a registry that supports granular permissions, anyone with admin permissions to the package can set the package to private or public. Public packages allow anonymous access and can be pulled without authentication or signing in via the CLI. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

Anyone with admin permissions to the package can also grant access permissions for the package that are separate from the permissions set at the organization and repository levels. 

When you publish a package, you automatically get admin permissions to the package. If you publish a package to an organization, anyone with the `owner` role in the organization also gets admin permissions to the package.

For packages scoped to a personal account, you can give any person an access role. For packages scoped to an organization, you can give any person or team in the organization an access role.

{% ifversion packages-delete-with-github-token-api %}
If you are using a {% data variables.product.prodname_actions %} workflow to manage your container images, you can grant an access role to the repository the workflow is stored in by using the **Actions access** option in the package's settings. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."
{% endif %}

| Permission | Access description |
|------------|--------------------|
| Read       | Can download package. <br> Can read package metadata. |
| Write      | Can upload and download this package. <br> Can read and write package metadata. |
| Admin      | Can upload, download{% ifversion packages-delete-with-github-token-api %}{% else %}, delete{% endif %}, and manage this package. <br> Can read and write package metadata. <br> Can {% ifversion packages-delete-with-github-token-api %}delete and restore packages{% else %}grant package permissions{% endif %}.

{% data reusables.package_registry.delete-with-github-token-using-api-beta %}
