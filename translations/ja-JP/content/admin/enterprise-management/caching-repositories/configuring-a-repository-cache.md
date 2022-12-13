---
title: リポジトリ キャッシュの構成
intro: '{% data variables.product.product_name %} 用のリポジトリ キャッシュを構成するには、新しいインスタンスを作成し、リポジトリ キャッシュをプライマリ インスタンスに接続し、リポジトリ キャッシュに対するリポジトリ ネットワークのレプリケーションを構成します。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: 682e169c55ef7ded453934720bf47f8843bc4acc
ms.sourcegitcommit: 1d757a4f3e1947fdd3868208b63041de30c9f60c
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/03/2022
ms.locfileid: '148132380'
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

{% ifversion ghes = 3.3 %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. リポジトリのキャッシュを有効にするには、次のコマンドを実行します。
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. 新しい {% data variables.product.prodname_ghe_server %} インスタンスを希望するプラットフォームにセットアップします。 このインスタンスがリポジトリ キャッシュになります。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/admin/guides/installation/setting-up-a-github-enterprise-server-instance)」を参照してください。
{% data reusables.enterprise_installation.replica-steps %}
1. SSH を使用して、リポジトリ キャッシュの IP アドレスに接続します。

   ```shell
   $ ssh -p 122 admin@REPLICA-IP
   ```
{%- ifversion ghes = 3.3 %}
1. キャッシュ レプリカで、リポジトリ キャッシュの機能フラグを有効にします。
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. プライマリへの接続を確認し、リポジトリ キャッシュに対してレプリカ モードを有効にするには、`ghe-repl-setup` をもう一度実行します。

   ```shell
   $ ghe-repl-setup PRIMARY-IP
   ```

{% ifversion ghes < 3.6 %}
1. *CACHE-LOCATION* を、キャッシュがデプロイされているリージョンなどの英数字識別子に置き換えて、リポジトリ キャッシュに対して `cache-location` を設定します。 また、このキャッシュのデータセンター名も設定します。新しいキャッシュでは、同じデータセンター内の別のキャッシュからシード処理を試みます。

   ```shell
   $ ghe-repl-node --cache CACHE-LOCATION --datacenter REPLICA-DC-NAME
   ```
{% else %}
1. リポジトリ キャッシュを構成するには、`ghe-repl-node` コマンドを使用し、必要なパラメーターを含めます。
    - *CACHE-LOCATION* を、キャッシュがデプロイされているリージョンなどの英数字識別子に置き換えて、リポジトリ キャッシュに対して `cache-location` を設定します。  *CACHE-LOCATION* 値は、`assets` や `media` など、サブドメイン分離で使用するために予約されているサブドメインのいずれにもできません。  予約名の一覧については、「[サブドメイン分離の有効化](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)」を参照してください。
    - リポジトリ キャッシュに `cache-domain` を設定し、*EXTERNAL-CACHE-DOMAIN* を Git クライアントがリポジトリ キャッシュへのアクセスに使用するホスト名に置き換えます。 `cache-domain` を指定しない場合、{% data variables.product.product_name %} は、*CACHE-LOCATION* 値をサブドメインとして、インスタンス用に構成されたホスト名の前に付加します。 詳しくは、「[ホスト名の設定](/admin/configuration/configuring-network-settings/configuring-a-hostname)」をご覧ください。
    - 新しいキャッシュでは、同じデータセンター内の別のキャッシュからシード処理を試みます。 リポジトリ キャッシュに `datacenter` を設定し、*REPLICA-DC-NAME* をノードをデプロイするデータセンターの名前に置き換えます。

    ```shell
    $ ghe-repl-node --cache CACHE-LOCATION --cache-domain EXTERNAL-CACHE-DOMAIN --datacenter REPLICA-DC-NAME
    ```
{% endif %}

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
