---
title: Configuring npm for use with GitHub Packages
intro: 'You can configure npm to publish packages to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in an npm project.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

### Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Authenticating with a personal access token

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with npm by either editing your per-user *~/.npmrc* file to include your personal access token or by logging in to npm on the command line using your username and personal access token.

To authenticate by adding your personal access token to your *~/.npmrc* file, edit the *~/.npmrc* file for your project to include the following line, replacing {% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance and {% endif %}*TOKEN* with your personal access token.  Create a new *~/.npmrc* file if one doesn't exist.

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
//{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}/:_authToken=<em>TOKEN</em>
```

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation disabled:

```shell
//<em>HOSTNAME</em>/_registry/npm/:_authToken=<em>TOKEN</em>
```
{% endif %}

To authenticate by logging in to npm, use the `npm login` command, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, and *PUBLIC-EMAIL-ADDRESS* with your email address.

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
$ npm login --registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation disabled:

```shell
$ npm login --registry=https://<em>HOSTNAME</em>/_registry/npm/
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

#### Authenticating with the `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publishing a package

{% note %}

**Note:** Package names and scopes must only use lowercase letters.

{% endnote %}

By default, {% data variables.product.prodname_registry %} publishes a package in the {% data variables.product.prodname_dotcom %} repository you specify in the name field of the *package.json* file. For example, you would publish a package named `@my-org/test` to the `my-org/test` {% data variables.product.prodname_dotcom %} repository. You can add a summary for the package listing page by including a *README.md* file in your package directory. For more information, see "[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" and "[How to create Node.js Modules](https://docs.npmjs.com/getting-started/creating-node-modules)" in the npm documentation.

You can publish multiple packages to the same {% data variables.product.prodname_dotcom %} repository by including a `URL` field in the *package.json* file. For more information, see "[Publishing multiple packages to the same repository](#publishing-multiple-packages-to-the-same-repository)."

You can set up the scope mapping for your project using either a local *.npmrc* file in the project or using the `publishConfig` option in the *package.json*. {% data variables.product.prodname_registry %} only supports scoped npm packages. Scoped packages have names with the format of `@owner/name`. Scoped packages always begin with an `@` symbol. You may need to update the name in your *package.json* to use the scoped name. For example, `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

#### Publishing a package using a local *.npmrc* file

You can use an *.npmrc* file to configure the scope mapping for your project. In the *.npmrc* file, use the {% data variables.product.prodname_registry %} URL and account owner so {% data variables.product.prodname_registry %} knows where to route package requests. Using an *.npmrc* file prevents other developers from accidentally publishing the package to npmjs.org instead of {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Verify the name of your package in your project's *package.json*. The `name` field must contain the scope and the name of the package. For example, if your package is called "test", and you are publishing to the "My-org" {% data variables.product.prodname_dotcom %} organization, the `name` field in your *package.json* should be `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

#### Publishing a package using `publishConfig` in the *package.json* file

You can use `publishConfig` element in the *package.json* file to specify the registry where you want the package published. For more information, see "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" in the npm documentation.

1. Edit the *package.json* file for your package and include a `publishConfig` entry.
  {% if enterpriseServerVersions contains currentVersion %}
  If your instance has subdomain isolation enabled:
  {% endif %}
  ```shell
  "publishConfig": {
    "registry":"https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}"
  },
  ```
  {% if enterpriseServerVersions contains currentVersion %}
  If your instance has subdomain isolation disabled:
   ```shell
   "publishConfig": {
     "registry":"https://<em>HOSTNAME</em>/_registry/npm/"
   },
  ```
  {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### Publishing multiple packages to the same repository

To publish multiple packages to the same repository, you can include the URL of the {% data variables.product.prodname_dotcom %} repository in the `repository` field of the *package.json* file for each package.

To ensure the repository's URL is correct, replace REPOSITORY with the name of the repository containing the package you want to publish, and OWNER with the name of the user or organization account on {% data variables.product.prodname_dotcom %} that owns the repository.

{% data variables.product.prodname_registry %} will match the repository based on the URL, instead of based on the package name.

```shell
"repository":"https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>",
```

### Installing a package

You can install packages from {% data variables.product.prodname_registry %} by adding the packages as dependencies in the *package.json* file for your project. For more information on using a *package.json* in your project, see "[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" in the npm documentation.

By default, you can add packages from one organization. For more information, see "[Installing packages from other organizations](#installing-packages-from-other-organizations)."

You also need to add the *.npmrc* file to your project so all requests to install packages will go through {% data variables.product.prodname_registry %}. When you route all package requests through {% data variables.product.prodname_registry %}, you can use both scoped and unscoped packages from *npmjs.com*. For more information, see "[npm-scope](https://docs.npmjs.com/misc/scope)" in the npm documentation.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. Configure *package.json* in your project to use the package you are installing. To add your package dependencies to the *package.json* file for {% data variables.product.prodname_registry %}, specify the full-scoped package name, such as `@my-org/server`. For packages from *npmjs.com*, specify the full name, such as `@babel/core` or `@lodash`. For example, this following *package.json* uses the `@octo-org/octo-app` package as a dependency.

  ```
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the @octo-org/octo-app package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "@octo-org/octo-app": "1.0.0"
    }
  }
  ```
5. Install the package.

  ```shell
  $ npm install
  ```

#### Installing packages from other organizations

By default, you can only use {% data variables.product.prodname_registry %} packages from one organization. If you'd like to route package requests to multiple organizations and users, you can add additional lines to your *.npmrc* file, replacing {% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance and {% endif %}*OWNER* with the name of the user or organization account that owns the repository containing your project.

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>
@<em>OWNER</em>:registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
@<em>OWNER</em>:registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
```

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation disabled:

```shell
registry=https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
@<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm/
@<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm/
```
{% endif %}

### Further reading

- "[Deleting a package](/packages/publishing-and-managing-packages/deleting-a-package/)"
