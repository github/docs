---
title: サードパーティの CLI アクションの開発
shortTitle: CLI setup action
intro: '{% data variables.product.prodname_actions %} ランナーに CLI を設定するアクションを開発する方法について学びます。'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
ms.openlocfilehash: c839faa63efd0f8b7f5ab78a81107d27ab93e1c4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090483'
---
## はじめに

{% data variables.product.prodname_actions %} ランナーの構成済み CLI 環境経由でサーバーにアクセスする方法をユーザーに与えるアクションを記述できます。

アクションに求められること:

- インストールする CLI のバージョンをユーザーが簡単に指定できるようにする
- 複数のオペレーティング システムをサポートする
- 効率的な方法で実行され、ランタイムと関連コストを最小限に抑える
- {% data variables.product.product_name %} ホスト型ランナーとセルフホスト型ランナーで動作する
- 可能であればコミュニティ ツールを活用する

この記事では、CLI の特定のバージョンを取得し、それをインストールし、それをパスに追加し、(任意で) それをキャッシュするアクションを記述する方法がわかります。 この種類のアクション (ツールをセットアップするアクション) の名前は多くの場合、`setup-$TOOL` です。 

## 前提条件

カスタム アクションを記述する方法を理解している必要があります。 詳細については、「[カスタム アクションについて](/actions/creating-actions/about-custom-actions)」を参照してください。 カスタム アクションを記述する方法の詳細なガイドについては、「[JavaScript アクションを作成する](/actions/creating-actions/creating-a-javascript-action)」を参照してください。

## 例

次のスクリプトからは、ユーザー指定のバージョンを入力として取得し、特定のバージョンの CLI をダウンロードして抽出し、CLI をパスに追加する方法がわかります。

{% data variables.product.prodname_dotcom %} からは [`actions/toolkit`](https://github.com/actions/toolkit) が提供されます。これはアクションの作成に役立つ一連のパッケージです。 この例では、[`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) および [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache) パッケージを使用します。

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

このスクリプトを使用するには、`getDownloadURL` を、CLI をダウンロードする関数に置き換えます。 `version` 入力を受け取り、このスクリプトを実行するアクション メタデータ ファイル (`action.yml`) を作成する必要もあります。 アクションの作成方法の詳細については、「[JavaScript アクションを作成する](/actions/creating-actions/creating-a-javascript-action)」を参照してください。

このアクションをセットアップする方法の完全な例が必要であれば、[example-setup-gh](https://github.com/github-developer/example-setup-gh) を参照してください。

## 参考資料

このパターンはいくつかのアクションで使用されます。 他の例が必要であれば、次をご覧ください。

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

