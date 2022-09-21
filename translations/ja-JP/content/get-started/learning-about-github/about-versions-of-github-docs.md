---
title: GitHub Docs のバージョンについて
intro: 現在お使いの {% data variables.product.company_short %} 製品を反映したドキュメントを読むことができます。
versions: '*'
shortTitle: Docs versions
ms.openlocfilehash: 656cb53b79409329299d63e9f77b14a56b809f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146681296"
---
## {% data variables.product.prodname_docs %} のバージョンについて

{% data variables.product.company_short %} には、コードに対する格納と共同作業のためのさまざまな製品が用意されています。 使用する製品によって、使用可能な機能が決まります。 詳細については、「[{% data variables.product.company_short %} の製品](/get-started/learning-about-github/githubs-products)」を参照してください。

この Web サイト {% data variables.product.prodname_docs %} では、{% data variables.product.company_short %} のすべての製品に関するドキュメントが提供されています。 読んでいるコンテンツが複数の製品に適用される場合は、現在使用している製品を選択することで、関連するドキュメントのバージョンを選択できます。

{% data variables.product.prodname_docs %} のページの上部にあるドロップダウン メニューを選択し、製品をクリックします。 完全なナビゲーション バーを表示するのにブラウザー ウィンドウの幅が十分でない場合は、最初に {% octicon "three-bars" aria-label="The three bars icon" %} をクリックする必要があります。

![表示する {% data variables.product.prodname_docs %} のバージョンを選択するためのドロップダウン メニューのスクリーンショット](/assets/images/help/docs/version-picker.png)

{% note %}

**注**: バージョンの変更を今すぐ試すことができます。 {% ifversion ghes %}{% else %}{% endif %} {% ifversion fpt %}Free、Pro、Team{% else %}{% data variables.product.product_name %}{% endif %} バージョンのこの記事を表示しています。

{% endnote %}

## 使用する {% data variables.product.company_short %} 製品の決定

現在使用している {% data variables.product.company_short %} 製品を確認するには、ブラウザーのアドレス バーの URL と、使用している {% data variables.product.prodname_dotcom %} Web サイトの見出しを確認します。

複数の {% data variables.product.company_short %} 製品を使用できます。 たとえば、{% data variables.product.prodname_dotcom_the_website %} のオープンソースに投稿し、雇用主の {% data variables.product.prodname_ghe_server %} インスタンスのコードで共同作業を行うことができます。 現在解決しようとしている問題に応じて、同じ記事のさまざまなバージョンを異なる時に表示する必要がある場合があります。

### {% data variables.product.prodname_dotcom_the_website %} プランまたは {% data variables.product.prodname_ghe_cloud %}

https://github.com で {% data variables.product.prodname_dotcom %} にアクセスする場合は、Free、Pro、または Team プランの機能を使用しているか、{% data variables.product.prodname_ghe_cloud %} を使用しています。

ワイド ブラウザー ウィンドウには、ヘッダーの左側にある {% data variables.product.company_short %} ロゴの直後に続くテキストはありません。

![ブラウザーのアドレス バーと {% data variables.product.prodname_dotcom_the_website %} ヘッダーのスクリーンショット](/assets/images/help/docs/header-dotcom.png)

{% data variables.product.prodname_dotcom_the_website %} では、各アカウントに独自のプランがあります。 各個人アカウントには、特定の機能へのアクセスを提供するプランが関連付けられています。また、各組織には異なる関連プランがあります。 個人アカウントが {% data variables.product.prodname_dotcom_the_website %} の組織のメンバーである場合、その組織が所有するリソースを使用する場合と、個人アカウントが所有するリソースを使用する場合にアクセスできる機能が異なる場合があります。 詳細については、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

組織が {% data variables.product.prodname_ghe_cloud %} を使用しているかどうかがわからない場合は、組織の所有者に問い合わせてください。 詳細については、「[組織内のユーザーのロールを表示する](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)」を参照してください。

### {% data variables.product.prodname_ghe_server %}

https://github.com 、`https://*.githubenterprise.com` 、`https://*.github.us` 、`https://*.ghe.com` 以外の URL で {% data variables.product.prodname_dotcom %} にアクセスする場合は、{% data variables.product.prodname_ghe_server %} を使用しています。 たとえば、`https://github.YOUR-COMPANY-NAME.com` で {% data variables.product.prodname_ghe_server %} にアクセスできます。 管理者は、"{% data variables.product.company_short %}" という単語を含まない URL を選択できます。

ワイド ブラウザー ウィンドウには、ヘッダーの左側にある {% data variables.product.company_short %} ロゴの直後に続く "Enterprise" という単語はありません。

![ブラウザーのアドレス バーと {% data variables.product.prodname_ghe_server %} ヘッダーのスクリーンショット](/assets/images/help/docs/header-ghes.png)

お使いの {% data variables.product.prodname_ghe_server %} のバージョンは、任意のページのフッターで確認できます。

![バージョンが強調表示されている {% data variables.product.prodname_ghe_server %} のフッターのスクリーンショット](/assets/images/help/docs/ghes-version-in-footer.png)

### {% data variables.product.prodname_ghe_managed %}

`https://*.githubenterprise.com`、`https://*.github.us` または `https://*.ghe.com` で {% data variables.product.prodname_dotcom %} にアクセスする場合、{% data variables.product.prodname_ghe_managed %} を使用しています。

ワイド ブラウザー ウィンドウでは、"{% data variables.product.prodname_ghe_managed %}" という単語は、ヘッダーの {% data variables.product.company_short %} ロゴのすぐ後に続きます。

![ブラウザーのアドレス バーと {% data variables.product.prodname_ghe_managed %} ヘッダーのスクリーンショット](/assets/images/help/docs/header-ghae.png)
