---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062403"
---
codespace をカスタマイズするには、vCPU と RAM の量を調整するか、[dotfile を追加して環境をカスタマイズするか](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)、インストールされているツールやスクリプトを変更します。

{% data variables.product.prodname_codespaces %} では、`devcontainer.json` というファイルを使って、codespace で作業するときに使う開発コンテナーを構成します。 各リポジトリには 1 つ以上の `devcontainer.json` ファイルを含めることができ、codespace でコードを操作するために必要な開発環境を正確に提供できます。 

起動時に、{% data variables.product.prodname_codespaces %} は `devcontainer.json` ファイルと、開発コンテナーの構成を設定する依存ファイルを使って、ツールやランタイムをインストールし、プロジェクトが必要とするその他のセットアップ タスクを実行します。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)に関するページをご覧ください。
