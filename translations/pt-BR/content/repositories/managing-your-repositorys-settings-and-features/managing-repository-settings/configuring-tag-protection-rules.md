---
title: Configurar regras de proteção para tags
shortTitle: Regras de proteção para tags
intro: Você pode configurar regras de proteção de tags para o repositório para impedir que os colaboradores criem ou excluam tags.
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: issue-6337
  ghec: '*'
  ghes: '>3.4'
---

{% note %}

**Observação:** As regras de proteção de tags estão atualmente na versão beta e sujeitas a alterações.

{% endnote %}

Quando você adiciona uma regra de proteção de tags, todas as tags que correspondem ao padrão fornecido serão protegidas. Somente usuários com permissões de administrador ou de manutenção no repositório poderão criar tags protegidas, e apenas usuários com permissões de administrador no repositório poderão excluir tags protegidas. Para obter mais informações, consulte "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)". {% data variables.product.prodname_github_apps %} exige a permissão `Repository administration: write` para modificar uma tag protegida.

{% ifversion custom-repository-roles %}
Além disso, você pode criar funções personalizadas de repositórios para permitir que outros grupos de usuários criem ou excluam tags que correspondem às regras de proteção de tags. Para obter mais informações, consulte "[Gerenciando funções de repositórios personalizados para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Na seção "Código e automação" da barra lateral, clique em **Tags de {% octicon "tag" aria-label="The tag icon" %}**.
1. Clique em **Nova regra**. ![Nova regra de proteção de tags](/assets/images/help/repository/new-tag-protection-rule.png)
1. Em "Padrão do nome da tag", digite o padrão das tags que você deseja proteger. Neste exemplo, digitar "\*" protege todas as tags. ![Definir padrão de proteção para tags](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Clique **Adicionar regra**. ![Adicionar regra de proteção de tag](/assets/images/help/repository/add-tag-protection-rule.png)
