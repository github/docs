---
title: Username changes
intro: You can change the username for your {% data variables.product.github %} account {% ifversion ghes %} if your instance uses built-in authentication{% endif %}.
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/concepts/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Usernames
shortTitle: Username changes
contentType: concepts
---

## About username changes

You can change your username to another username that is not currently in use.{% ifversion fpt or ghec %} If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.

After changing your username, your old username becomes available for anyone else to claim. Most references to your repositories under the old username automatically change to the new username. However, some links to your profile won't automatically redirect.

## Username trademarks

If you hold a trademark for the username, you can find more information about making a trademark complaint on our [Trademark Policy](/free-pro-team@latest/site-policy/content-removal-policies/github-trademark-policy) page.

If you do not hold a trademark for the name, you can choose another username or keep your current username. {% data variables.contact.github_support %} cannot release the unavailable username for you.{% endif %}

## Repository references

After you change your username, {% data variables.product.github %} will automatically redirect references to your repositories.

If the new owner of your old username creates a repository with the same name as your repository, that will override the redirect entry and your redirect will stop working. Because of this possibility, we recommend you update all existing remote repository URLs after changing your username. For more information, see [AUTOTITLE](/get-started/git-basics/managing-remote-repositories).

## Links to your previous profile page

After changing your username, links to your previous profile page, such as `https://{% data variables.product.product_url %}/previoususername`, will return a 404 error. We recommend updating any links to your profile from elsewhere{% ifversion fpt or ghec %}, such as your LinkedIn or Twitter profile{% endif %}.

## Accounts logged in on {% data variables.product.prodname_mobile %}

Accounts logged in on the {% data variables.product.prodname_mobile %} app may continue to display your original username until you log out. To ensure your updated username is displayed, we recommend you sign out and back in to your account on each mobile device.

## Your Git commits

If your Git commits are associated with another email address you've added to your {% data variables.product.github %} account, they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. However, some commits using {% data variables.product.github %}-provided email addresses may be affected. For details, see [AUTOTITLE](/account-and-profile/reference/username-reference#git-commits-after-a-username-change).

## Your gists

After changing your username, the URLs to any public or secret gists will also change and previous links to these will return a 404 error. We recommend updating the links to these gists anywhere you may have shared them.

## CODEOWNERS files

After changing your username, CODEOWNERS files that include your old username will need to be manually updated. When you view the CODEOWNERS files on {% data variables.product.github %}, an error message is displayed if the file contains any unknown users, or users without write access. We recommend updating all relevant CODEOWNERS files with your new username.

## Next steps

To change your username, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/changing-your-username).
