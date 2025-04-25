// =======================
// Random Word List
// =======================
const WORDS = [
    // Common verbs
    "run", "walk", "jump", "swim", "fly", "eat", "drink", "read", "write", "speak",
    "listen", "think", "learn", "teach", "work", "play", "sleep", "wake", "drive", "buy",
    "sell", "give", "take", "make", "break", "fix", "try", "fail", "succeed", "love",
    
    // Nouns (objects)
    "book", "pen", "computer", "phone", "table", "chair", "door", "window", "car", "bike",
    "tree", "flower", "house", "building", "road", "street", "city", "country", "world", "universe",
    "dog", "cat", "bird", "fish", "animal", "person", "man", "woman", "child", "friend",
    
    // Adjectives
    "happy", "sad", "angry", "excited", "bored", "tired", "energetic", "big", "small", "tall",
    "short", "long", "wide", "narrow", "heavy", "light", "dark", "bright", "colorful", "plain",
    "fast", "slow", "hot", "cold", "warm", "cool", "new", "old", "young", "ancient",
    
    // Food items
    "apple", "banana", "orange", "grape", "strawberry", "watermelon", "bread", "cheese", "milk", "egg",
    "rice", "pasta", "pizza", "hamburger", "salad", "soup", "coffee", "tea", "juice", "water",
    
    // Nature words
    "sun", "moon", "star", "sky", "cloud", "rain", "snow", "wind", "storm", "earth",
    "mountain", "river", "lake", "ocean", "forest", "desert", "island", "valley", "cave", "beach",
    
    // Technology terms
    "internet", "website", "application", "software", "hardware", "database", "network", "server", "code", "program",
    "algorithm", "data", "information", "system", "device", "screen", "keyboard", "mouse", "printer", "scanner",
    
    // Emotions and feelings
    "joy", "sorrow", "fear", "surprise", "disgust", "trust", "anticipation", "anger", "sadness", "happiness",
    "loneliness", "excitement", "peace", "anxiety", "calm", "stress", "relief", "hope", "despair", "contentment",
    
    // Academic subjects
    "mathematics", "science", "biology", "chemistry", "physics", "history", "geography", "literature", "art", "music",
    "philosophy", "psychology", "sociology", "economics", "business", "engineering", "medicine", "law", "politics", "language",
    
    // Transportation
    "airplane", "train", "bus", "ship", "boat", "subway", "taxi", "truck", "motorcycle", "bicycle",
    "helicopter", "rocket", "submarine", "carriage", "scooter", "skateboard", "ambulance", "firetruck", "police", "tractor",
    
    // Clothing
    "shirt", "pants", "dress", "skirt", "jacket", "coat", "sweater", "hat", "shoes", "socks",
    "gloves", "scarf", "tie", "belt", "jeans", "shorts", "underwear", "pajamas", "uniform", "costume",
    
    // Colors
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white",
    "gray", "silver", "gold", "maroon", "navy", "teal", "lime", "olive", "violet", "indigo",
    
    // Time-related
    "second", "minute", "hour", "day", "week", "month", "year", "decade", "century", "millennium",
    "morning", "afternoon", "evening", "night", "midnight", "dawn", "dusk", "today", "yesterday", "tomorrow",
    
    // Family
    "mother", "father", "parent", "son", "daughter", "child", "brother", "sister", "grandmother", "grandfather",
    "aunt", "uncle", "cousin", "niece", "nephew", "husband", "wife", "spouse", "family", "relative",
    
    // Body parts
    "head", "hair", "face", "eye", "nose", "mouth", "ear", "neck", "shoulder", "arm",
    "hand", "finger", "leg", "foot", "toe", "chest", "back", "stomach", "heart", "brain",
    
    // Weather
    "sunny", "cloudy", "rainy", "stormy", "windy", "snowy", "foggy", "humid", "dry", "clear",
    "lightning", "thunder", "hail", "drizzle", "breeze", "hurricane", "tornado", "flood", "drought", "frost",
    
    // Professions
    "doctor", "nurse", "teacher", "engineer", "scientist", "artist", "musician", "writer", "actor", "director",
    "chef", "police", "firefighter", "soldier", "pilot", "driver", "farmer", "builder", "manager", "lawyer",
    
    // Sports
    "soccer", "basketball", "tennis", "baseball", "golf", "swimming", "running", "cycling", "boxing", "volleyball",
    "hockey", "cricket", "rugby", "badminton", "skiing", "snowboarding", "surfing", "wrestling", "gymnastics", "athletics",
    
    // Household items
    "bed", "sofa", "table", "chair", "lamp", "clock", "mirror", "picture", "carpet", "curtain",
    "pillow", "blanket", "broom", "mop", "vacuum", "dish", "cup", "plate", "fork", "spoon",
    
    // Animals
    "lion", "tiger", "elephant", "giraffe", "zebra", "monkey", "kangaroo", "panda", "bear", "wolf",
    "fox", "deer", "rabbit", "squirrel", "mouse", "rat", "horse", "cow", "pig", "sheep",
    
    // Countries
    "usa", "canada", "mexico", "brazil", "argentina", "france", "germany", "italy", "spain", "portugal",
    "england", "china", "japan", "india", "russia", "australia", "egypt", "southafrica", "nigeria", "kenya",
    
    // Musical instruments
    "piano", "guitar", "violin", "drums", "flute", "trumpet", "saxophone", "clarinet", "harp", "cello",
    "bass", "trombone", "accordion", "harmonica", "xylophone", "organ", "banjo", "mandolin", "ukulele", "triangle",
    
    // Shapes
    "circle", "square", "triangle", "rectangle", "oval", "diamond", "pentagon", "hexagon", "octagon", "sphere",
    "cube", "cylinder", "cone", "pyramid", "star", "heart", "crescent", "cross", "arrow", "spiral",
    
    // Holidays
    "christmas", "easter", "halloween", "thanksgiving", "newyear", "valentine", "independence", "labor", "memorial", "victory",
    "birthday", "anniversary", "wedding", "graduation", "prom", "carnival", "festival", "parade", "ceremony", "holiday"
];

// =======================
// DOM Utility
// =======================
class DomService {
    get(id) {
        return document.getElementById(id);
    }

    setText(id, text) {
        const el = this.get(id);
        if (el) el.textContent = text;
    }

    setInnerText(id, text) {
        const el = this.get(id);
        if (el) el.innerText = text;
    }

    getValue(id) {
        return this.get(id)?.value.trim() || "";
    }

    setValue(id, value) {
        const el = this.get(id);
        if (el) el.value = value;
    }

    focus(id) {
        this.get(id)?.focus();
    }

    disable(id) {
        const el = this.get(id);
        if (el && "disabled" in el) {
            el.disabled = true;
        }
    }

    enable(id) {
        const el = this.get(id);
        if (el && "disabled" in el) {
            el.disabled = false;
        }
    }

    onClick(id, handler) {
        this.get(id)?.addEventListener("click", handler);
    }

    onInput(id, handler) {
        this.get(id)?.addEventListener("input", handler);
    }

    removeInput(id, handler) {
        this.get(id)?.removeEventListener("input", handler);
    }
}

// =======================
// Timer
// =======================
class Timer {
    constructor(dom) {
        this.dom = dom;
        this.interval = null;
        this.startTime = 0;
    }

    updateDisplay() {
        const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(3);
        this.dom.setText("timer", elapsed);
    }

    start() {
        if (this.interval) return;
        const current = parseFloat(this.dom.get("timer")?.textContent || "0") * 1000;
        this.startTime = Date.now() - current;
        this.interval = setInterval(() => this.updateDisplay(), 1);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.dom.setText("timer", "0.000");
    }

    restart() {
        this.stop();
        this.start();
    }

    getCurrentTime() {
        return parseFloat(this.dom.get("timer")?.textContent || "0");
    }
}

// =======================
// Typing Stats
// =======================
class TypingStats {
    constructor(dom, timer) {
        this.dom = dom;
        this.timer = timer;
        this.times = [];
    }

    add() {
        const time = this.timer.getCurrentTime();
        if (time) this.times.push(time);
    }

    reset() {
        this.times = [];
    }

    get average() {
        if (!this.times.length) return 0;
        return this.times.reduce((a, b) => a + b, 0) / this.times.length;
    }

    get total() {
        if (!this.times.length) return 0;
        return this.times.reduce((a, b) => a + b, 0);
    }

    get count() {
        return this.times.length;
    }

    displayStats() {
        this.dom.setInnerText("avg-typing-time", this.average.toFixed(3));
        this.dom.setInnerText("total-typing-time", this.total.toFixed(3));
        this.dom.setInnerText("total-words", this.count);
    }
}

// =======================
// Word Service
// =======================
class WordService {
    constructor(dom, words) {
        this.dom = dom;
        this.words = words;
    }

    displayDefaultWord() {
        this.dom.setInnerText("random-word", "Ready?");
    }

    displayRandomWord() {
        const randomWord = this.words[Math.floor(Math.random() * this.words.length)];
        this.dom.setInnerText("random-word", randomWord);
    }

    getCurrentWord() {
        return this.dom.get("random-word")?.innerText.trim() || "";
    }
}

// =======================
// Input Handler
// =======================
class InputHandler {
    constructor(dom) {
        this.dom = dom;
        this.listenerSet = false;
    }

    clear() {
        this.dom.setValue("text-input", "");
    }

    focus() {
        this.dom.focus("text-input");
    }

    disable() {
        this.dom.disable("text-input");
    }

    enable() {
        this.dom.enable("text-input");
    }

    listen(handler) {
        if (this.listenerSet) return;
        this.dom.onInput("text-input", handler);
        this.listenerSet = true;
    }

    remove(handler) {
        this.dom.removeInput("text-input", handler);
        this.listenerSet = false;
    }

    getValue() {
        return this.dom.getValue("text-input");
    }
}

// =======================
// Round Manager
// =======================
class RoundManager {
    constructor(dom) {
        this.dom = dom;
        this.round = 0;
    }

    next() {
        this.round++;
    }

    reset() {
        this.round = 0;
    }

    display() {
        this.dom.setText("rounds", this.round);
    }
}

// =======================
// Game Logic
// =======================
class Game {
    constructor(dom, timer, stats, input, words, rounds) {
        this.dom = dom;
        this.timer = timer;
        this.stats = stats;
        this.input = input;
        this.words = words;
        this.rounds = rounds;

        this.verifyInput = this.verifyInput.bind(this);
    }

    isInputAccurate() {
        return this.input.getValue().toLowerCase() === this.words.getCurrentWord().toLowerCase();
    }

    displayWin() {
        alert(`Success at: ${this.timer.getCurrentTime().toFixed(3)}`);
    }

    continueGame() {
        this.input.clear();
        this.words.displayRandomWord();
        this.timer.restart();
        this.rounds.next();
    }

    verifyInput() {
        if (!this.isInputAccurate()) return;
        this.displayWin();
        this.stats.add();
        this.stats.displayStats()
        this.continueGame();
        this.rounds.display();
    }

    start() {
        this.rounds.display();
        this.words.displayRandomWord();
        this.timer.start();
        this.input.enable();
        this.input.listen(this.verifyInput);
        this.input.focus();
    }

    end() {
        this.timer.stop();
        this.input.clear();
        this.input.disable();
        this.input.remove(this.verifyInput);
        this.stats.reset();
        this.words.displayDefaultWord();
        this.rounds.reset();
        this.rounds.display();
    }
}

// =======================
// App Init
// =======================
class App {
    constructor(words) {
        this.dom = new DomService();
        const timer = new Timer(this.dom);
        const stats = new TypingStats(this.dom, timer);
        const input = new InputHandler(this.dom);
        const wordService = new WordService(this.dom, words);
        const rounds = new RoundManager(this.dom);

        this.game = new Game(this.dom, timer, stats, input, wordService, rounds);
    }

    init() {
        this.dom.onClick("start", () => this.game.start());
        this.dom.onClick("end", () => this.game.end());
    }
}

// =======================
// Start the app
// =======================
new App(WORDS).init();
