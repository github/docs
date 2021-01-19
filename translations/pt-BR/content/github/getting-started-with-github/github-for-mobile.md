---
title: GitHub para dispositivos móveis
intro: 'Faça triagem, colabore e gerencie seu trabalho em {% data variables.product.product_name %} do seu dispositivo móvel.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.mobile.ghes-release-phase %}

### Sobre o {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} oferece a você uma maneira de realizar trabalhos de alto impacto {% data variables.product.product_name %} rapidamente e de qualquer lugar. O {% data variables.product.prodname_mobile %}é uma maneira segura e confiável de acessar seus dados {% data variables.product.product_name %} através de um aplicativo cliente confiável e primordial.

Com o {% data variables.product.prodname_mobile %} você pode:
- Gerenciar, fazer triagem e limpar notificações
- Leia, analisar e colaborar em problemas e pull requests
- Pesquisar, navegar e interagir com usuários, repositórios e organizações
- Receber uma notificação push quando alguém mencionar seu nome de usuário

Para mais informações sobre notificações para {% data variables.product.prodname_mobile %}, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)."

### Instalar o {% data variables.product.prodname_mobile %}

Para instalar {% data variables.product.prodname_mobile %} para Android ou iOS, consulte [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

### Managing accounts

You can be simultaneously signed into mobile with one user account on {% data variables.product.prodname_dotcom_the_website %} and one user account on {% data variables.product.prodname_ghe_server %}.

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} may not work with your enterprise if you're required to access your enterprise over VPN.

#### Pré-requisitos

You must install {% data variables.product.prodname_mobile %} 1.4 or later on your device to use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}.

To use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see "[Release notes](/enterprise-server/admin/release-notes)" and "[Managing {% data variables.product.prodname_mobile %} for your enterprise](/admin/configuration/managing-github-for-mobile-for-your-enterprise)."

During the beta for {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, you must be signed in with a user account on {% data variables.product.prodname_dotcom_the_website %}.

#### Adding, switching, or signing out of accounts

You can sign into mobile with a user account on {% data variables.product.product_location %}. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap {% octicon "plus" aria-label="The plus icon" %} **Add Enterprise Account**. Follow the prompts to sign in.

After you sign into mobile with a user account on {% data variables.product.product_location %}, you can switch between the account and your account on  {% data variables.product.prodname_dotcom_the_website %}.  At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap the account you want to switch to.

If you no longer need to access data for your user account on {% data variables.product.product_location %} from {% data variables.product.prodname_mobile %}, you can sign out of the account. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, swipe left on the account to sign out of, then tap **Sign out**.

### Idiomas compatíveis com {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} está disponível nos seguintes idiomas.

- English
- Japanese
- Português do Brasil
- Simplified Chinese
- Spanish

Se você configurar o idioma do seu dispositivo para um idioma compatível, {% data variables.product.prodname_mobile %} será o idioma-padrão. Você pode alterar o idioma para {% data variables.product.prodname_mobile %} no no menu **Configurações** de {% data variables.product.prodname_mobile %}.

### Gerenciando links universais para {% data variables.product.prodname_mobile %} no iOS

{% data variables.product.prodname_mobile %} ativa automaticamente o Universal Links para iOS. Quando você clica em qualquer link {% data variables.product.product_name %}, a URL de destino vai abrir em {% data variables.product.prodname_mobile %} em vez do Safari. Para obter mais informações, consulte [Universal Links](https://developer.apple.com/ios/universal-links/)  no site de desenvolvedor da Apple

Para desabilitar os links universais, mantenha qualquer link {% data variables.product.product_name %} pressionado e, em seguida, pressione **Abrir**. Toda vez que você clica em um link {% data variables.product.product_name %} no futuro, a URL de destino abrirá no Safari em vez do {% data variables.product.prodname_mobile %}.

Para reabilitar o Universal Links, mantenha pressionado qualquer link {% data variables.product.product_name %}, depois clique em **Abrir em {% data variables.product.prodname_dotcom %}**.

### Compartilhando feedback

Se você encontrar um erro em {% data variables.product.prodname_mobile %}, você pode nos enviar um e-mail para <a href="mailto:mobilefeedback@github.com">mobilefeedback@github.com</a>.

Você pode enviar solicitações de recursos ou outros comentários para {% data variables.product.prodname_mobile %} [nas discussões do GitHub](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Mobile+Feedback%22).

### Desativando versões beta para iOS

Se você estiver testando uma versão beta do {% data variables.product.prodname_mobile %} para iOS usando TestFlight, você pode deixar a versão beta a qualquer momento.

1. Em seu dispositivo iOS, abra o app TestFlight.
2. Em "Apps", clique em **{% data variables.product.prodname_dotcom %}**.
3. Na parte inferior da página, clique em **Interromper testes**.
