---
title: Enabling GitHub Packages with AWS
intro: 'Set up {% data variables.product.prodname_registry %} with AWS as your external storage.'
versions:
  enterprise-server: '>=2.22'
topics:
  - Enterprise
---

{% warning %}

**Warnings:**
- It is critical that you configure any restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible to the public internet. For more information, see "[Setting bucket and object access permissions](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)" in the AWS Documentation.
- We recommend using a dedicated bucket for {% data variables.product.prodname_registry %}, separate from the bucket you use for {% data variables.product.prodname_actions %} storage.
- Make sure to configure the bucket you'll want to use in the future. We do not recommend changing your storage after you start using {% data variables.product.prodname_registry %}.

{% endwarning %}

### Prerequisites

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.product.product_location_enterprise %}, you need to prepare your AWS storage bucket. To prepare your AWS storage bucket, we recommend consulting the official AWS docs at [AWS Documentation](https://docs.aws.amazon.com/index.html).

Ensure your AWS access key ID and secret have the following permissions:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### Enabling {% data variables.product.prodname_registry %} with AWS external storage

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. Under "AWS Service URL", type the S3 endpoint URL for your bucket's region.
  ![AWS Service URL field](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Under "AWS S3 Bucket", type the name of the S3 bucket you want to use to store package artifacts.
  ![AWS S3 Bucket field](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Under "AWS S3 Access Key", type your access key for S3.
  ![AWS S3 Access Key field](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Under "AWS S3 Secret Key", type your secret key for S3.
  ![AWS S3 Secret Key field](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Under "AWS S3 Region", type your region for S3.
  ![AWS S3 Region field](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Under "Packages Storage", select **Amazon S3** and enter your storage bucket's details:
    - **AWS Service URL:** The service URL for your bucket. For example, if your S3 bucket was created in the `us-west-2 region`, this value should be `https://s3.us-west-2.amazonaws.com`.

      For more information, see "[AWS service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html)" in the AWS documentation.

    - **AWS S3 Bucket:** The name of your S3 bucket dedicated to {% data variables.product.prodname_registry %}.
    - **AWS S3 Access Key** and **AWS S3 Secret Key**: The AWS access key ID and secret key to access your bucket.

      For more information on managing AWS access keys, see the "[AWS Identity and Access Management Documentation](https://docs.aws.amazon.com/iam/index.html)."

    ![Entry boxes for your S3 AWS bucket's details](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### Next steps

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
