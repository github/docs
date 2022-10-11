---
title: Manually creating a single issue template for your repository
intro: 'When you add a manually-created issue template to your repository, project contributors will automatically see the template''s contents in the issue body.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository/
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

{% data reusables.repositories.legacy-issue-template-tip %}

You can create an *ISSUE_TEMPLATE/* subdirectory in any of the supported folders to contain multiple issue templates, and use the `template` query parameter to specify the template that will fill the issue body. For more information, see "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)."

You can add YAML frontmatter to each issue template to pre-fill the issue title, automatically add labels and assignees, and give the template a name and description that will be shown in the template chooser that people see when creating a new issue in your repository.

Here is example YAML front matter.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Note:** If a front matter value includes a YAML-reserved character such as `:` , you must put the whole value in quotes. For example, `":bug: Bug"` or `":new: triage needed, :bug: bug"`.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

### Adding an issue template

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field:
    -  To make your issue template visible in the repository's root directory, type the name of your *issue_template*. For example, `issue_template.md`. ![New issue template name in root directory](/assets/images/help/repository/issue-template-file-name.png)
    - To make your issue template visible in the repository's `docs` directory, type *docs/* followed by the name of your *issue_template*. For example, `docs/issue_template.md`, ![New issue template in docs directory](/assets/images/help/repository/issue-template-file-name-docs.png)
    - To store your file in a hidden directory, type *.github/* followed by the name of your *issue_template*. For example, `.github/issue_template.md`. ![New issue template in hidden directory](/assets/images/help/repository/issue-template-hidden-directory.png)
    - To create multiple issue templates and use the `template` query parameter to specify a template to fill the issue body, type *.github/ISSUE_TEMPLATE/*, then the name of your issue template. For example, `.github/ISSUE_TEMPLATE/issue_template.md`. You can also store multiple issue templates in an `ISSUE_TEMPLATE` subdirectory within the root or `docs/` directories. For more information, see "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)." ![New multiple issue template in hidden directory](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. In the body of the new file, add your issue template. This could include:
    - YAML frontmatter
    - Expected behavior and actual behavior
    - Steps to reproduce the problem
    - Specifications like the version of the project, operating system, or hardware
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Templates are available to collaborators when they are merged into the repository's default branch.
{% data reusables.files.propose_new_file %}

### Дополнительная литература

- "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)"
- "[Configuring issue templates for your repository](/articles/configuring-issue-templates-for-your-repository)"
- "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Creating an issue](/articles/creating-an-issue)"
