---
title: About SSH
intro: 'Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to {% data variables.product.product_name %} without supplying your username and {% data variables.product.pat_generic %} at each visit.{% ifversion ssh-commit-verification %} You can also use an SSH key to sign commits.{% endif %}'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
---

{% data reusables.ssh.about-ssh %} For more information about SSH, see [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) on Wikipedia.

When you set up SSH, you will need to generate a new private SSH key and add it to the SSH agent. You must also add the public SSH key to your account on {% data variables.product.product_name %} before you use the key to authenticate{% ifversion ssh-commit-verification %} or sign commits{% endif %}. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"{% ifversion ssh-commit-verification %}, {% else %} and{% endif %} "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account){% ifversion ssh-commit-verification %}" and "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification){% endif %}."

You can further secure your SSH key by using a hardware security key, which requires the physical hardware security key to be attached to your computer when the key pair is used to authenticate with SSH. You can also secure your SSH key by adding your key to the ssh-agent and using a passphrase. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)."

{% ifversion fpt or ghec %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you must authorize the key. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}

To maintain account security, you can regularly review your SSH keys list and revoke any keys that are invalid or have been compromised. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys)."

{% ifversion fpt or ghec %}
If you haven't used your SSH key for a year, then {% data variables.product.prodname_dotcom %} will automatically delete your inactive SSH key as a security precaution. For more information, see "[AUTOTITLE](/authentication/troubleshooting-ssh/deleted-or-missing-ssh-keys)."
{% endif %}

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can provide SSH certificates, which members can use to access that organization's repositories without adding the certificate to their account on {% data variables.product.product_name %}. If you're using an SSH certificate, you cannot use the certificate to access forks of the organization's repositories, if the fork is owned by your personal account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)" in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% else ghec or ghes or ghae %}
If you're a member of an organization that provides SSH certificates, you can use your certificate to access that organization's repositories without adding the certificate to your account on {% data variables.product.product_name %}. You cannot use your certificate to access forks of the organization's repositories, if the forks is owned by your personal account. For more information, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."
{% endif %}

## Further reading

- "[AUTOTITLE](/authentication/troubleshooting-ssh)"
