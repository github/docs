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
  ghae: '*'
  ghec: '*'
shortTitle: npm registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %}
{% else %}

## Limits for published npm versions

If you publish over 1,000 npm package versions to {% data variables.product.prodname_registry %}, you may see performance issues and timeouts occur during usage.

In the future, to improve performance of the service, you won't be able to publish more than 1,000 versions of a package on {% data variables.product.prodname_dotcom %}. Any versions published before hitting this limit will still be readable.

If you reach this limit, consider deleting package versions or contact Support for help. When this limit is enforced, our documentation will be updated with a way to work around this limit. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)" or "[AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages#contacting-support)."
{% endif %}

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %}

### Authenticating in a {% data variables.product.prodname_actions %} workflow

This registry supports granular permissions. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

{% data reusables.package_registry.v2-actions-codespaces %}
{% endif %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with npm by either editing your per-user _~/.npmrc_ file to include your {% data variables.product.pat_v1 %} or by logging in to npm on the command line using your username and {% data variables.product.pat_generic %}.

To authenticate by adding your {% data variables.product.pat_v1 %} to your _~/.npmrc_ file, edit the _~/.npmrc_ file for your project to include the following line, replacing {% ifversion ghes or ghae %}HOSTNAME with the host name of {% data variables.location.product_location %} and {% endif %}TOKEN with your {% data variables.product.pat_generic %}. Create a new _~/.npmrc_ file if one doesn't exist.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```

{% endif %}

To authenticate by logging in to npm, use the `npm login` command, replacing USERNAME with your {% data variables.product.prodname_dotcom %} username, TOKEN with your {% data variables.product.pat_v1 %}, and PUBLIC-EMAIL-ADDRESS with your email address.

If you are using npm CLI version 9 or greater and are logging in or out of a private registry using the command line, you should use the `--auth-type=legacy` option to read in your authentication details from prompts instead of using the default login flow through a browser. For more information, see [`npm-login`](https://docs.npmjs.com/cli/v9/commands/npm-login).

If {% data variables.product.prodname_registry %} is not your default package registry for using npm and you want to use the `npm audit` command, we recommend you use the `--scope` flag with the namespace that hosts the package (the personal account or organization {% ifversion packages-npm-v2 %}to which the package is scoped{% else %}that owns the repository where the package is hosted{% endif %}) when you authenticate to {% data variables.product.prodname_registry %}.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
$ npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
$ npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
```

{% endif %}

## Publishing a package

{% ifversion packages-npm-v2 %}
{% note %}

**Note:**

- Package names and scopes must only use lowercase letters.
- The tarball for an npm version must be smaller than 256MB in size.

{% endnote %}
{% else %}
{% note %}

**Note:** Package names and scopes must only use lowercase letters.

{% endnote %}

{% endif %}

{% ifversion packages-npm-v2 %}
The {% data variables.product.prodname_registry %} registry stores npm packages within your organization or personal account, and allows you to associate a package with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository.

{% data reusables.package_registry.publishing-user-scoped-packages %} For more information on linking a published package with a repository, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

You can connect a package to a repository as soon as the package is published by including a `repository` field in the `package.json` file. You can also use this method to connect multiple packages to the same repository. For more information, see "[Publishing multiple packages to the same repository](#publishing-multiple-packages-to-the-same-repository)."
{% else %}
By default, your package is published in the {% data variables.product.prodname_dotcom %} repository that you specify in the `name` field of the `package.json` file. For example, you would publish a package named `@my-org/test` to the `my-org/test` {% data variables.product.prodname_dotcom %} repository. You can publish multiple packages to the same {% data variables.product.prodname_dotcom %} repository by including a `repository` field in the `package.json` file. For more information, see "[Publishing multiple packages to the same repository](#publishing-multiple-packages-to-the-same-repository)."
{% endif %}

{% data reusables.package_registry.auto-inherit-permissions-note %}

You can set up the scope mapping for your project using either a local `.npmrc` file in the project or using the `publishConfig` option in the `package.json`. {% data variables.product.prodname_registry %} only supports scoped npm packages. Scoped packages have names with the format of `@NAMESPACE/PACKAGE-NAME`. Scoped packages always begin with an `@` symbol. You may need to update the name in your `package.json` to use the scoped name. For example, if you're the user `octocat` and your package is named `test`, you would assign the scoped package name as follows: `"name": "@octocat/test"`.

{% data reusables.package_registry.viewing-packages %}

### Publishing a package using a local _.npmrc_ file

You can use an _.npmrc_ file to configure the scope mapping for your project. In the _.npmrc_ file, use the {% data variables.product.prodname_registry %} URL and account owner so {% data variables.product.prodname_registry %} knows where to route package requests. Using an _.npmrc_ file prevents other developers from accidentally publishing the package to npmjs.org instead of {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Verify the name of your package in your project's `package.json`. The `name` field must contain the scope and the name of the package. For example, if your package is called "test", and you are publishing to the "My-org" {% data variables.product.prodname_dotcom %} organization, the `name` field in your `package.json` should be `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### Publishing a package using `publishConfig` in the `package.json` file

You can use `publishConfig` element in the `package.json` file to specify the registry where you want the package published. For more information, see "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" in the npm documentation.

1. Edit the `package.json` file for your package and include a `publishConfig` entry.
   {% ifversion ghes %}
   If your instance has subdomain isolation enabled:
   {% endif %}

   ```shell
   "publishConfig": {
     "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm. HOSTNAME/{% endif %}"
   },
   ```

   {% ifversion ghes %}
   If your instance has subdomain isolation disabled:

   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
   ```

   {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

## Publishing multiple packages to the same repository

To publish multiple packages {% ifversion packages-npm-v2 %}and link them {% endif %}to the same repository, you can include the URL of the {% data variables.product.prodname_dotcom %} repository in the `repository` field of the `package.json` file for each package. For more information, see "[Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)" and "[Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)" in the npm documentation.

To ensure the repository's URL is correct, replace `REPOSITORY` with the name of the repository containing the package you want to publish, and `OWNER` with the name of the personal account or organization on {% data variables.product.prodname_dotcom %} that owns the repository.

{% data variables.product.prodname_registry %} will match the repository based on the URL{% ifversion packages-npm-v2 %}{% else %}, instead of based on the package name{% endif %}.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## Installing a package

You can install packages from {% data variables.product.prodname_registry %} by adding the packages as dependencies in the `package.json` file for your project. For more information on using a `package.json` in your project, see "[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" in the npm documentation.

By default, you can add packages from one organization. For more information, see "[Installing packages from other organizations](#installing-packages-from-other-organizations)."

You also need to add the _.npmrc_ file to your project so that all requests to install packages will {% ifversion ghae %}be routed to{% else %}go through{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes or ghec %}When you route all package requests through {% data variables.product.prodname_registry %}, you can use both scoped and unscoped packages from _npmjs.org_. For more information, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation.{% endif %}

{% ifversion ghae %}
By default, you can only use npm packages hosted on your enterprise, and you will not be able to use unscoped packages. For more information on package scoping, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation. If required, {% data variables.product.prodname_dotcom %} support can enable an upstream proxy to npmjs.org. Once an upstream proxy is enabled, if a requested package isn't found on your enterprise, {% data variables.product.prodname_registry %} makes a proxy request to npmjs.org.
{% endif %}

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Configure `package.json` in your project to use the package you are installing. To add your package dependencies to the `package.json` file for {% data variables.product.prodname_registry %}, specify the full-scoped package name, such as `@my-org/server`. For packages from _npmjs.com_, specify the full name, such as `@babel/core` or `lodash`. Replace `ORGANIZATION_NAME/PACKAGE_NAME` with your package dependency.

   ```json
   {
     "name": "@my-org/server",
     "version": "1.0.0",
     "description": "Server app that uses the ORGANIZATION_NAME/PACKAGE_NAME package",
     "main": "index.js",
     "author": "",
     "license": "MIT",
     "dependencies": {
       "ORGANIZATION_NAME/PACKAGE_NAME": "1.0.0"
     }
   }
   ```

1. Install the package.

   ```shell
   npm install
   ```

### Installing packages from other organizations

By default, you can only use {% data variables.product.prodname_registry %} packages from one organization. If you'd like to route package requests to multiple organizations and users, you can add additional lines to your _.npmrc_ file, replacing {% ifversion ghes or ghae %}`HOSTNAME` with the host name of {% data variables.location.product_location %} and {% endif %}`NAMESPACE` with the name of the personal account or organization {% ifversion packages-npm-v2 %}to which the package is scoped{% else %}that owns the repository containing the project{% endif %}.

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
@NAMESPACE:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@NAMESPACE:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

```shell
@NAMESPACE:registry=https://HOSTNAME/_registry/npm
@NAMESPACE:registry=https://HOSTNAME/_registry/npm
```

{% endif %}

{% ifversion ghes %}

## Using the official npm registry

{% data variables.product.prodname_registry %} allows you to access the official npm registry at `registry.npmjs.com`, if your {% data variables.product.prodname_ghe_server %} administrator has enabled this feature. For more information, see [Connecting to the official npm registry](/admin/packages/configuring-package-ecosystem-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}
