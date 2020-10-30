---
title: Aplicar políticas de gerenciamento de repositórios na conta corporativa
intro: Os proprietários corporativos podem aplicar determinadas políticas de gerenciamento de repositórios para todas as organizações pertencentes a uma conta corporativa ou permitir que as políticas sejam definidas em cada organização.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

Para obter mais informações, consulte "[Níveis de permissão do repositório para organizações](/articles/repository-permission-levels-for-an-organization)".

### Aplicar política sobre permissões padrão de repositório

Em todas as organizações pertencentes à conta corporativa, é possível definir um nível de permissão padrão de repositório (nenhum, leitura, gravação ou administrativo) para integrantes da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
4. Na guia **Repository policies** (Políticas de repositório), em "Default permissions" (Permissões padrão), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Default permissions" (Permissões padrão), use o menu suspenso e escolha uma política. ![Menu suspenso com opções de políticas de permissões de repositório](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)

### Aplicar política sobre como criar repositórios

Em todas as organizações pertencentes à conta corporativa, é possível permitir que os integrantes criem repositórios, restringir a criação de repositórios a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização. Caso você permita que os integrantes criem repositórios, escolha se eles poderão criar qualquer combinação de repositórios internos, privados e públicos. O {% data reusables.repositories.internal-repo-default %} Para obter mais informações sobre repositórios internos, consulte "[Criar um repositório interno](/articles/creating-an-internal-repository)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Repository policies** (Políticas de repositório), em "Repository creation" (Criação de repositórios), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
6. Clique em **Salvar**.

### Aplicar uma política de bifurcação de repositórios internos ou privados

Em todas as organizações que pertencem à conta corporativa, é possível permitir que pessoas com acesso a um repositório privado ou interno bifurquem o repositório, nunca permitir bifurcação de repositórios privados ou internos, ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Repository policies** (Políticas de repositório), em Repository forking" (Bifurcação de repositórios), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repository forking" (Bifurcação de repositórios), use o menu suspenso e escolha uma política. ![Menu suspenso com opções de políticas de bifurcação de repositórios](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

### Aplicar política sobre como convidar colaboradores externos para repositórios

Em todas as organizações pertencentes à conta corporativa, é possível permitir que os integrantes convidem colaboradores externos para repositórios, restringir o convite de colaboradores externos a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Repository policies** (Políticas de repositório), em "Repository invitations" (Convites para repositórios), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repository  invitations" (Convites para repositórios), use o menu suspenso e escolha uma política.  
   ![Menu suspenso com opções de políticas de convite de colaboradores externos](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)

### Aplicar política sobre como alterar a visibilidade do repositório

Em todas as organizações pertencentes à conta corporativa, é possível permitir que integrantes com permissões administrativas alterem a visibilidade de um repositório, restringir alterações na visibilidade do repositório a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Repository policies** (Políticas de repositório), em Repository visibility change" (Alteração na visibilidade do repositório), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Aplicar política sobre como excluir ou transferir repositórios

Em todas as organizações pertencentes à conta corporativa, é possível permitir que integrantes com permissões administrativas excluam ou transfiram um repositório, restringir exclusões e transferências de repositórios a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Repository policies** (Políticas de repositório), em Repository deletion and transfer" (Exclusão ou transferência de repositórios), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Aplicar política sobre como excluir problemas

Em todas as organizações pertencentes à conta corporativa, é possível permitir que integrantes com permissões administrativas excluam problemas em um repositório, restringir a exclusão de problemas a proprietários da organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na guia **Repository policies** (Políticas de repositório), em "Repository issue deletion" (Exclusão de problemas em repositórios), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Em "Repository issue deletion" (Exclusão de problemas em repositórios), use o menu suspenso e escolha uma política. ![Menu suspenso com opções de políticas de exclusão de problemas](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

### Aplicar uma política com o nome do branch-padrão

Em todas as organizações pertencentes à conta corporativa, é possível definir o nome do branch-padrão para quaisquer novos repositórios que os membros criarem. Você pode optar por aplicar esse nome do branch-padrão em todas as organizações ou permitir que as organizações individuais definam um nome diferente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Na aba **Políticas do repositório** em "Nome do branch-padrão", digite o do branch-padrão que os novos repositórios devem usar. ![Caixa de texto para digitar o nome do branch-padrão](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Opcionalmente, para aplicar o nome do branch-padrão para todas as organizações da empresa, selecione **Aplicar em toda a empresa**. ![Caixa de aplicação](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Clique em **Atualizar**. ![Botão de atualizar](/assets/images/help/business-accounts/default-branch-name-update.png)
