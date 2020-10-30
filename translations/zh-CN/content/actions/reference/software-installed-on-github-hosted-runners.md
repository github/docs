---
title: 在 GitHub 托管的运行器上安装的软件
intro: '本文链接到 {% data variables.product.prodname_dotcom %} 托管的虚拟环境中可用包和工具的参考。'
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

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_dotcom %} 托管的运行器中包含的工具每周更新。 有关每个运行器操作系统包含的工具最新列表，请参阅以下链接：

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2016-Readme.md)
* [MacOS 10.15](https://github.com/actions/virtual-environments/blob/master/images/macos/macos-10.15-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}

{% data variables.product.prodname_dotcom %} 托管的运行器除了上述参考中列出的包之外，还包括操作系统的默认内置工具。 例如，Ubuntu 和 macOS 运行器除了其他默认工具之外，还包括 `grep`、`find` 和 `which`。

如果有您想要请求的工具，请在 [actions/virtual-environments](https://github.com/actions/virtual-environments) 打开一个议题。
