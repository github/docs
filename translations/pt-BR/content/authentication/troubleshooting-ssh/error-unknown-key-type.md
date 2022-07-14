---
title: 'Erro: Tipo de chave desconhecido'
intro: Este erro significa que o tipo de chave SSH que você usou não foi reconhecido ou não é compatível com o seu cliente SSH.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
---

## Sobre o erro `tipo de chave desconhecida`

Ao gerar uma nova chave SSH, você pode receber um erro `tipo de chave desconhecida` se o seu cliente SSH não for compatível com o tipo de chave que você especificou.{% mac %}Para resolver este problema no macOS, você pode atualizar seu cliente SSH ou instalar um novo cliente SSH.

## Pré-requisitos

Você deve ter o Homebrew instalado. Para obter mais informações, consulte o [guia de instalação](https://docs.brew.sh/Installation) na documentação do Homebrew.

## Resolver o problema

{% warning %}

**Aviso:** Se você instalar o OpenSSH, o seu computador não cnseguirá recuperar as senhas armazenadas na keychain da Apple. Você precisará digitar sua senha ou interagir com a chave de segurança de hardware toda vez que você efetuar a autenticação com SSH em {% data variables.product.prodname_dotcom %} ou outro serviço da web.

Se você remover o OpenSSH, as frases secretas armazenadas na sua keychain serão recuperáveis novamente. Você pode remover o OpenSSH digitando o comando `brew uninstall openssh` no Terminal.

{% endwarning %}

1. Abra o terminal.
2. Insira o comando `brew install openssh`.
3. Saia e reinicie o Terminal.
4. Tente o procedimento para gerar uma nova chave SSH novamente. Para obter mais informações, consulte "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)".

{% endmac %}{% linux %}Para resolver este problema no Linux, use o gerenciador de pacotes para sua distribuição do Linux para instalar uma nova versão do OpenSSH, ou compilar uma nova versão da fonte. Se você instalar uma versão diferente do OpenSSH, a possibilidade de outras aplicações efetuarem a autenticação via SSH poderá ser afetada. Para mais informações, consulte a documentação da sua distribuição.{% endlinux %}
