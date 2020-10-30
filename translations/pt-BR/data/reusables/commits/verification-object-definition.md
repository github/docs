##### Verificação de assinatura para objetos

A resposta incluirá um objeto de `verification` que descreve o resultado de verificar a assinatura do commit. Os seguintes campos estão incluídos no objeto `verification`:

| Nome         | Tipo      | Descrição                                                                                            |
| ------------ | --------- | ---------------------------------------------------------------------------------------------------- |
| `verificado` | `boolean` | Indica se o GitHub considera verificada a assinatura neste commit.                                   |
| `motivo`     | `string`  | O motivo do valor `verified`. Possíveis valores e seus significados são enumerados na tabela abaixo. |
| `assinatura` | `string`  | A assinatura que foi extraída do commit.                                                             |
| `carga`      | `string`  | O valor que foi assinado.                                                                            |

Estes são os possíveis valores para `reason` no objeto `verification`:

| Valor                    | Descrição                                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `expired_key`            | A chave que fez a assinatura está expirada.                                                                                    |
| `not_signing_key`        | A bandeira "assinar" não está entre as bandeiras de uso na chave GPG que fez a assinatura.                                     |
| `gpgverify_error`        | Ocorreu um erro ao se comunicar com o serviço de verificação de assinaturas.                                                   |
| `gpgverify_unavailable`  | O serviço de verificação de assinatura está indisponível no momento.                                                           |
| `não assinado`           | O objeto não inclui uma assinatura.                                                                                            |
| `unknown_signature_type` | Uma assinatura não PGP foi encontrada no commit.                                                                               |
| `no_user`                | Nenhum usuário foi associado ao endereço de e-mail `committer` no commit.                                                      |
| `unverified_email`       | O endereço de e-mail `committer` no commit foi associado a um usuário, mas o endereço de e-mail não é verificado na sua conta. |
| `bad_email`              | O endereço de e-mail `committer` do commit não está incluído nas identidades da chave PGP que fez a assinatura.                |
| `unknown_key`            | A chave que fez a assinatura não foi registrada com a conta de nenhum usuário.                                                 |
| `malformed_signature`    | Ocorreu um erro ao analisar a assinatura.                                                                                      |
| `invalid`                | A assinatura não pôde ser verificada criptograficamente usando a chave cuja key-id foi encontrada na assinatura.               |
| `valid`                  | Nenhum dos erros acima aplicados, por isso a assinatura é considerada verificada.                                              |
