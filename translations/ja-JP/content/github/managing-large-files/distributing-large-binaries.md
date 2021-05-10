---
title: 大きなバイナリを配布する
intro: プロジェクトによっては、ソースコードの配布に加えて、バイナリやインストーラーなどの大きなファイルの配布が必要となるものがあります。
redirect_from:
  - /articles/distributing-large-binaries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

リポジトリ内で大きなファイルを配布する必要がある場合は、{% data variables.product.product_location %}でリリースを作成できます。 リリースでは、他の人が使用できるように、ソフトウェア、リリースノート、バイナリファイルへのリンクをパッケージ化できます。 詳細は「[リリースについて](/github/administering-a-repository/about-releases)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

リリース内のバイナリファイルの合計サイズや、それらの配布に使用される帯域は制限されません。 ただし、個々のファイルは{% data variables.large_files.max_lfs_size %}未満でなければなりません。

{% endif %}

{% data reusables.large_files.use_lfs_tip %}
