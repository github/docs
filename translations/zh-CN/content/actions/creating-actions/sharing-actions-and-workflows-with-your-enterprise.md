---
title: 与企业共享操作和工作流
intro: 无需公开发布操作或工作流，即可与企业共享操作或工作流。
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066878'
---
## 关于内部存储库的 {% data variables.product.prodname_actions %} 访问权限

如果组织由企业帐户所有，可以通过允许 {% data variables.product.prodname_actions %} 工作流访问包含该操作或工作流的内部存储库，在企业内共享操作和工作流，而无需公开发布该操作或工作流。 

存储在内部存储库中的任何操作或工作流都可以用于同一组织或企业拥有的任何组织所拥有的其他专用或内部存储库中定义的工作流。 存储在内部存储库中的操作和工作流不能在公共存储库中使用。

{% warning %}

警告：{% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## 与企业共享操作和工作流

1. 将操作或工作流存储在内部存储库中。 有关详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)”。
1. 配置存储库以允许访问其他专用存储库和内部存储库中的工作流。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)”。

## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
- “[重新使用工作流](/actions/using-workflows/reusing-workflows)”
