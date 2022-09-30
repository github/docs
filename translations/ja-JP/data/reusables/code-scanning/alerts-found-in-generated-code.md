---
ms.openlocfilehash: 599e48d3a38c855896fac842f5c8b4833488aeae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063737"
---
Java、C、C++、C# などのコンパイルされた言語の場合、{% data variables.product.prodname_codeql %} はワークフローの実行中に作成されたすべてのコードを分析します。 分析するコードの量を制限するには、`run` ブロックで独自のビルド ステップを指定して、分析するコードのみをビルドします。 独自のビルド ステップの指定と、`pull_request` イベントや `push` イベントでの `paths` フィルターまたは `paths-ignore` フィルターの使用を組み合わせることで、特定のコードが変更されたときにのみワークフローが実行されるようにすることができます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)に関するページを参照してください。

ソース コードをコンパイルせずに {% data variables.product.prodname_codeql %} で分析される Go、JavaScript、Python、TypeScript などの言語の場合、追加の設定オプションを指定して分析するコードの量を制限できます。 詳細については、「[Specifying directories to scan](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)」(スキャンするディレクトリの指定) を参照してください。
