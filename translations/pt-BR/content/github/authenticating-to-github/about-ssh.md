---
title: Sobre o SSH
intro: 'Usando o protocolo SSH, você pode se conectar a servidores e serviços remotos e se autenticar neles. Com chaves SSH, você pode conectar-se a {% data variables.product.product_name %} sem inserir seu nome de usuário e token de acesso pessoal em cada visita.'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

When you set up SSH, you will need to generate a new SSH key and add it to the ssh-agent. You must add the SSH key to your account on {% data variables.product.product_name %} before you use the key to authenticate. For more information, see "[Generating a new SSH key and adding it to the ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" and "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

You can further secure your SSH key by using a hardware security key, which requires the physical hardware security key to be attached to your computer when the key pair is used to authenticate with SSH. You can also secure your SSH key by adding your key to the ssh-agent and using a passphrase. Para obter mais informações, consulte "[Trabalhar com frases secretas da chave SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases)".

{% if currentVersion == "free-pro-team@latest" %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you must authorize the key. Para obter mais informações, consulte "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".{% endif %}

To maintain account security, you can regularly review your SSH keys list and revoke any keys that are invalid or have been compromised. Para obter mais informações, consulte "[Revisar as chaves SSH](/github/authenticating-to-github/reviewing-your-ssh-keys)".

{% if currentVersion == "free-pro-team@latest" %}
Se você não usou a sua chave SSH por um ano,
{% data variables.product.prodname_dotcom %} irá apagar automaticamente sua chave SSH inativa como uma precaução de segurança. Para obter mais informações, consulte "[Chaves SSH excluídas ou ausentes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

Se for integrante de uma organização que fornece certificados SSH, você poderá usar seu certificado para acessar os repositórios dessa organização, sem adicionar o certificado à sua conta {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre autoridades certificadas SSH](/articles/about-ssh-certificate-authorities)".

### Leia mais

- "[Verificar se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Testar a conexão SSH](/articles/testing-your-ssh-connection)"
- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
