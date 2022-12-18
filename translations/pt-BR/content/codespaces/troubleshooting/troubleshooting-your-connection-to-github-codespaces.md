---
title: Solução de problemas com sua conexão com o GitHub Codespaces
intro: 'Solução de problemas de ajuda para você a se conectar ao {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159351'
---
## 503 codespace service unavailable

Os codespaces são definidos para parar após 30 minutos sem atividade. Se você tentar interagir com um codespace depois que ele for interrompido, poderá receber um erro `503 service unavailable`. 

- Se um botão **Iniciar** for mostrado no {% data variables.product.prodname_vscode %} ou na janela do navegador, clique em **Iniciar** para se reconectar ao codespace.
- Redefina o seu codespace recarregando a janela. Na [paleta de comandos](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) do {% data variables.product.prodname_vscode %}, clique em **Desenvolvedor: recarregar Janela**.

## Não foi possível conectar o navegador

Às vezes, é possível que você não consiga acessar um codespace a partir do seu navegador. Se isso acontecer, acesse https://github.com/codespaces e tente se conectar ao codespace por meio dessa página.

  - Se o codespace não estiver listado nessa página, verifique se você é o proprietário do codespace que ao qual você está tentando se conectar. Você só pode abrir um codespace que você criou. As URLs dos seus codespace sempre incluem o seu gerenciamento de {% data variables.product.company_short %}.
  - Se o codespace estiver listado, mas você não puder conectar-se a partir dessa página, verifique se você pode conectar-se usando um navegador diferente.

A rede da sua empresa pode estar bloqueando a conexão. Se possível, verifique qualquer registro com relação a conexões rejeitadas no seu dispositivo.

Se você ainda não conseguir conectar-se, {% data reusables.codespaces.contact-support %}

## Não é possível se conectar ao codespace no JupyterLab

Para poder usar um codespace no JupyterLab, você precisa garantir que ele esteja instalado no codespace. A imagem de contêiner padrão usada pelos {% data variables.product.prodname_github_codespaces %} inclui o JupyterLab, mas se você tiver personalizado a configuração do contêiner de desenvolvimento, precisará instalar manualmente o JupyterLab.

Se o codespace usa uma imagem baseada em Debian, você pode instalar o JupyterLab no contêiner de desenvolvimento adicionando o recurso `python` ao arquivo `devcontainer.json`, com a opção `installJupyterlab` definida como `true`. Caso contrário, instale-o diretamente no Dockerfile. Para obter instruções de instalação, confira "[Instalação](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)" na documentação do JupyterLab.

Para obter mais informações sobre o recurso `python`, confira a página LEIAME no [repositório `devcontainers/features`](https://github.com/devcontainers/features/tree/main/src/python). Para obter mais informações sobre o arquivo `devcontainer.json` e o Dockerfile, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)".

Se você ainda não conseguir conectar-se, {% data reusables.codespaces.contact-support %}

## a extensão de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %} não poderá conectar

Se você não consegue conectar-se a um codespace a partir da área de trabalho de {% data variables.product.prodname_vscode %}, siga as etapas de solução de problemas a seguir.

1. Verifique se você tem a versão mais recente da extensão de {% data variables.product.prodname_github_codespaces %} instalada. A extensão é uma versão de pré-visualização e atualizações frequentes são lançadas.
   1. Em {% data variables.product.prodname_vscode %}, exiba a aba "Extensões".
   2. Selecione a extensão {% data variables.product.prodname_github_codespaces %} para exibir a página de visão geral da extensão.
   3. Se uma atualização estiver disponível, um botão será mostrado. Clique em **Atualizar para X.X.X** para atualizar para a última versão.
2. Verifique se você está usando o build estável do {% data variables.product.prodname_vscode %} ou a versão [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/) (atualizações noturnas). Se você estiver usando a versão Insiders, tente instalar o [build estável](https://code.visualstudio.com/).
3. A rede da sua empresa pode estar bloqueando a conexão. Se possível, verifique qualquer registro com relação a conexões rejeitadas no seu dispositivo.

Se você ainda não conseguir conectar-se, {% data reusables.codespaces.contact-support %}

### O codespace tem problemas de latência

Se o codespace parecer particularmente lento ou tiver problemas de latência, é possível que tenha sido criado em região distante de você. Para resolver isso, [defina manualmente sua região do {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
