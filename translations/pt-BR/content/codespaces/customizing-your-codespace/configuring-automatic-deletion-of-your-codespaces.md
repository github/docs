---
title: Configurando a exclusão automática de seus codespaces
shortTitle: Configurar exclusão automática
intro: 'Os codespaces não utilizados são excluídos automaticamente. Você pode escolher por quanto tempo seus codespaces parados serão mantidos até, no máximo, 30 dias.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
---

Por padrão, {% data variables.product.prodname_codespaces %} são excluídos automaticamente depois que forem parados e permanecerem inativos por 30 dias.

No entanto, como {% data variables.product.prodname_codespaces %} está sujeito a cobrança de armazenamento, você pode preferir reduzir o período de retenção alterando seu período padrão nas suas configurações pessoais para {% data variables.product.prodname_github_codespaces %}. For more information about storage charges, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

{% note %}

**Observação**: Independentemente de você ter definido um período de retenção de código pessoal, é uma boa ideia adquirir o hábito de excluir codespaces dos quais você já não precisa. Para obter mais informações, consulte "[Excluindo um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

{% endnote %}

A eliminação automática acontece independentemente de um codespace conter alterações não forçadas. Para evitar a exclusão automática de um codespace, basta abri-lo novamente. O período de retenção é redefinido toda vez que você se conectar a um codespace, e a contagem regressiva de retenção é reiniciada quando o codespace é interrompido.

Se um repositório pertencer a uma organização, é possível que o administrador da organização tenha definido um período de retenção para toda a organização. Se este período for inferior ao período de retenção padrão em suas configurações pessoais, o período de retenção da organização será aplicado aos conjuntos de codespaces que você criar para este repositório. Para obter mais informações, consulte "[Restringindo o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

Cada codespace tem o seu próprio período de retenção. Poderão, portanto, ter codespaces com diferentes períodos de retenção. Por exemplo, se:
* Você criou um codespace, mudou seu período de retenção padrão e, posteriormente, criou outro codespace.
* Você criou um codespace usando {% data variables.product.prodname_cli %} e especificou um período de retenção diferente.
* Você criou um código a partir de um repositório de propriedade de organização que tem um período de retenção configurado para a organização.

{% note %}

**Observação**: O período de retenção é especificado em dias. Um dia representa um período de 24 horas, começando na hora do dia quando você interrompe um codespace.

{% endnote %}

{% webui %}

## Definir um período de retenção padrão para os seus codespaces

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Período de retenção padrão", insira o número de dias em que você quer que seus codespaces sejam mantidos, por padrão, depois que forem interrompidos.

   ![Selecionando seu período de retenção](/assets/images/help/codespaces/setting-default-retention.png)

   Você pode definir seu período de retenção padrão entre `0` e `30` dias.

   {% warning %}

   **Aviso**: Configurar o período para `0` fará com que seus codespaces sejam imediatamente excluídos quando você pará-los ou quando o tempo se esgotar devido à inatividade. For more information, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

   {% endwarning %}

1. Clique em **Salvar**.

Ao criar um codespace usando {% data variables.product.prodname_cli %} você pode substituir este padrão. Se você criar um codespace em uma organização que especifique um período de retenção mais curto, o valor do nível da organização irá substituir a sua configuração pessoal.

Se você definir um período de retenção maior que um dia, você receberá uma notificação por e-mail um dia antes da sua exclusão.

## Verificando o tempo restante até a exclusão automática

Você pode verificar se um codespace deve ser excluído automaticamente em breve.

Quando um codespace inativo está se aproximando do final do seu período de retenção, isto é indicado na sua lista de codespaces em {% data variables.product.prodname_dotcom %} em [https://github.com/codespaces](https://github.com/codespaces).

![A mensagem de pré-exclusão na lista de codespaces em {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Configurando um período de retenção para um codespace

Para definir o período de retenção do codespace quando você criar um codespace, use o parâmetro `--retention-period` com o código `codespace create`. Especifique o período em dias. O período deve ser entre 0 e 30 dias.

```shell
gh codespace create --retention-period DAYS
```

Se você não especificar um período de retenção ao criar um codespace, seu período de retenção padrão ou um período de retenção da organização será usado, dependendo de qual for menor. Para informações sobre como configurar seu período de retenção padrão, clique na aba "Navegador Web" nesta página.

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Definindo o período de retenção

Você pode definir seu período de retenção padrão no seu navegador web em {% data variables.product.prodname_dotcom_the_website %}. Como alternativa, se você usar o {% data variables.product.prodname_cli %} para criar um codespace, você poderá definir um período de tempo limite para esse codespace específico. Para mais informações, clique na guia apropriada acima.

## Verificando se os codespaces serão excluídos automaticamente em breve

Você pode verificar, no aplicativo {% data variables.product.prodname_vscode %} do desktop, se um código deverá ser excluído automaticamente em breve.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Escolha **{% data variables.product.prodname_github_codespaces %}** a no menu suspenso no canto superior direito do Explorador Remoto, se ainda não estiver selecionado.
1. Em "CODESPACES DO GITHUB", posicione o ponteiro do mouse sobre o codespace no qual você está interessado. Uma caixa pop-up é exibida mostrando informações sobre o codespace.

   Se o codespace estiver perto do fim do seu período de retenção, uma linha será incluída informando quando o codespace será excluído.

   ![Informações do codespace mostrando o tempo até a exclusão](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
