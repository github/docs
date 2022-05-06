---
title: Gerenciando moderadores da sua organização
intro: 'Você pode dar a um indivíduo ou equipe da sua organização a capacidade de bloquear e limitar o acesso, atribuindo-lhes a função de moderador.'
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Gerenciando moderadores
---

## Sobre moderadores da organização

Às vezes, é necessário bloquear um contribuidor ou definir limites de interação para a organização ou para repositórios individuais. Como proprietário da organização, você pode executar essas tarefas, mas você deverá delegar essas tarefas para outros integrantes da sua organização. Você pode fazer isso atribuindo um integrante da organização ou uma equipe, à função de moderador.

Os moderadores da organização podem:
* Bloquear e desbloquear usuários da organização. Para obter mais informações, consulte "[Bloquear um usuário em sua organização](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".
* Gerenciar limites de interação da organização. Para obter mais informações, consulte "[Restringir interações na organização](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".
* Gerenciar limites de interação do repositório. Para obter mais informações, consulte "[Restringir interações no seu repositório](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
* Ocultar comentários em todos os repositórios públicos pertencentes à organização. Para obter mais informações, consulte[Gerenciando comentários disruptivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)".

Tornar alguém moderador da organização não dá a elas habilidades adicionais diferentes das listadas acima. Por exemplo, alguém que só tem acesso de leitura a um repositório não obterá acesso de gravação sendo moderador.

Você pode adicionar até 10 pessoas ou equipes, como moderadores. Se você já atribuiu 10 indivíduos e/ou equipes como usuários e você deseja adicionar mais, você poderá agrupar pessoas numa equipe de moderadores e, em seguida, usá-las para substituir uma ou mais das atribuições existentes. For more information, see "[Creating a team](/organizations/organizing-members-into-teams/creating-a-team)."

## Adicionar um moderador de organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Na seção "Acesso" da barra lateral, selecione **Moderação de {% octicon "report" aria-label="The report icon" %}** e, em seguida, clique em **Moderadores**.
1. Em **moderadores**, pesquise e selecione a pessoa ou equipe à qual você deseja atribuir o papel de moderador. Cada pessoa ou equipe que você selecionar aparecerá na lista abaixo da barra de pesquisa. ![The Moderators search field and list](/assets/images/help/organizations/add-moderators.png)


## Removendo um moderador da organização

Siga os passos 1 a 4 acima e, em seguida, clique em **Remover moderador** ao lado da pessoa ou equipe que você deseja remover como moderador.
