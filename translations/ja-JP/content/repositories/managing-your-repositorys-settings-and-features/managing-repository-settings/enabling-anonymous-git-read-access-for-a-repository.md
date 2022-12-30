---
title: リポジトリに対する匿名 Git 読み取りアクセスを有効化する
intro: リポジトリの管理者として、特定の要件を満たす公開リポジトリの匿名 Git 読み取りアクセスを有効または無効にできます。
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132157'
---
次の場合に、リポジトリの管理者は、特定のリポジトリに対する匿名 Git 読み取りアクセスの設定を変更できます。
- サイトの管理者がプライベートモードと匿名 Git 読み取りアクセスを有効化している。
- リポジトリは Enterprise 上でパブリックであり、フォークではない。
- サイト管理者がリポジトリで匿名 Git 読み取りアクセスを無効化していない。

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. "匿名 Git 読み取りアクセスを有効にする" の横にある **[有効にする]** をクリックします。
!["匿名 Git 読み取りアクセス" の下の "有効" ボタン](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. 変更を確認します。 リポジトリの名前を入力し、 **[わかりました、匿名 Git 読み取りアクセスを有効にします]** をクリックして確定します。
