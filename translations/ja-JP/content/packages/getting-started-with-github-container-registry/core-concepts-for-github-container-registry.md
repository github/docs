---
title: GitHub Container Registry の中核的概念
intro: '弊社のサイトおよびドキュメンテーションで使用する、一般的な {% data variables.product.prodname_github_container_registry %} 用語を以下に挙げます。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### {% data variables.product.prodname_github_container_registry %}

{% data variables.product.prodname_github_container_registry %} とは、Docker イメージをサポートする、コンテナのレジストリです。 詳しい情報については「[{% data variables.product.prodname_github_container_registry %}について](/packages/getting-started-with-github-container-registry/about-github-container-registry)」を参照してください。

### Package

パッケージは自己完結している再利用可能なソフトウェアで、開発者がコードやメタデータといったものを共通の場所にまとめて、他の人が利用できるようにしたものです。 パッケージのメタデータには、バージョン番号、名前、コードの依存関係を含めることができます。 パッケージは、プロジェクトの開発やテストに必要なフレームワーク、コードの品質を高めるための文法チェッカー、アプリケーションを強化するための業界標準の機械学習ツールといった、一般的な問題に対するソリューションの利用および配布を容易にします。 パッケージは多くのエコシステムで存在します。 たとえば、Node.js と Java のコードやコンテナイメージをパッケージ化できます。

### コンテナ

コンテナとは、あらゆるプラットフォームに標準化された方法でソフトウェアを確実にデプロイするために設計されたソフトウェアのユニットです。 コンテナは、お使いのオペレーティングシステムで、同じホストカーネル上のさまざまなソフトウェアパッケージとコンポーネントを実行できる独立した仮想環境またはインスタンスとして動作します。 コンテナは、実行するために独自の仮想ハードウェアを含める必要がないため、仮想マシンよりも使用するリソースか少なくなります。 コンテナは、Dockerfile などのコンテナイメージと、コンテナクライアントまたはランタイムプログラムを使用して作成されます。

### コンテナイメージ

コンテナイメージとは、コンテナからアプリケーションを実行するためのソフトウェア要件を指定するパッケージアーカイブの一種です。 コンテナイメージには通常、アプリケーションのコード、ライブラリ、およびランタイム命令が含まれます。 どこでイメージがデプロイ、実行されても詳細にわたるまで確実に同じイメージが使用されるようにするため、コンテナイメージは自動的にバージョン管理され、コンテナ内にいったんコンテナイメージが構築されると変更できません。

### Dockerコンテナ

Docker コンテナは、Docker プラットフォーム上に構築されたオープンソースコンテナの一種です。 Docker のオリジナルイメージフォーマットは OCI (Open Container Initiative) イメージ仕様となっています。 詳しい情報については、「[Docker のドキュメンテーション](https://docs.docker.com/get-started/overview/)」を参照してください。
