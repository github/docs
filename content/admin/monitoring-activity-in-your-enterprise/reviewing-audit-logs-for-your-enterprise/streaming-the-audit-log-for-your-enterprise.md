---
title: Streaming the audit log for your enterprise
intro: 'You can stream audit and Git events data from {% data variables.product.prodname_dotcom %} to an external data management system.'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
---

{% ifversion ghes %}
{% note %}

**Note:** Audit log streaming is currently in beta for {% data variables.product.product_name %} and is subject to change.

{% endnote %}
{% endif %}

## About audit log streaming

To help protect your intellectual property and maintain compliance for your organization, you can use streaming to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audited-data-list %}

The benefits of streaming audit data include:

* **Data exploration**. You can examine streamed events using your preferred tool for querying large quantities of data. The stream contains both audit events and Git events across the entire enterprise account.{% ifversion pause-audit-log-stream %}
* **Data continuity**. You can pause the stream for up to seven days without losing any audit data.{% endif %}
* **Data retention**. You can keep your exported audit logs and Git events data as long as you need to.

Enterprise owners can set up{% ifversion pause-audit-log-stream %}, pause,{% endif %} or delete a stream at any time. The stream exports the audit and Git events data for all of the organizations in your enterprise.

## Setting up audit log streaming

You set up the audit log stream on {% data variables.product.product_name %} by following the instructions for your provider.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Azure Blob Storage](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs){% ifversion streaming-datadog %}
- [Datadog](#setting-up-streaming-to-datadog){% endif %}
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Setting up streaming to Amazon S3

{% ifversion streaming-oidc-s3 %}
You can set up streaming to S3 with access keys or, to avoid storing long-lived secrets in {% data variables.product.product_name %}, with OpenID Connect (OIDC).

- [Setting up streaming to S3 with access keys](#setting-up-streaming-to-s3-with-access-keys)
- [Setting up streaming to S3 with OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
- [Disabling streaming to S3 with OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)

#### Setting up streaming to S3 with access keys
{% endif %}

To stream audit logs to Amazon's S3 endpoint, you must have a bucket and access keys. For more information, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the AWS documentation. Make sure to block public access to the bucket to protect your audit log information. 

To set up audit log streaming from {% data variables.product.prodname_dotcom %} you will need:
* The name of your Amazon S3 bucket
* Your AWS access key ID
* Your AWS secret key

For information on creating or accessing your access key ID and secret key, see [Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) in the AWS documentation.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
{% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. Under "Authentication", click **Access keys**.

   ![Screenshot of the authentication options for streaming to Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. Configure the stream settings.

   - Under "Bucket", type the name of the bucket you want to stream to. For example, `auditlog-streaming-test`.
   - Under "Access Key ID", type your access key ID. For example, `ABCAIOSFODNN7EXAMPLE1`.
   - Under "Secret Key", type your secret key. For example, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %}
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### Setting up streaming to S3 with OpenID Connect

{% note %}

**Note:** Streaming to Amazon S3 with OpenID Connect is currently in beta and subject to change.

{% endnote %}

1. In AWS, add the {% data variables.product.prodname_dotcom %} OIDC provider to IAM. For more information, see [Creating OpenID Connect (OIDC) identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) in the AWS documentation.

   - For the provider URL, use `https://oidc-configuration.audit-log.githubusercontent.com`.
   - For "Audience", use `sts.amazonaws.com`.
1. Create a bucket, and block public access to the bucket. For more information, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the AWS documentation.
1. Create a policy that allows {% data variables.product.company_short %} to write to the bucket. {% data variables.product.prodname_dotcom %} requires only the following permissions.

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
      ]
   }
   ```
   For more information, see [Creating IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) in the AWS documentation.
1. Configure the role and trust policy for the {% data variables.product.prodname_dotcom %} IdP. For more information, see [Creating a role for web identity or OpenID Connect Federation (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html) in the AWS documentation.
  
   - Add the permissions policy you created above to allow writes to the bucket.
   - Edit the trust relationship to add the `sub` field to the validation conditions, replacing `ENTERPRISE` with the name of your enterprise.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - Make note of the Amazon Resource Name (ARN) of the created role.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
{% data reusables.audit_log.streaming-choose-s3 %}
1. Under "Authentication", click **OpenID Connect**.

   ![Screenshot of the authentication options for streaming to Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. Configure the stream settings.

   - Under "Bucket", type the name of the bucket you want to stream to. For example, `auditlog-streaming-test`.
   - Under "ARN Role" type the ARN role you noted earlier. For example, `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %}
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### Disabling streaming to S3 with OpenID Connect

If you want to disable streaming to S3 with OIDC for any reason, such as the discovery of a security vulnerability in OIDC, delete the {% data variables.product.prodname_dotcom %} OIDC provider you created in AWS when you set up streaming. For more information, see [Creating OpenID Connect (OIDC) identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) in the AWS documentation.

Then, set up streaming with access keys until the vulnerability is resolved. For more information, see "[Setting up streaming to S3 with access keys](#setting-up-streaming-to-s3-with-access-keys)."

{% endif %}

### Setting up streaming to Azure Blob Storage

Before setting up a stream in {% data variables.product.prodname_dotcom %}, you must first have created a storage account and a container in Microsoft Azure. For details, see the Microsoft documentation, "[Introduction to Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)." 

To configure the stream in {% data variables.product.prodname_dotcom %} you need the URL of a SAS token.

**On Microsoft Azure portal**:
1. On the Home page, click **Storage Accounts**.
2. Click the name of the storage account you want to use, then click **Containers**.
   
   ![The Containers link in Azure](/assets/images/azure/azure-storage-containers.png)

1. Click the name of the container you want to use.
1. Click **Shared access tokens**. 
   
   ![The shared access token link in Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. In the **Permissions** drop-down menu, change the permissions to only allow `Create` and `Write`.
   
   ![The permissions drop-down menu](/assets/images/azure/azure-storage-permissions.png)

1. Set an expiry date that complies with your secret rotation policy.
1. Click **Generate SAS token and URL**.
1. Copy the value of the **Blob SAS URL** field that's displayed. You will use this URL in {% data variables.product.prodname_dotcom %}.

**On {% data variables.product.prodname_dotcom %}**:
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Click **Configure stream** and select **Azure Blob Storage**.
   
   ![Choose Azure Blob Storage from the drop-down menu](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. On the configuration page, enter the blob SAS URL that you copied in Azure. The **Container** field is auto-filled based on the URL.

   ![Enter the stream settings](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. Click **Check endpoint** to verify that {% data variables.product.prodname_dotcom %} can connect and write to the Azure Blob Storage endpoint.
   
   ![Check the endpoint](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Setting up streaming to Azure Event Hubs

Before setting up a stream in {% data variables.product.prodname_dotcom %}, you must first have an event hub namespace in Microsoft Azure. Next, you must create an event hub instance within the namespace. You'll need the details of this event hub instance when you set up the stream. For details, see the Microsoft documentation, "[Quickstart: Create an event hub using Azure portal](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)." 

You need two pieces of information about your event hub: its instance name and the connection string. 

**On Microsoft Azure portal**:
1. Search for "Event Hubs".

   ![The Azure portal search box](/assets/images/azure/azure-resources-search.png )

1. Select **Event Hubs**. The names of your event hubs are listed. 
   
   ![A list of event hubs](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Make a note of the name of the event hub you want to stream to.
1. Click the required event hub. Then, in the left menu, select **Shared Access Policies**.
1. Select a shared access policy in the list of policies, or create a new policy.
   
   ![A list of shared access policies](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Click the button to the right of the **Connection string-primary key** field to copy the connection string.
   
   ![The event hub connection string](/assets/images/help/enterprises/azure-connection-string.png)

**On {% data variables.product.prodname_dotcom %}**:
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Click **Configure stream** and select **Azure Event Hubs**.
   
   ![Choose Azure Events Hub from the drop-down menu](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. On the configuration page, enter:
   * The name of the Azure Event Hubs instance.
   * The connection string.
  
   ![Enter the stream settings](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. Click **Check endpoint** to verify that {% data variables.product.prodname_dotcom %} can connect and write to the Azure Events Hub endpoint.
   
   ![Check the endpoint](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-datadog %}
### Setting up streaming to Datadog

To set up streaming to Datadog, you must create a client token or an  API key in Datadog, then configure audit log streaming in {% data variables.product.product_name %} using the token for authentication. You do not need to create a bucket or other storage container in Datadog.

After you set up streaming to Datadog, you can see your audit log data by filtering by "github.audit.streaming." For more information, see [Log Management](https://docs.datadoghq.com/logs/).

1. If you don't already have a Datadog account, create one.
1. In Datadog, generate a client token or an API key, then click **Copy key**. For more information, see [API and Application Keys](https://docs.datadoghq.com/account_management/api-app-keys/) in Datadog Docs.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Select the **Configure stream** dropdown menu and click **Datadog**.
   
   ![Screenshot of the "Configure stream" dropdown menu with "Datadog" highlighted](/assets/images/help/enterprises/audit-stream-choice-datadog.png)
1. Under "Token", paste the token  you copied earlier.

   ![Screenshot of the "Token" field](/assets/images/help/enterprises/audit-stream-datadog-token.png)
1. Select the "Site" dropdown menu and click your Datadog site. To determine your Datadog site, compare your Datadog URL to the table in [Datadog sites](https://docs.datadoghq.com/getting_started/site/) in Datadog Docs.

   ![Screenshot of the "Site" dropdown menu](/assets/images/help/enterprises/audit-stream-datadog-site.png)
1. To verify that {% data variables.product.prodname_dotcom %} can connect and write to the Datadog endpoint, click **Check endpoint**.
   
   ![Check the endpoint](/assets/images/help/enterprises/audit-stream-check.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}
1. After a few minutes, confirm that audit log data is appearing on the **Logs** tab in Datadog. If audit log data is not appearing, confirm that your token and site are correct in {% data variables.product.prodname_dotcom %}.
{% endif %}

### Setting up streaming to Google Cloud Storage

To set up streaming to Google Cloud Storage, you must create a service account in Google Cloud with the appropriate credentials and permissions, then configure audit log streaming in {% data variables.product.product_name %} using the service account's credentials for authentication.

1. Create a service account for Google Cloud. You do not need to set access controls or IAM roles for the service account. For more information, see [Creating and managing service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) in the Google Cloud documentation.
1. Create a JSON key for the service account, and store the key securely. For more information, see [Creating and managing service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) in the Google Cloud documentation.
1. If you haven't created a bucket yet, create the bucket. For more information, see [Creating storage buckets](https://cloud.google.com/storage/docs/creating-buckets) in the Google Cloud documentation.
1. Give the service account the Storage Object Creator role for the bucket. For more information, see [Using Cloud IAM permissions](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) in the Google Cloud documentation.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Select the Configure stream drop-down menu and click **Google Cloud Storage**.

   ![Screenshot of the "Configure stream" drop-down menu](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. Under "Bucket", type the name of your Google Cloud Storage bucket.

   ![Screenshot of the "Bucket" text field](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. Under "JSON Credentials", paste the entire contents of the file for your service account's JSON key.

   ![Screenshot of the "JSON Credentials" text field](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. To verify that {% data variables.product.prodname_dotcom %} can connect and write to the Google Cloud Storage bucket, click **Check endpoint**. 

   ![Screenshot of the "Check endpoint" button](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Setting up streaming to Splunk

To stream audit logs to Splunk's HTTP Event Collector (HEC) endpoint you must make sure that the endpoint is configured to accept HTTPS connections. For more information, see [Set up and use HTTP Event Collector in Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) in the Splunk documentation.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Click **Configure stream** and select **Splunk**.
   
   ![Choose Splunk from the drop-down menu](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. On the configuration page, enter:
   * The domain on which the application you want to stream to is hosted.
  
     If you are using Splunk Cloud, `Domain` should be `http-inputs-<host>`, where `host` is the domain you use in Splunk Cloud. For example: `http-inputs-mycompany.splunkcloud.com`. 

   * The port on which the application accepts data.<br>

     If you are using Splunk Cloud, `Port` should be `443` if you haven't changed the port configuration. If you are using the free trial version of Splunk Cloud, `Port` should be `8088`.

   * A token that {% data variables.product.prodname_dotcom %} can use to authenticate to the third-party application.
  
   ![Enter the stream settings](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Leave the **Enable SSL verification** check box selected.

    Audit logs are always streamed as encrypted data, however, with this option selected, {% data variables.product.prodname_dotcom %} verifies the SSL certificate of your Splunk instance when delivering events. SSL verification helps ensure that events are delivered to your URL endpoint securely. You can clear the selection of this option, but we recommend you leave SSL verification enabled.
1. Click **Check endpoint** to verify that {% data variables.product.prodname_dotcom %} can connect and write to the Splunk endpoint.
   ![Check the endpoint](/assets/images/help/enterprises/audit-stream-check-splunk.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## Pausing audit log streaming

Pausing the stream allows you to perform maintenance on the receiving application without losing audit data. Audit logs are stored for up to seven days on {% data variables.product.product_location %} and are then exported when you unpause the stream.

{% ifversion streaming-datadog %}
Datadog only accepts logs from up to 18 hours in the past. If you pause a stream to a Datadog endpoint for more than 18 hours, you risk losing logs that Datadog won't accept after you resume streaming.
{% endif %}

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Click **Pause stream**.
   
   ![Pause the stream](/assets/images/help/enterprises/audit-stream-pause.png)

1. A confirmation message is displayed. Click **Pause stream** to confirm.

When the application is ready to receive audit logs again, click **Resume stream** to restart streaming audit logs.
{% endif %}

## Deleting the audit log stream

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Click **Delete stream**.
   
   ![Delete the stream](/assets/images/help/enterprises/audit-stream-delete.png)

1. A confirmation message is displayed. Click **Delete stream** to confirm.
