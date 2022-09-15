---
title: Configurar a política de indicação para a sua empresa
shortTitle: Configure referrer policy
intro: 'Você pode aumentar a privacidade do {% data variables.product.product_location %} configurando a política para solicitações de origem cruzada.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 4824e938e044a89e9d0e534564214c6a46ba44da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066487'
---
## Sobre a política de indicação para a sua empresa

A política de referência controla a informação que {% data variables.product.product_name %} transmite em cabeçalhos HTTP quando alguém visita um link de {% data variables.product.product_location %} para um site externo.

Por padrão, quando um usuário do {% data variables.product.product_location %} acessa um link de outro site por meio de um arquivo ou de um comentário na sua instância, a solicitação inclui o nome do host da sua instância em texto sem formatação no cabeçalho `Referer`. Se o link levar a um site externo, o proprietário do site poderá ler o nome de host da sua instância em solicitações ou arquivos de registro.

Você pode controlar as informações que {% data variables.product.product_name %} envia quando um usuário acessa um link da sua instância.

## Como habilitar a política de referenciador `same-origin`

Você pode habilitar a política de referenciador `same-origin` para instruir os navegadores modernos a excluir o nome do host do {% data variables.product.product_location %} nas solicitações para sites externos. A configuração aplica-se a todos os links da interface web na sua instância. Por padrão, o {% data variables.product.product_name %} usa as políticas de referenciador `origin-when-cross-origin` e `strict-origin-when-cross-origin`, o que significa que o nome do host da instância será exibido nas solicitações HTTP e HTTPS para sites externos.

{% note %}

**Observação**: a alteração da política de referenciador `same-origin` pode afetar os sites externos que esperam um nome do host nos cabeçalhos HTTP de uma solicitação.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Em "Política do Referenciador do Agente de Usuário", selecione **Habilitar a mesma política de referenciador de mesma origem para todas as organizações**.
  ![Caixa de seleção usada para habilitar a política de referenciador de mesma origem](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. Clique em **Salvar**.
  ![Botão Salvar para habilitar a política de referenciador de mesma origem](/assets/images/enterprise/settings/referrer-policy-save-button.png)
