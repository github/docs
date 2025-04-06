1. Configure the external storage connection by entering the following commands, replacing the placeholder values with actual values for your connection.

   * Azure Blob Storage:

     ```shell copy
     ghe-config secrets.actions.storage.azure.connection-string "CONNECTION STRING"
     ```

   * Amazon S3:

     ```shell copy
     ghe-config secrets.actions.storage.s3.bucket-name "S3 BUCKET NAME"
     ghe-config secrets.actions.storage.s3.service-url "S3 SERVICE URL"
     ghe-config secrets.actions.storage.s3.access-key-id "S3 ACCESS KEY ID"
     ghe-config secrets.actions.storage.s3.access-secret "S3 ACCESS SECRET"
     ```

     Optionally, to force path-style addressing for S3, also enter the following command.

     ```shell copy
     ghe-config secrets.actions.storage.s3.force-path-style true
     ```

{%- ifversion actions-ghes-gcp-storage %}
   * Google Cloud Storage:

     ```shell copy
     ghe-config secrets.actions.storage.gcs.service-url "SERVICE URL"
     ghe-config secrets.actions.storage.gcs.bucket-name "BUCKET NAME"
     ghe-config secrets.actions.storage.gcs.access-key-id "HMAC ACCESS ID"
     ghe-config secrets.actions.storage.gcs.access-secret "HMAC SECRET"
     ```

{%- endif %}
