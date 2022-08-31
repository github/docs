---
title: Gerenciando a política de assinatura do commit para seu repositório
intro: 'Você pode exigir que os usuários assinem automaticamente os commits que criarem no seu repositório usando a interface web do {% data variables.product.product_name %}.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Gerenciar a política de aprovação de commit
---

## Sobre as autorizações de commit

As assinaturas de commits permitem que os usuários afirmem que um commit cumpre as regras e licenciamento que regem um repositório. Você pode habilitar assinaturas de commit obrigatórias em repositórios individuais para os usuários que fazem commit através da interface web do {% data variables.product.product_location %}, tornando a assinatura de um commit uma parte integrante do processo de commit. Uma vez que as assinaturas obrigatórias de commit estiverem habilitadas para um repositório, cada commit criado para esse repositório por meio da interface web do {% data variables.product.product_location %} será automaticamente assinado pelo autor do commit.

Os proprietários da organização também podem habilitar assinaturas de commit obrigatórias no nível da organização. Para obter mais informações, consulte "[Gerenciando a política de assinatura de commit para a sua organização](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)".

{% data reusables.repositories.commit-signoffs %}

## Habilitando ou desabilitando as assinaturas obrigatórias de commit para o seu repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Selecione **Exigir que os contribuidores assinem os commits baseados na web**. ![Captura de tela dos contribuidores obrigatórios para assinar commits baseados na web](/assets/images/help/repository/require-signoffs.png)
