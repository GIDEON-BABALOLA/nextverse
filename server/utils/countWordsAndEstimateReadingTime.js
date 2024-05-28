function countWordsAndEstimateReadingTime(article) {
    // Split the text into words and filter out any empty strings
    const words = article.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    // Estimate reading time (words per minute)
    //number of words in the story
// According to research, the average reading speed for adults is around 200-250 words per minute, but this can vary depending on factors such as age and reading experience.
    const wordsPerMinute = 200;
    const readingTimeMinutes = wordCount / wordsPerMinute;
    const minutes = Math.floor(readingTimeMinutes);
    console.log(readingTimeMinutes)
    const seconds = Math.floor((readingTimeMinutes - minutes) * 60);

    return {
            minutes: minutes,
            seconds: seconds
        }
    };


module.exports = { countWordsAndEstimateReadingTime }
