---
title: Using your GitHub profile to enhance your resume
intro: 'Demonstrate your skills to hiring managers with your {% data variables.product.github %} profile.'
versions:
  fpt: '*'
topics:
  - Profiles
shortTitle: Enhance your resume
---

## How can my {% data variables.product.github %} profile help with my job search?

When you include a link to your {% data variables.product.github %} profile in your resume, you showcase your skills and experience to potential employers. In this article, you'll find practical tips for preparing your {% data variables.product.github %} profile for a job search.

After you complete these steps, you can be confident that hiring managers will have a good sense of your technical skills when they are reviewing your {% data variables.product.github %} profile.

## Step 1: Create a professional bio

Your bio is a sentence or two that appears under your profile picture. Use your bio to give potential employers a high-level overview of who you are and what kind of work you're looking for.

Navigate to your [profile settings](https://github.com/settings/profile) to update your bio. Keep this description short and concise. Consider something like, "Hello! My name is Mona and I'm looking for work as a front end developer."

> [!NOTE] While you're here, you can update the rest of your profile settings. Consider including a profile picture, a link to your personal website or portfolio, and links to your social profiles.

## Step 2: Create a profile README

Compared to your bio, your profile README is more flexible, allowing for more creativity. You can write more in your profile README to showcase your skills and interests.

Things you may want to add to your profile README include:

* **An introduction**: Write a brief introduction of yourself and your professional background.
* **Skills**: List your technical skills, including any programming languages, frameworks, and tools you are proficient in.
* **Professional experience**: Describe where you've worked before and what sort of professional skills you've built. These can even be non-technical skills, such as communication and empathy.
* **Some of your best projects**: Describe some projects you're proud of. You'll also pin these repositories later, but your README gives you a chance to provide more commentary.
* **Achievements or awards**: Show off any of your achievements, including certifications or awards you've received for your work.

To create your profile README, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme).

> [!NOTE] Updating and customizing your profile README also helps demonstrate fluency using Markdown and HTML, which are useful skills for technical jobs. To show off your skills for potential employers, look for ways to use more advanced Markdown or HTML elements in your profile README.

## Step 3: Showcase your best projects

Pick 3-5 projects to highlight by "pinning" them on your profile. Repositories you pin will be prominently displayed, allowing you to direct hiring managers' attention to the projects you're most proud of.

For the best chances at an interview, pick projects that show your diverse skills and are relevant to your specific job search. If possible, pin some projects you created and some that you contributed to:

* Projects you own are fully under your control, so you can improve them using of the steps below.
* Open source projects highlight your ability to collaborate with others.

To pin the repositories, click **Customize your pins** in the "Popular repositories" section of your profile.

## Step 4: Improve your showcased projects

Hiring managers usually consider many applicants for each role. Expect that they will only look at your projects for a couple minutes. To give the best impression during this brief time, you should make your projects easy to understand and explore.

### Write a helpful README

The README for your project's repository is a perfect space to give a concise project overview. Use [{% data variables.product.prodname_copilot_chat_short %}](https://github.com/copilot) to help write your README, with a prompt like this:

>Write a README for my lottery-number-generator repository.

Then, copy the response into a `README.md` file in the root of the repository, editing as needed. Helpful READMEs include:

* A list of key features of the project
* Details on how to set up and run the project
* An example or demo of the project
* Instructions on testing your code

### Update the repository details

On the main page of the repository, to the right of "About," click {% octicon "gear" aria-label="Edit repository metadata" %}. Here, you can provide information that helps hiring managers quickly understand the project:
* A brief description of your project
* A website where you can see the project in action
* Topic tags that categorize your project

### Make the code easy to understand

To give the best impression, you'll want to make sure that hiring managers can understand your project quickly. Follow these best practices:

* Maintain a **consistent coding style** throughout the project
* Use **descriptive** file and directory names
* Use helpful **comments and documentation** for any complex or important snippets
* Refine your code according to popular **style guides**
* **Simplify** complex functions, break down large classes, and remove redundant code
* Provide **tests** to validate that your code is working as expected

The easiest way to follow these practices is to use {% data variables.product.prodname_copilot_short %} with {% data variables.product.prodname_vscode_shortname %}. See [Set up Visual Studio Code with Copilot](https://code.visualstudio.com/docs/copilot/setup-simplified) in the {% data variables.product.prodname_vscode_shortname %} documentation.

### Update your project's dependencies

If your project has any dependencies, you can showcase your understanding of security best practices by ensuring you're using the **latest versions**.

You can automate this process with {% data variables.product.prodname_dependabot %}, which generates pull requests that update your project to new versions as they become available. See [AUTOTITLE](/code-security/getting-started/dependabot-quickstart-guide).

## Step 5: Share your results

Your profile is now ready to be included on your resume! The changes you made today will have a big impact on your job search and will make your {% data variables.product.github %} profile stand out to hiring managers.

Share your updated profile and get inspiration from others in our [Community discussion](https://github.com/orgs/community/discussions/150827).

## Further reading

* [AUTOTITLE](/copilot/copilot-chat-cookbook/refactoring-code/improving-code-readability-and-maintainability)
