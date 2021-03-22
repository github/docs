---
title: Building GitHub Apps
intro: You can build GitHub Apps for yourself or others to use. Learn how to register and set up permissions and authentication options for GitHub Apps.
mapTopic: true
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/
  - /apps/building-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github apps
---

GitHub Security

    Rules
    Targets
    Scope
    Rewards
    FAQs
    Submit a vulnerability

GitHub Security Bug Bounty

Software security researchers are increasingly engaging with internet companies to hunt down vulnerabilities. Our bounty program gives a tip of the hat to these researchers and provides rewards of $30,000 or more for critical vulnerabilities.

If you have found a vulnerability, submit it here.

You can find useful information in our rules, scope, targets and FAQ sections.

Happy hacking!
Leaderboard

These are the current top 10 bounty hunters based on total points earned across all targets. For the full list of contributors, check out GitHub’s bounty hunters.
1 	adob 	30,750 pts
Aleksandr Dobkin<img src=404 onerror=alert(document.domain)>
@adob 	

    Cross-Site Scripting (XSS) badge Injection badge Unvalidated Redirect or Forward badge Sensitive Data Exposure badge 

2 	joernchen 	28,500 pts
joernchen
@joernchen 	

    Injection badge Broken Authentication or Session Management badge Other badge Missing Function Level Access Control badge 

3 	staaldraad 	20,000 pts
Etienne Stalmans
@staaldraad 	

    Injection badge 

4 	Cache-Money 	16,000 pts
Tanner
@Cache-Money 	

    Missing Function Level Access Control badge Security Misconfiguration badge 

5 	jkakavas 	15,600 pts
Ioannis Kakavas
@jkakavas 	

    Broken Authentication or Session Management badge 

6 	kyprizel 	14,000 pts
kyprizel
@kyprizel 	

    Sensitive Data Exposure badge Injection badge Other badge 

7 	orangetw 	12,500 pts
Orange Tsai
@orangetw 	

    Injection badge Security Misconfiguration badge 

8 	kamilhism 	10,200 pts
Kamil Hismatullin
@kamilhism 	

    Missing Function Level Access Control badge Sensitive Data Exposure badge Unvalidated Redirect or Forward badge 

9 	Vlaaaaaaad 	10,000 pts
Vlad Ionescu
@Vlaaaaaaad 	

    Sensitive Data Exposure badge 

10 	vyshakh 	10,000 pts
Vyshakh Parakkat
@vyshakh 	

    Other badge 

Rules

 
Before you start

        Check the list of domains that are in scope for the Bug Bounty program and the list of targets for useful information for getting started.

        Check the list of bugs that have been classified as ineligible. Submissions which are ineligible will likely be closed as Not Applicable.

        Check the GitHub Changelog for recently launched features.

        Never attempt non-technical attacks such as social engineering, phishing, or physical attacks against our employees, users, or infrastructure.

        When in doubt, contact us at bounty@github.com.

        By participating in GitHub’s Bug Bounty program (the “Program”), you acknowledge that you have read and agree to GitHub’s Terms of Service as well as the following:

            you are not currently a GitHub employee or contractor, were not a GitHub employee or contractor within six months prior to submission, and you did not collaborate on your submission with anyone who was.

            your participation in the Program will not violate any law applicable to you, or disrupt or compromise any data that is not your own.

            you are solely responsible for any applicable taxes, withholding or otherwise, arising from or relating to your participation in the Program, including from any bounty payments.

            GitHub reserves the right to terminate or discontinue the Program at its discretion.

            Only test for vulnerabilities on sites you know to be operated by GitHub and are in-scope. Some sites hosted on subdomains of GitHub.com are operated by third parties and should not be tested.

            We cannot reward any individual on any U.S. sanctions list, or any individual residing in any U.S.-sanctioned country or region. For more information, please see https://www.hackerone.com/disclosure-guidelines.

 
Legal safe harbor

    Your research is covered by the GitHub Bug Bounty Program Legal Safe Harbor policy. In summary:

        We consider security research and vulnerability disclosure activities conducted consistent with this policy as “authorized” conduct under the Computer Fraud and Abuse Act, the DMCA, and other applicable computer use laws such as Cal. Penal Code 502(c). We waive any potential DMCA claim against you for circumventing the technological measures we have used to protect the applications in this bug bounty program’s scope.

        We want you to responsibly disclose through our bug bounty program, and don’t want researchers put in fear of legal consequences because of their good faith attempts to comply with our bug bounty policy. We cannot bind any third party, so do not assume this protection extends to any third party. If in doubt, ask us before engaging in any specific action you think might go outside the bounds of our policy.

        Because both identifying and non-identifying information can put a researcher at risk, we limit what we share with third parties. We may provide non-identifying substantive information from your report to an affected third party, but only after notifying you and receiving a commitment that the third party will not pursue legal action against you. We will only share identifying information (name, email address, phone number, etc.) with a third party if you give your written permission.

        If your security research as part of the bug bounty program violates certain restrictions in our site policies, the safe harbor terms permit a limited exemption.

 
Performing your research

        Do not impact other users with your testing, this includes testing vulnerabilities in repositories or organizations you do not own. If you are attempting to find an authorization bypass, you must use accounts you own.

        The following are never allowed and are ineligible for reward. We may suspend your GitHub account and ban your IP address for:
            Performing distributed denial of service (DDoS) or other volumetric attacks
            Spamming content
            Large-scale vulnerability scanners, scrapers, or automated tools which produce excessive amounts of traffic.
                Note: We do allow the use of automated tools so long as they do not produce excessive amounts of traffic. For example, running one nmap scan against one host is allowed, but sending 65,000 requests in two minutes using Burp Suite Intruder is excessive.

        Researching denial-of-service attacks is allowed and eligible for rewards only if you follow these rules:
            There are no limits for researching denial of service vulnerabilities against your own instance of GitHub Enterprise Server. We strongly recommend/prefer this method for researching denial of service issues.
            If you choose to test on GitHub proper (i.e. https://github.com)
                Research must be performed in organizations or repositories you own
                Stop immediately if you believe you have affected the availability of our services. Don’t worry about demonstrating the full impact of your vulnerability, GitHub’s security team will be able to determine the impact.

 
Handling personally identifiable information (PII)

        Personally identifying information (PII) includes:
            legal and/or full names
            names or usernames combined with other identifiers like phone numbers or email addresses
            health or financial information (including insurance information, social security numbers, etc.)
            information about political or religious affiliations
            information about race, ethnicity, sexual orientation, gender, or other identifying information that could be used for discriminatory purposes

        Do not intentionally access others’ PII. If you suspect a service provides access to PII, limit queries to your own personal information.

        Report the vulnerability immediately and do not attempt to access any other data. The GitHub Security team will assess the scope and impact of the PII exposure.

        Limit the amount of data returned from services. For SQL injection, for example, limit the number of rows returned

        You must delete all your local, stored, or cached copies of data containing PII as soon as possible. We may ask you to sign a certificate of deletion and confidentiality agreement regarding the exact information you accessed. This agreement will not affect your bounty reward.
        We may ask you for the usernames and IP addresses used during your testing to assess the impact of the vulnerability

 
Reporting your vulnerability

        Submissions must include written instructions for reproducing the vulnerability. Submissions without clear reproduction steps or which only include reproduction steps in video form may be ineligible for a reward.

        When reporting vulnerabilities you must keep all information on HackerOne. Do not post information to video-sharing or pastebin sites. Videos and images can be uploaded directly via HackerOne.

        For vulnerabilities involving personally identifiable information, please explain the kind of PII you believe is exposed and limit the amount of PII data included in your submissions. For textual information and screenshots, please only include redacted data in your submission.

        During the course of an investigation, it may take time to resolve the issue you have reported. We ask that you refrain from publicly disclosing details regarding an issue you’ve reported until the fix has been publicly made available.

 
Receiving your award

        All reward amounts are determined by our severity guidelines.

        When duplicates occur, we only award the first report that was received (provided that it can be fully reproduced).

        You are free to publish write-ups about your vulnerability and GitHub will not limit what you write. We may pay out your reward before the vulnerability is patched so we may ask that you delay publishing to keep other GitHub users safe.

        Medium, high, and critical severity issues may be written up on the GitHub Bug Bounty site and included in our leaderboard. We do not currently post write-ups for low severity vulnerabilities.

        GitHub is a CVE Numbering Authority (CNA) for GitHub Enterprise Server. Eligible Bug Bounty submissions that affect GitHub Enterprise Server may be assigned CVEs. These CVEs will be shared with submitters via HackerOne, included in bounty write-ups and listed in the GitHub Enterprise Server release notes.

        You may prefer the reward go toward helping others. If you choose to do so, GitHub will donate your reward to an established 501(c)(3) charitable organization of your choice. GitHub will also match your donation - subject to our discretion. Any rewards that go unclaimed after 12 months will be donated to a charity of GitHub’s choosing.

Targets

In addition to our scope, we want to share a high-level overview of GitHub's services:
Core GitHub services available to all users

    GitHub.com
    GitHub API
    GitHub CSP
    GitHub Actions
    GitHub Pages
    GitHub Gist

On-premise and hosted GitHub for enterprise customers

    GitHub Enterprise Server
    GitHub Enterprise Cloud

GitHub Apps that are owned and operated by GitHub

    Dependabot

First-party clients for accessing GitHub

    GitHub Desktop
    GitHub for mobile
    GitHub CLI

Other GitHub services

    GitHub Education
    GitHub Learning Lab
    GitHub Jobs
    LGTM

Infrastructure owned and operated by GitHub

    *.githubapp.com
    *.github.net
    GitHub Credentials

Scope

GitHub runs a number of services but only submissions under the following domains are eligible for rewards. Any GitHub-owned domains not listed below are not in-scope, not eligible for rewards and not covered by our legal safe harbor.
github.com
Our main domain hosting user-facing GitHub services. All subdomains under github.com are in-scope except:

    blog.github.com
    community.github.com
    email.enterprise.github.com
    email.finance.github.com
    email.staging.finance.github.com
    email.support.github.com
    email.verify.github.com
    google7650dcf6146f04d8.github.com
    k1._domainkey.github.com
    k1._domainkey.mcmail.github.com
    mcmail.github.com
    resources.github.com
    *.resources.github.com
    sgmail.github.com
    *.sgmail.github.com
    shop.github.com
    smtp.github.com
    *.smtp.github.com

githubassets.com
Our domain for hosting static assets. All subdomains under githubassets.com are in-scope.
githubusercontent.com
Our domain for hosting and rendering users’ data. All subdomains under githubusercontent.com are in-scope.
githubapp.com
Our domain for hosting employee-facing services. All subdomains under githubapp.com are in-scope except:

    atom-io.githubapp.com
    atom-io-staging.githubapp.com
    email.enterprise-staging.githubapp.com
    email.haystack.githubapp.com
    reply.githubapp.com

github.net
Our domain for hosting GitHub’s internal production services. Many of these services are not accessible from outside our internal network. All subdomains under github.net are in-scope.
semmle.com
Our main domain for Semmle and LGTM services All subdomains under semmle.com are in-scope except:

    dev.semmle.com
    git.semmle.com
    jira.semmle.com
    wiki.semmle.com

semmle.net
Our domain for non-production Semmle services All subdomains under semmle.net are in-scope.
downloads.lgtm.com
Our domain for serving LGTM downloads. All subdomains under downloads.lgtm.com are in-scope.
lgtm-com.pentesting.semmle.net
An instance of LGTM especially for Bug Bounty research. All subdomains under lgtm-com.pentesting.semmle.net are in-scope.
backend-dot-lgtm-penetration-testing.appspot.com
An instance of LGTM’s backend used for triggering automated tasks. All subdomains under backend-dot-lgtm-penetration-testing.appspot.com are in-scope.

Severity Guidelines

All bounty submissions are rated by GitHub using a purposefully simple scale. Each vulnerability is unique but the following is a rough guideline we use internally for rating and rewarding submissions:
$20,000 - $30,000+
Critical

    Critical severity issues present a direct and immediate risk to a broad array of our users or to GitHub itself. They often affect relatively low-level/foundational components in one of our application stacks or infrastructure. For example:

        arbitrary code/command execution on a GitHub server in our production network.
        arbitrary SQL queries on the GitHub production database.
        bypassing the GitHub login process, either password or 2FA.
        access to sensitive production user data or access to internal production systems.
        accessing another user’s data in the GitHub Actions service.

    The upper bound for critical vulnerabilities, $30,000, is only a guideline and GitHub may reward higher amounts for exceptional reports.
$10,000 - $20,000
High

    High severity issues allow an attacker to read or modify highly sensitive data that they are not authorized to access. They are generally more narrow in scope than critical issues, though they may still grant an attacker extensive access. For example:

        injecting attacker controlled content into GitHub.com (XSS) which bypasses CSP.
        bypassing authorization logic to grant a repository collaborator more access than intended.
        discovering sensitive user or GitHub data in a publicly exposed resource, such as an S3 bucket.
        gaining access to a non-critical resource that only GitHub employees should be able to reach.
        using the GitHub Actions repo-scoped GitHub token to access high-risk private content outside of that repository.
        code execution in a client app (GitHub Desktop, GitHub Mobile or GitHub CLI) that requires no user interaction, such as arbitrary code execution upon repo clone or via a protocol handler

$4,000 - $10,000
Medium

    Medium severity issues allow an attacker to read or modify limited amounts of data that they are not authorized to access. They generally grant access to less sensitive information than high severity issues. For example:

        disclosing the title of issues in private repositories which should be be inaccessible.
        injecting attacker controlled content into GitHub.com (XSS) but not bypassing CSP or executing sensitive actions with another user’s session.
        bypassing CSRF validation for low risk actions, such as starring a repository or unsubscribing from a mailing list.
        escaping the LGTM worker sandbox to access other user’s data or private networked resources
        code execution in a client app (GitHub Desktop, GitHub Mobile or GitHub CLI) that requires minimal, expected user interaction, such as performing actions on a repository that a user would not expect to lead to code execution.

$617 - $2,000
Low

    Low severity issues allow an attacker to access extremely limited amounts of data. They may violate an expectation for how something is intended to work, but it allows nearly no escalation of privilege or ability to trigger unintended behavior by an attacker. For example:

        signing up arbitrary users for access to an “early access feature” without their consent.
        creating an issue comment that bypasses our image proxying filter by providing a malformed URL.
        triggering verbose or debug error pages without proof of exploitability or obtaining sensitive information.
        triggering application exceptions that could affect many GitHub users.
        triggering XSS or CSRF vulnerabilities in LGTM
        injecting JavaScript event handlers into links, etc, which are mitigated by CSP on GitHub.com

FAQs

 
How is the bounty reward determined?

    Our security and development teams take many factors into account when determining a reward. These factors include the complexity of successfully exploiting the vulnerability, the potential exposure, as well as the percentage of impacted users and systems. Sometimes an otherwise critical vulnerability has a very low impact simply because it is mitigated by some other component, e.g. requires user interaction, an obscure web browser, or would need to be combined with another vulnerability that does not currently exist. Additionally, at least two GitHub security engineers agree on the severity and amount before a payout is made.
 
Can I submit a video proof-of-concept?

    You can certainly attach a video if you believe it will clarify your submission. However, all submissions must also include step-by-step instructions to reproduce the bug. The security team will let you know if we think a video will clarify your report. Submissions which only include video reproduction steps will have a longer response time and we may close your submission as Not Applicable.
 
Did my submission just get rejected by a bot?

    You may get a response that appears to be from a bot. The bot does some work for us, but only when we tell it to. We “do our own stunts” at GitHub Security. An application security engineer at GitHub triages each submission. In most cases, we use the bot to automate messaging and other tasks for us. Rest assured, a human did look at your submission.
 
Can I submit my report via a third-party or vulnerability broker?

    GitHub’s Bug Bounty program is designed to both reward individual researchers and increase the security of all GitHub users. We don’t believe that disclosing GitHub vulnerabilities to third parties achieves either of those goals. As a result, any vulnerabilities that are disclosed to third-party before being submitted to our program are ineligible for rewards.
 
What are points?

    In addition to giving researchers money, we are trying to make this fun. We assign a point value to each vulnerability and list it on this site. The researchers with the most points are listed on our leaderboard. While we use many of the same metrics when determining point value as for dollar value, other non-tangible factors are considered as well. For example, if you provide an awesome writeup of a vulnerability with a functional POC that will be factored in.
 
What if I do not want my submission published on the bounty website or do not have a GitHub account?

    Please still send us your vulnerability! We will only publish your submission after your approval. To be visible within the leaderboard you must provide us with a GitHub username. This allows us to link submissions to a single user and generate your sweet profile page.
 
Why does severity on HackerOne not match the reward I was given?

    We do not always update HackerOne with the assessed severity because we track that information internally. Our payout guidelines and the value of the reward dictate our assessment of severity, not the severity on HackerOne.
 
Where is your PGP key? I want to use it when I submit a vulnerability.

    If you absolutely believe encrypting the message is necessary, please read our instructions and caveats for PGP submissions.
 
What kinds of DoS submissions are valid?

    As noted in the performing your research section, denial of service research is best done on your own instance of GHES. Causing an availability issue is simply not helpful. We are only interested in denial of service issues at the application layer (logic bombs, ReDoS, etc.). Volumetric attack submissions are not eligible for rewards and we may suspend your GitHub account or temporarily ban your IP address.

    Vulnerability classifications Bounty hunters 

    © 2021 GitHub, Inc. Terms Privacy Security 

𝛑

