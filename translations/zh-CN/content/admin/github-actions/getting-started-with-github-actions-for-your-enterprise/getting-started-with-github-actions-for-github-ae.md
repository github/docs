---
title: GitHub Actions for GitHub AE 使用入门
shortTitle: Get started
intro: '了解在 {% data variables.product.prodname_ghe_managed %} 上配置 {% data variables.product.prodname_actions %}。'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145099068'
---
## 关于 {% data variables.product.prodname_ghe_managed %} 上的 {% data variables.product.prodname_actions %}

默认情况下，{% data variables.product.prodname_actions %} 为 {% data variables.product.product_name %} 启用。 若要开始在企业内使用 {% data variables.product.prodname_actions %} ，需要管理 {% data variables.product.prodname_actions %} 的访问权限，并添加运行器以运行工作流程。

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## 管理企业中 {% data variables.product.prodname_actions %} 的访问权限

您可以使用策略来管理 {% data variables.product.prodname_actions %} 的访问。 有关详细信息，请参阅“[为企业强制实施 GitHub Actions 策略](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”。

## 添加运行器

您必须配置和托管自己的计算机，才能在 {% data variables.product.product_name %} 上运行企业的作业。 {% data reusables.actions.about-self-hosted-runners %} 有关详细信息，请参阅“[开始为企业使用自承载运行器](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)”和“[托管自己的运行器](/actions/hosting-your-own-runners)”。

{% data reusables.actions.general-security-hardening %}
