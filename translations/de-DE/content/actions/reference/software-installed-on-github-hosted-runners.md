---
title: auf GitHub-gehosteten Runnern installierte Software
intro: 'Dieser Artikel verweist auf Referenzen für die Pakete und Tools, die in {% data variables.product.prodname_dotcom %}-gehosteten virtuellen Umgebungen verfügbar sind.'
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

Die Tools, die auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern enthalten sind, werden wöchentlich aktualisiert. Die neueste Liste der mitgelieferten Werkzeuge für jedes Runner-Betriebssystem findest Du unter den folgenden Links:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/master/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/master/images/win/Windows2016-Readme.md)
* [MacOS 10.15](https://github.com/actions/virtual-environments/blob/master/images/macos/macos-10.15-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}

{% data variables.product.prodname_dotcom %}-gehostete Runner enthalten zusätzlich zu den oben aufgeführten Paketen die standardmäßig integrierten Tools des Betriebssystems. Zum Beispiel beinhalten Ubuntu und macOS Läufer `grep`, `find`, und `which` neben anderen Standard-Tools.

Wenn Sie ein bestimmtes Tool anfordern möchten, öffnen Sie bitte einen Issue unter [actions/virtual-environments](https://github.com/actions/virtual-environments).
