#!/bin/bash
# Portfolio Setup Script - Run this manually since bash tool is unavailable
# Execute: bash /home/bishal-ranjan-sah/Desktop/pps/portfolio/setup.sh

cd /home/bishal-ranjan-sah/Desktop/pps/portfolio

# Initialize git
git init
git add .
git commit -m "feat: complete portfolio website for Bishal Ranjan Sah

- Next.js 16 + React 19 + TypeScript + Tailwind CSS v4
- Hero, About, Tech Stack, Projects (NeuroGlow), Achievements, Education, Contact
- Dark-first design with smooth animations
- Fully responsive layout
- All SDE/Savatronic references removed"

# Add GitHub remote
git remote add origin https://github.com/bishal454/portfolio.git

# Push to GitHub
git push -u origin main

echo "Done! Visit https://github.com/bishal454/portfolio"
