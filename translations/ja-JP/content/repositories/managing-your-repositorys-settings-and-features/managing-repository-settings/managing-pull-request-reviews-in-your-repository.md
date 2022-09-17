---
title: リポジトリでのプルリクエストのレビューの管理
intro: パブリック リポジトリで pull request の承認や変更のリクエストを行うことができるユーザーを制限できます。
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 81c58a856e7dddc316a41413d4c7787bf463cf7c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132132'
---
## コードレビューの制限について

デフォルトでは、パブリックなリポジトリにおいてはどのユーザもPull Requestの承認や変更リクエストをするレビューをサブミットできます。

パブリック リポジトリのプルリクエストへの変更を承認または要求するレビューをサブミットできるユーザーを制限できます。 コード レビューの制限を有効化すると、誰でもパブリック リポジトリでプルリクエストにコメントすることができますが、プルリクエストの承認や変更リクエストができるのは読み取りアクセス以上を持っている人に限られます。

Organization に対してコード レビューの制限を有効にすることもできます。 Organization に対する制限を有効にすると、その Organization が所有する個々のリポジトリに対する制限が上書きされます。 詳細については、「[Organization での Pull Request のレビューの管理](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)」を参照してください

## コードレビューの制限の有効化

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. **[アクセス]** で **[モデレーション オプション]** をクリックします。
![モデレーション オプション リポジトリ設定](/assets/images/help/repository/access-settings-repositories.png)
1. **[モデレーション オプション]** で、 **[コード レビューの制限]** をクリックします。
![コード レビューによってリポジトリが制限されます](/assets/images/help/repository/code-review-limits-repositories.png)
1. **[読み取り以上のアクセス権を明示的に付与されたユーザーに制限する]** を選択または選択解除します。
![リポジトリでレビューを制限する](/assets/images/help/repository/limit-reviews-in-repository.png)
