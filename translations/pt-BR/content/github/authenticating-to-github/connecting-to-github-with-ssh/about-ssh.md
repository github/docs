---
title: Sobre o SSH
intro: 'Usando o protocolo SSH, você pode se conectar a servidores e serviços remotos e se autenticar neles. Com chaves SSH, você pode conectar-se a {% data variables.product.product_name %} sem inserir seu nome de usuário e token de acesso pessoal em cada visita.'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Ao configurar o SSH, você precisará gerar uma nova chave SSH e adicioná-la ao agente ssh. Você deve adicionar a chave SSH à sua conta {% data variables.product.product_name %} antes de usar a chave para efetuar a autenticação. Para mais informações consulte "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" e "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

Você pode proteger ainda mais sua chave SSH usando uma chave de segurança de hardware, o que exige que a chave de segurança física do hardware seja conectada ao seu computador quando o par de chaves é usado para efetuar a autenticação com SSH. Você também pode proteger sua chave SSH, adicionando sua chave ao agente do ssh-agent e usando uma frase secreta. Para obter mais informações, consulte "[Trabalhar com frases secretas da chave SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases)".

{% if currentVersion == "free-pro-team@latest" %}Para usar a chave SSH com um repositório pertencente a uma organização que usa o login único SAML, você deve autorizar a chave. Para obter mais informações, consulte "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".{% endif %}

Para manter a segurança da conta, você pode revisar regularmente sua lista de chaves SSH e revogar quaisquer chaves que sejam inválidas ou que tenham sido comprometidas. Para obter mais informações, consulte "[Revisar as chaves SSH](/github/authenticating-to-github/reviewing-your-ssh-keys)".

{% if currentVersion == "free-pro-team@latest" %}
Se você ficou sem usar a chave SSH por um ano, o {% data variables.product.prodname_dotcom %} excluirá automaticamente essa chave SSH inativa como uma medida de segurança. Para obter mais informações, consulte "[Chaves SSH excluídas ou ausentes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

Se for integrante de uma organização que fornece certificados SSH, você poderá usar seu certificado para acessar os repositórios dessa organização, sem adicionar o certificado à sua conta {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre autoridades certificadas SSH](/articles/about-ssh-certificate-authorities)".

### Leia mais

- "[Verificar se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Testar a conexão SSH](/articles/testing-your-ssh-connection)"
- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
