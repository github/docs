---
title: Gerenciando avaliações de pull request no seu repositório
intro: É possível limitar os usuários que podem aprovar ou solicitar alterações em um repositório público.
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Gerenciar revisões de pull request
---

## Sobre limites de revisão de código

Por padrão, em repositórios públicos, qualquer usuário pode enviar análises que aprovem ou solicitem alterações em um pull request.

Você pode limitar os usuários que podem enviar análises que aprovem ou solicitem alterações em pull requests no seu repositório público. Ao habilitar os limites de revisão de código, qualquer pessoa pode comentar sobre pull requests no seu repositório público, mas apenas as pessoas com acesso de leitura ou superior podem aprovar pull requests ou solicitar alterações.

Você também pode habilitar limites de revisão de código para uma organização. Se você habilitar limites para uma organização, você substituirá todos os limites para repositórios individuais pertencentes à organização. Para obter mais informações, consulte "[Gerenciando revisões de pull request na sua organização](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)"

## Habilitando limites de revisão de código

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Em **Acessar**, clique em **Opções de moderação**. ![Configurações de repositório com opções de moderação](/assets/images/help/repository/access-settings-repositories.png)
1. Em **Opções de moderação**, clique em **Limites do código de revisão**. ![A revisão de código limita os repositórios](/assets/images/help/repository/code-review-limits-repositories.png)
1. Selecione ou desmarque **Limitar para os usuários que receberam explicitamente acesso de leitura ou superior**. ![Revisão de limite no repositório](/assets/images/help/repository/limit-reviews-in-repository.png)
