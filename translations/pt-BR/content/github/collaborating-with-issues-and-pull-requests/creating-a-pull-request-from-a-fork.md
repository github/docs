---
title: Criando uma pull request a partir de uma bifurcação
intro: É possível criar uma pull request para propor alterações que você fez em uma bifurcação de um repositório upstream.
redirect_from:
  - /articles/creating-a-pull-request-from-a-fork
permissions: Qualquer pessoa com acesso de gravação a um repositório pode criar uma pull request a partir de uma bifurcação pertencente ao usuário.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você também pode dar permissão aos mantenedores do repositório upstream para fazer push de commits em uma bifurcação de propriedade do usuário. Se sua pull request comparar o branch de tópico com um branch no repositório upstream como o branch base, o branch de tópico também será chamado de branch de comparação da pull request. Para obter mais informações sobre branches de pull request, incluindo exemplos, consulte "[Criar uma pull request](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)".

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navegue até o repositório original onde você criou sua bifurcação.
{% data reusables.repositories.new-pull-request %}
3. Na página de comparação, clique em **compare across forks** (comparar entre bifurcações). ![Link para comparação entre bifurcações](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. Use o menu suspenso "branch base" para selecionar o branch do repositório upstream no qual deseja fazer merge das alterações.![Menus suspensos para escolher o branch e a bifurcação base](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. No menu suspenso "bifurcação head", selecione sua bifurcação e, em seguida, use o menu suspenso "branch de comparação" para selecionar o branch no qual fez alterações. ![Menus suspensos para escolher o fork head e o branch de comparação](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png)
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

### Leia mais

- "[Trabalhar com bifurcações](/articles/working-with-forks)"
- "[Permitir alterações em um branch de pull request criada de uma bifurcação](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
