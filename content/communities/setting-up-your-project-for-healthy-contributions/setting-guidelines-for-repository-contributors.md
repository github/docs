---
title: Setting guidelines for repository contributors
intro: You can create guidelines to communicate how people should contribute to your project.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
---
## About contributing guidelines

To help your project contributors do good work, you can add a file with contribution guidelines to your project repository's root, `docs`, or `.github` folder. When someone opens a pull request or creates an issue, they will see a link to that file. {% ifversion fpt or ghec %}The link to the contributing guidelines also appears on your repository's `contribute` page. For an example of a `contribute` page, see [github/docs/contribute](https://github.com/github/docs/contribute).{% endif %}

For the repository owner, contribution guidelines are a way to communicate how people should contribute.

For contributors, the guidelines help them verify that they're submitting well-formed pull requests and opening useful issues.

For both owners and contributors, contribution guidelines save time and hassle caused by improperly created pull requests or issues that have to be rejected and re-submitted.

{% ifversion fpt or ghes or ghec %}

You can create default contribution guidelines for your organization{% ifversion fpt or ghes or ghec %} or personal account{% endif %}. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Tip:** Repository maintainers can set specific guidelines for issues by creating an issue or pull request template for the repository. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."

{% endtip %}

## Adding a _CONTRIBUTING_ file

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. Decide whether to store your contributing guidelines in your repository's root, `docs`, or `.github` directory. Then, in the filename field, type the name and extension for the file. Contributing guidelines filenames are not case sensitive. Files are rendered in rich text format if the file extension is in a supported format. For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents)."
    - To make your contributing guidelines visible in the repository's root directory, type _CONTRIBUTING_.
    - To make your contributing guidelines visible in the repository's `docs` directory, type _docs/_ to create the new directory, then _CONTRIBUTING_.
    - If a repository contains more than one _CONTRIBUTING_ file, then the file shown in links is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.
1. In the new file, add contribution guidelines. These could include:
    - Steps for creating good issues or pull requests.
    - Links to external documentation, mailing lists, or a code of conduct.
    - Community and behavioral expectations.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Examples of contribution guidelines

If you're stumped, here are some good examples of contribution guidelines:

- The {% data variables.product.prodname_docs %} [contribution guidelines](/contributing).
- The Ruby on Rails [contribution guidelines](https://github.com/rails/rails/blob/main/CONTRIBUTING.md).
- The Open Government [contribution guidelines](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md).

## Further reading

- The Open Source Guides' section "[Starting an Open Source Project](https://opensource.guide/starting-a-project/)"{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)"{% endif %}
