---
title: Excluindo sua conta pessoal
intro: 'Você pode excluir sua conta pessoal em {% data variables.product.product_location %} a qualquer momento.'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
---

## About deletion of your personal account

A exclusão da sua conta pessoal irá remover todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas pertencentes à sua conta. {% ifversion fpt or ghec %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted. Your resources and comments will become associated with the [ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% ifversion ghec %}

{% note %}

**Note**: If your enterprise manages your account and you sign into {% data variables.product.product_location %} through your company's identity provider (IdP), you cannot delete your account. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)".

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}When you delete your account we stop billing you. O endereço de e-mail associado à conta fica disponível para uso com uma conta diferente no {% data variables.product.product_location %}. Após 90 dias, o nome da conta também fica disponível para qualquer pessoa usar em uma nova conta. {% endif %}

If you're the only owner of an organization, you must transfer ownership to another person or delete the organization before you can delete your personal account. Se houver outros proprietários na organização, você deverá remover-se da organização antes de excluir sua conta pessoal.

Para obter mais informações, consulte os seguintes artigos.

- "[Transferir a propriedade da organização](/articles/transferring-organization-ownership)"
- "[Excluir uma conta de organização](/articles/deleting-an-organization-account)"
- "[Remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization/)"

## Fazer backup dos dados da conta

Antes de excluir sua conta pessoal, faça uma cópia de todos os repositórios, bifurcações privadas, wikis, problemas e pull requests pertencentes à sua conta. For more information, see "[Backing up a repository](/repositories/archiving-a-github-repository/backing-up-a-repository)."

{% warning %}

**Warning:** Once your personal account has been deleted, {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes or ghae %}an enterprise owner{% endif %} cannot restore your content.

{% endwarning %}

## Excluir sua conta pessoal

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. Na parte inferior da página Account Settings (Configurações da conta), em "Delete account" (Excluir conta), clique em **Delete your account** (Excluir sua conta). Antes de poder excluir sua conta pessoal:
    - Se você for o único proprietário da organização, transfira a propriedade para outra pessoa ou exclua sua organização.
    - Caso haja outros proprietários na organização, remova a si mesmo da organização. ![Botão Account deletion (Exclusão de conta)](/assets/images/help/settings/settings-account-delete.png)
4. Na caixa de diálogo "Make sure you want to do this" (Certifique-se de que você quer fazer isso), conclua as etapas descritas para confirmar que está ciente do que acontecerá quando sua conta for excluída: ![Caixa de diálogo de confirmação Delete account (Excluir conta)](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% ifversion fpt or ghec %} - Lembre-se de que todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e sites de {% data variables.product.prodname_pages %} pertencentes à sua conta serão excluídos, sua cobrança terminará imediatamente e seu nome de usuário estará disponível para qualquer pessoa para uso em {% data variables.product.product_name %} após 90 dias.
  {% else %}- Lembre-se de que todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas pertencentes à sua conta serão excluídos e seu nome de usuário ficará disponível para ser usado por qualquer pessoa no {% data variables.product.product_name %}.
  {% endif %}- No primeiro campo, digite seu nome de usuário ou e-mail do {% data variables.product.product_name %}.
    - No segundo campo, digite a frase do prompt.
