---
title: About issue and pull request templates
intro: 'With issue and pull request templates, you can customize and standardize the information you''d like contributors to include when they open issues and pull requests in your repository.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: About templates
---

After you create issue and pull request templates in your repository, contributors can use the templates to open issues or describe the proposed changes in their pull requests according to the repository's contributing guidelines. For more information about adding contributing guidelines to a repository, see "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors)."

{% ifversion fpt or ghes or ghec %}

You can create default issue and pull request templates for your organization or personal account. For more information, see "[Creating a default community health file](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

## Issue templates

When you create issue templates for your repository using the issue template builder{% ifversion fpt or ghec %} or with issue forms{% endif %}, contributors can select the appropriate template when they open new issues in the repository.

![New issue page showing issue template choices](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Issue templates are helpful when you want to provide guidance for opening issues while allowing contributors to specify the content of their issues. {% ifversion fpt or ghec %} If you want contributors to provide specific, structured information when they open issues, issue forms help ensure that you receive your desired information.{% endif %}

Using the template builder, you can specify a title and description for each template, add the template content, and either commit the template to the default branch or open a pull request in the repository. The template builder automatically adds the YAML front matter markup that is required for the template to show on the new issue page. For more information, see "[Configuring issue templates for your repository](/articles/configuring-issue-templates-for-your-repository)."

{% ifversion fpt or ghec %}
With issue forms, you can create templates that have web form fields using the {% data variables.product.prodname_dotcom %} form schema. When a contributor opens an issue using an issue form, the form inputs are converted to a standard markdown issue comment. You can specify different input types and set inputs as required to help contributors open actionable issues in your repository. For more information, see "[Configuring issue templates for your repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)" and "[Syntax for issue forms](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)."
{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
{% data reusables.repositories.issue-template-config %} For more information, see "[Configuring issue templates for your repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)."
{% endif %}

Issue templates are stored on the repository's default branch, in a hidden `.github/ISSUE_TEMPLATE` directory. If you create a template in another branch, it will not be available for collaborators to use. Issue template filenames are not case sensitive, and need a *.md* extension.{% ifversion fpt or ghec %} Issue templates created with issue forms need a *.yml* extension.{% endif %} {% data reusables.repositories.valid-community-issues %}

It is possible to manually create a single issue template in Markdown using the legacy issue template workflow, and project contributors will automatically see the template's contents in the issue body. However, we recommend using the upgraded multiple issue template builder{% ifversion fpt or ghec %} or issue forms{% endif %} to create issue templates. For more information about the legacy workflow, see "[Manually creating a single issue template for your repository](/articles/manually-creating-a-single-issue-template-for-your-repository)."

{% data reusables.repositories.security-guidelines %}

## Pull request templates

When you add a pull request template to your repository, project contributors will automatically see the template's contents in the pull request body.

![Sample pull request template](/assets/images/help/pull_requests/pr-template-sample.png)

You must create templates on the repository's default branch. Templates created in other branches are not available for collaborators to use. You can store your pull request template in the repository's visible root directory, the `docs` folder, or the hidden `.github` directory. Pull request template filenames are not case sensitive, and can have an extension such as *.md* or *.txt*.

For more information, see "[Creating a pull request template for your repository](/articles/creating-a-pull-request-template-for-your-repository)."
