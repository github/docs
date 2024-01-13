---
title: Deleting and restoring a package
intro: Learn how to delete or restore a package.
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
  ghae: '*'
shortTitle: Delete & restore a package
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## Package deletion and restoration support on {% data variables.product.prodname_dotcom %}

On {% data variables.product.prodname_dotcom %} if you have the required access, you can delete:
- an entire private package
- an entire public package, if there's not more than 5000 downloads of any version of the package
- a specific version of a private package
- a specific version of a public package, if the package version doesn't have more than 5,000 downloads

{% note %}

**Note:**
- You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact us through the {% data variables.contact.contact_support_portal %} for further assistance.
- When deleting public packages, be aware that you may break projects that depend on your package.

{% endnote %}

On {% data variables.product.prodname_dotcom %}, you can also restore an entire package or package version, if:
- You restore the package within 30 days of its deletion.
- The same package namespace is still available and not used for a new package.

## Packages API support

{% data reusables.package_registry.packages-classic-pat-only %}

{% ifversion packages-rest-api %}

You can use the REST API to manage your packages. For more information, see the "[AUTOTITLE](/rest/packages)."

{% data reusables.package_registry.delete-with-github-token-using-api-beta %}

{% ifversion packages-delete-with-github-token-api %}
With registries that support granular permissions, you can use a `GITHUB_TOKEN` in a {% data variables.product.prodname_actions %} workflow to delete or restore packages using the REST API. The token must have `admin` permission to the package. If your workflow publishes a package, the `admin` role is granted by default to the repository where the workflow is stored. For existing packages not published by a workflow, you need to grant the repository the `admin` role to be able to use a {% data variables.product.prodname_actions %} workflow to delete or restore packages using the REST API. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)."
{% endif %}

{% endif %}

{% data reusables.package_registry.about-graphql-support %}

## Required permissions to delete or restore a package

{% ifversion packages-registries-v2 %}
With registries that support granular permissions, you can choose to allow packages to be scoped to a user or an organization, or linked to a repository.

To delete a package that has granular permissions separate from a repository, such as container images stored at {% ifversion ghes %}`https://containers.HOSTNAME/NAMESPACE/PACKAGE-NAME`{% else %}`https://ghcr.io/NAMESPACE/PACKAGE-NAME`{% endif %}{% ifversion packages-npm-v2 %} or packages stored at `https://npm.pkg.github.com/NAMESPACE/PACKAGE-NAME`{% endif %} (where `NAMESPACE` is the name of the personal account or organization to which the package is scoped), you must have admin access to the package. For more information, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages)."

For packages that inherit their access permissions from repositories, you can delete a package if you have admin permissions to the repository.

Some registries **only** support repository-scoped packages. For a list of these registries, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

{% else %}

You can delete a package if you have admin permissions to the repository in which the package is published.

{% endif %}

## Deleting a package version

### Deleting a version of a {% ifversion packages-registries-v2 %}repository-scoped {% endif %}package on {% data variables.product.prodname_dotcom %}

To delete a version of a {% ifversion packages-registries-v2 %}repository-scoped {% endif %}package, you must have admin permissions to the repository in which the package is published. For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
1. Search for and then click the name of the package that you want to manage.
{% data reusables.package_registry.package-settings-manage-versions-menu %}
{% data reusables.package_registry.package-settings-delete-versions %}
1. To confirm deletion, type the package name and click **I understand the consequences, delete this version**.

{% ifversion fpt or ghec or ghes %}

### Deleting a version of a {% ifversion packages-registries-v2 %}repository-scoped{% endif %} package with GraphQL

{% data reusables.package_registry.about-graphql-support %}{% ifversion packages-rest-api %} For information on using the REST API instead, see the "[AUTOTITLE](/rest/packages)."{% endif %}

Use the `deletePackageVersion` mutation in the GraphQL API. You must use a {% data variables.product.pat_v1 %} with the `read:packages`, `delete:packages`, and `repo` scopes. For more information about {% data variables.product.pat_v1_plural %}, see "[AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)."

The following example demonstrates how to delete a package version, using a `packageVersionId` of `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

To find all of the private packages you have published to {% data variables.product.prodname_registry %}, along with the version IDs for the packages, you can use the `packages` connection through the `repository` object. You will need a {% data variables.product.pat_v1 %} with the `read:packages` and `repo` scopes. For more information, see the [`packages`](/graphql/reference/objects#repository) connection or the [`PackageOwner`](/graphql/reference/interfaces#packageowner) interface.

For more information about the `deletePackageVersion` mutation, see "[AUTOTITLE](/graphql/reference/mutations#deletepackageversion)."

You cannot directly delete an entire package using GraphQL, but if you delete every version of a package, the package will no longer show on {% data variables.product.product_name %}.

{% endif %}

{% ifversion fpt or ghec %}

### Deleting a version of a user-scoped package on {% data variables.product.prodname_dotcom %}

To delete a specific version of a user-scoped package on {% data variables.product.prodname_dotcom %}, such as for a Docker image at `ghcr.io`, use these steps. To delete an entire package, see "[Deleting an entire user-scoped package on {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)."

To review who can delete a package version, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-manage-versions-menu %}
{% data reusables.package_registry.package-settings-delete-versions %}
1. In the confirmation box, type the name of the package to confirm you want to delete the chosen version of it.
1. Click **I understand the consequences, delete this version**.

### Deleting a version of an organization-scoped package on {% data variables.product.prodname_dotcom %}

To delete a specific version of an organization-scoped package on {% data variables.product.prodname_dotcom %}, such as for a Docker image at `ghcr.io`, use these steps.
To delete an entire package, see "[Deleting an entire organization-scoped package on {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)."

To review who can delete a package version, see "[Required permissions to delete or restore a package](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-manage-versions-menu %}
{% data reusables.package_registry.package-settings-delete-versions %}
1. In the confirmation box, type the name of the package to confirm you want to delete the chosen version of it.
1. Click **I understand the consequences, delete this version**.
{% endif %}

## Deleting an entire package

### Deleting an entire repository-scoped package on {% data variables.product.prodname_dotcom %}

To delete an entire repository-scoped package, you must have admin permissions to the repository that owns the package. For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
1. At the bottom of the page, under "Danger Zone", click **Delete this package**.
1. To confirm, review the confirmation message, enter your package name, and click **I understand, delete this package.**

{% ifversion fpt or ghec or ghes %}

### Deleting an entire user-scoped package on {% data variables.product.prodname_dotcom %}

To review who can delete a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-options-menu %}
1. At the bottom of the page, under "Danger zone", click **Delete this package**.
1. In the confirmation box, type the name of the package to confirm you want to delete it.
1. Click **I understand the consequences, delete this package**.

### Deleting an entire organization-scoped package on {% data variables.product.prodname_dotcom %}

To review who can delete a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-options-menu %}
1. At the bottom of the page, under "Danger zone", click **Delete this package**.
1. In the confirmation box, type the name of the package to confirm you want to delete it.
1. Click **I understand the consequences, delete this package**.
{% endif %}

## Restoring packages

You can restore a deleted package or version if:
- You restore the package within 30 days of its deletion.
- The same package namespace and version is still available and not reused for a new package.

For example, if you're the user `octocat`, and you have a deleted RubyGems package named `my-package` that was scoped to the repo `octocat/my-repo`, then you can only restore the package if the package namespace `rubygem.pkg.github.com/octocat/my-repo/my-package` is still available, and 30 days have not yet passed.

{% ifversion fpt or ghec %}
To restore a deleted package, you must also meet one of these permission requirements:
- For repository-scoped packages: You have admin permissions to the repository in which the deleted package is published.{% ifversion fpt or ghec %}
- For user-account scoped packages: The deleted package is scoped to your personal account.
- For organization-scoped packages: You have admin permissions to the deleted package in the organization to which the package is scoped.{% endif %}
{% endif %}

{% ifversion ghae or ghes %}
To delete a package, you must also have admin permissions to the repository in which the package is published.
{% endif %}

For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

Once the package is restored, the package will use the same namespace it did before. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

### Restoring a package in an organization

 You can restore a deleted package through your organization account settings, as long as the package was in a repository owned by the organization{% ifversion packages-registries-v2 %} or had granular permissions and was scoped to your organization account{% endif %}.

To review who can restore a package in an organization, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. On the left, click **Packages**.
1. Under "Deleted Packages", next to the package you want to restore, click **Restore**.
1. To confirm, type the name of the package and click **I understand the consequences, restore this package**.

{% ifversion fpt or ghec or ghes %}

### Restoring a user-account scoped package

You can restore a deleted package through your personal account settings, if the package was in one of your repositories or scoped to your personal account. For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.user-settings.access_settings %}
1. In the left sidebar, click **Packages**.
1. Under "Deleted Packages", next to the package you want to restore, click **Restore**.
1. To confirm, type the name of the package and click **I understand the consequences, restore this package**.

{% endif %}

### Restoring a package version

You can restore a package version from your package's landing page. To review who can restore a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

1. Navigate to your package's landing page.
{% data reusables.package_registry.package-settings-option %}
{% data reusables.package_registry.package-settings-manage-versions-menu %}
{% data reusables.package_registry.package-settings-versions-deleted-dropdown %}
1. Next to the deleted package version you want to restore, click **Restore**.
1. To confirm, click **I understand the consequences, restore this version.**
