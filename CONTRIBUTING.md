# Contributing to Infinity Crypto Services

First off, thank you for considering contributing to Infinity Crypto Services! It's people like you that make Infinity Crypto such a great tool.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Code of Conduct

This project and everyone participating in it is governed by the [Infinity Crypto Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@infinitycrypto.com](mailto:conduct@infinitycrypto.com).

## I don't want to read this whole thing I just have a question!!!

> **Note:** Please don't file an issue to ask a question. You'll get faster results by using the resources below.

We have an official message board with a detailed FAQ and where the community chimes in with helpful advice if you have questions.

* [Infinity Crypto FAQ](https://infinitycrypto.com/faq)
* [Infinity Crypto Telegram Group](https://t.me/InfinityCryptoCommunity)
* [Infinity Crypto Discord](https://discord.gg/infinitycrypto)

## What should I know before I get started?

### Project Structure

Infinity Crypto Services is composed of several key components:

* Smart Contracts (Solidity)
* Backend Server (Node.js)
* Frontend Web Application (React)
* Telegram Bot and Web App Integration

Familiarize yourself with these components before contributing.

### Design Decisions

When we make a significant decision in how we maintain the project and what we can or cannot support, we will document it in the [Infinity Crypto Design Doc](https://github.com/nectariferous/Infinity-Crypto-Services/blob/main/DESIGN.md). If you have a question around how we do things, check to see if it is documented there. If it is *not* documented there, please open a new issue and ask your question.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Infinity Crypto. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

#### Before Submitting A Bug Report

* Check the [debugging guide](https://infinitycrypto.com/debugging).
* Check the [FAQs on the forum](https://forum.infinitycrypto.com) for a list of common questions and problems.
* Determine [which repository the problem should be reported in](https://github.com/nectariferous/Infinity-Crypto-Services).
* Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3AInfinityCrypto) to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on the repository and provide the following information:

* Use a clear and descriptive title for the issue to identify the problem.
* Describe the exact steps which reproduce the problem in as many details as possible.
* Provide specific examples to demonstrate the steps.
* Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.
* Explain which behavior you expected to see instead and why.
* Include screenshots and animated GIFs which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Infinity Crypto, including completely new features and minor improvements to existing functionality.

#### Before Submitting An Enhancement Suggestion

* Check the [debugging guide](https://infinitycrypto.com/debugging) for tips — you might discover that the enhancement is already available.
* Determine [which repository the enhancement should be suggested in](https://github.com/nectariferous/Infinity-Crypto-Services).
* Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3AInfinityCrypto) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on the repository and provide the following information:

* Use a clear and descriptive title for the issue to identify the suggestion.
* Provide a step-by-step description of the suggested enhancement in as many details as possible.
* Provide specific examples to demonstrate the steps.
* Describe the current behavior and explain which behavior you expected to see instead and why.
* Include screenshots and animated GIFs which help you demonstrate the steps or point out the part of Infinity Crypto which the suggestion is related to.
* Explain why this enhancement would be useful to most Infinity Crypto users.
* List some other text editors or applications where this enhancement exists.
* Specify which version of Infinity Crypto you're using.
* Specify the name and version of the OS you're using.

### Your First Code Contribution

Unsure where to begin contributing to Infinity Crypto? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues](https://github.com/nectariferous/Infinity-Crypto-Services/issues?q=is%3Aissue+is%3Aopen+label%3Abeginner) - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues](https://github.com/nectariferous/Infinity-Crypto-Services/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) - issues which should be a bit more involved than `beginner` issues.

#### Local development

Here's how to set up Infinity Crypto Services for local development:

1. Fork the [Infinity-Crypto-Services](https://github.com/nectariferous/Infinity-Crypto-Services) repo on GitHub.
2. Clone your fork locally:
    ```
    git clone https://github.com/your_name_here/Infinity-Crypto-Services.git
    ```
3. Create a branch for local development:
    ```
    git checkout -b name-of-your-bugfix-or-feature
    ```
4. Make your changes locally.
5. Commit your changes and push your branch to GitHub:
    ```
    git add .
    git commit -m "Your detailed description of your changes."
    git push origin name-of-your-bugfix-or-feature
    ```
6. Submit a pull request through the GitHub website.

### Pull Requests

The process described here has several goals:

- Maintain Infinity Crypto's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Infinity Crypto
- Enable a sustainable system for Infinity Crypto's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

### Solidity Styleguide

All Solidity must adhere to [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.17/style-guide.html).

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in.

#### Type of Issue and Issue State

| Label name | Description |
| --- | --- |
| `enhancement` | Feature requests. |
| `bug` | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | General feedback more than bug reports or feature requests. |
| `help-wanted` | The Infinity Crypto core team would appreciate help from the community in resolving these issues. |
| `beginner` | Less complex issues which would be good first issues to work on for users who want to contribute to Infinity Crypto. |
| `more-information-needed` | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | Likely bugs, but haven't been reliably reproduced. |
| `blocked` | Issues blocked on other issues. |
| `duplicate` | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | The Infinity Crypto core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | Issues which aren't valid (e.g. user errors). |

#### Topic Categories

| Label name | Description |
| --- | --- |
| `smart-contract` | Related to Infinity Crypto's smart contracts. |
| `telegram-bot` | Related to the Telegram bot integration. |
| `web-app` | Related to the web application. |
| `documentation` | Related to any type of documentation. |
| `performance` | Related to performance. |
| `security` | Related to security. |
| `ui` | Related to visual design. |
| `crash` | Reports of Infinity Crypto completely crashing. |

Thank you for contributing to Infinity Crypto Services!
