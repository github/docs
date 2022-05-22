---
title: Definindo seu período de tempo limite para os codespaces.
intro: 'Você pode definir seu tempo limite padrão para {% data variables.product.prodname_codespaces %} na sua página de configurações pessoais.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
shortTitle: Definir o tempo limite
---

Um codespace irá parar de funcionar após um período de inatividade. Você pode especificar a duração deste período de tempo limite. A configuração atualizada será aplicada a qualquer código recém-criado.

Algumas organizações podem ter uma política máxima de tempo ocioso. Se a política de uma organização definir um tempo limite máximo que seja menor do que o tempo limite padrão definido o tempo limite da organização será usado em vez da sua configuração, e você será notificado disso após a criação do codespace. Para obter mais informações, consulte "[Restringindo o período de tempo ocioso de](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% warning %}

**Aviso**: Os codespaces são cobrados por minuto. Se você não está usando ativamente um codepsace, mas o este ainda não expirou, você ainda será cobrado pelo tempo em que o codespace estiver em execução. Para obter mais informações, consulte[Sobre a cobrança dos codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% endwarning %}

{% webui %}

## Definir seu tempo limite padrão

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Tempo de inatividade", digite o tempo que você deseja e, em seguida, clique em **Salvar**. O tempo deve ser entre 5 minutos e 240 minutos (4 horas). ![Selecionando o tempo limite](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Definindo seu período de tempo limite

{% data reusables.cli.cli-learn-more %}

Para definir o período de tempo limite ao criar um codespace, use o argumento `idle-timeout` com o subcomando `codespace create`. Especifique o tempo em minutos, seguido por `m`. O tempo deve ser entre 5 minutos e 240 minutos (4 horas).

```shell
gh codespace create --idle-timeout 90m
```

Se você não especificar um período de tempo limite ao criar um codespace, será usado o período de tempo limite padrão. Para informações sobre como definir um período de tempo limite padrão, clique na aba "Navegador da Web" nesta página. Você não pode especificar um período de tempo padrão para {% data variables.product.prodname_cli %}.

{% endcli %}
