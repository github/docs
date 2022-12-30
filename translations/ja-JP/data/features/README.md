---
ms.openlocfilehash: 3e44864fd82617c799cc4af8a3ab31b9279ed950
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879159"
---
## 機能ベースのバージョン管理

機能ベースのバージョン管理によって、任意の名前の「機能」のバージョンの定義とコントロールを一カ所で行えるようになります。

**注**: `data/features/placeholder.yml` はテストで使用されるため、削除しないでください。

## しくみ

このディレクトリで使いたい機能名で新しいYAMLファイルを追加してください。 `meow` という名前の機能の場合、`data/features/meow.yml` のようになります。

`versions` ブロックを、その機能が利用可能なバージョンの短い名前を持つ YML ファイルに追加します。 たとえば次のような点です。

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

書式と許可される値は、[frontmatter versions プロパティ](/content#versions)と同じです。

### Liquidの条件演算子

これで、コンテンツ ファイルで `{% ifversion meow %} ... {% endif %}` を使用できるようになりました。

### Frontmatter

コンテンツファイル中のfrontmatterでこの機能を使うこともできます。

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

これはサポートされていないため、複数の同時実行バージョンを指定するために `feature:` を使用することはできません。 または、必要なバージョン管理を使用して、新しい機能ベースのバージョン管理ファイルを作成することもできます。

## スキーマの適用

機能のバージョン管理を検証するためのスキーマは、[`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) にあり、[`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js) によって実行されます。

## 機能タグを削除するためのスクリプト

TBD!
