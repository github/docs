---
ms.openlocfilehash: 78f03188cb76fd34ffd5670585758bb8c9c2a47d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145115005"
---
# GitHub AEのリリースノート

表示場所: https://docs.github.com/en/github-ae@latest/admin/release-notes

## しくみ

### プレースホルダーコンテンツファイル

コンテンツ ファイルは `content/admin/release-notes.md` にあります。 それには特別な frontmatter プロパティ `layout: release-notes` があり、Markdown コンテンツはありません。 リリースノートのソースはYAMLデータから得られます。

### YAMLソース

リリース ノートのソース データは、このディレクトリ (`data/release-notes/github-ae`) に存在します。

ディレクトリは月ごとに名付けられます。 YAMLファイルは週次のリリースの日付によって名付けられます。

`currentWeek` という名前のブール型プロパティは、各 YAML ファイルで設定する必要があります。 このプロパティをtrueに設定できるファイルは、1つだけです。

パッチ ファイルは、省略可能な `deprecated: true` プロパティによって個別に非推奨 (つまり、ドキュメント サイトでは非表示) とされることがある点に注意してください。

### ミドルウェアの処理

YAML データは `middleware/contextualizers/release-notes.js` によって処理、並べ替えされ、`context` オブジェクトに追加されます。

### Layouts

`context` オブジェクト データは`components/release-notes` によってレンダリングされます。

リリース ノート ページには、`stylesheets/release-notes.scss` の CSS を含むカスタム デザインがあります。

### スキーマ

YAML データを検証するスキーマは `tests/helpers/schemas/ghae-release-notes-schema.js` に存在します。 必須及びオプションのプロパティを調べるには、このスキーマファイルを見てください。

スキーマは `tests/linting/lint-files.js` のテストによって実行されます。 データが検証をパスしなければ、このテストは失敗します。
