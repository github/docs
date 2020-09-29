---
title: Software installed on GitHub-hosted runners
intro: 'This article links to references for the packages and tools available in {% data variables.product.prodname_dotcom %}-hosted virtual environments.'
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

The tools included in {% data variables.product.prodname_dotcom %}-hosted runners are updated weekly. For the latest list of included tools for each runner operating system, see the links below:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2016-Readme.md)
* [MacOS 10.15](https://github.com/actions/virtual-environments/blob/master/images/macos/macos-10.15-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}

{% data variables.product.prodname_dotcom %}-hosted runners include the operating system's default built-in tools, in addition to the packages listed in the above references. For example, Ubuntu and macOS runners include `grep`, `find`, and `which`, among other default tools.

If there is a tool that you'd like to request, please open an issue at [actions/virtual-environments](https://github.com/actions/virtual-environments).
