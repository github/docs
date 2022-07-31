{% data variables.product.prodname_actions %} requiere los siguientes permisos para la clave de acceso que accederá al bucket:

* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`
* `s3:ListBucket`
* `kms:GenerateDataKey` (si se habilitó el cifrado del servicio de administración de llaves (KMS))

