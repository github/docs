---
title: Sobre os Codespaces
intro: '{% data variables.product.prodname_codespaces %} é um ambiente de desenvolvimento on-line configurável, hospedado por {% data variables.product.prodname_dotcom %} e alimentado por {% data variables.product.prodname_vscode %}, que permite que você se desenvolva inteiramente na nuvem.'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
versions:
  free-pro-team: '*'
type: overview
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Sobre o {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} é um ambiente de desenvolvimento da nuvem configurável disponível no seu navegador em {% data variables.product.prodname_dotcom %} ou por meio de {% data variables.product.prodname_vscode %}.

![Um codespace aberto](/assets/images/help/codespaces/codespace-overview.png)

Um codespace inclui tudo o que os desenvolvedores precisam desenvolver para um repositório específico, incluindo a {% data variables.product.prodname_vscode %} experiência de edição e linguagens comuns, ferramentas e utilitários. {% data variables.product.prodname_codespaces %} é completamente configurável, permite que você crie um ambiente de desenvolvimento personalizado para seu projeto, e também que os desenvolvedores personalizem sua experiência com extensões e configurações do dotfile.

Os codespaces oferecem muitos benefícios para as equipes, o que permite um ambiente consistente em toda a sua equipe, integração rápida e criação de um espaço seguro para o desenvolvimento.

### Um ambiente consistente

É possível criar uma configuração de codespace único que define o ambiente (ou o _contêiner de desenvolvimento_) de cada novo código que qualquer pessoa criar para seu repositório. Uma vez definida uma configuração, os desenvolvedores não precisam se preocupar em instalar as ferramentas certas para comentar, revisar ou contribuir. Um ambiente padronizado já está disponível para eles assim que eles criam um codespace do repositório. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

Para obter ajuda para começar com configurações para linguagens específicas, consulte os tutoriais de [introdução](/codespaces/getting-started-with-codespaces).

Embora todos os códigos criados a partir do seu repositório possuam um ambiente de desenvolvimento consistente, os desenvolvedores podem usar {% data variables.product.prodname_codespaces %} onde quiserem – em {% data variables.product.prodname_dotcom %} ou por meio de {% data variables.product.prodname_vscode %}.

### Integração rápida e pessoal

Com um contêiner de desenvolvimento [](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#about-dev-containers) configurado no seu repositório, todos os novos desenvolvedores podem integrar rapidamente com o ambiente de desenvolvimento correto para o seu projeto usando o menu suspenso {% octicon "download" aria-label="The download icon" %} **Code**e selecionando **Abrir com os codespaces**.

![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

Como resultado da padronização em um ambiente de desenvolvedor reproduzível. Os desenvolvedores podem começar com um novo código sem fazer qualquer configuração manual e não precisam fazer a manutenção contínua do seu ambiente de desenvolvedores. É possível criar um novo codespace ao iniciar um novo recurso.

Os desenvolvedores também podem personalizar aspectos do seu ambiente de código usando um [dotfiles](https://dotfiles.github.io/tutorials/) repositório e [sincronização de onfigurações](https://code.visualstudio.com/docs/editor/settings-sync). A personalização pode incluir preferências shell, ferramentas adicionais, configurações de editor e extensões, como Live Share. Personalizações pessoais são armazenadas por usuário. Portanto, cada código que um desenvolvedor abrir terá seu ambiente pronto para ser usado. Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para sua conta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".

Como {% data variables.product.prodname_codespaces %} pode ser acessado no navegador, os desenvolvedores podem trabalhar em vários projetos, alternando entre abas.

### Um ambiente seguro

{% data variables.product.prodname_codespaces %} permite que os desenvolvedores façam o desenvolvimento na nuvem em vez de no local. Isso cria uma fonte única e rastreável de verdade. Os desenvolvedores podem contribuir de qualquer lugar, em qualquer máquina, incluindo tablets ou Chromebooks, e não há necessidade de manter cópias locais da propriedade intelectual. Desenvolvedores sempre precisam estar conectados e ter acesso a {% data variables.product.prodname_codespaces %} e a repositórios específicos. Estas permissões podem ser revogadas a qualquer momento. Assim que você revogar o acesso, esses desenvolvedores perderão todo o acesso a recursos protegidos. Além disso, os desenvolvedores autenticados criam trilhas de auditoria para que você saiba quem está fazendo o quê. Para obter mais informações sobre acesso e segurança, consulte "[Gerenciar o acesso e a segurança para os códigos de sua organização](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

Usar {% data variables.product.prodname_codespaces %} é o mais seguro quando todos os integrantes da sua equipe o estão usando. Isso significa que não há necessidade de clonar o repositório para uma máquina local e que os desenvolvedores não precisam instalar localmente como `raiz`.

Os desenvolvedores e administradores de organização também podem definir as configurações para adicionar segredos criptografados e habilitar a verificação GPG. Para obter mais informações, consulte "[Gerenciar segredos criptografados para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Gerenciar a verificação de GPG para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)".

### Sobre a cobrança do {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.about-billing-for-codespaces %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-billing-for-codespaces)".

### Juntar-se ao beta

Um número limitado de pessoas será convidado a participar do beta. To join the waitlist, see [Sign up for the Codespaces beta](https://github.com/features/codespaces/signup).

### Entre em contato conosco com relação a {% data variables.product.prodname_codespaces %}

Se você tiver algum problema ao usar {% data variables.product.prodname_codespaces %}, consulte "[Solucionar problemas do seu codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)".

Se você ainda precisa de ajuda ou tem feedback sobre {% data variables.product.prodname_codespaces %}, use a discussão de [Feedback para codespaces](https://github.com/github/feedback/discussions/categories/codespaces-feedback).
