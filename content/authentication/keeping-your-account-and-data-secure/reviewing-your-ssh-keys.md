---
title: Reviewing your SSH keys
intro: 'To keep your credentials secure, you should regularly audit your SSH keys, deploy keys, and review authorized applications that access your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe
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
You can delete unauthorized (or possibly compromised) SSH keys to ensure that an attacker no longer has access to your repositories. You can also approve existing SSH keys that are valid.

{% mac %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Under "SSH keys", take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.

   {% note %}

   **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

   {% endnote %}

1. Open Terminal.

{% data reusables.command_line.start_ssh_agent %}

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. The SSH keys on {% data variables.product.product_name %} _should_ match the same keys on your computer.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Under "SSH keys", take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.

   {% note %}

   **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

   {% endnote %}

1. Open Git Bash.

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

   {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

   {% indented_data_reference reusables.desktop.note-start-ssh-agent spaces=3 %}

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. The SSH keys on {% data variables.product.product_name %} _should_ match the same keys on your computer.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
1. Under "SSH keys", take note of the SSH keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid SSH keys you'd like to keep, click **Approve**.

   {% note %}

   **Note:** If you're auditing your SSH keys due to an unsuccessful Git operation, the unverified key that caused the [SSH key audit error](/articles/error-we-re-doing-an-ssh-key-audit) will be highlighted in the list of SSH keys.

   {% endnote %}

1. Open Terminal.

{% data reusables.command_line.start_ssh_agent %}

1. Find and take a note of your public key fingerprint.

   ```shell
   $ ssh-add -l -E sha256
   > 2048 SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ /Users/USERNAME/.ssh/id_rsa (RSA)
   ```

1. The SSH keys on {% data variables.product.product_name %} _should_ match the same keys on your computer.

{% endlinux %}

{% warning %}

**Warning**: If you see an SSH key you're not familiar with on {% data variables.product.product_name %}, delete it immediately and contact {% data variables.contact.contact_support %} for further help. An unidentified public key may indicate a possible security concern.

{% endwarning %}
