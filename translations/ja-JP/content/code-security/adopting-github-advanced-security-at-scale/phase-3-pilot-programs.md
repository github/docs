---
title: 'フェーズ 3: パイロット プログラム'
intro: 最初のロールアウトのパイロットに使用する影響の大きいいくつかのプロジェクトやチームから始めるとメリットが得られる場合があります。 これにより、社内の最初のグループが GHAS に慣れ、GHAS を有効にして構成する方法を学習し、GHAS に関する強固な基盤を構築してから、会社の残りの部分にロールアウトすることができます。
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d56427173580558a192d0709ae700cbd497e2935
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109109'
---
{% note %}

この記事は、{% data variables.product.prodname_GH_advanced_security %} の大規模な導入に関するシリーズの一部です。 このシリーズの前の記事については、「[フェーズ 2: 大規模な有効化の準備](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)」をご覧ください。

{% endnote %}

## パイロット プログラムについて

GHAS のパイロット ロールアウトで使用する影響の大きいプロジェクトまたはチームをいくつか特定することをお勧めします。 これにより、社内の最初のグループが GHAS に慣れ、GHAS に関する強固な基盤を構築してから、企業の残りの部分にロールアウトすることができます。

このフェーズのこれらの手順は、お客様の会社で GHAS を有効にし、その機能を使い始めて、結果を確認するのに役立ちます。 {% data variables.product.prodname_professional_services %} と協力している場合は、担当者がオンボーディング セッション、GHAS ワークショップ、必要に応じたトラブルシューティングを通じて、このプロセス全体の追加の支援を提供できます。

パイロット プロジェクトを始める前に、最初のミーティング、中間レビュー、パイロット完了時の総括セッションなど、チームのミーティングをいくつかスケジュールすることをお勧めします。 これらのミーティングは、必要に応じて調整を行い、チームがパイロットを正常に完了できる状態で、準備を行いサポートを受けていることを確認するのに役立ちます。

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} インスタンスに対して GHAS をまだ有効にしていない場合は、「[エンタープライズの GitHub Advanced Security の有効化](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)」を参照してください。

{% endif %}

GHAS 機能をリポジトリごとに、またはパイロットに参加しているすべての Organization のすべてのリポジトリで有効にして、各パイロット プロジェクトについて GHAS を有効にする必要があります。 詳細については、「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」または「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

## {% data variables.product.prodname_code_scanning %} のパイロット

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} インスタンスで {% data variables.product.prodname_code_scanning %} を有効にするには、「[アプライアンスのコード スキャンの構成](/admin/advanced-security/configuring-code-scanning-for-your-appliance)」を参照してください。

{% elsif ghae %}

{% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_code_scanning %} を有効にするには、ランナーが {% data variables.product.prodname_ghe_managed %} でワークフローを実行できるようにする必要があります。「[{% data variables.product.prodname_ghe_managed %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)」をご覧ください。

{% endif %}

{% data variables.product.prodname_actions %} ワークフローを作成して [CodeQL アクション](https://github.com/github/codeql-action/)を実行すると、リポジトリでコード スキャンを実行できます。 {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} では、既定で [GitHub ホステッド ランナー](/actions/using-github-hosted-runners/about-github-hosted-runners) が使用されますが、独自のハードウェア仕様で独自のランナーをホストする予定の場合は、これをカスタマイズすることができます。 詳細については、「[セルフホスト ランナーについて](/actions/hosting-your-own-runners)」を参照してください。{% endif %}

{% data variables.product.prodname_actions %} の詳細については、次を参照してください。
  - [GitHub Actions について](/actions/learn-github-actions)
  - [GitHub Actions を理解する](/actions/learn-github-actions/understanding-github-actions)
  - [ワークフローをトリガーするイベント](/actions/learn-github-actions/events-that-trigger-workflows)
  - [フィルター パターンのチート シート](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

パイロット プログラムの一環として、リポジトリごとに {% data variables.product.prodname_code_scanning %} を有効にすることをお勧めします。 詳細については、「[リポジトリの code scanning の設定](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)」を参照してください。

多くのリポジトリでコード スキャンを有効にする場合は、プロセスのスクリプトを記述することをお勧めします。

{% data variables.product.prodname_actions %} ワークフローを複数のリポジトリに追加する pull request を開くスクリプトの例については、PowerShell を使用する例の場合は [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) リポジトリを、PowerShell を使わず代わりに NodeJS を使用したいチームの場合は [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) を参照してください。

初めてコード スキャンを実行すると、結果が見つからなかったり、普通ではない数の結果が返されたりする場合があります。 以降のスキャンでフラグが設定される内容を調整できます。 詳細については、「[code scanning を構成する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)」を参照してください。

GitHub code scanning で他のサードパーティ製コード分析ツールを使用する場合は、アクションを使用して、それらのツールを GitHub 内で実行できます。 または、サードパーティ製ツールによって生成された結果を SARIF ファイルとしてコード スキャンにアップロードすることもできます。 詳細については、「[code scanning と統合する](/code-security/code-scanning/integrating-with-code-scanning)」を参照してください。

## {% data variables.product.prodname_secret_scanning %} のパイロット

GitHub は、誤ってコミットされたシークレットの不正使用を防ぐために、リポジトリで既知の種類のシークレットをスキャンします。

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} インスタンスでシークレットのスキャンを有効にするには、「[アプライアンスでシークレットのスキャンを構成する](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)」を参照してください。

{% endif %}

リポジトリごとにシークレット スキャン機能を有効にするか、プロジェクトに参加しているすべての組織のすべてのリポジトリで機能を有効にすることにより、各パイロット プロジェクトについて機能を有効にする必要があります。 詳しくは、「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」または「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」をご覧ください。

Enterprise 固有のカスタム パターン、特に {% data variables.product.prodname_secret_scanning %} のパイロットを行うプロジェクトに関連するパターンを照合した場合は、それらを構成できます。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)に関する記事を参照してください。

リポジトリにチェックインされたシークレットのアラートを表示して閉じる方法については、「[Secret scanning からのアラートを管理する](/code-security/secret-scanning/managing-alerts-from-secret-scanning)」を参照してください。

{% note %}

このシリーズの次の記事については、「[フェーズ 4: 内部ドキュメントを作成する](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)」をご覧ください。

{% endnote %}
