---
ms.openlocfilehash: 52ba84fdbfdaa4150aff2b1e1bba858bf1ab7d41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111310"
---
1. `/PATH/REPO-NAME.git/git-import/raw-authors.csv` でコンマ区切り (CSV) ファイルを確認します。 以下の列が含まれているはずです。
    - `ID`: 元のリポジトリに格納されている作成者、その後に一意識別子が続きます
    - `NAME`: 元のリポジトリに格納されている作成者

  元のリポジトリの作成者をメール アドレスと名前にマップするには、`ID,(ignored),GIT_EMAIL,GIT_NAME` 列を含む新しい CSV ファイルを作成します。このファイルでは、"ID" による任意の作成者情報が "GIT_EMAIL" と "GIT_NAME" に置き換えられます。

  #### 例:

   - 元の作成者 ID: `octocat@111111-2222-3333-4444-55555555555`
   - 新しいメール アドレス: `octocat@github.com`
   - 新しい名前: `The Octocat`

   オリジナルの作者を新しいGitユーザにマップするには、CSVファイルに以下の行が含まれていなければなりません。

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
