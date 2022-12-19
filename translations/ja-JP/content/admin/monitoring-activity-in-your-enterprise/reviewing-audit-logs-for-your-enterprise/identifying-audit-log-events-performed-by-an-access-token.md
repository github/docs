---
title: アクセス トークンによって実行される監査ログ イベントの識別
shortTitle: Identify events by token
intro: 'エンタープライズ内の特定の{% data variables.product.pat_generic %}または OAuth トークンによって実行されるアクションを特定できます。'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160133'
---
## 監査ログのトークン データについて

エンタープライズの監査ログで、認証に{% data variables.product.pat_generic %}または OAuth アプリケーションを使用して実行されたアクションの場合、イベント データには、使用される認証方法とトークンの SHA-256 ハッシュが表示されます。

トークンが侵害されたことを知った場合は、そのトークンに関連付けられているすべてのイベントについてエンタープライズの監査ログを検索することで、侵害されたトークンによって実行されたアクションを把握できます。

監査ログをエクスポートするときにハッシュされたトークン値は含まれません。

## トークンに関連付けられているイベントの検索

特定のトークンに関連付けられているイベントを検索する場合は、UI または REST API を使用できます。 どちらの場合も、最初にトークンの SHA-256 ハッシュを把握する必要があります。

### トークンの SHA-256 ハッシュ値の生成

未加工のトークン値しかない場合は、トークンを検索する前に SHA-256 ハッシュを生成する必要があります。

MacOS と Linux の場合は、`echo -n TOKEN | openssl dgst -sha256 -binary | base64` を使用して TOKEN をトークン値に置き換えることができます。

Powershell では、次のスクリプトを使用して、指定された文字列の SHA-256 ハッシュを返すことができます。

```shell{:copy}
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```

### {% data variables.product.prodname_dotcom %} での検索

{% data variables.product.prodname_dotcom %} で監査ログを検索するときに、検索クエリに `hashed_token:"VALUE"` を含めて、`VALUE` をトークンの SHA-256 ハッシュに置き換えます。 

{% note %}

**注:** ハッシュされたトークン値を引用符で囲んでください。

{% endnote %}

### REST API を使用した検索

REST API を使用してトークンを検索する前に、SHA-256 ハッシュを生成した後、ハッシュを URI エスケープする必要もあります。 ほとんどの主要なプログラミング言語で、URI エスケープのためのユーティリティが提供されます。 たとえば、[encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) は JavaScript の文字列をエンコードします。

次に、検索語句に `hashed_token:"VALUE"` を含め、VALUE を URI エスケープ ハッシュに置き換えます。 

たとえば、エンタープライズ アカウントの名前が `octo-corp` の場合、次の curl コマンドは、URI でエンコードされた SHA-256 ハッシュが `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8` であるトークンに関連付けられているすべてのイベントで @octo-corp の監査ログを検索します。

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## 参考資料

- 「[エンタープライズの監査ログ API を使う](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)」
