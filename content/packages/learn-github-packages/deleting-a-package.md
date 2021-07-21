---
title: Deleting a package
intro: 'You can delete a version of a {% ifversion not ghae %}private{% endif %} package using GraphQL or on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  ghes: '>=2.22 <3.1'
  ghae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% ifversion not ghae %}At this time, {% data variables.product.prodname_registry %} on {% data variables.product.product_location %} does not support deleting public packages.{% endif %}

You can only delete a specified version of a {% ifversion not ghae %}private {% endif %}package on {% data variables.product.product_name %} or with the GraphQL API. To remove an entire {% ifversion not ghae %}private {% endif %}package from appearing on {% data variables.product.product_name %}, you must delete every version of the package first.

## Deleting a version of a {% ifversion not ghae %}private {% endif %}package on {% data variables.product.product_name %}

To delete a {% ifversion not ghae %}private {% endif %}package version, you must have admin permissions in the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. Click the name of the package that you want to delete.
  ![Package name](/assets/images/help/package-registry/select-pkg-cloud.png)
4. On the right, use the **Edit package** drop-down and select "Manage versions".
  ![Package name](/assets/images/help/package-registry/manage-versions.png)
5. To the right of the version you want to delete, click **Delete**.
  ![Delete package button](/assets/images/help/package-registry/delete-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this version**.
  ![Confirm package deletion button](/assets/images/help/package-registry/confirm-package-deletion.png)

## Deleting a version of a {% ifversion not ghae %}private {% endif %}package with GraphQL

Use the `deletePackageVersion` mutation in the GraphQL API. You must use a token with the `read:packages`, `delete:packages`, and `repo` scopes. For more information about tokens, see "[About {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)."

Here is an example cURL command to delete a package version with the package version ID of `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`, using a personal access token.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

To find all of the {% ifversion not ghae %}private {% endif %}packages you have published to {% data variables.product.prodname_registry %}, along with the version IDs for the packages, you can use the `packages` connection through the `repository` object. You will need a token with the `read:packages` and `repo` scopes. For more information, see the [`packages`](/graphql/reference/objects#repository) connection or the [`PackageOwner`](/graphql/reference/interfaces#packageowner) interface.

For more information about the `deletePackageVersion` mutation, see "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)."

You cannot delete an entire package, but if you delete every version of a package, the package will no longer show on {% data variables.product.product_name %}.
