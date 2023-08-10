---
title: Creating a pull request template for your repository
intro: 'When you add a pull request template to your repository, project contributors will automatically see the template''s contents in the pull request body.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
---

For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."

You can create a _PULL_REQUEST_TEMPLATE/_ subdirectory in any of the supported folders to contain multiple pull request templates, and use the `template` query parameter to specify the template that will fill the pull request body. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)."

{% ifversion fpt or ghes or ghec %}

You can create default pull request templates for your organization{% ifversion fpt or ghes or ghec %} or personal account{% endif %}. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

## Adding a pull request template

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field:
    - To make your pull request template visible in the repository's root directory, name the pull request template `pull_request_template.md`.
    - To make your pull request template visible in the repository's `docs` directory, name the pull request template `docs/pull_request_template.md`.
    - To store your file in a hidden directory, name the pull request template `.github/pull_request_template.md`.
    - To create multiple pull request templates and use the `template` query parameter to specify a template to fill the pull request body, type _.github/PULL_REQUEST_TEMPLATE/_, then the name of your pull request template. For example, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. You can also store multiple pull request templates in a `PULL_REQUEST_TEMPLATE` subdirectory within the root or `docs/` directories. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)."
1. In the body of the new file, add your pull request template. This could include:
    - A [reference to a related issue](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests) in your repository.
    - A description of the changes proposed in the pull request.
    - [@mentions](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) of the person or team responsible for reviewing proposed changes.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Templates are available to collaborators when they are merged into the repository's default branch.
{% data reusables.files.propose_new_file %}

## Further reading

- "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)"
- "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)"
