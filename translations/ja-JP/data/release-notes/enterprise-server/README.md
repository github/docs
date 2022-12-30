---
ms.openlocfilehash: bf7a1cdb9c8b1300ef8ba8ab2dd427a9b5d28128
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193463"
---
# GitHub Enterprise Serverリリースノート

表示場所: https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## 非推奨の GitHub Enterprise Server リリースへのリリース ノートの追加

[この Issue テンプレート](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md)に従った非推奨の GitHub Enterprise Server リリースでは、バージョンのリリース ノートを含む YAML ファイルがドキュメント エンジニアリングによって `github/docs-internal` から削除されます。

利害関係者から非推奨のリリース ノートの更新を求められた場合には、次の手順を実行してノートを更新できます。

1. 実行時間の長いブランチ <code>enterprise-<em>VERSION</em>-release</code> を確認し、PR を作成して、そのブランチの非推奨バージョンのリリース ノートを更新します。
2. #docs-engineering に連絡して、Azure に格納されているコンテンツの再スクレイピングと更新を求めます。 [非推奨のチェックリスト](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md)のコンテンツの再スクレイピングに関するセクションをご覧ください。

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

YAML データは `middleware/contextualizers/ghes-release-notes.js` によって処理、並べ替えされ、`context` オブジェクトに追加されます。

### Layouts

`context` オブジェクト データは`components/release-notes` によってレンダリングされます。

リリース ノート ページには、`stylesheets/release-notes.scss` の CSS を含むカスタム デザインがあります。

### スキーマ

YAML データを検証するスキーマは `tests/helpers/schemas/release-notes-schema.js` に存在します。 必須及びオプションのプロパティを調べるには、このスキーマファイルを見てください。

スキーマは `tests/linting/lint-files.js` のテストによって実行されます。 データが検証をパスしなければ、このテストは失敗します。
