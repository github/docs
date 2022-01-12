| Tecla           | Tipo     | Descrição                                                                                                                                   |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`           | `string` | O recurso [`ref do git`](/rest/reference/git#get-a-reference).                                                                              |
| `ref_type`      | `string` | O tipo de objeto de ref do Git criado no repositório. Pode ser `branch` ou `tag`.                                                           |
| `master_branch` | `string` | The name of the repository's default branch (usually {% ifversion fpt or ghes > 3.1 or ghae or ghec %}`main`{% else %}`master`{% endif %}). |
| `descrição`     | `string` | Descrição atual do repositório.                                                                                                             |
