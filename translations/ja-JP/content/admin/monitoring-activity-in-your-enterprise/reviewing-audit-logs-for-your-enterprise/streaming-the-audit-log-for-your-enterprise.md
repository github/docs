---
title: Enterprise の監査ログのストリーミング
intro: '監査イベントと Git イベントのデータを {% data variables.product.prodname_dotcom %} から外部のデータ管理システムにストリーミングできます。'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
ms.openlocfilehash: 81eb88f760016390a321798589e7994542c9f312
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710340'
---
{% ifversion ghes %} {% note %}

**注:** {% data variables.product.product_name %} の監査ログ ストリーミングは現在、ベータ版であり、変更される可能性があります。

{% endnote %} {% endif %}

## 監査ログのストリーミングについて

知的財産を保護し、組織のコンプライアンスを維持するために、ストリーミングを使用して監査ログ データのコピーを保持し、監視できます。{% data reusables.audit_log.audited-data-list %}

監査ログのストリーミングには、次の利点があります。

* **データの探索**。 大量のデータに対してクエリを実行するために、推奨されるツールを使用して、ストリーミングされたイベントを調べることができます。 ストリーミングには、Enterprise アカウント全体の監査イベントと Git イベントの両方が含まれます。{% ifversion pause-audit-log-stream %}
* **データの継続性**。 ストリーミングは、最長 7 日間、監査データを失うことなく一時停止できます。{% endif %}
* **データ保有**。 エクスポートされた監査ログと Git イベント データを必要な期間だけ保持できます。

Enterprise 所有者は、ストリームをいつでも設定{% ifversion pause-audit-log-stream %}、一時停止、{% endif %}または削除することができます。 ストリーミングによって、Enterprise 内のすべての Organization に関する監査と Git イベント データがエクスポートされます。

## 監査ログのストリーミングの設定

プロバイダーの指示に従って、{% data variables.product.product_name %} での監査ログのストリーミングを設定します。

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Azure Blob Storage](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs){% ifversion streaming-datadog %}
- [Datadog](#setting-up-streaming-to-datadog){% endif %}
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Amazon S3 へのストリーミングの設定

{% ifversion streaming-oidc-s3 %}アクセス キーを使用して S3 へのストリーミングを設定したり、OpenID Connect (OIDC) を使用して {% data variables.product.product_name %} に有効期間の長いシークレットを格納するのを回避したりできます。

- [アクセス キーを使用して S3 へのストリーミングを設定する](#setting-up-streaming-to-s3-with-access-keys)
- [OpenID Connect を使用して S3 へのストリーミングを設定する](#setting-up-streaming-to-s3-with-openid-connect)
- [OpenID Connect を使用して S3 へのストリーミングを無効にする](#disabling-streaming-to-s3-with-openid-connect)

#### アクセス キーを使用して S3 へのストリーミングを設定する
{% endif %}

監査ログを Amazon の S3 エンドポイントにストリーミングするには、バケットとアクセス キーが必要です。 詳しくは、AWS のドキュメント「[Amazon S3 バケットの作成、設定、操作](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html)」をご覧ください。 必ず、バケットへのパブリック アクセスをブロックして監査ログ情報を保護してください。 

{% data variables.product.prodname_dotcom %} から監査ログのストリーミングを設定するには、次のものが必要です。
* Amazon S3 バケットの名前
* AWS アクセス キー ID
* AWS 秘密鍵

アクセス キー ID と秘密鍵の作成またはアクセスについては、AWS ドキュメントの「[Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)」 (AWS 資格情報の理解と取得) を参照してください。

{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. [認証] で **[アクセス キー]** をクリックします。

   ![Amazon S3 へのストリーミングに関する認証オプションのスクリーンショット](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. ストリームの設定を構成します。

   - [バケット] に、ストリーミング先のバケットの名前を入力します。 たとえば、`auditlog-streaming-test` のようにします。
   - [アクセス キー ID] に、アクセス キーの ID を入力します。 たとえば、`ABCAIOSFODNN7EXAMPLE1` のようにします。
   - [シークレット キー] に、シークレット キーを入力します。 たとえば、`aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY` のようにします。
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### OpenID Connect を使用して S3 へのストリーミングを設定する

{% note %}

**注:** OpenID Connect を使った Amazon S3 へのストリーミングは、現在ベータ版であり、変更される可能性があります。

{% endnote %}

1. AWS では、{% data variables.product.prodname_dotcom %} の OIDC プロバイダーを IAM に追加します。 詳しくは、AWS のドキュメント「[OpenID Connect (OIDC) ID プロバイダーの作成](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)」をご覧ください。

   - プロバイダーの URL には、`https://oidc-configuration.audit-log.githubusercontent.com` を使います。
   - [対象者] には、`sts.amazonaws.com` を使います。
1. バケットを作成し、バケットへのパブリック アクセスをブロックします。 詳しくは、AWS のドキュメント「[Amazon S3 バケットの作成、設定、操作](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html)」をご覧ください。
1. {% data variables.product.company_short %} によるバケットへの書き込みを許可するポリシーを作成します。 {% data variables.product.prodname_dotcom %} には、次のアクセス許可のみが必要です。

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
      ]
   }
   ```
   詳しくは、AWS のドキュメント「[IAM ポリシーの作成](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html)」をご覧ください。
1. {% data variables.product.prodname_dotcom %} IdP のロールと信頼ポリシーを構成します。 詳しくは、AWS のドキュメント「[ウェブ ID または OpenID Connect フェデレーション用のロールを作成する (コンソール)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)」をご覧ください。
  
   - 上で作成したアクセス許可ポリシーを追加して、バケットへの書き込みを許可します。
   - 信頼関係を編集して、`sub` フィールドを検証条件に追加し、`ENTERPRISE` を自分の Enterprise の名前に置き換えます。
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - 作成されたロールの Amazon Resource Name (ARN) を記録しておきます。
{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}
1. [認証] の **[OpenID Connect]** をクリックします。

   ![Amazon S3 へのストリーミングに関する認証オプションのスクリーンショット](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. ストリームの設定を構成します。

   - [バケット] に、ストリーミング先のバケットの名前を入力します。 たとえば、`auditlog-streaming-test` のようにします。
   - [ARN ロール] に、前に記録した ARN ロールを入力します。 たとえば、`arn:aws::iam::1234567890:role/github-audit-log-streaming-role` のようにします。
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### OpenID Connect を使用して S3 へのストリーミングを無効にする

OIDC のセキュリティ脆弱性を検出したなど、何らかの理由で OIDC を使用した S3 へのストリーミングを無効にする場合は、ストリーミングの設定時に AWS で作成した {% data variables.product.prodname_dotcom %} OIDC プロバイダーを削除します。 詳しくは、AWS のドキュメント「[OpenID Connect (OIDC) ID プロバイダーの作成](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)」をご覧ください。

その後は、脆弱性が解決されるまで、アクセス キーを使用してストリーミングを設定します。 詳しい情報については、「[アクセス キーを使用して S3 へのストリーミングを設定する](#setting-up-streaming-to-s3-with-access-keys)」を参照してください。

{% endif %}

### Azure Blob Storage へのストリーミングの設定

{% data variables.product.prodname_dotcom %} でのストリーミングを設定する前に、まず、Microsoft Azure でストレージ アカウントとコンテナーを作成しておく必要があります。 詳細については、Microsoft のドキュメント「[Azure Blob Storage の概要](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)」を参照してください。 

{% data variables.product.prodname_dotcom %} でストリーミングを構成するには、SAS トークンの URL が必要です。

**Microsoft Azure portal** で次の操作を行います。
1. [ホーム] ページで、 **[ストレージ アカウント]** をクリックします。
2. 使用するストレージ アカウントの名前をクリックし、 **[コンテナー]** をクリックします。
   
   ![Azure の [コンテナー] リンク](/assets/images/azure/azure-storage-containers.png)

1. 使用するコンテナーの名前をクリックします。
1. **[共有アクセス トークン]** をクリックします。 
   
   ![Azure の [共有アクセス トークン] リンク](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. **[アクセス許可]** ドロップダウン メニューで、`Create` と `Write` のみを許可するようにアクセス許可を変更します。
   
   ![[アクセス許可] ドロップダウン メニュー](/assets/images/azure/azure-storage-permissions.png)

1. シークレット ローテーション ポリシーに準拠する有効期限を設定します。
1. **[SAS トークンおよび URL を生成]** をクリックします。
1. 表示される **BLOB SAS URL** フィールドの値をコピーします。 この URL を {% data variables.product.prodname_dotcom %} で使用します。

**{% data variables.product.prodname_dotcom %}** で次の操作を行います。{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **[Configure stream]** をクリックし、 **[Azure Blob Storage]** を選択します。
   
   ![ドロップダウン メニューから [Azure Blob Storage] を選択する](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. 構成ページで、Azure でコピーした BLOB SAS URL を入力します。 **[Container]** フィールドは、その URL に基づいて自動入力されます。

   ![ストリーミングの設定を入力する](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. **[Check endpoint]** をクリックして、{% data variables.product.prodname_dotcom %} で Azure Blob Storage エンドポイントに接続して書き込むことができることを確認します。
   
   ![エンドポイントをチェックする](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Azure Event Hubs へのストリーミングの設定

{% data variables.product.prodname_dotcom %} でのストリーミングを設定する前に、まず、Microsoft Azure でイベント ハブ名前空間が必要です。 次に、その名前空間内にイベント ハブ インスタンスを作成する必要があります。 ストリーミングを設定するときに、このイベント ハブ インスタンスの詳細が必要になります。 詳細については、Microsoft のドキュメント「[クイック スタート:Azure portal を使用したイベント ハブの作成](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)」を参照してください。 

イベント ハブに関する 2 つの情報 (インスタント名と接続文字列) が必要です。 

**Microsoft Azure portal** で次の操作を行います。
1. 「Event Hubs」を検索します。

   ![Azure portal の検索ボックス](/assets/images/azure/azure-resources-search.png )

1. **[Event Hubs]** を選択します。 イベント ハブの名前が一覧表示されます。 
   
   ![イベント ハブの一覧](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. ストリーミング先のイベント ハブの名前をメモします。
1. 必要なイベント ハブをクリックします。 次に、左側のメニューで、 **[共有アクセスポリシー]** を選択します。
1. ポリシーの一覧で共有アクセス ポリシーを選択するか、新しいポリシーを作成します。
   
   ![共有アクセス ポリシーの一覧](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. **[接続文字列 – 主キー]** フィールドの右側にあるボタンをクリックして、接続文字列をコピーします。
   
   ![イベント ハブの接続文字列](/assets/images/help/enterprises/azure-connection-string.png)

**{% data variables.product.prodname_dotcom %}** で次の操作を行います。{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **[Configure stream]** をクリックし、 **[Azure Event Hubs]** を選択します。
   
   ![ドロップダウン メニューから [Azure Events Hubs] を選択する](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. 構成ページで、次の項目を入力します。
   * Azure Event Hubs インスタンスの名前。
   * 接続文字列。
  
   ![ストリーミングの設定を入力する](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. **[Check endpoint]** をクリックして、{% data variables.product.prodname_dotcom %} で Azure Events Hubs エンドポイントに接続して書き込むことができることを確認します。
   
   ![エンドポイントをチェックする](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-datadog %}
### Datadog へのストリーミングの設定

Datadog へのストリーミングを設定するには、Datadog でクライアント トークンまたは API キーを作成し、次に認証用のトークンを使用して {% data variables.product.product_name %} で監査ログ ストリーミングを構成する必要があります。 Datadog でバケットやその他のストレージ コンテナーを作成する必要はありません。

Datadog へのストリーミングを設定した後は、"github.audit.streaming" でフィルター処理することで自分の監査ログ データを確認できます。 詳しくは、「[ログ管理](https://docs.datadoghq.com/logs/)」を参照してください。

1. まだ Datadog アカウントがない場合は、それを作成します。
1. Datadog で、クライアント トークンまたは API キーを生成して、 **[キーのコピー]** をクリックします。 詳しくは、Datadog Docs の「[API キーとアプリケーション キー](https://docs.datadoghq.com/account_management/api-app-keys/)」を参照してください。 {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **[ストリームの構成]** ドロップダウンを選び、 **[Datadog]** をクリックします。
   
   ![[Datadog] が強調表示された [ストリームの構成] ドロップダウン メニューのスクリーンショット](/assets/images/help/enterprises/audit-stream-choice-datadog.png)
1. [トークン] の下に、先ほどコピーしたトークンを貼り付けます。

   ![[トークン] フィールドのスクリーンショット](/assets/images/help/enterprises/audit-stream-datadog-token.png)
1. [サイト] ドロップダウン メニューを選び、Datadog サイトをクリックします。 ご利用の Datadog サイトを特定するには、その Datadog の URL を Datadog Docs にある [Datadog サイト](https://docs.datadoghq.com/getting_started/site/) 内のテーブルと比較します。

   ![[サイト] ドロップダウン メニューのスクリーンショット](/assets/images/help/enterprises/audit-stream-datadog-site.png)
1. {% data variables.product.prodname_dotcom %} で Datadog エンドポイントに接続して書き込みができることを確認するには、 **[エンドポイントのチェック]** をクリックします。
   
   ![エンドポイントをチェックする](/assets/images/help/enterprises/audit-stream-check.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}
1. 数分後、Datadog の **[ログ]** タブに監査ログ データが表示されていることを確認します。 監査ログ データが表示されない場合は、トークンとサイトが正しいことを {% data variables.product.prodname_dotcom %} で確認します。
{% endif %}

### Google Cloud Storage へのストリーミングの設定

Google Cloud Storage へのストリーミングを設定するには、適切な資格情報とアクセス許可を使用して、Google Cloud にサービス アカウントを作成し、そのサービス アカウントの資格情報を認証に使用して {% data variables.product.product_name %} での監査ログのストリーミングを構成します。

1. Google Cloud のサービス アカウントを作成します。 サービス アカウントのアクセス制御または IAM ロールを設定する必要はありません。 詳細については、Google Cloud のドキュメント「[サービス アカウントの作成と管理](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating)」を参照してください。
1. サービス アカウントの JSON キーを作成し、キーを安全に格納します。 詳細については、Google Cloud のドキュメント「[サービス アカウント キーの作成と管理](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating)」を参照してください。
1. バケットをまだ作成していない場合は、作成します。 詳細については、Google Cloud のドキュメント「[ストレージ バケットの作成](https://cloud.google.com/storage/docs/creating-buckets)」を参照してください。
1. バケットのストレージ オブジェクト作成者のロールをサービス アカウントに付与します。 詳細については、Google Cloud のドキュメント「[クラウド IAM 権限を使用する](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add)」を参照してください。
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. [Configure stream] ドロップダウン メニューを選択し、 **[Google Cloud Storage]** をクリックします。

   ![[Configure stream] ドロップダウン メニューのスクリーンショット](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. [Bucket] で、Google Cloud Storage バケットの名前を入力します。

   ![[Bucket] テキスト フィールドのスクリーンショット](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. [JSON Credentials] で、サービス アカウントの JSON キーのファイルの内容全体を貼り付けます。

   ![[JSON Credentials] テキスト フィールドのスクリーンショット](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. {% data variables.product.prodname_dotcom %} で Google Cloud Storage バケットに接続して書き込めることを確認するには、 **[Check endpoint]** をクリックします。 

   ![[Check endpoint] ボタンのスクリーンショット](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Splunk へのストリーミングの設定

監査ログを Splunk の HTTP Event Collector (HEC) エンドポイントにストリーミングするには、エンドポイントが HTTPS 接続を受け入れるように構成されていることを確認する必要があります。 詳細については、Splunk のドキュメント「[Set up and use HTTP Event Collector in Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector)」 (Splunk Web で HTTP Event Collector を設定および作成する) を参照してください。

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **[Configure stream]** をクリックし、 **[Splunk]** を選択します。
   
   ![ドロップダウン メニューから [Splunk] を選択する](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. 構成ページで、次の項目を入力します。
   * ストリーミング先のアプリケーションがホストされているドメイン。
  
     Splunk Cloud を使用している場合、`Domain` は `http-inputs-<host>` である必要があります。ここで、`host` は、Splunk Cloud で使用するドメインです。 (例: `http-inputs-mycompany.splunkcloud.com`)。 

   * アプリケーションでデータを受け入れるポート。<br>

     Splunk Cloud を使用していて、ポート構成を変更していない場合、`Port` は `443` である必要があります。 Splunk Cloud の無料試用版を使用している場合、`Port` は `8088` である必要があります。

   * {% data variables.product.prodname_dotcom %} でサードパーティ アプリケーションに対する認証に使用できるトークン。
  
   ![ストリーミングの設定を入力する](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. **[Enable SSL verification]** チェック ボックスはオンのままにします。

    監査ログは常に、暗号化されたデータとしてストリーミングされます。ただし、このオプションを選択すると、{% data variables.product.prodname_dotcom %} によって、イベントの配信前に Splunk インスタンスの SSL 証明書が検証されます。 SSL 検証は、イベントが URL エンドポイントに安全に配信されることを保証するために役立ちます。 このオプションの選択をオフにすることはできますが、SSL 検証を有効のままにすることをお勧めします。
1. **[Check endpoint]** をクリックして、{% data variables.product.prodname_dotcom %} で Splunk エンドポイントに接続して書き込むことができることを確認します。
   ![エンドポイントをチェックする](/assets/images/help/enterprises/audit-stream-check-splunk.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## 監査ログのストリーミングの一時停止

ストリーミングを一時停止すると、監査ログ データを失うことなく、受信側のアプリケーションでメンテナンスを実行できます。 監査ログは、最長 7 日間 {% data variables.product.product_location %} に格納され、ストリーミングの一時停止を解除するとエクスポートされます。

{% ifversion streaming-datadog %} Datadog で受け入れるログは過去 18 時間以降のものに限られます。 Datadog エンドポイントへのストリームを 18 時間以上一時停止した場合、ストリーミングを再開した後に Datadog で受け入れられないログが失われるリスクがあります。
{% endif %}

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **[Pause stream]** をクリックします。
   
   ![ストリーミングを一時停止する](/assets/images/help/enterprises/audit-stream-pause.png)

1. 確認メッセージが表示されます。 **[Pause stream]** をクリックして確定します。

アプリケーションが、監査ログを再び受信できるようになったら、 **[Resume stream]** をクリックして監査ログのストリーミングを再開します。
{% endif %}

## 監査ログのストリーミングの削除

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. **[Delete stream]** をクリックします。
   
   ![ストリーミングを削除する](/assets/images/help/enterprises/audit-stream-delete.png)

1. 確認メッセージが表示されます。 **[Delete stream]** をクリックして確定します。
