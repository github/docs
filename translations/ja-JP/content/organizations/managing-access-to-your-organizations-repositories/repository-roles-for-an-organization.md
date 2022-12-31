---
title: Organizationのリポジトリロール
intro: 細かなロールを割り当て、ユーザに必要な機能やタスクへのアクセスを付与することによって、Organization内の各リポジトリへのアクセスをカスタマイズできます。
miniTocMaxHeadingLevel: 3
redirect_from:
- /articles/repository-permission-levels-for-an-organization-early-access-program
- /articles/repository-permission-levels-for-an-organization
- /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
- /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Repository roles
ms.openlocfilehash: dbb5075dfc57e01e0658138b65d6231fb12f1071
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526703"
---
## Organizationのリポジトリロール

ロールを割り当てる事によって、Organization のメンバー、外部のコラボレータ、および Team に対し、Organization が所有するリポジトリに様々なレベルのアクセスを付与できます。 プロジェクトにおける各人または各 Team の機能に相応しいロールを選択し、プロジェクトに対して必要以上のアクセスを与えないようにしましょう。

以下のリストでは、Organization のリポジトリに対するロールを、弱いアクセス権から強いアクセス権へと並べています:
- **読み取り** - プロジェクトの表示またはディスカッションを行う、コードを書かないコントリビューターにお勧めします
- **トリアージ** - イシューや pull request を予防的に管理する必要があるが、Write アクセス権は不要なコントリビューターにお勧めします
- **書き込み** - プロジェクトに積極的にプッシュするコントリビューターにお勧めします
- **保守** - リポジトリを管理する必要があるが、機密または破壊的なアクションへのアクセス権は不要なプロジェクト マネージャーにお勧めします
- **管理者** - セキュリティの管理やリポジトリの削除などの機密および破壊的なアクションを含む、プロジェクトへのフル アクセス権が必要な方にお勧めします

{% ifversion fpt %} Organization が {% data variables.product.prodname_ghe_cloud %} を使用している場合、カスタム リポジトリ ロールを作成できます。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Organization のカスタム リポジトリ ロールの管理](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
{% elsif ghec or ghes > 3.4 or ghae-issue-6271 %} カスタム リポジトリ ロールを作成できます。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
{% endif %}

Organizationのオーナーは、その Organization のリポジトリにアクセスするとき、Organization の全メンバーに適用される基本レベルの権限を設定できます。 詳細については、「[Organization の基本レベルの権限の設定](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)」を参照してください。

また、Organization のオーナーは、Organization 全体にわたって、特定の設定およびアクセスをさらに制限することも選択できます。 特定の設定のオプションの詳細については、「[Organization の設定を管理する](/articles/managing-organization-settings)」を参照してください。

Organizationレベルの設定の管理に加えて、OrganizationのオーナーはOrganizationが所有するすべてのリポジトリへの管理アクセス権を持っています。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

{% warning %}

**警告:** 誰かがリポジトリにデプロイ キーを追加すると、秘密キーを持っているユーザーは誰でも、(キーの設定によって) そのリポジトリに対して読み取りまたは書き込みを行うことができます。そのユーザーが後で Organization から削除されても同じです。

{% endwarning %}

## 各ロールの権限

{% ifversion fpt %} 以下にリストされた機能の中には、{% data variables.product.prodname_ghe_cloud %} を使う Organization 限定のものもあります。 {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

**注:** セキュリティ機能を使用するために必要なロールは、以下の「[セキュリティ機能のアクセス要件](#access-requirements-for-security-features)」に一覧表示されています。

{% endnote %} {% endif %}

| リポジトリアクション | Read | トリアージ | Write | 管理 | [Admin] |
|:---|:---:|:---:|:---:|:---:|:---:|
| [個人](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)、[チーム](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)、[外部のコラボレータ](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)によるリポジトリへのアクセスを管理する | | | | | **✔️** |
| 個人または Team の割り当てリポジトリからのプル | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 個人または Team の割り当てリポジトリのフォーク | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 自分のコメントの編集および削除 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Issue のオープン | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 自分でオープンした Issue のクローズ | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 自分でクローズした Issue を再オープン | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 自分に割り当てられた Issue の取得 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Team の割り当てリポジトリのフォークからのプルリクエストの送信 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| プルリクエストについてのレビューのサブミット | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 公開済みリリースの表示 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [GitHub Actions ワークフロー実行](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)を表示する | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| パブリックリポジトリでのWikiの編集 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| プライベートリポジトリのWikiの編集 | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [悪用またはスパムの可能性のあるコンテンツを報告する](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| ラベルの適用/却下 | | **✔️** | **✔️** | **✔️** | **✔️** |
| ラベルの作成、編集、削除 | | | **✔️** | **✔️** | **✔️** |
| すべての Issue およびプルリクエストのクローズ、再オープン、割り当て | | **✔️** | **✔️** | **✔️** | **✔️** |
| [pull request の自動マージの有効化または無効化](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| マイルストーンの適用 |  | **✔️** | **✔️** | **✔️** | **✔️** |
| [重複した issue および pull request](/articles/about-duplicate-issues-and-pull-requests) をマークする| | **✔️** | **✔️** | **✔️** | **✔️** |
| [pull request のレビュー](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)を要求する | | **✔️** | **✔️** | **✔️** | **✔️** |
| [pull request](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)をマージする | | | **✔️** | **✔️** | **✔️** |
| 個人または Team の割り当てリポジトリへのプッシュ (書き込み) | | | **✔️** | **✔️** | **✔️** |
| コミット、プルリクエスト、Issue についての他者によるコメントの編集と削除 | | | **✔️** | **✔️** | **✔️** |
| [他者のコメントを非表示にする](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [会話をロックする](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| issue の転送 (詳細については、「[Transferring an issue to another repository](/articles/transferring-an-issue-to-another-repository)」 (issue を別のリポジトリに転送する) を参照) |  | | **✔️** | **✔️** | **✔️** |
| [リポジトリに指定されたコード オーナーとして行動する](/articles/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [pull request をレビュー準備完了としてマークする](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [pull request をドラフトに変換する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| プルリクエストのマージ可能性に影響するレビューのサブミット | | | **✔️** | **✔️** | **✔️** |
| pull request に対して、[提案された変更を適用する](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [ステータス チェック](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)の作成 | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [GitHub Actions ワークフロー](/actions/automating-your-workflow-with-github-actions/)の作成、編集、実行、再実行、取り消し | | | **✔️** | **✔️** | **✔️** |{% endif %}
| リリースの作成と編集 | | | **✔️** | **✔️** | **✔️** |
| ドラフトリリースの表示 | | | **✔️** | **✔️** | **✔️** |
| リポジトリの説明の編集 | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [パッケージの表示とインストール](/packages/publishing-and-managing-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [パッケージの公開](/packages/publishing-and-managing-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [パッケージの削除および復元](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| [トピック](/articles/classifying-your-repository-with-topics)の管理 | | | | **✔️** | **✔️** |
| Wiki の有効化および Wiki 編集者の制限 | | | | **✔️** | **✔️** |
| プロジェクトボードの有効化 | | | | **✔️** | **✔️** |
| [pull request のマージ](/articles/configuring-pull-request-merges)の構成 | | | | **✔️** | **✔️** |
| [{% data variables.product.prodname_pages %} の公開ソース](/articles/configuring-a-publishing-source-for-github-pages)を構成する | | | | **✔️** | **✔️** |
| [ブランチ保護ルールの管理](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [保護されたブランチへのプッシュ](/articles/about-protected-branches) | | | | **✔️** | **✔️** |
| 保護されたブランチでのプルリクエストのマージ（レビューの承認がなくても） | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae-issue-6337 or ghec %}
| [タグ保護ルール](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)に一致するタグの作成 | | | | **✔️** | **✔️** |
| [タグ保護ルール](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)に一致するタグの削除 | | | | | **✔️** |{% endif %}
| [リポジトリ ソーシャル カードの作成と編集](/articles/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **✔️** | **✔️** |{% endif %}
| issue の削除 (「[issue の削除](/articles/deleting-an-issue)」を参照) | | | | | **✔️** |
| [リポジトリのコード オーナーを定義する](/articles/about-code-owners) | | | | | **✔️** |
| リポジトリを Team に追加する (詳細については、「[Organization リポジトリへの Team のアクセスを管理する](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)」を参照) | | | | | **✔️** |
| [外部のコラボレータによるリポジトリへのアクセスを管理する](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [リポジトリの可視性の変更](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| リポジトリをテンプレートにする (「[テンプレート リポジトリを作成する](/articles/creating-a-template-repository)」を参照) | | | | | **✔️** |
| リポジトリ設定の変更 | | | | | **✔️** |
| Team およびコラボレータのリポジトリへのアクセス管理 | | | | | **✔️** |
| リポジトリのデフォルトブランチ編集 | | | | | **✔️** |
| リポジトリの既定のブランチの名前を変更する (「[ブランチの名前を変更する](/github/administering-a-repository/renaming-a-branch)」を参照) | | | | | **✔️** |
| リポジトリの既定のブランチ以外のブランチの名前を変更する (「[ブランチの名前を変更する](/github/administering-a-repository/renaming-a-branch)」を参照) | | | **✔️** | **✔️** | **✔️** |
| Webhookおよびデプロイキーの管理 | | | | | **✔️** |{% ifversion fpt or ghec %}
| [プライベート リポジトリのデータ利用設定を管理する](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [リポジトリのフォーク ポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [リポジトリを Organization に委譲する](/articles/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [リポジトリを Organization から削除または委譲する](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [リポジトリのアーカイブ](/articles/about-archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| スポンサー ボタンを表示する (「[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)」 (リポジトリにスポンサー ボタンを表示する) を参照) | | | | | **✔️** |{% endif %}
| Jira や Zendesk などの外部リソースへの自動リンク参照を作成する (「[外部リソースを参照する自動リンクの構成](/articles/configuring-autolinks-to-reference-external-resources)」を参照) | | | | | **✔️** |{% ifversion discussions %}
| リポジトリの [{% data variables.product.prodname_discussions %} の有効化](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) | | | | **✔️** | **✔️** |
| {% data variables.product.prodname_discussions %} の[カテゴリの作成と編集](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) | | | | **✔️** | **✔️** |
| [ディスカッションを別のカテゴリに移動する](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| 新しいリポジトリに[ディスカッションを委譲する](/discussions/managing-discussions-for-your-community/managing-discussions)| | | **✔️** | **✔️** | **✔️** |
| [ピン留めされたディスカッションを管理する](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [issue を一括してディスカッションに変換する](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [ディスカッションのロックとロック解除](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [issue を個別にディスカッションに変換する](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [新しいディスカッションを作成し、既存のディスカッションにコメントする](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [ディスカッションの削除](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| [codespaces](/codespaces/about-codespaces) を作成する | | | **✔️** | **✔️** | **✔️** |{% endif %}

### セキュリティ機能のためのアクセス要件

このセクションでは、{% data variables.product.prodname_advanced_security %}の機能のようなセキュリティ機能に必要なアクセス権を知ることができます。

| リポジトリアクション | Read | トリアージ | Write | 管理 | [Admin] |
|:---|:---:|:---:|:---:|:---:|:---:| 
| リポジトリ内の[セキュリティで保護されていない依存関係に対する {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) を受信します。 | | | | | **✔️** |
| [{% data variables.product.prodname_dependabot_alerts %} を閉じます](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [セキュリティ アラートを受信する追加のユーザーまたはチームを指定します](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| [セキュリティ アドバイザリ](/code-security/security-advisories/about-github-security-advisories)を作成します | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| {% data variables.product.prodname_GH_advanced_security %} 機能へのアクセスを管理します (「[組織のセキュリティと分析の設定を確認する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| プライベート リポジトリの[依存関係グラフを有効にします](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [依存関係のレビューを表示します](/code-security/supply-chain-security/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [pull request の {% data variables.product.prodname_code_scanning %} アラートを表示します](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [{% data variables.product.prodname_code_scanning %} アラートを一覧表示、却下、削除します](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [リポジトリの {% data variables.product.prodname_secret_scanning %} アラートを表示します](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [{% data variables.product.prodname_secret_scanning %} アラートを解決、取り消し、再オープンします](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| リポジトリ内の [{% data variables.product.prodname_secret_scanning %} アラートを受信する追加の個人またはチームを指定します](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}

[1] リポジトリの作者とメンテナは、自分のコミットのアラート情報のみを表示できます。

## 参考資料

- "[Organization のリポジトリへのアクセス管理](/articles/managing-access-to-your-organization-s-repositories)"
- "[外部のコラボレータを Organization のリポジトリに追加する](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Organization のプロジェクト ボード権限](/articles/project-board-permissions-for-an-organization)"
