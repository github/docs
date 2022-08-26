---
title: Gerenciando a política de aprovação do commit para sua organização
intro: 'Você pode exigir que os usuários assinem automaticamente todos os commits que criarem na interface web do {% data variables.product.product_name %} em repositórios pertencentes à sua organização.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Gerenciar a política de aprovação de commit
---

## Sobre as autorizações de commit

Para afirmar que um commit está de acordo com as regras e licenciamento de um repositório, muitas organizações exigem que os desenvolvedores assinem em todos os commits. Se sua organização requer assinaturas do commit, você pode tornar a assinatura de uma parte ininterrupta do processo de commit, permitindo a aprovação obrigatória de commits para os usuários que fizerem commit da interface web de {% data variables.product.product_name %}. Após habilitar as assinaturas de commit obrigatórias para uma organização, cada commit criado nos repositórios dessa organização por meio da interface web de {% data variables.product.product_name %} será automaticamente assinado pelo autor do commit.

Pessoas com acesso de administrador a um repositório também podem habilitar assinaturas de commit obrigatórias no nível de repositório. For more information, see "[Managing the commit signoff policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)."

{% data reusables.repositories.commit-signoffs %}

## Gerenciando as assinaturas de commit obrigatórias para sua organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}
1. Selecione ou desmarque **Exigir que os colaboradores assinem em commits baseados na web**. ![Captura de tela dos contribuidores obrigatórios para assinar commits baseados na web](/assets/images/help/organizations/require-signoffs.png)
