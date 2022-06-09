---
title: Conectando-se a uma rede privada
intro: 'Você pode conectar executores hospedados em {% data variables.product.prodname_dotcom %} a recursos em uma rede privada, incluindo registros de pacotes, gerentes de segredos e outros serviços no local.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Developer
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre a rede de executores hospedados em {% data variables.product.prodname_dotcom %}

Por padrão, os executores hospedados em {% data variables.product.prodname_dotcom %} têm acesso à internet pública. No entanto, você também pode querer que esses executores acessem recursos na sua rede privada, como um registro de pacotes, um gerenciador secreto ou outros serviços no local.

Os executores hospedados em {% data variables.product.prodname_dotcom %} são compartilhados em todos os clientes de {% data variables.product.prodname_dotcom %}. Portanto, você precisará de uma maneira de conectar sua rede privada apenas aos seus executores enquanto eles estão executando seus fluxos de trabalho. Existem algumas abordagens diferentes que você poderia tomar para configurar esse acesso, cada uma com diferentes vantagens e desvantagens.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Usando um Gateway da API com o OIDC

Com {% data variables.product.prodname_actions %}, você pode usar tokens do OpenID Connect (OIDC) para autenticar seu fluxo de trabalho fora de {% data variables.product.prodname_actions %}. Por exemplo, você pode executar um Gateway da API na borda da sua rede privada que autentica solicitações recebidas com o token do OIDC e, em seguida, faz solicitações da API em nome do seu fluxo de trabalho na sua rede privada.

O diagrama a seguir fornece uma visão geral da arquitetura desta solução:

![Diagrama de um gateway do OIDC](/assets/images/help/images/actions-oidc-gateway.png)

É importante que você autentique não apenas que o token OIDC veio de {% data variables.product.prodname_actions %}, mas que veio especificamente de seus fluxos de trabalho esperados, para que outros usuários de {% data variables.product.prodname_actions %} não possam acessar serviços em sua rede privada. Você pode usar as alegações do OIDC para criar essas condições. Para obter mais informações consulte "[Definindo as condições de confiança nas funções de nuvem usando reivindicações do OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#defining-trust-conditions-on-cloud-roles-using-oidc-claims)."

A principal desvantagem dessa abordagem é que você tem que implementar o gateway da API para fazer solicitações em seu nome, bem como executá-lo na borda da sua rede.

Mas há várias vantagens também:
- Você não precisa configurar nenhum firewall ou modificar o encaminhamento da sua rede privada.
- O gateway da API é apátrida e, por isso, é dimensionado horizontalmente para lidar com alta disponibilidade e alta produtividade.

Para obter mais informações, consulte [Uma implementação de referência de um gateway da API](https://github.com/github/actions-oidc-gateway-example) (observe que isso exige personalização para o seu caso de uso e não está pronto para execução como está) e "[Sobre o fortalecimento da segurança com o OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".
{% endif %}

### Usando o WireGuard para criar uma sobreposição de rede

Se você não quiser manter uma infraestrutura separada para um Gateway da API, você pode criar uma rede de sobreposição entre seu executor e um serviço na sua rede privada, executando o WireGuard em ambos os lugares.

Existem várias desvantagens nessa abordagem:

- Para chegar ao WireGuard em execução em seu serviço privado, você precisará de um endereço IP bem conhecido e porta aos quais o seu fluxo de trabalho pode fazer referência: pode ser um endereço IP e porta IP públicos, um mapeamento de porta em um gateway de rede ou um serviço que atualiza dinamicamente o DNS.
- O WireGuard não lida com a deslocamento do NAT de forma inovadora. Portanto, você deverá identificar uma maneira de fornecer esse serviço.
- Esta conexão é de um para um, por isso, se você precisa de alta disponibilidade ou alta produtividade, você precisará construir isso no WireGuard.
- Você precisará gerar e armazenar as chaves com segurança para o executor e para o seu serviço privado. O WireGuard usa UDP. Portanto, sua rede deve ser compatível com o tráfego do UDP.

Há algumas vantagens também, pois você pode executar o WireGuard em um servidor existente para que você não tenha que manter uma infraestrutura separada, e ela é bem compatível com executores hospedados em {% data variables.product.prodname_dotcom %}.

### Exemplo: Configuração do WireGuard

Este fluxo de trabalho de exemplo configura o WireGuard para se conectar a um serviço privado.

Para este exemplo, a instância do WireGuard em execução na rede privada tem essa configuração:
- Endereço IP da rede de sobreposição de `192.168.1.1`
- Endereço IP público e porta de `1.2.3.4:56789`
- Chave pública `exemplopubkey1234...`

A instância do WireGuard no executor de {% data variables.product.prodname_actions %} tem essa configuração:
- Endereço IP da rede de sobreposição de `192.168.1.2`
- A chave privada armazena como um segredo de {% data variables.product.prodname_actions %} sob `WIREGUARD_PRIVATE_KEY`

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

Para obter mais informações, consulte [](https://www.wireguard.com/quickstart/)Início rápido do WireGuard e "[Segredos criptografados](/actions/security-guides/encrypted-secrets)" para saber como armazenar as chaves com segurança.

### Usando o Tailscale para criar uma sobreposição de rede

O Tailscale é um produto comercial criado sobre o WireGuard. Esta opção é muito semelhante ao WireGuard, exceto que Tailscale é mais uma experiência completa do produto em vez de um componente de código aberto.

As desvantagens são semelhantes ao WireGuard: A conexão é de uma para outra, por isso você pode precisar fazer trabalho adicional por alta disponibilidade ou por altas velocidades. Você ainda precisa gerar e armazenar as chaves de forma segura. O protocolo ainda é UDP, então sua rede deve ser compatível com o tráfego do UDP.

No entanto, existem algumas vantagens sobre o WireGuard: o deslocamento do NAT é incorporado, então você não precisa expor uma porta à internet pública. É de longe a mais rápida dessas opções para colocar em funcionamento, já que o Tailscale fornece um fluxo de trabalho de {% data variables.product.prodname_actions %} com um único passo para conectar à rede de sobreposição.

Para obter mais informações, consulte [GitHub Action do Tailscale](https://github.com/tailscale/github-action), assim como "[Segredos criptografados](/actions/security-guides/encrypted-secrets)" para saber como armazenar as chaves com segurança.
