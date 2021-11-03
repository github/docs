---
title: Streaming the audit logs for organizations in your enterprise account
intro: 'Enterprise owners can stream audit and Git events data from {% data variables.product.prodname_dotcom %} to an external data management system.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream organization audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
---

{% note %}

**Note:** Audit log streaming is currently in beta for {% data variables.product.prodname_ghe_cloud %} and subject to change.

{% endnote %}

## About exporting audit data

You can extract audit log and Git events data from {% data variables.product.prodname_dotcom %} in multiple ways:

* Go to the Audit log page in {% data variables.product.prodname_dotcom %} and click **Export**. <br/> For more information, see "[Viewing the audit logs for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account)" and "[Exporting the audit log](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)."
* Use the API to poll for new audit log events. <br/> For more information, see "[Using the audit log API](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api)."
* Set up {% data variables.product.product_name %} to stream audit data as events are logged.

## About audit log streaming

To help protect your intellectual property and maintain compliance for your organization, you can use streaming to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audited-data-list %}

The benefits of streaming audit data include:

* **Data exploration**. You can examine streamed events using your preferred tool for querying large quantities of data. The stream contains both audit events and Git events across the entire enterprise account.
* **Data continuity**. You can pause the stream for up to seven days without losing any audit data.
* **Data retention**. You can keep your exported audit logs and Git data as long as you need to.

Enterprise owners can set up, pause, or delete a stream at any time. The stream exports the audit data for all of the organizations in your enterprise.

## Setting up audit log streaming

{% data variables.product.prodname_dotcom %} supports streaming of audit data to Splunk, Azure Event Hubs, and Amazon S3.

You set up the audit log stream from the Log streaming tab of the Audit log page in your enterprise settings.

### Navigating to the Log streaming tab

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Click the **Log streaming** tab.

From the Log streaming tab you can set up an audit log stream by following the steps in one of the sections below.

### Setting up streaming to Splunk

To stream audit logs to Splunk's HTTP Event Collector (HEC) endpoint you must make sure that the endpoint is configured to accept HTTPS connections. For more information, see the Splunk documentation article "[Set up and use HTTP Event Collector in Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector)."

1. Go to the Log streaming tab in your enterprise settings. For more information, see "[Navigating to the Log streaming tab](#navigating-to-the-log-streaming-tab)."
1. Click **Configure stream** and select **Splunk**. ![Choose Splunk from the drop-down menu](/assets/images/help/enterprises/audit-stream-choice-splunk.png)
1. On the configuration page, enter:
   * The domain on which the application you want to stream to is hosted.

     If you are using Splunk Cloud, `Domain` should be `http-inputs-<host>`, where `host` is the domain you use in Splunk Cloud. 例如：`http-inputs-mycompany.splunkcloud.com`。

   * The port on which the application accepts data.<br>

     If you are using Splunk Cloud, `Port` should be `443` if you haven't changed the port configuration. If you are using the free trial version of Splunk Cloud, `Port` should be `8088`.

   * A token that {% data variables.product.prodname_dotcom %} can use to authenticate to the third-party application. ![Enter stream settings](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Leave the **Enable SSL verification** check box selected.

    Audit logs are always streamed as encrypted data, however, with this option selected, {% data variables.product.prodname_dotcom %} verifies the SSL certificate of your Splunk instance when delivering events. SSL verification helps ensure that events are delivered to your URL endpoint securely. You can clear the selection of this option, but we recommend you leave SSL verification enabled.
1. Click **Check endpoint** to verify that {% data variables.product.prodname_dotcom %} can connect to the Splunk endpoint. ![Check the endpoint](/assets/images/help/enterprises/audit-stream-check-splunk.png)
1. After you have successfully verified the endpoint, click **Save**.

### Setting up streaming to Azure Event Hubs

Before setting up a stream in {% data variables.product.prodname_dotcom %}, you must first have an event hub namespace in Microsoft Azure. Next, you must create an event hub instance within the namespace. You'll need the details of this event hub instance when you set up the stream. For details, see the Microsoft documentation, "[Quickstart: Create an event hub using Azure portal](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)."

You need two pieces of information about your event hub: its instance name and the connection string.

**On Microsoft Azure portal**:
1. In the left menu select **Entities**. Then select **Event Hubs**. The names of your event hubs are listed. ![A list of event hubs](/assets/images/help/enterprises/azure-event-hubs-list.png)
1. Make a note of the name of the event hub you want to stream to.
1. Click the required event hub. Then, in the left menu, select **Shared Access Policies**.
1. Select a shared access policy in the list of policies, or create a new policy. ![A list of shared access policies](/assets/images/help/enterprises/azure-shared-access-policies.png)
1. Click the button to the right of the **Connection string-primary key** field to copy the connection string. ![The event hub connection string](/assets/images/help/enterprises/azure-connection-string.png)

**On {% data variables.product.prodname_dotcom %}**:
1. Go to the Log streaming tab in your enterprise settings. For more information, see "[Navigating to the Log streaming tab](#navigating-to-the-log-streaming-tab)."
1. Click **Configure stream** and select **Azure Event Hubs**. ![Choose Splunk from the drop-down menu](/assets/images/help/enterprises/audit-stream-choice-azure.png)
1. On the configuration page, enter:
   * The name of the Azure Event Hubs instance.
   * The connection string. ![Enter stream settings](/assets/images/help/enterprises/audit-stream-add-azure.png)
1. Click **Check endpoint** to verify that {% data variables.product.prodname_dotcom %} can connect to the Azure endpoint. ![Check the endpoint](/assets/images/help/enterprises/audit-stream-check.png)
1. After you have successfully verified the endpoint, click **Save**.

### Setting up streaming to Amazon S3

To stream audit logs to Amazon's S3 endpoint, you must have a bucket and access keys. For more information, see the AWS documentation "[Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html)." Make sure to block public access to the bucket to protect your audit log information.

To set up audit log streaming from {% data variables.product.prodname_dotcom %} you will need:
* The name of your Amazon S3 bucket
* Your AWS access key ID
* Your AWS secret key

For information on creating or accessing your access key ID and secret key, see the AWS documentation "[Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)."

1. Go to the Log streaming tab in your enterprise settings. For more information, see "[Navigating to the Log streaming tab](#navigating-to-the-log-streaming-tab)."
1. Click **Configure stream** and select **Amazon S3**. ![Choose Amazon S3 from the drop-down menu](/assets/images/help/enterprises/audit-stream-choice-s3.png)
1. On the configuration page, enter:
   * The name of the bucket you want to stream to. For example, `auditlog-streaming-test`.
   * Your access key ID. For example, `ABCAIOSFODNN7EXAMPLE1`.
   * Your secret key. For example, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`. ![Enter stream settings](/assets/images/help/enterprises/audit-stream-add-s3.png)
1. Click **Check endpoint** to verify that {% data variables.product.prodname_dotcom %} can connect to the Amazon S3 endpoint. ![Check the endpoint](/assets/images/help/enterprises/audit-stream-check.png)
1. After you have successfully verified the endpoint, click **Save**.

## Pausing audit log streaming

Pausing the stream allows you to perform maintenance on the receiving application without losing audit data. Audit logs are stored for up to seven days on {% data variables.product.product_location %} and are then exported when you unpause the stream.

1. Display the "Log streaming" tab, as described above.
1. Click **Pause stream**. ![Pause the stream](/assets/images/help/enterprises/audit-stream-pause.png)
1. A confirmation message is displayed. Click **Pause stream** to confirm.

When the application is ready to receive audit logs again, click **Resume stream** to restart streaming audit logs.

## Deleting the audit log stream

1. Display the "Log streaming" tab, as described above.
1. Click **Delete stream**. ![Delete the stream](/assets/images/help/enterprises/audit-stream-delete.png)
2. A confirmation message is displayed. Click **Delete stream** to confirm.
