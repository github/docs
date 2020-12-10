---
title: Creating a pull request template for your repository
intro: 'When you add a pull request template to your repository, project contributors will automatically see the template''s contents in the pull request body.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)."

You can create a *PULL_REQUEST_TEMPLATE/* subdirectory in any of the supported folders to contain multiple pull request templates, and use the `template` query parameter to specify the template that will fill the pull request body. For more information, see "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)."

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

You can create default pull request templates for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. For more information, see "[Creating a default community health file](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% endif %}

### Adding a pull request template

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field:
    -  To make your pull request template visible in the repository's root directory, name the pull request template `pull_request_template.md`. ![New pull request template name in root directory](/assets/images/help/repository/pr-template-file-name.png)
    - To make your pull request template visible in the repository's `docs` directory, name the pull request template `docs/pull_request_template.md`. ![New pull request template in docs directory](/assets/images/help/repository/pr-template-file-name-docs.png)
    - To store your file in a hidden directory, name the pull request template `.github/pull_request_template.md`. ![New pull request template in hidden directory](/assets/images/help/repository/pr-template-hidden-directory.png)
    - To create multiple pull request templates and use the `template` query parameter to specify a template to fill the pull request body, type *.github/PULL_REQUEST_TEMPLATE/*, then the name of your pull request template. For example, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. You can also store multiple pull request templates in a `PULL_REQUEST_TEMPLATE` subdirectory within the root or `docs/` directories. For more information, see "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)." ![New multiple pull request template in hidden directory](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. In the body of the new file, add your pull request template. This could include:
    - A [reference to a related issue](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) in your repository.
    - A description of the changes proposed in the pull request.
    - [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) of the person or team responsible for reviewing proposed changes.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Templates are available to collaborators when they are merged into the repository's default branch.
{% data reusables.files.propose_new_file %}

### 더 읽을거리

- "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)"
- "[About automation for issues and pull requests with query parameters](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Creating a pull request](/articles/creating-a-pull-request)"
