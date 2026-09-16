function blockAds() {
  // 1. Auto-clicks the "Skip Ad" buttons when they appear
  const skipButton = document.querySelector('.ytp-skip-ad-button, .ytp-ad-skip-button-modern');
  if (skipButton) {
    skipButton.click();
    console.log("Ad skipped successfully.");
  }

  // 2. Removes banners, side ads, and sponsored overlays
  const adSelectors = [
    '.video-ads',
    '.ytp-ad-module',
    'ytd-promoted-video-renderer',
    'ytd-display-ad-renderer',
    '#player-ads',
    '#rendering-content .ytd-in-feed-ad-layout-renderer'
  ];

  adSelectors.forEach(selector => {
    const adElements = document.querySelectorAll(selector);
    adElements.forEach(element => element.remove());
  });
}

// Observes the page for dynamic changes to catch ads that load later
const pageObserver = new MutationObserver(blockAds);
pageObserver.observe(document.body, { childList: true, subtree: true });

// Runs the ad blocker as soon as the script loads
blockAds();
