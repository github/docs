---
title: Definir códigos de saída para ações
shortTitle: Definir códigos de saída
intro: 'Você pode usar códigos de saída para definir o status de uma ação. {% data variables.product.prodname_dotcom %} exibe os status para indicar a aprovação ou falha das ações.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'how_to'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre os códigos de saída

O {% data variables.product.prodname_dotcom %} usa o código de saída para definir o status de execução de verificação da ação, que pode ser `sucesso` ou `falha`.

| Status de saída         | Status de verificação de execução | Descrição                                                                                                                                                                                                                                  |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `0`                     | `success`                         | A ação foi concluída com êxito, outras tarefas que dependem dela podem começar.                                                                                                                                                            |
| Valor diferente de zero | `failure`                         | Qualquer outro código de saída indica falha na ação. Quando uma ação falha, todas as ações simultâneas são canceladas e as ações futuras são ignoradas. A execução de verificação e o conjunto de verificações ficam com status `failure`. |

### Definir um código de saída de falha em uma ação JavaScript

Se estiver criando uma ação JavaScript, você poderá usar o pacote [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) do conjunto de ferramentas de ações para registrar em log uma mensagem e definir um código de saída de falha. Por exemplo:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Para obter mais informações, consulte "[Criar uma ação JavaScript](/articles/creating-a-javascript-action)".

### Definir um código de saída de falha em uma ação de contêiner do Docker

Se estiver criando uma ação de contêiner do Docker, você poderá definir um código de saída de falha no seu script `entrypoint.sh`. Por exemplo:

{% raw %}
```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
  exit 1
fi
```
{% endraw %}

Para obter mais informações, consulte "[Criar uma ação de contêiner do Docker](/articles/creating-a-docker-container-action)".
