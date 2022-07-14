---
title: Setting your timeout period for GitHub Codespaces
shortTitle: Definir o tempo limite
intro: 'Você pode definir seu tempo limite padrão para {% data variables.product.prodname_codespaces %} na sua página de configurações pessoais.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
---

Um codespace irá parar de funcionar após um período de inatividade. Você pode especificar a duração deste período de tempo limite. A configuração atualizada será aplicada a qualquer código recém-criado.

Algumas organizações podem ter uma política máxima de tempo ocioso. Se a política de uma organização definir um tempo limite máximo que seja menor do que o tempo limite padrão definido o tempo limite da organização será usado em vez da sua configuração, e você será notificado disso após a criação do codespace. Para obter mais informações, consulte "[Restringindo o período de tempo ocioso de](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% warning %}

**Aviso**: Os codespaces são cobrados por minuto. Se você não está usando ativamente um codepsace, mas o este ainda não expirou, você ainda será cobrado pelo tempo em que o codespace estiver em execução. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% endwarning %}

{% webui %}

## Definir seu período de tempo limite padrão

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Tempo de inatividade", digite o tempo que você deseja e, em seguida, clique em **Salvar**. O tempo deve ser entre 5 minutos e 240 minutos (4 horas). ![Selecionando o tempo limite](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Definindo o período de tempo limite para um codespace

{% data reusables.cli.cli-learn-more %}

Para definir o período de tempo limite ao criar um codespace, use o argumento `idle-timeout` com o subcomando `codespace create`. Especifique o tempo em minutos, seguido por `m`. O tempo deve ser entre 5 minutos e 240 minutos (4 horas).

```shell
gh codespace create --idle-timeout 90m
```

Se você não especificar um período de tempo limite ao criar um codespace, será usado o período de tempo limite padrão. Para informações sobre como definir um período de tempo limite padrão, clique na aba "Navegador da Web" nesta página. Você não pode especificar um período de tempo padrão para {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## Definindo um período de tempo limite

Você pode definir seu período de tempo limite padrão no seu navegador web em {% data variables.product.prodname_dotcom_the_website %}. Como alternativa, se você usar o {% data variables.product.prodname_cli %} para criar um codespace, você poderá definir um período de tempo limite para esse codespace específico. Para mais informações, clique na guia apropriada acima.

{% endvscode %}
