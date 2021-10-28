---
title: E-Mail-Adresse für Commits festlegen
intro: 'You can set the email address that is used to author commits on {% data variables.product.product_location %} and on your computer.'
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
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
---

## Informationen zu E-Mail-Adressen für Commits

{% data variables.product.prodname_dotcom %} uses your commit email address to associate commits with your account on {% data variables.product.product_location %}. Du kannst den Commits, die Du über die Befehlszeile überträgst, wie auch Deinen webbasierten Git-Operationen jeweils eine eigene E-Mail-Adresse zuordnen.

For web-based Git operations, you can set your commit email address on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Für Commits, die Du per Push über die Befehlszeile überträgst, legst Du die E-Mail-Adresse für Commits in Git fest.

{% ifversion fpt or ghec %}Alle Commits, die Sie vor der Änderung Ihrer E-Mail-Adresse für Commits durchgeführt haben, bleiben mit Ihrer früheren E-Mail-Adresse verbunden.{% else %}Nach der Änderung Ihrer E-Mail-Adresse für Commits auf {% data variables.product.product_name %} wird die neue E-Mail-Adresse standardmäßig allen zukünftigen webbasierten Git-Operationen zugeordnet. Alle Commits, die Du vor der Änderung Deiner Commit-E-Mail-Adresse durchgeführt hast, bleiben mit Deiner früheren E-Mail-Adresse verbunden.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Hinweis:** {% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}If you'd like to keep your personal email address private, you can use a `no-reply` email address from {% data variables.product.product_name %} as your commit email address. Wenn Du eine `no-reply`-E-Mail-Adresse für Commits verwenden möchtest, die Du über die Befehlszeile überträgst, gib diese E-Mail-Adresse bei der Festlegung Deiner Commit-E-Mail-Adresse in Git an. Wenn Du eine `no-reply`-E-Mail-Adresse für webbasierte Git-Operationen verwenden möchtest, lege Deine Commit-E-Mail-Adresse auf GitHub fest, und wähle dabei **Keep my email address private** (E-Mail-Adresse privat halten) aus.

Du kannst auch festlegen, dass Commits, die Du über die Befehlszeile überträgst, blockiert werden, wenn diese Deine persönliche E-Mail-Adresse offenlegen. Weitere Informationen findest Du unter „[Pushes über die Befehlszeile blockieren, die Deine private E-Mail-Adresse offenlegen](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)“.{% endif %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your account on {% data variables.product.product_location %}{% ifversion fpt or ghec %}, or the `noreply` email address provided to you in your email settings{% endif %}. {% ifversion not ghae %}For more information, see "[Adding an email address to your {% data variables.product.prodname_dotcom %} account](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)."{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Note:** If you created your account on {% data variables.product.product_location %} _after_ July 18, 2017, your `no-reply` email address for {% data variables.product.product_name %} is a seven-digit ID number and your username in the form of <code><em>ID+username</em>@users.noreply.github.com</code>. If you created your account on {% data variables.product.product_location %} _prior to_ July 18, 2017, your `no-reply` email address from {% data variables.product.product_name %} is <code><em>username</em>@users.noreply.github.com</code>. You can get an ID-based `no-reply` email address for {% data variables.product.product_name %} by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

{% endnote %}

If you use your `noreply` email address for {% data variables.product.product_name %} to make commits and then [change your username](/articles/changing-your-github-username), those commits will not be associated with your account on {% data variables.product.product_location %}. This does not apply if you're using the ID-based `noreply` address from {% data variables.product.product_name %}. Weitere Informationen findest Du unter „[{% data variables.product.prodname_dotcom %}-Benutzernamen ändern](/articles/changing-your-github-username)“.{% endif %}

## Deine Commit-E-Mail-Adresse auf {% data variables.product.prodname_dotcom %} festlegen

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% ifversion fpt or ghec %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

## Deine Commit-E-Mail-Adresse in Git festlegen

Mit dem Befehl `git config` können Sie die Ihren Git-Commits zugeordnete E-Mail-Adresse ändern. Die neue E-Mail-Adresse wird bei allen zukünftigen Commits angezeigt, die Sie über die Befehlszeile per Push an {% data variables.product.product_location %} übertragen. Alle Commits, die Sie vor der Änderung Ihrer E-Mail-Adresse für Commits durchgeführt haben, bleiben mit Ihrer früheren E-Mail-Adresse verbunden.

### E-Mail-Adresse für alle Repositorys auf Deinem Computer festlegen

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

### E-Mail-Adresse für ein einzelnes Repository festlegen

{% data variables.product.product_name %} uses the email address set in your local Git configuration to associate commits pushed from the command line with your account on {% data variables.product.product_location %}.

Sie können die E-Mail-Adresse für Ihre Commits an einem bestimmten Repository ändern. Dadurch werden Ihre globalen Git-Konfigurationseinstellungen ausschließlich für dieses eine Repository überschrieben, d. h., die anderen Repositorys sind von dieser Änderung nicht betroffen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Repository, für das Du die E-Mail-Adresse für Deine Git-Commits festlegen möchten.
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
