---
title: Melhores práticas para escrever avisos de segurança do repositório
intro: 'Quando você cria ou edita avisos de segurança, os outros usuários conseguem entender melhor as informações fornecidas quando são especificados o ecossistema, o nome do pacote e as versões afetadas usando os formatos padrão.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Best practices
redirect_from:
  - /code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories
ms.openlocfilehash: af1ab76e13f44f5b319cd560e1ae0aa3081742dc
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113971'
---
Qualquer pessoa com permissões de administrador em um repositório pode criar e editar um aviso de segurança.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Sobre os avisos de segurança para repositórios

{% data reusables.security-advisory.security-advisory-overview %} Para obter mais informações, confira "[Sobre os avisos de segurança do repositório](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)".

## Práticas recomendadas

Recomendamos que você use a sintaxe usada no {% data variables.product.prodname_advisory_database %}, principalmente a formatação de versão, ao criar um aviso de segurança de repositório, ou faça uma contribuição da comunidade para um aviso de segurança global.

Se você seguir a sintaxe do {% data variables.product.prodname_advisory_database %}, principalmente ao definir as versões afetadas:
- Ao publicar o aviso de repositório, podemos adicioná-lo ao {% data variables.product.prodname_advisory_database %} como uma consultoria "revisada pelo {% data variables.product.company_short %}", sem precisar solicitar mais informações.
- O {% data variables.product.prodname_dependabot %} terá as informações para identificar com precisão os repositórios afetados e enviar {% data variables.product.prodname_dependabot_alerts %} para notificá-los.
- Os membros da comunidade são menos propensos a sugerir edições ao aviso para corrigir informações ausentes ou incorretas.

Adicione ou edite um aviso de repositório usando o formulário _Rascunho de aviso de segurança_. Para obter mais informações, confira "[Como criar um aviso de segurança do repositório](/code-security/repository-security-advisories/creating-a-repository-security-advisory)". 

Sugira um aprimoramento para um aviso global existente usando o formulário _Aprimorar o aviso de segurança_. Para obter mais informações, confira "[Como editar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database)".

### Ecossistema

Você precisa atribuir o aviso a um dos ecossistemas com suporte usando o campo **Ecossistema**. Para obter mais informações sobre os ecossistemas com suporte, confira "[Procurar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories)".

![Captura de tela realçando o campo Ecossistema no formulário](/assets/images/help/security/security-advisory-ecosystem.png)

### Nome do pacote

Recomendamos que você use o campo **Nome do pacote** para especificar quais pacotes são afetados porque as informações do pacote são necessárias para avisos revisados pelo "{% data variables.product.company_short %}" no {% data variables.product.prodname_advisory_database %}. As informações do pacote são opcionais para avisos de segurança no nível do repositório, mas a inclusão dessas informações já simplifica o processo de revisão quando você publica o aviso de segurança.

![Captura de tela realçando o Nome do pacote no formulário](/assets/images/help/security/security-advisory-package-name.png)

### Versões afetadas

Recomendamos que você use o campo **Versões afetadas** para especificar quais versões são afetadas porque essas informações são necessárias para avisos "revisados pelo {% data variables.product.company_short %}" no {% data variables.product.prodname_advisory_database %}. As informações de versão são opcionais para avisos de segurança no nível do repositório, mas a inclusão dessas informações já simplifica o processo de revisão quando você publica o aviso de segurança.

![Captura de tela realçando o campo Versões afetadas](/assets/images/help/security/security-advisory-affected-versions.png)

- Uma cadeia de caracteres de versão afetada válida consiste em uma das seguintes opções:
   - Uma sequência de operadores com limite inferior.
   - Uma sequência de operadores com limite superior.
   - Uma sequência de operadores com limites superior e inferior.
   - Uma sequência de versão específica usando o operador de igualdade (`=`).
- Cada sequência de operador deve ser especificada como o operador, um espaço único e depois a versão.
   - Os operadores válidos são `=`, `<`, `<=`, `>` ou `>=`.
   - A versão precisa começar com um número seguido por qualquer quantidade de números, letras, pontos, traços ou sublinhados (tudo menos espaço ou vírgula)
   - Ao especificar uma sequência com limites superior e inferior, o limite inferior precisa vir primeiro, seguido por uma vírgula, um espaço e depois o limite superior.
   {% note %}

   **Observação:** as cadeias de caracteres de versão afetadas não podem conter espaços à esquerda ou à direita.

   {% endnote %}

- Os operadores com limite superior podem ser inclusivos ou exclusivos, ou seja, `<=` ou `<`, respectivamente.
- Os operadores com limite inferior podem ser inclusivos ou exclusivos, ou seja, `>=` ou `>`, respectivamente. No entanto, se você publicar um aviso de repositório e se tornar um aviso global, uma regra diferente se aplicará: as cadeias de caracteres com limite inferior só poderão ser inclusivas, ou seja, `>=`. O operador exclusivo de limite inferior (`>`) só é permitido quando a versão é `0`, por exemplo `> 0`.

  {% note %}

  **Observações:** a limitação de limite inferior:
   - é devido a incompatibilidades com o esquema OSV (vulnerabilidade de software livre).
   - só se aplica quando você faz uma sugestão em um aviso existente no {% data variables.product.prodname_advisory_database %}.

  {% endnote %}

- Não é possível especificar vários intervalos de versão afetados no mesmo campo, como `> 2.0, < 2.3, > 3.0, < 3.2`. Para especificar mais de um intervalo, você precisa criar uma nova seção **Produtos afetados** para cada intervalo clicando no botão **+ Adicionar outro produto afetado**.

  ![Captura de tela realçando o botão a ser usado para adicionar vários intervalos de versão afetada](/assets/images/help/security/security-advisory-add-another-affected-product.png)
 - Se o intervalo de versão afetada incluir apenas um limite superior ou inferior:
   - O valor implícito será sempre `> 0` se o limite inferior não for especificado explicitamente.
   - O valor implícito será sempre infinito se o limite superior não for especificado explicitamente.

Para obter mais informações sobre o {% data variables.product.prodname_advisory_database %}, confira [https://github.com/github/advisory-database](https://github.com/github/advisory-database).
