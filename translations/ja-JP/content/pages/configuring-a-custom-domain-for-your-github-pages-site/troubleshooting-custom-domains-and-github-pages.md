---
title: カスタムドメインとGitHub Pages のトラブルシューティング
intro: '{% data variables.product.prodname_pages %} サイトのカスタムドメインまたは HTTPS について、よくあるエラーを確認して Issue を解決することができます。'
redirect_from:
  - /articles/my-custom-domain-isn-t-working
  - /articles/custom-domain-isn-t-working
  - /articles/troubleshooting-custom-domains
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot a custom domain
ms.openlocfilehash: ce6251dbe96d531462c5c664dc9000f138059889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147428389'
---
## _CNAME_ エラー

{% ifversion pages-custom-workflow %}カスタムの {% data variables.product.prodname_actions %} ワークフローから発行している場合は、_CNAME_ ファイルは無視されるので、必要ありません。{% endif %}

ブランチから公開している場合、カスタム ドメインは公開元のルートにある _CNAME_ ファイルに格納されます。 このファイルは、リポジトリ設定を通じて、あるいは手動で追加または更新することができます。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。

サイトが正しいドメインでレンダリングされるようにするには、_CNAME_ ファイルがまだリポジトリに存在していることを確認します。 たとえば、多くの静的サイト ジェネレーターがリポジトリへのプッシュを強制する場合、カスタム ドメインの構成時にリポジトリに追加された _CNAME_ ファイルが上書きされる可能性があります。 ローカルでサイトをビルドし、生成されたファイルを {% data variables.product.product_name %} にプッシュする場合は、最初に _CNAME_ ファイルをローカル リポジトリに追加したコミットをプルして、そのファイルがビルドに含まれるようにしてください。

その後、_CNAME_ ファイルが正しく書式設定されていることを確認します。

- _CNAME_ ファイル名はすべて大文字である必要があります。
- _CNAME_ ファイルにはドメインを 1 つだけ含めることができます。 複数のドメインをサイトにポイントするには、DNSプロバイダ経由のリダイレクトを設定する必要があります。
- _CNAME_ ファイルにはドメイン名のみを含める必要があります。 たとえば、「`www.example.com`」、「`blog.example.com`」、「`example.com`」のように指定します。
- ドメイン名は、すべての {% data variables.product.prodname_pages %} サイトで一意である必要があります。 たとえば、別のリポジトリの _CNAME_ ファイルに `example.com` が含まれている場合、自分のリポジトリの `example.com`CNAME _ファイルでは_ を使用することはできません。

## DNS の設定ミス

サイトのデフォルトドメインをカスタムドメインを指すようにすることに問題がある場合は、DNS プロバイダに連絡してください。

カスタムドメインのDNSレコードが正しく設定されているかをテストするには、以下の方法のいずれかを使うこともできます。

- `dig` などの CLI ツール。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインの管理](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。
- オンラインのDNSルックアップツール。

## サポートされていないカスタムドメイン名

カスタムドメインがサポートされていない場合、使用しているドメインをサポートされているドメインに変更しなければならないかもしれません。 DNSプロバイダに問い合わせて、ドメイン名の転送サービスを提供しているかどうかを確認することもできます。

サイトが以下に当てはまっていないを確認してください。
- 複数の Apex ドメインを使用している。 たとえば、`example.com` と `anotherexample.com` の両方です。
- 複数の `www` サブドメインを使用している。 たとえば、`www.example.com` と `www.anotherexample.com` の両方です。
- Apex ドメインとカスタムサブドメインの両方を使用している。 たとえば、`example.com` と `docs.example.com` の両方です。

  1 つの例外として、`www` サブドメインがあります。 正しく構成されていれば、`www` サブドメインは自動的に apex ドメインにリダイレクトされます。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインの管理](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)」を参照してください。

{% data reusables.pages.wildcard-dns-warning %}

サポートされているカスタム ドメインの一覧については、「[カスタム ドメインと {% data variables.product.prodname_pages %} について](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)」を参照してください。

## HTTPS エラー

`CNAME`、`ALIAS`、`ANAME`、または `A` DNS レコードで適切に構成されたカスタム ドメインを使用している {% data variables.product.prodname_pages %} サイトには、HTTPS 経由でアクセスできます。 詳細については、「[HTTPS で {% data variables.product.prodname_pages %} サイトを保護する](/articles/securing-your-github-pages-site-with-https)」を参照してください。

カスタムドメインを設定した後、サイトが HTTPS 経由で利用可能になるには最長 1 時間かかります。 既存の DNS 設定をアップデートした後、HTTPS を有効化するプロセスを開始するには、カスタムドメインを削除してサイトのリポジトリに再追加しなければならない可能性があります。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。

Certification Authority Authorization (CAA) レコードを使用している場合、HTTPS 経由でサイトにアクセスするには、値が `letsencrypt.org` の CAA レコードが少なくとも 1 つ存在している必要があります。 詳細については、Let's Encrypt ドキュメントの「[Certificate Authority Authorization (CAA)](https://letsencrypt.org/docs/caa/)」を参照してください。

## Linux での URL フォーマット

サイトのURLに、先頭か最後がダッシュのユーザ名もしくは Organization 名が含まれていたり、連続するダッシュが含まれていたりすると、Linux でブラウズするユーザがそのサイトにアクセスしようとするとサーバーエラーを受け取ることになります。 これを修正するには、{% data variables.product.product_name %}のユーザ名から非英数字を取り除くよう変更してください。 詳細については、「[{% data variables.product.prodname_dotcom %} ユーザー名の変更](/articles/changing-your-github-username/)」を参照してください。

## ブラウザのキャッシュ

最近カスタムドメインを変更または削除し、ブラウザで新しい URL にアクセスできない場合は、ブラウザのキャッシュを削除してから新しい URL にアクセスすることが必要になる場合があります。 キャッシュの削除についての詳しい情報については、ブラウザのドキュメントを参照してください。
