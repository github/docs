---
title: O ciclo de vida do codespace
intro: É possível realizar o desenvolvimento em um ambiente do {% data variables.product.prodname_github_codespaces %} e manter seus dados ao longo de todo o ciclo de vida do codespace.
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Developer
redirect_from:
- /codespaces/developing-in-codespaces/codespaces-lifecycle
ms.openlocfilehash: 660ced63e34c6de8025c65946542baca43534cfe
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180792"
---
## Sobre o ciclo de vida de um codespace

O ciclo de vida de um codespace começa quando você cria um código e termina quando você o exclui. Você pode desconectar-se e reconectar-se a um codespace ativo sem afetar seus processos em execução. Você pode parar e reiniciar o processo sem perder as alterações feitas no seu projeto.

## Criar um codespace

Quando você deseja trabalhar em um projeto, você pode optar por criar um novo codespaceou abrir um codespace já existente. Você tem a opção de criar um codespace com base em um branch do projeto sempre que realizar o desenvolvimento no {% data variables.product.prodname_github_codespaces %} ou manter um codespace de longo prazo para um recurso. {% data reusables.codespaces.starting-new-project-template %} Para saber mais, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)" e "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

{% data reusables.codespaces.max-number-codespaces %} Da mesma forma, se você atingir o número máximo de codespaces ativos e tentar iniciar outro, será solicitado que você encerre um de seus codespaces ativos.

Se você escolher criar um novo codespace, sempre que você trabalhar em um projeto, você deverá fazer push das alterações regularmente para que todos os novos commits estejam em {% data variables.product.prodname_dotcom %}. Se você optar por usar um codespace de longo prazo para o seu projeto, você deverá retirá-lo do branch padrão do repositório cada vez que começar a trabalhar no seu codespace para que seu ambiente tenha os commits mais recentes. Esse fluxo de trabalho é muito parecido como se você estivesse trabalhando com um projeto na sua máquina local. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Salvar alterações em um codespace

Ao conectar-se a um código através da web, a gravação automática é habilitada automaticamente para o editor da web e configurada para salvar as alterações após um atraso. Ao conectar-se a um codespace por meio de {% data variables.product.prodname_vscode %} em execução no seu computador, você deverá habilitar o salvamento automático. Para obter mais informações, confira [Salvar/Salvar Automaticamente](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) na documentação do {% data variables.product.prodname_vscode %}.

O trabalho será salvo em uma máquina virtual na nuvem. É possível fechar e parar um codespace e retornar ao trabalho salvo mais tarde. Se você tiver alterações não salvas, seu editor solicitará que você as salve antes de sair. No entanto, se o codespace for excluído, o trabalho também será. Para manter seu trabalho, faça commit das alterações e as envie por push ao repositório remoto ou publique-o em um novo repositório remoto, caso o codespace tenha sido criado com base em um modelo. Para obter mais informações, confira "[Como usar o controle do código-fonte no seu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)".

## Limites de tempo do {% data variables.product.prodname_github_codespaces %}

Se você não interagir com o seu codespace em execução ou se você sair do seu codespace sem pará-lo explicitamente, ele irá expirar após um determinado tempo de inatividade e irá parar de executar. Por padrão, um código irá expirar após 30 minutos de inatividade. No entanto, você pode personalizar a duração do período de tempo limite para novos codespaces que você criar. Para obter mais informações sobre como definir o período de tempo limite padrão para seus codespaces, confira "[Como definir o período de tempo limite para o {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)". Para obter mais informações sobre como interromper um codespace, confira "[Como interromper um codespace](#stopping-a-codespace)".

Quando o tempo de um codespace chega ao limite, os seus dados são preservados da última vez que suas alterações foram salvas. Para obter mais informações, confira "[Como salvar alterações em um codespace](#saving-changes-in-a-codespace)".

## Reconstruindo um codespace

Você pode reconstruir um codespace para implementar alterações na configuração do contêiner de desenvolvimento. Para a maioria dos usos, você pode criar um novo codespace como uma alternativa à reconstrução de um codespace. Por padrão, quando você recompila seu codespace, {% data variables.product.prodname_github_codespaces %} reutilizará imagens do cache para acelerar o processo de recompilação. Como alternativa, você pode executar uma recompilação completa, que limpa o cache e recria o contêiner com imagens novas.

Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)" e "[Executar uma recompilação completa de um contêiner](/codespaces/codespaces-reference/performing-a-full-rebuild-of-a-container)".

## Interrompendo um codespace

{% data reusables.codespaces.stopping-a-codespace %} Para saber mais, confira "[Parar e iniciar um codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)".

## Excluir um codespace

Você pode criar um codespace para uma tarefa específica e, em seguida, excluir com segurança o codespace depois que você fizer push das alterações em um branch remoto.

Se você tentar excluir um codespace com commits git que não foram enviados por push, o seu editor irá notificar você de que você tem alterações que não foram enviadas por push para um branch remoto. Você pode fazer push de todas as alterações desejadas e, em seguida, excluir o seu codespace ou continuar excluindo o seu codespace e todas as alterações que não foram enviadas por commit. Você também pode exportar seu codespace para um novo branch sem criar um novo codespace. Para obter mais informações, confira "[Como exportar alterações para um branch](/codespaces/troubleshooting/exporting-changes-to-a-branch)".

Os codespaces interrompidos que permanecerem inativos por um período especificado serão excluídos automaticamente. Por padrão, os codespaces inativos são excluídos após 30 dias, mas é possível personalizar o período de retenção deles. Para obter mais informações, confira "[Como configurar a exclusão automática de codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

Se você criar um codespace, ele continuará acumulando encargos de armazenamento até ser excluído, independentemente de estar ativo ou ter sido interrompido. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)". A exclusão de um codespace não reduz o valor atual faturável do {% data variables.product.prodname_github_codespaces %}, que é acumulado durante cada ciclo de cobrança mensal. Para obter mais informações, confira "[Como exibir o uso do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

Para obter mais informações sobre como excluir um codespace, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

## Perder a conexão ao usar o {% data variables.product.prodname_github_codespaces %}

O {% data variables.product.prodname_github_codespaces %} é um ambiente de desenvolvimento baseado na nuvem que requer uma conexão com a Internet. Se você perder a conexão à internet enquanto trabalha em um codespace, você não poderá acessar seu codespace. No entanto, todas as alterações não comprometidas serão salvas. Quando você tiver acesso a uma conexão à internet novamente, você poderá conectar-se ao seu codespace no mesmo estado em que ele foi deixado. Se você tiver uma conexão instável, você deverá se fazer envio por commit e push das suas alterações com frequência.

Se você geralmente trabalha offline, é possível usar o arquivo `devcontainer.json` com a [extensão "Contêineres de desenvolvimento"](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) para o {% data variables.product.prodname_vscode_shortname %} a fim de compilar e anexar arquivos a um contêiner de desenvolvimento local do seu repositório. Para obter mais informações, confira [Desenvolvimento em um contêiner](https://code.visualstudio.com/docs/remote/containers) na documentação do {% data variables.product.prodname_vscode %}.
