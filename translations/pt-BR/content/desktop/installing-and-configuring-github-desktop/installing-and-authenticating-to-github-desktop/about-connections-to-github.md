---
title: Sobre conexões com o GitHub
intro: '{% data variables.product.prodname_desktop %} usa HTTPS para trocar dados de forma segura com {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/about-connections-to-github
versions:
  fpt: '*'
shortTitle: About connections
ms.openlocfilehash: 94f1e7db78504a115b233f17485f1b12299a1e11
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095145'
---
{% data variables.product.prodname_desktop %} conecta-se a {% data variables.product.prodname_dotcom %} quando você pull, push, clona e bifurca os repositórios remotos. Para se conectar a {% data variables.product.prodname_dotcom %} a partir de {% data variables.product.prodname_desktop %}, você deve autenticar sua conta. Para obter mais informações, confira "[Autenticação no {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)".

Depois de se autenticar no {% data variables.product.prodname_dotcom %}, você poderá se conectar a repositórios remotos com o {% data variables.product.prodname_desktop %}. O {% data variables.product.prodname_desktop %} armazena suas credenciais (nome de usuário e senha ou token de acesso pessoal) e usa as credenciais para autenticar cada conexão ao repositório remoto.

{% data variables.product.prodname_desktop %} se conecta ao {% data variables.product.prodname_dotcom %} usando HTTPS. Se você usar o {% data variables.product.prodname_desktop %} para acessar repositórios que foram clonados usando SSH, você poderá encontrar erros. Para se conectar a um repositório que foi clonado usando SSH, altere as URLs do remote. Para obter mais informações, confira "[Como gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

## Leitura adicional
- "[Como clonar repositórios e criar fork deles no GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)"
