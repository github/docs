---
title: GitHub SIRT description RFC 2350
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

## 1. Document Information

TLP:CLEAR

### 1.1 Date of Last Update

Version 1.0, updated 2023-10-01.

### 1.2 Distribution List for Notifications

There is no distribution list for changes to this document.

### 1.3 Locations where this Document May Be Found

The current version of this document may be found at:

https://docs.github.com/site-policy/security-policies/github-sirt-description-rfc-2350

## 2. Contact Information

### 2.1 Name of the Team

GitHub Security Incident Response Team (SIRT)

Subteams:

- Threat Hunting, Operations, and Response (THOR)
- Product Security Incident Response Team (PSIRT)
- Bug Bounty

### 2.2 Address

GitHub SIRT  
88 Colin P. Kelly Jr. St.  
San Francisco, CA 94107  
United States

### 2.3 Time Zone

Our team mainly works in the contiguous United States and keeps to these hours:

- EST/EDT
- CST/CDT
- MST/MDT
- PST/PDT

### 2.4 Telephone Number

None available.

### 2.5 Facsimile Number

None available.

### 2.6 Other Telecommunication

None available.

### 2.7 Electronic Mail Address

security(at)github(dot)com

This relays email to the human(s) on duty for GitHub SIRT.

### 2.8 Public Keys and Encryption Information

GitHub SIRT has a PGP public key:

- Key ID: `78DCCCE9923E5CFB3CAA5D5AB79DBDA3BE944D9E`
- Key expiry: `2025-09-12`

```text
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZQHKOxYJKwYBBAHaRw8BAQdAzvtu6OfJTspbWTVVU2uDeljmfEr1qYkvD25w
NKB2twq0JUdpdEh1YiBTZWN1cml0eSA8c2VjdXJpdHlAZ2l0aHViLmNvbT6ImQQT
FgoAQRYhBHjczOmSPlz7PKpdWredvaO+lE2eBQJlAco7AhsDBQkDwmcABQsJCAcC
AiICBhUKCQgLAgQWAgMBAh4HAheAAAoJELedvaO+lE2e1voA/31lJyof7nWI1Mxs
x3MHhwp5sFh2P/pFucuNKb7ciwMMAQCCAk39cSFs2WWw8aZC7lqXNJcFiMn0r+wm
i6I3pWjiA7g4BGUByjsSCisGAQQBl1UBBQEBB0C0jKXWh6G8atXCJi2xsy71+NzX
0Y2WN8yj3f59MGHYfAMBCAeIfgQYFgoAJhYhBHjczOmSPlz7PKpdWredvaO+lE2e
BQJlAco7AhsMBQkDwmcAAAoJELedvaO+lE2eozABAIbzLwvaACiKFzXYjp9Zpenv
GEHeqggLGzHpEheyoBMkAP96NI0kzYvj+zhJZ/4Y3TIDZaOD8OXezwia9E2Bxf5O
Aw==
=4+TC
-----END PGP PUBLIC KEY BLOCK-----
```

### 2.9 Team Members

The list of team members is not publicly available.

### 2.10 Other Information

None available.

### 2.11 Points of Customer Contact

Vulnerabilities should be reported to our bug bounty program:

https://bounty.github.com

GitHub customers should contact their account manager or GitHub Support for first level support and escalations:

https://support.github.com

Other security related communications can be directed to our email address detailed in Section 2.7.

## 3. Charter

### 3.1 Mission Statement

GitHub is committed to maintaining the confidentiality, integrity, and availability of both its platform and the intellectual property and personal information of its users, customers, and employees. In order to ensure these principles are upheld, GitHub maintains robust vulnerability management, incident response, and threat hunting capabilities.

### 3.2 Constituency

Our constituency is any individual or organization that uses a GitHub product or service, as well as GitHub employees, contractors, and GitHub Inc.

Some examples of GitHub products and services are:

- GitHub.com
- GitHub Enterprise Server
- GitHub Actions
- GitHub Desktop
- GitHub CLI
- GitHub API
- npm

### 3.3 Sponsorship and/or Affiliation

GitHub SIRT is a team within GitHub. Funding is provided by GitHub.

### 3.4 Authority

GitHub SIRT operates under the authority of the Chief Security Officer of GitHub.

## 4. Policies

### 4.1 Types of Incidents and Level of Support

GitHub SIRT is authorized to address all types of computer security incidents which occur, or threaten to occur, within its constituency.

The level of support depends on the type and severity of the given security incident, the number of affected entities within our constituency, and our resources at the time.

### 4.2 Co-operation, Interaction and Disclosure of Information

GitHub SIRT takes every effort to safely and securely share information with affected parties during incident response situations while respecting the privacy and trust of our constituents.

### 4.3 Communication and Authentication

GitHub SIRT makes use of the Traffic Light Protocol (TLP) for information sharing.

Email is the preferred method of communication. All sensitive information should be encrypted using the GitHub SIRT PGP key (as detailed in Section 2.8) prior to sending.

## 5. Services

### 5.1 Incident Response

GitHub SIRT is responsible for incident response internally at GitHub where at least one member of the constituency is affected.

GitHub SIRT does not provide incident response services for customers. Every effort is made to provide timely and accurate information during security incidents to affected customers so they can conduct their own investigations and respond appropriately. See section 2.11 for customer points of contact.

#### 5.1.1 Incident Triage

GitHub SIRT carries out the following activities for incident triage:

- Security signals are collected and interpreted to determine risk, severity, and priority.
- Investigation as to whether an incident occurred and what its effect and impact was.

This list is not exhaustive.

#### 5.1.2 Incident Coordination

GitHub SIRT carries out the following activities for incident coordination:

- Situational awareness and analysis for stakeholders such as engineering, legal, and support teams.
- Command role with authority to direct resources as required.
- External coordination with affected or involved third-parties.

This list is not exhaustive.

#### 5.1.3 Incident Resolution

GitHub SIRT carries out the following activities for incident resolution:

- Engages relevant internal teams to eradicate, restore, and secure.
- Collection and storage of evidence for internal use as well as potential law enforcement involvement.
- Notification to affected constituents.
- Postmortem authoring with lessons learned and post-incident repair items.

This list is not exhaustive.

### 5.2 Proactive Activities

GitHub SIRT develops, maintains, and operates threat hunting and detection tools and techniques to proactively identify risks and threats.

Work is also done on education, preparation, workflow development, and community outreach.

## 6. Incident Reporting Forms

None available. Please review Section 2.11 for reporting guidance.

## 7. Disclaimers

While every precaution will be taken in the preparation of information, notifications and alerts, GitHub SIRT assumes no responsibility for errors or omissions, or for damages resulting from the use of the information contained within.
