---
title: SSH-Schlüssel überprüfen
intro: 'Zum Schutz Ihrer Anmeldeinformationen sollten Sie Ihre SSH- und Deployment-Schlüssel regelmäßig überprüfen. Dabei sollten Sie auch die für den Zugriff auf Ihr {% data variables.product.product_name %}-Konto autorisierten Anwendungen überprüfen.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
  - /articles/reviewing-your-ssh-keys
  - /github/authenticating-to-github/reviewing-your-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
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

5. {% data reusables.command_line.start_ssh_agent %}

6. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

7. The SSH keys on {% data variables.product.product_name %} *should* match the same keys on your computer.

{% endmac %}

{% windows %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die Deinem Konto zugeordneten SSH-Schlüssel. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.
    ![SSH key list](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

  {% endtip %}

4. Öffnen Sie Git Bash. Wenn Du das in {% data variables.product.prodname_desktop %} integrierte Git Shell verwendest, öffne Git Shell, und fahre mit Schritt 6 fort.

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

7. The SSH keys on {% data variables.product.product_name %} *should* match the same keys on your computer.

{% endwindows %}

{% linux %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die Deinem Konto zugeordneten SSH-Schlüssel. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.
    ![SSH key list](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

  {% endtip %}

4. Öffne das Terminal.

5. {% data reusables.command_line.start_ssh_agent %}

6. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
```shell $ ssh-add -l -E sha256
> 2048 *SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ* /Users/*USERNAME*/.ssh/id_rsa (RSA) ```{% endif %}

7. Die SSH-Schlüssel auf {% data variables.product.product_name %} *sollten* den zugehörigen Schlüsseln auf Deinem Computer entsprechen.

{% endlinux %}

{% warning %}

**Warnung**: Wenn Du einen SSH-Schlüssel siehst, der Dir auf {% data variables.product.product_name %} unbekannt ist, solltest Du ihn sofort löschen und Dich für weitere Anweisungen an den {% data variables.contact.contact_support %} wenden. Ein Dir unbekannter öffentlicher Schlüssel kann ein Hinweis auf ein Sicherheitsproblem sein.

{% endwarning %}
