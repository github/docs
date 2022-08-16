---
title: Solucionar problemas no uso da licença para o GitHub Enterprise
intro: Você pode solucionar o uso da licença para sua empresa através de relatórios de licença auditados.
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Solução de problemas do uso da licença
---

## Sobre uso inesperado da licença

Se o número de licenças consumidas da sua empresa for inesperado, você pode revisar o seu relatório de licença consumido para auditar o uso da sua licença em todas as suas implantações corporativas e assinaturas. For more information, see "[Viewing license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" and "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)."

Se você encontrar erros, você poderá tentar as etapas de solução de problemas.

For privacy reasons, enterprise owners cannot directly access the details of user accounts unless you use {% data variables.product.prodname_emus %}.

## Sobre o cálculo das licenças consumidas

{% data variables.product.company_short %} bills for each person who uses deployments of {% data variables.product.prodname_ghe_server %}, is a member of one of your organizations on {% data variables.product.prodname_ghe_cloud %}, or is a {% data variables.product.prodname_vs_subscriber %}. For more information about the people in your enterprise who consume a license, see "[About per-user pricing](/billing/managing-billing-for-your-github-account/about-per-user-pricing)."

For each user to consume a single seat regardless of how many deployments they use, you must synchronize license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Sincronizando uso de licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

After you synchronize license usage, {% data variables.product.prodname_dotcom %} matches user accounts on {% data variables.product.prodname_ghe_server %} with user accounts on {% data variables.product.prodname_ghe_cloud %} by email address.

First, we first check the primary email address of each user on {% data variables.product.prodname_ghe_server %}. Then, we attempt to match that address with the email address for a user account on {% data variables.product.prodname_ghe_cloud %}. If your enterprise uses SAML SSO, we first check the following SAML attributes for email addresses.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `nome de usuário`
- `NameID`
- `emails`

If no email addresses found in these attributes match the primary email address on {% data variables.product.prodname_ghe_server %}, or if your enterprise doesn't use SAML SSO, we then check each of the user's verified email addresses on {% data variables.product.prodname_ghe_cloud %}. For more information about verification of email addresses on {% data variables.product.prodname_dotcom_the_website %}, see "[Verifying your email address](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

## Campos nos arquivos de licença consumidos

O relatório de uso da licença de {% data variables.product.prodname_dotcom_the_website %} e o arquivo de uso da licença exportado de {% data variables.product.prodname_ghe_server %} incluem uma série de campos para ajudar você a resolver o uso de licença para a sua empresa.

### Relatório do uso da licença de {% data variables.product.prodname_dotcom_the_website %} (arquivo CSV)

O relatório de uso da licença para a sua empresa é um arquivo CSV que contém as seguintes informações sobre os integrantes da sua empresa. Alguns campos são específicos para a implantação do seu {% data variables.product.prodname_ghe_cloud %} (GHEC), {% data variables.product.prodname_ghe_server %} (GHES) ambientes conectados ou as suas assinaturas de {% data variables.product.prodname_vs %} (VSS) com o GitHub Enterprise.

| Campo                                    | Descrição                                                                                                                                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| github_com_login                       | The username for the user's GHEC account                                                                                                                                                                                  |
| github_com_name                        | The display name for the user's GHEC account                                                                                                                                                                              |
| github_com_profile                     | The URL for the user's profile page on GHEC                                                                                                                                                                               |
| github_com_user                        | Whether or not the user has an account on GHEC                                                                                                                                                                            |
| github_com_member_roles                | For each of the organizations the user belongs to on GHEC, the organization name and the user's role in that organization (`Owner` or `Member`) separated by a colon<br><br>Organizations delimited by commas |
| github_com_enterprise_role             | Can be one of: `Owner`, `Member`, or `Outside collaborator`                                                                                                                                                               |
| github_com_verified_domain_emails    | All email addresses associated with the user's GHEC account that match your enterprise's verified domains                                                                                                                 |
| github_com_saml_name_id              | The SAML username                                                                                                                                                                                                         |
| github_com_orgs_with_pending_invites | All pending invitations for the user's GHEC account to join organizations within your enterprise                                                                                                                          |
| license_type                             | Pode ser: `Assinatura do Visual Studio` ou `Enterprise`                                                                                                                                                                   |
| enterprise_server_user                 | Whether or not the user has at least one account on GHES                                                                                                                                                                  |
| enterprise_server_primary_emails       | The primary email addresses associated with each of the user's GHES accounts                                                                                                                                              |
| enterprise_server_user_ids             | For each of the user's GHES accounts, the account's user ID                                                                                                                                                               |
| total_user_accounts                    | The total number of accounts the person has across both GHEC and GHES                                                                                                                                                     |
| visual_studio_subscription_user        | Whether or not the user is a {% data variables.product.prodname_vs_subscriber %}
| visual_studio_subscription_email       | The email address associated with the user's VSS                                                                                                                                                                          |
| visual_studio_license_status           | Whether the Visual Studio license has been matched to a {% data variables.product.company_short %} user                                                                                                                   |

{% data variables.product.prodname_vs_subscriber %}s que ainda não são integrantes de pelo menos uma organização na sua empresa serão incluídos no relatório com um status de convite pendente, e faltarão os valores para o campo "Nome" ou "Link do perfil".

### {% data variables.product.prodname_ghe_server %} exportou o uso da licença (arquivo JSON)

O uso da sua licença de {% data variables.product.prodname_ghe_server %} é um arquivo JSON normalmente usado ao executar uma sincronização manual de licenças de usuário entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}. O arquivo contém as seguintes informações específicas ao seu ambiente {% data variables.product.prodname_ghe_server %}.

| Campo           | Descrição                                                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Funcionalidades | As funcionalidades de {% data variables.product.prodname_github_connect %} que estão habilitadas na instância do seu {% data variables.product.prodname_ghe_server %}, e a data e hora da habilitação. |
| Nome de host    | O nome do host da sua instância de {% data variables.product.prodname_ghe_server %}.                                                                                                                     |
| Apenas HTTP     | Se a Segurança de camada de transporte (TLS) está habilitada e configurada na sua instância de {% data variables.product.prodname_ghe_server %}. Pode ser: `Verdadeiro` ou `Falso`.                      |
| Licença         | Um hash da sua licença do {% data variables.product.prodname_ghe_server %}.                                                                                                                              |
| Chave pública   | A parte de chave pública da sua licença de {% data variables.product.prodname_ghe_server %}.                                                                                                             |
| ID do Servidor  | UUID gerado para sua instância de {% data variables.product.prodname_ghe_server %}.                                                                                                                      |
| Versão          | A versão da sua instância do {% data variables.product.prodname_ghe_server %}.                                                                                                                           |

## Solução de problemas das licenças consumidas

To ensure that the each user is only consuming a single seat for different deployments and subscriptions, try the following troubleshooting steps.

1. To help identify users that are consuming multiple seats, if your enterprise uses verified domains for {% data variables.product.prodname_ghe_cloud %}, review the list of enterprise members who do not have an email address from a verified domain associated with their account on {% data variables.product.prodname_dotcom_the_website %}. Frequentemente, estes são os usuários que consomem erroneamente mais de uma estação licenciada. Para obter mais informações, consulte "[Visualizando integrantes sem um endereço de e-mail de um domínio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".

   {% note %}

  **Note:** To make troubleshooting easier, we recommend using verified domains with your enterprise account on {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Verificando ou aprovando um domínio para sua empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

  {% endnote %}
1. After you identify users who are consuming multiple seats, make sure that the same email address is associated with all of the user's accounts. For more information about which email addresses must match, see "[About the calculation of consumed licenses](#about-the-calculation-of-consumed-licenses)."
1. If an email address was recently updated or verified to correct a mismatch, view the timestamp of the last license sync job. If a job hasn't run since the correction was made, manually trigger a new job. Para obter mais informações, consulte "[Uso da licença de sincronização entre o GitHub Enterprise Server e o GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

Se você ainda tiver dúvidas sobre as suas licenças consumidas após revisar as informações de solução de problemas acima, você pode entrar em contato com {% data variables.contact.github_support %} por meio do {% data variables.contact.contact_enterprise_portal %}.
