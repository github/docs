---
title: Excluir sua conta de usuário
intro: 'Você pode excluir sua conta de usuário do {% data variables.product.product_name %} a qualquer momento.'
redirect_from:
  - /articles/deleting-a-user-account/
  - /articles/deleting-your-user-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

A exclusão da conta de usuário remove todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas pertencentes à sua conta. {% if currentVersion == "free-pro-team@latest" %} Os problemas e as pull requests que você criou e os comentários que você fez nos repositórios pertencentes a outros usuários não serão excluídos. Em vez disso, eles serão associados ao nosso [usuário fantasma](https://github.com/ghost).{% else %}Os problemas e as pull requests que você criou e os comentários que você fez nos repositórios pertencentes a outros usuários não serão excluídos.{% endif %}

{% if currentVersion == "free-pro-team@latest" %} O nome da conta também fica disponível para ser usado por qualquer pessoa em uma nova conta, e a cobrança cessa. O endereço de e-mail associado à conta fica disponível para ser usado com uma conta diferente do {% data variables.product.product_name %}. {% endif %}

Se você for o único proprietário de uma organização, transfira a propriedade para outra pessoa ou exclua a organização para poder excluir sua conta de usuário. Caso haja outros proprietários na organização, remova a si mesmo da organização para poder excluir sua conta de usuário.

Para obter mais informações, consulte:
- "[Transferir a propriedade da organização](/articles/transferring-organization-ownership)"
- "[Excluir uma conta de organização](/articles/deleting-an-organization-account)"
- "[Remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization/)"

### Fazer backup dos dados da conta

Antes de excluir sua conta de usuário, faça uma cópia de todos os repositórios, bifurcações privadas, wikis, problemas e pull requests pertencentes à sua conta.

{% warning %}

**Aviso:** depois que sua conta de usuário tiver sido excluída, o GitHub não poderá restaurar o conteúdo dela.

{% endwarning %}

### Excluir sua conta de usuário

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Na parte inferior da página Account Settings (Configurações da conta), em "Delete account" (Excluir conta), clique em **Delete your account** (Excluir sua conta). Para poder excluir sua conta de usuário:
    - Se você for o único proprietário da organização, transfira a propriedade para outra pessoa ou exclua sua organização.
    - Caso haja outros proprietários na organização, remova a si mesmo da organização. ![Botão Account deletion (Exclusão de conta)](/assets/images/help/settings/settings-account-delete.png)
4. Na caixa de diálogo "Make sure you want to do this" (Certifique-se de que você quer fazer isso), conclua as etapas descritas para confirmar que está ciente do que acontecerá quando sua conta for excluída: ![Caixa de diálogo de confirmação Delete account (Excluir conta)](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% if currentVersion == "free-pro-team@latest" %}- Lembre-se de que todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas pertencentes à sua conta serão excluídos, a cobrança cessará e seu nome de usuário ficará disponível para ser usado por qualquer pessoa no {% data variables.product.product_name %}.
  {% else %}- Lembre-se de que todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas pertencentes à sua conta serão excluídos e seu nome de usuário ficará disponível para ser usado por qualquer pessoa no {% data variables.product.product_name %}.
  {% endif %}- No primeiro campo, digite seu nome de usuário ou e-mail do {% data variables.product.product_name %}.
    - No segundo campo, digite a frase do prompt.
