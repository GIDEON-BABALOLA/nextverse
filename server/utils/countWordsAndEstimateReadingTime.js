function countWordsAndEstimateReadingTime(article) {

    const wordCount = article.split(" ").length;
    // Estimate reading time (words per minute)
    //number of words in the story
// According to research, the average reading speed for adults is around 200-250 words per minute, but this can vary depending on factors such as age and reading experience.
    const wordsPerMinute = 200;
    const readingTimeMinutes = wordCount / wordsPerMinute;

    // Convert reading time to minutes and seconds
    const minutes = Math.ceil(readingTimeMinutes);
    const seconds = Math.floor((readingTimeMinutes - minutes) * 60);

    return {
        readingTime: {
            minutes: minutes,
            seconds: seconds
        }
    };
}

module.exports = { countWordsAndEstimateReadingTime }
