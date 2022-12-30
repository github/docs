---
title: Editando uma consultoria de segurança do repositório
intro: 'Você pode editar os metadados e a descrição de uma consultoria de segurança do repositório, se precisar atualizar detalhes ou corrigir erros.'
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
  - /code-security/repository-security-advisories/editing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Edit repository advisories
ms.openlocfilehash: db25b39285c65cd1ba83e1a2b6e76e7ec0d6e3e4
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113960'
---
As pessoas com permissões de administrador para uma consultoria de segurança de repositório podem editar a consultoria de segurança.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Sobre os créditos para a consultoria de segurança

Você pode creditar pessoas que ajudaram a descobrir, relatar ou corrigir uma vulnerabilidade de segurança. Se você creditar alguém, essa pessoa poderá optar por aceitar ou recusar crédito.

Se alguém aceitar o crédito, o nome de usuário da pessoa aparecerá na seção "Créditos" da consultoria de segurança. Qualquer pessoa com acesso de leitura ao repositório pode ver a consultoria e as pessoas que aceitaram o crédito por ela.

Se você acredita que deveria ser creditado por uma consultoria de segurança, entre em contato com a pessoa que criou a consultoria e peça que edite a consultoria para incluir o seu crédito. Somente o criador da consultoria pode dar-lhe crédito. Portanto, não entre em contato com o suporte do GitHub com relação a créditos para consultorias de segurança.

## Editar uma consultoria de segurança

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Na lista "consultorias de segurança", clique na consultoria de segurança que deseja editar.
5. No canto superior direito dos detalhes da consultoria de segurança, clique em {% octicon "pencil" aria-label="The edit icon" %}. Isso abrirá o formulário de aviso de segurança no modo de edição.
  ![Botão Editar em uma consultoria de segurança](/assets/images/help/security/security-advisory-edit-button.png) {% data reusables.repositories.security-advisory-edit-details %} {% data reusables.repositories.security-advisory-edit-severity %} {% data reusables.repositories.security-advisory-edit-cwe-cve %} {% data reusables.repositories.security-advisory-edit-description %}
11. Opcionalmente, edite os "Créditos" para a consultoria de segurança.
  ![Créditos para uma consultoria de segurança](/assets/images/help/security/security-advisory-credits.png)
12. Clique em **Atualizar consultoria de segurança**.
  ![Botão "Atualizar consultoria de segurança"](/assets/images/help/security/update-advisory-button.png)
13. As pessoas listadas na seção "Créditos" receberão um e-mail ou uma notificação da web convidando-os a aceitar o crédito. Se uma pessoa aceitar, seu nome de usuário ficará visível publicamente assim que a consultoria de segurança for publicada.

## Leitura adicional

- "[Como retirar uma consultoria de segurança do repositório](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
