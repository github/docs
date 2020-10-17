| Tecla                 | Tipo     | Descrição                                                                           |
| --------------------- | -------- | ----------------------------------------------------------------------------------- |
| `Ação`                | `string` | A ação que foi executada. Pode ser uma das ações a seguir:<ul><li>`submitted` - Uma revisão de pull request é enviada em um estado não pendente.</li><li>`edited` - O texto de uma revisão foi editado.</li><li>`dimissed` - Uma revisão foi descartada.</li></ul> |
| `pull_request`        | `objeto` | O [pull request](/v3/pulls/) ao qual a revisão pertence.                            |
| `revisar`             | `objeto` | A revisão que foi afetada.                                                          |
| `changes[body][from]` | `string` | A versão anterior do texto se a ação foi `editada`.                                 |
