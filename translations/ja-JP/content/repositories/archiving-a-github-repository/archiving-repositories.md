---
title: リポジトリのアーカイブ
intro: リポジトリをアーカイブし、すべてのユーザに対してリードオンリーとし、アクティブにメンテナンスされなくなったことを示すことができます。 アーカイブされたリポジトリのアーカイブを解除することもできます。
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a9d5b33b94e6067bb4decfa8f47da8aa25860da4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132475'
---
## リポジトリのアーカイブについて

{% ifversion fpt or ghec %} {% note %}

**注:** 過去のリポジトリ単位の支払いプランを利用している場合、アーカイブされたリポジトリについても支払いが続くことになります。 アーカイブされたリポジトリに対する支払いをしたくない場合には、新しい製品にアップグレードしなければなりません。 詳細については、「[{% data variables.product.prodname_dotcom %} の製品](/articles/github-s-products)」を参照してください。

{% endnote %} {% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %} {% note %}

**注:** {% data variables.product.prodname_GH_advanced_security %} を使っている顧客は、アーカイブされたリポジトリで {% data variables.product.prodname_secret_scanning %} を有効にできます。 詳しくは、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories)」をご覧ください。

{% endnote %} {% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

リポジトリがアーカイブされると、コラボレータや Team の追加や削除ができなくなります。 リポジトリへのアクセス権を持つコントリビューターは、プロジェクトをフォークするか Star を付けることだけができます。

リポジトリがアーカイブされると、その issue、プルリクエスト、コード、ラベル、マイルストーン、プロジェクト、wiki、リリース、コミット、タグ、ブランチ、リアクション、コードスキャンアラート、コメント、アクセス許可が読み取り専用になります。 アーカイブされたリポジトリに変更を加えるには、まずそのリポジトリのアーカイブ解除をしなければなりません。

アーカイブされたリポジトリに対して検索ができます。 詳細については、「[リポジトリを検索する](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)」を参照してください。 詳しい情報については<a href="/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived">リポジトリの検索</a>を参照してください。 詳細については、「[Searching issues and pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)」 (問題とプルリクエストの検索) を参照してください。  

## リポジトリをアーカイブへ保管

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [危険ゾーン] の **[このリポジトリのアーカイブ]** または **[このリポジトリのアーカイブ解除]** をクリックします。
   ![[このリポジトリのアーカイブ]](/assets/images/help/repository/archive-repository.png) ボタン
4. 警告文を確認
5. アーカイブあるいはアーカイブを解除したいリポジトリの名前を入力してください。
  ![リポジトリのアーカイブの警告](/assets/images/help/repository/archive-repository-warnings.png)
6. **[影響を理解したうえで、このリポジトリをアーカイブします]** をクリックします。
