# GitHub Connect

Welcome to the enlightening world of **GitHub Connect**, a pivotal feature that extends the capabilities of **GitHub** by granting you access to an array of additional functionalities and workflows that harness the power of **GitHub.com**.

**GitHub Connect** is a remarkable bridge that enables **GitHub Enterprise Server (GHES)** and **GitHub Enterprise Cloud (GHE Cloud)** users to leverage the potent resources offered by **GitHub.com** in a carefully controlled manner. Once you've unlocked the potential of **GitHub Connect**, you'll be able to embrace advanced features and workflows. This includes harnessing **Dependabot Alerts** to safeguard your repositories against security vulnerabilities, effectively tracked within the **GitHub Advisory Database**.

Embrace **GitHub Connect** with confidence, knowing that it never exposes your enterprise's private data to the open internet. Instead, it securely transmits only the essential data required for the specific features you choose to enable. Unless you opt for the license synchronization feature, personal data remains untouched by **GitHub Connect**. For detailed insights into the data transmission practices of **GitHub Connect**, please refer to "[Data Transmission for GitHub Connect](#data-transmission-for-github-connect)."

It's important to note that enabling **GitHub Connect** does not grant **GitHub.com** users the authority to make changes to your **GitHub Enterprise** environment.

## Unlocking the Power of GitHub Connect

To set the wheels in motion with **GitHub Connect**, you'll need to establish a robust connection between your **GitHub Enterprise** environment (whether on GHES or GHE Cloud) and your enterprise account on **GitHub.com**. Our documentation on "[Managing GitHub Connect](/admin/configuration/configuring-github-connect/managing-github-connect)" offers comprehensive guidance on this seamless process.

Once you've successfully integrated **GitHub Connect**, you'll gain access to an impressive array of features. Depending on your specific environment, you'll have the opportunity to enable features such as **Automatic User License Synchronization** and **Dependabot Alerts**, which significantly enhance your GitHub experience. Discover the full spectrum of features in our guide "[GitHub Connect Features](#github-connect-features)."

## GitHub Connect Features

Once you've forged the connection between your environment and **GitHub Enterprise Cloud**, you can choose from a selection of **GitHub Connect** features tailored to meet your enterprise's unique needs. Here's a glimpse of what's in store:

| Feature | Description | Learn More |
| ----------- | ----------- | ----------- |
Automatic User License Sync | Effectively manage license usage across your GitHub Enterprise deployments by automatically syncing user licenses from your environment to GitHub Enterprise Cloud. | "[Enabling Automatic User License Sync](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)" |
Dependabot | Empower your users to identify and resolve vulnerabilities in code dependencies. | "[Enabling Dependabot](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)" |
GitHub.com Actions | Access the full spectrum of actions available on **GitHub.com**, seamlessly integrating them into your workflow. | "[Enabling Automatic Access to GitHub.com Actions Using GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)" |
Server Statistics (For GHES) | Dive into detailed analytics by analyzing aggregate data from your GitHub Enterprise Server, all while contributing to the improvement of GitHub products. | "[Enabling Server Statistics for Your Enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)" |
Unified Search | Extend your search capabilities by including **GitHub.com** repositories in your search results when searching from your GitHub Enterprise environment. | "[Enabling Unified Search for Your Enterprise](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" |
Unified Contributions | Seamlessly incorporate anonymized contribution counts from your environment into your GitHub.com contribution graphs. | "[Enabling Unified Contributions for Your Enterprise](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)" |

## Data Transmission for GitHub Connect

As **GitHub Connect** springs into action, a record on **GitHub Enterprise Cloud (GHE Cloud)** meticulously documents the connection. The moment you enable specific **GitHub Connect** features, additional data transmission takes place.

**Note**: Rest assured that **GitHub Connect** never transmits repositories, issues, or pull requests from your GitHub Enterprise environment to **GitHub.com**.

### Data Transmitted When GitHub Connect is Enabled

Upon enabling **GitHub Connect** or its individual features, the following data points are diligently transmitted and stored within **GitHub Enterprise Cloud**:

- The public key portion of your **GitHub Enterprise Server (GHES)** license
- A hash of your GHES license
- The customer name associated with your GHES license
- The version of your enterprise environment
- The hostname of your enterprise environment
- The enterprise account on **GitHub Enterprise Cloud** connected to your environment
- The authentication token utilized by your environment to request data from **GitHub Enterprise Cloud**
- Details regarding the status of Transport Layer Security (TLS) in your environment (if enabled)
- The list of **GitHub Connect** features activated in your environment, complete with the date and time of enablement (for GHES)
- The dormancy threshold for your enterprise
- The number of dormant users within your enterprise
- An accurate count of license-consuming seats (excluding suspended users)

The above connection data is securely synchronized between your GitHub Enterprise environment and **GitHub Enterprise Cloud** on a weekly basis, commencing from the day and approximate time of **GitHub Connect** activation.

### Data Transmitted by Individual Features of GitHub Connect

Each individual feature of **GitHub Connect** has its own unique data transmission requirements. Here's a breakdown of the data flow:

| Feature | Data | Data Flow | Data Usage |
| ------- | ---- | --------- | ------ |
Automatic User License Sync | User IDs and email addresses for each user of your GitHub Enterprise environment | From your environment to **GitHub Enterprise Cloud** | **GitHub Enterprise Cloud** |
Dependabot Alerts | Vulnerability alerts | From **GitHub.com** to your GitHub Enterprise environment | Your GitHub Enterprise environment |
GitHub.com Actions | Action names and the corresponding YAML files from the GitHub Marketplace | Bidirectional: From **GitHub.com** to your GitHub Enterprise environment and vice versa | Your GitHub Enterprise environment |
Server Statistics (For GHES) | Aggregated metrics related to your GitHub Enterprise Server usage | From your environment to **GitHub Enterprise Cloud** | **GitHub Enterprise Cloud** |
Unified Search | Search terms and results | Bidirectional: From **GitHub.com** to your GitHub Enterprise environment and vice versa | Your GitHub Enterprise environment |
Unified Contributions | Anonymized contribution counts from your GitHub Enterprise environment | From your GitHub Enterprise environment to **GitHub.com** | **GitHub.com** |

## Further Reading

For more advanced insights into the world of **GitHub Connect**, you can delve into the [GitHub GraphQL API documentation](/graphql/guides/managing-enterprise-accounts).
