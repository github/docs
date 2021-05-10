---
title: Introdução ao GitHub Actions para GitHub AE
intro: 'Aprenda a configurar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

Este artigo explica como os administradores do site podem configurar {% data variables.product.prodname_ghe_managed %} para usar {% data variables.product.prodname_actions %}.

### Gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} na sua empres

Você pode usar políticas para gerenciar o acesso a {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aplicando as políticas do GitHub Actions para sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

### Adicionar executores

{% note %}

**Observação:** Para adicionar {% data variables.actions.hosted_runner %}a {% data variables.product.prodname_ghe_managed %}, você precisará entrar em contato com o suporte de {% data variables.product.prodname_dotcom %}.

{% endnote %}

Para executar fluxos de trabalho de {% data variables.product.prodname_actions %}, você deve adicionar executores. Você pode adicionar executores aos níveis da empresa, organização ou repositório. Para obter mais informações, consulte "[Sobre {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)".


### Fortalecimento geral de segurança para {% data variables.product.prodname_actions %}

Se você quiser saber mais sobre as práticas de segurança para {% data variables.product.prodname_actions %}, consulte "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)".
