---
title: Best practices for securing accounts
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: Guidance on how to protect accounts with access to your software supply chain.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
---
## About this guide

This guide describes the highest impact changes you can make to increase account security. Each section outlines a change you can make to your processes to improve the security. The highest impact changes are listed first.

## What's the risk?

Account security is fundamental to the security of your supply chain. If an attacker can take over your account on {% data variables.product.product_name %}, they can then make malicious changes to your code or build process. So your first goal should be to make it difficult for someone to take over your account and the accounts of other {% ifversion ghes %}users{% else %}members{% endif %} of {% ifversion fpt %}your organization{% elsif ghec or ghae %}your organization or enterprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %}.

{% ifversion ghec or ghes %}

## Centralize authentication

{% endif %}

{% ifversion ghec %}
If you're an enterprise or organization owner, you can configure centralized authentication with SAML. While you can add or remove members manually, it's simpler and more secure to set up single sign-on (SSO) and SCIM between {% data variables.product.product_name %} and your SAML identity provider (IdP). This also simplifies the authentication process for all members of your enterprise.

You can configure SAML authentication for an enterprise or organization account. With SAML, you can grant access to the personal accounts of members of your enterprise or organization on {% data variables.location.product_location %} through your IdP, or you can create and control the accounts that belong to your enterprise by using {% data variables.product.prodname_emus %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."

After you configure SAML authentication, when members request access to your resources, they'll be directed to your SSO flow to ensure they are still recognized by your IdP. If they are unrecognized, their request is declined.

Some IdPs support a protocol called SCIM, which can automatically provision or deprovision access on {% data variables.product.product_name %} when you make changes on your IdP. With SCIM, you can simplify administration as your team grows, and you can quickly revoke access to accounts. SCIM is available for individual organizations on {% data variables.product.product_name %}, or for enterprises that use {% data variables.product.prodname_emus %}. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)."
{% endif %}

{% ifversion ghes %}
If you're the site administrator for {% data variables.location.product_location %}, you can simplify the login experience for users by choosing an authentication method that connects with your existing identity provider (IdP), like CAS, SAML, or LDAP. This means that they no longer need to remember an extra password for {% data variables.product.prodname_dotcom %}.

Some authentication methods also support communicating additional information to {% data variables.product.product_name %}, for example, what groups the user is a member of, or synchronizing cryptographic keys for the user. This is a great way to simplify your administration as your organization grows.

For more information about the authentication methods available for {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."
{% endif %}

## Configure two-factor authentication

{% ifversion mandatory-2fa-dotcom-contributors %}
{% data reusables.two_fa.mandatory-2fa-contributors-2023 %}
{% endif %}

The best way to improve the security of {% ifversion fpt %}your personal account{% elsif ghes %}your personal account or {% data variables.location.product_location %}{% elsif ghec %}your accounts{% elsif ghae %}your enterprise on {% data variables.product.product_name %}{% endif %} is to configure two-factor authentication (2FA){% ifversion ghae %} on your SAML identity provider (IdP){% endif %}. Passwords by themselves can be compromised by being guessable, by being reused on another site that's been compromised, or by social engineering, like phishing. 2FA makes it much more difficult for your accounts to be compromised, even if an attacker has your password.

As a best practice, to ensure both security and reliable access to your account, you should always have at least two second-factor credentials registered on your account. Extra credentials ensures that even if you lose access to one credential, you won't be locked out of your account.{% ifversion fpt or ghec %}

Additionally, you should prefer{% ifversion passkeys %} passkeys and{% endif %} security keys over authenticator apps (called TOTP apps) and avoid use of SMS whenever possible. Both SMS-based 2FA and TOTP apps are vulnerable to phishing, and do not provide the same level of protection as {% ifversion passkeys %}passkeys and {% endif %}security keys. SMS is no longer recommended under the [NIST 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html) digital identity guidelines.

{% endif %}{% ifversion mandatory-2fa-dotcom-contributors %}{% ifversion ghec %}
If service accounts in your organization have been selected for 2FA enrollment by {% data variables.product.prodname_dotcom %}, their tokens and keys will continue to work after the deadline without interruption. Only access to {% data variables.product.prodname_dotcom %} through the website UI will be blocked until the account has enabled 2FA. We recommend setting up TOTP as the second factor for service accounts, and storing the TOTP secret exposed during setup in your company's shared password manager, with access to the secrets controlled through SSO.
{% endif %}{% endif %}

{% ifversion not ghae %}

{% ifversion ghec %}
If you're an enterprise owner, you may be able to configure a policy to require 2FA for all organizations owned by your enterprise.
{% endif %}

{% ifversion ghes %}
If you're the site administrator for {% data variables.location.product_location %}, you may be able to configure 2FA for all users of your instance. The availability of 2FA on {% data variables.product.product_name %} depends on the authentication method that you use. For more information, see "[Centralize user authentication](#centralize-user-authentication)."
{% endif %}

If you're an organization owner, then you {% ifversion fpt %}can{% else %}may be able to{% endif %} require that all members of the organization enable 2FA.

To learn more about enabling 2FA on your own account, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)." To learn more about requiring 2FA in your organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)."

{% ifversion ghec or ghes %}

### Configure your enterprise account

Enterprise owners may be able to require 2FA for all {% ifversion ghes %}users on{% elsif ghec %}members of{% endif %} the {% ifversion ghes %}instance{% elsif ghec %}enterprise{% endif %}. The availability of 2FA policies on {% data variables.product.product_name %} depends on how {% ifversion ghes %}users{% else %}members{% endif %} authenticate to access your {% ifversion ghes %}instance{% elsif ghec %}enterprise's resources{% endif %}.

{% ifversion ghes %}
- If you sign into {% data variables.location.product_location %} through an external IdP using CAS or SAML SSO, you
{% elsif ghec %}
If your enterprise uses {% data variables.product.prodname_emus %} or SAML authentication is enforced for your enterprise, you
{%- endif %} cannot configure 2FA on {% data variables.product.product_name %}. Someone with administrative access to your IdP must configure 2FA for the IdP.

{% ifversion ghes %}

- If you sign into {% data variables.location.product_location %} through an external LDAP directory, you can require 2FA for your enterprise on {% data variables.product.product_name %}. If you allow built-in authentication for users outside of your directory, individual users can enable 2FA, but you cannot require 2FA for your enterprise.

{% endif %}

For more information, see {% ifversion ghec %}"[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)" and {% endif %}"[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)."

{% endif %}

### Configure your personal account

{% ifversion ghec or ghes %}
{% note %}

**Note**: Depending on the authentication method that {% ifversion ghec %}an enterprise owner{% elsif ghes %}a site administrator{% endif %} has configured for {% ifversion ghec %}your enterprise on {% endif %}{% data variables.location.product_location %}, you may not be able to enable 2FA for your personal account.

{% endnote %}
{% endif %}

{% data variables.product.product_name %} supports several options for 2FA, and while any of them is better than nothing, the most secure option is a WebAuthn credential. WebAuthn requires an authenticator such as a FIDO2 hardware security key, a platform authenticator like Windows Hello, an Apple or Google phone, or a password manager. It's possible, although difficult, to phish other forms of 2FA (for example, someone asking you to read them your 6 digit one-time password). However WebAuthn is much more resistant to phishing, because domain scoping is built into the protocol, which prevents credentials from a website impersonating the login page from being used on {% data variables.product.product_name %}.

When you set up 2FA, you should always download the recovery codes and set up more than one 2FA credential. This ensures that access to your account doesn't depend on a single device. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)" and "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)."

### Configure your organization account

{% ifversion ghec or ghes %}
{% note %}

**Note**: Depending on the authentication method that {% ifversion ghec %}an enterprise owner{% elsif ghes %}a site administrator{% endif %} has configured for {% ifversion ghec %}your enterprise on {% endif %}{% data variables.location.product_location %}, you may not be able to require 2FA for your organization.

{% endnote %}
{% endif %}

If you're an organization owner, you can see which users don't have 2FA enabled, help them get set up, and then require 2FA for your organization. To guide you through that process, see:

1. "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)"
1. "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)"
1. "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)"

{% endif %}

## Connect to {% data variables.product.product_name %} using SSH keys

There are other ways to interact with {% data variables.product.product_name %} beyond signing into the website{% ifversion ghae %} via your IdP{% endif %}. Many people authorize the code they push to {% data variables.product.prodname_dotcom %} with an SSH private key. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/about-ssh)."

Just like {% ifversion ghae %}the password for your IdP account{% else %}your account password{% endif %}, if an attacker were able to get your SSH private key, they could impersonate you and push malicious code to any repository you have write access for. If you store your SSH private key on a disk drive, it's a good idea to protect it with a passphrase. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)."

Another option is to generate SSH keys on a hardware security key. You could use the same key you're using for 2FA. Hardware security keys are very difficult to compromise remotely, because the private SSH key remains on the hardware, and is not directly accessible from software. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)."

{% ifversion ghec or ghes or ghae %}
Hardware-backed SSH keys are quite secure, but the hardware requirement might not work for some organizations. An alternative approach is to use SSH keys that are only valid for a short period of time, so even if the private key is compromised it can't be exploited for very long. This is the concept behind running your own SSH certificate authority. While this approach gives you a lot of control over how users authenticate, it also comes with the responsibility of maintaining an SSH certificate authority yourself. For more information, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."
{% endif %}

## Next steps

- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"
- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"
- "[AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"{% ifversion fpt or ghec or ghes %}
- "[AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization)"{% endif %}
