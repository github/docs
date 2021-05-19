---
title: E-Mail-Adresse für Commits festlegen
intro: 'You can set the email address that is used to author commits on {% data variables.product.product_name %} and on your computer.'
redirect_from:
  - /articles/keeping-your-email-address-private/
  - /articles/setting-your-commit-email-address-on-github/
  - /article/about-commit-email-addresses/
  - /articles/git-email-settings/
  - /articles/setting-your-email-in-git/
  - /articles/set-your-user-name-email-and-github-token/
  - /articles/setting-your-commit-email-address-in-git/
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
  - Notifications
---
### Informationen zu E-Mail-Adressen für Commits

{% data variables.product.product_name %} verwendet Ihre E-Mail-Adresse für Commits zur Verknüpfung Ihrer Commits mit Ihrem {% data variables.product.product_name %}-Konto. Du kannst den Commits, die Du über die Befehlszeile überträgst, wie auch Deinen webbasierten Git-Operationen jeweils eine eigene E-Mail-Adresse zuordnen.

Für webbasierte Git-Operationen legst Du die E-Mail-Adresse für Commits auf {% data variables.product.product_name %} fest. Für Commits, die Du per Push über die Befehlszeile überträgst, legst Du die E-Mail-Adresse für Commits in Git fest.

{% if currentVersion == "free-pro-team@latest" %}Alle Commits, die Sie vor der Änderung Ihrer E-Mail-Adresse für Commits durchgeführt haben, bleiben mit Ihrer früheren E-Mail-Adresse verbunden.{% else %}Nach der Änderung Ihrer E-Mail-Adresse für Commits auf {% data variables.product.product_name %} wird die neue E-Mail-Adresse standardmäßig allen zukünftigen webbasierten Git-Operationen zugeordnet. Alle Commits, die Du vor der Änderung Deiner Commit-E-Mail-Adresse durchgeführt hast, bleiben mit Deiner früheren E-Mail-Adresse verbunden.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Hinweis:** {% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Wenn Sie Ihre persönliche E-Mail-Adresse privat halten möchten, können Sie als Ihre E-Mail-Adresse für Commits eine von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse verwenden. Wenn Du eine `no-reply`-E-Mail-Adresse für Commits verwenden möchtest, die Du über die Befehlszeile überträgst, gib diese E-Mail-Adresse bei der Festlegung Deiner Commit-E-Mail-Adresse in Git an. Wenn Du eine `no-reply`-E-Mail-Adresse für webbasierte Git-Operationen verwenden möchtest, lege Deine Commit-E-Mail-Adresse auf GitHub fest, und wähle dabei **Keep my email address private** (E-Mail-Adresse privat halten) aus.

Du kannst auch festlegen, dass Commits, die Du über die Befehlszeile überträgst, blockiert werden, wenn diese Deine persönliche E-Mail-Adresse offenlegen. Weitere Informationen findest Du unter „[Pushes über die Befehlszeile blockieren, die Deine private E-Mail-Adresse offenlegen](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)“.{% endif %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your {% data variables.product.product_name %} account{% if currentVersion == "free-pro-team@latest" %}, or the `noreply` email address provided to you in your email settings{% endif %}. {% if currentVersion != "github-ae@latest" %}For more information, see "[Adding an email address to your {% data variables.product.prodname_dotcom %} account](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Hinweis:** Wenn Sie Ihr {% data variables.product.product_name %}-Konto _nach_ dem 18. Juli 2017 erstellt haben, ist Ihre von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse eine siebenstellige ID-Nummer und Ihr Benutzername hat folgende Form: <code><em>ID+username</em>@users.noreply.github.com</code>. Wenn Sie Ihr {% data variables.product.product_name %}-Konto _vor_ dem 18. Juli 2017 erstellt haben, ist Ihre von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse Ihr Benutzername in der Form <code><em>username</em>@users.noreply.github.com</code>. Eine auf Deiner ID basierende `no-reply`-E-Mail-Adresse wird Dir von {% data variables.product.product_name %} bereitgestellt, wenn Du in den E-Mail-Einstellungen **Keep my email address private** (E-Mail-Adresse privat halten) aktivierst (respektive zunächst deaktivierst und dann erneut aktivierst).

{% endnote %}

Wenn Sie Ihre Commits unter der von {% data variables.product.product_name %} bereitgestellten `no-reply`-E-Mail-Adresse durchführen und später [Ihren Benutzernamen ändern](/articles/changing-your-github-username), können diese Commits nicht mehr Ihrem {% data variables.product.product_name %}-Konto zugeordnet werden. Dies gilt jedoch nicht, wenn Sie die von {% data variables.product.product_name %} bereitgestellte ID-basierte `no-reply`-Adresse verwenden. Weitere Informationen findest Du unter „[{% data variables.product.prodname_dotcom %}-Benutzernamen ändern](/articles/changing-your-github-username)“.{% endif %}

### Deine Commit-E-Mail-Adresse auf {% data variables.product.prodname_dotcom %} festlegen

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

### Deine Commit-E-Mail-Adresse in Git festlegen

Mit dem Befehl `git config` können Sie die Ihren Git-Commits zugeordnete E-Mail-Adresse ändern. Die neue E-Mail-Adresse wird bei allen zukünftigen Commits angezeigt, die Sie über die Befehlszeile per Push an {% data variables.product.product_name %} übertragen. Alle Commits, die Sie vor der Änderung Ihrer E-Mail-Adresse für Commits durchgeführt haben, bleiben mit Ihrer früheren E-Mail-Adresse verbunden.

#### E-Mail-Adresse für alle Repositorys auf Deinem Computer festlegen

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

#### E-Mail-Adresse für ein einzelnes Repository festlegen

{% data variables.product.product_name %} verwendet die in Ihrer lokalen Git-Konfiguration festgelegte E-Mail-Adresse zur Zuordnung Ihrer über die Befehlszeile übertragenen Commits zu Ihrem {% data variables.product.product_name %}-Konto.

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
