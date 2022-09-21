---
title: 個人アカウントが所有するプロジェクト ボードの権限レベル
intro: 個人アカウントが所有するプロジェクト ボードには、プロジェクト ボード所有者とコラボレーターの 2 つの権限レベルがあります。
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Project board permissions
ms.openlocfilehash: 353b9ac497abc7110437aafdf691ca48a3ff6cec
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '145165343'
---
## アクセス許可の概要

ユーザー所有のプロジェクト ボードの所有者は 1 人だけです。このアクセス許可を他の個人アカウントと共有することはできません。 オーナーに加えて、他のユーザはプロジェクトボードで共同作業をすることができます。

プロジェクトボードのコラボレーターには 3 つのレベルの権限があります。

{% data reusables.project-management.project-board-permissions %}

## ユーザー所有プロジェクトボードのオーナー権限および管理者権限

管理者アクセス権を持つプロジェクトボードのオーナーとコラボレーターは、プロジェクトボードを完全制御できます。 プロジェクトボードのコラボレーターによって許可される権限すべてに加え、管理者権限を持つプロジェクトボードのオーナーとコラボレーターは、次の操作が可能です:

- [コラボレーターを管理、表示、追加する](/articles/managing-access-to-your-user-account-s-project-boards)
- [プロジェクト ボードを {% ifversion ghae %}internal{% else %}public{% endif %} または private として構成する](/articles/changing-project-board-visibility)
- [プロジェクトボードを削除する](/articles/deleting-a-project-board/)
- [プロジェクトボードをクローズする](/articles/closing-a-project-board/)
- [クローズしたプロジェクトボードを再オープンする](/articles/reopening-a-closed-project-board)

## ユーザー所有プロジェクトボードの読み取り権限および書き込み権限

ユーザー所有のプロジェクトボードに対して読み取りアクセス権があるコラボレーターは、次の操作が可能です:

- プロジェクトボードを表示する
- プロジェクトボードをコピーする
- プロジェクトボードでカードをフィルタリングする

ユーザー所有のプロジェクトボードに対して書き込みアクセス権があるコラボレーターは、次の操作が可能です:

- プロジェクトボードを表示する
- プロジェクトボードをコピーする
- プロジェクトボードでカードをフィルタリングする
- プロジェクトボードを編集する
- リポジトリをプロジェクトボードにリンクする
- プロジェクトボードの自動化を設定する
- プロジェクトボードをコピーする
- プロジェクトボードに Issue およびプルリクエストを追加する
- プロジェクトボードにノートを追加する
- プロジェクトボードで進捗を追跡する
- プロジェクトボードでカードをアーカイブする

## プロジェクトボードの可視性

プロジェクト ボードの表示を private から {% ifversion ghae %}internal{% else %}public{% endif %} に変更したり、元に戻したりできます。 デフォルトでは、ユーザー所有のプロジェクトボードはプライベートです。 詳細については、「[プロジェクト ボードの可視性の変更](/articles/changing-project-board-visibility)」を参照してください。

## 参考資料

  - 「[ユーザー アカウントのプロジェクト ボードに対するアクセスを管理する](/articles/managing-access-to-your-user-account-s-project-boards)」
