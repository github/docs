---
title: Converter um usuário em uma organização
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization/
  - /articles/explaining-the-account-transformation-warning/
  - /articles/converting-a-user-into-an-organization
intro: Você pode converter sua conta de usuário em uma organização. Isso permite permissões mais granulares para repositórios que pertencem à organização.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**Aviso**: antes de converter um usuário em uma organização, lembre-se destes pontos:

 - Você **não poderá** mais entrar na conta do usuário convertido.
 - Você **não poderá** mais criar nem modificar gists pertencentes à conta do usuário convertido.
 - Uma organização **não pode** ser convertida de volta em um usuário.
 - As chaves SSH, os tokens do OAuth, o perfil de trabalho, as reações e as informações do usuário associadas, **não** serão transferidos para a organização. Isso é válido apenas para a conta de usuário que está sendo convertida, e não para colaboradores da conta de usuário.
 - Qualquer commit feito com a conta do usuário convertido **não será mais vinculado** a essa conta. Os commits em si **permanecerão** intactos.

{% endwarning %}

### Manter a conta de usuário pessoal e criar uma organização manualmente

Se quiser que sua organização tenha o mesmo nome que atualmente você está usando para sua conta pessoal, ou quiser manter intactas as informações da sua conta de usuário pessoal, será preciso criar uma organização e transferir os repositórios para ela em vez de converter sua conta de usuário em uma organização.

1. Para manter o nome da sua conta de usuário atual para uso pessoal, [mude o nome da sua conta de usuário pessoal](/articles/changing-your-github-username) para algo novo e maravilhoso.
2. [Crie uma organização](/articles/creating-a-new-organization-from-scratch) com o nome original da sua conta de usuário pessoal.
3. [Transfira os repositórios](/articles/transferring-a-repository) para sua nova conta de organização.

### Converter sua conta pessoal em uma organização automaticamente

Você também pode converter sua conta de usuário pessoal diretamente em uma organização. A conversão da conta:
 - Preserva os repositórios como estão sem a necessidade de transferi-los para outra conta manualmente
 - Convida automaticamente colaboradores para equipes com permissões equivalentes às que tinham antes
 {% if currentVersion == "free-pro-team@latest" %}- Para contas de usuário em {% data variables.product.prodname_pro %}, transforma automaticamente a cobrança para [os {% data variables.product.prodname_team %}pagos](/articles/about-billing-for-github-accounts) sem a necessidade de inserir novamente as informações de pagamento, ajustar seu ciclo de cobrança ou de pagamento duplo a qualquer momento{% endif %}

1. Crie uma conta pessoal, que você usará para entrar no GitHub e acessar a organização e seus repositórios após conversão.
2.  [Saia das organizações](/articles/removing-yourself-from-an-organization) nas quais a conta de usuário que você está convertendo ingressou.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
5. Em "Transform account" (Transformar conta), clique em **Turn <username> into an organization** (Transformar <username> em uma organização). ![Botão de conversão da organização](/assets/images/help/settings/convert-to-organization.png)
6. Na caixa de diálogo Account Transformation Warning (Aviso de transformação da conta), revise e confirme a conversão. Observe que as informações nessa caixa são as mesmas do aviso no início deste artigo. ![Aviso de conversão](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Na página "Transform your user into an organization" (Transformar usuário em uma organização), em "Choose an organization owner" (Escolher um proprietário da organização), escolha a conta pessoal secundária que você criou na seção anterior ou outro usuário em que confia para gerenciar a organização. ![Página Add organization owner (Adicionar proprietário da organização)](/assets/images/help/organizations/organization-add-owner.png)
8. Escolha a assinatura da nova organização e insira as informações de cobrança se solicitado.
9. Clique em **Create Organization** (Criar organização).
10. Entre na nova conta de usuário criada na etapa um e use o alternador de contexto para acessar a nova organização.

{% tip %}

**Dica**: quando você converte uma conta de usuário em uma organização, os colaboradores nos repositórios que pertencem à conta são adicionados à nova organização como *colaboradores externos*. Você pode então convidar *colaboradores externos* para se tornarem integrantes da nova organização, se desejar. Para obter mais informações, consulte "[Níveis de permissão para uma organização](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)".

{% endtip %}

### Leia mais
- "[Configurar equipes](/articles/setting-up-teams)"
{% if currentVersion == "free-pro-team@latest" %}- "[Convidar usuários para participar da sua organização](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Acessar uma organização](/articles/accessing-an-organization)"
