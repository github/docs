---
title: Ciclo de vida dos codespaces
intro: 'Você pode desenvolver em um ambiente {% data variables.product.prodname_codespaces %} e manter seus dados ao longo de todo o ciclo de vida do codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
product: '{% data reusables.gated-features.codespaces %}'
---

## Sobre o ciclo de vida de um codespace

O ciclo de vida de um codespace começa quando você cria um código e termina quando você o exclui. Você pode desconectar-se e reconectar-se a um codespace ativo sem afetar seus processos em execução. Você pode parar e reiniciar o processo sem perder as alterações feitas no seu projeto.

## Criar um codespace

Quando você deseja trabalhar em um projeto, você pode optar por criar um novo codespaceou abrir um codespace já existente. Você deverá criar um novo codespace a partir de um branch do seu projeto toda vez que você desenvolver em {% data variables.product.prodname_codespaces %} ou mantiver um codespace de longo prazo para um recurso.

Se você escolher criar um novo codespace, sempre que você trabalhar em um projeto, você deverá fazer push das alterações regularmente para que todos os novos commits estejam em {% data variables.product.prodname_dotcom %}. Você pode ter até 10 codespaces por vez. Depois de ter 10 codespaces, você deverá excluir um codespace antes de criar um novo. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

Se você optar por usar um codespace de longo prazo para o seu projeto, você deverá retirá-lo do branch padrão do repositório cada vez que começar a trabalhar no seu codespace para que seu ambiente tenha os commits mais recentes. Esse fluxo de trabalho é muito parecido como se você estivesse trabalhando com um projeto na sua máquina local.

{% data reusables.codespaces.prebuilds-crossreference %}

## Salvar alterações em um codespace

Ao conectar-se a um código através da web, a gravação automática é habilitada automaticamente para o editor da web e configurada para salvar as alterações após um atraso. Ao conectar-se a um codespace por meio de {% data variables.product.prodname_vscode %} em execução no seu computador, você deverá habilitar o salvamento automático. Para obter mais informações, consulte [Salvar/Salvar Automaticamente](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) na documentação de {% data variables.product.prodname_vscode %}.

Se você desejar salvar suas alterações no repositório do git no sistema de arquivos do codespace, faça commit e envio por push para um branch remoto.

Se você tiver alterações não salvas, seu editor solicitará que você as salve antes de sair.

## Tempo limite de codespaces

Se você não interagir com o seu codespace em execução ou se você sair do seu codespace sem pará-lo explicitamente, ele irá expirar após um determinado tempo de inatividade e irá parar de executar. Por padrão, um código irá expirar após 30 minutos de inatividade. No entanto, você pode personalizar a duração do período de tempo limite para novos codespaces que você criar. For more information about setting the default timeout period for your codespaces, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)." Para obter mais informações sobre como interromper um codespace, consulte "[Interrompendo um codespace](#stopping-a-codespace)".

Quando o tempo de um codespace chega ao limite, os seus dados são preservados da última vez que suas alterações foram salvas. Para obter mais informações, consulte "[Salvando alterações em um codespace](#saving-changes-in-a-codespace)".

## Reconstruindo um codespace

Você pode recriar o seu codespace para restaurar um estado limpo, como se tivesse criado um novo codespace. Para a maioria dos usos, você pode criar um novo codespace como uma alternativa à reconstrução de um codespace. É muito provável que você reconstrua um codespace para implementar alterações no seu contêiner de desenvolvimento. Ao reconstruir um codespace, qualquer contêiner, imagens, volumes e caches serão limpos e o codespace será reconstruído.

Se você precisar de algum desses dados para persistir em uma recriação, você poderá criar, no local desejado do contêiner, um link simbólico (symlink) para o diretório persistente. Por exemplo, no seu diretório `.devcontainer`, você poderá criar uma pasta `config` que será preservada durante uma recriação. Você pode vincular simbolicamente o diretório `config` e seu conteúdo como um `postCreateCommand` no seu arquivo de `devcontainer.json`.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

No exemplo do arquivo `postCreate.sh`abaixo, o conteúdo do diretório `config` são está simbolicamente vinculado ao diretório principal.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Interrompendo um codespace

Você pode interromper um codespace a qualquer momento. Ao interromper um codespace, todos os processos em execução são interrompidos e o histórico de terminais é limpo. Qualquer alteração salva no seu codespace ainda estará disponível na próxima vez que você iniciá-lo. Se você não interromper explicitamente um codespace, ele continuará sendo executado até que o tempo seja esgotado em razão de inatividade. Para obter mais informações, consulte "[Tempo esgotado de codespaces](#codespaces-timeouts)".

Apenas os codespaces em execução implicam cobranças de CPU. Um codespace interrompido implica apenas custos de armazenamento.

Você deverá interromper e reiniciar um codespace para aplicar as alterações nele. Por exemplo, se você mudar o tipo de máquina usado no seu codespace, você deverá interromper e reiniciá-la para que a alteração seja implementada. Você também pode interromper o seu codespace e optar por reiniciá-lo ou excluí-lo se você encontrar um erro ou algo inesperado. Para obter mais informações, consulte "[Suspender ou interromper um codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

## Excluir um codespace

Você pode criar um codespace para uma tarefa específica e, em seguida, excluir com segurança o codespace depois que você fizer push das alterações em um branch remoto.

Se você tentar excluir um codespace com commits git que não foram enviados por push, o seu editor irá notificar você de que você tem alterações que não foram enviadas por push para um branch remoto. Você pode fazer push de todas as alterações desejadas e, em seguida, excluir o seu codespace ou continuar excluindo o seu codespace e todas as alterações que não foram enviadas por commit. Você também pode exportar seu codespace para um novo branch sem criar um novo codespace. Para obter mais informações, consulte "[ Exportando alterações para um branch](/codespaces/troubleshooting/exporting-changes-to-a-branch)."

Você será cobrado pelo armazenamento de todos os seus codespaces. Ao excluir um codespace, você não será mais cobrado.

Para obter mais informações sobre exclusão de um codespace, consulte "[Excluindo um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

## Perdendo a conexão durante o uso de codespaces

O {% data variables.product.prodname_codespaces %} é um ambiente de desenvolvimento baseado na nuvem e requer uma conexão à internet. Se você perder a conexão à internet enquanto trabalha em um codespace, você não poderá acessar seu codespace. No entanto, todas as alterações não comprometidas serão salvas. Quando você tiver acesso a uma conexão à internet novamente, você poderá conectar-se ao seu codespace no mesmo estado em que ele foi deixado. Se você tiver uma conexão instável, você deverá se fazer envio por commit e push das suas alterações com frequência.

Se você sabe que muitas vezes você irá trabalhar off-line, você pode usar o seu arquivo `devcontainer.json` com a extensão ["{% data variables.product.prodname_vscode %} Remote - Containers" extensão](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) para criar e anexar a um contêiner de desenvolvimento local para o seu repositório. Para obter mais informações, consulte [Desenvolvendo dentro de um contêiner](https://code.visualstudio.com/docs/remote/containers) na documentação de {% data variables.product.prodname_vscode %}.
