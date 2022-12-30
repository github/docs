---
title: 'Erro: Tipo de chave desconhecido'
intro: 'Este erro significa que o tipo de chave SSH que você usou não foi reconhecido ou não é compatível com o seu cliente SSH. '
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
ms.openlocfilehash: 83bf8714255a4d8f028beb73fd5c8fbcdbb0ef52
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065895'
---
## Sobre o erro `unknown key type`

Ao gerar uma nova chave SSH, você poderá receber um erro `unknown key type` se o cliente SSH não der suporte ao tipo de chave especificado.{% mac %}Para resolver esse problema no macOS, você pode atualizar o cliente SSH ou instalar um novo.

## Pré-requisitos

Você deve ter o Homebrew instalado. Para obter mais informações, confira o [guia de instalação](https://docs.brew.sh/Installation) na documentação do Homebrew.

## Resolver o problema

{% warning %}

**Aviso:** se você instalar o OpenSSH, o computador não poderá recuperar as frases secretas armazenadas no conjunto de chaves da Apple. Você precisará digitar sua senha ou interagir com a chave de segurança de hardware toda vez que você efetuar a autenticação com SSH em {% data variables.product.prodname_dotcom %} ou outro serviço da web.

Se você remover o OpenSSH, as frases secretas armazenadas na sua keychain serão recuperáveis novamente. Remova o OpenSSH inserindo o comando `brew uninstall openssh` no terminal.

{% endwarning %}

1. Abra o terminal.
2. Digite o comando `brew install openssh`.
3. Saia e reinicie o Terminal.
4. Tente o procedimento para gerar uma nova chave SSH novamente. Para obter mais informações, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)".

{% endmac %}{% linux %}Para resolver este problema no Linux, use o gerenciador de pacotes para sua distribuição do Linux para instalar uma nova versão do OpenSSH, ou compilar uma nova versão da fonte. Se você instalar uma versão diferente do OpenSSH, a possibilidade de outras aplicações efetuarem a autenticação via SSH poderá ser afetada. Para mais informações, consulte a documentação da sua distribuição.{% endlinux %}
