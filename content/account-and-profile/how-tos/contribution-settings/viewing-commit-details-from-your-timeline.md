---
title: Viewing commit details from your timeline
intro: You can view details for commits from your profile's timeline. If you don't see commits you expect on your profile or can't find commit details from your profile page, the commit date and the commit author date may be different.
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/how-tos/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/how-tos/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-commit-details-from-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Viewing commit details
contentType: how-tos
---

## View commit details

1. In the "Contribution activity" section of your profile, click the number of commits next to a specific repository.

![Screenshot of the "Contribution activity" section of a user profile. A link, labeled "29 commits" is highlighted with an orange outline.](/assets/images/help/profile/commit-link-on-profile-timeline.png)

## Finding missing commits in your timeline

If you can't find expected commits on your profile, the commit history may have been rewritten, creating different author and commit dates. Follow these steps to locate missing commits:

1. To check if the author date differs from the commit date, use the `git show` command:

   ```shell
   $ git show YOUR_COMMIT_SHA_NUMBER --pretty=fuller
   commit YOUR_COMMIT_SHA_NUMBER
   Author:     octocat USER_EMAIL
   AuthorDate: Tue Apr 03 02:02:30 2018 +0900
   Commit:     Sally Johnson USER_EMAIL
   CommitDate: Tue Apr 10 06:25:08 2018 +0900
   ```

1. If the dates differ, modify the GitHub URL to search by the specific date:

   * To search by author date (`2018-04-03`):

     `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`

   * To search by commit date (`2018-04-10`):

     `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

1. Open the modified URL in your browser to view the commit details.

## Next steps

If you're not seeing expected commits on your timeline, it's possible the commit history in Git was rewritten and the commit author date and the commit date are different. For other possibilities, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile).

For other reference information, see [AUTOTITLE](/account-and-profile/reference/profile-contributions-reference#how-github-uses-the-git-author-date-and-commit-date).
