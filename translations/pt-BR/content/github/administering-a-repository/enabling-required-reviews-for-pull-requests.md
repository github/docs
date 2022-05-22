---
title: Habilitar revisões obrigatórias para pull requests
intro: Os administradores de repositório podem impor revisões obrigatórias para que as pull requests precisem ter um número específico de revisões de aprovação antes de fazer merge.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Antes de habilitar revisões obrigatórias em um branch, é preciso primeiro configurá-lo como um branch protegido. Para obter mais informações, consulte "[Configurar branches protegidos](/github/administering-a-repository/configuring-protected-branches)".

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Selecione **Require pull request reviews before merging** (Exigir revisões de pull request antes de fazer merge). ![Caixa de seleção Pull request review restriction (Restrição de revisão de pull request)](/assets/images/help/repository/PR-reviews-required.png)
6. No menu suspenso Required approving reviews (Revisões de aprovação obrigatórias), selecione o número de revisões de aprovação que você deseja no branch. ![Menu suspenso para selecionar o número de revisões de aprovação obrigatórias](/assets/images/help/repository/number-of-required-review-approvals.png)
7. Como alternativa, selecione **Dismiss stale pull request approvals when new commits are pushed** (Ignorar aprovações de pull requests obsoletas ao fazer push de novos commits). Isso ignora uma revisão de aprovação de pull request ao fazer push de um commit modificador de código no branch. ![Caixa de seleção Dismiss stale pull request approvals when new commits are pushed (Ignorar aprovações de pull requests obsoletas ao fazer push de novos commits)](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
8. Outra opção é selecionar **Require review from Code Owners** (Exigir revisão de proprietários de código) para exigir a revisão de um proprietário de código quando a pull request afetar códigos que tenham um proprietário designado. Para obter mais informações, consulte "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)". ![Require review from code owners (Exigir revisão de proprietários de código)](/assets/images/help/repository/PR-review-required-code-owner.png)
9. Caso o repositório faça parte de uma organização, selecione **Restrict who can dismiss pull request reviews** (Restringir quem pode ignorar revisões de pull request) para procurar e selecionar as pessoas ou equipes capacitadas para isso. Para obter mais informações, consulte "
Ignorar uma revisão de pull request". Essa opção não está disponível para repositórios pessoais. ![Caixa de seleção Restrict who can dismiss pull request reviews (Restringir quem pode ignorar revisões de pull request)](/assets/images/help/repository/PR-review-required-dismissals.png) </p> 
   
   {% data reusables.repositories.include-administrators %}</li> 
   
   11 Clique em **Criar**.</ol> 



### Leia mais

- "[Sobre revisões obrigatórias para pull requests](/github/administering-a-repository/about-required-reviews-for-pull-requests)"
- "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)"
- "[Sobre verificações de status obrigatórias](/github/administering-a-repository/about-required-status-checks)"
