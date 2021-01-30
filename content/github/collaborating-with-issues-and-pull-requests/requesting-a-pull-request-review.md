---
title: Requesting a pull request review
intro: 'After you create a pull request, you can ask a specific person to review the changes you''ve proposed. If you''re an organization member, you can also request a specific team to review your changes.'
redirect_from:
  - /articles/requesting-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Owners and collaborators on a repository owned by a user account can assign pull request reviews. Organization members with triage permissions to a repository can assign a pull request review.

Owners or collaborators can assign a pull request review to any person that has been explicitly granted [read access](/articles/access-permissions-on-github) to a user-owned repository. Organization members can assign a pull request review to any person or team with read access to a repository. The requested reviewer or team will receive a notification that you asked them to review the pull request. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If you request a review from a team and code review assignment is enabled, specific members will be requested and the team will be removed as a reviewer. For more information, see "[Managing code review assignment for your team](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)."{% endif %}

{% note %}

**Note:** Pull request authors can't request reviews unless they are either a repository owner or collaborator with write access to the repository.

{% endnote %}

You can request a review from either a suggested or specific person. Suggested reviewers are based on [git blame data](/articles/tracking-changes-in-a-file/). If you request a review, other people with read access to the repository can still review your pull request. Once someone has reviewed your pull request and you've made the necessary changes, you can re-request review from the same reviewer. If the requested reviewer does not submit a review, and the pull request meets the repository's [mergeability requirements](/articles/defining-the-mergeability-of-pull-requests), you can still merge the pull request.

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request that you'd like to ask a specific person or a team to review.
3. Navigate to **Reviewers** in the right sidebar.  
4. To request a review from a suggested person under **Reviewers**, next to their username, click **Request**.
 ![Reviewers request icon in the right sidebar](/assets/images/help/pull_requests/request-suggested-review.png)
5. Optionally, to request a review from someone other than a suggested person, click **Reviewers**, then click on a name in the dropdown menu.
  ![Reviewers gear icon in the right sidebar](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. Optionally, if you know the name of the person or team you'd like a review from, click **Reviewers**, then type the username of the person or the name of the team you're asking to review your changes. Click their team name or username to request a review.
  ![Field to enter a reviewer's username and drop-down with reviewer's name](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. After your pull request is reviewed and you've made the necessary changes, you can ask a reviewer to re-review your pull request. Navigate to **Reviewers** in the right sidebar and click {% octicon "sync" aria-label="The sync icon" %} next to the reviewer's name whose review you'd like.
  ![Re-review sync icon in the right sidebar](/assets/images/help/pull_requests/request-re-review.png)

### Further reading

- "[About pull request reviews](/articles/about-pull-request-reviews)"
