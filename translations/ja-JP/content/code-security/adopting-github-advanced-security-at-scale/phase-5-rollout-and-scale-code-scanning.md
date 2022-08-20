---
title: 'フェーズ5: Code scanningのロールアウトとスケール'
intro: '利用できるAPIを活用し、以前に収集したリポジトリデータを使って、Enterprise内のチームと言語ごとにプログラムから{% data variables.product.prodname_code_scanning %}をロールアウトできます。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Code scanningのロールアウト
miniTocMaxHeadingLevel: 3
---

{% note %}

この記事は、{% data variables.product.prodname_GH_advanced_security %}の大規模な採用に関するシリーズの一部です。 このシリーズの以前の記事としては「[フェーズ4: 内部ドキュメンテーションの作成](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)」を参照してください。

{% endnote %}

### Code scanningの有効化

[フェーズ2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)で照合したデータを使い、GHASの有効化を開始し、続いてリポジトリで1つの言語ごとに{% data variables.product.prodname_code_scanning %}の有効化を開始できます。 GHASを有効化するこのステップバイステップのプロセスは、以下のようになります。

1. リポジトリでのGHASの有効化。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
1. リポジトリのデフォルトブランチに対して、その言語に対するCodeQLの実行方法の例を含む`codeql-analysis.yml`ファイルを持つPull Requestを作成する。 詳しい情報については[Pull Requestの作成](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)を参照してください。
1. Pull Requestが作成された理由を説明するIssueをリポジトリに作成する。 作成するIssue歯、すべてのユーザに送られた以前の会話へのリンクを含むことができますが、Pull Requestが導入する変更、チームが取るべき次のステップ、チームが負う責任が何か、チームがどのように{% data variables.product.prodname_code_scanning %}を使うべきか、といったことを説明することもできます。 詳しい情報については、「[Issue を作成する](/issues/tracking-your-work-with-issues/creating-an-issue)」を参照してください。

最初の2つのステップを完了させる[ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement)というツールが公開されています。 妥当な場合には、多くの言語についてghas-enablementツールを再実行できます。 たとえば、JavaScript、TypeScript、Python、Goはおそらく同様のビルドプロセスを持っているので、同じようなCodeQLの分析ファイルが利用できます。 ghas-enablementツールは、Java、C、C++といった言語でも利用できますが、これらのツールのビルドとコンパイルの方法は様々なので、よりターゲットを明確にしたCodeQL分析ファイルを作成しなければならないかもしれません。

{% note %}

**ノート:** {% data variables.product.prodname_actions %}を{% data variables.product.prodname_code_scanning %}をコントロールするために使おうとしており、[ghas-enablementツール](https://github.com/NickLiffen/ghas-enablement)を使わないのであれば、`.github/workflow`ディレクトリへのAPIアクセスがないことは覚えておいてください。 これはすなわち、自動化の基礎となるgitクライアントなしではスクリプトを作成できないということです。 回避策としては、gitクライアントを持つマシンもしくはコンテナでbashのスクリプトを活用する方法があります。 gitクライアントは、`codeql-analysis.yml`ファイルがある`.github/workflows`ディレクトリでのファイルのプッシュやプルができます。

{% endnote %}

`codeql-analysis.yml`ファイルをリポジトリのデフォルトブランチにだけプッシュするだけにしないことが重要です。 Pull Requestを使うことで、開発チームにレビューとマージのための所有権を与えることになり、開発チームは{% data variables.product.prodname_code_scanning %}について学び、プロセスに参加することになります。

自動化によって作成されたPull RequestのURLを取得し、毎週アクティビティについて確認し、どれがクローズされたのかを確認すべきです。 数週間後、Pull Requestがマージされないままになっていれば、別のIssueを作成する化、内部的なメールを送信するとよいでしょう。

### 対象分野の専門家の育成

そして、有効化の次のステージである、内部的な対象分野の専門家（subject matter experts = SMEs）の育成と企業ミーティングの手配へと進むことができます。 リポジトリでのPull Request及びIssueのオープンは、採用の大部分に取り組むことになりますが、これは特定のビルドプロセス、フレームワーク、ライブラリが特定の機能フラグを有効化することを必要とするような、1度かぎりのユースケースには対処しません。 特にJava、C、C++において採用率を高めるには、よりパーソナライズされた実践的なアプローチが必要です。

大規模なグループでのロールアウトに関する教育と議論のために、特定のトピックに関する定期的な企業ミーティングを行うのは良い考えです。 一度に1つのチームと作業するのに比べ、これは大量のリポジトリを持つ企業にとってははるかに時間効率の良いやり方です。 チームは、自分たちに関係するセッションに来ることができます。 以下は、以前に実施されたことのあるセッションの例です:

- コンテナで {% data variables.product.prodname_code_scanning_capc %}
- {% data variables.product.prodname_code_scanning_capc %}とJava Struts
- {% data variables.product.prodname_code_scanning_capc %}とJSP

ターゲットを絞ったミーティングを立ち上げるために、リポジトリ間での様々な言語の分布に関して収集したデータを利用できます。

{% note %}

このシリーズの次の記事として、「[フェーズ6: Secret scanningのロールアウトとスケール](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)」を参照してください。

{% endnote %}
