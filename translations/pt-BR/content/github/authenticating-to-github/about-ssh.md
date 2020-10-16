---
title: Sobre o SSH
intro: 'Usando o protocolo SSH, você pode se conectar a servidores e serviços remotos e se autenticar neles. Com chaves SSH, é possível se conectar ao {% data variables.product.product_name %} sem fornecer nome de usuário ou senha a cada visita.'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Ao configurar o SSH, você vai [gerar uma chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) e, em seguida, [adicionar a chave à sua conta do {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account). Adicionar a chave SSH ao ssh-agent garante que sua chave SSH tenha uma camada extra de segurança por meio do uso de uma frase secreta. Para obter mais informações, consulte "[Trabalhar com frases secretas da chave SSH](/articles/working-with-ssh-key-passphrases)".

{% if currentVersion == "free-pro-team@latest" %}Para usar a sua chave SSH com um repositório pertencente a uma organização que usa o login único SAML, primeiro você precisará autorizá-lo. Para obter mais informações, consulte "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".{% endif %}

É recomendável [revisar regularmente sua lista de chaves SSH](/articles/reviewing-your-ssh-keys) e revogar qualquer uma que esteja inválida ou tenha sido comprometida.

{% if currentVersion == "free-pro-team@latest" %}
Se você não usou a sua chave SSH por um ano,
{% data variables.product.prodname_dotcom %} irá apagar automaticamente sua chave SSH inativa como uma precaução de segurança. Para obter mais informações, consulte "[Chaves SSH excluídas ou ausentes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

Se for integrante de uma organização que fornece certificados SSH, você poderá usar seu certificado para acessar os repositórios dessa organização, sem adicionar o certificado à sua conta {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre autoridades certificadas SSH](/articles/about-ssh-certificate-authorities)".

### Leia mais

- "[Verificar se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Testar a conexão SSH](/articles/testing-your-ssh-connection)"
- "[Trabalhar com frases secretas da chave SSH](/articles/working-with-ssh-key-passphrases)"
- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
