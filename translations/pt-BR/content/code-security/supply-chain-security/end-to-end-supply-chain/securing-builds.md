---
title: Práticas recomendadas para proteger seu sistema de compilação
shortTitle: Securing builds
allowTitleToDifferFromFilename: true
intro: Orientação sobre como proteger o final da sua cadeia de suprimentos — os sistemas que você usa para construir e distribuir artefatos.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Fundamentals
  - Security
  - CI
  - CD
ms.openlocfilehash: f184bb668ba1594a77099fab734686b9c550c238
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518853'
---
## Sobre este guia

Este guia descreve mudanças de maior impacto que você pode fazer para melhorar a segurança de seus sistemas de construção. Cada seção descreve uma alteração que você pode fazer em seus processos para melhorar a segurança. As mudanças de maior impacto estão listadas primeiro.

## Qual o risco?

Alguns ataques a cadeias de suprimentos de software visam diretamente o sistema de construção. Se um invasor pode modificar o processo de construção, ele pode explorar seu sistema sem o esforço de comprometer contas pessoais ou código. É importante garantir que você não se esqueça de proteger o sistema de compilação, bem como contas pessoais e código.

## Proteja seu sistema de compilação

Existem vários recursos de segurança que um sistema de construção deve ter:

1. Os passos de compilação devem ser claros e repetitivos.

2. Você deve saber exatamente o que foi executado durante o processo de compilação.

3. Cada compilação deve começar em um ambiente fresco, então uma construção comprometida não persiste para afetar futuras compilações.

{% data variables.product.prodname_actions %} pode ajudar você a atender a esses recursos. As instruções de compilação são armazenadas no seu repositório, junto com seu código. Você escolhe o ambiente em que sua compilação é executada, incluindo Windows, Mac, Linux ou executores que você mesmo hospeda. Cada build começa com uma nova imagem do executor, o que torna difícil para um ataque persistir no seu ambiente de build.

Além dos benefícios de segurança, {% data variables.product.prodname_actions %} permite que você acione compilações manualmente, periodicamente ou em eventos do git no seu repositório para compilações frequentes e rápidas.

{% data variables.product.prodname_actions %} é um grande tópico, mas um bom lugar para começar é "[Entender o GitHub Actions](/actions/learn-github-actions/understanding-github-actions)", bem como "[Escolher executores hospedados em GitHub](/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners)" e "[Disparar um fluxo de trabalho](/actions/using-workflows/triggering-a-workflow)".

## Assine suas compilações

Depois que o processo de compilação estiver seguro, você deverá evitar que alguém altere o resultado final do processo de compilação. Uma ótima maneira de fazer isso é assinar suas compilações. Ao distribuir software publicamente, isso é frequentemente feito com um par de chaves de criptografia pública/privada. Você usa a chave privada para assinar a compilação e você publica sua chave pública para que os usuários do seu software possam verificar a assinatura na compilação antes de usá-lo. Se os bytes da compilação forem modificados, a assinatura não será verificada.

A forma como exatamente você assina a sua compilação dependerá do tipo de código que você está escrevendo e dos seus usuários. Muitas vezes, é difícil saber como armazenar com segurança a chave privada. Uma opção básica aqui é usar segredos criptografados de {% data variables.product.prodname_actions %}, embora você precise ter cuidado para limitar quem tem acesso a esses fluxos de trabalho de {% data variables.product.prodname_actions %}. {% ifversion fpt or ghec %}Se sua chave privada estiver armazenada em outro sistema acessível pela internet pública (como o Microsoft Azure ou o Cofre do HashiCorp), uma opção mais avançada é a autenticação com o OpenID Connect, para que você não tenha que compartilhar segredos entre sistemas.{% endif %} Se a sua chave privada puder ser acessada apenas a partir de uma rede privada, outra opção é usar executores auto-hospedados para {% data variables.product.prodname_actions %}.

Para obter mais informações, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)"{% ifversion fpt or ghec %}, "[Sobre proteção de segurança com o OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)",{% endif %} e "[Sobre executores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".

## Segurança reforçada para {% data variables.product.prodname_actions %}

Há muitas outras etapas que você pode seguir para garantir adicionalmente a segurança {% data variables.product.prodname_actions %}. Em particular, tenha cuidado ao avaliar fluxos de trabalho de terceiros, e considere usar `CODEOWNERS` para limitar quem pode fazer alterações nos seus fluxos de trabalho.

Para obter mais informações, confira "[Proteção de segurança para o GitHub Actions](/actions/security-guides/security-hardening-for-github-actions);" particularmente "[Usar ações de terceiros](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)" e "[Usar `CODEOWNERS` para monitorar alterações](/actions/security-guides/security-hardening-for-github-actions#using-codeowners-to-monitor-changes)".

## Próximas etapas

- "[Como proteger sua cadeia de fornecedores de ponta a ponta](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)"

- "[Melhores práticas para proteger contas](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)"

- "[Melhores práticas para proteger o código na sua cadeia de fornecedores](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)"
