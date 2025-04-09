/**
 * Image helper utility to handle image paths and placeholders
 * This helps solve the issue of missing images in the project
 */

// Check if an image exists in the public directory, otherwise use a placeholder
const getImagePath = (imagePath, fallbackText) => {
  // For development, we'll just use placeholders
  // In production, you would check if files exist and handle accordingly
  return `https://placehold.co/600x400?text=${fallbackText || 'Ainsley'}`;
  
  // In a real app, you might do something like this:
  // try {
  //   // Try to require the image
  //   const img = require(`/public${imagePath}`);
  //   return img;
  // } catch (error) {
  //   // If image doesn't exist, return a placeholder
  //   return `https://placehold.co/600x400?text=${fallbackText || 'Ainsley'}`;
  // }
};

// Common images used throughout the app
const images = {
  sports: {
    baseball: getImagePath('/assets/images/baseball-ainsley.jpg', 'Baseball'),
    soccer: getImagePath('/assets/images/soccer-ainsley.jpg', 'Soccer'),
    boxing: getImagePath('/assets/images/boxing-ainsley.jpg', 'Boxing'),
    golf: getImagePath('/assets/images/golf-ainsley.jpg', 'Golf'),
    football: getImagePath('/assets/images/football-ainsley.jpg', 'Football'),
  },
  tiers: {
    tier1: {
      base: getImagePath('/assets/images/tier1-baseball.jpg', 'Tier1-Baseball'),
      preview: getImagePath('/assets/images/tier2-preview.jpg', 'Tier2-Preview'),
    },
    tier2: {
      base: getImagePath('/assets/images/tier2-soccer.jpg', 'Tier2-Soccer'),
      preview: getImagePath('/assets/images/tier3-preview.jpg', 'Tier3-Preview'),
    },
    tier3: {
      base: getImagePath('/assets/images/tier3-boxing.jpg', 'Tier3-Boxing'),
    },
  },
  howItWorks: {
    purchase: getImagePath('/assets/images/purchase-nft.jpg', 'Purchase-NFT'),
    select: getImagePath('/assets/images/select-game.jpg', 'Select-Game'),
    predict: getImagePath('/assets/images/get-predictions.jpg', 'Get-Predictions'),
  }
};

export default images;