---
title: Solução de problemas de uso de licenças para GitHub Enterprise
intro: Você pode solucionar problemas de uso de licença para sua empresa auditando os relatórios de licença.
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: 8595aaad929e534ebbd474270f3e01f87113b5ec
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179938'
---
## Sobre o uso inesperado de licenças

Se o número de licenças consumidas da sua empresa for inesperado, você poderá revisar seu relatório de licenças consumidas para auditar seu uso de licenças em todas as suas implantações e assinaturas corporativas. Para obter mais informações, confira "[Como exibir o uso da licença para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" e "[Como exibir a assinatura e o uso da sua conta corporativa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

Se você encontrar erros, tente as etapas de solução de problemas.

Por motivos de privacidade, os proprietários corporativos não podem acessar diretamente os detalhes das contas de usuário, a menos que você use {% data variables.product.prodname_emus %}.

## Sobre o cálculo de licenças consumidas

Se um usuário atender a uma ou mais das condições a seguir, o {% data variables.product.company_short %} vai cobrar pelo usuário.

- O usuário utiliza implantações de {% data variables.product.prodname_ghe_server %}.
- O usuário é membro de uma das suas organizações na {% data variables.product.prodname_ghe_cloud %}.
- O usuário tem acesso de gravação a um dos repositórios privados da sua organização.
- O usuário é um {% data variables.visual_studio.prodname_vs_subscriber %}.

Cada convite para essas funções consumirá uma licença até que seja aceito ou expire. Para obter mais informações sobre as pessoas em sua empresa que consomem uma licença, confira "[Sobre preços por usuário](/billing/managing-billing-for-your-github-account/about-per-user-pricing)".

Para que cada usuário consuma apenas uma estação, independentemente de quantas implantações eles usam, você precisa sincronizar o uso de licenças entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Sincronizando o uso de licenças entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

Depois de sincronizar o uso das licenças, {% data variables.product.prodname_dotcom %} corresponde as contas de usuário em {% data variables.product.prodname_ghe_server %} às contas de usuário em {% data variables.product.prodname_ghe_cloud %} por endereço de email.

Primeiro, verificamos o endereço de email primário de cada usuário em {% data variables.product.prodname_ghe_server %}. Em seguida, tentamos corresponder esse endereço com o endereço de email de uma conta de usuário em {% data variables.product.prodname_ghe_cloud %}. Se sua empresa usa o SSO do SAML, primeiro verificamos os atributos de SAML a seguir em busca de endereços de email.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

Se nenhum endereço de email encontrado nesses atributos corresponder ao endereço de email primário em {% data variables.product.prodname_ghe_server %} ou se sua empresa não usar o SSO do SAML, verificaremos cada um dos endereços de email verificados do usuário em {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações sobre a verificação de endereços de email do {% data variables.product.prodname_dotcom_the_website %}, confira "[Como verificar seu endereço de email](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

## Campos nos arquivos de licença consumidos

O relatório de uso da licença do {% data variables.product.prodname_dotcom_the_website %} e o arquivo de uso de licença exportado do {% data variables.product.prodname_ghe_server %} incluem uma variedade de campos para ajudar você a solucionar problemas de uso de licença para sua empresa. 

### Relatório de uso de licença do {% data variables.product.prodname_dotcom_the_website %} (arquivo CSV)

O relatório de uso de licença para sua empresa é um arquivo CSV que contém as seguintes informações sobre os membros de sua empresa. Alguns campos são específicos para sua implantação do {% data variables.product.prodname_ghe_cloud %} (GHEC), ambientes conectados do {% data variables.product.prodname_ghe_server %} (GHES), ou suas assinaturas do {% data variables.product.prodname_vs %} (VSS) com o GitHub Enterprise.

| Campo | DESCRIÇÃO
| ----- | -----------
| github_com_login | O nome de usuário da conta do GHEC do usuário
| github_com_name | O nome de exibição da conta do GHEC do usuário
| github_com_profile | A URL da página de perfil do usuário no GHEC
| github_com_user   | Se o usuário tem ou não uma conta no GHEC |
| github_com_member_roles | Para cada uma das organizações às quais o usuário pertence no GHEC, o nome da organização e a função da pessoa nessa organização (`Owner` ou `Member`) separados por dois pontos<br><br>Organizações delimitadas por vírgulas |
| github_com_enterprise_role | Pode ser uma entre: `Owner`, `Member` ou `Outside collaborator`
| github_com_verified_domain_emails | Todos os endereços de email associados à conta GHEC do usuário que correspondem aos domínios verificados da sua empresa |
| github_com_saml_name_id | O nome de usuário do SAML |
| github_com_orgs_with_pending_invites | Todos os convites pendentes para a conta do GHEC do usuário ingressar em organizações em sua empresa |
| license_type | Pode ser `Visual Studio subscription` ou `Enterprise`
| enterprise_server_user| Se o usuário tem ou não pelo menos uma conta no GHES |
| enterprise_server_primary_emails | Os endereços de email primários associados a cada uma das contas do GHES do usuário |
| enterprise_server_user_ids | Para cada uma das contas do GHES do usuário, a ID de usuário da conta
| total_user_accounts | O número total de contas que a pessoa tem em GHEC e GHES
| visual_studio_subscription_user | Se o usuário é ou não um {% data variables.visual_studio.prodname_vs_subscriber %} |
| visual_studio_subscription_email | O endereço de email associado ao VSS do usuário |
| visual_studio_license_status | Se a licença do Visual Studio foi correspondida a um usuário do {% data variables.product.company_short %} |

{% data variables.visual_studio.prodname_vs_subscriber %}s que ainda não são membros de pelo menos uma organização em sua empresa serão incluídos no relatório com um status de convite pendente e não terão valores para o campo "Nome" ou "Link do perfil".

### Uso de licença exportada do {% data variables.product.prodname_ghe_server %} (arquivo JSON)

Seu uso de licença do {% data variables.product.prodname_ghe_server %} é um arquivo JSON que normalmente é usado ao realizar uma sincronização manual de licenças de usuário entre as implantações do {% data variables.product.prodname_ghe_server %} e do {% data variables.product.prodname_ghe_cloud %}. O arquivo contém as seguintes informações específicas para seu ambiente do {% data variables.product.prodname_ghe_server %}.

| Campo | Descrição
| ----- | -----------
| Recursos | Os recursos do {% data variables.product.prodname_github_connect %} habilitados em sua instância do {% data variables.product.prodname_ghe_server %} e a data e hora da habilitação.
| Nome do host | O nome do host de sua instância do {% data variables.product.prodname_ghe_server %}.
| Somente HTTP | Se o Transport Layer Security (TLS) está ativado e configurado em sua instância do {% data variables.product.prodname_ghe_server %}. Pode ser: `True` ou `False`. 
| Licença | Um hash de sua licença do {% data variables.product.prodname_ghe_server %}.
| Chave pública | A parte da chave pública da sua licença do {% data variables.product.prodname_ghe_server %}.
| ID de servidor | UUID gerado para sua instância do {% data variables.product.prodname_ghe_server %}.
| Versão | A versão da sua instância do {% data variables.product.prodname_ghe_server %}.

## Solução de problemas de licenças consumidas

Para garantir que cada usuário esteja consumindo apenas uma estação para diferentes implantações e assinaturas, tente as etapas de solução de problemas a seguir.

1. Para ajudar a identificar usuários que estão consumindo várias estações, se sua empresa usar domínios verificados para {% data variables.product.prodname_ghe_cloud %}, examine a lista de membros corporativos que não têm um endereço de email de um domínio verificado associado à conta deles em {% data variables.product.prodname_dotcom_the_website %}. Muitas vezes, esses são os usuários que consomem erroneamente mais de uma estação licenciada. Para obter mais informações, confira "[Como exibir os membros que não têm um endereço de email de um domínio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".

   {% note %}

  **Observação:** para facilitar a solução de problemas, recomendamos o uso de domínios verificados com sua conta corporativa no {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como verificar ou aprovar um domínio para sua empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

  {% endnote %}
1. Depois de identificar usuários que estão consumindo várias estações, verifique se o mesmo endereço de email está associado a todas as contas do usuário. Para obter mais informações sobre quais endereços de email precisam corresponder, confira "[Sobre o cálculo de licenças consumidas](#about-the-calculation-of-consumed-licenses)".
1. Se um endereço de email foi atualizado ou verificado recentemente para corrigir uma incompatibilidade, exiba o carimbo de data/hora do último trabalho de sincronização de licenças. Se um trabalho não tiver sido executado desde que a correção foi feita, dispare manualmente um novo trabalho. Para obter mais informações, confira "[Como sincronizar o uso da licença entre o GitHub Enterprise Server e o GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

Se você ainda tiver dúvidas sobre suas licenças consumidas após analisar as informações de solução de problemas acima, entre em contato com {% data variables.contact.github_support %} por meio do {% data variables.contact.contact_enterprise_portal %}.
