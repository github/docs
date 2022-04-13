---
title: Converter um usuário em uma organização
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. Isso permite permissões mais granulares para repositórios que pertencem à organização.
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

 - You will **no longer** be able to sign into the converted personal account.
 - You will **no longer** be able to create or modify gists owned by the converted personal account.
 - Uma organização **não pode** ser convertida de volta em um usuário.
 - As chaves SSH, os tokens do OAuth, o perfil de trabalho, as reações e as informações do usuário associadas, **não** serão transferidos para a organização. This is only true for the personal account that's being converted, not any of the personal account's collaborators.
 - Any commits made with the converted personal account **will no longer be linked** to that account. Os commits em si **permanecerão** intactos.
 - Any forks of private repositories made with the converted personal account will be deleted.

{% endwarning %}

## Keep your personal account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your personal account into an organization.

1. To retain your current personal account name for your personal use, [change the name of your personal account](/articles/changing-your-github-username) to something new and wonderful.
2. [Create a new organization](/articles/creating-a-new-organization-from-scratch) with the original name of your personal account.
3. [Transfira os repositórios](/articles/transferring-a-repository) para sua nova conta de organização.

## Converter sua conta pessoal em uma organização automaticamente

You can also convert your personal account directly into an organization. A conversão da conta:
 - Preserva os repositórios como estão sem a necessidade de transferi-los para outra conta manualmente
 - Convida automaticamente colaboradores para equipes com permissões equivalentes às que tinham antes
 {% ifversion fpt or ghec %}- For personal accounts on {% data variables.product.prodname_pro %}, automatically transitions billing to [the paid {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) without the need to re-enter payment information, adjust your billing cycle, or double pay at any time{% endif %}

1. Crie uma conta pessoal, que você usará para entrar no GitHub e acessar a organização e seus repositórios após conversão.
2.  [Leave any organizations](/articles/removing-yourself-from-an-organization) the personal account you're converting has joined.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
5. Em "Transform account" (Transformar conta), clique em **Turn <username> into an organization** (Transformar <username> em uma organização). ![Botão de conversão da organização](/assets/images/help/settings/convert-to-organization.png)
6. Na caixa de diálogo Account Transformation Warning (Aviso de transformação da conta), revise e confirme a conversão. Observe que as informações nessa caixa são as mesmas do aviso no início deste artigo. ![Aviso de conversão](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Na página "Transform your user into an organization" (Transformar usuário em uma organização), em "Choose an organization owner" (Escolher um proprietário da organização), escolha a conta pessoal secundária que você criou na seção anterior ou outro usuário em que confia para gerenciar a organização. ![Página Add organization owner (Adicionar proprietário da organização)](/assets/images/help/organizations/organization-add-owner.png)
8. Escolha a assinatura da nova organização e insira as informações de cobrança se solicitado.
9. Clique em **Create Organization** (Criar organização).
10. Sign in to the new personal account you created in step one, then use the context switcher to access your new organization.

{% tip %}

**Tip**: When you convert a personal account into an organization, we'll add collaborators on repositories that belong to the account to the new organization as *outside collaborators*. Você pode então convidar *colaboradores externos* para se tornarem integrantes da nova organização, se desejar. Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% endtip %}

## Leia mais
- "[Configurar equipes](/articles/setting-up-teams)"
{% ifversion fpt or ghec %}- "[Convidar usuários para ingressar na organização](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Acessar uma organização](/articles/accessing-an-organization)"
