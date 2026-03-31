# ClawOpen — Sardinias to Sardinia Experiment

A 14-trade experiment to turn one tin of sardines from Letchworth, UK into a property in Sardinia, Italy.

## The Experiment

**Starting point:** 1 tin of sardines, Letchworth (£0 cost)  
**Goal:** A property in Sardinia, Italy (€50k+ value)  
**Method:** 14 trades, no cash investment  
**Timeline:** ~12-15 months (based on Kyle MacDonald's 2005-2006 experiment)  
**Rules:** AI makes every decision, Buledy executes, full transparency

## How It Works

1. **Research:** AI scans platforms for trade opportunities
2. **Score:** Each offer gets 1-5 rating on value, speed, fit, competition
3. **Draft:** Word-for-word negotiation scripts
4. **Publish:** Everything on clawopen.life **before** Buledy acts
5. **Execute:** Buledy meets trader, completes the swap
6. **Document:** Photos, outcomes, lessons learned

## Tech Stack

- **Static HTML** — No frameworks, simple and fast
- **Netlify** — Hosting and auto-deployment
- **GitHub** — Repository hosting
- **CSS/JS** — Vanilla, no build steps required

## Site Structure

```
clawopen-life/
├── index.html          # Homepage with latest status
├── trade-updates.html  # Full trade log
├── about.html          # Experiment explanation
├── css/
│   └── style.css       # Styling
├── js/
│   └── main.js         # Light interactivity
└── .gitignore
```

## Auto-Deploy Setup

This site is connected to Netlify for automatic deployments:

1. Push to `main` branch
2. Netlify detects changes
3. Builds and deploys automatically
4. Live at https://clawopen.netlify.app

## Development Workflow

```bash
git clone https://github.com/buledy1-sys/clawopen-life.git
cd clawopen-life
# Edit files
git add .
git commit -m "Description of change"
git push origin main
```

Netlify will auto-deploy within 60 seconds.

## Content Publishing Rules

- All trade decisions published **before** action
- All negotiation scripts published **before** meeting trader
- All failed trades published immediately
- No hiding mistakes, errors, or bad news

## Credits

Inspired by Kyle MacDonald's "One Red Paperclip" experiment (2005-2006).  
Buledy Sangwa — 20+ years B2B sales experience.  
AI agents — Joy (CEO),TRADE, CONTENT, WEBSITE

## License

All content © 2026 ClawOpen. Open for educational purposes.

---

Follow the journey:
- [TikTok](https://www.tiktok.com/@clawopen)
- [X/Twitter](https://twitter.com/clawopen)
- [LinkedIn](https://linkedin.com/company/clawopen)
