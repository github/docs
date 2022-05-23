---
title: OrganizationのSSH認証局を管理する
intro: Organizationから、SSH認証局を追加または削除することができます。
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH認証局の管理
permissions: Organization owners can manage an organization's SSH certificate authorities (CA).
---

SSH CAをOrganizationに追加すると、メンバーはあなたが提供したSSH証明書を使用してOrganizationにアクセスできるようになります。 {% data reusables.organizations.can-require-ssh-cert %}詳しい情報については、「[SSS 認証局について](/articles/about-ssh-certificate-authorities)」を参照してください。

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## SSH 認証局を追加する

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. 詳しい情報については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

## SSH認証局を削除する

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
