// Quote type definition
export interface Quote {
  text: string;
  author: string;
}

// Quote data organized by topics
export const quotes: Record<string, Quote[]> = {
  success: [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins"
    }
  ],
  motivation: [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ],
  life: [
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius"
    },
    {
      text: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      text: "Life is 10% what happens to you and 90% how you react to it.",
      author: "Charles R. Swindoll"
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein"
    }
  ],
  dreams: [
    {
      text: "All our dreams can come true, if we have the courage to pursue them.",
      author: "Walt Disney"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "A dream you dream alone is only a dream. A dream you dream together is reality.",
      author: "Yoko Ono"
    },
    {
      text: "Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself.",
      author: "Gail Devers"
    },
    {
      text: "Dreams don't have to just be dreams. You can make it a reality.",
      author: "Harry Styles"
    }
  ],
  perseverance: [
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "Perseverance is not a long race; it is many short races one after the other.",
      author: "Walter Elliot"
    },
    {
      text: "The difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson"
    },
    {
      text: "Fall seven times, stand up eight.",
      author: "Japanese Proverb"
    },
    {
      text: "Success is the sum of small efforts repeated day in and day out.",
      author: "Robert Collier"
    }
  ],
  wisdom: [
    {
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    },
    {
      text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
      author: "Albert Einstein"
    },
    {
      text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      author: "William Shakespeare"
    },
    {
      text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
      author: "Rumi"
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu"
    }
  ],
  courage: [
    {
      text: "Courage is not the absence of fear, but action in spite of it.",
      author: "Mark Twain"
    },
    {
      text: "The cave you fear to enter holds the treasure you seek.",
      author: "Joseph Campbell"
    },
    {
      text: "It takes courage to grow up and become who you really are.",
      author: "E.E. Cummings"
    },
    {
      text: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
      author: "Maya Angelou"
    },
    {
      text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius"
    }
  ]
};