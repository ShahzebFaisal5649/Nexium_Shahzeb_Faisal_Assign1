/* eslint-disable @typescript-eslint/no-require-imports */
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs').promises;

async function runLighthouseAudit() {
  console.log('🚀 Starting Lighthouse accessibility audit...');
  
  // Launch Chrome
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['accessibility'],
    port: chrome.port,
  };
  
  try {
    // Run audit
    const runnerResult = await lighthouse('http://localhost:3000', options);
    
    // Save report
    const reportHtml = runnerResult.report;
    await fs.writeFile('accessibility-report.html', reportHtml);
    
    // Log results
    const score = runnerResult.lhr.categories.accessibility.score * 100;
    console.log(`✅ Accessibility Score: ${score}/100`);
    console.log('📋 Report saved to: accessibility-report.html');
    
    // Check for specific issues
    const audits = runnerResult.lhr.audits;
    const failedAudits = Object.keys(audits)
      .filter(key => audits[key].score !== null && audits[key].score < 1)
      .map(key => ({
        id: key,
        title: audits[key].title,
        description: audits[key].description
      }));
    
    if (failedAudits.length > 0) {
      console.log('\n⚠️  Issues found:');
      failedAudits.forEach(audit => {
        console.log(`- ${audit.title}`);
      });
    } else {
      console.log('\n🎉 All accessibility checks passed!');
    }
    
  } catch (error) {
    console.error('❌ Error running audit:', error);
  } finally {
    await chrome.kill();
  }
}

// Add to package.json scripts
if (require.main === module) {
  runLighthouseAudit();
}