---
title: Organization 内のリポジトリのためのデフォルトラベルを管理する
intro: Organization の新しいリポジトリすべてに含まれるラベルをカスタマイズできます。
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
ms.openlocfilehash: a2591c84d3844bfdadc3c7321d7ce8eec2adf293
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125726'
---
Organizationのオーナーは、Organization のリポジトリのデフォルトラベルを管理できます。

デフォルトラベルは、Organization の新しいリポジトリすべてに含まれますが、そのリポジトリへの書き込みアクセスがある人は誰でも、そのリポジトリのラベルを後で編集または削除できます。 デフォルトラベルを追加、編集、削除しても、既存リポジトリのラベルは追加、編集、削除されません。

## デフォルトラベルの作成

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

5. [リポジトリ ラベル] の **[新しいラベル]** をクリックします。
  ![[新しいラベル] ボタン](/assets/images/help/organizations/new-label-button.png) {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## デフォルトラベルの編集

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## デフォルトラベルの削除

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %} {% data reusables.project-management.confirm-label-deletion %}

## 参考資料

- 「[ラベルについて](/articles/about-labels)」
