---
ms.openlocfilehash: 15dca8ffafe9686d15e08ffb8ecd9e07ceba3942
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878898"
---
| オプション | 必須 | セキュリティ更新プログラム | バージョン アップデート | 説明 |
|:---|:---:|:---:|:---:|:---|
| [`package-ecosystem`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)                     | **X** | | X | 使用するパッケージマネージャー                  |
| [`directory`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#directory)                                     | **X** | | X | パッケージマニフェストの場所           |
| [`schedule.interval`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleinterval)                      | **X** | | X | 更新を確認する頻度                |
| [`allow`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)                                             | | x | x | 許可する更新をカスタマイズする         |
| [`assignees`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#assignees)                                     | | x | X | プルリクエストのアサイン担当者           |
| [`commit-message`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message)                           | | x | x | コミットメッセージの環境設定                  |{% ifversion fpt or ghec or ghes > 3.4 %}
| [`enable-beta-ecosystems`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)           | | | x | ベータ レベルのサポートを備えたエコシステムを有効にする |{% endif %}
| [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)                                           | | x | x | 特定の依存関係またはバージョンを無視する     |
| [`insecure-external-code-execution`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#insecure-external-code-execution) | | | x | マニフェストファイル内でコードの実行を許可または拒否する |
| [`labels`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#labels)                                           | | x | x | プルリクエストに設定するラベル              |
| [`milestone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#milestone)                                     | | X | x | プルリクエストに設定するマイルストーン           |
| [`open-pull-requests-limit`](#open-pull-requests-limit)       | | x | x | バージョン更新時のオープンなプルリクエスト数を制限する |
| [`pull-request-branch-name.separator`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#pull-request-branch-nameseparator) | | x | x | プルリクエストブランチ名の区切り文字を変更する |
| [`rebase-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#rebase-strategy)                         | | x | x | 自動リベースを無効にする                  |
| [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries)                                   | | | x | {% data variables.product.prodname_dependabot %} がアクセスできるプライベートリポジトリ|
| [`reviewers`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers)                                     | | x | x | プルリクエストのレビュー担当者           |
| [`schedule.day`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleday)                                | | | x | 更新を確認する曜日              |
| [`schedule.time`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletime)                              | | | x | 更新を確認する時刻 (hh:mm)      |
| [`schedule.timezone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletimezone)                      | | | x | 時刻のタイムゾーン（ゾーン識別子）    |
| [`target-branch`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch)                             | | | x  | プルリクエストを作成するブランチ     |
| [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor)                                           | | | x | ベンダーまたはキャッシュされた依存関係を更新する        |
| [`versioning-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#versioning-strategy)                 | | x | x | マニフェストのバージョン要件の更新方法 |
