---
title: GitHub Private Information Removal Policy
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
topics:
  - policy
  - legal
---

We offer this private information removal process as an exceptional service only for high-risk content that violates [GitHub's Terms of Service](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions), such as when your security is at risk from exposed access credentials. This guide describes the information GitHub needs from you in order to process a request to remove private information from a repository.

### What is Private Information?

For the purposes of this document, “private information” refers to content that (i) should have been kept confidential, *and* (ii) whose public availability poses a specific or targeted security risk to you or your organization. 

"Security risk" refers to a situation involving exposure to physical danger, identity theft, or increased likelihood of unauthorized access to physical or network facilities.

#### Private information removal requests are appropriate for:
- Access credentials, such as user names combined with passwords, access tokens, or other sensitive secrets that can grant access to your organization's server, network, or domain.
- AWS tokens and other similar access credentials that grant access to a third party on your behalf. You must be able to show that the token does belong to you.
- Documentation (such as network diagrams or architecture) that poses a specific security risk for an organization. 
- [Information](/github/site-policy/github-community-guidelines#doxxing-and-invasion-of-privacy) related to, and posing a security risk to, you as an individual (such as social security numbers or other government identification numbers).

#### Private information removal requests are _not_ appropriate for:
- Internal server names, IP addresses, and URLs, on their own. You must be able to show that their use in a particular file or piece of code poses a security threat.
- Mere mentions of your company's identity, name, brand, domain name, or other references to your company in files on GitHub. You must be able to articulate why a use of your company's identity is a threat to your company's security posture.
- Entire files or repositories that do not pose a specific security risk, but you believe are otherwise objectionable.
- Requests to remove content that may infringe your or your organization's copyright rights. If you have questions about how GitHub handles copyright-related matters or would like to report potentially infringing content, please review our [DMCA Takedown Policy](/articles/dmca-takedown-policy/). The private information removal process is generally not intended for the removal of full files or repositories — only for the specific pieces of private information in those files. While there may be cases where files are filled entirely with private information, you must justify the security risk for the removal of such files, and this may increase the time required to process your request.
- Trademark disputes. If you have questions about how GitHub handles trademark-related matters or would like to report content containing your organization's trade or service marks, please review our [Trademark Policy](/articles/github-trademark-policy/).
- Privacy complaints. If you wish to access, transfer, change, or delete your personal information on GitHub, please contact us via [our Privacy contact form](https://github.com/contact/privacy). 
- Content governed by our [Community Guidelines](/articles/github-community-guidelines/), such as malware or general-purpose tools. If you have questions about our Community Guidelines or believe that content on GitHub might violate our guidelines, you can use {% data variables.contact.report_content %} to contact us.

### Things to Know

**Ask Nicely First.** A great first step before sending us a request to remove data is to try contacting the user directly. They may have listed contact information on their public profile page or in the repository's README or Support file, or you could get in touch by creating an issue or pull request in the repository. This is not strictly required, but it is appreciated.

**No Bots.** You should have a trained professional evaluate the facts of every request you send. If you're outsourcing your efforts to a third party, make sure you know how they operate, and make sure they are not using automated bots to submit complaints in bulk. These complaints often include data that does not pose any security threats, and they do not include sufficient explanations, requiring additional back-and-forth and resulting in delays, even when the complaint is valid.

**Send In The Correct Request.** As noted above, we offer this private information removal process as an exceptional service only for high-risk content. We are not able to use this process to remove other kinds of content, such as potentially infringing content, and we are not able to process any other kinds of removal requests simultaneously while processing private information removal requests. We will be able to help you more quickly if you send in your private information removal requests separately from any requests to remove potentially infringing content. If you are unsure whether your request involves only private information or also involves other legal matters, please consult legal counsel. 

**Processing Time.** While we do process private information removal requests as quickly as possible, due to the volume of requests we process, it may take some time for your request to be reviewed. Additional requests, or multiple requests from additional points of contact, may result in delays.

### How Does This Actually Work?

1. **Complainant Investigates.** It is up to the requesting party to conduct their own investigation and to provide us with the [details we require](#your-request-must-include) — most importantly, an explanation of how the data poses a security risk. GitHub is not in a position to search for or make initial determinations about private information on any individual's or organization's behalf.

2. **Complainant Sends a Private Information Removal Request.** After conducting an investigation, the complainant prepares and [sends a private information removal request](#sending-a-private-information-removal-request) to GitHub. If the request is not sufficiently detailed to demonstrate the security risk and for GitHub to locate the data, we will reply and ask for more information.

3. **GitHub Asks User to Make Changes.** In most cases, we will contact the user who created the repository and give them an opportunity to delete or modify the private information specified in the request or to dispute the claim.

4. **User Notifies GitHub of Changes.** If the user chooses to make the specified changes, they must tell us so within the window of time they've been allowed. If they don't, we will disable the repository. If the user notifies us that they made changes, we will verify that the changes have been made and notify the complainant.

  OR

5. **User May Dispute the Request.** If a user believes the content in question is not private information subject to this Policy, they may dispute it. If they do, we will generally leave it up to the complainant to contact the user and work things out with them directly, within reason.

6. **Complainant Reviews Changes.** If the user makes changes, the complainant must review them. If the changes are insufficient, the complainant must provide GitHub with details explaining why. GitHub may disable the repository or give the user an additional chance to make the changes.

7. **User May Request an Additional Window to Make Changes.** If the user missed their opportunity to remove the private information specified in the notice, we may allow them an additional window of approximately 1 business day, upon request, to make those changes. In that event, GitHub will notify the complainant.

#### What About Forks? (or What's a Fork?)
One of the best features of GitHub is the ability for users to "fork" one another's repositories. What does that mean? In essence, it means that users can make a copy of a project on GitHub into their own repositories. As the license or the law allows, users can then make changes to that fork to either push back to the main project or just keep as their own variation of a project. Each of these copies is a "[fork](/articles/github-glossary/#fork)" of the original repository, which in turn may also be called the "parent" of the fork.

GitHub will not automatically disable forks when disabling a parent repository. This is because forks belong to different users and may have been altered in significant ways. GitHub does not conduct any independent investigation into forks. We expect those sending private information removal requests to conduct that investigation and, if they believe that the forks also contain private information, expressly include forks in their request.

If at the time that you submitted your notice, you identified all existing forks of that repository, we would process a valid claim against all forks in that network at the time we process the notice. We would do this given the likelihood that all newly created forks would contain the same content. In addition, if the reported network that contains the reported content is larger than one hundred (100) repositories and thus would be difficult to review in its entirety, we may consider disabling the entire network if you state in your notice that, based on the representative number of forks you have reviewed, you believe that all or most of the forks contain the content reported in the parent repository.

### Sending A Private Information Removal Request

Due to the type of content GitHub hosts (mostly software code) and the way that content is managed (with Git), we need complaints to be as specific as possible. In order for us to verify that a user has removed reported private information completely, we need to know exactly where to look.

These guidelines are designed to make the processing of requests to remove private information as straightforward as possible.

#### Your Request Must Include:

1. A working, clickable link to each file containing private information. (Note that we're not able to work from search results, examples, or screenshots.)
2. Specific line numbers within each file containing the private information.
3. A brief description of how each item you've identified poses a security risk to you or your organization. ***It is important that you provide an explanation of how the data poses a security risk beyond merely stating that it does.***
4. If you are a third party acting as an agent for an organization facing a security risk, include a statement that you have a legal right to act on behalf of that organization.
5. OPTIONAL: Let us know if your request is particularly urgent, and why. We respond to all private information removal requests as quickly as possible. However, if this request is especially time-sensitive, such as a very recent credential exposure, please explain why.

### How to Submit Your Request

You can submit your request to remove private information via our [contact form](https://support.github.com/contact?tags=docs-private-information). Please include a plain-text version of your request in the body of your message. Sending your request in an attachment may result in processing delays.

### Disputes

If you received a private information removal request from us, you can dispute it by replying to our email and letting us know — in as much detail as possible — why you think the content in question is not private information subject to this Policy.
