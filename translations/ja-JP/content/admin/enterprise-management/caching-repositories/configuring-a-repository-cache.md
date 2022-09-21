---
title: リポジトリ キャッシュの構成
intro: リポジトリ キャッシュを構成するには、新しいアプライアンスを作成し、リポジトリ キャッシュをプライマリ アプライアンスに接続し、リポジトリ キャッシュに対するリポジトリ ネットワークのレプリケーションを構成します。
versions:
  ghes: '>=3.3'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: dced49e1e6795407e2e41f12275a310c3a98aaf1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332011'
---
{% data reusables.enterprise.repository-caching-release-phase %}

## リポジトリ キャッシュの構成について

{% data reusables.enterprise.repository-caching-config-summary %}次に、リポジトリ キャッシュにレプリケートされるリポジトリ ネットワークを管理するデータの場所ポリシーを設定できます。

クラスタリングでは、リポジトリ キャッシュはサポートされていません。

## リポジトリ キャッシュの DNS

プライマリ インスタンスとリポジトリ キャッシュの DNS 名は異なっている必要があります。 たとえば、プライマリ インスタンスが `github.example.com` にある場合は、キャッシュ名は `europe-ci.github.example.com` や `github.asia.example.com` に決定できます。

CI マシンで、プライマリ インスタンスではなくリポジトリ キャッシュからフェッチするには、Git の `url.<base>.insteadOf` 構成設定を使用できます。 詳細については、Git ドキュメントにある「[`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf)」を参照してください。 

たとえば、CI マシンのグローバル `.gitconfig` には、次の行が含まれます。

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

次に、`https://github.example.com/myorg/myrepo` をフェッチするように Git に要求すると、代わりに `https://europe-ci.github.example.com/myorg/myrepo` からフェッチされます。

## リポジトリ キャッシュの構成

{% ifversion ghes = 3.3 %}
1. プライマリ {% data variables.product.prodname_ghe_server %} アプライアンスで、リポジトリ キャッシュの機能フラグを有効にします。
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. 新しい {% data variables.product.prodname_ghe_server %} アプライアンスを希望するプラットフォームにセットアップします。 このアプライアンスがリポジトリ キャッシュになります。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
{% data reusables.enterprise_installation.replica-steps %}
1. SSH を使用して、リポジトリ キャッシュの IP アドレスに接続します。

   ```shell
   $ ssh -p 122 admin@<em>REPLICA IP</em>
   ```
{%- ifversion ghes = 3.3 %}
1. キャッシュ レプリカで、リポジトリ キャッシュの機能フラグを有効にします。
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. プライマリへの接続を確認し、リポジトリ キャッシュに対してレプリカ モードを有効にするには、`ghe-repl-setup` をもう一度実行します。

   ```shell
   $ ghe-repl-setup <em>PRIMARY IP</em>
   ```

1. *CACHE-LOCATION* を、キャッシュがデプロイされているリージョンなどの英数字識別子に置き換えて、リポジトリ キャッシュに対して `cache_location` を設定します。 また、このキャッシュのデータセンター名も設定します。新しいキャッシュでは、同じデータセンター内の別のキャッシュからシード処理を試みます。

   ```shell
   $ ghe-repl-node --cache <em>CACHE-LOCATION</em> --datacenter <em>REPLICA-DC-NAME</em>
   ```

{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}
1. リポジトリ キャッシュへのリポジトリ ネットワークのレプリケーションを有効にするには、データの場所ポリシーを設定します。 詳細については、「[データの場所ポリシー](#data-location-policies)」を参照してください。

## データの場所ポリシー

`spokesctl cache-policy` コマンドでリポジトリのデータの場所ポリシーを構成して、データの局所性を制御できます。 データの場所ポリシーによって、どのリポジトリ ネットワークがどのリポジトリ キャッシュにレプリケートされているかが決まります。 既定では、データの場所ポリシーが構成されるまで、どのリポジトリ キャッシュにもリポジトリ ネットワークはレプリケートされません。

データの場所ポリシーは、Git コンテンツにのみ影響します。 Issue や pull request コメントなどのデータベース内のコンテンツは、ポリシーに関係なくすべてのノードにレプリケートされます。

{% note %}

**注:** データの場所ポリシーは、アクセス制御と同じではありません。 リポジトリにアクセスできるユーザーを制御するには、リポジトリ ロールを使用する必要があります。 リポジトリ ロールの詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

{% endnote %} 

`--default` フラグを使用して、すべてのネットワークをレプリケートするようにポリシーを構成できます。 たとえば、次のコマンドでは、すべてのリポジトリ ネットワークの 1 つのコピーを、`cache_location` が "kansas" であるリポジトリ キャッシュのセットにレプリケートするポリシーが作成されます。

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

リポジトリ ネットワークのレプリケーションを構成するには、ネットワークのルートであるリポジトリを指定します。 リポジトリ ネットワークには、リポジトリとリポジトリのすべてのフォークが含まれます。 ネットワーク全体をレプリケートしないと、ネットワークの一部をレプリケートすることはできません。

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

ネットワークのレプリカ数を 0 に指定すると、すべてのネットワークをレプリケートし、特定のネットワークを除外するポリシーをオーバーライドできます。 たとえば、次のコマンドでは、場所 "kansas" 内のリポジトリ キャッシュに、そのネットワークのコピーを含めることができないことが指定されます。

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

特定のキャッシュの場所で、1 より大きいレプリカ数はサポートされていません。
