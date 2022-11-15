---
title: Organizationのカスタムリポジトリロールの管理
intro: Organization のカスタム リポジトリ ロールを作成、編集、または削除できます。
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/02/2022
ms.locfileid: '148131004'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## カスタムリポジトリロールについて

{% data reusables.organizations.about-custom-repo-roles %} 詳しくは、「[カスタム リポジトリ ロールについて](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)」を参照してください。

## リポジトリロールの作成

新しいリポジトリロールを作成するには、継承されたロールに権限を追加し、カスタムロールに名前を付けます

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. **[ロールの作成]** をクリックします。
  ![[ロールの作成] ボタンのスクリーンショット](/assets/images/help/organizations/repository-role-create-role.png)
4. "Name（名前）"の下で、リポジトリロールの名前を入力してください。
  ![リポジトリ ロールの名前の入力フィールド](/assets/images/help/organizations/repository-role-name.png)
5. "Description（説明）"の下で、リポジトリロールの説明を入力してください。
  ![リポジトリ ロールの説明の入力フィールド](/assets/images/help/organizations/repository-role-description.png)
6. "Choose a role to inherit（継承するロールの選択）"の下で、継承したいロールを選択してください。
  ![リポジトリ ロールの基本ロール オプションの選択](/assets/images/help/organizations/repository-role-base-role-option.png)
7. "Add Permissions（権限の追加）"の下で、ドロップダウンメニューを使ってカスタムロールに含めたい権限を選択してください。
  ![リポジトリ ロールのドロップダウンからの権限レベルの選択](/assets/images/help/organizations/repository-role-drop-down.png)
7. **[ロールの作成]** をクリックします。
  ![リポジトリ ロールの作成の確認](/assets/images/help/organizations/repository-role-creation-confirm.png)

## リポジトリロールの編集

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 編集するロールの右にある [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックしてから **[編集]** をクリックします。
  ![リポジトリ ロールのドロップダウン メニューの編集オプション](/assets/images/help/organizations/repository-role-edit-setting.png)
4. 編集してから、 **[ロールの更新]** をクリックします。
  ![フィールドを編集して、リポジトリ ロールを更新する](/assets/images/help/organizations/repository-role-update.png)

## リポジトリロールの削除

既存のリポジトリロールを削除すると、そのカスタムロールを持つ保留中の招待、Team、ユーザはすべてOrganizationの基本権限に割り当てなおされます。

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. 削除するロールの右にある [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックしてから、 **[削除]** をクリックします。
  ![リポジトリ ロールのドロップダウン メニューの編集オプション](/assets/images/help/organizations/repository-role-delete-setting.png)
4. 削除するロールに対する変更をレビューしてから、 **[ロールの削除]** をクリックします。
  ![リポジトリ ロールの削除を確認する](/assets/images/help/organizations/repository-role-delete-confirm.png)
