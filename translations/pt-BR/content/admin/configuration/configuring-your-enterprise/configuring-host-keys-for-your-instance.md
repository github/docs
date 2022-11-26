---
title: Como configurar chaves de host para sua instância
shortTitle: Configure host keys
intro: 'Você pode aumentar a segurança de {% data variables.location.product_location %} configurando os algoritmos que a instância usa para gerar e anunciar chaves de host para conexões SSH de entrada.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107106'
---
## Sobre chaves de host para sua instância

Os servidores que aceitam conexões SSH anunciam uma ou mais chaves de host criptográficas para identificar com segurança o servidor para clientes SSH. Para confirmar a identidade do servidor durante a inicialização de uma conexão, os clientes armazenam e verificam a chave de host. Para obter mais informações, confira [SSH Host Key - What, Why, How](https://ssh.com/academy/ssh/host-key) no site da SSH Academy.

{% data reusables.enterprise.about-ssh-ports %}

Por padrão, a {% data variables.location.product_location %} gera e anuncia chaves de host com a rotação de chaves de host no estilo OpenSSH. Para aumentar a segurança do SSH em seu ambiente, você pode habilitar algoritmos adicionais para a geração de chaves de host.

{% note %}

**Observação**: se você habilitar algoritmos de chave de host adicionais, os clientes que não usam o OpenSSH para conexões SSH poderão receber avisos durante a conexão ou não se conectarem por inteiro. Algumas implementações de SSH podem ignorar algoritmos sem suporte e fazer fallback para um algoritmo diferente. Se o cliente não der suporte a fallback, a conexão falhará. Por exemplo, a biblioteca SSH para Go não dá suporte a fallback para um algoritmo diferente.

{% endnote %}

## Como gerenciar uma chave de host Ed25519

Para aprimorar a segurança dos clientes que se conectam com a {% data variables.location.product_location %}, você pode habilitar a geração e o comunicado de uma chave de host Ed25519. Ed25519 é imune a alguns ataques que visam algoritmos de assinatura mais antigos, sem comprometer a velocidade. Os clientes SSH mais antigos podem não dar suporte ao Ed25519. Por padrão, as instâncias {% data variables.product.product_name %} não geram nem anunciam uma chave de host Ed25519. Para obter mais informações, confira [o site do Ed25519](https://ed25519.cr.yp.to).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar a geração e o anúncio da chave de host Ed25519, insira o comando a seguir.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. Opcionalmente, insira o comando a seguir para desabilitar a geração e o anúncio da chave de host Ed25519.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
