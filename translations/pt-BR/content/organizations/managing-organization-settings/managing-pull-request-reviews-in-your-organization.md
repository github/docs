---
title: Gerenciando revisões de pull request na sua organização
intro: Você pode limitar os usuários que podem aprovar ou solicitar alterações em um pull request na sua organização.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Gerenciar revisões de pull request
---

## Sobre limites de revisão de código

Por padrão, em repositórios públicos, qualquer usuário pode enviar análises que aprovem ou solicitem alterações em um pull request.

É possível limitar quem pode aprovar ou solicitar alterações em pull requests em repositórios públicos pertencentes à sua organização. Depois que você habilitar os limites de revisão de código, qualquer pessoa poderá comentar em pull requests nos seus repositórios públicos, mas somente pessoas com acesso explícito a um repositório poderão aprovar um pull request ou solicitar alterações.

Você também pode habilitar os limites de revisão de código para repositórios individuais. Se você habilitar os limites para a organização, você substituirá todos os limites para repositórios individuais pertencentes à organização. Para obter mais informações, consulte "[Gerenciando revisões de pull request no seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)".

## Habilitando limites de revisão de código

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Na seção "Acesso" da barra lateral, clique em **Moderação de {% octicon "report" aria-label="The report icon" %}**.
1. Em "Moderação de {% octicon "report" aria-label="The report icon" %}", clique em **Limites de revisão de código**. ![Captura de tela do item na barra lateral para limites de revisão de código para organizações](/assets/images/help/organizations/code-review-limits-organizations.png)
1. Revise as informações na tela. Clique em **Limitar revisão em todos os repositórios** para limitar análises para aqueles com acesso explícito ou clique em **Remover limites de revisão de todos os repositórios** para remover os limites de cada repositório público na sua organização. ![Captura de tela de revisão de código de configurações de limites para organizações](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
