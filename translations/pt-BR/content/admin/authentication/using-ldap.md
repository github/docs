---
title: Usar LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication/
  - /enterprise/admin/articles/about-ldap-authentication/
  - /enterprise/admin/articles/viewing-ldap-users/
  - /enterprise/admin/hidden/enabling-ldap-sync/
  - /enterprise/admin/hidden/ldap-sync/
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
intro: 'O LDAP permite autenticar o {% data variables.product.prodname_ghe_server %} em suas contas existentes e gerenciar centralmente o acesso ao repositório. O LDAP é um protocolo de aplicativo popular de acesso e manutenção dos serviços de informações de diretório, além de ser um dos protocolos mais comuns para integrar software de terceiros a diretórios de usuários em grandes empresas.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Serviços LDAP compatíveis

O {% data variables.product.prodname_ghe_server %} se integra aos seguintes serviços LDAP:

* Active Directory;
* FreeIPA;
* Oracle Directory Server Enterprise Edition;
* OpenLDAP;
* Open Directory;
* 389-ds.

### Considerações de nome de usuário no LDAP

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Configurar o LDAP na {% data variables.product.product_location %}

Depois que você configurar o LDAP, os usuários poderão acessar a instância com as credenciais LDAP. Quando os usuários acessarem pela primeira vez, seus nomes de perfil, endereços de e-mail e chaves SSH serão definidos com os atributos LDAP do diretório.

Quando você configurar o acesso LDAP dos usuários pelo {% data variables.enterprise.management_console %}, suas licenças de usuário não serão usadas até que o primeiro usuário faça login na sua instância. No entanto, se você criar uma conta manualmente usando as configurações de administrador do site, a licença do usuário é imediatamente contabilizada.

{% warning %}

**Aviso:** antes de configurar o LDAP na {% data variables.product.product_location %}, verifique se o serviço LDAP oferece suporte a resultados paginados.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Em "Authentication" (Autenticação), selecione **LDAP**. ![Selecionar LDAP](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Selecionar caixa de autenticação integrada](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Defina as configurações.

### Atributos LDAP
Use estes atributos para finalizar a configuração LDAP na {% data variables.product.product_location %}.

| Nome do atributo                                    | Tipo        | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Host`                                              | Obrigatório | Host LDAP, por exemplo, `ldap.example.com` ou `10.0.0.30`. Se o nome do host só estiver disponível na rede interna, talvez seja necessário configurar antes o DNS da {% data variables.product.product_location %} para que ele resolva o nome do host usando seus servidores de nomes internos.                                                                                                                                                                                                                                              |
| `Porta`                                             | Obrigatório | Porta em que os serviços de host LDAP estão escutando. Por exemplo: 389 e 636 (para LDAPS).                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `Criptografia`                                      | Obrigatório | Método de criptografia usado para proteger as comunicações com o servidor LDAP. Por exemplo, básico (sem criptografia), SSL/LDAPS (criptografia desde o início) e StartTLS (atualizar para comunicação com criptografia no momento da conexão).                                                                                                                                                                                                                                                                                               |
| `Usuário de pesquisa de domínio`                    | Opcional    | O usuário do LDAP que procura outros usuários que efetuam o login para permitir a autenticação. Em geral, é uma conta de serviço criada especificamente para integrações de terceiros. Use um nome totalmente qualificado, como `cn=Administrador,cn=Usuários,dc=Exemplo,dc=com`. Com o Active Directory, também é possível usar a sintaxe `[DOMAIN]\[USERNAME]` (por exemplo, `WINDOWS\Administrator`) para o usuário de pesquisa de domínio.                                                                                              |
| `Senha de pesquisa de domínio`                      | Opcional    | Senha do usuário de pesquisa de domínio.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `Grupos de administradores`                         | Opcional    | Ao fazerem login no seu appliance, os usuários deste grupo são promovidos a administradores do site. Se você não configurar um grupo de administradores LDAP, a primeira conta de usuário LDAP que acessar seu appliance será automaticamente promovida a administrador do site.                                                                                                                                                                                                                                                              |
| `Base de domínio`                                   | Obrigatório | `Distinguished Name` (DN) totalmente qualificado de uma subárvore LDAP em que você pretende procurar usuários e grupos. Você pode adicionar quantos quiser, mas cada grupo deve ser definido na mesma base de domínio que os usuários pertencentes a ele. Se você especificar grupos de usuários restritos, somente os usuários pertencentes a esses grupos estarão no escopo. É recomendável especificar o nível superior da sua árvore de diretórios LDAP como base de domínio e usar grupos de usuários restritos para controlar o acesso. |
| `Grupos de usuários restritos`                      | Opcional    | Se especificados, somente os usuários desses grupos poderão efetuar login. Você só precisa especificar os nomes comuns (CNs, Common Names) dos grupos e adicionar quantos grupos quiser. Se não houver grupos especificados, *todos* os usuários no escopo da base de domínio especificada poderão fazer login na sua instância do {% data variables.product.prodname_ghe_server %}.                                                                                                                                                        |
| `ID de usuário`                                     | Obrigatório | Atributo LDAP que identifica o usuário LDAP que tenta fazer a autenticação. Quando houver mapeamento estabelecido, os usuários poderão alterar seus nomes de usuário no {% data variables.product.prodname_ghe_server %}. Este campo deve ser `sAMAccountName` para a maioria das instalações do Active Directory, mas pode ser `uid` para outras soluções LDAP, como OpenLDAP. O valor padrão é `uid`.                                                                                                                                     |
| `Nome de perfil`                                    | Opcional    | Nome exibido na págin de perfil do usuário no {% data variables.product.prodname_ghe_server %}. Se a Sincronização LDAP estiver habilitada, os usuários poderão alterar seus nomes de perfil.                                                                                                                                                                                                                                                                                                                                               |
| `E-mails`                                           | Opcional    | Endereço de e-mail para a conta de usuário no {% data variables.product.prodname_ghe_server %}.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Chaves SSH`                                        | Opcional    | Chaves SSH públicas vinculadas à conta de um usuário no {% data variables.product.prodname_ghe_server %}. As chaves devem estar no formato OpenSSH.                                                                                                                                                                                                                                                                                                                                                                                         |
| `Chaves GPG`                                        | Opcional    | Chaves GPG vinculadas à conta de um usuário no {% data variables.product.prodname_ghe_server %}.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `Desabilitar autenticação LDAP em operações no Git` | Opcional    | Se estiver selecionada, essa opção [desativa](#disabling-password-authentication-for-git-operations) o recurso dos usuários para usar senhas LDAP a fim de autenticar as operações no Git.                                                                                                                                                                                                                                                                                                                                                    |
| `Habilitar verificação certificada LDAP`            | Opcional    | Se estiver selecionada, essa opção [desativa](#enabling-ldap-certificate-verification) a verificação de certificado LDAP.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Sincronização`                                     | Opcional    | Se estiver selecionada, essa opção [ativa](#enabling-ldap-sync) a Sincronização LDAP.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Desabilitar autenticação de senha nas operações no Git

Selecione **Disable username and password authentication for Git operations** (Desabilitar autenticação de nome de usuário e senha para operações do Git) nas configurações LDAP para impor o uso de tokens de acesso pessoal ou chaves SSH, o que pode ajudar a impedir a sobrecarga do servidor por solicitações de autenticação LDAP. Essa configuração é recomendável porque servidores LDAP com resposta lenta, especialmente combinados a um grande número de solicitações devido à sondagem, são uma causa comum de interrupções e problemas de desempenho.

![Desabilitar autenticação de senha LDAP na caixa de seleção do Git](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

Quando esta opção estiver selecionada, se tentar usar uma senha para as operações do Git pela linha de comando, o usuário receberá está mensagem de erro: `A autenticação de senha não é permitida para operações do Git. <code>Use um token de acesso pessoal`.

#### Habilitar verificação certificada LDAP

Selecione **Enable LDAP certificate verification** (Habilitar verificação certificada LDAP) nas suas configurações LDAP para validar o certificado de servidor LDAP que você usa com o TLS.

![Caixa de seleção de verificação certificada LDAP](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

Quando esta opção estiver selecionada, o certificado será validado para garantir o seguinte:
- Se o certificado contiver ao menos um nome alternativo da entidade (SAN, Subject Alternative Name), um dos SANs deve corresponder ao nome do host LDAP. Do contrário, o nome comum (CN) corresponderá ao nome de host LDAP.
- O certificado não deve estar expirado.
- O certificado deve estar assinado por uma autoridade de certificação (CA, Certificate Authority) confiável.

#### Habilitar a Sincronização LDAP

{% note %}

**Observação:** As equipes que usam Sincronização LDAP são limitadas a um máximo de 1499 integrantes.

{% endnote %}

A Sincronização LDAP permite sincronizar os usuários do {% data variables.product.prodname_ghe_server %} e a associação da equipe nos seus grupos LDAP estabelecidos. Assim, é possível estabelecer o controle de acesso baseado em função para os usuários do seu servidor LDAP, em vez de fazer isso manualmente no {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Criar equipes](/enterprise/{{ currentVersion }}/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)".

Para habilitar a Sincronização LDAP, selecione **Synchronize Emails** (Sincronizar e-mails), **Synchronize SSH Keys** (Sincronizar chaves SSH) ou **Synchronize GPG Keys** (Sincronizar chaves GPG) nas configurações LDAP.

![Caixa de seleção de sincronização](/assets/images/enterprise/management-console/ldap-synchronize.png)

Depois que você habilitar a sincronização LDAP, um trabalho de sincronização será executado no período especificado para fazer as seguintes operações em cada conta de usuário:

- Se você tiver permitido a autenticação integrada para usuários de fora do provedor de identidade e o usuário estiver usando a autenticação integrada, vá para o próximo usuário.
- Se não houver mapeamento LDAP para o usuário, tente mapeá-lo para uma entrada LDAP no diretório. Se não for possível mapear o usuário para uma entrada LDAP, suspenda o usuário em questão e passe para o seguinte.
- Se houver um mapeamento LDAP e a entrada LDAP correspondente no diretório estiver ausente, suspenda o usuário e passe para o seguinte.
- Se a entrada LDAP correspondente tiver sido marcada como desativada e o usuário ainda não estiver suspenso, suspenda o usuário e passe para o seguinte.
- Se a entrada LDAP correspondente não estiver marcada como desabilitada, se o usuário estiver suspenso e se a opção _Reativar usuários suspensos_ estiver habilitada na central do administrador, cancele a suspensão do usuário.
- Se a entrada LDAP correspondente incluir um atributo `name`, atualize o nome do perfil do usuário.
- Se a entrada LDAP correspondente estiver no grupo de administradores, promova o usuário a administrador do site.
- Se a entrada LDAP correspondente não estiver no grupo de administradores, rebaixe o usuário para uma conta regular.
- Se um campo LDAP User (Usuário LDAP) estiver definido para e-mails, sincronize as configurações de e-mail do usuário com a entrada LDAP. Defina a primeira entrada LDAP `mail` como e-mail principal.
- Se um campo LDAP User (Usuário LDAP) estiver definido para chaves SSH públicas, sincronize as chaves SSH públicas do usuário com a entrada LDAP.
- Se um campo LDAP User (Usuário LDAP) estiver definido para chaves GPG públicas, sincronize as chaves GPG públicas do usuário com a entrada LDAP.

{% note %}

**Observação**: as entradas LDAP só podem ser marcadas como desabilitadas se você usar o Active Directory, e se o atributo `userAccountControl` estiver presente e sinalizado com `ACCOUNTDISABLE`.

{% endnote %}

Um trabalho de sincronização também será executado no período especificado para fazer as seguintes operações em cada equipe mapeada para um grupo LDAP:

- Se um grupo LDAP correspondente de uma equipe tiver sido removido, remova todos os integrantes da equipe.
- Se as entradas do integrante LDAP tiverem sido removidas do grupo LDAP, remova os usuários correspondentes da equipe. Se o usuário perder o acesso a qualquer repositórios, exclua todas as bifurcações privadas que ele possa ter nesses repositórios.
- Se as entradas do integrante LDAP tiverem sido adicionadas ao grupo LDAP, adicione os usuários correspondentes à equipe. Se o usuário recuperar o acesso a quaisquer repositórios, restaure todas as bifurcações privadas dos repositórios que foram excluídos porque o usuário perdeu o acesso nos últimos 90 dias.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Aviso de segurança:**

Quando a Sincronização LDAP está ativada, os administradores do site e os proprietários da organização podem pesquisar grupos no diretório LDAP aos quais pretendem mapear a equipe.

Esse procedimento pode resultar na divulgação de informações confidenciais da organização para contratados ou outros usuários sem privilégios, inclusive:

- A existência de grupos LDAP específicos visíveis para o *usuário de pesquisa de domínio*;
- Integrantes do grupo LDAP que tenham contas de usuário no {% data variables.product.prodname_ghe_server %}, divulgadas ao criar uma equipe sincronizada com o grupo LDAP.

Se não houver intenção de divulgar essas informações, sua empresa ou organização deve restringir as permissões do *usuário de pesquisa de domínio* configurado no Console de administração. Caso não seja possível fazer essa restrição, entre em contato com o {% data variables.contact.contact_ent_support %}.

{% endwarning %}

#### Classes de grupo de objeto LDAP compatíveis

O {% data variables.product.prodname_ghe_server %} é compatível com as seguintes classes de grupo de objeto LDAP. Os grupos podem ser aninhados.

- `grupo`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

### Exibir e criar usuários LDAP

É possível exibir a lista completa de usuários LDAP que têm acesso à sua instância, e você também pode provisionar novos usuários.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Na barra lateral esquerda, clique em **LDAP users** (Usuários LDAP). ![Guia de usuários LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. Para procurar um usuário, digite um nome (total ou parcialmente) do usuário e clique em **Search** (Pesquisar). Os usuários serão exibidos nos resultados da pesquisa. Se o usuário não existir, clique em **Create** (Criar) para provisionar a nova conta. ![Pesquisa LDAP](/assets/images/enterprise/site-admin-settings/ldap-users-search.png)

### Atualizar contas LDAP

Se a [Sincronização LDAP estiver desabilitada](#enabling-ldap-sync), as alterações nas contas LDAP não serão sincronizadas automaticamente com o {% data variables.product.prodname_ghe_server %}.

* Para usar um novo grupo de administradores LDAP, os usuários devem ser promovidos e rebaixados manualmente no {% data variables.product.prodname_ghe_server %} a fim de refletir as mudanças no LDAP.
* Para adicionar ou remover contas LDAP nos grupos de administração LDAP, [promova ou rebaixe as contas no {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/user-management/promoting-or-demoting-a-site-administrator).
* Para remover contas LDAP, [suspenda as contas do {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users).

#### Sincronizar contas LDAP manualmente

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Em "LDAP," clique em **Sync now** (Sincronizar agora) para atualizar manualmente a conta com os dados do seu servidor LDAP. ![Botão LDAP sync now (Sincronizar LDAP agora)](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

Você também pode [usar a API para acionar uma sincronização manual](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap).

### Revogar o acesso à {% data variables.product.product_location %}

Se a [Sincronização LDAP estiver habilitada](#enabling-ldap-sync), remover as credenciais LDAP do usuário suspenderá a conta do usuário após a execução de sincronização seguinte.

Se a Sincronização LDAP **não** estiver habilitada, você deve suspender manualmente a conta do {% data variables.product.prodname_ghe_server %} após remover as credenciais LDAP. Para obter mais informações, consulte "[Suspender e cancelar a suspensão de usuários](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)".
