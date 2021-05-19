---
title: 私のディスク容量はいくつですか？
redirect_from:
  - /articles/what-is-the-size-limit-for-a-repository/
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
intro: '{% data variables.product.product_name %} は、すべての Git リポジトリに対して十分なストレージを提供するよう努めていますが、ファイルとリポジトリのサイズにはハードリミットがあります。'
versions:
  free-pro-team: '*'
---
{% data reusables.large_files.use_lfs_tip %}

### ファイルとリポジトリのサイズ制限

ユーザのパフォーマンスと信頼性を確保するため、リポジトリ全体の健全性のシグナルを積極的に監視しています。 リポジトリの健全性は、サイズ、コミット頻度、コンテンツ、構造など、さまざまな相互作用要因の機能よるものです。

リポジトリは小さく保ち、理想としては 1GB 未満、および 5GB 未満にすることを強くお勧めします。 リポジトリが小さいほど、クローン作成が速く、操作やメンテナンスが簡単になります。 リポジトリ内の個々のファイルは、{% data variables.large_files.max_github_size %} の最大サイズ制限に厳密に制限されています。 詳細は「[大きなファイルを使って作業する](/github/managing-large-files/working-with-large-files)」を参照してください。

リポジトリがインフラストラクチャに過度に影響する場合は、{% data variables.contact.github_support %} から是正措置を求めるメールが送られてくる場合があります。 特に多くのコラボレータが参加している大規模なプロジェクトでは、柔軟に対応するよう努めており、可能な限り解決策を見つけるために協力します。 リポジトリのサイズと全体的な健全性を効果的に管理することで、リポジトリがインフラストラクチャに影響を与えることを防ぎます。 [`github/git-sizer`](https://github.com/github/git-sizer) リポジトリには、リポジトリ分析のためのアドバイスとツールがあります。

{% note %}

**メモ:** ブラウザ経由でリポジトリにファイルを追加する場合、そのファイルは {% data variables.large_files.max_github_browser_size %} 以下でなければなりません。 詳細は「[ファイルをリポジトリに追加する](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)」を参照してください。

{% endnote %}

### バックアップ

Git はバックアップツールとして機能するようには設計されていません。 ただし、[Arq](https://www.arqbackup.com/)、[Carbonite](http://www.carbonite.com/)、[CrashPlan](https://www.crashplan.com/en-us/) など、バックアップを実行するために特別に設計された多くのソリューションがあります。

### データベースダンプ

Git などのバージョン管理システムは、大きな SQL ファイルを処理するようには設計されていません。 大規模なデータベースを他の開発者と共有するには、[Dropbox](https://www.dropbox.com/) の使用をお勧めします。

Git を運用サーバーのバックアップに使用しないでください。 詳細は「[バックアップ](/github/managing-large-files/what-is-my-disk-quota#backups)」を参照してください。

### 外部依存関係

外部依存関係によって、Git リポジトリが非常に大きくなる場合があります。 リポジトリが外部依存関係で埋まってしまうことを避けるために、パッケージマネージャーの使用をお勧めします。 一般的な言語で人気のあるパッケージマネージャーには、[Bundler](http://bundler.io/)、[Node のパッケージマネージャー](http://npmjs.org/)、[Maven](http://maven.apache.org/) などがあります。 これらのパッケージマネージャーは Git リポジトリの直接使用をサポートしているため、事前にパッケージ化されたソースは必要ありません。

### パッケージリリースバージョン

リポジトリ内にコンパイルされたコードとプレパッケージされたリリースを配布することをおすすめしません。 詳しい情報については、「[大きなバイナリを配布する](/github/managing-large-files/distributing-large-binaries)」を参照してください。

### 既存のリポジトリの履歴

すでに非常に大きいリポジトリがある場合は、リポジトリの履歴から大きなファイルを削除することにより、リポジトリのサイズを縮小できます。 詳細は「[リポジトリの履歴からファイルを削除する](/github/managing-large-files/removing-files-from-a-repositorys-history)」を参照してください。
