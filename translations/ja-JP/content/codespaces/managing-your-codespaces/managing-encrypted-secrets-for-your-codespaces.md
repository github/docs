---
title: codespaces の暗号化されたシークレットを管理する
intro: 環境変数を介してコードスペースにアクセスする、トークンなどの機密情報を保存できます。
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: a1ea1c87581feccd737314db0d7bf237f983357a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192810'
---
## {% data variables.product.prodname_github_codespaces %} の暗号化されたシークレットについて

コードスペースで使用する個人アカウントに、暗号化されたシークレットを追加できます。 たとえば、次のような機密情報を暗号化されたシークレットとして保存しアクセスするとよいでしょう。

- クラウド サービスへのアクセス トークン
- サービス プリンシパル
- プラン識別子
- プライベート イメージ レジストリの資格情報 (詳しくは「[プライベート レジストリへのアクセスを codespace に許可する](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-registry)」を参照してください)

各シークレットにアクセスできるリポジトリを選択できます。 そして、シークレットへのアクセス権があるリポジトリ用に作成した任意のコードスペースでそのシークレットを使用できます。 テンプレートから作成された codespace とシークレットを共有するには、{% data variables.product.prodname_dotcom %} 上のリポジトリに codespace を発行し、そのリポジトリにシークレットへのアクセス権を付与する必要があります。

{% data reusables.codespaces.secrets-on-start %}

### シークレットに名前を付ける

{% data reusables.codespaces.secrets-naming %} たとえば、リポジトリレベルで作成されたシークレットは、そのリポジトリ内で一意の名前である必要があります。

  {% data reusables.codespaces.secret-precedence %}

### シークレットの制限

{% data variables.product.prodname_github_codespaces %} には最大 100 個のシークレットを保存できます。

シークレットの容量は最大64 KBです。

## シークレットを追加する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [Codespaces シークレット] の右側にある **[新しいシークレット]** をクリックします。
  ![[新しいシークレット] ボタン](/assets/images/help/settings/codespaces-new-secret-button.png)
1. [Name] で、シークレットの名前を入力します。
  ![[名前] テキスト ボックス](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. **[シークレットの追加]** をクリックします。

## シークレットを編集する

既存のシークレットの値を更新したり、シークレットがアクセスできるリポジトリを変更したりすることができます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [Codespaces シークレット] で、編集するシークレットの右側にある **[更新]** をクリックします。
  ![[更新] ボタン](/assets/images/help/settings/codespaces-secret-update-button.png)
1. [値] で、 **[新しい値の入力]** をクリックします。
  ![[新しい値の入力] リンク](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. リポジトリへのシークレットのアクセス権を削除する場合は、リポジトリを選択解除します。
  ![リポジトリへのアクセス権を削除するチェックボックス](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. **[変更を保存]** をクリックします。

## シークレットを削除する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [Codespaces シークレット] で、削除するシークレットの右側にある **[削除]** をクリックします。
  ![[削除] ボタン](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. 警告を読み、 **[OK]** をクリックします。
  ![シークレットの削除の確認](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## シークレットの使用

シークレットは環境変数としてユーザーのターミナル セッションにエクスポートされます。

  ![エクスポートされたシークレットの値をターミナルに表示する](/assets/images/help/codespaces/exported-codespace-secret.png)

codespace が構築されて実行されたら、codespace でシークレットを使用できます。 たとえば、次のような場合にシークレットを使用できます。

* 統合ターミナルまたは ssh セッションからアプリケーションを起動するとき。
* codespace の実行後に実行される開発コンテナー ライフサイクル スクリプト内。 開発コンテナー ライフサイクル スクリプトについて詳しくは、containers.dev の[指定](https://containers.dev/implementors/json_reference/#lifecycle-scripts)に関するドキュメントをご覧ください。

codespace シークレットは、次の場合は使用できません。

* codespace の構築時間 (つまり、Dockerfile またはカスタム エントリ ポイント内)。
* 開発コンテナー機能内。 詳しくは、containers.dev の[開発コンテナーの仕様](https://containers.dev/implementors/json_reference/#general-properties)に関するページの `features` プロパティをご覧ください。

## 参考資料

- 「[リポジトリの暗号化されたシークレットと {% data variables.product.prodname_github_codespaces %} の Organization を管理する](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)」
