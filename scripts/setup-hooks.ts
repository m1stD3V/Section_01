// Run this script with `deno task setup` after cloning the project.
// A Git hook is a script that Git runs automatically at a particular moment.
// Our pre-commit hook checks the project before Git saves a new commit.

console.log("🔧 Setting up Git hooks for CMPM 121...");

// Deno.Command runs another program, so we can use the same setup script on
// macOS and Windows. The task grants permission to run Git with --allow-run=git.
// --local changes only this repository's settings, not your other projects.
// core.hooksPath tells Git where to find the hook scripts we include here.
// The hook is already stored as executable in Git, so no chmod step is needed.
try {
  const result = await new Deno.Command("git", {
    args: ["config", "--local", "core.hooksPath", ".githooks"],
    stdout: "inherit",
    stderr: "inherit",
  }).output();

  // A nonzero exit code means Git could not finish the setup.
  // Stop here so we do not accidentally print a success message.
  if (!result.success) {
    console.error("❌ Git hooks could not be configured.");
    console.error("Run deno task setup inside your cloned project folder.");
    Deno.exit(result.code);
  }
} catch (error) {
  console.error(
    "❌ Could not run Git:",
    error instanceof Error ? error.message : error,
  );
  console.error(
    "Check that Git is installed, then restart your terminal or editor.",
  );
  console.error("You can check the installation with: git --version");
  Deno.exit(1);
}

console.log("✅ Git hooks configured successfully!");
console.log("Before each commit, Git will run deno task ci to check:");
console.log("  📝 Formatting — consistent spacing and layout");
console.log("  🔎 Linting — common coding mistakes");
console.log("  🔍 Types — whether your TypeScript types agree");
console.log("  🏗️ Build — whether the site can be prepared for publishing");
console.log(
  "If a check fails, fix the reported issue and try your commit again.",
);
console.log("You can run these checks yourself at any time with: deno task ci");
