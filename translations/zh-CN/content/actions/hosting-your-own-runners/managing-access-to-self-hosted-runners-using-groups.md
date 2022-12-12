---
title: 使用组管理对自托管运行程序的访问
shortTitle: Manage access with runner groups
intro: 您可以使用策略来限制对已添加到组织或企业的自托管运行器的访问。
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
ms.openlocfilehash: c6f53c3698800de519fe34231a8faf37924eacaa
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120887'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} 有关如何将作业路由到特定组中的运行器的信息，请参阅“[在组中选择运行器](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group)”。
{% endif %}

## 关于运行器组

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)。{% endif %}

{% ifversion ghec or ghes or ghae %}

## 为组织创建自托管的运行器组

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## 为企业创建自托管运行器组

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## 更改自托管运行器组的访问策略

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## 更改运行器组的名称

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## 自动向组添加自托管运行器

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## 将自托管的运行器移动到组

{% data reusables.actions.moving-a-runner-to-a-group %}

## 删除自托管运行器组

{% data reusables.actions.removing-a-runner-group %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
