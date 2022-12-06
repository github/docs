---
title: 'フェーズ 5: Code Scanning のロールアウトとスケーリング'
intro: '使用可能な API を利用し、先ほど収集したリポジトリ データを使用して、企業全体で Team 別および言語別に {% data variables.product.prodname_code_scanning %} をプログラムでロールアウトできます。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: abbcdf4c1e4a231a568e8d8cd488877ebdf2fd9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109103'
---
{% note %}

この記事は、大規模な {% data variables.product.prodname_GH_advanced_security %} の導入に関するシリーズの一部です。 このシリーズの前の記事については、「[フェーズ 4: 内部ドキュメントの作成](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)」を参照してください。

{% endnote %}

### Code Scanning の有効化

[フェーズ 2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale) で照合したデータを使用して、GHAS を有効にしてから、リポジトリで {% data variables.product.prodname_code_scanning %} (一度に 1 つの言語) を有効にすることができます。 GHAS を有効にする手順は次のようになります。

1. リポジトリで GHAS を有効にします。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
1. その言語の CodeQL を実行する方法の例を含む `codeql-analysis.yml` ファイルを使用して、リポジトリの既定のブランチに対して Pull Request を作成します。 詳細については、「[プルリクエストの作成方法](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)」を参照してください。
1. リポジトリに Issue を作成して、Pull Request が発生した理由を説明します。 作成する Issue には、すべてのユーザーに送信された以前の通信へのリンクを含めることができますが、Pull Request が導入する変更、Team が実行する必要がある次の手順、Team の責任、Team が {% data variables.product.prodname_code_scanning %} を使用する方法を説明することもできます。 詳細については、「[Issue の作成](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。

[ghas 対応ツール](https://github.com/NickLiffen/ghas-enablement)と呼ばれる、最初の 2 つの手順を完了する一般公開されているツールがあります。 ghas 対応ツールは、意味のある言語のバッチで再実行できます。 たとえば、JavaScript、TypeScript、Python、Go はビルド プロセスが似ている可能性があるため、同様の CodeQL 分析ファイルを使用できます。 ghas 対応ツールは、Java、C、C++ などの言語にも使用できますが、これらの言語のビルドとコンパイルの方法は多様であるため、よりターゲットを絞った CodeQL 分析ファイルを作成する必要がある場合があります。

{% note %}

**メモ:** {% data variables.product.prodname_actions %} を使用して {% data variables.product.prodname_code_scanning %} を制御する予定であるが、[ghas 対応ツール](https://github.com/NickLiffen/ghas-enablement)を使用しない場合は、`.github/workflow` ディレクトリへの API アクセス権がないことに注意してください。 つまり、自動化の基になる Git クライアントなしでスクリプトを作成することはできません。 回避策は、Git クライアントを持つマシンまたはコンテナーで bash スクリプトを利用することです。 Git クライアントは、`codeql-analysis.yml` ファイルが配置されている `.github/workflows` ディレクトリにファイルをプッシュおよびプルできます。

{% endnote %}

単にリポジトリの既定のブランチに `codeql-analysis.yml` ファイルをプッシュしないようにしてください。 Pull Request を使用すると、レビューおよびマージするために開発 Team に所有権が与えられ、開発 Team は {% data variables.product.prodname_code_scanning %} について学習でき、Team がプロセスに関与するようになります。 

自動化によって作成された Pull Request URL をキャプチャし、アクティビティを毎週確認して、どのアクティビティがクローズしているかを確認する必要があります。 数週間後に、Pull Request がマージされていない場合は、別の Issue を作成したり、内部メールを送信したりすると良いでしょう。

### 領域の専門家の作成

その後、次の有効化の段階に進むことができます。この段階では、内部の領域の専門家 (SME) を作成し、会社の会議を手配します。 リポジトリで Pull Request や Issue を開くと、導入の大部分に対応できる可能性があります。ただし、特定のビルド プロセス、フレームワーク、またはライブラリで特定の機能フラグを有効にする必要がある 1 回限りのユース ケースには対応できません。 特に Java、C、C++ に対する適合性を高めるには、よりパーソナライズされた実践的なアプローチが必要です。

特定のトピックに関して会社の会議を定期的に開き、より大きなグループとの間でロールアウトについて教育し議論することをお勧めします。 これは、一度に 1 Team ずつと作業する場合と比較して、何千ものリポジトリを持つ会社にとって、はるかに時間効率が高くなります。 Team は、関連するセッションに参加できます。 前に実行されたセッションの例を次に示します。

- コンテナーでの {% data variables.product.prodname_code_scanning_capc %}
- {% data variables.product.prodname_code_scanning_capc %} と Java Struts
- {% data variables.product.prodname_code_scanning_capc %} と JSP

リポジトリ間での異なる言語の配布に関して収集したデータを使用して、対象となる会議を作成できます。

{% note %}

このシリーズの次の記事については、「[フェーズ 6: Secret Scanning のロールアウトとスケーリング](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)」を参照してください。

{% endnote %}
