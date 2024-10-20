---
title: 'Error: Host key verification failed'
intro: 'As a security precaution, SSH keeps track of which hosts it has previously seen.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
---

This error means that the server to which you're connecting presented a key that doesn't match the keys seen for this server in the past.

You may see this error if the server has changed its keys unexpectedly, in which case you should be able to find an official report from a trustworthy source announcing the change. If {% data variables.product.company_short %} changes its SSH host key, this will be announced on {% data variables.product.prodname_blog %} at [github.blog](https://github.blog/).

You can find an up-to-date list of {% data variables.product.company_short %}'s public SSH keys on {% data variables.product.prodname_docs %}. You may need to add these keys to your `known_hosts` file. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)."

If you are encountering the error but can't find an official source for the server's keys, it is safest not to connect, because you may be connecting to a server other than your intended server. You may want to contact your IT department or the server's support team for help. If the server is being impersonated, the owner of the server will appreciate you informing them.
