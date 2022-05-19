---
title: Best practices for securing accounts
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: Guidance on how to protect accounts with access to your software supply chain.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
---

## Acerca de esta guía

This guide describes the highest impact changes you can make to increase account security. Each section outlines a change you can make to your processes to improve the security. Los cambios de más alto impacto se listan primero.

## ¿Cuál es el riesgo?

Account security is fundamental to the security of your supply chain. If an attacker can take over your account on {% data variables.product.product_name %}, they can then make malicious changes to your code or build process. Así que tu primera meta debería ser que fuera difícil que alguien se apoderara de tu cuenta y de las cuentas de otros {% ifversion ghes %}usuarios{% else %}miembros{% endif %} de {% ifversion fpt %}tu organización{% elsif ghec or ghae %}tu organización o empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

{% ifversion ghec or ghes %}
## Centralize authentication
{% endif %}

{% ifversion ghec %}
If you're an enterprise or organization owner, you can configure centralized authentication with SAML. While you can add or remove members manually, it's simpler and more secure to set up single sign-on (SSO) and SCIM between {% data variables.product.product_name %} and your SAML identity provider (IdP). This also simplifies the authentication process for all members of your enterprise.

You can configure SAML authentication for an enterprise or organization account. With SAML, you can grant access to the personal accounts of members of your enterprise or organization on {% data variables.product.product_location %} through your IdP, or you can create and control the accounts that belong to your enterprise by using {% data variables.product.prodname_emus %}. Para obtener más información, consulta la sección "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".

After you configure SAML authentication, when members request access to your resources, they'll be directed to your SSO flow to ensure they are still recognized by your IdP. If they are unrecognized, their request is declined.

Some IdPs support a protocol called SCIM, which can automatically provision or deprovision access on {% data variables.product.product_name %} when you make changes on your IdP. With SCIM, you can simplify administration as your team grows, and you can quickly revoke access to accounts. SCIM is available for individual organizations on {% data variables.product.product_name %}, or for enterprises that use {% data variables.product.prodname_emus %}. Para obtener más información, consulta la sección "[SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".
{% endif %}

{% ifversion ghes %}
If you're the site administrator for {% data variables.product.product_location %}, you can simplify the login experience for users by choosing an authentication method that connects with your existing identity provider (IdP), like CAS, SAML, or LDAP. This means that they no longer need to remember an extra password for {% data variables.product.prodname_dotcom %}.

Some authentication methods also support communicating additional information to {% data variables.product.product_name %}, for example, what groups the user is a member of, or synchronizing cryptographic keys for the user. This is a great way to simplify your administration as your organization grows.

For more information about the authentication methods available for {% data variables.product.product_name %}, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."
{% endif %}

## Configure two-factor authentication

La mejor forma de mejorar la seguridad de {% ifversion fpt %}tu cuenta personal{% elsif ghes %}tu cuenta personal o {% data variables.product.product_location %}{% elsif ghec %}tus cuentas{% elsif ghae %}tu empresa en {% data variables.product.product_name %}{% endif %} es configurar la autenticación bifactorial (2FA){% ifversion ghae %} en tu proveedor de identidad (IdP) de SAML{% endif %}. Passwords by themselves can be compromised by being guessable, by being reused on another site that's been compromised, or by social engineering, like phishing. 2FA makes it much more difficult for your accounts to be compromised, even if an attacker has your password.

{% ifversion not ghae %}

{% ifversion ghec %}
If you're an enterprise owner, you may be able to configure a policy to require 2FA for all organizations owned by your enterprise.
{% endif %}

{% ifversion ghes %}
If you're the site administrator for {% data variables.product.product_location %}, you may be able to configure 2FA for all users of your instance. The availability of 2FA on {% data variables.product.product_name %} depends on the authentication method that you use. For more information, see "[Centralize user authentication](#centralize-user-authentication)."
{% endif %}

If you're an organization owner, then you {% ifversion fpt %}can{% else %}may be able to{% endif %} require that all members of the organization enable 2FA.

{% ifversion ghec or ghes %}

### Configure your enterprise account

Enterprise owners may be able to require 2FA for all {% ifversion ghes %}users on{% elsif ghec %}members of{% endif %} the {% ifversion ghes %}instance{% elsif ghec %}enterprise{% endif %}. The availability of 2FA policies on {% data variables.product.product_name %} depends on how {% ifversion ghes %}users{% else %}members{% endif %} authenticate to access your {% ifversion ghes %}instance{% elsif ghec %}enterprise's resources{% endif %}.

{% ifversion ghes %}
- If you sign into {% data variables.product.product_location %} through an external IdP using CAS or SAML SSO, you
{% elsif ghec %}
If your enterprise uses {% data variables.product.prodname_emus %} or SAML authentication is enforced for your enterprise, you
{%- endif %} cannot configure 2FA on {% data variables.product.product_name %}. Someone with administrative access to your IdP must configure 2FA for the IdP.

{% ifversion ghes %}

- If you sign into {% data variables.product.product_location %} through an external LDAP directory, you can require 2FA for your enterprise on {% data variables.product.product_name %}. If you allow built-in authentication for users outside of your directory, individual users can enable 2FA, but you cannot require 2FA for your enterprise.

{% endif %}

Para obtener más información, consulta las secciones {% ifversion ghec %}"[Acerca de la administración de accesos e identidad para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)" y {% endif %}"[Requerir políticas para los ajustes de seguridad en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise)".

{% endif %}

### Configure your personal account

{% ifversion ghec or ghes %}
{% note %}

**Nota**: Dependiendo del método de autenticación que haya configurado {% ifversion ghec %}un propietario de empresa{% elsif ghes %}un administrador de sitio{% endif %} para {% ifversion ghec %}tu empresa en {% endif %}{% data variables.product.product_location %}, podrías no poder habilitar la 2FA para tu cuenta personal.

{% endnote %}
{% endif %}

{% data variables.product.product_name %} supports several options for 2FA, and while any of them is better than nothing, the most secure option is WebAuthn. WebAuthn requires either a hardware security key or a device that supports it through things like Windows Hello or Mac TouchID. It's possible, although difficult, to phish other forms of 2FA (for example, someone asking you to read them your 6 digit one-time password). However WebAuthn isn't phishable, because domain scoping is built into the protocol, which prevents credentials from a website impersonating a login page from being used on {% data variables.product.product_name %}.

When you set up 2FA, you should always download the recovery codes and set up more than one factor. This ensures that access to your account doesn't depend on a single device. Para obtener más información, consulta las secciones "[Configurar la autenticación bifactorial](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)", "[Configurar los métodos de recuperación de la autenticación bifactorial](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)" y [Llaves de seguridad de hardware con marca de GitHub](https://thegithubshop.com/products/github-branded-yubikey) en la tienda de GitHub.

### Configure your organization account

{% ifversion ghec or ghes %}
{% note %}

**Nota**: Dependiendo del método de autenticación que haya configurado {% ifversion ghec %}un propietario de empresa{% elsif ghes %}un administrador de sitio{% endif %} para {% ifversion ghec %}tu empresa en {% endif %}{% data variables.product.product_location %}, podrías no poder requerir la 2FA para tu organización.

{% endnote %}
{% endif %}

If you're an organization owner, you can see which users don't have 2FA enabled, help them get set up, and then require 2FA for your organization. To guide you through that process, see:

1. "[Viewing whether users in your organization have 2FA enabled](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)"
2. "[Preparing to require two-factor authentication in your organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)"
3. "[Requiring two-factor authentication in your organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)"

{% endif %}

## Connect to {% data variables.product.product_name %} using SSH keys

There are other ways to interact with {% data variables.product.product_name %} beyond signing into the website. Many people authorize the code they push to {% data variables.product.prodname_dotcom %} with an SSH private key. For more information, see "[About SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

Just like your account password, if an attacker were able to get your SSH private key, they could impersonate you and push malicious code to any repository you have write access for. If you store your SSH private key on a disk drive, it's a good idea to protect it with a passphrase. For more information, see "[Working with SSH key passphrases](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)."

Another option is to generate SSH keys on a hardware security key. You could use the same key you're using for 2FA. Hardware security keys are very difficult to compromise remotely, because the private SSH key remains on the hardware, and is not directly accessible from software. For more information, see "[Generating a new SSH key for a hardware security key](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)."

{% ifversion ghec or ghes or ghae %}
Hardware-backed SSH keys are quite secure, but the hardware requirement might not work for some organizations. An alternative approach is to use SSH keys that are only valid for a short period of time, so even if the private key is compromised it can't be exploited for very long. This is the concept behind running your own SSH certificate authority. While this approach gives you a lot of control over how users authenticate, it also comes with the responsibility of maintaining an SSH certificate authority yourself. For more information, see "[About SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."
{% endif %}

## Pasos siguientes

- "[Asegurar tu cadena de suministros de extremo a extremo](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Mejores prácticas para asegurar el código en tu cadena de suministros](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"

- "[Mejores prácticas para asegurar tu sistema de compilación](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)"
