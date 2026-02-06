# IC+ Fee Simulator (icplus-sim)

Stripe App that generates activity reports with simulated IC+ (Interchange Plus) fee breakdowns. **Standalone project** — config and dependencies live only inside this folder.

## One-time setup

**If you do not have the Stripe CLI or the Stripe Apps plugin installed**, use full setup:

```bash
cd icplus-sim
npm run setup
```

Otherwise you may do a lighter install:

```bash
cd icplus-sim
npm install
```

**What `npm run setup` does:**

1. Install npm dependencies (app + backend)
2. Check that the [Stripe CLI](https://stripe.com/docs/stripe-cli) is installed (exits with instructions if not)
3. Install the Stripe Apps CLI plugin (`stripe plugin install apps`)
4. Run `stripe login` (browser may open to authenticate)

If the Stripe CLI is missing, install it from https://stripe.com/docs/stripe-cli, then run `npm run setup` again.

## Config (inside this project only)

All config is in **this folder**. The backend reads `config.json` at the project root (icplus-sim/config.json).

- **API key:** `STRIPE_API_KEY` env → `stripe_api_key` in `config.json` → **Stripe CLI** (`stripe login`). No key in code; run `stripe login` and you’re set.
- Optional: copy `config.example.json` to `config.json` and add your `stripe_api_key` if you don’t use the CLI.

## Run

```bash
npm start
```

Starts backend (port 4243) and Stripe App frontend.
