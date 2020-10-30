---
title: OrganizationのSSH認証局を管理する
intro: Organizationから、SSH認証局を追加または削除することができます。
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Organizationのオーナーは、OrganizationのSSH認証局 (CAN) を管理できます。

SSH CAをOrganizationに追加すると、メンバーはあなたが提供したSSH証明書を使用してOrganizationにアクセスできるようになります。 {% data reusables.organizations.can-require-ssh-cert %}詳細については、「[SSH認証局について](/articles/about-ssh-certificate-authorities)」を参照してください。

### SSH 認証局を追加する

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### SSH認証局を削除する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
