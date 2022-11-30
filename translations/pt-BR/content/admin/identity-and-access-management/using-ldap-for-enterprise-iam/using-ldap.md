---
title: Usando o LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication
  - /enterprise/admin/articles/about-ldap-authentication
  - /enterprise/admin/articles/viewing-ldap-users
  - /enterprise/admin/hidden/enabling-ldap-sync
  - /enterprise/admin/hidden/ldap-sync
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
  - /admin/authentication/using-ldap
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
intro: 'Se você usa o protocolo LDAP para centralizar o acesso entre aplicativos, integre o {% data variables.product.product_name %} configurando a autenticação LDAP para sua instância.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
ms.openlocfilehash: 5d9b6aa9a5d641afa0b24dbe0e0f446ab723c735
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107522'
---
## Sobre a autenticação do LDAP no {% data variables.product.product_name %}

O LDAP é um protocolo de aplicativo popular para acesso e manutenção dos serviços de informações de diretório, além de ser um dos protocolos mais comuns para integração de software de terceiros a diretórios de usuários em grandes empresas. Para obter mais informações, confira "[Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)" na Wikipédia.

Se você usar um diretório LDAP para autenticação centralizada, poderá configurar a autenticação LDAP para as pessoas que usam a {% data variables.location.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Serviços LDAP compatíveis

O {% data variables.product.prodname_ghe_server %} se integra aos seguintes serviços LDAP:

* Active Directory
* FreeIPA;
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Abrir Diretório
* 389-ds.

## Considerações de nome de usuário no LDAP

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Para obter mais informações, veja "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Como configurar o LDAP com a {% data variables.location.product_location %}

Depois que você configurar o LDAP, os usuários poderão acessar a instância com as credenciais LDAP. Quando os usuários acessarem pela primeira vez, seus nomes de perfil, endereços de e-mail e chaves SSH serão definidos com os atributos LDAP do diretório.

Quando você configurar o acesso LDAP dos usuários pelo {% data variables.enterprise.management_console %}, suas licenças de usuário não serão usadas até que o primeiro usuário faça login na sua instância. No entanto, se você criar uma conta manualmente usando as configurações de administrador do site, a licença do usuário é imediatamente contabilizada.

{% warning %}

**Aviso:** antes de configurar o LDAP em {% data variables.location.product_location %}, verifique se o serviço LDAP dá suporte a resultados paginados.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Em "Autenticação", selecione **LDAP**.
![Seleção do LDAP](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Selecionar caixa de autenticação integrada](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Defina as configurações.

## Atributos LDAP
Use estes atributos para concluir a configuração do LDAP em {% data variables.location.product_location %}.

| Nome do atributo           | Tipo     | Descrição |
|--------------------------|----------|-------------|
| `Host`                   | Obrigatório | O host do LDAP, por exemplo, `ldap.example.com` ou `10.0.0.30`. Se o nome do host só está disponível na rede interna, talvez seja necessário configurar o DNS de {% data variables.location.product_location %} primeiro para que ele possa resolver o nome do host usando os servidores de nomes internos. |
| `Port`                   | Obrigatório | Porta em que os serviços de host LDAP estão escutando. Por exemplo: 389 e 636 (para LDAPS). |
| `Encryption`             | Obrigatório | Método de criptografia usado para proteger as comunicações com o servidor LDAP. Por exemplo, básico (sem criptografia), SSL/LDAPS (criptografia desde o início) e StartTLS (atualizar para comunicação com criptografia no momento da conexão). |
| `Domain search user`     | Opcional | O usuário do LDAP que procura outros usuários que efetuam o login para permitir a autenticação. Em geral, é uma conta de serviço criada especificamente para integrações de terceiros. Use um nome totalmente qualificado, como `cn=Administrator,cn=Users,dc=Example,dc=com`. Com o Active Directory, use também a sintaxe `[DOMAIN]\[USERNAME]` (por exemplo, `WINDOWS\Administrator`) para o usuário de pesquisa de domínio com o Active Directory. |
| `Domain search password` | Opcional | Senha do usuário de pesquisa de domínio. |
| `Administrators group`   | Opcional | Ao fazerem login no seu appliance, os usuários deste grupo são promovidos a administradores do site. Se você não configurar um grupo de administradores LDAP, a primeira conta de usuário LDAP que acessar seu appliance será automaticamente promovida a administrador do site. |
| `Domain base`            | Obrigatório | O DN (`Distinguished Name`) totalmente qualificado de uma subárvore do LDAP na qual você deseja pesquisar usuários e grupos. Você pode adicionar quantos quiser, mas cada grupo deve ser definido na mesma base de domínio que os usuários pertencentes a ele. Se você especificar grupos de usuários restritos, somente os usuários pertencentes a esses grupos estarão no escopo. É recomendável especificar o nível superior da sua árvore de diretórios LDAP como base de domínio e usar grupos de usuários restritos para controlar o acesso. |
| `Restricted user groups` | Opcional | Se especificados, somente os usuários desses grupos poderão efetuar login. Você só precisa especificar os nomes comuns (CNs, Common Names) dos grupos e adicionar quantos grupos quiser. Se nenhum grupo for especificado, *todos* os usuários no escopo da base de domínio especificada poderão entrar na sua instância do {% data variables.product.prodname_ghe_server %}. |
| `User ID`                | Obrigatório | Atributo LDAP que identifica o usuário LDAP que tenta fazer a autenticação. Quando houver mapeamento estabelecido, os usuários poderão alterar seus nomes de usuário no {% data variables.product.prodname_ghe_server %}. Esse campo deve ser `sAMAccountName` para a maioria das instalações do Active Directory, mas pode ser `uid` para outras soluções de LDAP, como o OpenLDAP. O valor padrão é `uid`. |
| `Profile name`           | Opcional | Nome exibido na págin de perfil do usuário no {% data variables.product.prodname_ghe_server %}. Se a Sincronização LDAP estiver habilitada, os usuários poderão alterar seus nomes de perfil. |
| `Emails`                 | Opcional | Endereço de e-mail para a conta de usuário no {% data variables.product.prodname_ghe_server %}. |
| `SSH keys`               | Opcional | Chaves SSH públicas vinculadas à conta de um usuário no {% data variables.product.prodname_ghe_server %}. As chaves devem estar no formato OpenSSH. |
| `GPG keys`               | Opcional | Chaves GPG vinculadas à conta de um usuário no {% data variables.product.prodname_ghe_server %}. |
| `Disable LDAP authentication for Git operations` | Opcional |Se selecionado, [desativa](#disabling-password-authentication-for-git-operations) a capacidade dos usuários de usar senhas do LDAP para autenticar operações do Git. |
| `Enable LDAP certificate verification` | Opcional |Se selecionado, [ativa](#enabling-ldap-certificate-verification) a verificação de certificado LDAP. |
| `Synchronization` | Opcional |Se selecionado, [ativa](#enabling-ldap-sync) a Sincronização LDAP. |

### Desabilitar autenticação de senha nas operações no Git

Selecione **Desabilitar autenticação de nome de usuário e senha para operações do Git** nas configurações do LDAP para impor o uso de {% data variables.product.pat_generic %}s ou de chaves SSH para acesso ao Git, o que pode ajudar a impedir que o servidor fique sobrecarregado por solicitações de autenticação LDAP. Essa configuração é recomendável porque servidores LDAP com resposta lenta, especialmente combinados a um grande número de solicitações devido à sondagem, são uma causa comum de interrupções e problemas de desempenho.

![Desabilitar autenticação de senha LDAP na caixa de seleção do Git](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

Quando essa opção for selecionada, se um usuário tentar usar uma senha para operações Git por meio da linha de comando, ele receberá a mensagem de erro `Password authentication is not allowed for Git operations. You must use a {% data variables.product.pat_generic %}.`

### Habilitar verificação certificada LDAP

Selecione **Habilitar a verificação de certificado LDAP** nas configurações do LDAP para validar o certificado do servidor LDAP usado com o TLS.

![Caixa de seleção de verificação certificada LDAP](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

Quando esta opção estiver selecionada, o certificado será validado para garantir o seguinte:
- Se o certificado contiver ao menos um nome alternativo da entidade (SAN, Subject Alternative Name), um dos SANs deve corresponder ao nome do host LDAP. Do contrário, o nome comum (CN) corresponderá ao nome de host LDAP.
- O certificado não expirou.
- O certificado deve estar assinado por uma autoridade de certificação (CA, Certificate Authority) confiável.

### Habilitar a Sincronização LDAP

{% note %}

**Observação:** as equipes que usam a Sincronização LDAP estão limitadas a, no máximo, 1.499 membros.

{% endnote %}

A Sincronização LDAP permite sincronizar os usuários do {% data variables.product.prodname_ghe_server %} e a associação da equipe nos seus grupos LDAP estabelecidos. Assim, é possível estabelecer o controle de acesso baseado em função para os usuários do seu servidor LDAP, em vez de fazer isso manualmente no {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Como criar equipes](/enterprise/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)".

Para habilitar a Sincronização LDAP, nas configurações do LDAP, selecione **Sincronizar Emails**, **Sincronizar Chaves SSH** ou **Sincronizar Chaves GPG**.

![Caixa de seleção de sincronização](/assets/images/enterprise/management-console/ldap-synchronize.png)

Depois que você habilitar a sincronização LDAP, um trabalho de sincronização será executado no período especificado para fazer as seguintes operações em cada conta de usuário:

- Se você tiver permitido a autenticação integrada para usuários de fora do provedor de identidade e o usuário estiver usando a autenticação integrada, vá para o próximo usuário.
- Se não houver mapeamento LDAP para o usuário, tente mapeá-lo para uma entrada LDAP no diretório. Se não for possível mapear o usuário para uma entrada LDAP, suspenda o usuário em questão e passe para o seguinte.
- Se houver um mapeamento LDAP e a entrada LDAP correspondente no diretório estiver ausente, suspenda o usuário e passe para o seguinte.
- Se a entrada LDAP correspondente tiver sido marcada como desativada e o usuário ainda não estiver suspenso, suspenda o usuário e passe para o seguinte.
- Se a entrada LDAP correspondente não estiver marcada como desabilitada, o usuário estiver suspenso e a opção _Reativar usuários suspensos_ estiver habilitada no Centro de Administração, cancele a suspensão do usuário.
- Se um ou mais grupos restritos de usuários estiverem configurados na instância e a entrada do LDAP correspondente não for em um desses grupos, suspenda o usuário.
- Se um ou mais grupos de usuários restritos estiverem configurados na instância, a entrada LDAP correspondente estiver em um desses grupos e a opção _Reativar usuários suspensos_ estiver habilitada no Centro de Administração, cancele a suspensão do usuário.
- Se a entrada LDAP correspondente incluir um atributo `name`, atualize o nome do perfil do usuário.
- Se a entrada LDAP correspondente estiver no grupo de administradores, promova o usuário a administrador do site.
- Se a entrada LDAP correspondente não estiver no grupo de administradores, rebaixe o usuário para uma conta regular.
- Se um campo LDAP User (Usuário LDAP) estiver definido para e-mails, sincronize as configurações de e-mail do usuário com a entrada LDAP. Defina a primeira entrada `mail` do LDAP como o email primário.
- Se um campo LDAP User (Usuário LDAP) estiver definido para chaves SSH públicas, sincronize as chaves SSH públicas do usuário com a entrada LDAP.  
- Se um campo LDAP User (Usuário LDAP) estiver definido para chaves GPG públicas, sincronize as chaves GPG públicas do usuário com a entrada LDAP.  

{% note %}

**Observação**: as entradas LDAP só poderão ser marcadas como desabilitadas se você usar o Active Directory e o atributo `userAccountControl` estiver presente e sinalizado com `ACCOUNTDISABLE`. Algumas variações do Active Directory, como o AD LDS e o ADAM, não dão suporte ao atributo `userAccountControl`.

{% endnote %}

Um trabalho de sincronização também será executado no período especificado para fazer as seguintes operações em cada equipe mapeada para um grupo LDAP:

- Se um grupo LDAP correspondente de uma equipe tiver sido removido, remova todos os integrantes da equipe.
- Se as entradas do integrante LDAP tiverem sido removidas do grupo LDAP, remova os usuários correspondentes da equipe. Se o usuário não for mais membro de nenhuma equipe na organização e não for proprietário da organização, remova-o da organização. Se o usuário perder o acesso a qualquer repositórios, exclua todas as bifurcações privadas que ele possa ter nesses repositórios.

  {% note %}

  **Observação:** a sincronização LDAP não removerá o usuário da organização se ele for proprietário dessa organização. Outro proprietário da organização precisará remover o usuário manualmente.

  {% endnote %}
- Se as entradas do integrante LDAP tiverem sido adicionadas ao grupo LDAP, adicione os usuários correspondentes à equipe. Se o usuário recuperar o acesso a quaisquer repositórios, restaure todas as bifurcações privadas dos repositórios que foram excluídos porque o usuário perdeu o acesso nos últimos 90 dias.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Aviso de segurança:**

Quando a Sincronização LDAP está ativada, os administradores do site e os proprietários da organização podem pesquisar grupos no diretório LDAP aos quais pretendem mapear a equipe.

Esse procedimento pode resultar na divulgação de informações confidenciais da organização para contratados ou outros usuários sem privilégios, inclusive:

- A existência de grupos de LDAP específicos visíveis para o *usuário de pesquisa de domínio*.
- Integrantes do grupo LDAP que tenham contas de usuário no {% data variables.product.prodname_ghe_server %}, divulgadas ao criar uma equipe sincronizada com o grupo LDAP.

Se a divulgação dessas informações não for desejada, sua empresa ou sua organização deverá restringir as permissões do *Usuário de pesquisa de domínio* configurado no console de administração. Caso não seja possível fazer essa restrição, entre em contato com o {% data variables.contact.contact_ent_support %}.

{% endwarning %}

### Classes de grupo de objeto LDAP compatíveis

O {% data variables.product.prodname_ghe_server %} é compatível com as seguintes classes de grupo de objeto LDAP. Os grupos podem ser aninhados.

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## Exibir e criar usuários LDAP

É possível exibir a lista completa de usuários LDAP que têm acesso à sua instância, e você também pode provisionar novos usuários.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %}
3. Na barra lateral esquerda, clique em **Usuários do LDAP**.
![Guia Usuários do LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. Para pesquisar um usuário, digite um nome de usuário completo ou parcial e clique em **Pesquisar**. Os usuários serão exibidos nos resultados da pesquisa. Se não houver um usuário, clique em **Criar** para provisionar a nova conta de usuário.
![Pesquisa do LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-search.jpg)

## Atualizar contas LDAP

A menos que a [Sincronização LDAP esteja habilitada](#enabling-ldap-sync), as alterações nas contas LDAP não serão sincronizadas automaticamente com o {% data variables.product.prodname_ghe_server %}.

* Para usar um novo grupo de administradores LDAP, os usuários devem ser promovidos e rebaixados manualmente no {% data variables.product.prodname_ghe_server %} a fim de refletir as mudanças no LDAP.
* Para adicionar ou remover contas LDAP em grupos de administradores LDAP, [promova ou rebaixe as contas no {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/user-management/promoting-or-demoting-a-site-administrator).
* Para remover contas LDAP, [suspenda as contas do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

### Sincronizar contas LDAP manualmente

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Em "LDAP", clique em **Sincronizar agora** para atualizar manualmente a conta com os dados do servidor LDAP.
![Botão Sincronizar LDAP agora](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

Você também pode [usar a API para disparar uma sincronização manual](/enterprise/user/rest/reference/enterprise-admin#ldap).

## Como revogar o acesso para {% data variables.location.product_location %}

Se a [Sincronização LDAP estiver habilitada](#enabling-ldap-sync), a remoção das credenciais LDAP de um usuário suspenderá a conta dele após a próxima execução da sincronização.

Se a Sincronização LDAP **não** estiver habilitada, você precisará suspender manualmente a conta do {% data variables.product.prodname_ghe_server %} depois de remover as credenciais LDAP. Para obter mais informações, confira "[Como suspender e cancelar a suspensão de usuários](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)".
