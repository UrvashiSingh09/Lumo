from textblob import TextBlob

def analyze_emotion(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    if polarity > 0.3:
        return "happy"
    elif polarity < -0.3:
        return "stress"
    else:
        return "neutral"

if __name__ == "__main__":
    text = input("Write your journal note: ")
    mood = analyze_emotion(text)
    print("Detected Mood:", mood)
