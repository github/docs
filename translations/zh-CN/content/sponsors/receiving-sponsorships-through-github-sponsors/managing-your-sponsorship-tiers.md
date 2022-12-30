---
title: 管理赞助等级
intro: 您可以添加新的赞助等级，也可以编辑或撤销现有等级。
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Manage payment tiers
ms.openlocfilehash: 4ff2d3731483075afc23da403e62f1682c6dd6c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130040'
---
## 关于赞助等级

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## 添加等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. 如果您是第一次设置等级，我们建议您查看建议的等级示例，看看其他一些开源贡献者是如何设置 {% data variables.product.prodname_sponsors %} 的。 决定是否要从一些建议的草稿层开始，您可以在等级编辑器中自定义这些等级。
   - 要使用建议的等级，请选择你想要包含在草稿等级或等级中的奖励。 然后单击“继续前往层编辑器”。
   - 要创建层而不使用任何草稿建议，请单击“跳过此步骤”。
   ![“跳过此步骤”选项和“继续前往层编辑器”按钮](/assets/images/help/sponsors/tier-editor-button.png)
1. （可选）要编辑草稿层，找到草稿层并单击“编辑”。
  ![草稿层旁的编辑按钮](/assets/images/help/sponsors/draft-tier-edit.png) {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %}

## 编辑或撤销等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %} {% note %}

  注意：若要查看层概念的说明，请向下滚动。

  {% endnote %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.tier-update %} {% data reusables.sponsors.retire-tier %}

## 将仓库添加到赞助等级

{% data reusables.sponsors.sponsors-only-repos %}

### 关于将存储库添加到赞助等级

要将仓库添加到等级，仓库必须是私有的，并且由组织拥有，同时您必须具有对仓库的管理员访问权限。

将仓库添加到等级时，{% data variables.product.company_short %} 将自动向新赞助商发送仓库邀请，并在取消赞助时删除访问权限。 

只有个人帐户（而非组织）才能被邀请到与赞助等级关联的私有仓库。

您还可以在仓库中手动添加或删除协作者，{% data variables.product.company_short %} 不会在同步中覆盖这些协作者。 

### 关于添加到赞助等级的仓库的转移

如果将已添加到赞助等级的存储库转移，则有权通过该等级访问仓库的发起人可能会受到影响。

- 如果赞助的配置文件是针对某个组织的，并且仓库被转移到其他组织，则将转移当前的赞助商，但不会添加新的赞助商。 仓库的新所有者可以删除现有赞助商。
- 如果赞助的个人资料用于个人帐户，仓库转移到组织，并且个人帐户具有对新仓库的管理员访问权限，则将转移现有赞助商，并且将继续将新赞助商添加到仓库。
- 如果仓库转移到个人帐户，则所有赞助商都将被删除，并且不会将新的赞助商添加到仓库中。

### 将仓库添加到赞助等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %}
1. 选择“授权赞助者访问专用存储库”。

   ![用于授予发起人访问私有仓库的复选框的屏幕截图](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. 选择下拉菜单并单击您想要添加的仓库。

   ![下拉菜单的屏幕截图，用于选择要授予赞助商访问权限的存储库](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## 启用具有自定义金额的等级

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.enable-custom-amounts %}

## 禁用具有自定义金额的等级

可以通过在“赞助者层”选项卡中取消选择“启用自定义金额”选项来禁用具有自定义金额的层 。
