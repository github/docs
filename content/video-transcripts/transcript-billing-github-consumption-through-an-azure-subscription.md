---
title: Transcript - "Billing GitHub consumption through an Azure subscription"
intro: Audio and visual transcript.
shortTitle: Billing through Azure
allowTitleToDifferFromFilename: true
product_video: 'https://www.youtube.com/watch?v=DAiIhJKCt8s'
topics:
  - Transcripts
versions:
  fpt: '*'
  ghec: '*'
---

[Title card: "GitHub consolidated billing on Azure."]

T.J.: Hello, everyone. Thank you for joining us to learn how you can bill your GitHub consumption through Azure.

During this video, we will share the benefits of billing through Azure, review eligible GitHub products, demo the process step by step, and share resources to help you move forward.

Let's start with why so many customers are already billing their GitHub consumption through Azure. The key benefits are consolidation, visibility, and commercials.

From a consolidation standpoint, joint GitHub and Microsoft customers will be able to see all their GitHub consumption on their Azure invoice, eliminating the need for additional invoices and saving time on the procurement process.

From a visibility perspective, GitHub customers will be able to leverage all the powerful tools and features of the Azure billing portal to gain enhanced visibility into their GitHub consumption spend.

And finally, if a Microsoft customer has an Azure discount, it will automatically be applied to all future GitHub consumption billed through Azure.

If a Microsoft customer also has a Microsoft Azure Consumption Commitment, or MACC, all future GitHub consumption will decrement their MACC as well.

So what GitHub products are eligible for Azure billing? Any GitHub consumption products are eligible today, meaning products that customers pay for based on actual usage, including Copilot for Business, GitHub-hosted actions, larger hosted runners, GitHub Packages and storage, and GitHub Codespaces. Please note that GitHub Enterprise and GitHub Advanced Security are currently not able to be billed through Azure, but are instead invoiced on an annual basis.

[A table shows eligibility for Azure billing and MACCs for the products mentioned. In the table, all products eligible for Azure billing are also eligible for MACCs.]

T.J.: Now let's jump into a demo to see how to actually turn this on.

[He shares his screen. He's on the home page of the Microsoft Azure portal.]

T.J.: The first step in the process is to set up an admin consent workflow to allow your GitHub enterprise owner the ability to request the installation of a new application. This can be done by logging in to the Azure portal and opening up Microsoft Entra ID.

From here, you'll need to click on "Enterprise Applications", and then under the "Security" section, "Consent and permissions". Finally, click "Admin consent settings".

From here, you'll need to actually turn this on if it's not already enabled. So I'm going to go ahead and click "Yes".

[In the settings, under "Users can request admin consent to apps they are unable to consent to", he switches a toggle to "Yes".]

T.J.: And you'll need to add who has the ability to approve these requests. This would normally be yourself, the global admin, or potentially a team that you're a member of.

Once you're happy with the settings, you can go ahead and click "Save". From here, you'll need to wait about an hour for these settings to replicate across Azure before you can proceed with the next step.

Now I'll hand it over to the GitHub enterprise owner to actually request the application be installed.

[The enterprise owner, Brian, shares his screen. He's looking at an enterprise account on GitHub.]

Brian: So to start the process of linking an Azure subscription, I need to go to the settings for my enterprise, and underneath "Settings", you'll see there's an option here for billing. Then, under the various settings here, I'm going to go over to "Payment information", and finally "Add Azure Subscription". So I'm gonna click that link.

[A Microsoft page: "Approval required".]

Brian: Now once I sign in, it says approval is required from my Azure administrator, so I'm going to say, "Need to have GitHub paid," and let's select "Request approval".

Now, at this point it says, "Hey, the request has been sent," so I'm gonna go back to my application and it's going to say, "Hey, we're not ready yet."

[On the enterprise on GitHub, an error message says: "Authentication with Azure failed."]

Brian: I'm going to go back into my subscription and I'm going to wait to hear from my administrator who will let me know when this is done.

So now let's switch over back to T.J., and T.J., can you show us the approval process?

[Back on the Azure portal.]

T.J.: Your Entra global administrator should receive an email notification to approve a new request. To do so, they can go back into Entra ID, go to "Enterprise applications", and then look for "Admin consent requests" down under the "Activity" section.

Here you'll see the pending request to install the GitHub Subscription Permission Validator. I can go ahead and click here and review the permissions and consent on behalf of my organization.

It'll pop up asking me to reauthenticate, and then I can see the exact permissions that it's requesting. In this case, this application is just going to have access to see the users and be able to understand which subscriptions they're in ownership of to make sure that they have permissions to bill against it.

So if I'm happy with this, I can go ahead and hit "Accept". And that's all I need to do. I can hand it back over to the GitHub enterprise owner to finish the last step.

[Back in the enterprise on GitHub.]

Brian: Okay. Well, I checked my email and my administrator approved from the Azure side that we can set up billing. So I'll go back into "Settings", go to "Billing" again, go to "Payment information", "Add Azure Subscription".

[A dialog displays, labeled "Select a subscription".]

Brian: Okay. Now that I've been authenticated, we see what subscription I'm hooking up to. I'm going to click it, click "Connect".

[On the main "Payment information" page, under "Metered billing settings".]

Brian: With my billing subscription selected, the last thing I need to do is select "Enable metered billing through Azure", and click "Update metered billing settings".

At this point, the eligible items within my subscriptions, as we described earlier in the slides, will now be billed to the selected subscription.

T.J.: Thanks so much for joining us today. For future reference, we are also sharing two helpful resources to help you bill GitHub consumption through Azure in the future. And if you have a dedicated GitHub and/or Microsoft account team, please don't hesitate to reach out to them for additional information. Thanks.

End of transcript. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)" and [Get subscription and tenant IDs in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id) in the Microsoft documentation.
