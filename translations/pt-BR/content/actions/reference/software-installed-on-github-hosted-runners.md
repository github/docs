---
title: Software instalado em executores hospedados no GitHub
intro: 'Este artigo faz vínculos com as referências para os pacotes e ferramentas disponíveis nos ambientes virtuais hospedados no {% data variables.product.prodname_dotcom %}.'
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

As ferramentas incluídas nos executores hospedados no {% data variables.product.prodname_dotcom %} são atualizadas semanalmente. Para a lista mais recente das ferramentas incluídas para cada sistema operacional do executor, consulte os links abaixo:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2016-Readme.md)
* [MacOS 10.15](https://github.com/actions/virtual-environments/blob/master/images/macos/macos-10.15-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}

Executores hospedados no {% data variables.product.prodname_dotcom %} incluem as ferramentas integradas padrão do sistema operacional, além dos pacotes listados nas referências acima. Por exemplo, os executores do Ubuntu e do macOS incluem `grep`, `find` e `which`, entre outras ferramentas-padrão.

Se houver uma ferramenta que você queira solicitar, abra um problema em [actions/virtual-environments](https://github.com/actions/virtual-environments).
