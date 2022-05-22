---
title: Guide to Submitting a DMCA Takedown Notice
redirect_from:
  - /dmca-notice-how-to/
  - /articles/dmca-notice-how-to/
  - /articles/guide-to-submitting-a-dmca-takedown-notice
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

This guide describes the information that GitHub needs in order to process a DMCA takedown request. If you have more general questions about what the DMCA is or how GitHub processes DMCA takedown requests, please review our [DMCA Takedown Policy](/articles/dmca-takedown-policy).

Due to the type of content GitHub hosts (mostly software code) and the way that content is managed (with Git), we need complaints to be as specific as possible. These guidelines are designed to make the processing of alleged infringement notices as straightforward as possible. Our form of notice set forth below is consistent with the form suggested by the DMCA statute, which can be found at the U.S. Copyright Office's official website: <https://www.copyright.gov>.

As with all legal matters, it is always best to consult with a professional about your specific questions or situation. We strongly encourage you to do so before taking any action that might impact your rights. This guide isn't legal advice and shouldn't be taken as such.

### Before You Start

***Tell the Truth.*** The DMCA requires that you swear to the facts in your copyright complaint *under penalty of perjury*. It is a federal crime to intentionally lie in a sworn declaration. (*See* [U.S. Code, Title 18, Section 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) Submitting false information could also result in civil liability — that is, you could get sued for money damages. The DMCA itself [provides for damages](https://en.wikipedia.org/wiki/Online_Copyright_Infringement_Liability_Limitation_Act#%C2%A7_512(f)_Misrepresentations) against any person who knowingly materially misrepresents that material or activity is infringing.

***Investigate.*** Millions of users and organizations pour their hearts and souls into the projects they create and contribute to on GitHub. Filing a DMCA complaint against such a project is a serious legal allegation that carries real consequences for real people. Because of that, we ask that you conduct a thorough investigation and consult with an attorney before submitting a takedown to make sure that the use isn't actually permissible.

***Ask Nicely First.*** A great first step before sending us a takedown notice is to try contacting the user directly. They may have listed contact information on their public profile page or in the repository's README, or you could get in touch by opening an issue or pull request on the repository. This is not strictly required, but it is classy.

***Send In The Correct Request.*** We can only accept DMCA takedown notices for works that are protected by copyright, and that identify a specific copyrightable work. If you have a complaint about trademark abuse, please see our [trademark policy](/articles/github-trademark-policy/). If you wish to remove sensitive data such as passwords, please see our [policy on sensitive data](/articles/github-sensitive-data-removal-policy/). If you are dealing with defamation or other abusive behavior, please see our [Community Guidelines](/articles/github-community-guidelines/).

***Code Is Different From Other Creative Content.*** GitHub is built for collaboration on software code. This makes identifying a valid copyright infringement more complicated than it might otherwise be for, say, photos, music, or videos.

There are a number of reasons why code is different from other creative content. For instance:

- A repository may include bits and pieces of code from many different people, but only one file or even a sub-routine within a file infringes your copyrights.
- Code mixes functionality with creative expression, but copyright only protects the expressive elements, not the parts that are functional.
- There are often licenses to consider. Just because a piece of code has a copyright notice does not necessarily mean that it is infringing. It is possible that the code is being used in accordance with an open-source license.
- A particular use may be [fair-use](https://www.lumendatabase.org/topics/22) if it only uses a small amount of copyrighted content, uses that content in a transformative way, uses it for educational purposes, or some combination of the above. Because code naturally lends itself to such uses, each use case is different and must be considered separately.
- Code may be alleged to infringe in many different ways, requiring detailed explanations and identifications of works.

This list isn't exhaustive, which is why speaking to a legal professional about your proposed complaint is doubly important when dealing with code.

***No Bots.*** You should have a trained professional evaluate the facts of every takedown notice you send. If you are outsourcing your efforts to a third party, make sure you know how they operate, and make sure they are not using automated bots to submit complaints in bulk. These complaints are often invalid and processing them results in needlessly taking down projects!

***Matters of Copyright Are Hard.*** It can be very difficult to determine whether or not a particular work is protected by copyright. For example, facts (including data) are generally not copyrightable. Words and short phrases are generally not copyrightable. URLs and domain names are generally not copyrightable. Since you can only use the DMCA process to target content that is protected by copyright, you should speak with a lawyer if you have questions about whether or not your content is protectable.

***You May Receive a Counter Notice.*** Any user affected by your takedown notice may decide to submit a [counter notice](/articles/guide-to-submitting-a-dmca-counter-notice). If they do, we will re-enable their content within 10-14 days unless you notify us that you have initiated a legal action seeking to restrain the user from engaging in infringing activity relating to the content on GitHub.

***Your Complaint Will Be Published.*** As noted in our [DMCA Takedown Policy](/articles/dmca-takedown-policy#d-transparency), after redacting personal information, we publish all complete and actionable takedown notices at <https://github.com/github/dmca>.

***GitHub Isn't The Judge.***
GitHub exercises little discretion in the process other than determining whether the notices meet the minimum requirements of the DMCA. It is up to the parties (and their lawyers) to evaluate the merit of their claims, bearing in mind that notices must be made under penalty of perjury.

### Your Complaint Must ...

1. **Include the following statement: "I have read and understand GitHub's Guide to Filing a DMCA Notice."** We won't refuse to process an otherwise complete complaint if you don't include this statement. But we'll know that you haven't read these guidelines and may ask you to go back and do so.

2. **Identify the copyrighted work you believe has been infringed.** This information is important because it helps the affected user evaluate your claim and give them the ability to compare your work to theirs. The specificity of your identification will depend on the nature of the work you believe has been infringed. If you have published your work, you might be able to just link back to a web page where it lives. If it is proprietary and not published, you might describe it and explain that it is proprietary. If you have registered it with the Copyright Office, you should include the registration number. If you are alleging that the hosted content is a direct, literal copy of your work, you can also just explain that fact.

3. **Identify the material that you allege is infringing the copyrighted work listed in item #2, above.** It is important to be as specific as possible in your identification. This identification needs to be reasonably sufficient to permit GitHub to locate the material. At a minimum, this means that you should include the URL to the material allegedly infringing your copyright. If you allege that less than a whole repository infringes, identify the specific file(s) or line numbers within a file that you allege infringe. If you allege that all of the content at a URL infringes, please be explicit about that as well. 
   - Please note that GitHub will *not* automatically disable [forks](/articles/dmca-takedown-policy#b-what-about-forks-or-whats-a-fork) when disabling a parent repository. If you have investigated and analyzed the forks of a repository and believe that they are also infringing, please explicitly identify each allegedly infringing fork. Please also confirm that you have investigated each individual case and that your sworn statements apply to each identified fork. In rare cases, you may be alleging copyright infringement in a full repository that is actively being forked. If at the time that you submitted your notice, you identified all existing forks of that repository as allegedly infringing, we would process a valid claim against all forks in that network at the time we process the notice. We would do this given the likelihood that all newly created forks would contain the same content. In addition, if the reported network that contains the allegedly infringing content is larger than one hundred (100) repositories and thus would be difficult to review in its entirety, we may consider disabling the entire network if you state in your notice that, "Based on the representative number of forks you have reviewed, I believe that all or most of the forks are infringing to the same extent as the parent repository." Your sworn statement would apply to this statement.

4. **Explain what the affected user would need to do in order to remedy the infringement.** Again, specificity is important. When we pass your complaint along to the user, this will tell them what they need to do in order to avoid having the rest of their content disabled. Does the user just need to add a statement of attribution? Do they need to delete certain lines within their code, or entire files? Of course, we understand that in some cases, all of a user's content may be alleged to infringe and there's nothing they could do short of deleting it all. If that's the case, please make that clear as well.

5. **Provide your contact information.** Include your email address, name, telephone number and physical address.

6. **Provide contact information, if you know it, for the alleged infringer.** Usually this will be satisfied by providing the GitHub username associated with the allegedly infringing content. But there may be cases where you have additional knowledge about the alleged infringer. If so, please share that information with us.

7. **Include the following statement: "I have a good faith belief that use of the copyrighted materials described above on the infringing web pages is not authorized by the copyright owner, or its agent, or the law. I have taken fair use into consideration."**

8. **Also include the following statement: "I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner, or am authorized to act on behalf of the owner, of an exclusive right that is allegedly infringed."**

9. **Include your physical or electronic signature.**

### Complaints about Anti-Circumvention Technology

The Copyright Act also prohibits the circumvention of technological measures that effectively control access to works protected by copyright. If you believe that content hosted on GitHub violates this prohibition, please send us a report through our {% data variables.contact.contact_dmca %}, and include specific information about what content violates that prohibition, what technological measures you had in place, and why the content violates the prohibition.

### How to Submit Your Complaint

The fastest way to get a response is to enter your information and answer all the questions on our {% data variables.contact.contact_dmca %}.

You can also send an email notification to <copyright@github.com>. You may include an attachment if you like, but please also include a plain-text version of your letter in the body of your message.

If you must send your notice by physical mail, you can do that too, but it will take *substantially* longer for us to receive and respond to it. Notices we receive via plain-text email have a much faster turnaround than PDF attachments or physical mail. If you still wish to mail us your notice, our physical address is:

```
GitHub, Inc
Attn: DMCA Agent
88 Colin P Kelly Jr St
San Francisco, CA. 94107
```
