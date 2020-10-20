---
title: Auditing SSH keys
intro: Site administrators can initiate an instance-wide audit of SSH keys.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys/
  - /enterprise/admin/user-management/auditing-ssh-keys
versions:
  enterprise-server: '*'
---

Once initiated, the audit disables all existing SSH keys and forces users to approve or reject them before they're able to clone, pull, or push to any repositories. An audit is useful in situations where an employee or contractor leaves the company and you need to ensure that all keys are verified.

### Initiating an audit

You can initiate an SSH key audit from the "All users" tab of the site admin dashboard:

![Starting a public key audit](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

After you click the "Start public key audit" button, you'll be taken to a confirmation screen explaining what will happen next:

![Confirming the audit](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

After you click the "Begin audit" button, all SSH keys are invalidated and will require approval. You'll see a notification indicating the audit has begun.

### What users see

If a user attempts to perform any git operation over SSH, it will fail and provide them with the following message:

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

When they follow the link, they're asked to approve the keys on their account:

![Auditing keys](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

After they approve or reject their keys, they'll be able interact with repositories as usual.

### Adding an SSH key

New users will be prompted for their password when adding an SSH key:

![Password confirmation](/assets/images/help/settings/sudo_mode_popup.png)

When a user adds a key, they'll receive a notification email that will look something like this:

    The following SSH key was added to your account:
    
    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
    
    If you believe this key was added in error, you can remove the key and disable access at the following location:
    
    http(s)://HOSTNAME/settings/ssh
