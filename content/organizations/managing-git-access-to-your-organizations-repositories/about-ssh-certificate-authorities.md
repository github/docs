---
title: About SSH certificate authorities
intro: 'With an SSH certificate authority, your organization or enterprise account can provide SSH certificates that members can use to access your resources with Git.'
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

An SSH certificate is a mechanism for one SSH key to sign another SSH key. If you use an SSH certificate authority (CA) to provide your organization members with signed SSH certificates, you can add the CA to your enterprise account or organization to allow organization members to use their certificates to access organization resources. For more information, see "[Managing your organization's SSH certificate authorities](/articles/managing-your-organizations-ssh-certificate-authorities)."

After you add an SSH CA to your organization or enterprise account, you can use the CA to sign client SSH certificates for organization members. Organization members can use the signed certificates to access your organization's repositories (and only your organization's repositories) with Git. You can require that members use SSH certificates to access organization resources.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Enforcing security settings in your enterprise account](/articles/enforcing-security-settings-in-your-enterprise-account#managing-your-enterprise-accounts-ssh-certificate-authorities)."{% endif %}

For example, you can build an internal system that issues a new certificate to your developers every morning. Each developer can use their daily certificate to work on your organization's repositories on {% data variables.product.product_name %}. At the end of the day, the certificate can automatically expire, protecting your repositories if the certificate is later compromised.

When you issue each certificate, you must include an extension that specifies which {% data variables.product.product_name %} user the certificate is for. For example, you can use OpenSSH's `ssh-keygen` command, replacing _KEY-IDENTITY_ with your key identity and _USERNAME_ with a {% data variables.product.product_name %} username.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

To issue a certificate for someone who uses SSH to access multiple {% data variables.product.company_short %} products, you can include two login extensions to specify the username for each product. For example, the following command would issue a certificate for _USERNAME-1_ for the user's account for {% data variables.product.prodname_ghe_cloud %}, and _USERNAME-2_ for the user's account on {% data variables.product.prodname_ghe_managed %} or {% data variables.product.prodname_ghe_server %} at _HOSTNAME_.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

You can restrict the IP addresses from which an organization member can access your organization's resources by using a `source-address` extension. The extension accepts a specific IP address or a range of IP addresses using CIDR notation. You can specify multiple addresses or ranges by separating the values with commas. For more information, see "[Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)" on Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```

{% if currentVersion == "free-pro-team@latest" %}

Organization members can use their signed certificates for authentication even if you've enforced SAML single sign-on. Unless you make SSH certificates a requirement, organization members can continue to use other means of authentication to access your organization's resources with Git, including their username and password, personal access tokens, and their own SSH keys.

{% endif %}

To prevent authentication errors, organization members should use a special URL that includes the organization ID to clone repositories using signed certificates. Anyone with read access to the repository can find this URL on the repository page. For more information, see "[Cloning a repository](/articles/cloning-a-repository)."
