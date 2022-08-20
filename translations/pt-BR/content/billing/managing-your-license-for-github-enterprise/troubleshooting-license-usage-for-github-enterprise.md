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

Se o número de licenças consumidas da sua empresa for inesperado, você pode revisar o seu relatório de licença consumido para auditar o uso da sua licença em todas as suas implantações corporativas e assinaturas. Para obter mais informações, consulte "[Visualizando o uso da licença para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" e "[Visualizando a assinatura e o uso da conta corporativa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

Se você encontrar erros, você poderá tentar as etapas de solução de problemas.

Por razões de privacidade, os proprietários das empresas não podem acessar diretamente os detalhes das contas de usuários, a menos que você use {% data variables.product.prodname_emus %}.

## Sobre o cálculo das licenças consumidas

{% data variables.product.company_short %} cobra para cada pessoa que utiliza implantações de {% data variables.product.prodname_ghe_server %}, é integrante de uma das suas organizações em {% data variables.product.prodname_ghe_cloud %} ou é um {% data variables.product.prodname_vs_subscriber %}. Para obter mais informações sobre as pessoas da sua empresa que consomem uma licença, consulte "[Sobre preços por usuário](/billing/managing-billing-for-your-github-account/about-per-user-pricing)".

Para cada usuário consumir uma única estação, independentemente de quantas implantações eles usam, você deve sincronizar o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Sincronizando uso de licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

Depois de sincronizar o uso da licença, {% data variables.product.prodname_dotcom %} corresponde as contas de usuário em {% data variables.product.prodname_ghe_server %} a contas em {% data variables.product.prodname_ghe_cloud %} por endereço de e-mail.

Primeiro, verificamos o endereço de e-mail principal de cada usuário em {% data variables.product.prodname_ghe_server %}. Em seguida, tentamos corresponder esse endereço ao endereço de e-mail de uma conta de usuário em {% data variables.product.prodname_ghe_cloud %}. Se a empresa usa SSO SAML, primeiro verificamos atributos do SAML a seguir para endereços de e-mail.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `nome de usuário`
- `NameID`
- `emails`

Se nenhum endereço de e-mail encontrado nestes atributos corresponder ao endereço de e-mail principal em {% data variables.product.prodname_ghe_server %}, ou se sua empresa não usa o SAML SSO, verificamos os endereços de e-mail verificados por cada usuário no {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações sobre a verificação de endereços de e-mail em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Verificando seu endereço de e-mail](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## Campos nos arquivos de licença consumidos

O relatório de uso da licença de {% data variables.product.prodname_dotcom_the_website %} e o arquivo de uso da licença exportado de {% data variables.product.prodname_ghe_server %} incluem uma série de campos para ajudar você a resolver o uso de licença para a sua empresa.

### Relatório do uso da licença de {% data variables.product.prodname_dotcom_the_website %} (arquivo CSV)

O relatório de uso da licença para a sua empresa é um arquivo CSV que contém as seguintes informações sobre os integrantes da sua empresa. Alguns campos são específicos para a implantação do seu {% data variables.product.prodname_ghe_cloud %} (GHEC), {% data variables.product.prodname_ghe_server %} (GHES) ambientes conectados ou as suas assinaturas de {% data variables.product.prodname_vs %} (VSS) com o GitHub Enterprise.

| Campo                                    | Descrição                                                                                                                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| github_com_login                       | O nome de usuário da conta GHEC do usuário                                                                                                                                                                                          |
| github_com_name                        | O nome de exibição da conta GHEC do usuário                                                                                                                                                                                         |
| github_com_profile                     | A URL para a página de perfil do usuário no GHEC                                                                                                                                                                                    |
| github_com_user                        | Se o usuário tem ou não uma conta no GHEC                                                                                                                                                                                           |
| github_com_member_roles                | Para cada organização à qual o usuário pertence ao GHEC, o nome da organização e a função do usuário na organização (`proprietário` ou `membro`) separados por dois pontos<br><br>organizações delimitadas por vírgulas |
| github_com_enterprise_role             | Pode ser: `Proprietário`, `Integrante`ou `Colaborador externo`                                                                                                                                                                      |
| github_com_verified_domain_emails    | Todos os endereços de e-mail associados à conta GHEC do usuário que correspondem aos domínios verificados da sua empresa                                                                                                            |
| github_com_saml_name_id              | O nome de usuário do SAML                                                                                                                                                                                                           |
| github_com_orgs_with_pending_invites | Todos os convites pendentes para a conta do GHEC do usuário para participar de organizações na empresa                                                                                                                              |
| license_type                             | Pode ser: `Assinatura do Visual Studio` ou `Enterprise`                                                                                                                                                                             |
| enterprise_server_user                 | Se o usuário tem ou não uma conta no GHES                                                                                                                                                                                           |
| enterprise_server_primary_emails       | Os endereços de e-mail principais associados a cada uma das contas do GHES do usuário                                                                                                                                               |
| enterprise_server_user_ids             | Para as contas do GHES de cada usuário, o ID de usuário da conta                                                                                                                                                                    |
| total_user_accounts                    | O número total de contas que a pessoa tem em GHEC e GHES                                                                                                                                                                            |
| visual_studio_subscription_user        | Se o usuário é ou não um {% data variables.product.prodname_vs_subscriber %}
| visual_studio_subscription_email       | O endereço de e-mail associado ao VSS do usuário                                                                                                                                                                                    |
| visual_studio_license_status           | Se a licença do Visual Studio foi correspondida a um usuário de {% data variables.product.company_short %}

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

Para garantir que cada usuário esteja apenas consumindo uma única estação para diferentes implantações e assinaturas, experimente as seguintes etapas de resolução de problemas.

1. Para ajudar a identificar os usuários que estão consumindo várias estações, se sua empresa usa domínios verificados para {% data variables.product.prodname_ghe_cloud %}, revise a lista de integrantes da empresa que não possuem um endereço de e-mail de um domínio verificado associado à sua conta em {% data variables.product.prodname_dotcom_the_website %}. Frequentemente, estes são os usuários que consomem erroneamente mais de uma estação licenciada. Para obter mais informações, consulte "[Visualizando integrantes sem um endereço de e-mail de um domínio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".

   {% note %}

  **Observação:** Para facilitar a resolução de problemas, recomendamos usar domínios verificados com a sua conta corporativa em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Verificando ou aprovando um domínio para sua empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

  {% endnote %}
1. Depois de identificar usuários que estão consumindo vários lugares, certifique-se que o mesmo endereço de e-mail está associado a todas as contas do usuário. Para obter mais informações sobre quais endereços de e-mail devem corresponder, consulte "[Sobre o cálculo das licenças consumidas](#about-the-calculation-of-consumed-licenses)".
1. Se um endereço de e-mail foi recentemente atualizado ou verificado para corrigir uma incompatibilidade, consulte o registro de hora do último trabalho de sincronização de licença. Se um trabalho não for executado desde que a correção foi feita, acione um novo trabalho manualmente. Para obter mais informações, consulte "[Uso da licença de sincronização entre o GitHub Enterprise Server e o GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

Se você ainda tiver dúvidas sobre as suas licenças consumidas após revisar as informações de solução de problemas acima, você pode entrar em contato com {% data variables.contact.github_support %} por meio do {% data variables.contact.contact_enterprise_portal %}.
