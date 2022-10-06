---
title: codespace コンピューターに対して最小仕様を設定する
shortTitle: Set a minimum machine spec
intro: 'リソース不足のコンピューターの種類が、リポジトリの {% data variables.product.prodname_github_codespaces %} に使用されないようにすることができます。'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 368b7c73d13bb0624c9d838ac2d7bb18a2b050e3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880807'
---
## 概要

作成する各 codespace は個別の仮想マシンでホストされ、通常はさまざまな種類の仮想マシンから選択できます。 マシンの種類ごとにリソース (CPU、メモリ、ストレージ) が異なり、既定では、リソースが最も少ないコンピューターの種類が使用されます。 詳細については、「[codespace に合わせたコンピューターの種類の変更](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)」を参照してください。

プロジェクトで特定のレベルのコンピューティング能力が必要な場合は、それらの要件を満たすコンピューターの種類のみを、既定で使用、またはユーザーが選択できるように、{% data variables.product.prodname_github_codespaces %} を構成することができます。 `devcontainer.json` ファイル内でこれを構成します。

{% note %}

**重要:** 一部のコンピューターの種類へのアクセスは、組織レベルで制限される場合があります。 通常、これは、より高いレートで課金される、よりリソースの多いコンピューターをユーザーが選択することを防ぐために行われます。 リポジトリがコンピューターの種類に関する組織レベルのポリシーの影響を受ける場合は、ユーザーが選択できるコンピューターの種類がなくなるような最小仕様を設定しないようにする必要があります。 詳細については、「[コンピューターの種類へのアクセスの制限](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)」を参照してください。

{% endnote %}

## コンピューターの最小仕様の設定

1. ご利用のリポジトリの {% data variables.product.prodname_github_codespaces %} は、`devcontainer.json` ファイル内で構成されます。 リポジトリに `devcontainer.json` ファイルがまだ含まれていない場合は、今すぐ追加します。 「[開発コンテナー構成をリポジトリに追加する](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)」を参照してください。
1. `devcontainer.json` ファイルを編集し、次のような `hostRequirements` プロパティを追加します。

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   次のいずれかの、またはすべてのオプションを指定できます: `cpus`、`memory`、`storage`。
   
   リポジトリで現在使用可能な、{% data variables.product.prodname_github_codespaces %} のコンピューターの種類の仕様を確認するには、コンピューターの種類の選択肢が表示されるまで、codespace の作成プロセスをステップ実行します。 詳細については、「[codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)」を参照してください。
   
1. ファイルを保存し、リポジトリの必要なブランチに加えた変更をコミットします。

   ここで、リポジトリのそのブランチ用に codespace を作成し、作成設定オプションに進むと、指定したリソースと一致するか、またはそれを超えるコンピューターの種類のみを選択できるようになります。

   ![コンピューターの種類の選択が制限されているダイアログ ボックス](/assets/images/help/codespaces/machine-types-limited-choice.png)

## 参考資料

- "[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
