#!/usr/bin/env node
/**
 * Setup script for icplus-sim: ensures Stripe CLI is available,
 * installs the Stripe Apps plugin, and runs stripe login.
 * Run via: npm run setup
 */
const { execSync, spawnSync } = require("child_process");

const STRIPE_CLI_URL = "https://stripe.com/docs/stripe-cli";
const APPS_DOCS_URL = "https://docs.stripe.com/stripe-apps/reference/cli";

function checkStripeCli() {
  try {
    const out = execSync("stripe --version", { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"] });
    const version = (out || "").trim();
    console.log("✓ Stripe CLI found:", version);
  } catch {
    console.error("\n❌ Stripe CLI is not installed or not in your PATH.");
    console.error("   Install it from:", STRIPE_CLI_URL);
    console.error("   Then run: npm run setup\n");
    process.exit(1);
  }
}

function installAppsPlugin() {
  console.log("\nInstalling Stripe Apps CLI plugin...");
  const r = spawnSync("stripe", ["plugin", "install", "apps"], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (r.status !== 0) {
    console.error("\n❌ Failed to install Stripe Apps plugin. Run manually: stripe plugin install apps");
    console.error("   See:", APPS_DOCS_URL);
    process.exit(1);
  }
  console.log("✓ Stripe Apps plugin ready.\n");
}

function stripeLogin() {
  console.log("Running stripe login (browser may open)...");
  const r = spawnSync("stripe", ["login"], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (r.status !== 0) {
    console.error("\n⚠️  stripe login did not complete. Run manually: stripe login");
    process.exit(1);
  }
  console.log("✓ Logged in to Stripe.\n");
}

function main() {
  console.log("=== icplus-sim setup ===\n");
  checkStripeCli();
  installAppsPlugin();
  stripeLogin();
  console.log("Setup complete. Run: npm start\n");
}

main();
