---
title: Setting guidelines for repository contributors
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors/
  - /articles/setting-guidelines-for-repository-contributors
intro: You can create guidelines to communicate how people should contribute to your project.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

To help your project contributors do good work, you can add a file with contribution guidelines to your project repository's root, `docs`, or `.github` folder. When someone opens a pull request or creates an issue, they will see a link to that file.

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

For the repository owner, contribution guidelines are a way to communicate how people should contribute.

For contributors, the guidelines help them verify that they're submitting well-formed pull requests and opening useful issues.

For both owners and contributors, contribution guidelines save time and hassle caused by improperly created pull requests or issues that have to be rejected and re-submitted.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

You can create default contribution guidelines for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. For more information, see "[Creating a default community health file](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Tip:** Repository maintainers can set specific guidelines for issues by creating an issue or pull request template for the repository. For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)."

{% endtip %}

### Adding a *CONTRIBUTING* file

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Decide whether to store your contributing guidelines in your repository's root, `docs`, or `.github` directory. Then, in the filename field, type the name and extension for the file. Contributing guidelines filenames are not case sensitive, and can have an extension such as *.md* or *.txt*. ![New file name](/assets/images/help/repository/new-file-name.png)
    - To make your contributing guidelines visible in the repository's root directory, type *CONTRIBUTING*.
    - To make your contributing guidelines visible in the repository's `docs` directory, type *docs/* to create the new directory, then *CONTRIBUTING*.
4. In the new file, add contribution guidelines. These could include:
    - Steps for creating good issues or pull requests.
    - Links to external documentation, mailing lists, or a code of conduct.
    - Community and behavioral expectations.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Examples of contribution guidelines

If you're stumped, here are some good examples of contribution guidelines:

- The Atom editor [contribution guidelines](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).
- The Ruby on Rails [contribution guidelines](https://github.com/rails/rails/blob/master/CONTRIBUTING.md).
- The Open Government [contribution guidelines](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md).

### 더 읽을거리
- The Open Source Guides' section "[Starting an Open Source Project](https://opensource.guide/starting-a-project/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Adding a license to a repository](/articles/adding-a-license-to-a-repository)"{% endif %}
