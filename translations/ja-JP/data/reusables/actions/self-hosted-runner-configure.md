---
ms.openlocfilehash: 27ed9d55b8199298dc1cfdf8b4d3da925e08aa8d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068010"
---
1. 使用するセルフホスト ランナー マシンのオペレーティング システム イメージとアーキテクチャを選択します。
1. ランナーアプリケーションをダウンロードして、使用するセルフホストランナーのマシンにインストールする方法が表示されます。

   セルフホストランナーのマシンでシェルを開き、表示順に従ってシェルコマンドを実行してください。

   {% note %}

   **注:** Windows で、セルフホスト ランナー アプリケーションをサービスとしてインストールする場合は、シェルを管理者権限でオープンしなければなりません。 また、`C:\actions-runner` をセルフホスト ランナー アプリケーション用のディレクトリとして使用し、Windows のシステム アカウントでランナー ディレクトリにアクセスできるようにすることをお勧めします。

   {% endnote %}

   この指示に従えば、以下のタスクが完了します。
   - セルフホストランナーアプリケーションのダウンロードと展開。
   - `config` スクリプトを実行してセルフホスト ランナー アプリケーションを設定し、{% data variables.product.prodname_actions %} に登録します。 `config` スクリプトには、登録先の URL と、リクエストを認証してもらうための自動的に生成された時間制限付きのトークンが必要です。
     - Windows では、`config` スクリプトからセルフホスト ランナーをサービスとしてインストールするかどうかも尋ねられます。 LinuxとmacOSでは、ランナーの追加を終えた後にサービスをインストールできます。 詳細については、「[セルフホスト ランナー アプリケーションをサービスとして構成する](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)」を参照してください。
   - セルフホストランナーアプリケーションを実行して、マシンを{% data variables.product.prodname_actions %}に接続します。
