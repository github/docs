---
title: Definir padrões personalizados para a verificação de segredo
shortTitle: Define custom patterns
intro: 'É possível estender o {% data variables.product.prodname_secret_scanning_GHAS %} para detectar segredos além dos padrões predefinidos.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
ms.openlocfilehash: 1c7594329dfdc2843e38c1c2eb7b70e32b89f11b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106514'
---
## Sobre padrões personalizados para {% data variables.product.prodname_secret_scanning %}

Você pode definir padrões personalizados para identificar segredos que não são detectados pelos padrões padrão compatíbeis com {% data variables.product.prodname_secret_scanning %}. Por exemplo, você pode ter um padrão de segredo que é interno da sua organização. Para obter detalhes dos segredos e dos provedores de serviço compatíveis, confira "[Padrões dos {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".

É possível definir padrões personalizados para sua empresa, organização ou repositório. Os {% data variables.product.prodname_secret_scanning_caps %} dão suporte para até 500 padrões personalizados para cada organização ou conta corporativa e até 100 padrões personalizados por repositório.

## Sintaxe de expressão regular para padrões personalizados

Você pode especificar padrões personalizados para {% data variables.product.prodname_secret_scanning_GHAS %} como uma ou mais expressões regulares.

- **Formato do segredo**: uma expressão que descreve o formato do próprio segredo.
- **Antes do segredo**: uma expressão que descreve os caracteres que vêm antes do segredo. Por padrão, isso é definido como `\A|[^0-9A-Za-z]`, o que significa que o segredo precisa estar no início de uma linha ou ser precedido por um caractere não alfanumérico.
- **Após o segredo**: uma expressão que descreve os caracteres que vêm após o segredo. Por padrão, isso é definido como `\z|[^0-9A-Za-z]`, o que significa que o segredo precisa ser seguido por uma nova linha ou por um caractere não alfanumérico.
- **Requisitos adicionais de correspondência**: uma ou mais expressões opcionais às quais o próprio segredo precisa ou não corresponder.

Para tokens simples você normalmente só precisa especificar um formato de segredo. Os outros campos proporcionam flexibilidade para que você possa especificar segredos mais complexos sem criar expressões regulares complexas.  Para ver um exemplo de padrão personalizado, confira "[Exemplo de um padrão personalizado especificado com requisitos adicionais](#example-of-a-custom-pattern-specified-using-additional-requirements)" abaixo.

Os {% data variables.product.prodname_secret_scanning_caps %} usam a [biblioteca Hyperscan](https://github.com/intel/hyperscan) e só dão suporte a constructos regex do Hyperscan, que são um subconjunto da sintaxe PCRE. Os modificadores de opções de huperscan não são compatíveis.  Para obter mais informações sobre os constructos de padrão do Hyperscan, confira "[Suporte a padrões](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)" na documentação do Hyperscan.

## Definindo um padrão personalizado para um repositório

Antes de definir um padrão personalizado, você deve garantir que {% data variables.product.prodname_secret_scanning %} está habilitado no seu repositório. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_secret_scanning %} para seus repositórios](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Quando estiver pronto para testar seu novo padrão personalizado, a fim de identificar correspondências no repositório sem criar alertas, clique em **Salvar e executar uma simulação**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {% endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Após a criação do padrão, {% data reusables.secret-scanning.secret-scanning-process %} Para obter mais informações sobre como ver alertas da {% data variables.product.prodname_secret_scanning %}, confira [Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

### Exemplo de um padrão personalizado especificado usando requisitos adicionais

Uma empresa tem um token interno com cinco características. Eles usam os diferentes campos para especificar como identificar tokens da seguinte forma:

| **Característica** | **Campo e expressão regular** |
|----------------|------------------------------|
| Comprimento entre 5 e 10 caracteres | Formato do segredo: `[$#%@AA-Za-z0-9]{5,10}` |
| Não termina com um `.` | Após o segredo: `[^\.]` |
| Contém números e letras maiúsculas | Requisitos adicionais: o segredo precisa corresponder a `[A-Z]` e a `[0-9]` |
| Não inclui mais de uma letra minúscula consecutiva | Requisitos adicionais: o segredo não deve corresponder a `[a-z]{2,}` |
| Contém um destes caracteres: `$%@!` | Requisitos adicionais: o segredo precisa corresponder a `[$%@!]` |

Esses tokens iriam corresponder ao padrão personalizado descrito acima:

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

Estas strings não correspondem ao padrão personalizado descrito acima:

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Definindo um padrão personalizado para uma organização

Antes de definir um padrão personalizado, você deverá habilitar {% data variables.product.prodname_secret_scanning %} para os repositórios que você deseja fazer a digitalização na organização. Para habilitar a {% data variables.product.prodname_secret_scanning %} em todos os repositórios na sua organização, confira "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% ifversion ghes < 3.5 or ghae %} {% note %}

**Observação:** Como não há nenhuma funcionalidade de simulação, recomendamos que você teste seus padrões personalizados em um repositório antes de defini-los para toda a organização. Dessa forma, você pode evitar criar alertas falsos-positivos de {% data variables.product.prodname_secret_scanning %}.

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-new-custom-pattern %} {% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. Se estiver pronto para testar seu novo padrão personalizado e quiser identificar correspondências em repositórios específicos sem criar alertas, clique em **Salvar e executar uma simulação**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Depois que o padrão for criado, {% data variables.product.prodname_secret_scanning %} irá verificar todos os segredos nos repositórios na sua organização, incluindo todo seu histórico do Git em todos os branches. Os proprietários da organização e administradores do repositório receberão um alerta sobre todos os segredos encontrados e poderão revisar o alerta no repositório onde o segredo for encontrado. Para obter mais informações sobre como ver alertas da {% data variables.product.prodname_secret_scanning %}, confira "[Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Definir um padrão personalizado para uma conta corporativa

{% ifversion fpt or ghec or ghes %}

Antes de definir um padrão personalizado, você deverá garantir que você habilite a digitalização de segredo para a sua conta corporativa. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_GH_advanced_security %} para sua empresa]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %} **Observações:**
- No nível da empresa, somente o criador de um padrão personalizado pode editar o padrão e usá-lo em uma simulação. 
- Proprietários de empresa só podem usar simulações em repositórios aos quais têm acesso e os proprietários de empresa não necessariamente têm acesso a todas as organizações ou repositórios dentro da empresa.
{% else %} **Observação:** como não há nenhuma funcionalidade de simulação, recomendamos que você teste seus padrões personalizados em um repositório antes de defini-los para toda a empresa. Dessa forma, você pode evitar criar alertas falsos-positivos de {% data variables.product.prodname_secret_scanning %}.

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Em "Segurança e análise de código", clique em **Recursos de segurança**.{% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
1. Em "Padrões personalizados de verificação de segredo", clique em **Novo padrão**.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %} {%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. Quando estiver pronto para testar o novo padrão personalizado, clique em **Salvar e executar uma simulação** para identificar correspondências na empresa sem criar alertas.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %} {% data reusables.advanced-security.secret-scanning-dry-run-results %} {%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %} {%- endif %} {% data reusables.advanced-security.secret-scanning-create-custom-pattern %}

Depois que o seu padrão for criado, {% data variables.product.prodname_secret_scanning %} irá digitalizar qualquer segredo em repositórios nas organizações da sua empresa com {% data variables.product.prodname_GH_advanced_security %} habilitado, incluindo todo seu histórico do Git em todos os branches. Os proprietários da organização e administradores do repositório receberão um alerta sobre todos os segredos encontrados e poderão revisar o alerta no repositório onde o segredo for encontrado. Para obter mais informações sobre como ver alertas da {% data variables.product.prodname_secret_scanning %}, confira "[Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

## Editando um padrão personalizado

Ao salvar uma alteração em um padrão personalizado, isso irá fechar todos os alertas de {% data variables.product.prodname_secret_scanning %} que foram criados usando a versão anterior do padrão.
1. Acesse o local onde o padrão personalizado foi criado. Um padrão personalizado pode ser criado na conta de um repositório, organização ou empresa.
   * Para um repositório ou organização, veja as configurações de "Segurança e análise" do repositório ou da organização em que o padrão personalizado foi criado. Para obter mais informações, confira "[Como definir um padrão personalizado para um repositório](#defining-a-custom-pattern-for-a-repository)" ou "[Como definir um padrão personalizado para uma organização](#defining-a-custom-pattern-for-an-organization)" acima.
   * Para uma empresa, em "Políticas", veja a área "Advanced Security" e clique em **Recursos de segurança**. Para obter mais informações, confira "[Como definir um padrão personalizado para uma conta corporativa](#defining-a-custom-pattern-for-an-enterprise-account)" acima.
2. Em "{% data variables.product.prodname_secret_scanning_caps %}", à direita do padrão personalizado que você deseja editar, clique em {% octicon "pencil" aria-label="The edit icon" %}.
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
3. Quando estiver pronto para testar o padrão personalizado editado, clique em **Salvar e executar uma simulação** para identificar correspondências sem criar alertas.
{%- endif %}
4. Depois de revisar e testar as alterações, clique em **Salvar alterações**.

## Removendo um padrão personalizado

1. Acesse o local onde o padrão personalizado foi criado. Um padrão personalizado pode ser criado na conta de um repositório, organização ou empresa.

   * Para um repositório ou organização, veja as configurações de "Segurança e análise" do repositório ou da organização em que o padrão personalizado foi criado. Para obter mais informações, confira "[Como definir um padrão personalizado para um repositório](#defining-a-custom-pattern-for-a-repository)" ou "[Como definir um padrão personalizado para uma organização](#defining-a-custom-pattern-for-an-organization)" acima.
   * Para uma empresa, em "Políticas", veja a área "Advanced Security" e clique em **Recursos de segurança**.  Para obter mais informações, confira "[Como definir um padrão personalizado para uma conta corporativa](#defining-a-custom-pattern-for-an-enterprise-account)" acima.
1. À direita do padrão personalizado que você deseja remover, clique em {% octicon "trash" aria-label="The trash icon" %}.
1. Revise a confirmação e selecione um método para lidar com todos os alertas abertos relacionados ao padrão personalizado.
1. Clique em **Sim, excluir este padrão**.

   ![Como confirmar a exclusão de um padrão de {% data variables.product.prodname_secret_scanning %} personalizado ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
