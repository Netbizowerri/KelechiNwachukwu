#!/bin/bash
echo "=== Git Status ==="
git status
echo ""
echo "=== Git Remote -v ==="
git remote -v
echo ""
echo "=== Git Log --oneline -5 ==="
git log --oneline -5
echo ""
echo "=== Git Branch -vv ==="
git branch -vv