---
title: Troubleshooting commits on your timeline
intro: 'You can view details for commits from your profile''s timeline. If you don''t see commits you expect on your profile or can''t find commit details from your profile page, the commit date and the commit author date may be different.'
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Troubleshoot commits
---

## Expected behavior to view commit details

In the "Contribution activity" section of your profile page, you can click the number of commits next to a specific repository to see more details about your commits from that time period, including a diff of specific changes made in a repository.

![Screenshot of the "Contribution activity" section of a user profile. A link, labeled "29 commits" is highlighted with an orange outline.](/assets/images/help/profile/commit-link-on-profile-timeline.png)

## Missing commit details from commits in your timeline

If you click a commit link from your profile page and don't see all of the expected commits on the repository's commits page, then it's possible the commit history in Git was rewritten and the commit author date and the commit date are different.

## How GitHub uses the Git author date and commit date

In Git, the author date is when someone first creates a commit with `git commit`. The commit date is identical to the author date unless someone changes the commit date by using `git commit --amend`, a force push, a rebase, or other Git commands.

On your profile page, the author date is used to calculate when a commit was made. Whereas, in a repository, the commit date is used to calculate when a commit was made in the repository.

Most often, the author date and commit date are the same but you may notice that your commit sequence is out of order if the commit history is changed. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile)"

## Viewing missing commit details from commits in your timeline

You can use the `git show` command with the `--pretty=fuller` flag to check if the commit author date and commit date are different.

```shell
$ git show YOUR_COMMIT_SHA_NUMBER --pretty=fuller
commit YOUR_COMMIT_SHA_NUMBER
Author:     octocat USER_EMAIL
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson USER_EMAIL
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

If the author and commit date are different, you can manually change the commit date in the URL to see the commit details.

For example:
- This URL uses the author date of `2018-04-03`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- This URL uses the commit date of `2018-04-10`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

When you open the URL with the modified commit date, you can see the commit details.

## Expected commits missing in your timeline

If you're not seeing expected commits on your timeline, it's possible the commit history in Git was rewritten and the commit author date and the commit date are different. For other possibilities, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile)"
