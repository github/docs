---
title: Checking out pull requests locally
intro: 'When someone sends you a pull request from a fork or branch of your repository, you can merge it locally to resolve a merge conflict or to test and verify the changes before merging on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

  {% note %}

  **Note:** Pull request authors can give upstream repository maintainers, or those with push access to the upstream repository, permission to make commits to their pull request's compare branch in a user-owned fork. For more information, see "[Allowing changes to a pull request branch created from a fork](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)."

  {% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also check out a pull request locally using the {% data variables.product.prodname_cli %}. For more information, see "[`gh pr checkout`](https://cli.github.com/manual/gh_pr_checkout)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Modifying an active pull request locally

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request you'd like to modify.{% if currentVersion == "free-pro-team@latest" %}
3. To choose where you'd like to open the pull request, select the **Open with {% octicon "triangle-down" aria-label="The down triangle icon" %}** drop-down and click one of the tabs.
  ![Link to access command line pull request instructions](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. In the merge box, click **command line instructions**. Follow the sequence of steps to bring down the proposed pull request.
  ![Link to access command line pull request instructions](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. Optionally, to view proposed changes in {% data variables.product.prodname_desktop %}, click **open this in {% data variables.product.prodname_desktop %}**.
  ![Link to open a pull request locally in Desktop](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

### Modifying an inactive pull request locally

If a pull request's author is unresponsive to requests or has deleted their fork, the pull request can still be merged. However, if you want to make changes to a pull request and the author is not responding, you'll need to perform some additional steps to update the pull request.

Once a pull request is opened, {% data variables.product.product_name %} stores all of the changes remotely. In other words, commits in a pull request are available in a repository even before the pull request is merged. You can fetch an open pull request and recreate it as your own.

Anyone can work with a previously opened pull request to continue working on it, test it out, or even open a new pull request with additional changes. However, only collaborators with push access can merge pull requests.

{% data reusables.repositories.sidebar-issue-pr %}
2. In the "Pull Requests" list, click the pull request you'd like to merge.
3. Find the ID number of the inactive pull request. This is the sequence of digits right after the pull request's title.
  ![Pull Requests ID number](/assets/images/help/pull_requests/pull_request_id_number.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Fetch the reference to the pull request based on its ID number, creating a new branch in the process.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Switch to the new branch that's based on this pull request:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. At this point, you can do anything you want with this branch. You can run some local tests, or merge other branches into the branch.
8. When you're ready, you can push the new branch up:
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. [Create a new pull request](/articles/creating-a-pull-request) with your new branch.

### Error: Failed to push some refs

The remote `refs/pull/` namespace is *read-only*. If you try to push any commits there, you'll see this error:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Tip:** When you remove or rename a remote reference, your local `refs/pull/origin/` namespace will not be affected by calls to `git-remote`.

{% endtip %}
