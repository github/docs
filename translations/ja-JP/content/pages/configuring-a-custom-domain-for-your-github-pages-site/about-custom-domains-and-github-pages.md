---
title: カスタムドメインとGitHub Pagesについて
intro: '{% data variables.product.prodname_pages %} では、カスタム ドメインを使用する、つまりサイトの URL のルートを `octocat.github.io` などの既定値からあなたが所有するドメインに変更することができます。'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: a2c5ae3df0e2dd6248db6e03fd7c64e973b14f3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140372'
---
## サポートされているカスタムドメイン

{% data variables.product.prodname_pages %} では、サブドメインとApexドメインの 2 種類のドメインを使用できます。 サポートされていないカスタム ドメインの一覧については、「[カスタム ドメインと {% data variables.product.prodname_pages %} のトラブルシューティング](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)」を参照してください。

| サポートされているカスタムドメインの種類 | 例 |
|---|---|
| `www` サブドメイン | `www.example.com` |
| カスタム サブドメイン | `blog.example.com` |
| 　          Apex ドメイン        | `example.com` |

サイトには、頂点および `www` サブドメインのいずれか、あるいは両方の構成を設定できます。 頂点ドメインの詳細については、「[{% data variables.product.prodname_pages %} サイトに頂点ドメインを使用する](#using-an-apex-domain-for-your-github-pages-site)」を参照してください。

頂点ドメインを使用している場合でも、`www` サブドメインを使用することをお勧めします。 頂点ドメインで新しいサイトを作成すると、サイトのコンテンツを提供する際に使用するために `www` サブドメインのセキュリティ保護が自動的に試みられますが、`www` サブドメインを使うための DNS の変更はユーザーが行わなければなりません。 `www` サブドメインを設定すれば、関連する頂点ドメインのセキュリティ保護が自動的に試みられます。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。

ユーザーまたは Organization サイトのカスタム ドメインを設定すると、カスタム ドメインを設定していないアカウントが所有するプロジェクト サイトの URL で、`<user>.github.io` または `<organization>.github.io` の部分がカスタム ドメインによって置き換えられます。 たとえば、サイトのカスタム ドメインが `www.octocat.com` で、`octo-project` というリポジトリから公開されているプロジェクト サイトにカスタム ドメインをまだ設定していない場合、そのリポジトリの {% data variables.product.prodname_pages %} サイトは、`www.octocat.com/octo-project` で公開されます。

## あなたの {% data variables.product.prodname_pages %} サイトに Apex ドメインを使用する

サブドメインは、URL のうちルートドメインの前の部分です。 サブドメインは `www` として、またはサイトの個別のセクションとして `blog.example.com` のように構成できます。

サブドメインは、DNS プロバイダーを通じて `CNAME` レコードで設定されます。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)」を参照してください。

### `www` サブドメイン

サブドメインの種類として最もよく使われているのは、`www` サブドメインです。 たとえば、`www.example.com` には `www` サブドメインが含まれています。

`www` サブドメインは、最も安定している種類のカスタム ドメインです。{% data variables.product.product_name %} のサーバーの IP アドレスが変更されても、`www` サブドメインは影響を受けないからです。

### カスタム サブドメイン

カスタム サブドメインは、標準の `www` 形式を使わない種類のサブドメインです。 カスタムサブドメインは、サイトに 2 つの独自セクションを作成したい場合に最もよく使われます。 たとえば、`blog.example.com` というサイトを作成し、`www.example.com` から個別にそのセクションをカスタマイズできます。

## あなたの {% data variables.product.prodname_pages %} サイトに Apex ドメインを使用する

頂点ドメインは、`example.com` のようにサブドメインを含まないカスタム ドメインです。 Apex ドメインは、ベースドメイン、ベアドメイン、裸ドメイン、ルート Apex ドメイン、ゾーン Apex ドメインなどとも呼ばれます。

頂点ドメインは、DNS プロバイダーを通じて、`A`、`ALIAS`、または `ANAME` のレコードを使用して設定されます。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)」を参照してください。

{% data reusables.pages.www-and-apex-domain-recommendation %}詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain)」を参照してください。

## {% data variables.product.prodname_pages %}サイトのためのカスタムドメインの保護

{% data reusables.pages.secure-your-domain %}詳細については、「[{% data variables.product.prodname_pages %} のカスタム ドメインの検証](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)」および「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。

サイトが自動的に無効化される理由は、いくつかあります。

- {% data variables.product.prodname_pro %} から {% data variables.product.prodname_free_user %} へダウングレードすると、アカウント内のプライベートリポジトリから公開されている {% data variables.product.prodname_pages %} のサイトは公開されなくなります。 詳細については、[{% data variables.product.prodname_dotcom %} 課金プランのダウングレード](/articles/downgrading-your-github-billing-plan)に関するページを参照してください。
- {% data variables.product.prodname_free_user %} を利用している個人アカウントへプライベートリポジトリを移譲した場合、そのリポジトリからは {% data variables.product.prodname_pages %} の機能を利用できなくなり、公開されている {% data variables.product.prodname_pages %} は公開されなくなります。 詳細については、「[リポジトリを移譲する](/articles/transferring-a-repository)」を参照してください。

## 参考資料

- "[カスタム ドメインと {% data variables.product.prodname_pages %} のトラブルシューティング](/articles/troubleshooting-custom-domains-and-github-pages)"
