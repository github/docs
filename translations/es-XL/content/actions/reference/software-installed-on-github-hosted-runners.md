---
title: Software instalado en los ejecutores alojados en GitHub
intro: 'Este artículo se vincula con las referencias para los paquetes y las herramientas disponibles en los entornos virtuales alojados en {% data variables.product.prodname_dotcom %}.'
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

Las herramientas incluidas en los ejecutores alojados en {% data variables.product.prodname_dotcom %} se actualizan semanalmente. Para obtener la lista más reciente de herramientas incluidas para cada sistema operativo de ejecutor, consulta los enlaces que figuran a continuación:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2016-Readme.md)
* [MacOS 10.15](https://github.com/actions/virtual-environments/blob/master/images/macos/macos-10.15-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}

Los ejecutores alojados en {% data variables.product.prodname_dotcom %} incluyen las herramientas integradas predeterminadas del sistema operativo, además de los paquetes enumerados en las referencias anteriores. Por ejemplo, los ejecutores de Ubuntu y macOS incluyen `grep`, `find` y `which`, entre otras herramientas predeterminadas.

Si hay alguna herramienta que quieras solicitar, abre una propuesta en [actions/virtual-environments](https://github.com/actions/virtual-environments).
