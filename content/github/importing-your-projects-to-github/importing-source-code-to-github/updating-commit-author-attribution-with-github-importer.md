---
title: Updating commit author attribution with GitHub Importer
intro: 'During an import, you can match commits in your repository with the GitHub account of the commit author.'
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
versions:
  free-pro-team: '*'
---
GitHub Importer looks for GitHub users whose email addresses match the authors of the commits in the repository you're importing. You can then connect a commit to its author using their email address or the author's GitHub username.

## Updating commit authors

1. After you've imported your repository, on the import status page, click **Match authors**.
![Match authors button](/assets/images/help/importer/match-authors-button.png)
2. Next to the author whose information you'd like to update, click **Connect**.
![List of commit authors](/assets/images/help/importer/connect-commit-author.png)
3. Type the email address or GitHub username of the author, then press **Enter**.

## Attributing commits to a GitHub user with a public email address

If the author of a commit in your imported repository has a GitHub account associated with the email address they used to author the commits, and they haven't [set their commit email address as private](/articles/setting-your-commit-email-address), GitHub Importer will match the email address associated with the commit to the public email address associated with their GitHub account, and attribute the commit to their GitHub account.

## Attributing commits to a GitHub user without a public email address

If the author of a commit in your imported repository has neither set a public email address on their GitHub profile, nor [set their commit email address as private](/articles/setting-your-commit-email-address), GitHub Importer may not be able to match the email address associated with the commit with their GitHub account.

The commit author can resolve this by setting their email address as private. Their commits will then be attributed to `<username>@users.noreply.github.com`, and the imported commits will be associated with their GitHub account.

## Attributing commits using an email address

If the author's email address is not associated with their GitHub account, they can [add the address to their account](/articles/adding-an-email-address-to-your-github-account) after the import, and the commits will be correctly attributed.

If the author does not have a GitHub account, GitHub Importer will attribute their commits to the email address associated with the commits.

## Further reading

- "[About GitHub Importer](/articles/about-github-importer)"
- "[Importing a repository with GitHub Importer](/articles/importing-a-repository-with-github-importer)"
- "[Adding an email address to your account](/articles/adding-an-email-address-to-your-github-account/)"
- "[Setting your commit email address](/articles/setting-your-commit-email-address)"
