---
title: Configurar métodos de recuperação da autenticação de dois fatores
intro: Você pode configurar vários métodos de recuperação para acessar sua conta em caso de perda das credenciais da autenticação de dois fatores.
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083579'
---
Além de armazenar com segurança os códigos de recuperação da autenticação de dois fatores, é enfaticamente recomendável configurar um ou mais métodos adicionais de recuperação.

## Baixar os códigos de recuperação da autenticação de dois fatores

{% data reusables.two_fa.about-recovery-codes %} Você também pode baixar os códigos de recuperação a qualquer momento depois de habilitar a autenticação de dois fatores.

Para manter sua conta protegida, não compartilhe nem distribua seus códigos de recuperação. É recomendável salvá-los com um gerenciador de senhas seguro, como o:
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

Em caso de geração de novos códigos de recuperação ou desabilitação e reabilitação da 2FA, os códigos nas configurações de segurança serão atualizados automaticamente.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. Salve seus códigos de recuperação em um local seguro. Seus códigos de recuperação podem ajudar você a ter acesso novamente à sua conta no caso de perda do acesso.
    - Para salvar os códigos de recuperação no dispositivo, clique em **Baixar**.
    - Para salvar uma cópia impressa dos códigos de recuperação, clique em **Imprimir**.
    - Para copiar os códigos de recuperação para armazenamento em um gerenciador de senhas, clique em **Copiar**.
  ![Lista de códigos de recuperação com opção para baixar, imprimir ou copiar os códigos](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## Gerar um conjunto de códigos de recuperação

Depois que você usa um código de recuperação para voltar a ter acesso à sua conta, ele não pode ser reutilizado. Se os 16 códigos de recuperação já foram usados, você pode gerar outra lista de códigos. Gerar um novo conjunto de códigos de recuperação invalidará outros códigos gerados anteriormente.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. Para criar outro lote de códigos de recuperação, clique em **Gerar novos códigos de recuperação**.
    ![Botão Gerar novos códigos de recuperação](/assets/images/help/2fa/generate-new-recovery-codes.png)

## Configurar uma chave de segurança como um método adicional da autenticação de dois fatores

Você pode configurar uma chave de segurança como um método secundário da autenticação de dois fatores e usá-la para voltar a ter acesso à sua conta. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".

{% ifversion fpt or ghec %}

## Configurar um número de autenticação de fallback

É possível fornecer um segundo número para um dispositivo de fallback. Se você perder acesso ao dispositivo principal e aos códigos de recuperação, um número de SMS de backup pode ajudar a acessar a sua conta.

Você pode usar um número de fallback, independentemente de ter configurado a autenticação por mensagem de texto ou aplicativo móvel TOTP.

{% warning %}

**Aviso:** O uso de um número de fallback é um último recurso. É recomendável configurar métodos de recuperação adicionais no de caso de definir um número de autenticação de fallback.
- Invasores podem atacar as operadores de celular, colocando a autenticação por SMS em risco.
- Só há suporte para mensagens SMS em alguns países fora dos EUA. Para ver a lista, confira "[Países nos quais há suporte para a autenticação por SMS](/articles/countries-where-sms-authentication-is-supported)".

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Ao lado de "Número de SMS de fallback", clique em **Adicionar**.
![Botão Adicionar número de SMS de fallback](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. Em "Número de SMS de fallback", clique em **Adicionar número de SMS de fallback**.
![Texto Adicionar número de SMS de fallback](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. Selecione o código do seu país e digite o número do celular, incluindo o código de área. Quando as informações estiverem corretas, clique em **Definir fallback**.
    ![Definir número de SMS de fallback](/assets/images/help/2fa/2fa-fallback-number.png)

Após a configuração, o dispositivo de backup receberá um SMS de confirmação.

{% endif %}

## Leitura adicional

- "[Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)"
- "[Como acessar o {% data variables.product.prodname_dotcom %} usando a autenticação de dois fatores](/articles/accessing-github-using-two-factor-authentication)"
- "[Como recuperar sua conta se você perder suas credenciais de autenticação de dois fatores](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)"
