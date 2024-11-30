If you have admin permissions to a container image, you can set the access permissions for the container image to private or public. Public images allow anonymous access and can be pulled without authentication or signing in via the CLI.

As an admin, you can also grant access permissions for a container image that are separate from the permissions you've set at the organization and repository levels.

For container images published and owned by a personal account, you can give any person an access role. For container images published and owned by an organization, you can give any person or team in the organization an access role.

{% ifversion packages-delete-with-github-token-api %}
If you are using a {% data variables.product.prodname_actions %} workflow to manage your container images, you can grant an access role to the repository the workflow is stored in by using the **Actions access** option in the package's settings. For more information, see "[Ensuring workflow access to your package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."
{% endif %}

| Permission | Access description |
|------------|--------------------|
| Read       | Can download package. <br> Can read package metadata. |
| Write      | Can upload and download this package. <br> Can read and write package metadata. |
| Admin      | Can upload, download{% ifversion packages-delete-with-github-token-api %}{% else %}, delete{% endif %}, and manage this package. <br> Can read and write package metadata. <br> Can {% ifversion packages-delete-with-github-token-api %}delete and restore packages{% else %}grant package permissions{% endif %}.

{% data reusables.package_registry.delete-with-github-token-using-api-beta %}
