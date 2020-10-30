---
title: Renomear uma organização
intro: 'Se seu projeto ou sua empresa mudarem de nome, atualize o nome da organização.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name/
  - /articles/renaming-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Dica:** somente proprietários da organização podem renomear a organização. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

### O que acontece quando eu altero o nome da organização?

Depois que você altera o nome da organização, o nome antigo da organização fica disponível para ser usado por outra pessoa. Quando você altera o nome da organização, a maioria das referências ao repositórios no nome antigo da organização é alterada automaticamente para o novo nome. No entanto, alguns links para seu perfil não são redirecionados automaticamente.

#### Alterações que ocorrem automaticamente

- O {% data variables.product.prodname_dotcom %} redireciona automaticamente as referências aos seus repositórios.  Os links da web para os **repositórios** da organização continuarão a funcionar. Esse processo pode demorar alguns minutos após a alteração.
- Você pode continuar a fazer push dos repositórios locais para a URL de controle do remote antigo sem atualizá-lo. No entanto, recomendamos que você atualize todas as URLs do repositório remoto depois de alterar o nome da organização. Como o nome antigo da organização ficou disponível para uso por qualquer pessoa após a alteração, o proprietário da nova organização pode criar repositórios que sobrescrevem as entradas de redirecionamento para o seu repositório. Para obter mais informações, consulte "[Alterar o URL de um remote](/articles/changing-a-remote-s-url)".
- Os Git commits anteriores também serão atribuídos corretamente ao usuários na sua organização.

#### Alterações que não são automáticas

Depois de alterar o nome da organização:
- Os links para a página de perfil da organização anterior, como `https://{% data variables.command_line.backticks %}/previousorgname`, retornarão um erro 404. Recomendamos que você atualize os links para a organização de outros sites{% if currentVersion == "free-pro-team@latest" %}, como os perfis do LinkedIn ou do Twitter{% endif %}.
- As solicitações de API que usam o nome antigo da organização retornarão um erro 404. Recomendamos que você atualize o nome da organização nas solicitações de API.
- Não há nenhum redirecionamento automático da [@menção](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) para equipes que usam o nome antigo da organização.

### Alterar o nome da organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Perto da parte inferior da página de configuração, em "Rename organization" (Renomear organização), clique em **Rename Organization** (Renomear organização). ![Botão Rename organization (Renomear organização)](/assets/images/help/settings/settings-rename-organization.png)

### Leia mais

* "[Alterar o URL de um remote](/articles/changing-a-remote-s-url)"
* "[Por que meus commits estão vinculados ao usuário errado?](/articles/why-are-my-commits-linked-to-the-wrong-user)"
