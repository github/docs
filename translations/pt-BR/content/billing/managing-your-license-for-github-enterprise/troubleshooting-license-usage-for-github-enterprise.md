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

Se o número de licenças consumidas da sua empresa for inesperado, você pode revisar o seu relatório de licença consumido para auditar o uso da sua licença em todas as suas implantações corporativas e assinaturas. Se você encontrar erros, você poderá tentar as etapas de solução de problemas. Para obter mais informações sobre a visualização do uso de sua licença, consulte "[Visualizando o uso da licença para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" e "[Visualizando a assinatura e o uso da conta corporativa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

Por razões de privacidade, os proprietários da empresa não podem acessar diretamente os detalhes das contas de usuários.

## Sobre o cálculo das licenças consumidas

{% data variables.product.company_short %} cobra para cada pessoa que usa implantações de {% data variables.product.prodname_ghe_server %}, é um integrante de uma organização em {% data variables.product.prodname_ghe_cloud %} ou é um {% data variables.product.prodname_vs_subscriber %}. Para obter mais informações sobre as pessoas da sua empresa que são contabilizadas como consumindoras uma licença, consulte "[Sobre os preços por usuário](/billing/managing-billing-for-your-github-account/about-per-user-pricing)".

{% data reusables.enterprise-licensing.about-license-sync %}

## Campos nos arquivos de licença consumidos

O relatório de uso da licença de {% data variables.product.prodname_dotcom_the_website %} e o arquivo de uso da licença exportado de {% data variables.product.prodname_ghe_server %} incluem uma série de campos para ajudar você a resolver o uso de licença para a sua empresa.
### Relatório do uso da licença de {% data variables.product.prodname_dotcom_the_website %} (arquivo CSV)

O relatório de uso da licença para a sua empresa é um arquivo CSV que contém as seguintes informações sobre os integrantes da sua empresa. Alguns campos são específicos para a implantação do seu {% data variables.product.prodname_ghe_cloud %} (GHEC), {% data variables.product.prodname_ghe_server %} (GHES) ambientes conectados ou as suas assinaturas de {% data variables.product.prodname_vs %} (VSS) com o GitHub Enterprise.

| Campo                   | Descrição                                                                                                                                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nome                    | Primeiro e último nome da conta do usuário no GHEC.                                                                                                                                                                                                                                                         |
| Identificador ou e-mail | Nome de usuário do GHEC ou o endereço de e-mail associado à conta do usuário no GHES.                                                                                                                                                                                                                       |
| Link do perfil          | Link para a página de perfil de {% data variables.product.prodname_dotcom_the_website %} para a conta do usuário no GHEC.                                                                                                                                                                                 |
| Tipo de licença         | Pode ser: `Assinatura do Visual Studio` ou `Enterprise`.                                                                                                                                                                                                                                                    |
| Status da licença       | Identifica se uma conta de usuário em {% data variables.product.prodname_dotcom_the_website %} correspondeu com sucesso a um {% data variables.product.prodname_vs_subscriber %} ou usuário do GHES.<br><br> Pode ser: `Correspondido`, `Convite pendente`, `Apenas servidor` ou em branco. |
| Funções dos integrantes | Para cada organização à qual o usuário pertence no GHEC, o nome da organização e a função da pessoa nessa organização (`proprietário` ou `integrante`) separados por dois pontos<br><br>cada organização é delimitada por uma vírgula.                                                          |
| Função corporativa      | Pode ser: `Proprietário` ou `Integrante`.                                                                                                                                                                                                                                                                   |

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

Se o número de estações consumidas for inesperado, ou se você removeu recentemente os integrantes da sua empresa, recomendamos que você revise o uso da sua licença.

Para determinar quais usuários estão atualmente consumindo licenças da estação, primeiro tente revisar o relatório de licenças consumidas para a sua empresa{% ifversion ghes %} e/ou uma exportação do {% data variables.product.prodname_ghe_server %} uso da sua licença {% endif %} para entradas inesperadas.

Existem dois motivos especialmente comuns para a contagem da estação da licença inexacta ou incorreta.
- Os endereços de e-mail associados a um usuário não coincidem com as implantações e assinaturas corporativas.
- Um endereço de email para um usuário foi recentemente atualizado ou verificado para corrigir uma incompatibilidade, mas um trabalho de sincronização de licença não foi executado desde que a atualização foi feita.

Ao tentar combinar usuários em todas as empresas, {% data variables.product.company_short %} identifica indivíduos pelos endereços de e-mail verificados associados à sua conta {% data variables.product.prodname_dotcom_the_website %} e o endereço de e-mail principal associado à sua conta de {% data variables.product.prodname_ghe_server %} e/ou o endereço de e-mail atribuído ao {% data variables.product.prodname_vs_subscriber %}.

O uso da sua licença é recalculado logo após a realização de cada sincronização. Você pode ver o registro de hora do último trabalho de sincronização da licença e, se um trabalho não foi executado desde que um endereço de e-mail foi atualizado ou verificado, para resolver um problema com o seu relatório de licença consumida, você pode acionar um manualmente Para obter mais informações, consulte "[Uso da licença de sincronização entre o GitHub Enterprise Server e o GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

{% ifversion ghec or ghes %}
Se a empresa usa domínios verificados, revise a lista de integrantes da empresa que não possuem um endereço de e-mail de um domínio verificado associado à sua conta de {% data variables.product.prodname_dotcom_the_website %}. Frequentemente, estes são os usuários que consomem erroneamente mais de uma estação licenciada. Para obter mais informações, consulte "[Visualizando integrantes sem um endereço de e-mail de um domínio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".
{% endif %}

{% note %}

**Observação:** Por motivos de privacidade, o seu relatório de licença consumido só inclui o endereço de e-mail associado a uma conta de usuário em {% data variables.product.prodname_dotcom_the_website %} se o endereço for hospedado por um domínio verificado. Por esta razão, recomendamos o uso de domínios verificados com a sua conta corporativa em {% data variables.product.prodname_dotcom_the_website %}. Portanto, se uma pessoa estiver consumindo várias licenças incorretamente, você poderá resolver problemas mais facilmente, como você terá acesso ao endereço de e-mail que está sendo usado para a desduplicação da licença.

{% endnote %}

{% ifversion ghec %}

Se sua licença inclui {% data variables.product.prodname_vss_ghe %} e sua empresa também inclui pelo menos um ambiente de {% data variables.product.prodname_ghe_server %} conectado, é altamente recomendável usar {% data variables.product.prodname_github_connect %} para sincronizar automaticamente seu uso de licença. Para obter mais informações, consulte "[Sobre as assinaturas no Visual Studio com o GitHub Enterprise](/enterprise-cloud@latest/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)".

{% endif %}

Se você ainda tiver dúvidas sobre as suas licenças consumidas após revisar as informações de solução de problemas acima, você pode entrar em contato com {% data variables.contact.github_support %} por meio do {% data variables.contact.contact_enterprise_portal %}.
