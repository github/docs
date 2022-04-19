---
title: ユーザー所有のプロジェクトボードの権限レベル
intro: 'A project board owned by a personal account has two permission levels: the project board owner and collaborators.'
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Permission user project boards
---

## 権限の概要

There is only one owner of a user-owned project board; this permission cannot be shared with another personal account. オーナーに加えて、他のユーザはプロジェクトボードで共同作業をすることができます。

プロジェクトボードのコラボレーターには 3 つのレベルの権限があります。

{% data reusables.project-management.project-board-permissions %}

## ユーザー所有プロジェクトボードのオーナー権限および管理者権限

管理者アクセス権を持つプロジェクトボードのオーナーとコラボレーターは、プロジェクトボードを完全制御できます。 プロジェクトボードのコラボレーターによって許可される権限すべてに加え、管理者権限を持つプロジェクトボードのオーナーとコラボレーターは、次の操作が可能です:

- [コラボレーターを管理、表示、追加する](/articles/managing-access-to-your-user-account-s-project-boards)
- [プロジェクトボードを、{% ifversion ghae %}内部{% else %}パブリック{% endif %}またはプライベートに設定する](/articles/changing-project-board-visibility)
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

プロジェクトボードの表示をプライベートから{% ifversion ghae %}内部{% else %}パブリック{% endif %}に変更したり、元に戻したりすることができます。 デフォルトでは、ユーザー所有のプロジェクトボードはプライベートです。 詳細は「[プロジェクトボードの可視性を変更する](/articles/changing-project-board-visibility)」を参照してください。

## 参考リンク

  - "[Managing access to your personal account's project boards](/articles/managing-access-to-your-user-account-s-project-boards)"
