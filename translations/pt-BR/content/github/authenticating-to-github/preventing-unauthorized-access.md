---
title: Impedir acesso não autorizado
intro: 'Você pode receber um alerta da mídia sobre um incidente de segurança, como a descoberta do [Heartbleed bug](http://heartbleed.com/), ou o seu computador pode ser roubado enquanto você conectado no {% data variables.product.product_location %}. Em casos assim, alterar a sua senha previne acessos futuros indesejados em sua conta e projetos.'
redirect_from:
  - /articles/preventing-unauthorized-access
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

O {% data variables.product.product_name %} solicita uma senha para executar ações confidenciais, como adicionar novas chaves SSH, autorizar aplicativos ou modificar os integrantes da equipe.

Depois de alterar sua senha, você deve executar estas ações para confirmar que sua conta está segura:

- [Habilitar a autenticação de dois fatores](/articles/about-two-factor-authentication) em sua conta para que o acesso exija mais do que somente uma senha.
- [Revisar suas chaves SSH](/articles/reviewing-your-ssh-keys), [chaves de implantação](/articles/reviewing-your-deploy-keys) e [integrações autorizadas](/articles/reviewing-your-authorized-integrations) e revogar acessos não autorizados ou desconhecidos em suas configurações de SSH e de aplicativos.
{% if currentVersion == "free-pro-team@latest" %}
- [Verificar todos os seus endereços de e-mail](/articles/verifying-your-email-address). Se um invasor adicionou o endereço de e-mail dele à sua conta, isso pode permitir que ele force uma reinicialização de senha indesejada.
{% endif %}
- [Revise o registro de segurança da sua conta](/github/authenticating-to-github/reviewing-your-security-log). O histórico apresenta uma uma visão geral sobre várias configurações feitas em seus repositórios. Por exemplo, você pode confirmar que nenhum repositório privado se tornou público ou foi transferido.
- [Revise os webhooks](/articles/creating-webhooks) nos seus repositórios. Os webhooks podem permitir que um invasor intercepte pushes feitos em seu repositório.
- [Certifique-se de que nenhuma nova chave de implantação ](/guides/managing-deploy-keys/#deploy-keys) foi criada. Isso poderia habilitar o acesso de servidores externos em seus projetos.
- Revise os commits recentes feitos em seus repositórios.
- Revise a lista de colaboradores de cada repositório.
