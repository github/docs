---
title: Transferring an issue to another repository
intro: 'To move an issue to a better fitting repository, you can transfer open issues to other repositories.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
---
To transfer an open issue to another repository, you must have write permissions on the repository the issue is in and the repository you're transferring the issue to. For more information, see "[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

You can only transfer issues between repositories owned by the same user or organization account. {% ifversion fpt or ghes %}You can't transfer an issue from a private repository to a public repository.{% endif %}

When you transfer an issue, comments and assignees are retained. The issue's labels and milestones are not retained. This issue will stay on any user-owned or organization-wide project boards and be removed from any repository project boards. For more information, see "[About project boards](/articles/about-project-boards)."

People or teams who are mentioned in the issue will receive a notification letting them know that the issue has been transferred to a new repository. The original URL redirects to the new issue's URL. People who don't have read permissions in the new repository will see a banner letting them know that the issue has been transferred to a new repository that they can't access.

## Transferring an open issue to another repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. In the list of issues, click the issue you'd like to transfer.
4. In the right sidebar, click **Transfer issue**.
![Button to transfer issue](/assets/images/help/repository/transfer-issue.png)
5. Use the **Choose a repository** drop-down menu, and select the repository you want to transfer the issue to.
![Choose a repository selection](/assets/images/help/repository/choose-a-repository.png)
6. Click **Transfer issue**.
![Transfer issue button](/assets/images/help/repository/transfer-issue-button.png)

## Further reading

- "[About issues](/articles/about-issues)"
- "[Reviewing your security log](/articles/reviewing-your-security-log)"
- "[Reviewing the audit log for your organization](/articles/reviewing-the-audit-log-for-your-organization)"
