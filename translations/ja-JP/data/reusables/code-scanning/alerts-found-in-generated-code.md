---
ms.openlocfilehash: bc31880a8f42a48324c81b13db40b9b1d09b1286
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109236"
---
Java、{% ifversion codeql-go-autobuild %} Go、{% endif %}C、C++、C# などのコンパイル言語の場合、{% data variables.product.prodname_codeql %} はワークフローの実行中にビルドされたすべてのコードを分析します。 分析するコードの量を制限するには、`run` ブロックで独自のビルド ステップを指定して、分析するコードのみをビルドします。 独自のビルド ステップの指定と、`pull_request` イベントや `push` イベントでの `paths` フィルターまたは `paths-ignore` フィルターの使用を組み合わせることで、特定のコードが変更されたときにのみワークフローが実行されるようにすることができます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)に関するページを参照してください。

ソース コードをコンパイルせずに {% data variables.product.prodname_codeql %} で分析される{% ifversion codeql-go-autobuild %}{% else %} Go、{% endif %}JavaScript、Python、TypeScript などの言語の場合、追加の構成オプションを指定して分析するコードの量を制限できます。 詳細については、「[Specifying directories to scan](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)」(スキャンするディレクトリの指定) を参照してください。