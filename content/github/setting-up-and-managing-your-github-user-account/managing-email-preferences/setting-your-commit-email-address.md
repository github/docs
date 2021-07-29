---
title: Setting your commit email address
intro: 'You can set the email address that is used to author commits on {% data variables.product.product_name %} and on your computer.'
redirect_from:
  - /articles/keeping-your-email-address-private/
  - /articles/setting-your-commit-email-address-on-github/
  - /articles/about-commit-email-addresses/
  - /articles/git-email-settings/
  - /articles/setting-your-email-in-git/
  - /articles/set-your-user-name-email-and-github-token/
  - /articles/setting-your-commit-email-address-in-git/
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
---
## About commit email addresses

{% data variables.product.product_name %} uses your commit email address to associate commits with your {% data variables.product.product_name %} account. You can choose the email address that will be associated with the commits you push from the command line as well as web-based Git operations you make.

For web-based Git operations, you can set your commit email address on {% data variables.product.product_name %}. For commits you push from the command line, you can set your commit email address in Git.

{% ifversion fpt %}Any commits you made prior to changing your commit email address are still associated with your previous email address.{% else %}After changing your commit email address on {% data variables.product.product_name %}, the new email address will be visible in all of your future web-based Git operations by default. Any commits you made prior to changing your commit email address are still associated with your previous email address.{% endif %}

{% ifversion fpt %}

{% note %}

**Note**: {% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt %}If you'd like to keep your personal email address private, you can use a {% data variables.product.product_name %}-provided `no-reply` email address as your commit email address. To use your `noreply` email address for commits you push from the command line, use that email address when you set your commit email address in Git. To use your `noreply` address for web-based Git operations, set your commit email address on GitHub and choose to **Keep my email address private**.

You can also choose to block commits you push from the command line that expose your personal email address. For more information, see "[Blocking command line pushes that expose your personal email](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)."{% endif %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your {% data variables.product.product_name %} account{% ifversion fpt %}, or the `noreply` email address provided to you in your email settings{% endif %}. {% ifversion not ghae %}For more information, see "[Adding an email address to your {% data variables.product.prodname_dotcom %} account](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)."{% endif %}

{% ifversion fpt %}

{% note %}

**Note:** If you created your {% data variables.product.product_name %} account _after_ July 18, 2017, your {% data variables.product.product_name %}-provided `no-reply` email address is a seven-digit ID number and your username in the form of <code><em>ID+username</em>@users.noreply.github.com</code>. If you created your {% data variables.product.product_name %} account _prior to_ July 18, 2017, your {% data variables.product.product_name %}-provided `no-reply` email address is your username in the form of <code><em>username</em>@users.noreply.github.com</code>. You can get an ID-based {% data variables.product.product_name %}-provided `no-reply` email address by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

{% endnote %}

If you use your {% data variables.product.product_name %}-provided `noreply` email address to make commits and then [change your username](/articles/changing-your-github-username), those commits will not be associated with your {% data variables.product.product_name %} account. This does not apply if you're using the ID-based {% data variables.product.product_name %}-provided `noreply` address. For more information, see "[Changing your {% data variables.product.prodname_dotcom %} username](/articles/changing-your-github-username)."{% endif %}

## Setting your commit email address on {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% ifversion fpt %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

## Setting your commit email address in Git

You can use the `git config` command to change the email address you associate with your Git commits. The new email address you set will be visible in any future commits you push to {% data variables.product.product_name %} from the command line. Any commits you made prior to changing your commit email address are still associated with your previous email address.

### Setting your email address for every repository on your computer

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user_settings.link_email_with_your_account %}

### Setting your email address for a single repository

{% data variables.product.product_name %} uses the email address set in your local Git configuration to associate commits pushed from the command line with your {% data variables.product.product_name %} account.

You can change the email address associated with commits you make in a single repository. This will override your global Git config settings in this one repository, but will not affect any other repositories.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to the local repository where you want to configure the email address that you associate with your Git commits.
3. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user_settings.link_email_with_your_account %}
