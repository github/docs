---
title: SSH-Schlüssel überprüfen
intro: 'To keep your credentials secure, you should regularly audit your SSH keys, deploy keys, and review authorized applications that access your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
  - /articles/reviewing-your-ssh-keys
  - /github/authenticating-to-github/reviewing-your-ssh-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---

Nicht autorisierte (oder möglicherweise kompromittierte) SSH-Schlüssel solltest Du löschen, um möglichen Angreifern den Zugriff auf Deine Repositorys zu verwehren. Vorhandene SSH-Schlüssel, die gültig sind, kannst Du genehmigen.

{% mac %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die Deinem Konto zugeordneten SSH-Schlüssel. Klicke bei Dir unbekannten oder veralteten Schlüsseln auf **Delete** (Löschen). Bei gültigen SSH-Schlüsseln, die Du behalten möchtest, klicke auf **Approve** (Genehmigen). ![Liste mit SSH-Schlüsseln](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Hinweis:** Falls Du Deine SSH-Schlüssel aufgrund einer fehlgeschlagenen Git-Operation überprüfst, ist der nicht verifizierte Schlüssel, der den [SSH-Schlüssel-Auditfehler](/articles/error-we-re-doing-an-ssh-key-audit) verursacht hat, in der Liste der SSH-Schlüssel hervorgehoben.

  {% endtip %}

4. Öffne das Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Die SSH-Schlüssel auf {% data variables.product.product_name %} *sollten* den zugehörigen Schlüsseln auf Deinem Computer entsprechen.

{% endmac %}

{% windows %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die Deinem Konto zugeordneten SSH-Schlüssel. Klicke bei Dir unbekannten oder veralteten Schlüsseln auf **Delete** (Löschen). Bei gültigen SSH-Schlüsseln, die Du behalten möchtest, klicke auf **Approve** (Genehmigen). ![Liste mit SSH-Schlüsseln](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Hinweis:** Falls Du Deine SSH-Schlüssel aufgrund einer fehlgeschlagenen Git-Operation überprüfst, ist der nicht verifizierte Schlüssel, der den [SSH-Schlüssel-Auditfehler](/articles/error-we-re-doing-an-ssh-key-audit) verursacht hat, in der Liste der SSH-Schlüssel hervorgehoben.

  {% endtip %}

4. Öffnen Sie Git Bash. Wenn Du das in {% data variables.product.prodname_desktop %} integrierte Git Shell verwendest, öffne Git Shell, und fahre mit Schritt 6 fort.

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Die SSH-Schlüssel auf {% data variables.product.product_name %} *sollten* den zugehörigen Schlüsseln auf Deinem Computer entsprechen.

{% endwindows %}

{% linux %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die Deinem Konto zugeordneten SSH-Schlüssel. Klicke bei Dir unbekannten oder veralteten Schlüsseln auf **Delete** (Löschen). Bei gültigen SSH-Schlüsseln, die Du behalten möchtest, klicke auf **Approve** (Genehmigen). ![Liste mit SSH-Schlüsseln](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Hinweis:** Falls Du Deine SSH-Schlüssel aufgrund einer fehlgeschlagenen Git-Operation überprüfst, ist der nicht verifizierte Schlüssel, der den [SSH-Schlüssel-Auditfehler](/articles/error-we-re-doing-an-ssh-key-audit) verursacht hat, in der Liste der SSH-Schlüssel hervorgehoben.

  {% endtip %}

4. Öffne das Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Die SSH-Schlüssel auf {% data variables.product.product_name %} *sollten* den zugehörigen Schlüsseln auf Deinem Computer entsprechen.

{% endlinux %}

{% warning %}

**Warnung**: Wenn Du einen SSH-Schlüssel siehst, der Dir auf {% data variables.product.product_name %} unbekannt ist, solltest Du ihn sofort löschen und Dich für weitere Anweisungen an den {% data variables.contact.contact_support %} wenden. Ein Dir unbekannter öffentlicher Schlüssel kann ein Hinweis auf ein Sicherheitsproblem sein.

{% endwarning %}
