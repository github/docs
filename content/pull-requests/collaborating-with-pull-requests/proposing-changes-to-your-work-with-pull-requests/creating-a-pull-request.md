---
title: Creating a pull request
intro: 'Create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)" and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

You can specify which branch you'd like to merge your changes into when you create your pull request. Pull requests can only be opened between two branches that are different.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Changing the branch range and destination repository

By default, pull requests are based on the parent repository's default branch. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch)."

If the default parent repository isn't correct, you can change both the parent repository and the branch with the drop-down lists. You can also swap your head and base branches with the drop-down lists to establish diffs between reference points. References here must be branch names in your GitHub repository.

![Screenshot of a pull request. The dropdown to edit the compare branch is expanded.](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

When thinking about branches, remember that the _base branch_ is **where** changes should be applied, the _head branch_ contains **what** you would like to be applied.

When you change the base repository, you also change notifications for the pull request. Everyone that can push to the base repository will receive an email notification and see the new pull request in their dashboard the next time they sign in.

When you change any of the information in the branch range, the Commit and Files changed preview areas will update to show your new range.

{% tip %}

**Tips**:
- Using the compare view, you can set up comparisons across any timeframe. For more information, see "[AUTOTITLE](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)."
- Project maintainers can add a pull request template for a repository. Templates include prompts for information in the body of a pull request. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."

{% endtip %}

## Creating the pull request

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. In the "Branch" menu, choose the branch that contains your commits.

   ![Screenshot of the branch dropdown menu on the main page of a repository.](/assets/images/help/pull_requests/branch-dropdown.png)

{% data reusables.repositories.new-pull-request %}
1. Use the _base_ branch dropdown menu to select the branch you'd like to merge your changes into, then use the _compare_ branch drop-down menu to choose the topic branch you made your changes in.
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

After your pull request has been reviewed, it can be [merged into the repository](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a pull request, use the `gh pr create` subcommand.

```shell
gh pr create
```

To assign a pull request to an individual, use the `--assignee` or `-a` flags. You can use `@me` to self-assign the pull request.

```shell
gh pr create --assignee "@octocat"
```

To specify the branch into which you want the pull request merged, use the `--base` or `-B` flags. To specify the branch that contains commits for your pull request, use the `--head` or `-H` flags.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

To include a title and body for the new pull request, use the `--title` and `--body` flags.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

To mark a pull request as a draft, use the `--draft` flag.

```shell
gh pr create --draft
```

To add a labels or milestones to the new pull request, use the `--label` and `--milestone`  flags.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

To add the new pull request to a specific project, use the `--project` flag.

```shell
gh pr create --project octocat-project
```

To assign an individual or team as reviewers, use the `--reviewer` flag.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

To create the pull request in your default web browser, use the `--web` flag.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

1. Click **Preview Pull Request**. {% data variables.product.prodname_desktop %} will open a preview dialog showing the diff of the changes between your current branch and the base branch.

   {% mac %}

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/mac-preview-pull-request.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "No local changes" view. A button, labeled "Preview Pull Request", is highlighted with an orange outline.](/assets/images/help/desktop/windows-preview-pull-request.png)

   {% endwindows %}

   Alternatively, to go straight to {% data variables.product.prodname_dotcom %} to create your pull request, select the dropdown icon and click **Create Pull Request**.

1. Confirm that the branch in the **base:** dropdown menu is the branch where you want to merge your changes.

   ![Screenshot of the "Open a Pull Request" dialog window. A button with a dropdown icon, labeled "base: development", is outlined in orange.](/assets/images/help/desktop/base-branch-selection.png)

   {% data variables.product.prodname_desktop %} will advise you whether the current branch can be automatically merged into the base branch.

   ![Screenshot of the "Open a Pull Request" dialog window. A status label stating "Can't automatically merge" is highlighted with an orange outline.](/assets/images/help/desktop/preview-dialog-merge-status.png)

1. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Once you've committed changes to your local copy of the repository, click the **Create Pull Request** icon.
![Screenshot of the top of the "Source Control" side bar. The pull request icon is highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description.
![Screenshot of the "{% data variables.product.prodname_dotcom %} Pull Request" side bar with a form for creating a pull request, including "Title" and "Description" fields.](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Click **Create**.

For more information on creating pull requests in {% data variables.product.prodname_github_codespaces %}, see "[AUTOTITLE](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)."

{% endcodespaces %}

{% endif %}

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)"
- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)"
- "[AUTOTITLE](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[AUTOTITLE](/get-started/writing-on-github)"
