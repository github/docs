---
title: Manually creating a single issue template for your repository
intro: 'When you add a manually-created issue template to your repository, project contributors will automatically see the template''s contents in the issue body.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
---

{% data reusables.repositories.legacy-issue-template-tip %}

You can create an _ISSUE_TEMPLATE/_ subdirectory in any of the supported folders to contain multiple issue templates, and use the `template` query parameter to specify the template that will fill the issue body. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."

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

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% data reusables.repositories.default-issue-templates %}

## Adding an issue template

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field:
    * To make your issue template visible in the repository's root directory, type the name of your _issue_template_. For example, `issue_template.md`.
    * To make your issue template visible in the repository's `docs` directory, type _docs/_ followed by the name of your _issue_template_. For example, `docs/issue_template.md`,
    * To store your file in a hidden directory, type _.github/_ followed by the name of your _issue_template_. For example, `.github/issue_template.md`.
    * To create multiple issue templates and use the `template` query parameter to specify a template to fill the issue body, type _.github/ISSUE_TEMPLATE/_, then the name of your issue template. For example, `.github/ISSUE_TEMPLATE/issue_template.md`. You can also store multiple issue templates in an `ISSUE_TEMPLATE` subdirectory within the root or `docs/` directories. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."
1. In the body of the new file, add your issue template. This could include:
    * YAML frontmatter
    * Expected behavior and actual behavior
    * Steps to reproduce the problem
    * Specifications like the version of the project, operating system, or hardware
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Templates are available to collaborators when they are merged into the repository's default branch.
{% data reusables.files.propose_new_file %}

## Further reading

* "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)"
* "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)"
* "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)"
