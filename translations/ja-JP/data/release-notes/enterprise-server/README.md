---
ms.openlocfilehash: a43b7fac5396fcbdb1b7d9ec241af9879de7b2b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145115021"
---
# GitHub Enterprise Serverリリースノート

表示場所: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## しくみ

### プレースホルダーコンテンツファイル

コンテンツ ファイルは `content/admin/release-notes.md` にあります。 それには特別な frontmatter プロパティ `layout: release-notes` があり、Markdown コンテンツはありません。 リリースノートのソースはYAMLデータから得られます。

### YAMLソース

リリース ノートのソース データは、このディレクトリ (`data/release-notes/enterprise-server`) に存在します。

このディレクトリは、GHESのリリース番号（ハイフンの代わりにピリオド）で名付けられます。

各ディレクトリ内のYAMLファイルは、パッチ番号で名付けられます。 一部のパッチ ファイル名は、`-rc<num>.yml` で終わることがあります。これはリリース候補であることを意味します。 リリース候補ファイルは、YAML データにも `release_candidate: true` が必要です。

非推奨の GHES バージョン (`lib/enterprise-server-releases.js` を参照) のリリース ノートは、サイトから削除 **されず**、現在サポートされているバージョンと共に常に表示されます。

パッチ ファイルは、省略可能な `deprecated: true` プロパティによって個別に非推奨 (つまり、ドキュメント サイトでは非表示) とされることがある点に注意してください。

### ミドルウェアの処理

YAML データは `middleware/contextualizers/release-notes.js` によって処理、並べ替えされ、`context` オブジェクトに追加されます。

### Layouts

`context` オブジェクト データは`components/release-notes` によってレンダリングされます。

リリース ノート ページには、`stylesheets/release-notes.scss` の CSS を含むカスタム デザインがあります。

### スキーマ

YAML データを検証するスキーマは `tests/helpers/schemas/ghes-release-notes-schema.js` に存在します。 必須及びオプションのプロパティを調べるには、このスキーマファイルを見てください。

スキーマは `tests/linting/lint-files.js` のテストによって実行されます。 データが検証をパスしなければ、このテストは失敗します。
