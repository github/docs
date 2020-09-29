---
title: Exibir branches no repositório
intro: 'Os branches são fundamentais para a colaboração no {% data variables.product.product_name %}, e a melhor maneira de exibi-los é a página de branches.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
3. Use a navegação na parte superior da página para exibir listas específicas de branches:
    - **Your branches** (Seus branches): nos repositórios aos quais você tem acesso push, a exibição **Yours** (Seus) mostra todos os branches em que você fez push, com os mais recentes primeiro.
    - **Active branches** (Branches ativos): a exibição **Active** (Ativos) mostra todos os branches em que alguém fez commit nos últimos três meses, ordenados pelos branches com os commits mais recentes primeiro.
    - **Stale branches** (Branches obsoletos): a exibição **Stale** (Obsoletos) mostra todos os branches em que ninguém fez commit nos últimos três meses, ordenados pelos branches com os commits mais antigos primeiro. Use esta lista para determinar [quais branches devem ser excluídos](/articles/creating-and-deleting-branches-within-your-repository).
    - **All branches** (Todos os branches): a exibição **All** (Todos) mostra o branch padrão, seguido por todos os outros branches, ordenados pelos que têm os commits mais recentes primeiro.

![A página de branches do repositório Atom](/assets/images/help/branches/branches-overview-atom.png)

### Leia mais

- "[Criar e excluir branches no repositório](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Excluir branches não utilizados](/articles/deleting-unused-branches)"
