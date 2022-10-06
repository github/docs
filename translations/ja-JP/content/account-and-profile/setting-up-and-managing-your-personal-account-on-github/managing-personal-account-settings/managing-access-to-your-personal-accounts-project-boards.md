---
title: 個人アカウントのプロジェクト ボードに対するアクセスを管理する
intro: プロジェクトボードのオーナーは、コラボレーターを追加または削除して、そのプロジェクトボードに対する権限をカスタマイズすることができます。
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 4cbf968cee79ac8e4aafbc5eea8220949cf80a30
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164936'
---
コラボレーターは、あなたが所有しているプロジェクトボードにアクセスを許可されているユーザです。 コラボレーターの権限は、デフォルトでは読み取りアクセスになります。 詳細については、「[ユーザー所有のプロジェクト ボードの権限レベル](/articles/permission-levels-for-user-owned-project-boards)」を参照してください。

## ユーザ所有のプロジェクトボードにコラボレーターを招待する

1. アプリケーションを追加したいプロジェクトボードに移動します。
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. [Search by username, full name or email address] で、コラボレーターの名前、ユーザ名、または {% data variables.product.prodname_dotcom %} メールを入力します。
   ![検索フィールドに Octocat のユーザー名が入力されたコラボレーター セクション](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. 新しいコラボレーターは、デフォルトで読み取り権限を持ちます。 オプションで、新しいコラボレータの名前の隣にあるドロップダウン メニューを使って、権限レベルを変更することもできます。
  ![[権限] ドロップダウン メニューが選択された [コラボレーター] セクション](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## ユーザ所有のプロジェクトボードからコラボレーターを削除する

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
