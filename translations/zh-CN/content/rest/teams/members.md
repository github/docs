---
title: 团队成员
allowTitleToDifferFromFilename: true
shortTitle: Members
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9f2e4a1bee298bddf1d1712c78b2bac41f15c27e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147876166'
---
## 关于团队成员 API

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %} {% note %}

注意：如果为具有组织身份提供程序 (IdP) 的团队设置了团队同步，当尝试使用 API 更改团队的成员身份时，则会看到错误。 如果您有权访问 IdP 中的组成员身份，可以通过身份提供程序管理 GitHub 团队成员身份，该提供程序会自动添加和删除组织的成员。 有关详细信息，请参阅“[在标识提供者与 GitHub 之间同步团队](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”。

{% endnote %}

{% endif %}
