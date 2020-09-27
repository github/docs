---
title: OrganizationのSSH認証局を管理する
intro: Organizationから、SSH認証局を追加または削除することができます。
product: '{{ site.data.reusables.gated-features.ssh-certificate-authorities }}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

Organizationのオーナーは、OrganizationのSSH認証局 (CAN) を管理できます。

SSH CAをOrganizationに追加すると、メンバーはあなたが提供したSSH証明書を使用してOrganizationにアクセスできるようになります。 {{ site.data.reusables.organizations.can-require-ssh-cert }}詳細については、「[SSL認証局について](/articles/about-ssh-certificate-authorities)」を参照してください。

### SSH 認証局を追加する

{{ site.data.reusables.organizations.add-extension-to-cert }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.new-ssh-ca }}
{{ site.data.reusables.organizations.require-ssh-cert }}

### SSH認証局を削除する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.delete-ssh-ca }}
