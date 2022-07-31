---
title: Gerenciar as suas camadas de patrocínio
intro: 'Você pode adicionar uma nova camada de patrocínio, ou editar ou retirar uma camada existente.'
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Gerenciar camadas de pagamento
---

## Sobre as camadas de patrocínio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Adicionar uma camada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Se você estiver configurando as camadas pela primeira vez, recomendamos que você revise os exemplos de camadas sugeridas para ver como alguns outros contribuidores de código aberto configuraram o valor de {% data variables.product.prodname_sponsors %}. Decida se deseja começar com alguns rascunhos de camada sugeridos, que você pode personalizar no editor de camadas.
   - Para usar uma camada sugerida, selecione as recompensas que você gostaria de incluir no seu rascunho da camada ou camadas. Em seguida, clique em **Seguir para o editor de camadas**.
   - Para criar níveis sem usar com nenhuma das sugestões de rascunho, clique em **Pular esta etapa**. ![Opção "Pular esta etapa" e botão "Seguir para o editor"](/assets/images/help/sponsors/tier-editor-button.png)
1. Opcionalmente, para editar uma camada no rascunho, encontre a camada no rascunho e clique em **Editar**. ![Botão editar ao lado da camada no rascunho](/assets/images/help/sponsors/draft-tier-edit.png)
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.add-welcome-message %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}

## Editando ou retirar uma camada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
  {% note %}

  **Observação:** Para ver as ideias das descrições de camadas, desça a barra de rolagem.

  {% endnote %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.tier-update %}
{% data reusables.sponsors.retire-tier %}

## Adicionando um repositório a uma camada de patrocínio

{% data reusables.sponsors.sponsors-only-repos %}

### Sobre adicionar repositórios a uma camada de patrocínio

Para adicionar um repositório a uma camada, o repositório deve ser privado e pertencente a uma organização, e você deverá ter acesso de administrador ao repositório.

Ao adicionar um repositório a uma camada, {% data variables.product.company_short %} irá enviar automaticamente convites de repositórios a novos patrocinadores e remover o acesso quando um patrocínio for cancelado.

Apenas contas pessoais, não organizações, podem ser convidadas para repositórios privados associados a uma camada de patrocínio.

Também é possível adicionar ou remover manualmente os colaboradores no repositório e o {% data variables.product.company_short %} não irá substituí-los na sincronização.

### Sobre transferências para repositórios adicionados às camadas de patrocínio

Se você transferir um repositório adicionado a um nível de patrocínio, os patrocinadores que têm acesso ao repositório através da camada poderão ser afetados.

- Se o perfil patrocinado for para uma organização e o repositório for transferido para uma organização diferente, os patrocinadores atuais serão transferidos, mas os novos patrocinadores não serão adicionados. O novo proprietário do repositório pode remover patrocinadores existentes.
- Se o perfil patrocinado for para uma conta pessoal, o repositório será transferido para uma organização, e a conta pessoal terá acesso de administrador ao novo repositório, os patrocinadores existentes serão transferidos e os novos patrocinadores continuarão sendo adicionados ao repositório.
- Se o repositório for transferido para uma conta pessoal, todos os patrocinadores serão removidos e novos patrocinadores não serão adicionados ao repositório.

### Adicionando um repositório a uma camada de patrocínio

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.edit-tier %}
1. Selecione **Conceder aos patrocinadores acesso ao repositório privado**.

   ![Captura de tela da caixa de seleção para conceder acesso de patrocinadores a um repositório privado](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. Selecione o menu suspenso e clique no repositório que você deseja adicionar.

   ![Captura de tela do menu suspenso para escolher o repositório para conceder acesso ao](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}

## Habilitar camadas com quantidades personalizadas

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.enable-custom-amounts %}

## Desabilitar camadas com quantidades personalizadas

Você pode desabilitar camadas com valores personalizados desmarcando a opção **Habilitar valores** personalizados na aba **Camadas de Sponsors**. Se você desabilitar quantidades personalizadas, todas as camadas personalizadas irão se tornar obsoletas..
