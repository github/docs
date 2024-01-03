---
Learn  Microsoft Compliance 
Data classification & sensitivity label taxonomy
Article
03/02/2023
2 contributors
In this article
What is data classification?
What is a data classification framework?
Sensitive data presents significant risk to a company if it is stolen, inadvertently shared, or exposed through a breach. Risk factors include reputational damage, financial impact, and loss of competitive advantage. Protecting the data and information your business manages is a top priority for your organization, but you may find it difficult to know if your efforts are truly effective, given the amount of content held by your enterprise.

In addition to volume, your content may range in importance from highly sensitive and impactful to trivial and transient. It can also be under the purview of various regulatory compliance requirements. Knowing what to prioritize and where to apply controls can be a challenge. Read on to learn about data classification, an important tool for protecting your content from theft, sabotage, or inadvertent destruction, and how Microsoft 365 can help you meet your information security goals.

What is data classification?
Data classification is a specialized term used in the fields of cybersecurity and information governance to describe the process of identifying, categorizing, and protecting content according to its sensitivity or impact level. In its most basic form, data classification is a means of protecting your data from unauthorized disclosure, alteration, or destruction based on how sensitive or impactful it is.

What is a data classification framework?
Often codified in a formal, enterprise-wide policy, a data classification framework (sometimes called a 'data classification policy') is typically comprised of 3-5 classification levels. These usually include three elements: a name, description, and real-world examples. Microsoft recommends no more than five top-level parent labels, each with five sub-labels (25 total) to keep the user interface (UI) manageable. Levels are typically arranged from least to most sensitive such as Public, Internal, Confidential, and Highly Confidential. Other level name variations you may encounter include Restricted, Unrestricted, and Consumer Protected. Microsoft recommends label names that are self-descriptive and that highlight their relative sensitivity clearly. For example, Confidential and Restricted may leave users guessing which label is appropriate, while Confidential and Highly Confidential are clearer on which is more sensitive.

The following table shows an example of a Highly Confidential data classification framework level:

Classification level	Description	Examples
Highly Confidential	Highly Confidential data is the most sensitive type of data stored or managed by the enterprise and may require legal notifications if breached or otherwise disclosed.

Restricted Data requires the highest level of control and security, and access should be limited to "need-to- know."	Sensitive Personally Identifiable Information (Sensitive PII)
Cardholder Data
Protected Health Information (PHI)
Bank Account Data
 Tip

Microsoft's corporate data classification framework originally used a category and label named 'Internal' during pilot phase but found that there were legitimate reasons for a document to be shared externally and shifted to using 'General'.

Another important component of a data classification framework is the controls associated with each level. Data classification levels by themselves are simply labels (or tags) that indicate the value or sensitivity of the content. To protect that content, data classification frameworks define the controls that should be in place for each of your data classification levels. These controls may include requirements related to:

Storage type and location
Encryption
Access control
Data destruction
Data loss prevention
Public disclosure
Logging and tracking access
Other control objectives, as needed
Your security controls will vary by data classification level, such that the protective measures defined in your framework increase commensurate with the sensitivity of your content. For example, your data storage control requirements will vary depending upon the media that is being used as well as upon the classification level applied to a given piece of content. The following table shows an example of data classification controls for a specific storage type:

Storage type	Confidential	Internal	Unrestricted
Removable Storage	Prohibited	Prohibited unless encrypted	No control required
Correctly applying the right level of data classification can be complex in real-life situations and may sometimes overwhelm end users. Once a policy or standard has been created that defines the required levels of data classification, it is important to guide end users on how to bring this framework to life in their daily work. This area is where data classification handling rules or guidelines come in.

Data classification handling guidelines will help end users with specific guidance on how to handle each level of data appropriately, for different storage media throughout their lifecycle. These guidelines help end users to correctly apply rules in practice, for instance when sharing documents, sending emails, or collaborating across different platforms and organizations.

Microsoft customers indicate that approximately 50% of an Information Protection project is business focused rather than technical, so end-user training and communication is critical to success.

Feedback
Was this page helpful?

Additional resources
Training

Module

Intro to Microsoft data classification and data protection - Training
Learners will be able to describe Microsoft Information Protection and Azure Information Protection as well as how to use sensitivity labels to classify and protect data. Learners should also be able to describe technologies such as unified labeling scanners, Defender for Cloud Apps, service encryption and Office 365 Message Encryption.

Certification

Microsoft Certified: Information Protection and Compliance Administrator Associate - Certifications
As a Microsoft information protection and compliance administrator, you plan and implement risk and compliance controls in the Microsoft Purview compliance portal

Documentation

How to use the Microsoft data classification dashboard
The data Microsoft Purview compliance classification dashboard provides visibility into how much sensitive data has been found and classified in your organization.

Automatically apply a sensitivity label in Microsoft 365
When you create a sensitivity label, you can automatically assign a label to files and emails, or you can prompt users to select the label that you recommend.

Learn about sensitivity labels
Learn how sensitivity labels from Microsoft Purview Information Protection can protect your organization's sensitive content, wherever it's stored.

Show 5 more
Pes using the verified domain{% endif %}. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}" and "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}."

### Verifying a domain that is already taken

If you are verifying a domain you own, which is currently in use by another user or organization, to make it available for your {% data variables.product.prodname_pages %} website; note that the process to release the domain from its current location will take 7 days to complete. If you are attempting to verify an already verified domain (verified by another user or organization), the release process will not be successful.

## Verifying a domain for your user site

{% data reusables.user-settings.access_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Wait for your DNS configuration to change, this may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `USERNAME` with your username and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
   ```

{% data reusables.pages.settings-verify-domain-confirm %}

## Verifying a domain for your organization site

Organization owners can verify custom domains for their organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Wait for your DNS configuration to change. This may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `ORGANIZATION` with the name of your organization and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
   ```

{% data reusables.pages.settings-verify-domain-confirm %}
