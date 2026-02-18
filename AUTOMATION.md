# Daily Quiz Update Automation

## Overview

This repository includes automated daily updates to quiz questions using GitHub Actions and a custom Copilot agent.

## How It Works

### The Workflow

The workflow is defined in `.github/workflows/daily-quiz-update.yml` and:

1. **Runs automatically every day at 2:00 AM UTC**
   - Uses a cron schedule: `0 2 * * *`
   - Can be adjusted to run at different times or intervals

2. **Can be triggered manually**
   - Go to the "Actions" tab in your repository
   - Select "Daily Quiz Update" workflow
   - Click "Run workflow" button

3. **Executes the RefreshQuestions agent**
   - The agent is defined in `.github/agents/RefreshQuestions.md`
   - Generates 20 new questions daily across all categories
   - Adds a "Category of the Day" for variety

### The Custom Agent

The `RefreshQuestions` agent (`.github/agents/RefreshQuestions.md`) is responsible for:
- Generating fresh quiz questions
- Covering all existing categories (Math, Science, Geography, English)
- Adding interesting daily categories
- Maintaining question quality and educational value

## Customization

### Change the Schedule

Edit `.github/workflows/daily-quiz-update.yml` and modify the cron expression:

```yaml
schedule:
  - cron: '0 2 * * *'  # Daily at 2:00 AM UTC
```

Common cron patterns:
- `0 */6 * * *` - Every 6 hours
- `0 0 * * 0` - Weekly on Sundays at midnight
- `0 12 * * 1-5` - Weekdays at noon

### Modify the Agent Behavior

Edit `.github/agents/RefreshQuestions.md` to change:
- Number of questions generated
- Categories to focus on
- Question difficulty levels
- Special themed days

## Manual Execution

To run the update manually:

1. Navigate to the repository on GitHub
2. Click on the "Actions" tab
3. Select "Daily Quiz Update" from the workflows list
4. Click "Run workflow" dropdown
5. Click the green "Run workflow" button

## Requirements

The workflow requires:
- GitHub Actions enabled on your repository
- Appropriate permissions for the GITHUB_TOKEN (automatically provided)
- The custom agent defined in `.github/agents/RefreshQuestions.md`

## Monitoring

To check if the workflow is running correctly:

1. Go to the "Actions" tab
2. Look for "Daily Quiz Update" workflow runs
3. Click on any run to see details and logs
4. Green checkmarks indicate successful runs

## Troubleshooting

If the workflow doesn't run:
- Check that GitHub Actions is enabled for the repository
- Verify the cron schedule is correct
- Ensure the custom agent file exists at `.github/agents/RefreshQuestions.md`
- Check workflow permissions in repository settings

## Benefits

- ✅ **Automated**: No manual intervention needed
- ✅ **Consistent**: Runs reliably on schedule
- ✅ **Fresh Content**: New questions keep users engaged
- ✅ **Flexible**: Easy to customize schedule and behavior
- ✅ **Transparent**: All runs are logged and visible in Actions tab
