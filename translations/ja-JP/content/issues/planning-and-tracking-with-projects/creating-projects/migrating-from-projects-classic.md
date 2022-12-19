---
title: '{% data variables.product.prodname_projects_v1 %} からの移行'
intro: '{% data variables.projects.projects_v1_board %} を新しい {% data variables.product.prodname_projects_v2 %} エクスペリエンスに移行できます。'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e6db4fd8c6587f413ee0e6832dbae93bbf281573
ms.sourcegitcommit: 9bf175b190674416ad4e11b5c567409f74c00ad2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/23/2022
ms.locfileid: '148181222'
---
{% note %}

**注:**

- 移行するプロジェクトに {% data variables.projects.item_limit %} を超える項目が含まれている場合は、未解決の issue が優先され、その後に未解決の pull request、メモが続きます。 残りの領域は、解決された issue、マージされた pull request、および解決された pull request に使用されます。 この制限により移行できない項目は、アーカイブに移動されます。 アーカイブの上限である {% data variables.projects.archived_item_limit %} 項目に達した場合、追加の項目は移行されません。
- ノート カードは下書きの issue に変換され、内容は下書きの issue の本文に保存されます。 情報が見つからないように見える場合は、非表示フィールドを表示します。 詳しくは、「[フィールドの表示と非表示](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields)」を参照してください。
- 自動化は移行されません。
- トリアージ、アーカイブ、アクティビティは移行されません。
- 移行後、新しく移行されたプロジェクトと古いプロジェクトは同期されません。

{% endnote %}

## プロジェクトの移行について

プロジェクト ボードを新しい {% data variables.product.prodname_projects_v2 %} エクスペリエンスに移行し、テーブル、複数のビュー、新しい自動化オプション、強力なフィールドの種類を試すことができます。 詳しくは、「[プロジェクトについて](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」を参照してください。

## 組織のプロジェクト ボードの移行

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. 左側の **[プロジェクト (クラシック)]** をクリックします。
  ![[プロジェクト (クラシック)] メニュー オプションを示すスクリーンショット](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## ユーザー プロジェクト ボードの移行

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. プロファイル ページの上部のメイン ナビゲーションにある {% octicon "table" aria-label="The project board icon" %} **[プロジェクト]** をクリックします。
  ![[プロジェクト] タブを示すスクリーンショット](/assets/images/help/projects-v2/tab-projects.png)
1. プロジェクトの一覧の上にある **[プロジェクト (クラシック)]** をクリックします。
  ![[プロジェクト (クラシック)] メニュー オプションを示すスクリーンショット](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## リポジトリのプロジェクトボードの移行

{% note %}

**注:** {% data variables.projects.projects_v2_caps %} では、リポジトリ レベルのプロジェクトはサポートされていません。 リポジトリ プロジェクト ボードを移行すると、リポジトリ プロジェクトを所有する組織または個人アカウントに移行され、移行されたプロジェクトは元のリポジトリにピン留めされます。

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下にある {% octicon "table" aria-label="The project board icon" %} **[プロジェクト]** をクリックします。
![[プロジェクト] タブ](/assets/images/help/projects-v2/repo-tabs-projects.png)
1. **[プロジェクト (クラシック)]** をクリックします。
  ![[プロジェクト (クラシック)] メニュー オプションを示すスクリーンショット](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
