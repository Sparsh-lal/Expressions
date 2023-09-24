const getSmiley = (emotion) => {
  switch (emotion) {
    case "happy":
      return require("../assets/happy.jpg");

    case "sad":
      return require("../assets/sad.jpg");

    case "surprised":
      return require("../assets/surprised.jpg");

    case "angry":
      return require("../assets/angry.jpg");

    case "neutral":
      return require("../assets/neutral.jpg");

    case "disgusted":
      return require("../assets/disgusted.jpg");

    default:
      return require("../assets/default.jpg");
  }
};

const getDescription = (emotion) => {
  switch (emotion) {
    case "happy":
      return "Embrace joy and let your smile shine. Today is filled with endless possibilities. Feel the warmth in your heart as happiness dances within. Let go of worries and cherish this moment. Surround yourself with loved ones, find beauty in every little thing, and let gratitude overflow. Choose happiness every day. Let your heart be light, your spirit be free, and radiate your inner happiness to the world. So, let your heart be light, your spirit be free, and let the world witness your radiant happiness.";

    case "sad":
      return "In the depths of sadness, remember that you are not alone. Life has its ups and downs, and it's during these moments of sadness that we often grow the most. Allow yourself to process your emotions at your own pace and be gentle with yourself. Just as the rain eventually gives way to the sunshine, know that your sadness will pass, and happiness will find its way back to your heart. You are stronger than you realize, and you will emerge from this chapter with renewed resilience and a deeper appreciation for the beauty of life.";

    case "surprised":
      return "In moments of surprise, let wonder fill your heart. Embrace the unexpected with open arms, for it brings a touch of magic to your life. Let your curiosity guide you on an adventure of discovery and awe. Be open to the surprises that unfold, for they hold the potential to ignite your creativity and expand your perspective. Embrace the element of surprise, for it adds a spark of excitement to your journey. Embrace the unexpected with a smile, knowing that life's surprises can lead you to extraordinary places you never could have imagined. Embrace the joy of being pleasantly surprised, and let it infuse your days with a sense of wonder and delight.";

    case "angry":
      return "In the depths of anger, acknowledge your emotions, but choose your response wisely. Allow the fire within to fuel positive change rather than destructive actions. Take a deep breath and find healthy ways to release the intensity. Channel your anger into passion and determination to make a difference. Seek understanding and work towards resolution, knowing that anger can be a catalyst for positive transformation. Remember that your strength lies in controlling anger rather than letting it control you. Find solace in self-care and seek support from those who can provide guidance and empathy. With time, patience, and a mindful approach, you can harness the power of anger to drive positive change and growth.";

    case "neutral":
      return "In moments of neutrality, find peace in the calmness that surrounds you. Embrace the tranquility and use it as an opportunity to reconnect with yourself. Allow your mind to rest and your thoughts to settle. Appreciate the beauty in simplicity and find contentment in the present moment. Use this neutrality to observe the world around you and gain clarity. Find joy in the ordinary, for it is often the foundation of happiness. Use this neutral state as a chance to recharge, reset, and realign with your true desires and aspirations. Embrace neutrality as a pause before new adventures and discoveries unfold, knowing that within this balance lies the potential for growth and inner harmony.";

    case "disgusted":
      return "In moments of disgust, trust your instincts and honor your boundaries. Allow yourself to express and process your feelings in a healthy way. Disgust can be a signal to protect your well-being and values. Take a step back from what repels you and reevaluate your situation. Focus on cleansing your mind and surroundings, both physically and mentally. Surround yourself with positivity and engage in activities that restore your sense of balance. Use this moment of disgust as an opportunity for personal growth, strengthening your values, and reaffirming what truly matters to you. Trust that by honoring your feelings, you can move forward towards a more authentic and fulfilling life.";

    default:
      return "No face detected";
  }
};

//   switch (emotion) {
//     case "happy":
//       return require("../assets/happy.jpg");

//     case "sad":
//       return require("../assets/sad.jpg");

//     case "surprised":
//       return require("../assets/surprised.jpg");

//     case "angry":
//       return require("../assets/angry.jpg");

//     case "neutral":
//       return require("../assets/neutral.jpg");

//     case "disgusted":
//       return require("../assets/disgusted.jpg");

//     default:
//       return require("../assets/default.jpg");
//   }
// };

const getBgVideo = (emotion) =>{
  switch (emotion) {
    case "happy":
      return require("../assets/happy.mp4");

    case "sad":
      return require("../assets/sad.mp4");

    case "surprised":
      return require("../assets/surprised.mp4");

    case "angry":
      return require("../assets/angry.mp4");

    case "neutral":
      return require("../assets/neutral.mp4");

    case "disgusted":
      return require("../assets/disgusted.mp4");

    default:
      return require("../assets/default.mp4");
  }
}

const getSongs = (emotion) =>{
  switch (emotion) {
    case "happy":
      return "https://open.spotify.com/playlist/37i9dQZF1EVJSvZp5AOML2?si=c38e7c001a424373";

    case "sad":
      return "https://open.spotify.com/playlist/6xdpzgLplPEpny9Tc3PkHG?si=ed34df7c93f6442d";

    case "surprised":
      return "https://open.spotify.com/playlist/6zYTeXJXLHS0OGonG4P0wA?si=c4da80f51ff64872";

    case "angry":
      return "https://open.spotify.com/playlist/609gQW5ztNwAkKnoZplkao?si=b30802a3786f44ca";

    case "neutral":
      return "https://open.spotify.com/playlist/6HmCUFtjSTocAqBp1e3pC6?si=cd1778d2a6f74ea2";

    case "disgusted":
      return "https://open.spotify.com/album/1V3SPr45Sj8uRuAup6Dd2l?si=qiYE45L7Qjiyxgm6SjC3Iw";

    default:
      return "https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8?si=25f7db9f35844332";
  }
}


export default {
  getSmiley,
  getDescription,
  getBgVideo,
  getSongs
};
