---
title: Creating an issue
intro: 'Issues can be created in a variety of ways, so you can choose the most convenient method for your workflow.'
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
type: how_to
---

Issues can be used to keep track of bugs, enhancements, or other requests. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."

{% data reusables.repositories.administrators-can-disable-issues %}

## Creating an issue from a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. If your repository uses issue templates, next to the type of issue you'd like to open, click **Get started**.

   If the type of issue you'd like to open isn't included in the available options, click **Open a blank issue**.

   ![Screenshot of the template chooser for an issue. Below the template choices, a link, labeled "Open a blank issue," is outlined in dark orange.](/assets/images/help/issues/blank-issue-link.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Creating an issue with {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} To learn more about {% data variables.product.prodname_cli %}, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

To create an issue, use the `gh issue create` subcommand. To skip the interactive prompts, include the `--body` and the `--title` flags.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

You can also specify assignees, labels, milestones, and projects.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Creating an issue from a comment

You can open a new issue from a comment in an issue or pull request. When you open an issue from a comment, the issue contains a snippet showing where the comment was originally posted.

1. Navigate to the comment that you would like to open an issue from.
1. In that comment, click {% octicon "kebab-horizontal" aria-label="Show options" %}.

   ![Screenshot of a comment on a pull request. The kebab button is outlined in dark orange.](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)

1. Click **Reference in new issue**.
1. Use the "Repository" dropdown menu, and select the repository you want to open the issue in.
1. Type a descriptive title and body for the issue.
1. Click **Create issue**.
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Creating an issue from code

You can open a new issue from a specific line or lines of code in a file or pull request. When you open an issue from code, the issue contains a snippet showing the line or range of code you chose. You can only open an issue in the same repository where the code is stored.

{% data reusables.repositories.navigate-to-repo %}
1. Locate the code you want to reference in an issue:
    * To open an issue about code in a file, navigate to the file.
    * To open an issue about code in a pull request, navigate to the pull request and click {% octicon "diff" aria-hidden="true" %} **Files changed**. Then, browse to the file that contains the code you want included in your comment, and click **View**.
{% data reusables.repositories.choose-line-or-range %}
1. To the left of the code range, click {% octicon "kebab-horizontal" aria-label="Code line X options" %}. In the dropdown menu, click **Reference in new issue**.

   ![Screenshot of a file, with 8 lines selected. To the left of the first selected line, a button labeled with a kebab icon is outlined in dark orange.](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## Creating an issue from discussion

People with triage permission to a repository can create an issue from a discussion.

When you create an issue from a discussion, the contents of the discussion post will be automatically included in the issue body, and any labels will be retained. Creating an issue from a discussion does not convert the discussion to an issue or delete the existing discussion. For more information about {% data variables.product.prodname_discussions %}, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the right sidebar, click {% octicon "issue-opened" aria-hidden="true" %} **Create issue from discussion**.

   ![Screenshot of the sidebar in a discussion. The "Create issue from discussion" option is outlined in dark orange.](/assets/images/help/discussions/create-issue-from-discussion.png)

{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

{% endif %}

{% ifversion projects-v2-create-issue-modal %}

## Creating an issue from a project

{% data reusables.projects.about-issue-modal %} For more information about Projects, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."

1. Navigate to your project.
{% data reusables.projects.create-issue-modal %}

{% endif %}

{% ifversion projects-v1 %}

## Creating an issue from a {% data variables.projects.projects_v1_board %} note

If you're using a {% data variables.projects.projects_v1_board %} to track and prioritize your work, you can convert notes to issues. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)" and "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-notes-to-a-project-board#converting-a-note-to-an-issue)."

{% endif %}

{% ifversion fpt or ghec %}

## Creating an issue from a task list item

Within an issue, you can use task lists to break work into smaller tasks and track the full set of work to completion. If a task requires further tracking or discussion, you can convert the task to an issue by hovering over the task and clicking {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."

{% endif %}

## Creating an issue from a URL query

You can use query parameters to open issues. Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or an issue template on {% data variables.product.prodname_dotcom %}. To create your own query parameters, you must match the key and value pair.

{% tip %}

**Tip:** You can also create issue templates that open with default labels, assignees, and an issue title. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

{% endtip %}

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to add a label to an issue to use the `labels` query parameter. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

Query parameter | Example
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` creates an issue with the label "bug" and title "New bug report."
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` creates an issue with the title "New bug report" and the comment "Describe the problem" in the issue body.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` creates an issue with the labels "help wanted" and "bug".
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` creates an issue with the milestone "testing milestones."
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` creates an issue and assigns it to @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` creates an issue with the title "Bug fix" and adds it to the organization's project 1. {% ifversion projects-v2 and projects-v1 %}{% ifversion projects-in-issue-forms %}{% else %}Only {% data variables.projects.projects_v1_boards %} can currently be specified in URL queries.{% endif %}{% endif %}
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` creates an issue with a template in the issue body. The `template` query parameter works with templates stored in an `ISSUE_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

{% ifversion fpt or ghec %}
You can also use URL query parameters to fill custom text fields that you have defined in issue form templates. Query parameters for issue form fields can also be passed to the issue template chooser. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)."
{% endif %}

{% ifversion code-scanning-task-lists %}

## Creating an issue from a {% data variables.product.prodname_code_scanning %} alert

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}
If you're using issues to track and prioritize your work, you can use issues to track {% data variables.product.prodname_code_scanning %} alerts.
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Further reading

* "[AUTOTITLE](/get-started/writing-on-github)"
