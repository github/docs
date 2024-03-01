---
title: Updating commit author attribution with GitHub Importer
intro: 'During an import, you can match commits in your repository with the GitHub account of the commit author.'
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update commit authors
---
{% data variables.product.prodname_importer %} looks for {% data variables.product.prodname_dotcom %} users whose email addresses match the authors of the commits in the repository you're importing. You can then connect a commit to its author using their email address or the author's {% data variables.product.prodname_dotcom %} username.

## Updating commit authors

1. After you've imported your repository, on the import status page, click **Match authors**.
1. Next to the author whose information you'd like to update, click **Connect**.
1. Type the email address or {% data variables.product.prodname_dotcom %} username of the author, then press **Enter**.

## Attributing commits to a {% data variables.product.prodname_dotcom %} user with a public email address

If the author of a commit in your imported repository has a {% data variables.product.prodname_dotcom %} account associated with the email address they used to author the commits, and they haven't [set their commit email address as private](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), {% data variables.product.prodname_importer %} will match the email address associated with the commit to the public email address associated with their GitHub account, and attribute the commit to their {% data variables.product.prodname_dotcom %} account.

## Attributing commits to a {% data variables.product.prodname_dotcom %} user without a public email address

If the author of a commit in your imported repository has neither set a public email address on their {% data variables.product.prodname_dotcom %} profile, nor [set their commit email address as private](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address), {% data variables.product.prodname_importer %} may not be able to match the email address associated with the commit with their {% data variables.product.prodname_dotcom %} account.

The commit author can resolve this by setting their email address as private. Their commits will then be attributed to a no-reply email, and the imported commits will be associated with their GitHub account. For more information about the exact form the no-reply email address can take, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."

## Attributing commits using an email address

If the author's email address is not associated with their {% data variables.product.prodname_dotcom %} account, they can [add the address to their account](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account) after the import, and the commits will be correctly attributed.

If the author does not have a {% data variables.product.prodname_dotcom %} account, {% data variables.product.prodname_importer %} will attribute their commits to the email address associated with the commits.

## Further reading

- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)"
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)"
