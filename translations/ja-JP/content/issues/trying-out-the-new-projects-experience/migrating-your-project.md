---
title: プロジェクトを [プロジェクト (ベータ)] に移行する
intro: 古いプロジェクト エクスペリエンスから [プロジェクト (ベータ)] にプロジェクトを移行できます。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 9361f3f28d3d365ecbb6053e908644cc8f34f1d0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "147080221"
---
{% note %}

**注:**

- [プロジェクト (ベータ)] は現在パブリック ベータ版であり、変更される可能性があります。
- 移行するプロジェクトに 1,200 を超える項目が含まれている場合は、未解決の issue が優先され、その後に未解決の pull request、メモが続きます。 残りの領域は、解決された issue、マージされた pull request、および解決された pull request に使用されます。 この制限により移行できない項目は、アーカイブに移動されます。 アーカイブの上限である 10,000 項目に達した場合、追加の項目は移行されません。
- ノート カードは下書きの issue に変換され、内容は下書きの issue の本文に保存されます。 情報が見つからないように見える場合は、非表示フィールドを表示します。 詳しくは、「[フィールドの表示と非表示](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields)」を参照してください。
- 自動化は移行されません。
- トリアージ、アーカイブ、アクティビティは移行されません。
- 移行後、新しく移行されたプロジェクトと古いプロジェクトは同期されません。

{% endnote %}

## <a name="about-project-migration"></a>プロジェクトの移行について

プロジェクト ボードをすべての新しいプロジェクト (ベータ) エクスペリエンスに移行し、テーブル、複数のビュー、新しい自動化オプション、強力なフィールドの種類を試すことができます。 詳細については、「[プロジェクト (ベータ) について](/issues/trying-out-the-new-projects-experience/about-projects)」を参照してください。

## <a name="migrating-an-organization-project-board"></a>組織のプロジェクト ボードの移行

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. 左側の **[プロジェクト (クラシック)]** をクリックします。
  ![[プロジェクト (クラシック)] メニュー オプションを示すスクリーンショット](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-user-project-board"></a>ユーザー プロジェクト ボードの移行

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. プロファイル ページの上部のメイン ナビゲーションにある {% octicon "project" aria-label="The project board icon" %} **[プロジェクト]** をクリックします。
![[プロジェクト] タブ](/assets/images/help/projects/user-projects-tab.png)
1. プロジェクトの一覧の上にある **[プロジェクト (クラシック)]** をクリックします。
  ![[プロジェクト (クラシック)] メニュー オプションを示すスクリーンショット](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-repository-project-board"></a>リポジトリのプロジェクトボードの移行

{% note %}

**メモ:** [プロジェクト (ベータ)] では、リポジトリ レベルのプロジェクトはサポートされていません。 リポジトリ プロジェクト ボードを移行すると、リポジトリ プロジェクトを所有する組織または個人アカウントに移行され、移行されたプロジェクトは元のリポジトリにピン留めされます。

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下にある {% octicon "project" aria-label="The project board icon" %} **[プロジェクト]** をクリックします。
![[プロジェクト] タブ](/assets/images/help/projects/repo-tabs-projects.png)
1. **[プロジェクト (クラシック)]** をクリックします。
  ![[プロジェクト (クラシック)] メニュー オプションを示すスクリーンショット](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
