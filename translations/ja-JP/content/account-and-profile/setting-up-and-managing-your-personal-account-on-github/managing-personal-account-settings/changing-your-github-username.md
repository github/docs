---
title: Changing your GitHub username
intro: 'You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Change your username
---

{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Note**: Members of an {% data variables.product.prodname_emu_enterprise %} cannot change usernames. Your enterprise's IdP administrator controls your username for {% data variables.product.product_name %}. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% elsif ghes %}

**Note**: If you sign into {% data variables.product.product_location %} with LDAP credentials or single sign-on (SSO), only your local administrator can change your username. For more information about authentication methods for {% data variables.product.product_name %}, see "[Authenticating users for {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)."

{% endif %}

{% endnote %}

{% endif %}

## About username changes

You can change your username to another username that is not currently in use.{% ifversion fpt or ghec %} If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.

If you hold a trademark for the username, you can find more information about making a trademark complaint on our [Trademark Policy](/free-pro-team@latest/github/site-policy/github-trademark-policy) page. 

If you do not hold a trademark for the name, you can choose another username or keep your current username. {% data variables.contact.github_support %} cannot release the unavailable username for you. For more information, see "[Changing your username](#changing-your-username)."{% endif %}

After changing your username, your old username becomes available for anyone else to claim. Most references to your repositories under the old username automatically change to the new username. However, some links to your profile won't automatically redirect.

{% data variables.product.product_name %} cannot set up redirects for:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) using your old username
- Links to [gists](/articles/creating-gists) that include your old username

{% ifversion fpt or ghec %} 

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you cannot make changes to your username. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## Repository references

After you change your username, {% data variables.product.product_name %} will automatically redirect references to your repositories.
- Web links to your existing repositories will continue to work. This can take a few minutes to complete after you make the change.
- Command line pushes from your local repository clones to the old remote tracking URLs will continue to work.

If the new owner of your old username creates a repository with the same name as your repository, that will override the redirect entry and your redirect will stop working. Because of this possibility, we recommend you update all existing remote repository URLs after changing your username. For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

## Links to your previous profile page

After changing your username, links to your previous profile page, such as `https://{% data variables.command_line.backticks %}/previoususername`, will return a 404 error. We recommend updating any links to your account on {% data variables.product.product_location %} from elsewhere{% ifversion fpt or ghec %}, such as your LinkedIn or Twitter profile{% endif %}.

## Your Git commits

{% ifversion fpt or ghec %}Git commits that were associated with your {% data variables.product.product_name %}-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph.{% endif %} If your Git commits are associated with another email address you've [added to your GitHub account](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}including the ID-based {% data variables.product.product_name %}-provided `noreply` email address, {% endif %}they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. For more information on setting your email address, see "[Setting your commit email address](/articles/setting-your-commit-email-address)."

## Your gists

After changing your username, the URLs to any public or secret gists will also change and previous links to these will return a 404 error. We recommend updating the links to these gists anywhere you may have shared them.

## Changing your username

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. In the "Change username" section, click **Change username**.
   ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Read the warnings about changing your username. If you still want to change your username, click **I understand, let's change my username**.
   ![Change Username warning button](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Type a new username.
   ![New username field](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. If the username you've chosen is available, click **Change my username**. If the username you've chosen is unavailable, you can try a different username or one of the suggestions you see.
   ![Change Username warning button](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## Further reading

- "[Why are my commits linked to the wrong user?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_dotcom %} Username Policy](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
