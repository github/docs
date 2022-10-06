---
title: Habilitar e testar logon único de SAML para sua organização
intro: 'Os administradores e proprietários da organização podem habilitar o logon único (SSO, Single Sign-On) de SAML para adicionar uma camada extra de segurança à organização.'
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
ms.openlocfilehash: f9b60931978f80de33c0e6a2d5268287e208040a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097254'
---
## Sobre o logon único SAML

Você pode habilitar o SAML SSO na sua organização sem exigir que todos os integrantes o utilizem. A habilitação (em vez da aplicação) do SAML SSO facilitará a adoção dele pela organização. Depois que a maioria dos integrantes da sua organização já estiver usando o SAML SSO, você poderá aplicá-lo a toda a organização.

{% data reusables.saml.ghec-only %}

Se você habilitar em vez de aplicar o SAML SSO, os integrantes da organização que preferem não usá-lo poderão continuar sendo integrantes da organização. Para obter mais informações sobre como impor o SSO do SAML, confira "[Como impor o logon único do SAML para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

## Habilitar e testar logon único de SAML para sua organização

Antes de aplicar o SAML SSO na sua organização, certifique-se de preparar a organização. Para obter mais informações, confira "[Como se preparar para impor o logon único do SAML na sua organização](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)".

Para obter mais informações sobre os IdPs (provedores de identidade) aos quais o {% data variables.product.company_short %} dá suporte no SSO do SAML, confira "[Como conectar seu provedor de identidade à sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Em "Logon único do SAML", selecione **Habilitar autenticação SAML**.
![Caixa de seleção usada para habilitar o SSO do SAML](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Observação:** depois de habilitar o SSO do SAML, você poderá baixar os códigos de recuperação de logon único para acessar sua organização mesmo que o IdP não esteja disponível. Para obter mais informações, confira "[Como baixar os códigos de recuperação de logon único do SAML da sua organização](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)".

  {% endnote %}

6. No campo "Sign on URL" (URL de logon), digite o ponto de extremidade HTTPS do seu IdP para solicitações de logon único. Esse valor está disponível na configuração do IdP.
![Campo referente à URL para a qual os membros serão encaminhados após a entrada](/assets/images/help/saml/saml_sign_on_url.png)
7. Como alternativa, no campo "Issuer" (Emissor), digite o nome do emissor do SAML. Isso confirma a autenticidade das mensagens enviadas.
![Campo referente ao nome do emissor do SAML](/assets/images/help/saml/saml_issuer.png)
8. Em "Public Certificate" (Certificado público), cole um certificado para verificar as respostas de SAML.
![Campo referente ao certificado público do provedor de identidade](/assets/images/help/saml/saml_public_certificate.png)
9. Clique em {% octicon "pencil" aria-label="The edit icon" %} e nos menus suspensos Método de Assinatura e Método de Resumo, escolha o algoritmo de hash usado pelo emissor SAML para verificar a integridade das solicitações.
![Menus suspensos dos algoritmos de hash Método de Assinatura e Método de resumo usados pelo emissor do SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar o SSO do SAML para sua organização, clique em **Testar configuração do SAML** para garantir que as informações inseridas estejam corretas. ![Botão usado para testar a configuração do SAML antes da imposição](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Dica:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. Para impor o SSO do SAML e remover todos os membros da organização que não foram autenticados por meio do IdP, selecione **Exigir a autenticação de SSO do SAML para todos os membros da organização _nome da organização_**. Para obter mais informações sobre como impor o SSO do SAML, confira "[Como impor o logon único do SAML para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".
![Caixa de seleção usada para exigir o SSO do SAML para sua organização ](/assets/images/help/saml/saml_require_saml_sso.png)
12. Clique em **Salvar**.
![Botão usado para salvar as configurações de SSO do SAML](/assets/images/help/saml/saml_save.png)

## Leitura adicional

- "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
