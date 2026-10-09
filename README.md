# EverTrade

A risk management system for tokenized equities trading.

## Problem

Tokenized equities can trade 24/7, while traditional stock markets have fixed trading hours. During market closures or trading halts, on-chain prices can become unreliable, increasing the risk of unfair liquidations and sudden price gaps.

## Proposed Solution

EverTrade aims to improve the safety of tokenized equity trading through an on-chain risk management system.

### Key Features

- **Market Halt Detection:** Detect trading halts and unreliable price feeds.
- **Circuit Breaker:** Restrict trading when reliable price discovery is unavailable.
- **Dynamic Margin:** Adjust margin requirements as market uncertainty increases.
- **Gap Risk Protection:** Reduce exposure to sudden price movements when traditional markets reopen.
- **Funding Rate Safeguards:** Explore safer funding mechanisms for equity perpetuals across market closures.

## Technology Stack

- Solana
- Rust
- Anchor Framework
- Oracle-based price feeds

## Project Status

Concept and proposed design. Implementation and testing are planned for future development.

## Disclaimer

EverTrade is a proposed project concept and is not a deployed financial product.
