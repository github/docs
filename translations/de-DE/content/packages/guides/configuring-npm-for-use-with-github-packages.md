---
title: Configuring npm for use with GitHub Packages
intro: 'Sie können NPM für die Veröffentlichung von Paketen auf {% data variables.product.prodname_registry %} und für die Nutzung von auf {% data variables.product.prodname_registry %} gespeicherten Paketen als Abhängigkeiten in einem NPM-Projekt konfigurieren.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Limits for published npm versions

If you publish over 1,000 npm package versions to {% data variables.product.prodname_registry %}, you may see performance issues and timeouts occur during usage.

To reduce the number of versions you have published for your npm package, consider deleting package versions. Weitere Informationen findest Du unter „[Ein Paket löschen](/packages/manage-packages/deleting-a-package)."

In the future,  {% data variables.product.company_short %} will enforce a hard limit on publishing more than 1,000 versions of an npm package.  When we start enforcing the 1,000 versions limit for each npm package hosted on {% data variables.product.prodname_registry %}, we will offer more guidance on how to manage your package versions.

{% endif %}

### Bei {% data variables.product.prodname_registry %} authentifizieren

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
$ npm login --registry=https://npm.pkg.github.com
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

To authenticate by logging in to npm, use the `npm login` command, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, and *PUBLIC-EMAIL-ADDRESS* with your email address.

If {% data variables.product.prodname_registry %} is not your default package registry for using npm and you want to use the `npm audit` command, we recommend you use the `--scope` flag with the owner of the package when you authenticate to {% data variables.product.prodname_registry %}.

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation enabled:
{% endif %}

```shell
$ npm login --scope=@<em>OWNER</em> --registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}

> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```

{% if enterpriseServerVersions contains currentVersion %}
If your instance has subdomain isolation disabled:

```shell
$ npm login --scope=@<em>OWNER</em> --registry=https://<em>HOSTNAME</em>/_registry/npm/
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

#### #### Authenticating with the `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Ein Paket veröffentlichen

{% note %}

**Note:** Package names and scopes must only use lowercase letters.

{% endnote %}

By default, {% data variables.product.prodname_registry %} publishes a package in the {% data variables.product.prodname_dotcom %} repository you specify in the name field of the *package.json* file. Ein Paket namens `@my-org/test` würde beispielsweise im Repository `my-org/test` auf {% data variables.product.prodname_dotcom %} veröffentlicht. You can add a summary for the package listing page by including a *README.md* file in your package directory. For more information, see "[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" and "[How to create Node.js Modules](https://docs.npmjs.com/getting-started/creating-node-modules)" in the npm documentation.

You can publish multiple packages to the same {% data variables.product.prodname_dotcom %} repository by including a `URL` field in the *package.json* file. For more information, see "[Publishing multiple packages to the same repository](#publishing-multiple-packages-to-the-same-repository)."

Die Scope-Zuordnung für Ihr Projekt können Sie entweder über die lokale *.npmrc*-Datei im Projekt oder die Option `publishConfig` in der Datei *package.json* festlegen. {% data variables.product.prodname_registry %} only supports scoped npm packages. Pakete mit Scopes weisen Namen im Format `@owner/name` auf. Pakete mit Scopes beginnen immer mit dem Symbol `@`. You may need to update the name in your *package.json* to use the scoped name. Beispiel: `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

#### Publishing a package using a local *.npmrc* file

You can use an *.npmrc* file to configure the scope mapping for your project. In the *.npmrc* file, use the {% data variables.product.prodname_registry %} URL and account owner so {% data variables.product.prodname_registry %} knows where to route package requests. Using an *.npmrc* file prevents other developers from accidentally publishing the package to npmjs.org instead of {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Überprüfen Sie den Namen Ihres Pakets in der Datei *package.json* Ihres Projekts. Das Feld `name` (Name) muss den Scope und den Namen des Pakets enthalten. For example, if your package is called "test", and you are publishing to the "My-org"
{% data variables.product.prodname_dotcom %} organization, the `name` field in your *package.json* should be `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

#### Publishing a package using `publishConfig` in the *package.json* file

You can use `publishConfig` element in the *package.json* file to specify the registry where you want the package published. Weitere Informationen finden Sie unter „[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)“ in der NPM-Dokumentation.

1. Bearbeiten Sie die Datei *package.json* für Ihr Paket, und fügen Sie den Eintrag `publishConfig` hinzu.
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

### Ein Paket installieren

You can install packages from {% data variables.product.prodname_registry %} by adding the packages as dependencies in the *package.json* file for your project. For more information on using a *package.json* in your project, see "[Working with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" in the npm documentation.

By default, you can add packages from one organization. For more information, see "[Installing packages from other organizations](#installing-packages-from-other-organizations)."

You also need to add the *.npmrc* file to your project so all requests to install packages will go through {% data variables.product.prodname_registry %}. When you route all package requests through {% data variables.product.prodname_registry %}, you can use both scoped and unscoped packages from *npmjs.com*. Weitere Informationen finden Sie unter „[npm-scope](https://docs.npmjs.com/misc/scope) in der npm-Dokumentation.

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
5. Installieren Sie das Paket.

  ```shell
  $ npm install
  ```

#### Pakete von anderen Organisationen installieren

Standardmäßig können Sie nur {% data variables.product.prodname_registry %}-Pakete von einer Organisation verwenden. If you'd like to route package requests to multiple organizations and users, you can add additional lines to your *.npmrc* file, replacing {% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance and {% endif %}*OWNER* with the name of the user or organization account that owns the repository containing your project.

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

{% if currentVersion == "enterprise-server@3.0" or currentVersion ver_gt "enterprise-server@3.0" %}
### Using the official NPM registry

{% data variables.product.prodname_registry %} allows you to access the official NPM registry at `registry.npmjs.com`, if your {% data variables.product.prodname_ghe_server %} administrator has enabled this feature. For more information, see [Connecting to the official NPM registry](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}

### Weiterführende Informationen

- "[Deleting a package](/packages/publishing-and-managing-packages/deleting-a-package/)"
