---
title: GitHub Enterprise Cloudの補遺
redirect_from:
  - /github-business-cloud-addendum/
  - /articles/github-enterprise-cloud-addendum
versions:
  free-pro-team: '*'
---

These are the additional terms for GitHub Enterprise Cloud ("Enterprise Cloud Terms"). Any capitalized terms not defined in these Enterprise Cloud Terms will be defined in the [Terms of Service](/articles/github-terms-of-service/) or the [Corporate Terms of Service](/articles/github-corporate-terms-of-service/). By agreeing to these Enterprise Cloud Terms, you also agree to the Terms of Service, as determined by the type of account you have.

Enterprise Cloud includes an Organization account, SAML single sign-on, access provisioning, and 24/5 support with an 8-hour response time. ここに挙げた機能やサービスは網羅的なものではなく、随時アップデートされる可能性があります。 For more information, see [GitHub's pricing page](https://github.com/pricing).

### 定義:
- Active User: means a user trying to access our Service at the time of an Outage.
- Customer: person or entity who has purchased Enterprise Cloud from GitHub.
- Eligible User: means an individual who is designated as a member of the Customer's Enterprise Cloud organization by having their individual GitHub account associated with the Customer's Enterprise Cloud account.
- Essential Services: means the services essential to GitHub's core version control functionality, including features and services such as creating, forking, and cloning repositories; creating, committing, and merging branches; creating, reviewing, and merging pull requests; and, web, API, and Git client interfaces to the core Git workflows. The following are examples of peripheral features and services not included: webhooks, Gists, Pages, or email notifications.
- Outage: means the interruption of an Essential Service that affects more than 50% of Active Users.
- Service Credit: a dollar credit, calculated as set forth below, that we may credit back to an eligible account.

### Enterprise Cloud Uptime SLA

Program Benefits:
- We guarantee that the service will have a quarterly Uptime percentage of 99.95%. つまり、GitHubの「可欠なサービス」は、50%を超える「アクティブユーザ」に影響するような障害で中断する確率が、四半期当たり0.5%を超えないということです。
- If we don't meet our 99.95% quarterly Uptime guarantee, we may issue Service Credits to Customers.

How do we calculate Uptime?
- Our Uptime calculation is based on the percentage of successful requests we serve through our web, API, and Git client interfaces.

What's excluded from our Uptime guarantee? Outages resulting from:
- Customer's acts, omissions, or misuse of the Services, including violations of the Terms of Service.
- Failures of your internet connectivity
- Factors outside our reasonable control, including Internet access related problems, force majeure events, and third party services or technology
- Your equipment, services, or other technology

What are Uptime Service Credits, how can I find out if I have them, and how can I redeem them?
- If GitHub's quarterly Uptime percentage drops below our 99.95% Uptime guarantee, then Customer is entitled to receive 25 times the amount that was paid for the Outage time that exceeds the quarterly Uptime guarantee ("Uptime Service Credit"), which will be applied against the Customer's next bill. Uptime Service Credits are calculated at the end of each quarter, and may only be granted upon request.
- To find out about GitHub's Uptime percentage, you can request an Uptime report at the end of each quarter.
- In order to be granted Uptime Service Credits, either an account Owner or Billing Manager must send in a written request, on Customer's behalf, within 30 days of the end of each quarter. Uptime Service Credits may not be saved. After being granted an Uptime Service Credit, it will be automatically applied to Customer's next bill. Written requests should be sent to {% data variables.contact.contact_support %}.

**Disclaimer and Limitation of Liability:** GitHub's [Status Page](https://www.githubstatus.com/) is not connected to this Uptime SLA and is not an accurate representation of GitHub's Uptime for the purposes of calculating Uptime Service Credits. Service Credits are limited to 30 days of paid service, per quarter. Service Credits are Customer's only remedy for any failure by GitHub to meet any Uptime obligations as identified in this Addendum.
