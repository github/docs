---
title: Sobre executores auto-hospedados
intro: 'Você pode hospedar seus próprios executores e personalizar o ambiente usado para executar trabalhos nos seus fluxos de trabalho do {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: b570dbe3a5df607f0b02e0c7a42a6a7cfb860c80
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107562'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre executores auto-hospedados

Um executor auto-hospedado é um sistema que você implanta e gerencia para executar trabalhos por meio do {% data variables.product.prodname_actions %} no {% ifversion ghae or ghec %}{% data variables.product.product_name %}{% else %}em {% data variables.location.product_location %}{% endif %}. Para obter mais informações sobre o {% data variables.product.prodname_actions %}, confira "[Noções básicas sobre o {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}"."{% elsif ghec or ghes or ghae %}" e "[Sobre o {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

Você pode adicionar runners auto-hospedados em vários níveis na hierarquia de gerenciamento:
- Runners em nível de repositório são dedicados a um único repositório.
- Executores no nível da organização podem processar trabalhos para vários repositórios em uma organização.
- Runners de nível empresarial podem ser atribuídos a várias organizações em uma conta corporativa.

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %} Quando uma nova versão for lançada, o aplicativo do executor automaticamente é atualizado quando um trabalho é atribuído ao executor ou em uma semana após a versão, caso o executor não tenha recebido nenhum trabalho.

{% ifversion ghes %} {% note %}

**Observação:** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

Para obter mais informações sobre como instalar e usar executores auto-hospedados, confira "[Como adicionar executores auto-hospedados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)" e "[Como usar executores auto-hospedados em um fluxo de trabalho](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)".

## {% ifversion fpt or ghec or ghes %}Diferenças entre os executores hospedados no {% data variables.product.prodname_dotcom %} e {% elsif ghae %}Características de {% endif %}executores auto-hospedados

{% ifversion fpt or ghec or ghes %} Os executores hospedados no {% data variables.product.prodname_dotcom %} oferecem uma forma mais rápida e simples de executar os fluxos de trabalho, enquanto os executores auto-hospedados{% elsif ghae %}Auto-hospedados{% endif %} são uma forma altamente configurável de executar fluxos de trabalho em um ambiente personalizado próprio. {% ifversion ghae %}Executores auto-hospedados:{% endif %}

{% ifversion fpt or ghec or ghes %} **Executores hospedados no {% data variables.product.prodname_dotcom %}:**
- Receba atualizações automáticas do sistema operacional, pacotes e ferramentas pré-instalados e o aplicativo do executor auto-hospedado.
- São gerenciados e mantidos por {% data variables.product.prodname_dotcom %}.
- Fornecem uma instância limpa para cada execução de trabalho.
- Use minutos grátis no seu plano {% data variables.product.prodname_dotcom %}, com taxas por minuto aplicadas após exceder os minutos grátis.

**Executores auto-hospedados:** {% endif %}
- Receba atualizações automáticas apenas para o aplicativo do executor auto-hospedado{% ifversion fpt or ghec or ghes > 3.4 or ghae %}, embora você possa desabilitar atualizações automáticas do executor. Para obter mais informações sobre como controlar as atualizações de software do executor em executores auto-hospedados, confira "[Dimensionamento automático com executores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners)".{% else %}.{% endif %} Você é responsável por atualizar o sistema operacional e todos os outros programas de software.
- Podem usar serviços de nuvem ou máquinas locais pelos quais você já pagou.
- São personalizáveis conforme seus requisitos de hardware, sistema operacional, software e segurança.
- Não precisam ter uma instância limpa para cada execução de trabalho.
- É grátis para usar com {% data variables.product.prodname_actions %}, mas você é o responsável pelo custo de manter seus executores.{% ifversion ghec or ghes or ghae %}
- Podem ser organizados em grupos para restringir o acesso a {% ifversion restrict-groups-to-workflows %}fluxos de trabalho, {% endif %}organizações e repositórios específicos. Para obter mais informações, confira "[Como gerenciar o acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".{% endif %}

## Requisitos para executores auto-hospedados

Você pode usar qualquer máquina como um executor auto-hospedado, desde que ela atenda a estes requisitos:

* Você pode instalar e executar o aplicativo do executor auto-hospedado na máquina. Para obter mais informações, confira "[Arquiteturas e sistemas operacionais compatíveis com executores auto-hospedados](#supported-architectures-and-operating-systems-for-self-hosted-runners)".
* A máquina pode comunicar-se com {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Comunicação entre executores auto-hospedados e o {% data variables.product.product_name %}](#communication-requirements)".
* A máquina tem recursos de hardware suficientes para o tipo de fluxos de trabalho que você planeja executar. O aplicativo do executor auto-hospedado requer apenas recursos mínimos.
* Se você desejar executar fluxos de trabalho que usam ações do contêiner do Docker ou dos contêineres de serviço, você deverá usar uma máquina Linux e o Docker deve estar instalados.

## Dimensionar automaticamente os seus executores auto-hospedados

Você pode aumentar ou diminuir automaticamente o número de executores auto-hospedados no seu ambiente em resposta aos eventos que você receber. Para obter mais informações, confira "[Dimensionamento automático com executores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

## Limites de uso

Existem alguns limites sobre o uso de {% data variables.product.prodname_actions %} ao usar executores auto-hospedados. Estes limites estão sujeitos a mudanças.

{% data reusables.actions.usage-workflow-run-time %}
- **Tempo de fila do trabalho** – Cada trabalho dos executores auto-hospedados pode ser colocado na fila por, no máximo, 24 horas. Se um executor auto-hospedado não começar a executar a tarefa dentro deste limite, a tarefa será encerrada e não será concluída.
{% data reusables.actions.usage-api-requests %}
- **Matriz de trabalho** – {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## Continuidade do fluxo de trabalho para executores auto-hospedados

{% data reusables.actions.runner-workflow-continuity %}

## Arquiteturas e sistemas operacionais compatíveis com executores auto-hospedados

Os sistemas operacionais a seguir são compatíveis com o aplicativo de execução auto-hospedado.

### Linux

- Red Hat Enterprise Linux 7 ou posterior
- CentOS 7 ou posterior
- Oracle Linux 7
- Fedora 29 ou versão posterior
- Debian 9 ou versão posterior
- Ubuntu 16.04 ou posterior
- Linux Hortelã 18 ou versão posterior
- openSUSE 15 ou versão posterior
- SUSE Enterprise Linux (SLES) 12 SP2 ou versão posterior

### Windows

- Windows 7 64-bit
- Windows 8.1 de 64 bits
- Windows 10 64 bits
- Windows Server 2012 R2 64-bit
- Windows Server 2019 64-bit

### macOS

- macOS 10.13 (High Sierra) or versão posterior

### Arquiteturas

As seguintes arquiteturas de processador são compatíveis com o aplicativo do executor auto-hospedado.

- `x64` – Linux, macOS e Windows.
- `ARM64` – Linux{% ifversion actions-macos-arm %}, macOS{% endif %}{% ifversion actions-windows-arm %}, Windows (em beta no momento){% endif %}.
- `ARM32` – Linux.

{% ifversion ghes %}

## Ações com suporte em corredores auto-hospedados

Algumas configurações extras podem ser necessárias para usar as ações do {% data variables.product.prodname_dotcom_the_website %} com o {% data variables.product.prodname_ghe_server %} ou para usar as ações `actions/setup-LANGUAGE` com executores auto-hospedados sem acesso à Internet. Para obter mais informações, confira "[Como gerenciar o acesso às ações do {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom)" e entre em contato com o administrador do site do {% data variables.product.prodname_enterprise %}.

{% endif %}

<a name="communication-requirements"></a>

## Comunicação entre executores auto-hospedados e {% data variables.product.product_name %}

O executor auto-hospedado conecta-se a {% data variables.product.product_name %} para receber atividades de trabalho e fazer o download de novas versões do aplicativo do executor. O executor auto-hospedado usa uma _sondagem longa_ {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} que abre uma conexão com o {% data variables.product.product_name %} por 50 segundos. Se nenhuma resposta for recebida, ela atingirá o tempo limite e criará uma sondagem longa. O aplicativo deve estar rodando na máquina para aceitar e executar trabalhos do {% data variables.product.prodname_actions %}.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %} Como o executor auto-hospedado abre uma conexão com a {% data variables.location.product_location %}, você não precisa permitir que o {% data variables.product.prodname_dotcom %} faça conexões de entrada com o executor auto-hospedado.
{% elsif ghes or ghae %} Somente uma conexão de saída do executor com a {% data variables.location.product_location %} é necessária. Não há necessidade de uma conexão de entrada com a {% data variables.location.product_location %} com o executor.
{%- endif %}

{% ifversion ghes %}

O {% data variables.product.product_name %} precisa aceitar conexões de entrada dos executores por {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} no subdomínio da API e no nome de host para {% data variables.location.product_location %} e os executores precisam permitir conexões de saída por {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} para o nome do host e o subdomínio de API para {% data variables.location.product_location %}.

{% elsif ghae %}

Você deve garantir que o executor auto-hospedado tenha acesso à rede para se comunicar com o seu URL de {% data variables.product.product_name %} e seus subdomínios. Por exemplo, se o subdomínio do {% data variables.product.product_name %} for `octoghae`, você precisará permitir que o executor auto-hospedado acesse `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` e `codeload.octoghae.githubenterprise.com`.

Se você usar uma lista de permissão de endereços IP, você deve adicionar o endereço IP do executor auto-hospedado à lista de permissões. Para obter mais informações, confira "[Como gerenciar os endereços IP permitidos para sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)".

{% endif %}

{% ifversion fpt or ghec %}

Você deve garantir que a máquina tenha acesso adequado à rede para comunicar-se com os hosts de {% data variables.product.prodname_dotcom %} listados abaixo. Alguns hosts são necessários para operações essenciais de executores, enquanto outros hosts só são necessários para certas funcionalidades.

{% note %}

**Observação:** alguns dos domínios listados abaixo são configurados por meio de registros `CNAME`. Alguns firewalls podem exigir que você adicione regras de maneira recursiva para todos os registros `CNAME`. Observe que os registros `CNAME` poderão mudar no futuro e que apenas os domínios listados abaixo permanecerão constantes.

{% endnote %}

**Necessário para operações essenciais:**

```
github.com
api.github.com
```

**Necessário para baixar as ações:**

```
codeload.github.com
```

**Necessário para as atualizações de versão do executor:**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Necessário para upload/download de caches e artefatos de fluxo de trabalho:**    

```
*.blob.core.windows.net
```

**Necessário para recuperar tokens OIDC:**

```
*.actions.githubusercontent.com
```

**Necessário para baixar ou publicar pacotes ou contêineres em pacotes do {% data variables.product.prodname_dotcom %}:**

```
*.pkg.github.com
ghcr.io
```

Além disso, seu fluxo de trabalho pode exigir acesso a outros recursos de rede.

Se você usar uma lista de endereços IP permitida para a sua a sua organização ou conta corporativa do {% data variables.product.prodname_dotcom %}, você deverá adicionar o endereço IP do executor auto-hospedado à lista de permissões. Para obter mais informações, confira "[Como gerenciar endereços IP permitidos para sua organização](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)" ou "[Como impor políticas para configurações de segurança na sua empresa](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% else %}

{% ifversion ghes %}Os executores auto-hospedados não exigem acesso à internet para funcionar. Como resultado, você pode usar o encaminhamento de rede para direcionar a comunicação entre o executor auto-hospedado e a {% data variables.location.product_location %}. Por exemplo, você pode atribuir um endereço IP privado ao executor auto-hospedado e configurar o roteamento para enviar tráfego à {% data variables.location.product_location %}, sem que o tráfego precise atravessar uma rede pública.{% endif %}

{% endif %}

{% ifversion ghae %} Se você usar uma lista de endereços IP permitidos para a sua organização ou conta corporativa do {% data variables.product.prodname_dotcom %}, precisará adicionar o endereço IP do executor auto-hospedado à lista de permissões. Para obter mais informações, confira "[Como gerenciar os endereços IP permitidos para sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)".
{% endif %}

Você também pode usar executores auto-hospedados com um servidor proxy. Para obter mais informações, confira "[Como usar um servidor proxy com executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)".

Para obter mais informações sobre como solucionar problemas comuns de conectividade de rede, confira "[Monitoramento e solução de problemas de executores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity)".

{% ifversion ghes or ghae %}

## Comunicação entre os executores auto-hospedados e o {% data variables.product.prodname_dotcom_the_website %}

Os executores auto-hospedados não precisam se conectar ao {% data variables.product.prodname_dotcom_the_website %}, a menos que você tenha habilitado o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %} para {% data variables.location.product_location %}. Para obter mais informações, confira "[Sobre como usar ações na sua empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".

Se você tiver habilitado o acesso automático a ações {% data variables.product.prodname_dotcom_the_website %}, o executor auto-hospedado irá se conectar diretamente a {% data variables.product.prodname_dotcom_the_website %} para fazer o download das ações. Você deve garantir que a máquina tenha acesso adequado à rede para comunicar-se com as {% data variables.product.prodname_dotcom %} URLs listadas abaixo. 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

**Observação:** alguns dos domínios listados acima são configurados por meio de registros `CNAME`. Alguns firewalls podem exigir que você adicione regras de maneira recursiva para todos os registros `CNAME`. Observe que os registros `CNAME` poderão mudar no futuro e que apenas os domínios listados acima permanecerão constantes.

{% endnote %}

{% endif %}

## Segurança dos executores auto-hospedados

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

Este não é um problema com executores hospedados no {% data variables.product.prodname_dotcom %}, pois cada executor hospedado no {% data variables.product.prodname_dotcom %} é sempre uma máquina virtual limpa e isolada, que é destruída no final da execução do trabalho.

{% endif %}

Os fluxos de trabalho não confiáveis no seu executor auto-hospedado representam riscos de segurança significativos para seu ambiente de rede e máquina, especialmente se sua máquina persistir no ambiente entre os trabalhos. Alguns dos riscos incluem:

* Programas maliciosos em execução na máquina.
* Sair do sandbox do executor da máquina.
* Expor acesso ao ambiente de rede da máquina.
* Dados persistentes, indesejados ou perigosos na máquina.

Para obter mais informações sobre a proteção de segurança dos executores auto-hospedados, confira "[Proteção de segurança do {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

{% ifversion ghec or ghes or ghae %}

## Leitura adicional

- "[Introdução aos executores auto-hospedados da sua empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)"

{% endif %}
