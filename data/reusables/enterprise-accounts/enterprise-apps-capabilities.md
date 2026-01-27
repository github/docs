Enterprise-installed {% data variables.product.prodname_github_apps %} cannot call every enterprise API, but several APIs have already been updated to support {% data variables.product.prodname_github_apps %}. These APIs and GraphQL mutations include:

* [List and create organizations in your enterprise](/graphql/reference/mutations#createenterpriseorganization)
* [Manage users in your enterprise](/graphql/reference/objects#enterprise)
* Create and manage {% data variables.product.prodname_github_app %} installations in your organizations
* Manage enterprise custom repository properties
* Call the enterprise SCIM APIs

Check the [changelog](https://github.blog/changelog/) for updates on new APIs and permissions for {% data variables.product.prodname_github_apps %}.
