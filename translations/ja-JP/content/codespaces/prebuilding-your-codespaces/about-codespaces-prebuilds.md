---
title: Codespaces のプレビルドについて
shortTitle: About prebuilds
intro: Codespaces プレビルドは、大規模または複雑なリポジトリの新しい codespace の作成を高速化するのに役立ちます。
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4653ead4a97ff1ff87ac8029fb215fdc8ae56566
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381188"
---
## <a name="overview"></a>概要

codespace をプレビルドすると、生産性が高まり、codespace にすばやくアクセスできます。特に、リポジトリが大規模であるか、複雑であり、新しい codespace の開始に現状、2 分以上かかる場合に有効です。 これは、プロジェクト用の codespace を作成する前に、ソース コード、エディター拡張機能、プロジェクトの依存関係、コマンド、構成が既にダウンロード、インストール、適用されているためです。 プレビルドは、codespace のための "準備ができている" テンプレートと考えてください。 

既定では、リポジトリに変更をプッシュするたびに、{% data variables.product.prodname_codespaces %} は {% data variables.product.prodname_actions %} を使って、プレビルドを自動的に更新します。

リポジトリの特定のブランチおよびお使いのリージョンでプレビルドを使用できると、codespace を作成するとき、コンピューターの種類の一覧に、[{% octicon "zap" aria-label="The zap icon" %} プレビルドあり] というラベルが表示されます。 プレビルドがまだ作成中の場合、"{% octicon "history" aria-label="The history icon" %} プレビルド進行中" ラベルが表示されます。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。

![コンピューターの種類を選択するためのダイアログ ボックス](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## <a name="about-billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>{% data variables.product.prodname_codespaces %} のプレビルドに対する支払いについて

{% data reusables.codespaces.billing-for-prebuilds %}{% data variables.product.prodname_codespaces %} のストレージの価格の詳細については、「[{% data variables.product.prodname_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)」を参照してください。 

プレビルドを使用して作成された codespace の使用は、通常の codespace と同じレートで課金されます。

## <a name="about-pushing-changes-to-prebuild-enabled-branches"></a>プレビルドが有効なブランチへの変更のプッシュについて

既定では、プレビルドが構成されているブランチにプッシュするたびに、プレビルドテンプレートを更新するための {% data variables.product.prodname_dotcom %} で管理される Actions ワークフロー実行が作成されます。 関連するリポジトリの開発コンテナー構成に影響を与える変更が行われたのでない限り、プレビルド ワークフローには、特定のプレビルド構成に対して一度に 1 つのワークフロー実行というコンカレンシー制限があります。 詳細については、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」をご覧ください。 実行が既に進行中の場合は、現在の実行が完了した後、最後にキューに登録されたワークフロー実行が次に実行されます。 

プッシュのたびにプレビルドテンプレートが更新されるように設定すると、リポジトリへのプッシュが非常に多いとき、プレビルドテンプレートは少なくとも、プレビルドワークフローの実行に必要なだけ更新されます。 つまり、ワークフローの実行が完了するまでに通常 1 時間かかるとすると、実行が成功する場合は約 1 時間ごと、ブランチの開発コンテナー構成を変更するプッシュがあった場合はさらに頻繁に、リポジトリに対してプレビルドが作成されます。

たとえば、プレビルドが構成されたブランチに対し、プッシュが 5 回立て続けに行われるとします。 この状況では、次のようになります。

* 1 番目のプッシュに対するワークフローの実行が開始され、プレビルド テンプレートが更新されます。
* 残りの 4 つのプッシュが開発コンテナーの構成に影響しない場合、これらに対するワークフロー実行は "保留中" 状態でキューに入れられます。 
  
  残りの 4 つのプッシュのいずれかが開発コンテナーの構成を変更する場合は、サービスはそれをスキップせず、プレビルド作成ワークフローを直ちに実行して、成功した場合はそれに応じてプレビルドを更新します。 

* 最初の実行が完了すると、プッシュ 2、3、4 に対するワークフローの実行は取り消されて、最後にキューに入れられたワークフロー (プッシュ 5 に対するもの) が実行され、プレビルド テンプレートが更新されます。 
