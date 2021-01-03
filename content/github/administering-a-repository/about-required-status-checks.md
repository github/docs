---
title: About required status checks
intro: Required status checks ensure that all required CI tests are passing before collaborators can make changes to a protected branch.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About required status checks

If you've enforced branch protections in your repository, you can set up required status checks. For more information, see "[Configuring protected branches](/articles/configuring-protected-branches/)" and "[Enabling required status checks](/articles/enabling-required-status-checks)." Required status checks can be checks or statuses. For more information, see "[About status checks](/github/administering-a-repository/enabling-required-status-checks)."

After enabling required status checks, all required status checks must pass before branches can be merged into the protected branch. After all required status checks pass, any commits must either be pushed to another branch and then merged or pushed directly to the protected branch.  

![Merge protected branch ](/assets/images/help/repository/req-status-check-all-passed.png)

{% tip %}

**Note:** Any person or integration with write permissions to a repository can set the state of any status check in the repository. {% data variables.product.product_name %} does not verify that the author of a check is authorized to create a check with a certain name or modify an existing status. Before merging a pull request, you should verify that the author of each status, listed in the merge box, is expected.

{% endtip %}

Administrators of a repository can merge a protected branch even if required status checks have failed or are pending. You can require administrators to be subject to required status checks. For more information, see "[Enabling required status checks](/github/administering-a-repository/enabling-required-status-checks)."

![Administrator merge of protected branch](/assets/images/help/repository/req-status-check-admin-merge.png)

Administrators can also merge a protected branch even if the branch is out of date with the base branch.

### Required status checks settings

You can set up either loose or strict status checks, depending on whether you want to require your branch to be up to date with the base branch before merging. For more information, see "[Types of required status checks](/github/administering-a-repository/types-of-required-status-checks)."

### Troubleshooting required status checks

If you have a check and a status with the same name and you select that name as a required status check, both the check and the status are required. For more information, see "[Checks](/rest/reference/checks)."

Once you've set up required status checks, your branch must be up to date with the base branch before merging. This ensures that your branch has been tested with the latest code from the base branch. If your branch is out of date, you'll need to merge the base branch into your branch.  

{% note %}

**Note:** You can also bring your branch up to date with the base branch using Git rebase. For more information, see "[About Git rebase](/github/using-git/about-git-rebase)."

{% endnote %}

![Out-of-date branch](/assets/images/help/repository/req-status-check-out-of-date.png)

You won't be able to push local changes to a protected branch until all required status checks pass. Instead, you'll receive an error message similar to the following:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Note:** Pull requests that are up to date and pass required status checks can be merged locally and pushed to the protected branch. This can be done without status checks running on the merge commit itself.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

Sometimes, the results of the status checks for the test merge commit and head commit will conflict. If the test merge commit has a status, it must pass. Otherwise, the status of the head commit must pass before you can merge the branch. For more information about test merge commits, see "[Pull Requests](/rest/reference/pulls#response-1)."

![Branch with conflicting merge commits](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

### Further reading

- "[About status checks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
