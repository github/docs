---
ms.openlocfilehash: c8e09d66bc8f0f35ca319e3650c6913174e59067
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145067826"
---
{% data variables.product.prodname_actions %} には、 _コンテキスト_ と呼ばれる変数のコレクションと、 _既定の環境変数_ と呼ばれる同様の変数のコレクションが含まれます。 これらの変数は、ワークフロー中の様々な場所で利用されることを意図したものです。

- **既定の環境変数:** これらの変数は、ジョブを実行しているランナーにのみ存在します。 詳細については、「[既定の環境変数](/actions/reference/environment-variables#default-environment-variables)」を参照してください。
- **コンテキスト：** _既定の環境変数_ を使用できない場合など、ワークフロー内の任意の時点でほとんどのコンテキストを使用できます。 たとえば、式を含むコンテキストを使って、ジョブが実行のためにランナーにルーティングされる前に初期処理を実行できます。これにより、条件付き `if` キーワードを含むコンテキストを使用して、ステップを実行するかどうかを決定できます。 ジョブが実行されると、`runner.os` など、ジョブを実行しているランナーからコンテキスト変数を取得することもできます。 ワークフロー内でさまざまなコンテキストを使用できる場所の詳細については、「[コンテキストの可用性](/actions/reference/context-and-expression-syntax-for-github-actions#context-availability)」を参照してください。

以下の例は、様々な種類の環境変数をジョブの中で合わせて利用できることを示しています。

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

この例では、`if` ステートメントで [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) コンテキストをチェックして、現在のブランチ名を判別します。名前が `refs/heads/main` の場合、後続のステップが実行されます。 `if` チェックは {% data variables.product.prodname_actions %} によって処理され、結果が `true` の場合にのみジョブがランナーに送信されます。 ジョブがランナーに送信されると、ステップが実行され、ランナーから [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) 環境変数が参照されます。
