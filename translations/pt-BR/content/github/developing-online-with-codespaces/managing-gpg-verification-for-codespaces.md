---
title: Gerenciar a verificação de GPG de codespaces
intro: Você pode permitir que {% data variables.product.company_short %} use o GPG automaticamente para assinar os commits que você faz nos seus codespaces para que outras pessoas possam confiar que as alterações vêm de uma fonte de confiança.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Observação:** A verificação do GPG para {% data variables.product.prodname_codespaces %} está atualmente em fase beta e sujeita a alterações.

{% endnote %}

Depois que você habilitar a verificação do GPG, {% data variables.product.company_short %} assinará automaticamente os commits que você fizer em {% data variables.product.prodname_codespaces %}, e os commits terão um status de verificado em {% data variables.product.product_name %}. Por padrão, a verificação do GPG está desabilitada para os codespaces que você criar. Você pode optar por permitir a verificação do GPG para todos os repositórios ou repositórios específicos. Habilite apenas a verificação do GPG para repositórios nos quais você confia. Para obter mais informações sobre commits assinado por {% data variables.product.product_name %}, consulte "[Sobre a verificação de assinatura do commit](/github/authenticating-to-github/about-commit-signature-verification)".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Em "Verificação do GPG, selecione a configuração que deseja para verificação do GPG. ![Botões de opção para gerenciar a verificação do GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png)
1. Se você escolheu "repositórios selecionados", selecione o menu suspenso e, em seguida, clique em um repositório para o qual deseja habilitar a verificação do GPG. Repita esse procedimento para todos os repositórios para os quais você deseja habilitar a verificação do GPG. ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 
