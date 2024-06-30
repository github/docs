---
title: About SSH certificate authorities
intro: 'With an SSH certificate authority, your organization or enterprise account can provide SSH certificates that members and outside collaborators can use to access your resources with Git.'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH certificate authorities
---

## About SSH certificate authorities

An SSH certificate is a mechanism for one SSH key to sign another SSH key. If you use an SSH certificate authority (CA) to provide your organization members and outside collaborators with signed SSH certificates, you can add the CA to your enterprise account or organization to allow these organization contributors to use their certificates to access organization resources.

{% data reusables.organizations.ssh-ca-ghec-only %}

After you add an SSH CA to your organization or enterprise account, you can use the CA to sign client SSH certificates for organization members and outside collaborators. These organization contributors can use the signed certificates to access that organization's repositories.

Certificates added to your enterprise grant access to all organizations owned by your enterprise account. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."

{% data reusables.organizations.can-require-ssh-cert %}

Optionally, you can require that members and outside collaborators use SSH certificates to access organization resources. For more information, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."

For example, you can build an internal system that issues a new certificate to your developers every morning. Each developer can use their daily certificate to work on your organization's repositories on {% data variables.product.product_name %}. At the end of the day, the certificate can automatically expire, protecting your repositories if the certificate is later compromised.

{% ifversion ghec %}
Organization contributors can use their signed certificates for authentication even if you've enforced SAML single sign-on (SSO), without the need to authorize the signed certificates.

Unless you make SSH certificates a requirement, organization members and outside collaborators can continue to use other means of authentication to access your organization's resources with Git, including their username and password, {% data variables.product.pat_generic %}s, and their own SSH keys.
{% endif %}

{% data reusables.emus.ssh-ca-support-for-emu %}

## About SSH URLs with SSH certificates

If your organization requires SSH certificates, to prevent authentication errors, organization members and outside collaborators should use a special URL that includes the organization ID when performing Git operations over SSH. This special URL allows the client and server to more easily negotiate which key on the member's computer should be used for authentication. If a member uses the normal URL, which starts with `git@github.com`, the SSH client might offer the wrong key, causing the operation to fail.

Anyone with read access to the repository can find this URL by selecting the **Code** dropdown menu on the main page of the repository, then clicking **Use SSH**.

If your organization doesn't require SSH certificates, contributors can continue to use their own SSH keys, or other means of authentication. In that case, either the special URL or the normal URL, which starts with `git@github.com`, will work.

## Issuing certificates

When you issue each certificate, you must include an extension that specifies which {% data variables.product.product_name %} user the certificate is for. You can reference the user using their login handle{% ifversion ssh-ca-expires %} or their user ID{% endif %}. For example, you can use OpenSSH's `ssh-keygen` command, replacing KEY-IDENTITY with your key identity and USERNAME with a {% data variables.product.product_name %} username{% ifversion ssh-ca-expires %} or user ID{% endif %}. The certificate you generate will be authorized to act on behalf of that user for any of your organization's resources. Make sure you validate the user's identity before you issue the certificate.

{% note %}

**Note:** You must update to OpenSSH 7.6 or later to use these commands.

{% endnote %}

To use the `login` to identify the user, use `extension:login`:

```shell
ssh-keygen -s ./ca-key -V '+1d' -I KEY-IDENTITY -O extension:login@{% data variables.product.product_url %}=USERNAME ./user-key.pub
```

{% ifversion ssh-ca-expires %}
To use the user ID, use `extension:id`:

```shell
ssh-keygen -s ./ca-key -V '+1d' -I KEY-IDENTITY -O extension:id@{% data variables.product.product_url %}=ID ./user-key.pub
```

{% endif %}
{% warning %}

**Warning**: After a certificate has been signed and issued, the certificate cannot be revoked.

{% endwarning %}

For CAs uploaded {% ifversion ghec %}after March 27th, 2024{% elsif ghes %}to {% data variables.product.prodname_ghe_server %} version 3.13 or later{% endif %}, you {% ifversion ghes < 3.13 %}will need to{% else %}must{% endif %} use the `-V` flag to configure a lifetime less than 366 days for the certificate. For CAs uploaded {% ifversion ghec %}before this date{% elsif ghes %}before version 3.13{% endif %}, the `-V` flag is optional, and you can create certificates that are irrevocable and live forever.

{% ifversion ssh-ca-expires %}
If you have legacy CAs that are exempt from the expiration requirement, you can upgrade the CA to enforce the requirement. To learn more, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."

If you use a username as the login extension, {% data variables.product.company_short %} validates that the named user has not been renamed since the certificate was issued. This prevents a rename attack, where a certificate issued for a username is valid even if the underlying user account changes. To enforce this, the certificate must include the `valid_after` claim, which tells us when the certificate was issued. This field is often missing if an expiration is not required for the certificate, which is why expirations are now required.
{% endif %}

To issue a certificate for someone who uses SSH to access multiple {% data variables.product.company_short %} products, you can include two login extensions to specify the username for each product. For example, the following command would issue a certificate for USERNAME-1 for the user's account for {% data variables.product.prodname_ghe_cloud %}, and USERNAME-2 for the user's account on {% data variables.product.prodname_ghe_server %} at HOSTNAME.

```shell
ssh-keygen -s ./ca-key -V '+1d' -I KEY-IDENTITY -O extension:login@github.com=USERNAME-1 extension:login@HOSTNAME=USERNAME-2 ./user-key.pub
```

You can restrict the IP addresses from which an organization member can access your organization's resources by using a `source-address` extension. The extension accepts a specific IP address or a range of IP addresses using CIDR notation. You can specify multiple addresses or ranges by separating the values with commas. For more information, see "[Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)" on Wikipedia.

```shell
ssh-keygen -s ./ca-key -V '+1d' -I KEY-IDENTITY -O extension:login@{% data variables.product.product_url %}=USERNAME -O source-address=COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES ./user-key.pub
```
