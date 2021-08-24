---
title: Creating an issue
intro: 'Issues can be created in a variety of ways, so you can choose the most convenient method for your workflow.'
permissions: People with read permissions can create an issue in a repository where issues are enabled.
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
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
---

Issues can be used to keep track of bugs, enhancements, or other requests. For more information, see "[About issues](/issues/tracking-your-work-with-issues/about-issues)."

{% data reusables.repositories.administrators-can-disable-issues %}

## Creating an issue from a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.repositories.new_issue %}
1. If your repository uses issue templates, click **Get started** next to the type of issue you'd like to open.
  ![Select the type of issue you want to create](/assets/images/help/issues/issue_template_get_started_button.png)
   Or, click **Open a blank issue** if the type of issue you'd like to open isn't included in the available options.
  ![Link to open a blank issue](/assets/images/help/issues/blank_issue_link.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Creating an issue with {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

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
2. In that comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Kebab button in pull request review comment](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Click **Reference in new issue**.
  ![Reference in new issue menu item](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Use the "Repository" drop-down menu, and select the repository you want to open the issue in.
  ![Repository dropdown for new issue](/assets/images/help/pull_requests/new-issue-repository.png)
5. Type a descriptive title and body for the issue.
  ![Title and body for new issue](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Click **Create issue**.
  ![Button to create new issue](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Creating an issue from code

You can open a new issue from a specific line or lines of code in a file or pull request. When you open an issue from code, the issue contains a snippet showing the line or range of code you chose. You can only open an issue in the same repository where the code is stored.

![Code snippet rendered in an issue opened from code](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Locate the code you want to reference in an issue:
    - To open an issue about code in a file, navigate to the file.
    - To open an issue about code in a pull request, navigate to the pull request and click {% octicon "diff" aria-label="The file diff icon" %} **Files changed**. Then, browse to the file that contains the code you want include in your comment, and click **View**.
{% data reusables.repositories.choose-line-or-range %}
4. To the left of the code range, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. In the drop-down menu, click **Reference in new issue**.
  ![Kebab menu with option to open a new issue from a selected line](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

## Creating an issue from a project board note

If you're using a project board to track and prioritize your work, you can convert project board notes to issues. For more information, see "[About project boards](/github/managing-your-work-on-github/about-project-boards)" and "[Adding notes to a project board](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)."

{% ifversion fpt %}

## Creating an issue from a task list item

Within an issue, you can use task lists to break work into smaller tasks and track the full set of work to completion. If a task requires further tracking or discussion, you can convert the task to an issue by hovering over the task and clicking {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see "[About task lists](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)."

{% endif %}

## Creating an issue from a URL query

You can use query parameters to open issues. Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or an issue template on {% data variables.product.prodname_dotcom %}. To create your own query parameters, you must match the key and value pair.

{% tip %}

**Tip:** You can also create issue templates that open with default labels, assignees, and an issue title. For more information, see "[Using templates to encourage useful issues and pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

{% endtip %}

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to add a label to an issue to use the `labels` query parameter. For more information, see "[Repository permission levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)."

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

Query parameter | Example
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` creates an issue with the label "bug" and title "New bug report."
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` creates an issue with the title "New bug report" and the comment "Describe the problem" in the issue body.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` creates an issue with the labels "help wanted" and "bug".
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` creates an issue with the milestone "testing milestones."
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` creates an issue and assigns it to @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` creates an issue with the title "Bug fix" and adds it to the organization's project board 1.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` creates an issue with a template in the issue body. The `template` query parameter works with templates stored in an `ISSUE_TEMPLATE` subdirectory within the root, `docs/` or `.github/` directory in a repository. For more information, see "[Using templates to encourage useful issues and pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

## Further reading

- "[Writing on GitHub](/github/writing-on-github)"
