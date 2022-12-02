---
title: Aplicando políticas para configurações de segurança na sua empresa
intro: É possível impor políticas para gerenciar as configurações de segurança nas organizações da sua empresa ou permitir que as políticas sejam definidas em cada organização.
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183961'
---
## Sobre políticas para configurações de segurança na sua empresa

É possível aplicar políticas para controlar as configurações de segurança das organizações pertencentes à sua empresa em {% data variables.product.product_name %}. Por padrão, os proprietários da organização podem gerenciar as configurações de segurança. 

{% ifversion ghec or ghes %}

## Exigir autenticação de dois fatores para organizações na sua empresa

Os proprietários corporativos podem exigir que integrantes da organização, gerentes de cobrança e colaboradores externos em todas as organizações pertencentes a uma empresa usem autenticação de dois fatores para proteger suas contas de usuário.

Antes de poder exigir a autenticação 2FA para todas as organizações pertencentes à sua empresa, você deve habilitar a autenticação de dois fatores para a sua própria conta. Para obter informações, confira "[Como proteger sua conta com a 2FA (autenticação de dois fatores)](/articles/securing-your-account-with-two-factor-authentication-2fa/)".

{% warning %}

**Avisos:**

- Se você exigir autenticação de dois fatores para a sua empresa, os integrantes, colaboradores externos e gerentes de cobrança (incluindo contas bot) em todas as organizações pertencentes à sua empresa que não utilizem 2FA serão removidos da organização e perderão acesso aos repositórios dela. Eles também perderão acesso às bifurcações dos repositórios privados da organização. Se a autenticação de dois fatores for habilitada para a conta deles em até três meses após a remoção da organização, será possível restabelecer as configurações e os privilégios de acesso deles. Para obter mais informações, confira "[Como restabelecer um ex-membro da sua organização](/articles/reinstating-a-former-member-of-your-organization)".
- Qualquer proprietário da organização, integrante, gerente de cobrança ou colaborador externo em qualquer das organizações pertencentes à sua empresa que desabilite a 2FA para a conta dele depois que você tiver habilitado a autenticação de dois fatores obrigatória será removido automaticamente da organização.
- Se você for o único proprietário de uma empresa que exige autenticação de dois fatores, não poderá desabilitar 2FA para sua conta sem desabilitar a autenticação de dois fatores obrigatória para a empresa.

{% endwarning %}

Antes de exigir o uso da autenticação de dois fatores, é recomendável notificar os integrantes da organização, colaboradores externos e gerentes de cobrança e pedir que eles configurem 2FA nas contas deles. Os proprietários da organização podem ver se integrantes e colaboradores externos já utilizam 2FA na página People (Pessoas) de cada organização. Para obter mais informações, confira "[Como ver se os usuários da sua organização têm a 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. Em "Two-factor authentication" (Autenticação de dois fatores), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Autenticação de dois fatores", selecione **Exigir a autenticação de dois fatores para todas as organizações na sua empresa** e clique em **Salvar**.
  ![Caixa de seleção usada para exigir a autenticação de dois fatores](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. Se solicitado, leia as informações sobre os integrantes e colaboradores externos que serão removidos das organizações pertencentes à sua empresa. Para confirmar a alteração, digite o nome da empresa e clique em **Remover membros e exigir a autenticação de dois fatores**.
  ![Caixa Confirmar a imposição de dois fatores](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Como alternativa, se algum integrante ou colaborador externo for removido das organizações pertencentes à sua empresa, recomendamos enviar um convite para restabelecer os privilégios e o acesso à organização que ele tinha anteriormente. Cada pessoa precisa habilitar a autenticação de dois fatores para poder aceitar o convite.

{% endif %}

## Gerenciando as autoridades de certificados de SSH da sua empresa

Você pode usar as autoridades de certificados SSH (CA) para permitir que os integrantes de qualquer organização pertencente à sua empresa acessem os repositórios da organização usando certificados SSH que você fornecer. {% data reusables.organizations.can-require-ssh-cert %} Para obter mais informações, confira "[Sobre as autoridades de certificação SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".

{% data reusables.organizations.add-extension-to-cert %}

### Adicionar uma autoridade certificada de SSH

Se você precisar de certificados SSH para sua empresa, os integrantes da empresa deverão usar um URL especial para operações do Git por meio do SSH. Para obter mais informações, confira "[Sobre as autoridades de certificado SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### Excluir uma autoridade certificada de SSH

A exclusão de uma CA não pode ser desfeita. Se você quiser usar a mesma CA no futuro, precisará fazer upload dela novamente.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## Como gerenciar o SSO para usuários não autenticados

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

Se a sua empresa usa {% data variables.product.prodname_emus %}, você pode escolher o que os usuários não autenticados veem ao tentar acessar os recursos da sua empresa. Para obter mais informações sobre o {% data variables.product.prodname_emus %}, confira "[Sobre o {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)".

Por padrão, para ocultar a existência de recursos privados, quando um usuário não autenticado tenta acessar sua empresa, o {% data variables.product.company_short %} exibe um erro 404.

Para evitar confundir os desenvolvedores, você pode alterar esse comportamento para que os usuários sejam redirecionados automaticamente para o SSO (logon único) por meio do IdP (provedor de identidade). Quando você habilita redirecionamentos automáticos, qualquer pessoa que visita a URL de qualquer um dos recursos da sua empresa pode ver que tais recursos existem. No entanto, eles só poderão ver o recurso se tiverem as devidas permissões de acesso após a autenticação no seu IdP.

{% note %}

**Observação:** se um usuário estiver conectado na conta pessoal dele ao tentar acessar qualquer um dos recursos da sua empresa, ele será automaticamente desconectado e redirecionado ao SSO para entrar no {% data variables.enterprise.prodname_managed_user %} dele. Para obter mais informações, confira "[Como gerenciar várias contas](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)".

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "Configurações de logon único", marque ou desmarque **Redirecionar automaticamente os usuários para entrar**.

   ![Caixa de seleção para redirecionar automaticamente os usuários para entrar](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) {% endif %}

## Leitura adicional

- "[Sobre o gerenciamento de identidades e acesso para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)" {%- ifversion ghec %}
- "[Como acessar relatórios de conformidade para sua empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)" {%- endif %} {%- ifversion ghec or ghae %}
- "[Como restringir o tráfego de rede com uma lista de permissões de IP](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" {%- endif %}
