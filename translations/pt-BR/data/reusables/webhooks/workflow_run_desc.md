Este evento ocorre quando uma execução do fluxo de trabalho é solicitada ou concluída, e permite que você execute um fluxo de trabalho com base no resultado concluído de outro fluxo de trabalho. A workflow run is triggered regardless of the result of the previous workflow.

Por exemplo, se o fluxo de trabalho `pull_request` gera artefatos de criação, você pode criar um novo fluxo de trabalho que usa `workflow_run` para analisar os resultados e adicionar um comentário ao pull request original.

The workflow started by the `workflow_run` event is able to access secrets and write tokens, even if the previous workflow was not. This is useful in cases where the previous workflow is intentionally not privileged, but you need to take a privileged action in a later workflow.
