---
title: Creating an issue
intro: 'Issues can be used to keep track of bugs, enhancements, or other requests.'
permissions: People with read permissions can create an issue in a repository where issues are enabled.
redirect_from:
  - /articles/creating-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

You can open a new issue based on code from an existing pull request. For more information, see "[Opening an issue from code](/github/managing-your-work-on-github/opening-an-issue-from-code)."

You can open a new issue directly from a comment in an issue or a pull request review. For more information, see "[Opening an issue from a comment](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Tip**: You can also create an issue using the {% data variables.product.prodname_cli %}. For more information, see "[`gh issue create`](https://cli.github.com/manual/gh_issue_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

If you're using a project board to track and prioritize your work, you can convert project board notes to issues. For more information, see "[About project boards](/github/managing-your-work-on-github/about-project-boards)" and "[Adding notes to a project board](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)."

{% tip %}

**Tips**: Project maintainers can choose to:  
  - Create an issue template for a repository. Templates include prompts for information in the body of an issue. For more information, see "[About issue and pull request templates](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."
  - Disable issues for a repository. For more information, see "[Disabling issues](/github/managing-your-work-on-github/disabling-issues)." Pull requests can't be turned off and are always available.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Click **New issue**.
  ![New Issues button](/assets/images/help/issues/new_issues_button.png)
4. If there are multiple issue types, click **Get started** next to the type of issue you'd like to open.
  ![Select the type of issue you want to create](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. Optionally, click **Open a blank issue.** if the type of issue you'd like to open isn't included in the available options.
  ![Link to open a blank issue](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. Optionally, click **Open a regular issue.** if the type of issue you'd like to open isn't included in the available options.
  ![Link to open a regular issue](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}
### Further reading

- "[Creating a permanent link to a code snippet](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)"
