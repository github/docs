---
title: Especificações para executores hospedados no GitHub
intro: 'O {% data variables.product.prodname_dotcom %} oferece máquinas virtuais hospedadas para executar fluxos de trabalho. A máquina virtual tem um ambiente de ferramentas, pacotes e configurações disponíveis para uso no {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre os executores hospedados no {% data variables.product.prodname_dotcom %}

Um executor hospedado no {% data variables.product.prodname_dotcom %} é uma máquina virtual hospedada pelo {% data variables.product.prodname_dotcom %} com o aplicativo do executor {% data variables.product.prodname_actions %} instalado. O {% data variables.product.prodname_dotcom %} oferece executores com os sistemas operacionais Linux, Windows e macOS.

Ao usar um executor hospedada no {% data variables.product.prodname_dotcom %}, a manutenção e as atualizações da máquina são feitas para você. É possível executar fluxos de trabalho diretamente na máquina virtual ou em um contêiner Docker.

Você pode especificar o tipo de executor para cada trabalho em um fluxo de trabalho. Cada trabalho em um fluxo de trabalho é executado em uma nova instância da máquina virtual. Todas as etapas de um trabalho são executadas na mesma instância da máquina virtual, o que permite que ações de cada trabalho compartilhem informações usando o sistema de arquivos.

{% data reusables.github-actions.runner-app-open-source %}

#### Hosts da nuvem para os executores hospedados em {% data variables.product.prodname_dotcom %}

O {% data variables.product.prodname_dotcom %} hospeda executores do Linux e Windows no Standard_DS2_v2 máquinas virtuais no Microsoft Azure com o aplicativo do executor {% data variables.product.prodname_actions %} instalado. A o aplicativo do executor hospedado no {% data variables.product.prodname_dotcom %} é uma bifurcação do agente do Azure Pipelines. Os pacotes ICMP de entrada estão bloqueados para todas as máquinas virtuais do Azure. Portanto, é possível que os comandos ping ou traceroute não funcionem. Para obter mais informações sobre os recursos da máquina Standard_DS2_v2, consulte "[Dv2 e DSv2-series](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)" na documentação do Microsoft Azure.

{% data variables.product.prodname_dotcom %} hospedas executores do macOS na nuvem do macOS do próprio {% data variables.product.prodname_dotcom %}.

#### Privilégios administrativos os executores hospedados no {% data variables.product.prodname_dotcom %}

As máquinas virtuais Linux e macOS executam usando autenticação sem senha `sudo`. Quando precisar executar comandos ou instalar ferramentas que exigem mais permissões que o usuário atual possui, você pode usar `sudo` sem a necessidade de fornecer uma senha. Para obter mais informações, consulte o "[Manual do Sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)".

As máquinas virtuais do Windows estão configuradas para ser executadas como administradores com Controle de Conta de Usuário (UAC) desativado. Para obter mais informações, consulte "[Como funciona o Controle de Conta de Usuário](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" na documentação do Windows.

### Executores e recursos de hardware compatíveis

Cada máquina virtual tem os mesmos recursos de hardware disponíveis.

- CPU dual core
- 7 GB de memória RAM
- 14 GB de espaço de disco SSD

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}
{% data reusables.github-actions.macos-runner-preview %}

Lista de registros de fluxo de trabalho do executor usado para executar um trabalho. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

### Software compatível

As ferramentas do software incluídas em executores hospedados em {% data variables.product.prodname_dotcom %} são atualizadas semanalmente. Para a lista mais recente das ferramentas incluídas para cada sistema operacional do executor, consulte os links abaixo:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2016-Readme.md)
* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md)
* [macOS 11.0](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11.0-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}
{% data reusables.github-actions.macos-runner-preview %}

Executores hospedados no {% data variables.product.prodname_dotcom %} incluem as ferramentas integradas padrão do sistema operacional, além dos pacotes listados nas referências acima. Por exemplo, os executores do Ubuntu e do macOS incluem `grep`, `find` e `which`, entre outras ferramentas-padrão.

Os registros do fluxo de trabalho incluem um link para as ferramentas pré-instaladas no executor. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Se houver uma ferramenta que você queira solicitar, abra um problema em [actions/virtual-environments](https://github.com/actions/virtual-environments).

### Endereços IP

{% note %}

**Observação:** Se você usar uma lista de permissões de endereço IP para a sua organização ou conta corporativa de {% data variables.product.prodname_dotcom %}, você não poderá usar executores hospedados em {% data variables.product.prodname_dotcom %}. Em vez disso, deverá usar executores auto-hospedados. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% endnote %}

Executores do Windows e Ubuntu são hospedados no Azure e têm os mesmos intervalos de endereços IP dos centros de dados Azure. Atualmente, todos os executores hospedados em {% data variables.product.prodname_dotcom %} do Windows e Ubuntu encontram-se nas seguintes regiões do Azure:

- Leste dos EUA (`eastus`)
- Leste dos EUA 2 (`eastus2`)
- Oeste dos EU 2 (`westus2`)
- Centro dos EUA (`centralus`)
- Centro-sul dos EUA (`southcentralus`)

A Microsoft atualiza os intervalos de endereços IP Azure semanalmente em um arquivo JSON que você pode baixar no site [Azure intervalos IP e tags de serviço - nuvem pública](https://www.microsoft.com/en-us/download/details.aspx?id=56519). Você pode usar esse intervalo de endereços IP se precisar de uma lista de permissão para evitar acesso não-autorizado em seus recursos internos.

O arquivo JSON contém um array chamado `values` (valores). Dentro desse array, você pode encontrar os endereços IP suportados em um objeto com `name` e `id` da região Azure, por exemplo `"AzureCloud. astus2"`.

Você pode encontrar os intervalos de endereços IP compatíveis no objeto `"addressPrefixes"`. Este é um exemplo resumido do arquivo JSON.

```json
{
  "changeNumber": 84,
  "cloud": "Public",
  "values": [
    {
      "name": "AzureCloud.eastus2",
      "id": "AzureCloud.eastus2",
      "properties": {
        "changeNumber": 33,
        "region": "eastus2",
        "platform": "Azure",
        "systemService": "",
        "addressPrefixes": [
          "13.68.0.0/17",
          "13.77.64.0/18",
          "13.104.147.0/25",
          ...
        ]
      }
    }
  ]
}
```

### Sistemas de arquivos

O {% data variables.product.prodname_dotcom %} executa ações e comandos de shell em diretórios específicos na máquina virtual. Os caminhos dos arquivos nas máquinas virtuais não são estáticos. Use as variáveis de ambiente que {% data variables.product.prodname_dotcom %} fornece para construir caminhos de arquivos para os diretórios `home`, `workspace` e `workflow`.

| Diretório             | Variável de ambiente | Descrição                                                                                                                                                                                                          |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `home`                | `HOME`               | Contém dados relacionados ao usuário. Por exemplo, esse diretório pode conter credenciais de uma tentativa de login.                                                                                               |
| `workspace`           | `GITHUB_WORKSPACE`   | As ações e comandos do shell executados neste diretório. Uma ação pode modificar o conteúdo desse diretório, que fica acessível nas ações subsequentes.                                                            |
| `workflow/event.json` | `GITHUB_EVENT_PATH`  | O payload do `POST` do evento webhook que acionou o fluxo de trabalho. O {% data variables.product.prodname_dotcom %} o rescreve sempre que uma ação é executada para isolar o conteúdo do arquivo entre as ações. |

Para obter uma lista das variáveis de ambiente que {% data variables.product.prodname_dotcom %} cria para cada fluxo de trabalho, consulte "[Usar variáveis de ambiente](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

#### Sistema de arquivos do contêiner Docker

Ações executadas em contêineres Docker têm diretórios estáticos no caminho `/github`. No entanto, é altamente recomendável usar as variáveis de ambiente padrão para elaborar caminhos de arquivos em contêineres do Docker.

O {% data variables.product.prodname_dotcom %} reserva o prefixo de caminho `/github` e cria três diretórios para ações.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% if currentVersion == "free-pro-team@latest" %}

### Leia mais
- "[Gerenciar a cobrança para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"

{% endif %}
