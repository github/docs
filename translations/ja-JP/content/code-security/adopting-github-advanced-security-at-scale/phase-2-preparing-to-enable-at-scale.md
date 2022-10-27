---
title: 'フェーズ 2: 大規模な有効化の準備'
intro: 'このフェーズでは、開発者の準備を行い、チームの準備を確実にするためにリポジトリに関するデータを収集し、パイロット プログラムと、{% data variables.product.prodname_code_scanning %} および {% data variables.product.prodname_secret_scanning %} のロールアウトに必要なすべてのものを用意します。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109715'
---
{% note %}

この記事は、{% data variables.product.prodname_GH_advanced_security %} の大規模な導入に関するシリーズの一部です。 このシリーズの以前の記事については、「[フェーズ 1: ロールアウトの戦略とゴールの調整](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)」を参照してください。

{% endnote %}

## {% data variables.product.prodname_code_scanning %} の有効化の準備
 
{% data reusables.code-scanning.about-code-scanning %} 詳しい情報については、「[code scanning について](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)」を参照してください。

数百のリポジトリに {% data variables.product.prodname_code_scanning %} をロールアウトすることは、特に非効率に行われる場合、困難なことがあります。 以下の手順に従うと、効率的なロールアウトとその成功が保証されます。 準備の一環として、チームと協力し、リポジトリに関するデータの収集を自動化し、{% data variables.product.prodname_code_scanning %} を有効にします。 

### {% data variables.product.prodname_code_scanning %} のためのチームの準備

最初に、{% data variables.product.prodname_code_scanning %} を使用するためのチームの準備を行います。 {% data variables.product.prodname_code_scanning %} を使用するチームが多いほど、修復プランを推進してロールアウトの進行状況を監視するためのより多くのデータが得られます。 このフェーズでは、API の活用と内部有効化イベントの実行を重点的に取り上げます。

主な目的として、できるかぎり多くのチームが {% data variables.product.prodname_code_scanning %} を使用できるように準備する必要があります。 修復を適切に行うことをチームに促すこともできますが、このフェーズでは、イシューの修復よりも {% data variables.product.prodname_code_scanning %} の有効化と使用を優先することをお勧めします。
  
### リポジトリに関する情報の収集

{% data variables.product.product_name %} の GraphQL API を使用すると、リポジトリで使用されているさまざまなプログラミング言語に関する情報をプログラムで収集し、そのデータを使用して、同じ言語を使用するすべてのリポジトリで {% data variables.product.prodname_code_scanning %} を有効にすることができます。

{% note %}

**注:** この記事で説明する GraphQL クエリを手動で実行せずにこのデータを収集するには、一般公開されているツールを使用できます。 詳しい情報については、"[ghas-enablement ツール](https://github.com/NickLiffen/ghas-enablement)" リポジトリを参照してください。

{% endnote %}

Enterprise 内の複数の Organization に属するリポジトリから情報を収集する必要がある場合、次のクエリを使用して、Organization の名前を取得し、それをリポジトリ クエリにフィードすることができます。 OCTO-ENTERPRISE を自身の Enterprise 名に置き換えます。

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Organization レベルで言語別にリポジトリを照合すると、どのリポジトリでどの言語が使用されているかを識別できます。 次のサンプル GraphQL クエリは、OCTO-ORG を Organization 名に置き換えて変更することができます。

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

GraphQL クエリの実行に関する詳しい情報については、「[GraphQL での呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」を参照してください。

次に、データを GraphQL クエリから、テーブルなどの読み取り可能な形式に変換します。

| 言語                | リポジトリの数 | リポジトリ名                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript (TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

{% data variables.product.prodname_GH_advanced_security %} で現在サポートされていない言語をこのテーブルから除外できます。

複数の言語を使用するリポジトリがある場合は、次の表示に示すように、GraphQL 結果を書式設定できます。 サポートされていない言語を除外しますが、少なくとも 1 つのサポートされている言語を使用するリポジトリはすべて保持します。 これらのリポジトリで {% data variables.product.prodname_code_scanning %} を有効にすることができ、サポートされているすべての言語がスキャンされます。

| 言語            | リポジトリの数 | リポジトリ名                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

どのリポジトリでどの言語が使用されているかを把握すると、フェーズ 3 でパイロット プログラムの候補リポジトリを識別し、フェーズ 5 で、すべてのリポジトリで一度に 1 つの言語に対して {% data variables.product.prodname_code_scanning %} を有効にするための準備を行うのに役立ちます。

{% ifversion ghes %}

### アプライアンスに対する {% data variables.product.prodname_code_scanning %} の有効化

パイロット プログラムと、Enterprise 全体での {% data variables.product.prodname_code_scanning %} の有効化に進む前に、まず、アプライアンスに対して {% data variables.product.prodname_code_scanning %} を有効にする必要があります。 詳しい情報については、「[アプライアンスの code scanning を構成する](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)」を参照してください。

{% endif %}

## {% data variables.product.prodname_secret_scanning %} を有効にするための準備

プロジェクトで外部サービスと通信する場合、認証にトークンまたは秘密キーを使用できます。 リポジトリにシークレットをチェックインする場合、リポジトリへの読み取りアクセスを持つすべてのユーザがシークレットを使用して、自分の権限で外部サービスにアクセスできます。 {% data variables.product.prodname_secret_scanning_caps %} では、{% data variables.product.prodname_dotcom %} リポジトリ内に存在するすべてのブランチで Git 履歴全体をスキャンしてシークレットを確認し、プッシュにシークレットが含まれていることを警告するか{% ifversion secret-scanning-push-protection %}、そのプッシュをブロックします{% endif %}。 詳細については、「[シークレット スキャンについて](/code-security/secret-scanning/about-secret-scanning)」を参照してください。

### {% data variables.product.prodname_secret_scanning %} を有効にする際の考慮事項

{% data variables.product.product_name %} の {% data variables.product.prodname_secret_scanning %} 機能は、プログラミング言語ごと、またはリポジトリごとに個別の構成を必要とせず、全体的に少ない構成で開始できるため、{% data variables.product.prodname_code_scanning %} とは多少異なります。 つまり、組織レベルで {% data variables.product.prodname_secret_scanning %} を有効にするのは簡単ですが、組織レベルで **[すべて有効にする** ] をクリックし、 **[新しいリポジトリごとに {% data variables.product.prodname_secret_scanning %} を自動的に有効にする]** オプションをオンにすると、次のようなダウンストリーム効果が得られます。

- **ライセンスの消費**  
  すべてのリポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効にすると、code scanning を使用するユーザーがいない場合でもすべてのライセンスが消費されます。 Organization 内のアクティブな開発者の数を増やす予定がない限り、これは問題ありません。 アクティブな開発者の数が今後数か月間に増加する可能性がある場合は、ライセンス制限を超え、新しく作成されたリポジトリで {% data variables.product.prodname_GH_advanced_security %} を使用できなくなる可能性があります。
- **最初に大量のシークレットが検出される可能性がある**  
  大規模な Organization で {% data variables.product.prodname_secret_scanning %} を有効にする場合、多数のシークレットが検出されたときに備えて準備を行う必要があります。 場合によっては、これは組織に衝撃を与え、警告が発生します。 一度にすべてのリポジトリで {% data variables.product.prodname_secret_scanning %} を有効にする場合は、Organization 全体での複数のアラートに対応する方法を計画します。

{% data variables.product.prodname_secret_scanning_caps %} は、個々のリポジトリに対して有効にすることができます。 詳細については、「[リポジトリの {% data variables.product.prodname_secret_scanning %} の構成](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)」を参照してください。 また、前述のとおり、{% data variables.product.prodname_secret_scanning_caps %} は、Organization 内のすべてのリポジトリに対して有効にすることもできます。 すべてのリポジトリに対する有効化の詳しい情報については、「[Organization のセキュリティおよび分析の設定の管理](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

### {% data variables.product.prodname_secret_scanning %} のカスタム パターン

{% ifversion ghae %} {% note %}

**注:** {% data variables.product.prodname_secret_scanning %} のカスタム パターンは現在、ベータ版であり、変更される可能性があります。

{% endnote %} {% endif %}

{% data variables.product.prodname_secret_scanning_caps %} では、多数の既定のパターンが検出されますが、インフラストラクチャ固有のシークレット形式や、{% data variables.product.product_name %} の {% data variables.product.prodname_secret_scanning %} では現在検出されないがインテグレーターによって使用されるシークレット形式などのカスタム パターンを検出するように構成することもできます。 パートナー パターンでサポートされているシークレットの詳しい情報については、「[Secret scanning patterns](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。 

リポジトリを監査し、セキュリティ チームおよび開発者チームに説明する際には、後で {% data variables.product.prodname_secret_scanning %} のカスタム パターンを構成するために使用するシークレットの種類の一覧を作成します。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)に関する記事を参照してください。


{% note %}

このシリーズの次の記事については、「[フェーズ 3: パイロット プログラム](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)」を参照してください。

{% endnote %}
