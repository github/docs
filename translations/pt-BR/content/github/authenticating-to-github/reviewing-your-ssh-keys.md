---
title: Reviewing your SSH keys
intro: 'To keep your credentials secure, you should regularly audit your SSH keys, deploy keys, and review authorized applications that access your {% data variables.product.product_name %} account.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
  - /articles/reviewing-your-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can delete unauthorized (or possibly compromised) SSH keys to ensure that an attacker no longer has access to your repositories. You can also approve existing SSH keys that are valid.

{% mac %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. On the SSH Settings page, take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.
	![SSH key list](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

  {% endtip %}

4. Open Terminal.

5. {% data reusables.command_line.start_ssh_agent %}

6. Find and take a note of your public key fingerprint. {% if currentVersion ver_lt "enterprise-server@2.23" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
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
3. On the SSH Settings page, take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.
	![SSH key list](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

  {% endtip %}

4. Open Git Bash. If you're using Git Shell, which is included in {% data variables.product.prodname_desktop %}, open Git Shell and skip to step 6.

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Find and take a note of your public key fingerprint. {% if currentVersion ver_lt "enterprise-server@2.23" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
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
3. On the SSH Settings page, take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.
	![SSH key list](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

  {% endtip %}

4. Open Terminal.

5. {% data reusables.command_line.start_ssh_agent %}

6. Find and take a note of your public key fingerprint. {% if currentVersion ver_lt "enterprise-server@2.23" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  If you're using OpenSSH 6.8 or newer:
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

{% endlinux %}

{% warning %}

**Warning**: If you see an SSH key you're not familiar with on {% data variables.product.product_name %}, delete it immediately and contact {% data variables.contact.contact_support %} for further help. An unidentified public key may indicate a possible security concern.

{% endwarning %}
