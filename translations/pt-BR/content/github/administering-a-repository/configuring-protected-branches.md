---
title: Configurar branches protegidos
intro: 'Sendo proprietário de um repositório ou tendo permissões de administrador em um repositório, você poderá personalizar proteções de branch no repositório e aplicar determinados fluxos de trabalho, como exigir mais de uma revisão de revisão de pull request ou exigir que determinadas verificações de status sejam aprovadas antes de permitir o merge de uma pull request.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% data reusables.repositories.branch-rules-example %}

Você também pode configurar a proteção automática de branch para todos os branches do repositório com a sintaxe de caractere curinga `*`. Pelo fato de o {% data variables.product.prodname_dotcom %} usar o sinalizador `File::FNM_PATHNAME` para a sintaxe `File.fnmatch`, o curinga não corresponde aos separadores de diretório (`/`). Por exemplo, `qa/*` pode fazer correspondência com todos os branches que começam com `qa/` e contêm uma única barra. Você pode incluir várias barras com `qa/**/*` e, assim, estender a string `qa` com `qa**/**/*` para torná-la mais inclusiva. Para obter mais informações sobre opções de sintaxe para regras de branch, consulte a [documentação de fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Para criar uma exceção a uma regra de branch existente, você pode criar outra regra de proteção de branch que tenha prioridade superior, como uma regra para um nome de branch específico. Para obter mais informações sobre a ordem de prioridade e outras configurações para regras de branch protegido, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)".

{% note %}

**Observação:** para criar uma regra de branch, o branch que você especifica ainda não deve existir no repositório.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Como opção, é possível definir configurações de regra de branch específicas. ![Configurações de branch protegido](/assets/images/help/branches/branch-rule-settings.png)
7. Para confirmar a regra de proteção de branch, clique em **Create** (Criar) ou em **Save changes** (Salvar alterações).

### Leia mais

- "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)"
- "[Sobre verificações de status obrigatórias](/github/administering-a-repository/about-required-status-checks)"
- "[Habilitar verificações de status obrigatórias](/github/administering-a-repository/enabling-required-status-checks)"
- "[Sobre restrições de branch](/github/administering-a-repository/about-branch-restrictions)"
- "[Habilitar restrições de branch](/github/administering-a-repository/enabling-branch-restrictions)"
- "[Sobre a assinatura de commit obriagória](/github/administering-a-repository/about-required-commit-signing)"
