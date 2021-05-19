---
title: Best practices for leaving your company
intro: 'Changing jobs is a fact of life. If you use your GitHub user account for both personal *and* work purposes, there are a few things to keep in mind when you leave your company or organization.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
versions:
  free-pro-team: '*'
topics:
  - Accounts
---
Before you leave your company, make sure you update the following information in your user account:

- Unverify your company email address by [deleting it in your Email settings](/articles/changing-your-primary-email-address). You can then re-add it without verifying to keep any associated commits linked to your account.
- [Change your primary email address](/articles/changing-your-primary-email-address) from your company email to your personal email.
{% if currentVersion == "free-pro-team@latest" %}
- [Verify your new primary email address](/articles/verifying-your-email-address).
{% endif %}
- [Change your GitHub username](/articles/changing-your-github-username) to remove any references to your company or organization, if necessary.

## Leaving organizations

If you've been working with repositories that belong to an organization, you'll want to [remove yourself as a member of the organization](/articles/removing-yourself-from-an-organization). Note that if you are the organization owner, you should first [transfer ownership of the organization](/articles/transferring-organization-ownership) to another person.

## Removing professional associations with personal repositories

If you've been collaborating professionally with another person on repositories that belong to their personal user account, you'll want to [remove yourself as a collaborator](/articles/removing-yourself-from-a-collaborator-s-repository) from those repositories.

- [Stop watching repositories](https://github.com/watching) related to your work. You won't want those notifications anymore!
- [Transfer repositories you own](/articles/how-to-transfer-a-repository) that others may need to continue working on after you leave.
- [Delete forks that belong to you](/articles/deleting-a-repository) that are related to the work you were doing. Don't worry, deleting a fork doesn't delete the upstream repository.
- Delete local copies of your forks that may exist on your computer:

```shell
$ rm -rf <em>work_directory</em>
```
