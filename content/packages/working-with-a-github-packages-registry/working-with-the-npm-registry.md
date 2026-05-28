````md
---
title: Working with the npm registry
intro: 'You can configure npm to publish packages to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in an npm project.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: npm registry
category:
  - Work with a package registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion ghec %}

## URL for the {% data variables.product.prodname_npm_registry %}

If you access {% data variables.product.github %} at {% data variables.product.prodname_dotcom_the_website %}, you will publish packages to `https://npm.pkg.github.com`. Examples in this article use this URL.

If you access {% data variables.product.github %} at another domain, such as `octocorp.ghe.com`, replace `https://npm.pkg.github.com` with `https://npm.SUBDOMAIN.ghe.com`, where `SUBDOMAIN` is your enterprise's unique subdomain.

{% endif %}

{% ifversion packages-npm-v2 %}
{% else %}

## Limits for published npm versions

If you publish over 1,000 npm package versions to {% data variables.product.prodname_registry %}, you may experience performance issues and request timeouts.

To improve platform performance, {% data variables.product.prodname_dotcom %} may enforce a publishing limit of 1,000 versions per package in the future. Versions published before reaching this limit will remain available for download.

If you reach this limit, consider deleting unused package versions or contacting support. For more information, see [AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package) or [AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages#contacting-support).

{% endif %}

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

Before publishing or installing packages from {% data variables.product.prodname_registry %}, you must authenticate npm using either:

- A personal access token stored in a `~/.npmrc` file
- The `npm login` command

{% ifversion packages-npm-v2 %}

### Authenticating in a {% data variables.product.prodname_actions %} workflow

This registry supports granular permissions. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

{% data reusables.package_registry.v2-actions-codespaces %}

{% endif %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with npm by either editing your per-user `~/.npmrc` file to include your {% data variables.product.pat_v1 %}, or by logging in to npm on the command line using your username and {% data variables.product.pat_generic %}.

### About the `.npmrc` file

The `.npmrc` file stores npm configuration settings, including registry mappings and authentication tokens.

You can configure authentication:

- Globally using `~/.npmrc`
- Per project using a local `.npmrc` file

Using a project-level `.npmrc` file helps ensure packages are published to the correct registry.

### Authenticating using a `~/.npmrc` file

To authenticate by adding your {% data variables.product.pat_v1 %} to your `~/.npmrc` file, edit the file and include the following line, replacing {% ifversion ghes %}`HOSTNAME` with the host name of {% data variables.location.product_location %} and {% endif %}`TOKEN` with your {% data variables.product.pat_generic %}.

Create a new `~/.npmrc` file if one does not already exist.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
````

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```

{% endif %}

### Authenticating using `npm login`

To authenticate using the command line, use the `npm login` command and replace:

* `USERNAME` with your {% data variables.product.prodname_dotcom %} username
* `TOKEN` with your {% data variables.product.pat_v1 %}
* `PUBLIC-EMAIL-ADDRESS` with your email address

If you are using npm CLI version 9 or greater and logging in to a private registry from the command line, use the `--auth-type=legacy` option to avoid the browser-based login flow. For more information, see [`npm-login`](https://docs.npmjs.com/cli/v10/commands/npm-login).

If {% data variables.product.prodname_registry %} is not your default package registry and you want to use the `npm audit` command, we recommend using the `--scope` flag with the namespace that hosts the package.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
$ npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
$ npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://HOSTNAME/_registry/npm/

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% endif %}

## Publishing a package

> [!NOTE]
> {% ifversion packages-npm-v2 %}

> * Package names and scopes must use lowercase letters only.
> * The tarball for an npm version must be smaller than 256MB.

{% else %}

> Package names and scopes must use lowercase letters only.

{% endif %}

{% ifversion packages-npm-v2 %}

The {% data variables.product.prodname_registry %} registry stores npm packages within your organization or personal account and allows you to associate packages with repositories.

You can configure packages to inherit permissions from a repository or define granular permissions independently.

{% data reusables.package_registry.publishing-user-scoped-packages %}

For more information on linking a published package with a repository, see [AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package).

{% else %}

By default, your package is published in the {% data variables.product.prodname_dotcom %} repository specified in the `name` field of the `package.json` file.

For example, a package named `@my-org/test` will publish to the `my-org/test` repository.

{% endif %}

{% data reusables.package_registry.auto-inherit-permissions-note %}

{% data variables.product.prodname_registry %} supports scoped npm packages only.

Scoped packages use the format:

```shell
@NAMESPACE/PACKAGE-NAME
```

For example:

```json
{
  "name": "@octocat/test"
}
```

### Example project structure

```text
my-package/
├── .npmrc
├── package.json
├── README.md
└── src/
```

### Publishing a package using a local `.npmrc` file

You can use a local `.npmrc` file to configure scope mapping for your project.

Example `.npmrc` file:

```shell
@NAMESPACE:registry=https://npm.pkg.github.com
```

This configuration ensures packages under the specified namespace are published to {% data variables.product.prodname_registry %} instead of the public npm registry.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}

1. Verify the package name in your project's `package.json` file.

   Example:

   ```json
   {
     "name": "@my-org/test"
   }
   ```

{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### Publishing a package using `publishConfig`

You can define the target registry directly in `package.json` using `publishConfig`.

For more information, see [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig) in the npm documentation.

Example:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

## Publishing multiple packages to the same repository

To publish multiple packages {% ifversion packages-npm-v2 %}and link them {% endif %}to the same repository, include the repository URL in the `repository` field of each package's `package.json` file.

Example:

```json
{
  "repository": "https://github.com/OWNER/REPOSITORY"
}
```

{% data variables.product.prodname_registry %} matches repositories using the repository URL.

## Installing a package

You can install packages from {% data variables.product.prodname_registry %} by adding them as dependencies in your project's `package.json` file.

Example:

```json
{
  "dependencies": {
    "@my-org/server": "1.0.0"
  }
}
```

You must also configure a `.npmrc` file so package requests are routed through {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}

Install dependencies:

```shell
npm install
```

### Installing packages from other organizations

By default, npm uses packages from a single organization scope.

To use packages from multiple organizations or users, add multiple namespace mappings to your `.npmrc` file.

Example:

```shell
@ORG_ONE:registry=https://npm.pkg.github.com
@ORG_TWO:registry=https://npm.pkg.github.com
```

## Troubleshooting

### `npm ERR! 403 Forbidden`

This error commonly occurs when:

* Your token does not have the required scopes
* Authentication failed
* You do not have permission to access the package

Verify that your {% data variables.product.pat_v1 %} includes the required scopes:

* `read:packages`
* `write:packages`

### `Package name must be lowercase`

{% data variables.product.prodname_registry %} only supports lowercase package names and scopes.

Invalid:

```shell
@MyOrg/TestPackage
```

Valid:

```shell
@myorg/testpackage
```

### `npm login` opens a browser or hangs

If you are using npm CLI version 9 or later, use:

```shell
npm login --auth-type=legacy
```

### Package published to npmjs.org instead of {% data variables.product.prodname_registry %}

This issue commonly occurs when:

* The `.npmrc` file is missing
* The registry is not configured correctly
* `publishConfig` is not defined

Verify that your project contains either:

```shell
@NAMESPACE:registry=https://npm.pkg.github.com
```

or:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

{% ifversion ghes %}

## Using the official npm registry

{% data variables.product.prodname_registry %} allows access to the official npm registry at `registry.npmjs.com` if enabled by your {% data variables.product.prodname_ghe_server %} administrator.

For more information, see [Connecting to the official npm registry](/admin/packages/configuring-package-ecosystem-support-for-your-enterprise#connecting-to-the-official-npm-registry).

{% endif %}

```
```
