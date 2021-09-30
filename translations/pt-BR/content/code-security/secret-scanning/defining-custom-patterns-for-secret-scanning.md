---
title: Definindo padrões personalizados para varredura de segredo
shortTitle: Defina padrões personalizados
intro: 'Você pode definir padrões personalizados para {% data variables.product.prodname_secret_scanning %} em organizações e repositórios privados.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  fpt: '*'
  ghes: '>=3.2'
  ghae: next
topics:
  - Repositories
---

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Observação:** Os padrões personalizados para {% data variables.product.prodname_secret_scanning %} estão atualmente em fase beta e sujeitos a alterações.

{% endnote %}
{% endif %}

## Sobre padrões personalizados para {% data variables.product.prodname_secret_scanning %}

{% data variables.product.company_short %} executa {% data variables.product.prodname_secret_scanning %} nos repositórios {% ifversion fpt %}públicos e privados{% endif %} para padrões de segredo fornecidos por parceiros de {% data variables.product.company_short %} e {% data variables.product.company_short %}. Para obter mais informações sobre o programa de parceria de {% data variables.product.prodname_secret_scanning %}, consulte "<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">Programa de varredura de segredo de parceiros</a>".

No entanto, pode haver situações em que você deverá pesquisar outros padrões secretos nos seus repositórios {% ifversion fpt %}privados{% endif %}. Por exemplo, você pode ter um padrão de segredo que é interno da sua organização. For these situations, you can define custom {% data variables.product.prodname_secret_scanning %} patterns in your enterprise, organization, or {% ifversion fpt %}private{% endif %} repository on {% data variables.product.product_name %}. You can define up to 20 custom patterns for each {% ifversion fpt %}private{% endif %} repository, organization, or enterprise account.

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Observação:** No beta, existem algumas limitações ao usar padrões personalizados para {% data variables.product.prodname_secret_scanning %}:

* Não há nenhuma funcionalidade de exercício de simulação.
* Você não pode editar padrões personalizados depois que forem criados. Para alterar um padrão, você deve excluí-lo e recriá-lo.
* Não há API para criar, editar ou excluir padrões personalizados. No entanto, os resultados de padrões personalizados são retornados na [API de alertas de segredos](/rest/reference/secret-scanning).

{% endnote %}
{% endif %}

## Sintaxe de expressão regular para padrões personalizados

Os padrões personalizados para {% data variables.product.prodname_secret_scanning %} são especificados como expressões regulares. {% data variables.product.prodname_secret_scanning_caps %} usa a [biblioteca Hyperscan](https://github.com/intel/hyperscan) e é compatível apenas os construtores regex do Hyperscan, que são um subconjunto da sintaxe PCRE. Os modificadores de opções de huperscan não são compatíveis.  Para obter mais informações sobre construções de padrões do Hyperscan, consulte "[suporte do padrão](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)na documentação do Hyperscan.

## Definindo um padrão personalizado para um repositório

Antes de definir um padrão personalizado, você deve garantir que {% data variables.product.prodname_secret_scanning %} está habilitado no seu repositório. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_secret_scanning %} para os seus repositórios](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Após a criação do seu padrão, {% data reusables.secret-scanning.secret-scanning-process %} Para mais informações sobre visualização de alertas {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciando alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Definindo um padrão personalizado para uma organização

Antes de definir um padrão personalizado, você deverá habilitar {% data variables.product.prodname_secret_scanning %} para os repositórios {% ifversion fpt %}privaivados{% endif %} que você deseja fazer a varredura na organização. Para habilitar {% data variables.product.prodname_secret_scanning %} em todos os repositórios {% ifversion fpt %}privados {% endif %} na sua organização, consulte "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire organization. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Depois que o padrão for criado, {% data variables.product.prodname_secret_scanning %} irá verificar todos os segredos nos repositórios {% ifversion fpt %}privados {% endif %} na sua organização, incluindo todo seu histórico do Git em todos os branches. Os proprietários da organização e administradores do repositório receberão um alerta sobre todos os segredos encontrados e poderão revisar o alerta no repositório onde o segredo for encontrado. Para obter mais informações sobre a visualização de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Defining a custom pattern for an enterprise account

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire enterprise. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. Under "Secret scanning custom patterns", click {% ifversion fpt or ghes > 3.2 or ghae-next %}**New pattern**{% elsif ghes = 3.2 %}**New custom pattern**{% endif %}.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in {% ifversion fpt %}private{% endif %} repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. Os proprietários da organização e administradores do repositório receberão um alerta sobre todos os segredos encontrados e poderão revisar o alerta no repositório onde o segredo for encontrado. Para obter mais informações sobre a visualização de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% ifversion fpt or ghes > 3.2 %}
## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.product.prodname_secret_scanning %} alerts that were created using the previous version of the pattern.
1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.
   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. Para mais informações consulte "[Definir um padrão personalizado para um repositório](#defining-a-custom-pattern-for-a-repository)" ou "[Definir um padrão personalizado para uma organização](#defining-a-custom-pattern-for-an-organization)" acima.
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**. For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
2. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}.
3. When you have reviewed and tested your changes, click **Save changes**.
{% endif %}

## Removendo um padrão personalizado

1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.

   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. Para mais informações consulte "[Definir um padrão personalizado para um repositório](#defining-a-custom-pattern-for-a-repository)" ou "[Definir um padrão personalizado para uma organização](#defining-a-custom-pattern-for-an-organization)" acima.
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**.  For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="The trash icon" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

   ![Confirming deletion of a custom {% data variables.product.prodname_secret_scanning %} pattern ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. To the right of the custom pattern you want to remove, click **Remove**.
1. Review the confirmation, and click **Remove custom pattern**.
{%- endif %}
