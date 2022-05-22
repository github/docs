---
title: Criar organizações
redirect_from:
  - /enterprise/admin/articles/creating-organizations/
  - /enterprise/admin/user-management/creating-organizations
intro: Você pode configurar uma nova organização ou converter uma conta pessoal em organização.
versions:
  enterprise-server: '*'
---

Organização é um conjunto de contas de usuário que tem repositórios. As organizações têm um ou mais proprietários, isto é, pessoas com privilégios administrativos. Além disso, as organizações podem ser usadas para gerar namespaces. Por exemplo, `http(s)://[hostname]/[nome da organização]/` redireciona você para o perfil da organização no {% data variables.product.prodname_ghe_server %}, enquanto `http(s)://[hostname]/[nome da organização]/[nome do repositório]/`redireciona você para o perfil de um repositório.

Quando você cria uma organização, ela não precisa ter repositórios associados. A qualquer momento, [os integrantes da organização que têm função de Proprietário podem adicionar novos repositórios](/enterprise/{{ currentVersion }}/user/articles/permission-levels-for-an-organization) ou transferir os existentes. Para obter mais informações, consulte "[Transferir repositórios](/enterprise/{{ currentVersion }}/user/articles/transferring-a-repository)".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
3. Na seção "Organizations" (Organizações), clique em **New organization** (Nova organização). ![Botão New organization (Nova organização)](/assets/images/help/settings/new-org-button.png)
4. Em "Organization name" (Nome da organização), crie um nome para a organização. ![Nome da nova organização](/assets/images/help/organizations/new-org-name.png)
5. Em "Contact email" (E-mail de contato), digite o endereço de e-mail de uma pessoa disponível para dar mais informações sobre a organização.
6. Clique em **Create organization** (Criar organização).
