---
title: Conectando-se a uma rede privada
intro: 'Você pode conectar executores hospedados no {% data variables.product.prodname_dotcom %} a recursos em uma rede privada, incluindo registros de pacotes, gerentes secretos e outros serviços locais.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
ms.openlocfilehash: 2a74b149596e0158cdc6b5e40508b1d4a54eb8e6
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884266'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre a rede de executores hospedados no {% data variables.product.prodname_dotcom %}

Por padrão, os executores hospedados no {% data variables.product.prodname_dotcom %} têm acesso à Internet pública. No entanto, talvez você também queira que esses executores acessem recursos em sua rede privada, como um registro de pacote, um gerenciador de segredos ou outros serviços locais. 

Os executores hospedados no {% data variables.product.prodname_dotcom %} são compartilhados em todos os clientes do {% data variables.product.prodname_dotcom %}. Por isso, você precisará de uma forma para conectar a rede privada apenas aos executores enquanto eles estiverem executando seus fluxos de trabalho. Há algumas abordagens diferentes que você pode adotar para configurar esse acesso, cada uma com vantagens e desvantagens diferentes.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Usar um Gateway de API com OIDC

Com o {% data variables.product.prodname_actions %}, você pode usar tokens OIDC (OpenID Connect) para autenticar seu fluxo de trabalho fora do {% data variables.product.prodname_actions %}. Por exemplo, você pode executar um Gateway de API na borda de sua rede privada que autentica solicitações de entrada com o token OIDC e faz solicitações de API em nome do fluxo de trabalho em sua rede privada.

O seguinte diagrama fornece uma visão geral da arquitetura desta solução:

![Diagrama de um gateway OIDC](/assets/images/help/images/actions-oidc-gateway.png)

É importante que você autentique não apenas que o token OIDC veio do {% data variables.product.prodname_actions %}, mas que ele veio especificamente de seus fluxos de trabalho esperados, para que outros usuários do {% data variables.product.prodname_actions %} não possam acessar serviços em sua rede privada. Você pode usar declarações OIDC para criar essas condições. Para obter mais informações, confira "[Definir condições de confiança em funções de nuvem usando declarações OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)".

A principal desvantagem dessa abordagem é que você precisa implementar o gateway de API para fazer solicitações em seu nome, bem como executá-lo na borda da rede.

Mas também há várias vantagens:
- Você não precisa configurar nenhum firewall ou modificar o roteamento de sua rede privada. 
- O gateway de API é sem estado e, portanto, é dimensionado horizontalmente para lidar com alta disponibilidade e alta taxa de transferência.

Para obter mais informações, confira [uma implementação de referência de um Gateway de API](https://github.com/github/actions-oidc-gateway-example) (observe que isso requer personalização para seu caso de uso e não está pronto para execução como está) e "[Sobre a proteção de segurança com o OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".
{% endif %}

### Usar o WireGuard para criar uma sobreposição de rede

Se você não quiser manter uma infraestrutura separada para um Gateway de API, poderá criar uma rede de sobreposição entre o executor e um serviço em sua rede privada, executando o WireGuard em ambos os locais.

Há várias desvantagens nessa abordagem: 

- Para acessar o WireGuard em execução em seu serviço privado, você precisará de um endereço IP conhecido e uma porta que seu fluxo de trabalho possa referenciar: isso pode ser um endereço IP público e uma porta, um mapeamento de porta em um gateway de rede ou um serviço que atualiza dinamicamente o DNS. 
- O WireGuard não lida com a passagem NAT pronta para uso. Portanto, você precisará identificar uma maneira de fornecer esse serviço.
- Essa conexão é um para um. Por isso, se você precisar de alta disponibilidade ou alta taxa de transferência, precisará compilar isso em cima do WireGuard. 
- Você precisará gerar e armazenar chaves com segurança para o executor e seu serviço privado. O WireGuard usa UDP. Portanto, sua rede deve dar suporte ao tráfego UDP.

Também há algumas vantagens, pois você pode executar o WireGuard em um servidor existente para que não precise manter uma infraestrutura separada e ela tem suporte em executores hospedados no {% data variables.product.prodname_dotcom %}.

### Exemplo: configurar o WireGuard

Este exemplo do fluxo de trabalho configura o WireGuard para se conectar a um serviço privado.

Para este exemplo, a instância do WireGuard em execução na rede privada tem essa configuração:
- Sobreposição de endereço IP de rede do `192.168.1.1`
- Endereço IP público e porta do `1.2.3.4:56789`
- Chave pública `examplepubkey1234...`

A instância do WireGuard no executor do {% data variables.product.prodname_actions %} tem esta configuração:
- Sobreposição de endereço IP de rede do `192.168.1.2`
- Os armazenamentos de chave privada como um segredo do {% data variables.product.prodname_actions %} em `WIREGUARD_PRIVATE_KEY`

```yaml
name: WireGuard example

on:
  workflow_dispatch:

jobs:
  wireguard_example:
    runs-on: ubuntu-latest
    steps:
      - run: sudo apt install wireguard

      - run: echo "${{ secrets.WIREGUARD_PRIVATE_KEY }}" > privatekey

      - run: sudo ip link add dev wg0 type wireguard

      - run: sudo ip address add dev wg0 192.168.1.2 peer 192.168.1.1

      - run: sudo wg set wg0 listen-port 48123 private-key privatekey peer examplepubkey1234... allowed-ips 0.0.0.0/0 endpoint 1.2.3.4:56789

      - run: sudo ip link set up dev wg0

      - run: curl -vvv http://192.168.1.1
```

Para obter mais informações, confira [Início Rápido do WireGuard](https://www.wireguard.com/quickstart/), bem como "[Segredos Criptografados](/actions/security-guides/encrypted-secrets)" para saber como armazenar chaves com segurança.

### Usar o Tailscale para criar uma sobreposição de rede

Tailscale é um produto comercial criado sobre o WireGuard. Esta opção é muito semelhante ao WireGuard, exceto que o Tailscale é mais uma experiência completa do produto em vez de um componente de código aberto.

Suas desvantagens são semelhantes ao WireGuard: a conexão é de um para um. Portanto, talvez seja necessário fazer um trabalho adicional para alta disponibilidade ou alta taxa de transferência. Você ainda precisa gerar e armazenar chaves com segurança. O protocolo ainda é UDP. Portanto, sua rede deve dar suporte ao tráfego UDP.

No entanto, há algumas vantagens sobre o WireGuard: a passagem NAT é interna. Por isso, você não precisa expor uma porta à Internet pública. É de longe a mais rápida dessas opções para começar a funcionar, já que o Tailscale fornece um fluxo de trabalho do {% data variables.product.prodname_actions %} com uma única etapa para se conectar à rede de sobreposição.

Para obter mais informações, confira [Ação GitHub do Tailscale](https://github.com/tailscale/github-action), bem como "[Segredos Criptografados](/actions/security-guides/encrypted-secrets)" para saber como armazenar chaves com segurança.
