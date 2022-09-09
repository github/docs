---
title: 关于企业配置
intro: '可以使用站点管理员仪表板{% ifversion ghes %}、{% data variables.enterprise.management_console %} 以及管理 shell (SSH) {% elsif ghae %}和企业设置或联系支持{% endif %}来管理企业。'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098115'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} 有关详细信息，请参阅“[站点管理仪表板](/admin/configuration/site-admin-dashboard)”。

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} 有关详细信息，请参阅“[访问管理控制台](/admin/configuration/accessing-the-management-console)”。

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。
{% endif %}

{% ifversion ghae %} 要开始使用 {% data variables.product.product_name %}，首先需要部署 {% data variables.product.product_name %}。 有关详细信息，请参阅“[部署 {% data variables.product.product_name %}](/admin/configuration/configuring-your-enterprise/deploying-github-ae)”。

第一次访问您的企业时，您将完成初始配置，以便 {% data variables.product.product_name %} 可供使用。 初始配置包括连接您的企业与身份提供程序 (IdP) 连接、通过 SAML SSO 进行身份验证、配置企业中仓库和组织的策略，以及为出站电子邮件配置 SMTP。 有关详细信息，请参阅“[初始化 {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)”。

稍后，您可以使用站点管理员仪表板和企业设置进一步配置企业、管理用户、组织和仓库，并设置可降低风险和提高质量的策略。 

所有企业都配置了子域隔离，仅对加密流量支持 TLS 1.2 及更高版本。
{% endif %}

## 延伸阅读

- [管理用户、组织和存储库](/admin/user-management)
- [为企业设置策略](/admin/policies)
