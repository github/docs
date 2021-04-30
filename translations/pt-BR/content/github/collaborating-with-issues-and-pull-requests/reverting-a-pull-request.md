---
title: Reverter uma pull request
intro: Você pode reverter uma pull request após ela ter sido incorporada ao branch upstream.
redirect_from:
  - /articles/reverting-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Sobre a reversão de uma pull request

Reverter uma pull request no {% data variables.product.product_name %} cria uma nova pull request que contém uma reversão do commit de merge da pull request original presente no merge.

### Reverter uma pull request

{% note %}

**Observação:** Você pode precisar reverter os commits individuais em sua pull request se qualquer um dos seguintes casos for verdade.

- A reversão da pull request causar conflitos de merge
- A pull request original não foi mesclada originalmente em {% data variables.product.product_name %}. Por exemplo, alguém poderia ter feito o merge da pull request usando um merge fast-forward na linha de comando.

Para obter mais informações sobre como usar o Git para reverter manualmente os commits individuais, consulte [reverter Git](https://git-scm.com/docs/git-revert.html) na documentação do Git.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja reverter.
3. Próximo à parte inferior da pull request, clique em **Rever** (Reverter). ![Link de reversão da pull request](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Faça merge da pull request resultante. Para obter mais informações, consulte "[Fazer merge de uma pull request](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)".
