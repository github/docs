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
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Observação:** Os padrões personalizados para {% data variables.product.prodname_secret_scanning %} estão atualmente em fase beta e sujeitos a alterações.

{% endnote %}
{% endif %}

## Sobre padrões personalizados para {% data variables.product.prodname_secret_scanning %}

{% data variables.product.company_short %} executa {% data variables.product.prodname_secret_scanning %} nos repositórios {% ifversion fpt or ghec %}públicos e privados{% endif %} para padrões de segredo fornecidos por parceiros de {% data variables.product.company_short %} e {% data variables.product.company_short %}. Para obter mais informações sobre o programa de parceria de {% data variables.product.prodname_secret_scanning %}, consulte "<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">Programa de varredura de segredo de parceiros</a>".

No entanto, pode haver situações em que você deverá pesquisar outros padrões secretos nos seus repositórios {% ifversion fpt or ghec %}privados{% endif %}. Por exemplo, você pode ter um padrão de segredo que é interno da sua organização. Para esses casos, você pode definir padrões personalizados de {% data variables.product.prodname_secret_scanning %} na sua empresa, organização ou {% ifversion fpt or ghec %}repositório{% endif %} privado em {% data variables.product.product_name %}. Você pode definir até
{%- ifversion fpt or ghec or ghes > 3.3 %} 500 padrões personalizados para cada conta da organização ou empresa e até 100 padrões personalizados por {% ifversion fpt or ghec %}repositório{% endif %} privado.
{%- elsif ghes = 3.3 %} 100 padrões personalizados para cada organização ou conta corporativa, e por repositório.
{%- else %} 20 padrões personalizados para cada organização ou conta corporativa, e por repositório.
{%- endif %}

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Observação:** No beta, existem algumas limitações ao usar padrões personalizados para {% data variables.product.prodname_secret_scanning %}:

* Não há nenhuma funcionalidade de exercício de simulação.
* Você não pode editar padrões personalizados depois que forem criados. Para alterar um padrão, você deve excluí-lo e recriá-lo.
* Não há API para criar, editar ou excluir padrões personalizados. No entanto, os resultados de padrões personalizados são retornados na [API de alertas de segredos](/rest/reference/secret-scanning).

{% endnote %}
{% endif %}

## Sintaxe de expressão regular para padrões personalizados

Custom patterns for {% data variables.product.prodname_secret_scanning %} are specified as one or more regular expressions.

- **Secret format:** an expression that describes the format of the secret itself.
- **Before secret:** an expression that describes the characters that come before the secret. By default, this is set to `\A|[^0-9A-Za-z]` which means that the secret must be at the start of a line or be preceded by a non-alphanumeric character.
- **After secret:** an expression that describes the characters that come after the secret. By default, this is set to `\z|[^0-9A-Za-z]` which means that the secret must be followed by a new line or a non-alphanumeric character.
- **Additional match requirements:** one or more optional expressions that the secret itself must or must not match.

For simple tokens you will usually only need to specify a secret format. The other fields provide flexibility so that you can specify more complex secrets without creating complex regular expressions.  For an example of a custom pattern, see "[Example of a custom pattern specified using additional requirements](#example-of-a-custom-pattern-specified-using-additional-requirements)" below.

{% data variables.product.prodname_secret_scanning_caps %} usa a [biblioteca Hyperscan](https://github.com/intel/hyperscan) e é compatível apenas os construtores regex do Hyperscan, que são um subconjunto da sintaxe PCRE. Os modificadores de opções de huperscan não são compatíveis.  Para obter mais informações sobre construções de padrões do Hyperscan, consulte "[suporte do padrão](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)na documentação do Hyperscan.

## Definindo um padrão personalizado para um repositório

Antes de definir um padrão personalizado, você deve garantir que {% data variables.product.prodname_secret_scanning %} está habilitado no seu repositório. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_secret_scanning %} para os seus repositórios](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Após a criação do seu padrão, {% data reusables.secret-scanning.secret-scanning-process %} Para mais informações sobre visualização de alertas {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciando alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

### Example of a custom pattern specified using additional requirements

A company has an internal token with five characteristics. They use the different fields to specify how to identify tokens as follows:

| **Characteristic**                                       | **Field and regular expression**                               |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| Length between 5 and 10 characters                       | Secret format: `[$#%@AA-Za-z0-9]{5,10}`                        |
| Does not end in a `.`                                    | After secret: `[^\.]`                                         |
| Contains numbers and uppercase letters                   | Additional requirements: secret must match `[A-Z]` and `[0-9]` |
| Does not include more than one lowercase letter in a row | Additional requirements: secret must not match `[a-z]{2,}`     |
| Contains one of `$%@!`                                   | Additional requirements: secret must match `[$%@!]`            |

These tokens would match the custom pattern described above:

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

These strings would not match the custom pattern described above:

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Definindo um padrão personalizado para uma organização

Antes de definir um padrão personalizado, você deverá habilitar {% data variables.product.prodname_secret_scanning %} para os repositórios {% ifversion fpt or ghec %}privaivados{% endif %} que você deseja fazer a varredura na organização. Para habilitar {% data variables.product.prodname_secret_scanning %} em todos os repositórios {% ifversion fpt or ghec %}privados {% endif %} na sua organização, consulte "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% note %}

**Observação:** Como não há nenhuma funcionalidade de teste, recomendamos que você teste seus padrões personalizados em um repositório antes de defini-los para toda a organização. Dessa forma, você pode evitar criar alertas falsos-positivos de {% data variables.product.prodname_secret_scanning %}.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Depois que o padrão for criado, {% data variables.product.prodname_secret_scanning %} irá verificar todos os segredos nos repositórios {% ifversion fpt or ghec %}privados {% endif %} na sua organização, incluindo todo seu histórico do Git em todos os branches. Os proprietários da organização e administradores do repositório receberão um alerta sobre todos os segredos encontrados e poderão revisar o alerta no repositório onde o segredo for encontrado. Para obter mais informações sobre a visualização de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Definir um padrão personalizado para uma conta corporativa

{% ifversion fpt or ghec or ghes %}

Antes de definir um padrão personalizado, você deverá garantir que você habilite a digitalização de segredo para a sua conta corporativa. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% endif %}

{% note %}

**Observação:** Como não há nenhuma funcionalidade de teste, recomendamos que você teste seus padrões personalizados em um repositório antes de defini-los para toda sua empresa. Dessa forma, você pode evitar criar alertas falsos-positivos de {% data variables.product.prodname_secret_scanning %}.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. Em "Padrões de personalização de digitalização de segredos", clique em {% ifversion ghes = 3.2 %}**Novo padrão personalizado**{% else %}**Novo padrão**{% endif %}.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

Depois que seu padrão for criado, {% data variables.product.prodname_secret_scanning %} irá verificar se há segredos em repositórios {% ifversion fpt or ghec %}privados{% endif %} dentro das organizações da sua empresa com {% data variables.product.prodname_GH_advanced_security %} habilitado, incluindo toda a sua história de Git em todos os branches. Os proprietários da organização e administradores do repositório receberão um alerta sobre todos os segredos encontrados e poderão revisar o alerta no repositório onde o segredo for encontrado. Para obter mais informações sobre a visualização de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}
## Editando um padrão personalizado

Ao salvar uma alteração em um padrão personalizado, isso irá fechar todos os alertas de {% data variables.product.prodname_secret_scanning %} que foram criados usando a versão anterior do padrão.
1. Acesse o local onde o padrão personalizado foi criado. Um padrão personalizado pode ser criado na conta de um repositório, organização ou empresa.
   * Para um repositório ou organização, exiba as configurações "Segurança & análise" do repositório ou organização onde o padrão personalizado foi criado. Para mais informações consulte "[Definir um padrão personalizado para um repositório](#defining-a-custom-pattern-for-a-repository)" ou "[Definir um padrão personalizado para uma organização](#defining-a-custom-pattern-for-an-organization)" acima.
   * Para uma empresa, em "Políticas" exiba a área "Segurança Avançada" e, em seguida, clique em **Funcionalidades de segurança**. Para obter mais informações, consulte "[Definindo um padrão personalizado para uma conta corporativa](#defining-a-custom-pattern-for-an-enterprise-account)" acima.
2. Em "{% data variables.product.prodname_secret_scanning_caps %}", à direita do padrão personalizado que você deseja editar, clique em {% octicon "pencil" aria-label="The edit icon" %}.
3. Ao revisar e testar suas alterações, clique em **Salvar alterações**.
{% endif %}

## Removendo um padrão personalizado

1. Acesse o local onde o padrão personalizado foi criado. Um padrão personalizado pode ser criado na conta de um repositório, organização ou empresa.

   * Para um repositório ou organização, exiba as configurações "Segurança & análise" do repositório ou organização onde o padrão personalizado foi criado. Para mais informações consulte "[Definir um padrão personalizado para um repositório](#defining-a-custom-pattern-for-a-repository)" ou "[Definir um padrão personalizado para uma organização](#defining-a-custom-pattern-for-an-organization)" acima.
   * Para uma empresa, em "Políticas" exiba a área "Segurança Avançada" e, em seguida, clique em **Funcionalidades de segurança**.  Para obter mais informações, consulte "[Definindo um padrão personalizado para uma conta corporativa](#defining-a-custom-pattern-for-an-enterprise-account)" acima.
{%- ifversion fpt or ghes > 3.2 or ghae %}
1. À direita do padrão personalizado que você deseja remover, clique em {% octicon "trash" aria-label="The trash icon" %}.
1. Revise a confirmação e selecione um método para lidar com todos os alertas abertos relacionados ao padrão personalizado.
1. Clique em **Sim, excluir este padrão**.

   ![Confirmando a exclusão de um padrão {% data variables.product.prodname_secret_scanning %} personalizado ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. À direita do padrão personalizado que você deseja remover, clique em **Remover**.
1. Revise a confirmação e clique em **Remover padrão personalizado**.
{%- endif %}
