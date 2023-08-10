---
title: 'Error: We''re doing an SSH key audit'
intro: This error means the SSH key you're using to perform a Git operation is unverified.
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/troubleshooting-ssh/error-were-doing-an-ssh-key-audit
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key audit
---
When using an unverified key to perform Git operations, you will be prompted to perform an audit of your SSH keys.

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```

## Solving the issue

To fix this, you need to [review your SSH keys](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys) and either reject or approve the unverified key. Clicking the URL link in the error message brings you to the SSH Settings page, where the unverified SSH key is highlighted in the SSH key list.
