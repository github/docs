---
title: Sobre a verificação de assinatura de commit
intro: 'Ao usar GPG ou S/MIME, você pode assinar tags e commits localmente. Essas tags ou commits são marcadas como verificadas no {% data variables.product.product_name %} para que outras pessoas possam ter certeza de que as alterações vêm de uma fonte confiável.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: 73f4c4ea28db9c0e9f012a2a9e9aa061d655e093
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/26/2022
ms.locfileid: '147409552'
---
## <a name="about-commit-signature-verification"></a>Sobre a verificação de assinatura de commit

Você pode assinar commits e tags localmente para dar a outras pessoas confiança sobre a origem de uma alteração que você fez. Se um commit ou uma tag tiver uma assinatura GPG ou S/MIME que possa ser verificada por meio de criptografia, o GitHub marcará o commit ou a tag como {% ifversion fpt or ghec %}"Verificado" ou "Parcialmente verificado".{% else %}"Verificado".{% endif %}

![Commit verificado](/assets/images/help/commits/verified-commit.png)

{% ifversion fpt or ghec %} Os commits e as tags têm o status de verificação a seguir, dependendo se você habilitou o modo vigilante. Por padrão, o modo vigilante não está habilitado. Para obter mais informações sobre como habilitar o modo vigilante, confira "[Como ver os status de verificação de todos os seus commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)".

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

A assinatura de commits é diferente da aprovação de um commit. Para obter mais informações sobre como aprovar commits, confira "[Como gerenciar a política de aprovação de commit para seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)".

### <a name="default-statuses"></a>Status padrão

| Status         | Descrição |
| -------------- | ----------- |
| **Verificado**   | O commit foi assinado e a assinatura foi verificada com sucesso.
| **Não verificado** | O commit foi assinado, mas não foi possível verificar a assinatura.
| Sem status de verificação | O commit não foi assinado.

### <a name="signature-verification-for-rebase-and-merge"></a>Verificação de assinatura para troca de base e mesclagem
{% data reusables.pull_requests.rebase_and_merge_verification %}

Para obter mais informações, confira "[Como trocar de base e mesclar commits](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits)".

### <a name="statuses-with-vigilant-mode-enabled"></a>Status com modo vigilante habilitado

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %} Se um commit ou uma tag tiver uma assinatura que não possa ser verificada, o {% data variables.product.product_name %} marcará o commit ou a tag como não verificado.
{% endif %}

Os administradores do repositório podem impor a assinatura de commit obrigatória em um branch para bloquear todos os commits que não estejam assinados e verificados. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-signed-commits)".

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %}Se um administrador do site ativou a assinatura de commit da Web, {% data variables.product.product_name %} usará automaticamente o GPG para assinar os commits que você fizer usando a interface da Web. Os commits assinados por {% data variables.product.product_name %} terão um status verificado. Você pode verificar a assinatura localmente usando a chave pública disponível em `https://HOSTNAME/web-flow.gpg`. Para obter mais informações, confira "[Configurar a assinatura de commit da Web](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing)".
{% else %}{% data variables.product.prodname_dotcom %} usará automaticamente o GPG para assinar commits que você fizer usando a interface da Web. Os commits assinados por {% data variables.product.prodname_dotcom %} terão um status verificado. Você pode verificar a assinatura localmente usando a chave pública disponível em https://github.com/web-flow.gpg. A impressão digital completa da chave é `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`.

Opcionalmente, você pode fazer com que o {% data variables.product.prodname_dotcom %} assine os commits efetuados em {% data variables.product.prodname_github_codespaces %}. Para obter mais informações de como habilitar a verificação de GPG nos codespaces, confira "[Como gerenciar a verificação de GPG nos {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)".{% endif %} {% endif %}

## <a name="gpg-commit-signature-verification"></a>Verificação da assinatura de commit GPG

É possível usar GPG para assinar commits com uma chave GPG que você mesmo gera.

{% data variables.product.product_name %} usa bibliotecas OpenPGP para confirmar que seus commits e tags assinados localmente são verificáveis criptograficamente com base em uma chave pública que você adicionou à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Para assinar commits usando GPG e para que esses commits sejam verificados no {% data variables.product.product_name %}, siga estas etapas:

1. [Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)
2. [Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)
3. [Adicionar uma chave GPG à conta do GitHub](/articles/adding-a-gpg-key-to-your-github-account)
4. [Informar o Git sobre a chave de assinatura](/articles/telling-git-about-your-signing-key)
5. [Assinar commits](/articles/signing-commits)
6. [Assinar tags](/articles/signing-tags)

## <a name="smime-commit-signature-verification"></a>Verificação da assinatura de commit S/MIME

Você pode usar S/MIME para assinar commits com uma chave X.509 emitida pela organização.

O {% data variables.product.product_name %} usa [o pacote ca-certificates do Debian](https://packages.debian.org/bullseye/ca-certificates), o mesmo repositório confiável usado pelos navegadores Mozilla, para confirmar que as tags e os commits assinados localmente são criptograficamente verificáveis em relação a uma chave pública em um certificado raiz confiável.

{% data reusables.gpg.smime-git-version %}

Para assinar commits usando S/MIME e para que esses commits sejam verificados no {% data variables.product.product_name %}, siga estas etapas:

1. [Informar o Git sobre a chave de assinatura](/articles/telling-git-about-your-signing-key)
2. [Assinar commits](/articles/signing-commits)
3. [Assinar tags](/articles/signing-tags)

Não é preciso fazer upload da chave pública no {% data variables.product.product_name %}.

{% ifversion fpt or ghec %}
## <a name="signature-verification-for-bots"></a>Verificação de assinatura para bots

As organizações e {% data variables.product.prodname_github_apps %} que exigem a assinatura de commit podem usar bots para assinar commits. Se um commit ou uma tag tiver uma assinatura de bot que possa ser verificada de maneira criptográfica, o {% data variables.product.product_name %} marcará o commit ou tag como verificado.

A verificação de assinatura para bots somente funcionará se a solicitação for verificada e autenticada como o {% data variables.product.prodname_github_app %} ou bot e se não tiver informações de autor personalizadas, informações de committer personalizadas e nenhuma informação de assinatura personalizada, como API de commits.
{% endif %}

## <a name="further-reading"></a>Leitura adicional

- "[Como assinar commits](/articles/signing-commits)"
- "[Como assinar tags](/articles/signing-tags)"
- "[Solução de problemas de verificação de assinatura de commit](/articles/troubleshooting-commit-signature-verification)"
