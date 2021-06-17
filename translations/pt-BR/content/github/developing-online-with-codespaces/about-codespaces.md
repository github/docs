---
title: Sobre os Codespaces
intro: '{% data variables.product.prodname_codespaces %} é um ambiente de desenvolvimento on-line, hospedado por {% data variables.product.prodname_dotcom %} e movido por {% data variables.product.prodname_vscode %}, que permite o desenvolvimento integral na nuvem.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
versions:
  free-pro-team: '*'
topics:
  - espaços de código
---

{% note %}

**Observação:** {% data variables.product.prodname_codespaces %} está atualmente em versão beta pública limitada e sujeito a alterações. Durante o período beta, {% data variables.product.prodname_dotcom %} não faz nenhuma garantia sobre a disponibilidade de {% data variables.product.prodname_codespaces %}. Para obter mais informações sobre como participar do beta, consulte "[Juntar-se ao beta](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)".

{% endnote %}

### Sobre o {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} é um ambiente de desenvolvimento da nuvem disponível no seu navegador. Um codespace inclui tudo o que você precisa desenvolver para um repositório específico, incluindo um editor de texto com destaque de sintaxe e preenchimento automático, um terminal, ferramentas de depuração e comandos do Git. Tudo isso dentro de {% data variables.product.prodname_dotcom %}. Você também pode instalar {% data variables.product.prodname_vscode %} extensões eno seu codespace para adicionar mais funcionalidades.

{% data variables.product.prodname_codespaces %} facilita aos desenvolvedores a integrar-se a uma nova empresa ou começar a contribuir para um projeto de código aberto. Os mantenedores do projeto podem configurar um repositório para que, quando você criar um codespace para o repositório, as dependências do projeto sejam incluídas automaticamente. Você pode começar a programar mais rapidamente reduzindo o tempo gasto configurando seu ambiente.

O {% data variables.product.prodname_codespaces %} permite que você se desenvolva na nuvem em vez de desenvolver-se localmente. Os desenvolvedores podem contribuir de qualquer lugar, em qualquer máquina, incluindo tablets ou Chromebooks, e não há necessidade de manter cópias locais da propriedade intelectual.

![Um codespace aberto](/assets/images/help/codespaces/codespace-overview.png)

### Usar {% data variables.product.prodname_codespaces %}

Todos os desenvolvedores podem criar um ou mais codespaces para qualquer repositório público ou para qualquer repositório privado que pertence à sua conta de usuário. {% data reusables.codespaces.unsupported-repos %} {% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %} Para obter mais informações, consulte "[Excluir um codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.about-configuration %} Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para o seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

{% data reusables.codespaces.about-personalization %} Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para sua conta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".

Você pode definir as configurações para adicionar segredos criptografados, habilitar a verificação de GPG e permitir que os codespaces acessem outros repositórios. Para obter mais informações, consulte "[Gerenciar segredos criptografados para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Gerenciar verificação de GPG para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)" e "[Gerenciar acesso e segurança para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)".

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.beta-functionality-limited %}

### Sobre a cobrança do {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.about-billing-for-codespaces %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-billing-for-codespaces)".

### Juntar-se ao beta

Um número limitado de pessoas será convidado a participar do beta. Para participar da lista de espera, consulte [Registrar-se no beta de codespaces](https://github.com/features/codespaces/signup).

### Entre em contato conosco com relação a {% data variables.product.prodname_codespaces %}

Se você tiver algum problema ao usar {% data variables.product.prodname_codespaces %}, consulte "[Solucionar problemas do seu codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)".

Se você ainda precisa de ajuda ou tem feedback sobre {% data variables.product.prodname_codespaces %}, use a discussão de [Feedback para codespaces](https://github.com/github/feedback/discussions/categories/codespaces-feedback).
