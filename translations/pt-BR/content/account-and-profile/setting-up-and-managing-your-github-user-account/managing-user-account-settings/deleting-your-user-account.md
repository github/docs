---
title: Excluir sua conta de usuário
intro: 'Você pode excluir sua conta pessoal em {% data variables.product.product_name %} a qualquer momento.'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Excluir sua conta pessoal
---

A exclusão da sua conta pessoal irá remover todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas pertencentes à sua conta. {% ifversion fpt or ghec %} Os problemas e as pull requests que você criou e os comentários que você fez nos repositórios pertencentes a outros usuários não serão excluídos. Em vez disso, eles serão associados ao nosso [usuário fantasma](https://github.com/ghost).{% else %}Os problemas e as pull requests que você criou e os comentários que você fez nos repositórios pertencentes a outros usuários não serão excluídos.{% endif %}

{% ifversion fpt or ghec %} Ao excluir a sua conta, nós paramos de cobrar você. O endereço de e-mail associado à conta fica disponível para uso com uma conta diferente no {% data variables.product.product_location %}. Após 90 dias, o nome da conta também fica disponível para qualquer pessoa usar em uma nova conta. {% endif %}

Se você é o único proprietário de uma organização, você deverá transferir a propriedade para outra pessoa ou excluir a organização antes de excluir a sua conta pessoal. Se houver outros proprietários na organização, você deverá remover-se da organização antes de excluir sua conta pessoal.

Para obter mais informações, consulte:
- "[Transferir a propriedade da organização](/articles/transferring-organization-ownership)"
- "[Excluir uma conta de organização](/articles/deleting-an-organization-account)"
- "[Remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization/)"

## Fazer backup dos dados da conta

Antes de excluir sua conta pessoal, faça uma cópia de todos os repositórios, bifurcações privadas, wikis, problemas e pull requests pertencentes à sua conta.

{% warning %}

**Aviso:** Uma vez que excluída a sua conta pessoal, o GitHub não poderá restaurar seu conteúdo.

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
