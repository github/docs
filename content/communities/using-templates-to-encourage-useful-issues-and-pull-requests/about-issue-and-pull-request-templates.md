---
title: About issue and pull request templates
intro: 'With issue and pull request templates, you can customize and standardize the information you''d like contributors to include when they open issues and pull requests in your repository.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - community
---

After you create issue and pull request templates in your repository, contributors can use the templates to open issues or describe the proposed changes in their pull requests according to the repository's contributing guidelines. For more information about adding contributing guidelines to a repository, see "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors)."

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

You can create default issue and pull request templates for your organization or user account. For more information, see "[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

### Issue templates

When you create issue templates for your repository using the issue template builder, they'll be available for contributors to use when they open new issues in the repository.

![New issue page showing issue template choices](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Using the template builder, you can specify a title and description for each template, add the template content, and either commit the template to the default branch or open a pull request in the repository. The template builder automatically adds the YAML front matter markup that is required for the template to show on the new issue page. For more information, see "[Configuring issue templates for your repository](/articles/configuring-issue-templates-for-your-repository)."

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.repositories.issue-template-config %} For more information, see "[Configuring issue templates for your repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)."
{% endif %}

Issue templates are stored on the repository's default branch, in a hidden `.github/ISSUE_TEMPLATE` directory. If you create a template in another branch, it will not be available for collaborators to use. Issue template filenames are not case sensitive, and need a *.md* extension. {% data reusables.repositories.valid-community-issues %}

It is possible to manually create a single issue template in Markdown using the legacy issue template workflow, and project contributors will automatically see the template's contents in the issue body. However, we recommend using the upgraded multiple issue template builder to create issue templates. For more information about the legacy workflow, see "[Manually creating a single issue template for your repository](/articles/manually-creating-a-single-issue-template-for-your-repository)."

{% data reusables.repositories.security-guidelines %}

### Pull request templates

When you add a pull request template to your repository, project contributors will automatically see the template's contents in the pull request body.

![Sample pull request template](/assets/images/help/pull_requests/pr-template-sample.png)

You must create templates on the repository's default branch. Templates created in other branches are not available for collaborators to use. You can store your pull request template in the repository's visible root directory, the `docs` folder, or the hidden `.github` directory. Pull request template filenames are not case sensitive, and can have an extension such as *.md* or *.txt*.

For more information, see "[Creating a pull request template for your repository](/articles/creating-a-pull-request-template-for-your-repository)."
