[![Build Status](https://travis-ci.org/samhstn/travis_jest_postgres_demo.svg?branch=master)](https://travis-ci.org/samhstn/travis_jest_postgres_demo)

# Travis Jest Postgres Demo

### Quick Start

```bash
# Clone the repo
git clone git@github.com:samhstn/travis_jest_postgres_demo.git \
  && cd travis_jest_postgres_demo

# Set up local dev and test databases
psql -c 'create database travis_jest_postgres_demo_dev;' -U postgres
psql -c 'create database travis_jest_postgres_demo_test;' -U postgres

# Install the dependencies
npm install

# Run the tests
npm test

# Start the application
npm start
```
