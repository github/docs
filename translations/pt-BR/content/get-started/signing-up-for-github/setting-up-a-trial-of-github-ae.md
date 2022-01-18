---
title: Configurando um teste do GitHub AE
intro: 'Você pode avaliar o {% data variables.product.prodname_ghe_managed %} gratuitamente.'
versions:
  ghae: '*'
topics:
  - Accounts
shortTitle: Teste do GitHub AE
---

## Sobre o teste de {% data variables.product.prodname_ghe_managed %}

Você pode definir uma avaliação de 90 dias para avaliar {% data variables.product.prodname_ghe_managed %}. Este processo permite que você implemente uma conta do {% data variables.product.prodname_ghe_managed %} na sua região do Azure existente.

- **Conta de {% data variables.product.prodname_ghe_managed %} **: O recurso do Azure que contém os componentes necessários, incluindo a instância.
- **{% data variables.product.prodname_ghe_managed %} portal**: A ferramenta de gerenciamento do Azure em [https://portal.azure.com](https://portal.azure.com). Ela é usada para implantar a conta de {% data variables.product.prodname_ghe_managed %}.

## Configurar a versão de avaliação do {% data variables.product.prodname_ghe_managed %}


Antes de poder iniciar o seu teste de {% data variables.product.prodname_ghe_managed %}, você deverá solicitar o acesso entrando em contato com sua equipe de conta de {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_dotcom %} irá habilitar o teste {% data variables.product.prodname_ghe_managed %} para sua assinatura do Azure.

Entre em contato com {% data variables.contact.contact_enterprise_sales %} para verificar a sua elegibilidade para um teste de {% data variables.product.prodname_ghe_managed %}.

## Implantando {% data variables.product.prodname_ghe_managed %} com o {% data variables.actions.azure_portal %}

O {% data variables.actions.azure_portal %} permite que você faça a implementação da conta do {% data variables.product.prodname_ghe_managed %} no seu grupo de recursos do Azure.

1. No {% data variables.actions.azure_portal %}, digite `GitHub AE` no campo de busca. Em seguida, em _Serviços_, clique em {% data variables.product.prodname_ghe_managed %}. ![Resultado da pesquisa de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-search.png)
1. Para começar o processo de adicionar uma nova conta de {% data variables.product.prodname_ghe_managed %}, clique em **Criar conta do GitHub AE**.
1. Insira as informações nos campos "Detalhes do projeto" e "Detalhes da instância". ![Resultado da pesquisa de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Nome da conta:** O nome do host da sua empresa
    - **Nome de usuário administrador:** Um nome de usuário para o proprietário corporativo inicial que será criado em {% data variables.product.prodname_ghe_managed %}
    - E-mail do administrador **:** O endereço de e-mail que receberá as informações de login
1. Para revisar um resumo das alterações propostas, clique em **Revisão + criar**.
1. Após a conclusão do processo de validação, clique em **Criar**.

O endereço de e-mail que você digitou acima receberá instruções sobre como acessar a sua empresa. Após ter acesso, você poderá começar seguindo os passos das configuração iniciais. Para obter mais informações, consulte "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

{% note %}

**Observação:** As atualizações de software para a sua instância {% data variables.product.prodname_ghe_managed %} são executadas por {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte[Sobre atualizações para novas versões de](/admin/overview/about-upgrades-to-new-releases)."

{% endnote %}

## Acessando a sua empresa

Você pode usar o {% data variables.actions.azure_portal %} para navegar para a sua instância de {% data variables.product.prodname_ghe_managed %}. A lista resultante inclui todas as instâncias de {% data variables.product.prodname_ghe_managed %} na sua região do Azure.

1. No {% data variables.actions.azure_portal %}, no painel esquerdo, clique em **Todos os recursos**.
1. Nos filtros disponíveis, clique em **Todos os tipos** e, em seguida, desmarque **Selecionar todos** e selecione **GitHub AE**: ![Resultado da pesquisa de {% data variables.actions.azure_portal %}](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Próximas etapas

Uma vez fornecida a sua instância, o próximo passo é para inicializar {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte "[Inicializar {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)".

## Finalizar a versão de avaliação

Você pode fazer a atualização para uma licença completa a qualquer momento durante o período de avaliação, entrando em contato com {% data variables.contact.contact_enterprise_sales %}. Se você não atualizou até o último dia de seu teste, a instância será excluída automaticamente.

Se precisar de mais tempo para avaliar o {% data variables.product.prodname_ghe_managed %}, entre em contato com {% data variables.contact.contact_enterprise_sales %} para solicitar uma extensão.

## Leia mais

- "[Habilitando as funcionalidades de {% data variables.product.prodname_advanced_security %} em {% data variables.product.prodname_ghe_managed %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)"
- "[Notas de versão de {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/github-ae-release-notes)" 
