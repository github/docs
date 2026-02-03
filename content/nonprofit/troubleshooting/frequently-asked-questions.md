---
title: Frequently asked questions
intro: 'Troubleshooting common errors with the GitHub for Nonprofits process.'
versions:
  fpt: '*'
shortTitle: Frequently asked questions
---

## How do I convert my user account to an organization account?

You will need an organization account to sign up for a GitHub for Nonprofits discount. Below is a guide to convert your account to an organization.

Before you begin converting your account to an organization, set up a new personal GitHub account to manage the organization after conversion and ensure the personal account you're converting has left any organizations it has joined.

> [!WARNING]
> Please read these important considerations before converting your account.
>
> * You will no longer be able to sign into the converted personal account.
> * Certain personal data (e.g., SSH keys, OAuth tokens) will not transfer to the organization.
> * An organization cannot be converted back to a personal user account.
> * Existing collaborators will retain access to repositories in the new organization.
> * After conversion, GitHub Actions is not automatically enabled and will need to be re-enabled by creating a new workflow file in the `.github/workflows` directory of your repository.

1. In the upper-right corner of any GitHub page, click your profile picture, then click **Settings**.
1. In the "Access" section of the sidebar, click **Organizations**.
1. In the "Transform account" section, click **Turn USERNAME into an organization**.
1. Read the warning provided, then click **Turn USERNAME into an organization** to confirm.
1. Under "Choose an organization owner," type the username of the new personal account you created or another trusted user to manage the organization.
1. Choose your new organization's subscription plan and enter billing information if prompted.
1. Click **Create Organization** to finalize the process.

To access your new organization, sign in to the new personal account you created earlier, then use the context switcher to access your new organization.

## What should be included in my application?

The following elements should be included in your GitHub for Nonprofits application:

* Proof of your nonprofit status with your local government (501(c)(3) status in the United States)
* The registered name of your nonprofit
* A summary of what your nonprofit organization does
* Confirmation that your organization is nongovernmental, nonacademic, noncommercial, and nonpolitical
* If your application is denied, please check that your submission included all of these details. If you were missing some of these elements, consider applying again through GitHub for Nonprofits with complete information.
* Please note religious or faith-based organizations in India are ineligible. See [mission eligibility exceptions](https://www.microsoft.com/en-us/nonprofits/eligibility) in the Microsoft documentation.

## Why can't I select the free GitHub Team plan?

If you currently have a GitHub Enterprise account or are on a trial of GitHub Enterprise, you will not be able to select the free GitHub Team option for your GitHub for Nonprofits discount.

You will also not be able to select a GitHub Team plan if you have changed your organization name. All GitHub for Nonprofits applications must use the same organization name throughout the application process.

You will have to cancel your trial or remove your organization from the enterprise before you are able to apply for the GitHub Team plan discount.

### Cancelling your GitHub Enterprise trial

1. In the top-right corner of GitHub, click your profile picture.
1. Depending on your environment, click **Your enterprise** or **Your enterprises**. Then click the enterprise you want to view.
1. On the left side of the page, in the enterprise account sidebar, click **Settings**.
Under “Settings,” click **Profile**.
1. At the bottom of the page, in the "Danger zone" section, click **Cancel trial** or **Delete trial**.

### Removing your organization from an enterprise

1. In the top-right corner of GitHub, click your profile picture.
1. Depending on your environment, click **Your enterprise** or **Your enterprises**. Then click the enterprise you want to view.
1. In the left sidebar, click **Organizations**.
1. In the search bar, begin typing the organization's name until the organization appears in the search results.
1. To the right of the organization's name, select the dropdown menu and click **Remove organization**.
1. Review the warnings, then click **Remove organization**.

## I have been verified as a nonprofit organization, when will I receive my discount?

Congratulations on your nonprofit application being approved!

There’s one last step you have to take to receive your discount. You must select the GitHub for Nonprofits discount you would like for your organization. To claim your GitHub for Nonprofits discount, please re-visit and sign into the [GitHub for Nonprofits portal](https://nonprofits.github.com/).

Once you have logged in, you will be able to request access to your free GitHub Team plan or 25% off GitHub Enterprise Cloud coupon code.

## How do I redeem my 25% off GitHub Enterprise Cloud coupon?

Please review the following steps to redeem your 25% off GitHub Enterprise Cloud coupon:

1. Please visit [github.com/redeem](https://github.com/redeem).
1. Enter your coupon code.
1. Click **Redeem**.
1. If you're not already signed in, you can sign in on this page.
1. Under "Redeem your coupon," next to the organization you want to apply the coupon to, click **Choose**.
1. Under "Your new plan," review the information about your plan and discount, then click **Redeem**.

Please note, each coupon code is unique to your organization. Only one organization can redeem each 25% off GitHub Enterprise Cloud coupon code. This coupon code will expire after three months and must be redeemed before this time.

## I selected a free GitHub Team plan. Why is it not automatically in place?

The discount for a free GitHub Team plan must be manually applied by the GitHub for Nonprofits support team.
After your request for a free GitHub Team plan is reviewed, an email will be sent to the GitHub organization administrator when your free Team plan is applied.

Please allow up to a week for a response while we evaluate all requests.

## Are nonprofit organizations eligible for a discount of GitHub Copilot?

Unfortunately at this time, we do not subsidize our add-on tooling such as GitHub Copilot for nonprofit organization.
GitHub now offers Copilot Free for individual accounts, providing access to a limited set of Copilot's features. This allows you to experience AI-assisted code suggestions and other functionalities at no cost.

Please stay tuned to our website for further updates from our work on the Social Impact team: [socialimpact.github.com](https://github.com/social-impact).

## I received the error message: “We’re sorry, but something went wrong” when logging into my account. How do I fix this?

We are sorry you are running into trouble with our GitHub for Nonprofits portal. An error message like this is most likely prompted by revoking or not allowing full permissions to the nonprofits.github.com site.
Please try logging out of your account, deleting the OAuth app from your account, and then logging in again. For more about deleting the OAuth app from your account, please visit [Learn more about deleting the OAuth app from your account](/nonprofit/troubleshooting/cannot-find-my-organization-on-github-for-nonprofits).
If the error message persists and you are a part of an organization within an enterprise, your account may have different permissions. Please reach out to the GitHub for Nonprofits support team at that time.
