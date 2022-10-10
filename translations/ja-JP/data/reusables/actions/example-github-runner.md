---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114413"
---
### 様々なオペレーティングシステム上での実行

スターター ワークフローは、{% data variables.product.prodname_dotcom %} ホスト `ubuntu-latest` ランナーを使って Linux 上で実行するジョブを設定します。 `runs-on` キーを変更すると、別のオペレーティング システムでジョブを実行するようにできます。 たとえば、{% data variables.product.prodname_dotcom %}ホストのWindowsランナーを使うことができます。

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

あるいは{% data variables.product.prodname_dotcom %}ホストのmacOSランナーで実行させることもできます。

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Dockerコンテナ上でジョブを実行させたり、独自のインフラストラクチャ上で動作するセルフホストランナーを提供したりすることもできます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)に関するページを参照してください。
