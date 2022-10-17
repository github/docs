---
title: アクションとワークフローを企業と共有する
intro: アクションまたはワークフローを公開せずに、企業とアクションまたはワークフローを共有できます。
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068783'
---
## 内部リポジトリへの {% data variables.product.prodname_actions %} アクセスについて

組織が企業アカウントによって所有されている場合、アクションまたはワークフローが含まれるリポジトリへのアクセスを {% data variables.product.prodname_actions %} ワークフローに許可することで、アクションまたはワークフローを公開することなく、企業内でアクションまたはワークフローを共有できます。 

内部リポジトリに格納されているアクションまたはワークフローは、同じ組織に所有されているか、企業によって所有されているあらゆる組織によって所有されている他のプライベートな内部リポジトリで定義されているワークフローで使用できます。 内部リポジトリに格納されているアクションまたはワークフローは、パブリック リポジトリで使用できません。

{% warning %}

**警告**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## アクションとワークフローを企業と共有する

1. アクションまたはワークフローを内部リポジトリに格納します。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)に関する説明を参照してください。
1. 他のプライベートな内部リポジトリにあるワークフローにアクセスできるよう、リポジトリを構成します。 詳細については、「[リポジトリの {% data variables.product.prodname_actions %} 設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)」を参照してください。

## 参考資料

- "[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)"
- "[ワークフローの再利用](/actions/using-workflows/reusing-workflows)"
