---
title: Converter um usuário em uma organização
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: Você pode converter a sua conta pessoal em uma organização. Isso permite permissões mais granulares para repositórios que pertencem à organização.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Usuário em uma organização
---

{% warning %}

**Aviso**: antes de converter um usuário em uma organização, lembre-se destes pontos:

 - Você **não poderá mais** efetura login na conta pessoal convertida.
 - Você **não poderá mais** criar ou modificar gists pertencentes à conta pessoal convertida.
 - Uma organização **não pode** ser convertida de volta em um usuário.
 - As chaves SSH, os tokens do OAuth, o perfil de trabalho, as reações e as informações do usuário associadas, **não** serão transferidos para a organização. Isso é válido apenas para a conta pessoal que está sendo convertida, não para os colaboradores da conta pessoal.
 - Todos os commits criados com a conta pessoal convertida **não serão mais vinculados** a essa conta. Os commits em si **permanecerão** intactos.
 - Todas as bifurcações de repositórios privados criadas com a conta pessoal convertida serão excluídas.

{% endwarning %}

## Mantenha sua conta pessoal e crie uma nova organização manualmente

Se quiser que sua organização tenha o mesmo nome que está usando atualmente na sua conta pessoal ou se quiser manter as informações da sua conta pessoal intactas, você deverá criar uma nova organização e transferir seus repositórios para ela em vez de converter sua conta pessoal em uma organização.

1. Para manter o seu nome de conta pessoal atual para o seu uso pessoal, [altere o nome da sua conta pessoal](/articles/changing-your-github-username) para algo novo e maravilhoso.
2. [Crie uma nova organização](/articles/creating-a-new-organization-from-scratch) com o nome original da sua conta pessoal.
3. [Transfira os repositórios](/articles/transferring-a-repository) para sua nova conta de organização.

## Converter sua conta pessoal em uma organização automaticamente

Você também pode converter sua conta pessoal diretamente em uma organização. A conversão da conta:
 - Preserva os repositórios como estão sem a necessidade de transferi-los para outra conta manualmente
 - Convida automaticamente colaboradores para equipes com permissões equivalentes às que tinham antes
 {% ifversion fpt or ghec %}- Para contas pessoais no {% data variables.product.prodname_pro %}, faz a transição da cobrança automaticamente para o [{% data variables.product.prodname_team %} pago](/articles/about-billing-for-github-accounts) sem a necessidade de inserir novamente as informações de pagamento, ajustar o ciclo de cobrança ou pagar em dobro{% endif %}

1. Crie uma conta pessoal, que você usará para entrar no GitHub e acessar a organização e seus repositórios após conversão.
2.  [Deixe qualquer organização](/articles/removing-yourself-from-an-organization) a conta pessoal que você está convertendo começou a participar.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
5. Em "Transformar conta", clique em **Transformar<username> em uma organização**. ![Botão de conversão da organização](/assets/images/help/settings/convert-to-organization.png)
6. Na caixa de diálogo Account Transformation Warning (Aviso de transformação da conta), revise e confirme a conversão. Observe que as informações nessa caixa são as mesmas do aviso no início deste artigo. ![Aviso de conversão](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Na página "Transform your user into an organization" (Transformar usuário em uma organização), em "Choose an organization owner" (Escolher um proprietário da organização), escolha a conta pessoal secundária que você criou na seção anterior ou outro usuário em que confia para gerenciar a organização. ![Página Add organization owner (Adicionar proprietário da organização)](/assets/images/help/organizations/organization-add-owner.png)
8. Escolha a assinatura da nova organização e insira as informações de cobrança se solicitado.
9. Clique em **Create Organization** (Criar organização).
10. Efetue o login na nova conta pessoal que você criou na primeira etapa e, em seguida, use o alternador de contexto para acessar sua nova organização.

{% tip %}

**Dica**: quando você converte uma conta pessoal em uma organização, os colaboradores nos repositórios que pertencem à conta são adicionados à nova organização como *colaboradores externos*. Você pode então convidar *colaboradores externos* para se tornarem integrantes da nova organização, se desejar. Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% endtip %}

## Leia mais
- "[Configurar equipes](/articles/setting-up-teams)"
{% ifversion fpt or ghec %}- "[Convidar usuários para ingressar na organização](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Acessar uma organização](/articles/accessing-an-organization)"
