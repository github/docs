---
title: Transcript - "Codespaces - Your instant dev box in the cloud"
intro: Audio and visual transcript.
shortTitle: Codespaces
allowTitleToDifferFromFilename: true
product_video: 'https://www.youtube-nocookie.com/embed/_W9B7qc9lVc'
topics:
  - Transcripts
versions:
  fpt: '*'
  ghec: '*'
---

[A developer wearing a blue t-shirt sits at home, behind a mic and a pop shield decorated with GitHub's Octocat logo. The developer shares their screen while still showing on webcam in the upper-right corner. On their screen, they are looking at a GitHub repository called "js-project".]

Developer: So, today we're gonna run my JavaScript project in GitHub Codespaces.

[On the repository page, above the list of files, the developer selects the "Code" button to open a dropdown menu. They click "Open with Codespaces", then click "New codespace".]

Developer: So while we're creating our codespace, you might have the question, "What even is a codespace?"

[In the browser, the codespace loads. On a white background, the text "Preparing your codespace" is displayed below GitHub's Octocat logo and a VS Code logo.]

Developer: A codespace is an instant cloud developer environment, where we can run, test, debug, push: everything that we're used to doing in a development environment, but without any of the machine setup we're used to doing locally.

[The codespace opens in the VS Code web editor in the browser, running with the dark theme. Directories and files from the repository are displayed in the left sidebar. In an integrated terminal, a message says, "Welcome to Codespaces," and lists included runtimes and tools.]

Developer: So when we create this codespace, you'll see we land in a machine that is already set up, and it has Python, Node, Docker, and even more, so it has tools like Java and Rust and Go and C++.

But you'll see we landed in the default image. The great thing about Codespaces is you can fully customize your setup, not only for you, but for everyone else who comes along in this repository. So you can have a "config-as-code" setup that allows you to use your own image, or Dockerfile, or Docker Compose.

So for our app, we're actually just gonna go ahead and start it up. So I'm gonna run `npm start` here, and you'll see that we're told our app is running on port 3000, and we can open it in the browser and connect securely to a forwarded port that has our app fully up and running.

[A popup is displayed for the forwarded port. On the popup, the developer clicks a button labeled "Open in browser". A new browser tab opens showing a web page titled "Haikus for Mona". On the web page, a cartoon image shows a grinning Mona the Octocat skipping over a puddle with a purple umbrella. Below the image, a haiku: "Rain in Seattle. Don't forget an umbrella, or it will be gloom."]

Developer: So you'll see here's my Node app, up and running, connected to in a codespace. And this took us about 60 seconds to get set up in Codespaces.

[The developer scrolls to an image of Mona poking a record player with her tentacle.]

Developer: So you can imagine this fully customized, to really bring down the setup time for really every repository you have.

And that's a quick look at GitHub Codespaces.

End of transcript. For more information about {% data variables.product.prodname_github_codespaces %}, see the [{% data variables.product.prodname_github_codespaces %} documentation](/codespaces).
