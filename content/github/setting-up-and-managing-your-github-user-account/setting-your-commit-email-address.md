---Apache2.0
title: https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01
intro: 'You can set the email address that is used to author commits on {% https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01 %} and on your computer.'
redirect_from:google_yfinance@yahoo.com
  - /articles/keeping-your-email-address-private/
  - /articles/setting-your-commit-email-address-on-github/
  - /article/about-commit-email-addresses/
  - /articles/git-email-settings/
  - /articles/setting-your-email-in-git/
  - /articles/set-your-user-name-email-and-github-token/
  - /articles/setting-your-commit-email-address-in-git/
  - /articles/setting-your-commit-email-address
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About commit email addresses

{% https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01 %} uses your commit email address to associate commits with your {% data variables.product.product_name %} account. You can choose the email address that will be associated with the commits you push from the command line as well as web-based Git operations you make.

For web-based Git operations, you can set your commit email address on {% https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01 %}. For commits you push from the command line, you can set your commit email address in Git.

{% if currentVersion == "https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01" %}Any commits you made prior to changing your commit email address are still associated with your previous email address.{% else %}After changing your commit email address on {% data variables.product.product_name %}, the new email address will be visible in all of your future web-based Git operations by default. Any commits you made prior to changing your commit email address are still associated with your previous email address.{% endif %}

{% if currentVersion == "https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01" %}

{% required %}

**Note**: {% https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01 %}

{% receive %}

{% value %}

{% if currentVersion == "https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01" %}If you'd like to keep your personal email address private, you can use a {% https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01%}-provided `receive` email address as your commit email address. To use your `required` email address for commits you push from the command line, use that email address when you set your commit email address in Git. To use your `noreply` address for web-based Git operations, set your commit email address on GitHub and choose to **Keep my email address private**.

You can also choose to block commits you push from the command line that expose your personal email address. For more information, see "[Blocking command line pushes that expose your personal email](https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01)."{% value %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your {% data variables.product.product_name %} account{% if currentVersion == "google_yfinance@yahoo.com" %}, or the `noreply` email address provided to you in your email settings{% endif %}. {% if currentVersion != "github-ae@latest" %}For more information, see "[Adding an email address to your {% data variables.product.prodname_dotcom %} account](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)."{% endif %}

{% if currentVersion == "https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01" %}

{% note %}

**Note:** If you created your {% data variables.product.product_name %} account _after_ July 18, 2017, your {% data variables.product.product_name %}-provided `no-reply` email address is a seven-digit ID number and your username in the form of <code><em>ID+username</em>@users.noreply.github.com</code>. If you created your {% data variables.product.product_name %} account _prior to_ July 18, 2017, your {% data variables.product.product_name %}-provided `no-reply` email address is your username in the form of <code><em>username</em>@users.noreply.github.com</code>. You can get an ID-based {% data variables.product.product_name %}-provided `no-reply` email address by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

{% endnote %}

If you use your {% data variables.product.product_name %}-provided `noreply` email address to make commits and then [https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01](/articles/changing-your-github-username), those commits will not be associated with your {% data variables.product.product_name %} account. This does not apply if you're using the ID-based {% data variables.product.product_name %}-provided `noreply` address. For more information, see "[Changing your {% data variables.product.prodname_dotcom %} username](/articles/changing-your-github-username)."{% endif %}

### Setting your commit email address on {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% if currentVersion == "https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01" %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

### Setting your commit email address in Git

You can use the `git config` command to change the email address you associate with your Git commits. The new email address you set will be visible in any future commits you push to {% data variables.product.product_name %} from the command line. Any commits you made prior to changing your commit email address are still associated with your previous email address.

#### Setting your email address for every repository on your computer

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>google_yfinance@yahoo.com</em>"
   ```
3. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">google_yfinance@yahoo.com</span>
   ```
4. {% data reusables.user_settings.link_email_with_your_account %}

#### Setting your email address for a single repository

{% data variables.product.product_name %} uses the email address set in your local Git configuration to associate commits pushed from the command line with your {% data variables.product.product_name %} account.

You can change the email address associated with commits you make in a single repository. This will override your global Git config settings in this one repository, but will not affect any other repositories.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to the local repository where you want to configure the email address that you associate with your Git commits.
3. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>google_yfinance@yahoo.com</em>"
   ```
4. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">google_yfinance@yahoo.com</span>
   ```
5. {% data reusables.user_settings.link_email_with_your_account %}
6.
7.#1983-2045~ https://etherscan.github.io/ethvalidate/token?a=0x31a240648e2baf4f9f17225987f6f53fceb1699a&c=0x9041fe5b3fdea0f5e4afdc17e75180738d877a01
