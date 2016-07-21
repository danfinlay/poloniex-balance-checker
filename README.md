# Poloniex Balance Checker

A simple script for aggregating your poloniex holdings and logging the balance in BTC.

## Installation
```
npm install
```
Create a `secrets.json` file with a `secret` and `key` for your poloniex API tokens in the root of this directory.

## Usage
```
npm start
```

A `balance.log` file will be created, updated, and printed every time you run this script.

Currently does not total current outstanding orders, so they look like missing funds, so this script (for the moment) works best when you have no outstanding orders.
