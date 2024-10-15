---
title: Start your journey
intro: 'Learn the basics of {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
children:
  - /about-github-and-git
  - /creating-an-account-on-github
  - /hello-world
  - /setting-up-your-profile
  - /finding-inspiration-on-github
  - /downloading-files-from-github
  - /uploading-a-project-to-github
  - /git-and-github-learning-resources
redirect_from:
  - /github/getting-started-with-github/quickstart
  - /get-started/quickstart
---
https://github.com/sessions/verified-device/mobile?auto=truecommand, all the dependencies of a project through the package.json file.[11] In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.[12] npm also provides version-bumping tools for developers to tag their packages with a particular version.[13] npm also provides the package-lock.json[14] file which has the entry of the exact version used by the project after evaluating semantic versioning in package.json.

Client
แก้ไข
npm's command-line interface client allows users to consume and distribute JavaScript modules that are available in the registry.[15]

In February 2018, an issue was discovered in version 5.7.0 in which running sudo npm on Linux systems would change the ownership of system files, permanently breaking the operating system.[16]

In npm version 6, the audit feature was introduced to help developers identify and fix security vulnerabilities in installed packages.[17] The source of security vulnerabilities were taken from reports found on the Node Security Platform (NSP) and has been integrated with npm since npm's acquisition of NSP.[18]

Registry
แก้ไข
Packages in the registry are in ECMAScript Module (ESM) or CommonJS format and include a metadata file in JSON format.[19]

Over 3.1 million packages are available in the main npm registry.[20]

The registry does not have any vetting process for submission, which means that packages found there can potentially be low quality, insecure, or malicious.[19] Instead, npm relies on user reports to take down packages if they violate policies by being low quality, insecure, or malicious.[21] npm exposes statistics including number of downloads and number of depending packages to assist developers in judging the quality of packages.[22]

Internally npm relies on the NoSQL Couch DB to manage publicly available data.[23]

Security and disruption
แก้ไข

left-pad
แก้ไข
Main article: npm left-pad incident
In March 2016, a package called left-pad was unpublished as the result of a naming dispute between Azer Koçulu, an individual software engineer, and Kik.[24][25] The package was immensely popular on the platform, being depended on by thousands of projects and reaching 15 million downloads prior to its removal.[24][26] Several projects critical to the JavaScript ecosystem including Babel and Webpack depended on left-pad and were rendered unusable.[27] Although the package was republished three hours later,[28] it caused widespread disruption, leading npm to change its policies regarding unpublishing to prevent a similar event in the future.[29]

peacenotwar
แก้ไข
Main article: peacenotwar
In March 2022, developer Brandon Nozaki Miller, maintainer of the node-ipc package, added peacenotwar as a dependency to the package; peacenotwar recursively overwrites an affected machine's hard drive contents with the heart emoji if they have a Belarusian or Russian IP address. The package also leaves a text file on the machine containing a message in protest of the Russian invasion of Ukraine. Vue.js, which uses node-ipc as a dependency, did not pin its dependencies to a safe version, meaning that some users of Vue.js became affected by the malicious package if the dependency was fetched as the latest package.[30][31] The affected dependency was also briefly present in version 3.1 of Unity Hub; a hotfix was released the same day to remove the issue, however.[32]

Other notable incidents
แก้ไข
In November 2018, it was discovered that a malicious package had been added as a dependency to version 3.3.6 of the popular package event-stream.[33] The malicious package, called flatmap-stream, contained an encrypted payload that stole bitcoins from certain applications.[34]

In May 2021, pac-resolver, an npm package that received over 3 million downloads per week, was discovered to have a remote code execution vulnerability.[35] The vulnerability resulted from how the package handed config files, and was fixed in versions 5 and greater.[36]

In January 2022, the maintainer of the popular package colors pushed changes printing garbage text in an infinite loop.[26] The maintainer also cleared the repository of another popular package, faker, and its package on npm, and replaced it with a README that read, "What really happened to Aaron Swartz?"[37]

In May 2023, several npm packages including bignum were found to be exploited, stealing user credentials and information from affected machines. Researchers discovered that these packages had been compromised through an exploit involving Amazon S3 buckets and the node-gyp command line tool.[38]

Alternatives
แก้ไข
There are a number of open-source alternatives to npm for installing modular JavaScript, including pnpm, Yarn,[39] Bun and Deno. Deno and Bun also provide a JavaScript runtime, while only Deno operates independently from NPM Registry or any centralized repository[40] and its support of NPM registry is still a subject of ongoing work in progress as of January 2024.[41] They are all compatible with the public npm registry and use it by default, but provide different client-side experiences, usually focused on improving performance and determinism compared to the npm client.[42]

See also
แก้ไข
	Free and open-source software portal
Software repository
pnpm
yarn (package manager)
References
แก้ไข
 "Microsoft-owned GitHub to acquire JavaScript package manager Npm". GeekWire. 17 March 2020.
 "Earliest releases of npm". GitHub. Retrieved 5 January 2019.
 "Release 10.8.3". 28 August 2024. Retrieved 22 September 2024.
 Dierx, Peter (30 March 2016). "A Beginner's Guide to npm – the Node Package Manager". sitepoint. Retrieved 22 July 2016.
 "npm". npm. 15 May 2024. Archived from the original on 14 May 2024.
 Schlueter, Isaac Z. (25 March 2013). "Forget CommonJS. It's dead. **We are server side JavaScript.**". GitHub.
 "NPM/Cli". GitHub.
 Chan, Rosalie. "Bryan Bogensberger, CEO of JavaScript Package Startup NPM, Resigns". Business Insider. Business Insider. Retrieved 30 June 2021.
 Chan, Rosalie. "NPM Co-Founder and Chief Data Officer Laurie Voss Resigns". Business Insider. Business Insider. Retrieved 30 June 2021.
 Ellingwood, Justin. "How To Use npm to Manage Node.js Packages on a Linux Server". DigitalOcean. Retrieved 22 October 2016.
 "npm-install". docs.npmjs. Retrieved 22 October 2016.
 "semver". docs.npmjs. Archived from the original on 3 December 2016. Retrieved 22 October 2016.
 "npm-version". docs.npm. Retrieved 29 October 2016.
 Koirala, Shivprasad (21 August 2017). "What is the need of package-lock.json in Node?". codeproject.
 Ampersand.js. "Ampersand.js – Learn". ampersandjs.com. Retrieved 22 July 2016.
 "Critical Linux filesystem permissions are being changed by latest version". GitHub. Retrieved 25 February 2018.
 npm. "'npm audit': identify and fix insecure dependencies". The npm Blog. Retrieved 14 August 2018.
 npm. "The Node Security Platform service is shutting down 9/30". The npm Blog. Retrieved 14 August 2018.
 Ojamaa, Andres; Duuna, Karl (2012). "Assessing the Security of Node.js Platform". 2012 International Conference for Internet Technology and Secured Transactions. IEEE. ISBN 978-1-4673-5325-0. Retrieved 22 July 2016.
 "npm | Home". npmjs.com. Retrieved 27 June 2024.
 "npm Code of Conduct: acceptable package content". Retrieved 9 May 2017.
 Vorbach, Paul. "npm-stat: download statistics for NPM packages". npm-stat.com. Archived from the original on 11 August 2016. Retrieved 9 August 2016.
 "registry | npm Docs". docs.npmjs.com. Retrieved 10 May 2021.
 Williams, Chris. "How one developer just broke Node, Babel and thousands of projects in 11 lines of JavaScript". The Register. Retrieved 17 April 2016.
 Collins, Keith (27 March 2016). "How one programmer broke the internet by deleting a tiny piece of code". Quartz. Retrieved 23 December 2020.
 Sharma, Ax (27 July 2022). "Protestware on the rise: Why developers are sabotaging their own code". TechCrunch. Retrieved 11 May 2024.
 "How 17 Lines of Code Took Down Silicon Valley's Hottest Startups". HuffPost. 24 March 2016. Retrieved 11 May 2024.
 "kik, left-pad, and npm". Retrieved 9 May 2017.
 "changes to unpublish policy". npm Blog (Archive). Retrieved 23 January 2022.
 "BIG sabotage: Famous npm package deletes files to protest Ukraine war". Bleeping Computer. Retrieved 17 March 2022.
 Juha Saarinen (17 March 2022). "'Protestware' npm package dependency labelled supply-chain attack". IT News. nextmedia.
 Proven, Liam (18 March 2022). "JavaScript library updated to wipe files from Russian computers". The Register. Situation Publishing. Archived from the original on 18 March 2022. Retrieved 18 March 2022.
 Goodin, Dan (26 November 2018). "Widely used open source software contained bitcoin-stealing backdoor". Ars Technica. Retrieved 11 May 2024.
 Claburn, Thomas. "Check your repos... Crypto-coin-stealing code sneaks into fairly popular NPM lib (2m downloads per week)". www.theregister.com. Retrieved 11 May 2024.
 Sharma, Ax (2 September 2021). "NPM package with 3 million weekly downloads had a severe vulnerability". Ars Technica. Retrieved 11 May 2024.
 Claburn, Thomas. "JavaScript library downloaded 3m times a week exposes apps to hijacking via evil proxy configs". www.theregister.com. Retrieved 11 May 2024.
 "Dev corrupts NPM libs 'colors' and 'faker' breaking thousands of apps". Bleeping Computer. Retrieved 9 January 2022.
 Burt, Jeff. "Hijacked S3 buckets used in attacks on npm packages". www.theregister.com. Retrieved 11 May 2024.
 "Hello, Yarn!". The npm Blog. 11 October 2016. Retrieved 17 December 2016.
 "Managing Dependencies". Deno Docs. Retrieved 6 January 2024.
 "Node and npm modules | Deno Docs". docs.deno.com. Retrieved 16 January 2024.
 Katz, Yehuda (11 October 2016). "Why I'm working on Yarn". Retrieved 17 December 2016.
External links
แก้ไข
Official website
หมวดหมู่ (++): Command-line software (−) (±)Free package management systems (−) (±)Free software programmed in JavaScript (−) (±)JavaScript programming tools (−) (±)Microsoft free software (−) (±)Software using the Artistic license (−) (±)2010 software (−) (±)(+)
