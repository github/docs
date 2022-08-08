---
title: Configurar a política de indicação para a sua empresa
shortTitle: Configurar a política de indicação
intro: 'Você pode aumentar a privacidade do {% data variables.product.product_location %} configurando a política para solicitações de origem cruzada.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
---

## Sobre a política de indicação para a sua empresa

A política de referência controla a informação que {% data variables.product.product_name %} transmite em cabeçalhos HTTP quando alguém visita um link de {% data variables.product.product_location %} para um site externo.

Por padrão, quando um usuário em {% data variables.product.product_location %} acessa um link para outro site a partir de um arquivo ou comentário na sua instância, a solicitação inclui o nome do host para sua instância em texto simples dentro do cabeçalho `Referer`. Se o link levar a um site externo, o proprietário do site poderá ler o nome de host da sua instância em solicitações ou arquivos de registro.

Você pode controlar as informações que {% data variables.product.product_name %} envia quando um usuário acessa um link da sua instância.

## Habilitar a política de indicação de `same-origin`

Você pode habilitar a política de indicação de `same-origin` para orientar navegadores modernos para excluir o nome de host de {% data variables.product.product_location %} de solicitações para sites externos. A configuração aplica-se a todos os links da interface web na sua instância. Por padrão, {% data variables.product.product_name %} usa as políticas de indicação `origin-when-cross-origin` e `strict-origin-when-cross-origin`, o que significa que o nome de host da sua instância irá aparecer em solicitações HTTP e HTTPS para sites externos.

{% note %}

**Observação**: Mudar a política de referência para `same-origin` pode afetar sites externos que esperam um nome de host nos cabeçalhos HTTP para uma solicitação.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Em "Política do Agente Indicador do Usuário", selecione **Habilitar a mesma política de indicação de origem para todas as organizações**. ![Caixa de seleção para habilitar a mesma política de indicação de origem](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. Clique em **Salvar**. ![Botão salvar para habilitar a mesma política de indicação de origem](/assets/images/enterprise/settings/referrer-policy-save-button.png)
