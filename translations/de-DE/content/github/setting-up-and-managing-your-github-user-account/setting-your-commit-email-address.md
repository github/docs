---
title: E-Mail-Adresse für Commits festlegen
intro: 'Du kannst auf {% data variables.product.product_name %} eine primäre E-Mail-Adresse festlegen, die den von Dir durchgeführten, webbasierten Git-Operationen wie Bearbeitungen und Merges zugeordnet wird.'
redirect_from:
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
---

### Informationen zu E-Mail-Adressen für Commits

{% data variables.product.product_name %} verwendet Deine Commit-E-Mail-Adresse zur Verknüpfung Deiner Commits mit Deinem {% data variables.product.product_name %}-Konto. Du kannst den Commits, die Du über die Befehlszeile überträgst, wie auch Deinen webbasierten Git-Operationen jeweils eine eigene E-Mail-Adresse zuordnen.

Für webbasierte Git-Operationen legst Du die E-Mail-Adresse für Commits auf {% data variables.product.product_name %} fest. Für Commits, die Du per Push über die Befehlszeile überträgst, legst Du die E-Mail-Adresse für Commits in Git fest.

{% if currentVersion == "free-pro-team@latest" %}Alle Commits, die Du vor der Änderung Deiner Commit-E-Mail-Adresse durchgeführt hast, bleiben mit Deiner früheren E-Mail-Adresse verbunden.{% else %}Nach der Änderung Deiner Commit-E-Mail-Adresse auf {% data variables.product.product_name %} wird die neue E-Mail-Adresse standardmäßig allen zukünftigen webbasierten Git-Operationen zugeordnet. Alle Commits, die Du vor der Änderung Deiner Commit-E-Mail-Adresse durchgeführt hast, bleiben mit Deiner früheren E-Mail-Adresse verbunden.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Hinweis:** {% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Wenn Du Deine persönliche E-Mail-Adresse privat halten möchtest, kannst Du als Deine Commit-E-Mail-Adresse eine von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse verwenden. Wenn Du eine `no-reply`-E-Mail-Adresse für Commits verwenden möchtest, die Du über die Befehlszeile überträgst, gib diese E-Mail-Adresse bei der Festlegung Deiner Commit-E-Mail-Adresse in Git an. Wenn Du eine `no-reply`-E-Mail-Adresse für webbasierte Git-Operationen verwenden möchtest, lege Deine Commit-E-Mail-Adresse auf GitHub fest, und wähle dabei **Keep my email address private** (E-Mail-Adresse privat halten) aus.

Du kannst auch festlegen, dass Commits, die Du über die Befehlszeile überträgst, blockiert werden, wenn diese Deine persönliche E-Mail-Adresse offenlegen. Weitere Informationen findest Du unter „[Pushes über die Befehlszeile blockieren, die Deine private E-Mail-Adresse offenlegen](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)“.{% endif %}

Um sicherzustellen, dass Dir Deine Commits zugeschrieben werden und in Deinem Beteiligungsdiagramm erscheinen, gib als Commit-E-Mail-Adresse eine E-Mail-Adresse an, die Du [Deinem GitHub-Konto hinzugefügt hast](/articles/adding-an-email-address-to-your-github-account/){% if currentVersion == "free-pro-team@latest" %}, oder verwende die von {% data variables.product.product_name %} in Deinen E-Mail-Einstellungen bereitgestellte `no-reply`-E-Mail-Adresse{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Hinweis:** Wenn Du Dein {% data variables.product.product_name %}-Konto _nach_ dem 18. Juli 2017 erstellt hast, ist Deine von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse eine siebenstellige ID-Nummer und Dein Benutzername hat folgende Form: <code><em>ID+username</em>@users.noreply.github.com</code>. Wenn Du Dein {% data variables.product.product_name %}-Konto _vor_ dem 18. Juli 2017 erstellt hast, ist Deine von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse Dein Benutzername in der Form <code><em>username</em>@users.noreply.github.com</code>. Eine auf Deiner ID basierende `no-reply`-E-Mail-Adresse wird Dir von {% data variables.product.product_name %} bereitgestellt, wenn Du in den E-Mail-Einstellungen **Keep my email address private** (E-Mail-Adresse privat halten) aktivierst (respektive zunächst deaktivierst und dann erneut aktivierst).

{% endnote %}

Wenn Du Deine Commits unter der von {% data variables.product.product_name %} bereitgestellten `no-reply`-E-Mail-Adresse durchführst und später [Deinen Benutzernamen änderst](/articles/changing-your-github-username), können diese Commits nicht mehr Deinem {% data variables.product.product_name %}-Konto zugeordnet werden. Dies gilt jedoch nicht, wenn Du die von {% data variables.product.product_name %} bereitgestellte ID-basierte `no-reply`-Adresse verwendest. Weitere Informationen findest Du unter „[{% data variables.product.prodname_dotcom %}-Benutzernamen ändern](/articles/changing-your-github-username)“.{% endif %}

### Deine Commit-E-Mail-Adresse auf {% data variables.product.prodname_dotcom %} festlegen

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

### Deine Commit-E-Mail-Adresse in Git festlegen

Mit dem Befehl `git config` kannst Du die Deinen Git-Commits zugeordnete E-Mail-Adresse ändern. Die neue E-Mail-Adresse wird bei allen zukünftigen Commits angezeigt, die Du über die Befehlszeile per Push an {% data variables.product.product_name %} überträgst. Alle Commits, die Du vor der Änderung Deiner Commit-E-Mail-Adresse durchgeführt hast, bleiben mit Deiner früheren E-Mail-Adresse verbunden.

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

{% data variables.product.product_name %} verwendet die in Deiner lokalen Git-Konfiguration festgelegte E-Mail-Adresse zur Zuordnung von über die Befehlszeile übertragenen Commits zu Deinem {% data variables.product.product_name %}-Konto.

Du kannst die E-Mail-Adresse für Deine Commits in einem bestimmten Repository ändern. Dadurch werden Deine globalen Git-Konfigurationseinstellungen ausschließlich für dieses eine Repository überschrieben, die anderen Repositorys sind von dieser Änderung nicht betroffen.

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
