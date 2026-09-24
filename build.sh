#!/bin/bash
cd /home/bishal-ranjan-sah/Desktop/pps/portfolio
npm install 2>&1
npx next build 2>&1
npx next dev --port 3000 2>&1
