---
title: Sobre o licenciamento para o GitHub Advanced Security
intro: 'Se quiser usar as funcionalidades do {% data variables.product.prodname_GH_advanced_security %} em um repositório privado ou interno, você precisará de uma licença. Essas funcionalidades estão disponíveis gratuitamente para repositórios públicos.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
---

### Sobre o licenciamento para {% data variables.product.prodname_GH_advanced_security %}

Se quiser usar funcionalidades de {% data variables.product.prodname_GH_advanced_security %} em qualquer repositório, além de um repositório público em {% data variables.product.prodname_dotcom_the_website %}, você precisará de uma licença. Para obter mais informações sobre {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% data reusables.advanced-security.license-overview %}

Para discutir o licenciamento de {% data variables.product.prodname_GH_advanced_security %} para a sua conta corporativa, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

### Sobre os números do committer para {% data variables.product.prodname_GH_advanced_security %}

Registramos e exibimos dois números de committers para {% data variables.product.prodname_GH_advanced_security %} em {% data variables.product.prodname_dotcom_the_website %}:

- **Committers** é o número de committers que contribuíram para pelo menos um repositório privado em uma organização e que usam uma estação na sua licença. Ou seja, eles também são integrantes da organização, um colaborador externo ou têm um convite pendente para ingressar em uma organização na sua empresa.
- **Único para este repositório/organização** é o número de committers que contribuíram apenas para este repositório ou para repositórios nesta organização. Este número mostra a quantidade de estações de licença que você pode liberar, desabilitando {% data variables.product.prodname_GH_advanced_security %} para esse repositório ou organização.

Se não houver committers exclusivos, isso significa que todos os committers ativos também contribuem para outros repositórios ou organizações que usam {% data variables.product.prodname_GH_advanced_security %}. Desabilitar o recurso para esse repositório ou organização não liberaria nenhuma estação na sua licença.

{% note %}

**Observação:** O número total de estações utilizadas na sua licença não é a soma dos committers ou dos committers únicos de cada repositório ou organização. Isso ocorre porque existem pessoas que contribuem para vários repositórios ou organizações. O número de estações utilizadas é medido em toda a conta da empresa para garantir que cada pessoa é contabilizada apenas uma vez, independentemente de quantos repositórios ou organizações contribuem.

{% endnote %}

### Gerenciar o uso de sua licença para {% data variables.product.prodname_GH_advanced_security %}

Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para um único repositório ou para todos os repositórios de uma organização, {% data variables.product.company_short %} irá mostrar quantos assentos adicionais ele usará e irá solicitar a confirmação. Se você desabilitar o acesso a {% data variables.product.prodname_GH_advanced_security %}, todas as estações usadas por committers "únicos" serão liberadas. Isso faz com que seja fácil entender o impacto das suas alterações no uso da sua licença.

Se você exceder limite de licença, {% data variables.product.prodname_GH_advanced_security %} irá continuar a funcionar em todos os repositórios onde já está habilitado. No entanto, em organizações onde {% data variables.product.prodname_GH_advanced_security %} está habilitado para novos repositórios, os repositórios serão criados com o recurso desabilitado. Além disso, a opção de habilitar {% data variables.product.prodname_GH_advanced_security %} para repositórios existentes não estará disponível. Se você alterar a visibilidade de um repositório público para privado, {% data variables.product.prodname_GH_advanced_security %} será desabilitado para esse repositório.

Assim que você liberar algumas estações, desabilitando {% data variables.product.prodname_GH_advanced_security %} para alguns repositórios ou aumentando o tamanho da sua licença, as opções para habilitar {% data variables.product.prodname_GH_advanced_security %} funcionarão de novo normalmente.

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_advanced_security %} by organizations owned by your enterprise account. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)."

For more information on viewing license usage, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)."

### Obtenha o máximo da sua licença de {% data variables.product.prodname_GH_advanced_security %}

Ao decidir quais repositórios e organizações priorizar para {% data variables.product.prodname_GH_advanced_security %}, você deverá revisá-los e identificá-los:

- As bases de código que são as mais críticas para o sucesso da sua empresa. Esses são os projetos em que a introdução de códigos vulneráveis, segredos codificados ou dependências vulneráveis teriam o maior impacto na sua empresa.
- Bases de código com a maior frequência de commit. Estes são os projetos mais ativamente desenvolvidos e, consequentemente, há um risco maior de poder introduzir problemas de segurança.

Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para essas organizações ou repositórios, você deverá avaliar quais outras bases de código você poderia adicionar sem adicionar quaisquer committers adicionais exclusivos e utilizando mais estações na sua licença. Depois disso, reveja as próximas bases de código mais importantes e ocupadas. Se você deseja aumentar o número de estações na sua licença, entre em contato com {% data variables.contact.contact_enterprise_sales %}.
