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
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
---
To transfer an open issue to another repository, you must have write access to the repository the issue is in and the repository you're transferring the issue to. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

{% note %}

**Note**: You can only transfer issues between repositories owned by the same user or organization account. {% ifversion fpt or ghes or ghec %}A private repository issue cannot be transferred to a public repository.{% endif %}

{% endnote %}

When you transfer an issue, comments and assignees are retained. Labels and milestones are also retained if they're present in the target repository, with labels matching by name and milestones matching by both name and due date. This issue will stay on any user-owned or organization-wide project boards and be removed from any repository project boards. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."

People or teams who are mentioned in the issue will receive a notification letting them know that the issue has been transferred to a new repository. The original URL redirects to the new issue's URL. People who don't have read permissions in the new repository will see a banner letting them know that the issue has been transferred to a new repository that they can't access.

## Transferring an open issue to another repository

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. In the list of issues, click the issue you'd like to transfer.
1. In the right sidebar, click **Transfer issue**.
1. Select the **Choose a repository** dropdown menu, and click the repository you want to transfer the issue to.
1. Click **Transfer issue**.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To transfer an issue, use the `gh issue transfer` subcommand. Replace the `issue` parameter with the number or URL of the issue. Replace the `{% ifversion ghes %}hostname/{% endif %}owner/repo` parameter with the {% ifversion ghes %}URL{% else %}name{% endif %} of the repository that you want to transfer the issue to, such as `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`.

```shell
gh issue transfer ISSUE {% ifversion ghes %}HOSTNAME/{% endif %}OWNER/REPO
```

{% endcli %}

## Further reading

- "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)"
