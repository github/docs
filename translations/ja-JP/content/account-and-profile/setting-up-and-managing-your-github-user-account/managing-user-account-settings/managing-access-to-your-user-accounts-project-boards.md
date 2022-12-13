---
title: ユーザ アカウントのプロジェクトボードに対するアクセスを管理する
intro: As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.
redirect_from:
- /articles/managing-project-boards-in-your-repository-or-organization
- /articles/managing-access-to-your-user-account-s-project-boards
- /articles/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 5a5cf08169fec04a896b05b7934c80cfe9f2eded
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088888"
---
コラボレーターは、あなたが所有しているプロジェクトボードにアクセスを許可されているユーザです。 コラボレーターの権限は、デフォルトでは読み取りアクセスになります。 詳細については、「[ユーザー所有のプロジェクト ボードの権限レベル](/articles/permission-levels-for-user-owned-project-boards)」を参照してください。

## <a name="inviting-collaborators-to-a-user-owned-project-board"></a>ユーザ所有のプロジェクトボードにコラボレーターを招待する

1. アプリケーションを追加したいプロジェクトボードに移動します。
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. [Search by username, full name or email address] で、コラボレーターの名前、ユーザ名、または {% data variables.product.prodname_dotcom %} メールを入力します。
   ![検索フィールドに Octocat のユーザー名が入力されたコラボレーター セクション](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. 新しいコラボレーターは、デフォルトで読み取り権限を持ちます。 オプションで、新しいコラボレータの名前の隣にあるドロップダウン メニューを使って、権限レベルを変更することもできます。
  ![[権限] ドロップダウン メニューが選択された [コラボレーター] セクション](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## <a name="removing-a-collaborator-from-a-user-owned-project-board"></a>ユーザ所有のプロジェクトボードからコラボレーターを削除する

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
