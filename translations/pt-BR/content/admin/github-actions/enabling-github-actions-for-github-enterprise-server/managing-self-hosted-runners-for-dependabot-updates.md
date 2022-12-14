---
title: Gerenciando executores auto-hospedados para atualizações de Dependabot na sua empresa
intro: 'É possível criar executores dedicados para o {% data variables.location.product_location %} que é usado pelo {% data variables.product.prodname_dependabot %} para criar solicitações de pull a fim de ajudar a proteger e manter as dependências usadas nos repositórios de sua empresa.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 0f21d4bc91e519f7af89ff04bd65a6ace742f430
ms.sourcegitcommit: d411e8278b73efd0051816625c0b235ab7c263e9
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181330'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## Sobre executores auto-hospedados para {% data variables.product.prodname_dependabot_updates %}

É possível ajudar os usuários do {% data variables.location.product_location %} a criar e manter o códigos seguros configurando as atualizações de segurança e versão do {% data variables.product.prodname_dependabot %}. Com {% data variables.product.prodname_dependabot_updates %}, os desenvolvedores podem configurar repositórios para que suas dependências sejam atualizadas e mantidas seguras automaticamente. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Para usar o {% data variables.product.prodname_dependabot_updates %} no {% data variables.location.product_location %}, deve-se configurar executores auto-hospedados a fim de criar as solicitações de pull que atualizarão as dependências.

## Pré-requisitos

{% ifversion dependabot-updates-github-connect %} A configuração de executores auto-hospedados é apenas uma etapa no meio do processo para habilitar {% data variables.product.prodname_dependabot_updates %}. Há várias etapas a serem seguidas antes dessas, incluindo a configuração do {% data variables.location.product_location %} para usar o {% data variables.product.prodname_actions %} com executores auto-hospedados. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% else %} Antes de configurar os executores auto-hospedados para as {% data variables.product.prodname_dependabot_updates %}, você precisa:

- Configure o {% data variables.location.product_location %} para usar o {% data variables.product.prodname_actions %} com executores auto-hospedados. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".
- Habilite {% data variables.product.prodname_dependabot_alerts %} para sua empresa. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Configurando executores auto-hospedados para {% data variables.product.prodname_dependabot_updates %}

Depois de configurar o {% data variables.location.product_location %} para usar o {% data variables.product.prodname_actions %}, adicione executores auto-hospedados para {% data variables.product.prodname_dependabot_updates %}.

### Requisitos do sistema para executores de {% data variables.product.prodname_dependabot %}

Qualquer VM que você usar para executores de {% data variables.product.prodname_dependabot %} deve atender aos requisitos para executores auto-hospedados. Além disso, eles têm de cumprir os seguintes requisitos.

- Sistema operacional Linux
- Arquitetura x64 {%- ifversion ghes < 3.5 %}
- Git instalado {%- endif %}
- Docker instalado com acesso para os usuários do executor:
  - Recomendamos instalar o Docker no modo sem raiz e configurar os executores para acessar o Docker sem privilégios `root`.
  - Como alternativa, instale o Docker e dê aos usuários do executor privilégios elevados para executar o Docker.

Os requisitos de CPU e memória dependerão do número de executores simultâneos que você implanta em uma determinada VM. Como orientação, criamos de forma bem-sucedida 20 executores em uma única máquina CPU de 8 GB, mas, em última análise, seus requisitos de CPU e memória dependerão fortemente da atualização dos repositórios. Alguns ecossistemas exigirão mais recursos do que outros.

Se você especificar mais de 14 executores simultâneos em uma VM, também precisará atualizar a configuração `/etc/docker/daemon.json` do Docker para aumentar o número padrão de redes que o Docker pode criar.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Requisitos da rede para executores de {% data variables.product.prodname_dependabot %}

Os executores de {% data variables.product.prodname_dependabot %} exigem acesso à internet pública, {% data variables.product.prodname_dotcom_the_website %} e a todos os registros internos que serão usados nas atualizações de {% data variables.product.prodname_dependabot %}. Para minimizar o risco para sua rede interna, você deve limitar o acesso da Máquina Virtual (VM) à sua rede interna. Isto reduz o potencial de danos nos sistemas internos se um executor fizer o download de uma dependência capturada.

### Adicionando executores auto-hospedados para atualizações de {% data variables.product.prodname_dependabot %}

1. Provisionamento de executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

2. Configure os executores auto-hospedados com os requisitos descritos acima. Por exemplo, em uma VM que executa o Ubuntu 20.04:{% ifversion ghes < 3.5 %}

   - Verifique se o Git está instalado: `command -v git`{% endif %}
   - Instale o Docker e certifique-se de que os usuários do executor tenham acesso ao Docker. Para obter mais informações, consulte a documentação do Docker.
     - [Instalar o mecanismo do Docker no Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Abordagem recomendada: [executar o daemon do Docker como um usuário não raiz (modo sem raiz)](https://docs.docker.com/engine/security/rootless/)
     - Abordagem alternativa: [gerenciar o Docker como um usuário não raiz](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Verifique se os executores têm acesso à internet pública e só podem acessar as redes internas de que {% data variables.product.prodname_dependabot %} precisa.

3. Atribua um rótulo `dependabot` a cada executor que deseja que o {% data variables.product.prodname_dependabot %} use. Para obter mais informações, confira "[Como usar rótulos com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)".

4. Opcionalmente, habilite os fluxos de trabalho acionados por {% data variables.product.prodname_dependabot %} para usar permissões além das permissões somente leitura e ter acesso a todos os segredos que estão normalmente disponíveis. Para obter mais informações, confira "[Solução de problemas do {% data variables.product.prodname_actions %} para sua empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)".
