---
title: Codespaces のドットファイルのトラブルシューティング
intro: 一般的なドットファイル issue のトラブルシューティング手順。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: 64b4873a36cbdc88b5df3129c2e73e016159032e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147382237'
---
Codespace によるドットファイルからの構成設定の取得が失敗した場合は、次のデバッグ手順を実行する必要があります。

1. ドットファイルを有効にするには、個人の [[Codespaces settings]\(Codespaces 設定\)](https://github.com/settings/codespaces) で **[Automatically install dotfiles]\(ドットファイルを自動的にインストールする\)** をオンにします。

   ![[Automatically install dotfiles]\(ドットファイルを自動的にインストールする\) オプション](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. ドットファイルが複製されているかどうかを確認するには、`/workspaces/.codespaces/.persistedshare/dotfiles` をチェックしてください。
   - ドットファイルが複製されている場合は、インストール スクリプトを手動で再実行して、それが実行可能であることを確認してください。
   - ドットファイルが複製されていない場合は、複製で問題が発生していたかどうかを確認するために、`/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` をチェックしてください。
1. 考えられる問題について、`/workspaces/.codespaces/.persistedshare/creation.log` をチェックしてください。 詳細については、「[作成ログ](/codespaces/troubleshooting/codespaces-logs#creation-logs)」を参照してください。

ドットファイルの構成が正常に取得されたものの、構成の一部に codespace との互換性がない場合は、`$CODESPACES` 環境変数を使用して、codespace 固有の構成設定の条件付きロジックを追加します。
