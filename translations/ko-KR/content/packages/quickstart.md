---
title: Quickstart for GitHub Packages
intro: 'Publish to {% data variables.product.prodname_registry %} in 5 minutes or less with {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

### Introduction

You only need an existing {% data variables.product.prodname_dotcom %} repository to publish a package to {% data variables.product.prodname_registry %}. In this guide, you'll create a {% data variables.product.prodname_actions %} workflow to test your code and then publish it to {% data variables.product.prodname_registry %}. Feel free to create a new repository for this Quickstart. You can use it to test this and future {% data variables.product.prodname_actions %} workflows.

### Publishing your package

1. Create a new repository on {% data variables.product.prodname_dotcom %}, adding the `.gitignore` for Node. Create a private repository if you’d like to delete this package later, public packages cannot be deleted. For more information, see "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)."
2. Clone the repository to your local machine.
    {% raw %}
    ```shell
    $ git clone https://github.com/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
    {% endraw %}
3. Create an `index.js` file and add a basic alert to say "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. Initialize an npm package. In the package initialization wizard, enter your package with the name: _`@YOUR-USERNAME/YOUR-REPOSITORY`_, and set the test script to `exit 0` if you do not have any tests. Commit your changes and push them to
{% data variables.product.prodname_dotcom %}.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...

    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
    {% endraw %}
5. From your repository on {% data variables.product.prodname_dotcom %}, create a new file in the `.github/workflows` directory named `release-package.yml`. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
6. Copy the following YAML content into the `release-package.yml` file.
    {% raw %}
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
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: https://npm.pkg.github.com/
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
    ```
    {% endraw %}
7. Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**.
8. **Merge** the pull request.
9. Navigate to the **Code** tab and create a new release to test the workflow. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)."

Creating a new release in your repository triggers the workflow to build and test your code. If the tests pass, then the package will be published to {% data variables.product.prodname_registry %}.

### Viewing your published package

Packages are published at the repository level. You can see all the packages in a repository and search for a specific package.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### Installing a published package

Now that you've published the package, you'll want to use it as a dependency across your projects. For more information, see "[Configuring npm for use with {% data variables.product.prodname_registry %}](/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package)."

### 다음 단계

The basic workflow you just added runs any time a new release is created in your repository. But, this is only the beginning of what you can do with {% data variables.product.prodname_registry %}. You can publish your package to multiple registries with a single workflow, trigger the workflow to run on different events such as a merged pull request, manage containers, and more.

Combining {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %} can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" for an in-depth tutorial on GitHub Packages
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial on GitHub Actions
- "[Guides](/packages/guides)" for specific uses cases and examples
