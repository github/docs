---
title: Deleting and restoring a package
intro: 'Learn how to delete or restore a package.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
  - /packages/manage-packages/deleting-a-package
  - /packages/guides/deleting-a-container-image
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## Package deletion and restoration support on {% data variables.product.prodname_dotcom %}

On {% data variables.product.prodname_dotcom %} if you have the required access, you can delete:
- an entire private package
- an entire public package, if there's not more than 25 downloads of any version of the package
- a specific version of a private package
- a specific version of a public package, if the package version doesn't have more than 25 downloads

{% note %}

**Примечание:**
- You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact [GitHub support](https://support.github.com/contact) for further assistance.
- When deleting public packages, be aware that you may break projects that depend on your package.

{% endnote %}

On {% data variables.product.prodname_dotcom %}, you can also restore an entire package or package version, if:
- You restore the package within 30 days of its deletion.
- The same package namespace is still available and not used for a new package.

## Packages API support

{% if currentVersion == "free-pro-team@latest" %}

You can use the REST API to manage your packages. For more information, see the "[{% data variables.product.prodname_registry %} API](/rest/reference/packages)."

{% endif %}

For packages that inherit their permissions and access from repositories, you can use GraphQL to delete a specific package version.{% if currentVersion == "free-pro-team@latest" %} The {% data variables.product.prodname_registry %} GraphQL API does not support containers or Docker images that use the package namespace `https://ghcr.io/OWNER/PACKAGE-NAME`. For more information about GraphQL support, see "[Deleting a version of a repository-scoped package with GraphQL](#deleting-a-version-of-a-repository-scoped-package-with-graphql)."

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

## Required permissions to delete or restore a package

For packages that inherit their access permissions from repositories, you can delete a package if you have admin permissions to the repository.

Repository-scoped packages on {% data variables.product.prodname_registry %} include these packages:
- npm
- RubyGems
- maven
- Gradle
- NuGet
- Docker images at `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`

{% if currentVersion == "free-pro-team@latest" %}

To delete a package that has granular permissions separate from a repository, such as containers or Docker images stored at `https://ghcr.io/OWNER/PACKAGE-NAME`, you must have admin access to the package.
 <!--PLACEHOLDER - once packages restructuring is done this is a good place to link to the access control and visibility article.-->

{% data reusables.package_registry.container-registry-beta %}

{% endif %}


## Automate package version deletion with {% data variables.product.prodname_actions %}

You can automate package version deletion using an official action created by {% data variables.product.company_short %}. This action is available in the actions repository or on {% data variables.product.prodname_marketplace %} and only works with repository-scoped packages. For more information, see the "Delete Package Versions" action on [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/delete-package-versions) or in the [actions repository](https://github.com/actions/delete-package-versions).

## Deleting a package version

### Deleting a version of a repository-scoped package on {% data variables.product.prodname_dotcom %}

To delete a version of a repository-scoped package, you must have admin permissions to the repository that owns the package. For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
5. On the left, click **Manage versions**.
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this version**. ![Confirm package deletion button](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

### Deleting a version of a repository-scoped package with GraphQL

For packages that inherit their permissions and access from repositories, you can use the GraphQL to delete a specific package version.

{% if currentVersion == "free-pro-team@latest" %}
GraphQL is not supported for containers or Docker images at `ghcr.io`.
{% endif %}<!--PLACEHOLDER for when API link is live:  For full support, use the REST API. For more information, see the "\[{% data variables.product.prodname_registry %} API\](/rest/reference/packages)." -->Use the `deletePackageVersion` mutation in the GraphQL API. You must use a token with the `read:packages`, `delete:packages`, and `repo` scopes. For more information about tokens, see "[About {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)."

The following example demonstrates how to delete a package version, using a `packageVersionId` of `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

To find all of the private packages you have published to {% data variables.product.prodname_registry %}, along with the version IDs for the packages, you can use the `packages` connection through the `repository` object. You will need a token with the `read:packages` and `repo` scopes. For more information, see the [`packages`](/graphql/reference/objects#repository) connection or the [`PackageOwner`](/graphql/reference/interfaces#packageowner) interface.

For more information about the `deletePackageVersion` mutation, see "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)."

You cannot directly delete an entire package using GraphQL, but if you delete every version of a package, the package will no longer show on {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}
### Deleting a version of a user-scoped package on {% data variables.product.prodname_dotcom %}

To delete a specific version of a user-scoped package on {% data variables.product.prodname_dotcom %}, such as for a Docker image at `ghcr.io`, use these steps. To delete an entire package, see "[Deleting an entire user-scoped package on {% data variables.product.prodname_dotcom %}](#deleting-an-entire-user-scoped-package-on-github)."

{% data reusables.package_registry.container-registry-beta %}

To review who can delete a package version, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. On the left, click **Manage versions**.
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this version**. ![Confirm package deletion button](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Deleting a version of an organization-scoped package on GitHub

To delete a specific version of an organization-scoped package on {% data variables.product.prodname_dotcom %}, such as for a Docker image at `ghcr.io`, use these steps. To delete an entire package, see "[Deleting an entire organization-scoped package on {% data variables.product.prodname_dotcom %}](#deleting-an-entire-organization-scoped-package-on-github)."

{% data reusables.package_registry.container-registry-beta %}

To review who can delete a package version, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. On the left, click **Manage versions**.
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this version**. ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)
{% endif %}

## Deleting an entire package

### Deleting an entire repository-scoped package on {% data variables.product.prodname_dotcom %}

To delete an entire repository-scoped package, you must have admin permissions to the repository that owns the package. For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.package-settings-option %}
4. Under "Danger Zone", click **Delete this package**.
5. To confirm, review the confirmation message, enter your package name, and click **I understand, delete this package.** ![Confirm package deletion button](/assets/images/help/package-registry/package-version-deletion-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}
### Deleting an entire user-scoped package on {% data variables.product.prodname_dotcom %}

To review who can delete a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-user-level %}
{% data reusables.package_registry.package-settings-option %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Deleting an entire organization-scoped package on {% data variables.product.prodname_dotcom %}

To review who can delete a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.package_registry.package-settings-from-org-level %}
{% data reusables.package_registry.package-settings-option %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![Delete package button](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![Confirm package deletion button](/assets/images/help/package-registry/confirm-container-package-deletion.png)
{% endif %}

## Restoring packages

You can restore a deleted package or version if:
- You restore the package within 30 days of its deletion.
- The same package namespace and version is still available and not reused for a new package.

For example, if you have a deleted rubygem package named `octo-package` that was scoped to the repo `octo-repo-owner/octo-repo`, then you can only restore the package if the package namespace `rubygem.pkg.github.com/octo-repo-owner/octo-repo/octo-package` is still available, and 30 days have not yet passed.

You must also meet one of these permission requirements:
  - For repository-scoped packages: You have admin permissions to the repository that owns the deleted package.
  - For user-account scoped packages: Your user account owns the deleted package.
  - For organization-scoped packages: You have admin permissions to the deleted package in the organization that owns the package.

For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

Once the package is restored, the package will use the same namespace it did before. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

### Restoring a package in an organization

You can restore a deleted package through your organization account settings, as long as the package was in one of your repositories or had granular permissions and was scoped to your organization account.

To review who can restore a package in an organization, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
3. On the left, click **Packages**.
4. Under "Deleted Packages", next to the package you want to restore, click **Restore**. ![Restore button](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. To confirm, type the name of the package and click **I understand the consequences, restore this package**. ![Restore package confirmation button](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### Restoring a user-account scoped package

You can restore a deleted package through your user account settings, if the package was in one of your repositories or scoped to your user account. For more information, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

{% data reusables.user_settings.access_settings %}
2. On the left, click **Packages**.
4. Under "Deleted Packages", next to the package you want to restore, click **Restore**. ![Restore button](/assets/images/help/package-registry/restore-option-for-deleted-package-in-an-org.png)
5. To confirm, type the name of the package and click **I understand the consequences, restore this package**. ![Restore package confirmation button](/assets/images/help/package-registry/type-package-name-and-restore-button.png)

### Restoring a package version

You can restore a package version from your package's landing page. To review who can restore a package, see "[Required permissions](#required-permissions-to-delete-or-restore-a-package)."

1. Navigate to your package's landing page.
2. On the right, click **Package settings**.
2. On the left, click **Manage versions**.
3. On the top right, use the "Versions" drop-down menu and select **Deleted**. ![Versions drop-down menu showing the deleted option](/assets/images/help/package-registry/versions-drop-down-menu.png)
4. Next to the deleted package version you want to restore, click **Restore**. ![Restore option next to a deleted package version](/assets/images/help/package-registry/restore-package-version.png)
5. To confirm, click **I understand the consequences, restore this version.** ![Confirm package version restoration](/assets/images/help/package-registry/confirm-package-version-restoration.png)
