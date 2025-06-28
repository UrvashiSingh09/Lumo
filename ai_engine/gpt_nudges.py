def get_nudge(emotion):
    if emotion == 'happy':
        return "Keep celebrating, but balance joy with planning."
    elif emotion == 'stress':
        return "Stress spending happens. Be kind to yourself. 💛"
    elif emotion == 'impulse':
        return "Try a 5-minute pause before next impulse buy."
    else:
        return "Great job tracking your mood and money!"

if __name__ == "__main__":
    mood = input("Enter emotion (happy/stress/impulse/neutral): ")
    print("AI Nudge:", get_nudge(mood))
