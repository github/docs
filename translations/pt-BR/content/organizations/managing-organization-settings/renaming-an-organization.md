---
title: Renomear uma organização
intro: 'Se seu projeto ou sua empresa mudarem de nome, atualize o nome da organização.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 088094a03e2416b4da0e3011978ab5e9edd316b2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095611'
---
{% tip %}

**Dica:** somente os proprietários da organização podem renomear uma organização. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

## O que acontece quando eu altero o nome da organização?

Depois que você altera o nome da organização, o nome antigo da organização fica disponível para ser usado por outra pessoa. Quando você altera o nome da organização, a maioria das referências ao repositórios no nome antigo da organização é alterada automaticamente para o novo nome. No entanto, alguns links para seu perfil não são redirecionados automaticamente.

### Alterações que ocorrem automaticamente

- O {% data variables.product.prodname_dotcom %} redireciona automaticamente as referências aos seus repositórios.  Os links da Web para os **repositórios** existentes da sua organização continuarão funcionando. Esse processo pode demorar alguns minutos após a alteração.
- Você pode continuar a fazer push dos repositórios locais para a URL de controle do remote antigo sem atualizá-lo. No entanto, recomendamos que você atualize todas as URLs do repositório remoto depois de alterar o nome da organização. Como o nome antigo da organização ficou disponível para uso por qualquer pessoa após a alteração, o proprietário da nova organização pode criar repositórios que sobrescrevem as entradas de redirecionamento para o seu repositório. Para obter mais informações, confira "[Como gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".
- Os Git commits anteriores também serão atribuídos corretamente ao usuários na sua organização.

### Alterações que não são automáticas

Depois de alterar o nome da organização:
- Os links para a página de perfil anterior da organização, como `https://{% data variables.command_line.backticks %}/previousorgname`, retornarão um erro 404. Recomendamos que você atualize os links para sua organização de outros sites{% ifversion fpt or ghec %}, como seus perfis do LinkedIn ou do Twitter{% endif %}.
- As solicitações de API que usam o nome antigo da organização retornarão um erro 404. Recomendamos que você atualize o nome da organização nas solicitações de API.
- Não há redirecionamentos automáticos [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) para equipes que usam o nome antigo da organização.{% ifversion ghec %}
- Se o SAML logon único (SSO) estiver habilitado para a organização, você deverá atualizar o nome da organização no aplicativo para {% data variables.product.prodname_ghe_cloud %} no seu provedor de identidade (IdP). Se você não atualizar o nome da organização no seu IdP, os integrantes da organização não poderão mais efetuar a autenticação com seu IdP para acessar os recursos da organização. Para obter mais informações, confira "[Como conectar seu provedor de identidade à sua organização](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)".{% endif %}

## Alterar o nome da organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Na parte inferior da página de configurações, em "Renomear organização", clique em **Renomear Organização**.
  ![Botão Renomear Organização](/assets/images/help/settings/settings-rename-organization.png)

## Leitura adicional

* "[Por que meus commits estão vinculados ao usuário errado?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"
