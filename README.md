# CMPM 121 Section Activity starter

This is the Fall 2026 S01 starter for making a small interactive page and learning the path from a local edit to a published site. The course template is public: you do **not** need to join the course GitHub organization. Create a **public** repository under your own GitHub account using the template's **Use this template → Create a new repository** button.

## Set up on your computer

1. Install [Git](https://git-scm.com/downloads) ([Git for Windows](https://gitforwindows.org/) on Windows), [Deno 2.9.7](https://docs.deno.com/runtime/getting_started/installation/), and a code editor. If you use VS Code, install its [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno). Check `git --version` and `deno --version` in a _new_ terminal window after installation.
2. Clone your newly created repository onto your own computer and open that folder in your editor. Do not clone the instructor's template as your submission.
3. Run `deno task setup` from the repository root to enable the pre-commit checks. Use the same command on macOS and Windows, including PowerShell. Run it once for each new clone.
4. Run `deno task dev` and open the local address it prints. Try the button before editing.
5. Make your own change to the button handler in `src/main.ts`. Make its effect visible on the page, test it locally, and run `deno task ci` before committing and pushing to GitHub.
6. Replace this README with a short description of **your** project and what you changed. Keep useful setup instructions if you like.

The project uses [Vite 8.3.1](https://vite.dev/) for local preview and building, [Deno](https://docs.deno.com/runtime/) for TypeScript checks and linting, [GitHub Actions](https://docs.github.com/en/actions) for checks and deployment, and [GitHub Pages](https://docs.github.com/en/pages) to make the page public. `deno task ci` runs formatting, lint, type checks, and a production build. The local pre-commit hook runs the same checks.

## Publish the page

In **your repository**, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. Push a commit to `main`, then check the **Actions** tab for a successful deployment. The published URL should look like `https://<your-username>.github.io/<your-repository>/`. Open it and check that the button works there too. GitHub Actions may need to be enabled on a new repository before the workflow runs.

For S01, submit the **repository URL**, not just the Pages URL, in the Canvas quiz. The teaching team checks the repository, workflow run, published page, code change, and README before awarding credit. If your computer cannot run the project, talk with your TA during section and describe what you tried in your quiz response.
