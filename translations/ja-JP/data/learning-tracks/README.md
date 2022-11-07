---
ms.openlocfilehash: dcc6cf1e8adf15c4997d4d62cd34bde99f7d37cd
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: "145109725"
---
# 学習トラック (別名 学習パス)

学習トラックは、特定のテーマをマスターするのに役立つ記事の集まりです。 学習トラックは製品ごとに定義されています。 例については、「 https://docs.github.com/en/actions/guides」を参照してください。

## しくみ

製品の学習トラックのデータは2カ所で定義されています:

1. 学習トラック名のシンプルな配列は、製品ガイドのインデックス ページの frontmatter で定義されています。

    たとえば、`content/actions/guides/index.md` では次のようにします。
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. 各トラックの追加データは、`data` ディレクトリ内の **製品** にちなんで名付けられた YAML ファイルで定義されます。

    たとえば、`data/learning-tracks/actions.yml` では、コンテンツ ファイルの `learningTracks` 配列の各項目は、`title`、`description`、`guides` リンクの配列などの追加データで表されます。

    この **バージョンごと** の YAML の 1 つの学習トラックは、`featured_track: true` を介して "おすすめ" の学習トラックとして指定する必要があります。これにより、製品ガイド ページの上部に表示されるように設定されます。 このプロパティがないと、テストは失敗します。

    `featured_track` プロパティは、単純なブール値 (つまり、`featured_track: true`) にすることも、バージョン管理ステートメントを含む文字列 (`featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'` など) にすることもできます。 バージョン管理を使用する場合、YML ファイルごとに複数の `featured_track` がありますが、現在サポートされている各バージョンでレンダリングされるのは 1 つだけであることを確認してください。 各バージョンに対して注目のリンクが1つより多くても少なくてもテストは失敗します。

## バージョン管理

学習トラックのバージョン付けは、ページのレンダリングの時点で処理されます。 このコードは、`page.render()` によって呼び出される [`lib/learning-tracks.js`](lib/learning-tracks.js) にあります。 処理された学習トラックは、その後、`components/guides` によってレンダリングされます。

ガイド用の YAML ファイルのバージョン管理には、液体条件を使用する必要は **ありません**。 現在のバージョンに適用される学習トラックのガイドだけが自動的にレンダリングされます。 現在のバージョンに属するガイドを持つトラックがない場合、その学習トラックのセクションはまったくレンダリングされません。

製品の学習トラックのYAMLデータ中における明示的なバージョン付けもサポートされています。 書式と許可される値は、[frontmatter versions プロパティ](/content#versions)と同じです。

次に例を示します。

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

`versions` プロパティが含まれていない場合、そのトラックはすべてのバージョンで使用できるものと想定されています。

## スキーマの適用

学習トラック YAML を検証するためのスキーマは、[`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) にあり、[`tests/content/lint-files.js`](tests/content/lint-files.js) によって実行されます。
