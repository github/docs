---
title: GitHubホストランナーにインストールされるソフトウェア
intro: 'この記事は、{% data variables.product.prodname_dotcom %}がホストする仮想環境で利用できるパッケージとツールのリファレンスにリンクします。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/software-in-virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/software-in-virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

{% data variables.product.prodname_dotcom %}ホストランナーに含まれるツールは、毎週更新されます。 各ランナーオペレーティングシステム用に含まれるツールの最新のリストについては、以下のリンクを参照してください。

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2016-Readme.md)
* [MacOS 10.15](https://github.com/actions/virtual-environments/blob/master/images/macos/macos-10.15-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}

{% data variables.product.prodname_dotcom %}ホストランナーには、オペレーティングシステムのデフォルトの組み込みツールに加え、上のリファレンスのリスト内のパッケージにが含まれています。 たとえば、Ubuntu及びmacOSのランナーには、`grep`、`find`、`which`やその他のデフォルトのツールが含まれています。

リクエストしたいツールがある場合、[actions/virtual-environments](https://github.com/actions/virtual-environments) で Issue を開いてください。
