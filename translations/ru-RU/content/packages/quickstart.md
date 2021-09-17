---
title: Quickstart for GitHub Packages
intro: 'Publish to {% data variables.product.prodname_registry %} with {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introduction

In this guide, you'll create a {% data variables.product.prodname_actions %} workflow to test your code and then publish it to {% data variables.product.prodname_registry %}.

### Publishing your package

1. Create a new repository on {% data variables.product.prodname_dotcom %}, adding the `.gitignore` for Node. {% if currentVersion ver_lt "enterprise-server@3.1" %} Create a private repository if you’d like to delete this package later, public packages cannot be deleted.{% endif %} For more information, see "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."
2. Clone the repository to your local machine.
    ```shell
    $ git clone https://{% if currentVersion == "github-ae@latest" %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. Create an `index.js` file and add a basic alert to say "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. Initialize an npm package with `npm init`. In the package initialization wizard, enter your package with the name: _`@YOUR-USERNAME/YOUR-REPOSITORY`_, and set the test script to `exit 0`. This will generate a `package.json` file with information about your package.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...    
    ```
    {% endraw %}

5. Run `npm install` to generate the `package-lock.json` file, then commit and push your changes to {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Create a `.github/workflows` directory. In that directory, create a file named `release-package.yml`.
7. Copy the following YAML content into the `release-package.yml` file{% if currentVersion == "github-ae@latest" %}, replacing `YOUR-HOSTNAME` with the name of your enterprise{% endif %}.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
        permissions:
          packages: write
          contents: read{% endif %}
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: {% if currentVersion == "github-ae@latest" %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Commit and push your changes to {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    $ git commit -m "workflow to publish package"
    $ git push
    ```
9.  The workflow that you created will run whenever a new release is created in your repository. If the tests pass, then the package will be published to {% data variables.product.prodname_registry %}.

    To test this out, navigate to the **Code** tab in your repository and create a new release. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)."

### Viewing your published package

You can view all of the packages you have published.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### Installing a published package

Now that you've published the package, you'll want to use it as a dependency across your projects. For more information, see "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)."

### Дальнейшие шаги

The basic workflow you just added runs any time a new release is created in your repository. But this is only the beginning of what you can do with {% data variables.product.prodname_registry %}. You can publish your package to multiple registries with a single workflow, trigger the workflow to run on different events such as a merged pull request, manage containers, and more.

Combining {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %} can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" for an in-depth tutorial on GitHub Packages
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial on GitHub Actions
- "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)" for specific uses cases and examples
