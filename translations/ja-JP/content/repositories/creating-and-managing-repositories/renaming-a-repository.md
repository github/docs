---
title: リポジトリの名前を変更する
intro: Organization のオーナーであるかリポジトリの管理者権限があれば、リポジトリの名前を変更することができます。
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: d0067d96dce2f2cf9fe8bb2dd519668780d861ff
ms.sourcegitcommit: bd8b3e152f17d90acf222a0d50ba9595184c1f5f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111674'
---
リポジトリの名前を変更すると、プロジェクトサイトの URL を除くすべての既存の情報は、下記を含む新しい名前に自動的にリダイレクトされます。

* issue
* Wiki
* Star
* フォロワー

プロジェクト サイトの詳細については、「[{% data variables.product.prodname_pages %} について](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

Web トラフィックのリダイレクトに加えて、以前の場所を対象とするすべての `git clone`、`git fetch`、`git push` 操作は、新しい場所で行われたかのように機能し続けます。 ただし、混乱を低減するため、既存のローカルクローンが新しいリポジトリ URL を指すよう更新することを強く推奨します。 これはコマンド ラインで `git remote` を使うことで行えます。

```shell
$ git remote set-url origin NEW_URL
```

詳細については、「[リモート リポジトリを管理する](/github/getting-started-with-github/managing-remote-repositories)」を参照してください。

{% ifversion fpt or ghec %}

{% data variables.product.prodname_pages %}サイトを持つリポジトリの名前を変更する場合は、サイトにカスタムドメインを使用することをお勧めします。 これにより、リポジトリの名前を変更してもサイトの URL は影響を受けません。 詳細については、「[カスタムドメインと {% data variables.product.prodname_pages %} について](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)」を参照してください。 

{% endif %}

{% note %}

**注:** {% data variables.product.prodname_dotcom %} では、名前が変更されたリポジトリでホストされているアクションに呼び出しがリダイレクトされることはありません。 そのアクションが使われるワークフローはすべて、エラー `repository not found` で失敗します。 代わりに、新しいリポジトリとアクションを新しい名前で作り、古いリポジトリをアーカイブします。 詳細については、「[リポジトリのアーカイブ](/repositories/archiving-a-github-repository/archiving-repositories)」を参照してください。

{% endnote %}

{% warning %}

**警告**: 将来的にアカウントで新しいリポジトリを作成する場合、名前変更したリポジトリの元の名前を再利用しないでください。 再利用した場合、名前変更したリポジトリへのリダイレクトは機能しなくなります。

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. **[リポジトリ名]** の下で、リポジトリの新しい名前を入力します。
   ![リポジトリの名前の変更](/assets/images/help/repository/repository-name-change.png)
4. **[名前変更]** をクリックします。 以上で終わりです。
