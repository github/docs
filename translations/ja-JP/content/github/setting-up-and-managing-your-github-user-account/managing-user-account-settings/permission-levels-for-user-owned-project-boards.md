---
title: ユーザー所有のプロジェクトボードの権限レベル
intro: ユーザーアカウントが所有するプロジェクトボードには、プロジェクトボードオーナーとコラボレーターの 2 つの権限レベルがあります。
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
---

### 権限の概要

ユーザー所有のプロジェクトボードの所有者は 1 人だけです。この権限を他のユーザアカウントと共有することはできません。 オーナーに加えて、他のユーザはプロジェクトボードで共同作業をすることができます。

プロジェクトボードのコラボレーターには 3 つのレベルの権限があります。

{% data reusables.project-management.project-board-permissions %}

### ユーザー所有プロジェクトボードのオーナー権限および管理者権限

管理者アクセス権を持つプロジェクトボードのオーナーとコラボレーターは、プロジェクトボードを完全制御できます。 プロジェクトボードのコラボレーターによって許可される権限すべてに加え、管理者権限を持つプロジェクトボードのオーナーとコラボレーターは、次の操作が可能です:

- [コラボレーターを管理、表示、追加する](/articles/managing-access-to-your-user-account-s-project-boards)
- [プロジェクトボードを、{% if currentVersion == "github-ae@latest" %}内部{% else %}パブリック{% endif %}またはプライベートに設定する](/articles/changing-project-board-visibility)
- [プロジェクトボードを削除する](/articles/deleting-a-project-board/)
- [プロジェクトボードをクローズする](/articles/closing-a-project-board/)
- [クローズしたプロジェクトボードを再オープンする](/articles/reopening-a-closed-project-board)

### ユーザー所有プロジェクトボードの読み取り権限および書き込み権限

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

### プロジェクトボードの可視性

プロジェクトボードの表示をプライベートから{% if currentVersion == "github-ae@latest" %}内部{% else %}パブリック{% endif %}に変更したり、元に戻したりすることができます。 デフォルトでは、ユーザー所有のプロジェクトボードはプライベートです。 詳細は「[プロジェクトボードの可視性を変更する](/articles/changing-project-board-visibility)」を参照してください。

### 参考リンク

  - [ユーザ アカウントのプロジェクトボードに対するアクセスを管理する](/articles/managing-access-to-your-user-account-s-project-boards)
