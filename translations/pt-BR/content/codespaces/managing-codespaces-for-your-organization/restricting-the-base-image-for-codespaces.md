---
title: Como restringir a imagem base dos codespaces
shortTitle: Restrict base image
intro: Você pode especificar quais imagens base podem ser usadas para novos codespaces criados em sua organização.
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: f17bb20aa919ca94cd13e14a6f770cea23042b2b
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188277'
---
## Visão geral

Quando você cria um codespace, um contêiner do Docker é criado automaticamente em uma máquina virtual remota. O contêiner do Docker é criado com base em uma imagem do Docker. A imagem é efetivamente um modelo para contêineres do Docker e determina muitos aspectos do ambiente resultante fornecido pelo codespace.

Você pode escolher qual imagem deseja usar para seus codespaces especificando-a na configuração de contêiner de desenvolvimento para um repositório. Você pode fazer isso, por exemplo, usando a propriedade `image` no arquivo `devcontainer.json`.

```json{:copy}
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

Para saber mais, confira a [especificação de contêineres de desenvolvimento](https://containers.dev/implementors/json_reference/) em containers.dev.

Se você não especificar uma imagem na configuração de contêiner de desenvolvimento para um repositório, a imagem padrão será usada. A imagem padrão contém várias versões de runtime para linguagens populares e ferramentas comumente usadas. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)".

Como proprietário de uma organização, você pode adicionar uma política para restringir quais imagens podem ser usadas para codespaces criados em sua organização.

Se a imagem especificada na configuração do contêiner de desenvolvimento não corresponder a uma das imagens permitidas, a seguinte mensagem será exibida quando alguém tentar criar um codespace para o repositório:

> Não foi possível criar o codespace: a imagem base 'DETAILS FROM DEV CONTAINER CONFIGURATION' não é permitida com base em uma política da organização definida pelo administrador da organização.

{% note %}

**Observações**: 
* A política de imagem base só é aplicada quando um codespace é criado. Atualmente, ela não é aplicada quando você recompila um contêiner. Isso será alterado em uma versão futura. Para obter mais informações, confira "[O ciclo de vida do codespace](/codespaces/getting-started/the-codespace-lifecycle#rebuilding-a-codespace)".
* A política de imagem base não se aplicará à imagem padrão ou à imagem usada para recuperar um codespace se, em uma configuração de contêiner de desenvolvimento, for introduzido um erro que impeça a recriação do contêiner. 

{% endnote %}

### Definindo políticas específicas da organização e do repositório

Ao criar uma política, você define se ela se aplica a todos os repositórios da organização ou apenas a repositórios específicos. Se você definir uma política para toda a organização, todas as políticas que você definir para repositórios individuais devem estar dentro da restrição definida no nível da organização. A adição de políticas torna a escolha da imagem mais restritiva.

Por exemplo, você pode criar uma política em toda a organização que restringe a imagem base a qualquer uma das dez imagens especificadas. Em seguida, você pode definir uma política para o Repositório A que restringe a imagem a um subconjunto de apenas duas das imagens especificadas no nível da organização. A especificação de imagens adicionais para o Repositório A não terá efeito porque essas imagens não são especificadas na política no nível da organização. Se adicionar uma política para toda a organização, você deverá configurá-la para a maior escolha de imagens que estarão disponíveis para qualquer repositório na sua organização. Em seguida, você pode adicionar políticas específicas ao repositório para restringir ainda mais a escolha.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Adicionando uma política para definir as imagens permitidas

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Clique em **Adicionar restrição** e escolha **Imagens base**.

   ![Captura de tela do menu suspenso 'Adicionar restrição'](/assets/images/help/codespaces/add-constraint-dropdown-image.png)

1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar a restrição.

   ![Captura de tela do ícone de lápis para editar a restrição](/assets/images/help/codespaces/edit-image-constraint.png)

1. No campo "Valores permitidos", insira a URL completa de uma imagem que você deseja permitir.

   ![Captura de tela de uma entrada no campo 'Valores permitidos'](/assets/images/help/codespaces/image-allowed-values.png)
 
   {% note %}

   **Observação**: você precisa especificar uma URL de imagem que corresponda exatamente ao valor especificado em uma configuração de contêiner de desenvolvimento.

   {% endnote %}

1. Clique no botão de adição ({% octicon "plus" aria-label="The plus icon" %}) para adicionar o valor.
1. Se necessário, repita as duas etapas anteriores para adicionar mais URLs de imagem.
{% data reusables.codespaces.codespaces-policy-targets %}
1. Para adicionar outra restrição à política, clique em **Adicionar restrição** e escolha outra restrição. Para obter informações sobre outras restrições, confira:
   * "[Como restringir o acesso a tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
   * "[Como restringir a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)"
   * "[Como restringir o período de tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)"
   * "[Como restringir o período de retenção dos codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)"
1. Depois de concluir a adição de restrições à política, clique em **Salvar**.

A política é aplicada quando qualquer pessoa tenta criar um codespace que pode ser cobrado para sua organização. A restrição de imagem base não afeta os codespaces existentes, ativos ou parados.

## Editando uma política

Você pode excluir ou editar uma política existente. Por exemplo, você talvez queira adicionar restrições a ou removê-las de uma política.

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para definir as imagens permitidas](#adding-a-policy-to-define-the-allowed-images)".
1. Clique no nome da política que você deseja editar.
1. Clique no ícone de lápis ({% octicon "pencil" aria-label="The edit icon" %}) ao lado da restrição "Imagens base".
1. Adicione ou remova URLs de imagem.
1. Clique em **Save** (Salvar).

## Excluindo uma política 

1. Exibir a página "Políticas de codespaces". Para obter mais informações, confira "[Como adicionar uma política para definir as imagens permitidas](#adding-a-policy-to-define-the-allowed-images)".
1. Clique no botão excluir à direita da política que você deseja excluir.

   ![Captura de tela do botão Excluir de uma política](/assets/images/help/codespaces/policy-delete.png)
