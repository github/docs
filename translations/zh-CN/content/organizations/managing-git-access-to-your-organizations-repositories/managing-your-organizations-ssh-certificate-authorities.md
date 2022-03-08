---
title: 管理组织的 SSH 认证中心
intro: 可在组织中添加或删除 SSH 认证中心。
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理 SSH 机构
---

组织所有者可以管理组织的 SSH 认证中心 (CA)。

您可以通过向组织添加 SSH CA 来允许成员使用提供的 SSH 证书访问组织的仓库。 {% data reusables.organizations.can-require-ssh-cert %} 更多信息请参阅“[关于 SSH 认证中心](/articles/about-ssh-certificate-authorities)”。

{% data reusables.organizations.add-extension-to-cert %}

## 添加 SSH 认证中心

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. 更多信息请参阅“[关于 SSH 认证中心](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)”。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

## 删除 SSH 认证中心

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
