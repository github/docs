---
title: Como gerenciar segredos criptografados para seu repositório e sua organização para o GitHub Codespaces
shortTitle: Encrypted secrets
intro: 'Os segredos criptografados permitem que você armazene informações confidenciais na sua organização, repositório ou {% data variables.product.prodname_github_codespaces %}.'
permissions: 'To manage secrets for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Secret store
  - Security
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces
ms.openlocfilehash: 817ed72e76ddd13846dd9db78f992a1c5dcda101
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158618'
---
## Sobre segredos

Segredos são variáveis de ambiente criptografadas que você cria em uma organização ou repositório. Os segredos que você criou estão disponíveis para uso em {% data variables.product.prodname_github_codespaces %}. O GitHub usa uma [caixa lacrada libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) para criptografar os segredos antes que eles cheguem ao GitHub e os descriptografa somente quando você os usa em um codespace.

Os segredos no nível da organização permitem que você compartilhe segredos entre vários repositórios, o que reduz a necessidade de criar segredos duplicados. Você pode usar políticas de acesso para controlar quais repositórios podem usar segredos da organização. 

{% data reusables.codespaces.secrets-on-start %}

### Nomeando segredos

{% data reusables.codespaces.secrets-naming %} Por exemplo, um segredo criado no nível do repositório deve ter um nome exclusivo nesse repositório, e um segredo criado no nível da organização deve ter um nome exclusivo nesse nível.

  {% data reusables.codespaces.secret-precedence %}

### Limites para segredos

Você pode armazenar até 100 segredos por organização e 100 segredos por repositório.

Os segredos são limitados a 64 kB.

## Adicionar segredos para um repositório

Para criar segredos para um repositório da organização, você deve ter acesso de administrador.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.codespaces.sidebar-secret %}

2. Na parte superior da página, clique em **Novo segredo do repositório**.
3. Digite um nome para o segredo na caixa de entrada **Nome**.
4. Insira o valor para o seu segredo.
5. Clique em **Adicionar segredo**.

## Adicionar segredos para uma organização

Ao criar um segredo em uma organização, você pode usar uma política para limitar quais repositórios podem acessar esse segredo. Por exemplo, você pode conceder acesso a todos os repositórios ou limitar o acesso a apenas repositórios privados ou a uma lista específica de repositórios.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

2. Na parte superior da página, clique em **Novo segredo da organização**.
3. Digite um nome para o segredo na caixa de entrada **Nome**.
4. Insira o **Valor** do segredo.
5. Na lista suspensa **Acesso do repositório**, escolha uma política de acesso.
    ![Lista Acesso ao Repositório com repositórios privados selecionados](/assets/images/help/codespaces/secret-repository-access.png)
6. Clique em **Adicionar segredo**.

## Rever o acesso para os segredos do nível da organização

Você pode verificar quais políticas de acesso são aplicadas a um segredo na sua organização.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.codespaces.sidebar-secret %}

1. A lista de segredos inclui quaisquer permissões e políticas configuradas. Por exemplo: ![lista de segredos](/assets/images/help/settings/actions-org-secrets-list.png)
1. Para obter mais detalhes sobre as permissões configuradas para cada segredo, clique em **Atualizar**.

## Leitura adicional

- "[Como gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"
