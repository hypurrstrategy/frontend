// Twitter sharing utility inspired by miladystrategy.fun approach

// Generate random user ID between 1 and 10000
const getRandomUserId = () => {
  const randomId = Math.floor(Math.random() * 10000) + 1;
  // Store for potential display (optional)
  localStorage.setItem('hypurr_last_id', randomId.toString());
  return randomId;
};

export const generateTwitterUrl = () => {
  const userId = getRandomUserId();
  
  const tweetText = `Aligned with Hypurr Pump Machine.

ID: #${userId}

@HypurrStrategy_ $HYPSTR

Hypurr.`;

  const encodedText = encodeURIComponent(tweetText);
  return `https://twitter.com/intent/tweet?text=${encodedText}`;
};

export const openTwitterShare = () => {
  const twitterUrl = generateTwitterUrl();
  window.open(twitterUrl, '_blank');
};

// Alternative: redirection directe comme certains sites (plus agressif)
export const redirectToTwitter = () => {
  const twitterUrl = generateTwitterUrl();
  window.location.href = twitterUrl;
};

// Direct redirect like miladystrategy.fun style
export const redirectToTwitterShare = () => {
  const twitterUrl = generateTwitterUrl();
  window.location.href = twitterUrl;
};

// Get last generated ID (for display purposes)
export const getLastGeneratedId = () => {
  const lastId = localStorage.getItem('hypurr_last_id');
  return lastId ? parseInt(lastId) : Math.floor(Math.random() * 10000) + 1;
};

// Clear last ID (for testing purposes)
export const clearLastId = () => {
  localStorage.removeItem('hypurr_last_id');
};
