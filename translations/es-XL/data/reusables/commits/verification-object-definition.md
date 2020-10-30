##### Objeto de verificación de firma

La respuesta incluirá un objeto de `verification` que describe el resultado de verificar la firma de la confirmación. Los siguientes campos se incluyen en el objeto `verification`:

| Nombre       | Tipo        | Descripción                                                                                                   |
| ------------ | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `verificado` | `boolean`   | Indica si GitHub considera que la firma en esta confirmación debe verificarse.                                |
| `razón`      | `secuencia` | La razón para el valor `verified`. Los valores posibles y sus significados se enumeran en la siguiente tabla. |
| `frima`      | `secuencia` | La firma que se extrajo de la confirmación.                                                                   |
| `payload`    | `secuencia` | El valor que se firmó.                                                                                        |

Estos son los valores posibles para `reason` en el objeto `verification`:

| Valor                    | Descripción                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expired_key`            | La clave que hizo la firma caducó.                                                                                                                                       |
| `not_signing_key`        | El marcador "firmante" no está entre los marcadores de uso en la llave GPG que hizo la firma.                                                                            |
| `gpgverify_error`        | Ocurrió un error al comunicarse con el servicio de verificación de la firma.                                                                                             |
| `gpgverify_unavailable`  | El servicio de verificación de la firma no está disponible actualmente.                                                                                                  |
| `unsigned`               | El objeto no incluye una firma.                                                                                                                                          |
| `unknown_signature_type` | Se encontró una firma en el comentario, la cual no es de tipo PGP.                                                                                                       |
| `no_user`                | No se asoció a un usuario con la dirección de correo electrónico del `committer` en la confirmación.                                                                     |
| `unverified_email`       | La dirección de correo electrónico del `committer` en la confirmación se asoció con un usuario, pero la dirección de correo electrónico no está verificada en su cuenta. |
| `bad_email`              | La dirección de correo electrónico del `committer` en la confirmación no se incluye en las identidades de la llave PGP que creó la firma.                                |
| `unknown_key`            | La llave que hizo la firma no se ha registrado con ninguna cuenta de usuario.                                                                                            |
| `malformed_signature`    | Hubo un error al analizar la firma.                                                                                                                                      |
| `no válida`              | La firma no se pudo verificar criptográficamente utilizando la llave cuya key-id se encontró en la firma.                                                                |
| `valid`                  | Ninguno de los errores anteriores aplica, así que la firma se considera verificada.                                                                                      |
