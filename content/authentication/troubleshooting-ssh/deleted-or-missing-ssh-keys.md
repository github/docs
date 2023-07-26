---
title: Deleted or missing SSH keys
intro: 'As a security precaution, {% data variables.product.prodname_dotcom %} automatically deletes SSH keys that haven''t been used in a year.'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
---
{% data variables.product.prodname_dotcom %} automatically deletes inactive SSH keys to help keep accounts safe, such as after someone leaves a job or loses a computer.

You can check if you haven't used an SSH key in a year by reviewing your account's security log. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)."

After your inactive SSH key is deleted, you must generate a new SSH key and associate it with your account. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" and "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)."
