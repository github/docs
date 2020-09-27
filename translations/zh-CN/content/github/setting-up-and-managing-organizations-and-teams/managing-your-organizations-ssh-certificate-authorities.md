---
title: 管理组织的 SSH 认证中心
intro: 可在组织中添加或删除 SSH 认证中心。
product: '{{ site.data.reusables.gated-features.ssh-certificate-authorities }}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

组织所有者可以管理组织的 SSH 认证中心 (CA)。

您可以通过向组织添加 SSH CA 来允许成员使用提供的 SSH 证书访问组织的仓库。 {{ site.data.reusables.organizations.can-require-ssh-cert }} 更多信息请参阅“[关于 SSH 认证中心](/articles/about-ssh-certificate-authorities)”。

### 添加 SSH 认证中心

{{ site.data.reusables.organizations.add-extension-to-cert }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.new-ssh-ca }}
{{ site.data.reusables.organizations.require-ssh-cert }}

### 删除 SSH 认证中心

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.delete-ssh-ca }}
