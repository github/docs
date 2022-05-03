---
title: Usar CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: 'Se você usar o Serviço de Autenticação Central (CAS) para centralizar o acesso a vários aplicativos web, você poderá integrar o {% data variables.product.product_name %} configurando a autenticação do CAS para sua instância.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## Sobre autenticação do CAS para {% data variables.product.product_name %}

O CAS é um protocolo de logon único (SSO) que centraliza a autenticação para vários aplicativos web. Para obter mais informações, consulte "[Serviço de Autenticação Central](https://en.wikipedia.org/wiki/Central_Authentication_Service)" na Wikipédia.

Após configurar o CAS, as pessoas que usam {% data variables.product.product_location %} devem usar um token de acesso pessoal para autenticar as solicitações da API ou do Git por meio de HTTP(S). As credenciais do CAS não podem ser usadas para autenticar estas solicitações. Para obter mais informações, consulte "[Criando um token de acesso pessoal](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

Se você configurar o CAS, as pessoas com contas no seu provedor de identidade (IdP) não consomem uma licença de usuário até que a pessoa efetue o login em {% data variables.product.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Considerações de nome de usuário no CAS

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obter mais informações, consulte "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Atributos CAS

Os atributos a seguir estão disponíveis.

| Nome do atributo  | Tipo        | Descrição                                                              |
| ----------------- | ----------- | ---------------------------------------------------------------------- |
| `nome de usuário` | Obrigatório | Nome do usuário no {% data variables.product.prodname_ghe_server %}. |

## Configurar o CAS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Selecione **CAS**.

   ![Captura de tela da seleção do CAS para autenticação](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Captura de tela da opção de autenticação interna do CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. No campo **Server URL** (URL do servidor), digite a URL completa do seu servidor CAS. Se o servidor CAS usar um certificado que não pode ser validado pelo {% data variables.product.prodname_ghe_server %}, você poderá usar o comando `ghe-ssl-ca-certificate-install` para instalá-lo como certificado confiável. Para obter mais informações, consulte "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)".
