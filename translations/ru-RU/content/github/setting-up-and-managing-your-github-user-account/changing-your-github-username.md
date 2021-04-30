---
title: Changing your GitHub username
intro: 'You can change your {% data variables.product.product_name %} username at any time.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - accounts
---

### About username changes

You can change your username to another username that is not currently in use.{% if currentVersion == "free-pro-team@latest" %} If the username you want is not available, you'll see information about whether you can request the username to be released when you type in the desired username.

If the username is not eligible for release and you don't hold a trademark for the username, you can choose another username or keep your current username. {% data variables.contact.github_support %} cannot release the unavailable username for you. For more information, see "[Changing your username](#changing-your-username)."{% endif %}

After changing your username, your old username becomes available for anyone else to claim. Most references to your repositories under the old username automatically change to the new username. However, some links to your profile won't automatically redirect.

{% data variables.product.product_name %} cannot set up redirects for:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) using your old username
- Links to [gists](/articles/creating-gists) that include your old username

### Repository references

After you change your username, {% data variables.product.product_name %} will automatically redirect references to your repositories.
- Web links to your existing repositories will continue to work. This can take a few minutes to complete after you make the change.
- Command line pushes from your local repository clones to the old remote tracking URLs will continue to work.

If the new owner of your old username creates a repository with the same name as your repository, that will override the redirect entry and your redirect will stop working. Because of this possibility, we recommend you update all existing remote repository URLs after changing your username. For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

### Links to your previous profile page

After changing your username, links to your previous profile page, such as `https://{% data variables.command_line.backticks %}/previoususername`, will return a 404 error. We recommend updating any links to your {% data variables.product.product_name %} account from elsewhere{% if currentVersion == "free-pro-team@latest" %}, such as your LinkedIn or Twitter profile{% endif %}.

### Your Git commits

{% if currentVersion == "free-pro-team@latest"%}Git commits that were associated with your {% data variables.product.product_name %}-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph.{% endif %} If your Git commits are associated with another email address you've [added to your GitHub account](/articles/adding-an-email-address-to-your-github-account), {% if currentVersion == "free-pro-team@latest"%}including the ID-based {% data variables.product.product_name %}-provided `noreply` email address, {% endif %}they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. For more information on setting your email address, see "[Setting your commit email address](/articles/setting-your-commit-email-address)."

### Changing your username

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. In the "Change username" section, click **Change username**. ![Change Username button](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. Read the warnings about changing your username. If you still want to change your username, click **I understand, let's change my username**. ![Change Username warning button](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Type a new username. ![New username field](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. If the username you've chosen is available, click **Change my username**. If the username you've chosen is unavailable, you can try a different username or one of the suggestions you see. ![Change Username warning button](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### Дополнительная литература

- "[Why are my commits linked to the wrong user?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% if currentVersion == "free-pro-team@latest" %}
- "[{% data variables.product.prodname_dotcom %} Username Policy](/articles/github-username-policy)"{% endif %}
