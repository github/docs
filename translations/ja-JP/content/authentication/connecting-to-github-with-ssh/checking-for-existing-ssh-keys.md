---
title: 既存の SSH キーの確認
intro: SSH キーを生成する前に、SSH キーがすでに存在するかどうかを確認できます。
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
ms.openlocfilehash: 4487e44b1cbba7038364e92f3194d5c3c06c505b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409108'
---
## SSH キーについて

SSH を使用して、{% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} のリポジトリで Git 操作を実行できます。 詳細については、「[SSH について](/authentication/connecting-to-github-with-ssh/about-ssh)」を参照してください。

既存の SSH キーがある場合は、そのキーを使用して SSH 経由で Git 操作を認証できます。

## 既存の SSH キーの確認

新しい SSH キーを生成する前に、ローカル コンピューターで既存のキーを確認する必要があります。

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. `ls -al ~/.ssh` を入力して、既存の SSH キーが存在するかどうかを確認します。

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. ディレクトリの一覧から、公開 SSH キーをすでに持っているか確認します。 既定では、{% ifversion ghae %}{% data variables.product.product_name %} でサポートされている公開キーのファイル名は *id_rsa.pub* です。{% else %}{% data variables.product.product_name %} でサポートされている公開キーのファイル名は、次のいずれかです。
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **ヒント**: *~/.ssh* が存在しないというエラーを受け取った場合、既定の場所に既存の SSH キーの組はありません。 次の手順で、新しい SSH キーの組を作成できます。

  {% endtip %}

4. 新しい SSH キーを生成するか、既存のキーをアップロードします。
    - サポートされている公開キーと秘密キーの組がない場合、または使用可能なものを使用しない場合は、新しい SSH キーを生成します。
    - {% data variables.product.product_name %} への接続に使用する既存の公開キーと秘密キーの組 (*id_rsa.pub* や *id_rsa* など) が一覧表示されている場合は、ssh-agent にキーを追加できます。

      新しい SSH キーの生成、または ssh-agent への既存のキーの追加について詳しくは、「[新しい SSH キーを生成して ssh-agent に追加する](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。
