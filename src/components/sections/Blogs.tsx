"use client";

export const blogPosts = {
  "building-scalable-fullstack-apps-nextjs": {
    title: "Building Scalable Full-Stack Applications with Next.js",
    date: "November 15, 2025",
    readTime: "8 min read",
    tags: ["Next.js", "TypeScript", "Full-Stack"],
    content: `

Hey there! So I've been working with Next.js for a while now, and honestly, it's completely changed how I approach building full-stack apps. Let me share what I've learned from actually using it in real projects.

## Why I Fell in Love with Next.js

When I first started with React, I was juggling separate frontend and backend codebases. It was... exhausting. Then I discovered Next.js, and everything just clicked.

### Server-Side Rendering Saved My SEO
I built this e-commerce project where SEO was crucial. With vanilla React, search engines struggled to index my pages properly. Next.js's SSR fixed that instantly. Now I can choose between SSR, SSG, or CSR depending on what each page needs. For my product pages? SSG. For user dashboards? CSR. It's that flexible.

### API Routes Are a Game Changer
Here's what I love - I don't need a separate Express server anymore. Everything lives in one repo. When I built my portfolio's anonymous message feature, I just created an API route in the same project. Deploy once, and both frontend and backend go live together. Simple.

### The Routing System Just Makes Sense
Remember memorizing routing configurations? Yeah, me too. With Next.js, I just create a folder in \`app\`, drop in a \`page.tsx\`, and boom - I have a route. Dynamic routes? Just wrap the folder name in brackets like \`[slug]\`. I used this for my blog posts, and it works beautifully.

## How I Actually Structure My Projects

After building a few apps, this is the structure I always come back to:

\`\`\`
src/
  components/
    ui/           # Buttons, inputs - the basics
    sections/     # Hero, Footer - bigger chunks
    layout/       # Wrappers and layouts
  app/
    (routes)/     # My actual pages
    api/          # Backend stuff
  lib/
    utils/        # Helper functions I use everywhere
    redis/        # Database configs
\`\`\`

This keeps things organized when projects grow. Trust me, your future self will thank you.

## State Management - Keep It Simple

I learned this the hard way: don't overcomplicate state management. For most of my projects, React's \`useState\` and \`useContext\` are enough. Seriously. I wasted weeks setting up Redux for a small app when I really didn't need it.

For bigger projects with complex state? Sure, then look at Zustand or Redux Toolkit. But start simple.

## My Data Fetching Pattern

This is probably my favorite Next.js 14 feature - fetching data directly in Server Components:

\`\`\`typescript
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Refreshes every hour
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  return <PostsList posts={posts} />;
}
\`\`\`

No loading states, no useEffect, no useState. It just works. The data is there when the page loads.

## Database Choices I've Used

I've experimented with a few:
- Prisma + PostgreSQ - My go-to. Type safety is addictive once you try it
- Upstash Redis - Perfect for caching and visitor counters (I use this for my portfolio)
- Firebase - Great for MVPs and side projects
- MongoDB - When I need flexibility with data structure

Pick based on your needs, not the hype.

## Deploying - Easier Than You Think

I deploy everything on **Vercel** now. Why? Because:
- Push to GitHub, and it auto-deploys. Literally zero config
- Preview deployments for every PR - clients love this
- Edge functions just work
- It's free for personal projects

Can you deploy elsewhere? Of course! AWS, Railway, DigitalOcean all work. But for Next.js, Vercel is just... easier.

## Performance Tips I Actually Use

### Images
Always use the \`Image\` component. I learned this when my landing page was loading 5MB images. Next.js optimizes them automatically:

\`\`\`typescript
import Image from 'next/image';

<Image 
  src="/hero.jpg" 
  alt="Hero" 
  width={1200} 
  height={600}
  priority  // For above-the-fold images
/>
\`\`\`

### Lazy Loading Heavy Components
Got a component that's huge but not immediately visible? Load it only when needed:

\`\`\`typescript
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading chart...</p>
});
\`\`\`

## My Honest Take

Next.js isn't perfect, but it's damn good. The learning curve is there, especially with the App Router if you're coming from Pages Router. But once you get it, you'll wonder how you built web apps before.

Start with a simple project. Build a blog, a portfolio, whatever. Break things. Fix them. That's how I learned, and that's probably how you'll learn best too.

Happy building! 🚀
    `,
  },
  "ai-integration-web-development": {
    title: "AI Integration in Modern Web Development",
    date: "November 10, 2025",
    readTime: "10 min read",
    tags: ["AI", "Web Development", "API"],
    content: `

I'll be honest - a year ago, I thought AI integration was this super complex thing only big tech companies could do. Then I actually tried it, and realized it's way more accessible than I thought. Let me walk you through what I've learned.

## The AI Tools I Actually Use

### Google Gemini - Where I Started
My first AI model was Gemini 1.5 Flash. I chose it because it's fast, free for experimentation, and honestly, Google's documentation made it easy to get started. The API is straightforward, and the response times are impressive for a free tier.

I used it for my first chatbot project, and it handled everything I threw at it. The best part? The generous free tier meant I could experiment without worrying about costs.

### OpenAI - For Complex Tasks
After Gemini, I explored OpenAI:
- GPT-4 - When I need really nuanced responses or complex reasoning
- Embeddings - This one blew my mind. I built semantic search for a project, and it works way better than basic text search

### Claude by Anthropic
I switched to Claude for a project that needed to analyze long documents. The context window is massive, and honestly, I find its responses more nuanced for certain tasks. Plus, it's great at explaining code.

### Other Tools Worth Checking
- Hugging Face - If you want free models and don't mind hosting them yourself
- Replicate - Super easy to run ML models without managing infrastructure

## Real Projects I've Built

### 1. Semantic Search That Actually Works
I built this for a knowledge base. Instead of matching keywords, it understands *meaning*. User searches "how to reset password" and gets results about "account recovery" - it just gets it.

\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function semanticSearch(query: string, documents: string[]) {
  const queryEmbedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  
  // Compare with pre-computed document embeddings
  // Return most similar results
}
\`\`\`

The initial setup took me a weekend, but it was worth it. Users love it.

### 2. A Chatbot That Doesn't Suck
Most chatbots are terrible, right? I wanted mine to feel natural, so I used streaming responses. As the AI generates text, it appears word-by-word, just like ChatGPT:

\`\`\`typescript
const stream = await openai.chat.completions.create({
  model: "gpt-4-turbo-preview",
  messages: [{ role: "user", content: userMessage }],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || "";
  // Send this to frontend via WebSocket or Server-Sent Events
}
\`\`\`

The streaming makes it feel so much more responsive. Users actually wait for the full response instead of bouncing.

### 3. Auto-Generated Content (Use Responsibly)
I built a tool that generates product descriptions for an e-commerce site. Saves hours of manual writing:

\`\`\`typescript
async function generateProductDescription(productName: string, features: string[]) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { 
        role: "system", 
        content: "You write compelling, concise product descriptions." 
      },
      { 
        role: "user", 
        content: \`Product: \${productName}\nFeatures: \${features.join(', ')}\` 
      }
    ],
  });
  
  return completion.choices[0].message.content;
}
\`\`\`

Important: Always review AI-generated content. It's not perfect, but it's a great starting point.

## Lessons Learned the Hard Way

### 1. API Costs Add Up Fast
My friend got a $80 bill because he didn't implement rate limiting. Now he's paranoid about it:

\`\`\`typescript
// Limit API calls per user
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50 // 50 requests per window
});

app.use('/api/ai', limiter);
\`\`\`

Also, cache aggressively. Same question? Return cached response. His costs dropped 70% after implementing proper caching.

### 2. Error Handling Is Critical
APIs fail. Networks drop. Rate limits hit. Handle everything:

\`\`\`typescript
try {
  const response = await openai.chat.completions.create({...});
  return response;
} catch (error) {
  if (error.response?.status === 429) {
    // Too many requests - wait and retry
    return "Hold on, trying again...";
  } else if (error.response?.status === 401) {
    // API key issue - alert yourself!
    console.error("OpenAI auth failed!");
  }
  return "Something went wrong. Please try again.";
}
\`\`\`

Never expose raw API errors to users. They don't need to know your OpenAI key is invalid.

### 3. Cache Everything You Can
Same prompt? Don't call the API again. Use Redis or any cache:

\`\`\`typescript
async function getCachedAIResponse(prompt: string) {
  const cached = await redis.get(\`ai:\${prompt}\`);
  if (cached) return JSON.parse(cached);
  
  const response = await openai.chat.completions.create({...});
  await redis.set(\`ai:\${prompt}\`, JSON.stringify(response), 'EX', 3600);
  
  return response;
}
\`\`\`

This cut my API costs in half. Same popular questions get instant responses.

## The Ethics Stuff Nobody Talks About

Look, AI is powerful, but we need to be responsible:

- Don't send sensitive data to external APIs. Ever. I once almost sent user passwords in a prompt. Caught it just in time.
- Be transparent - Tell users when AI is involved. They have a right to know.
- Content moderation - AI can generate inappropriate stuff. Filter it before showing users.
- Bias is real - AI models reflect their training data. Test thoroughly with diverse inputs.

## What's Coming Next

I'm excited about:
- Multi-modal AI - Imagine processing text, images, and audio together. Already possible, just getting better.
- Local AI models - Running smaller models directly in the browser. No API costs, instant responses.
- AI Agents - Systems that can browse the web, use tools, and solve complex tasks autonomously.

## My Honest Advice

Start small. Build a simple chatbot. Try the OpenAI Playground first. Don't jump into complex implementations right away.

AI isn't magic - it's just a really smart API. Treat it like any other service: handle errors, cache responses, manage costs, and always think about the user experience.

Oh, and read the docs. Seriously. They're actually good.

Now go build something cool! 🤖
    `,
  },
  "optimizing-react-performance": {
    title: "Optimizing React Performance: Tips and Tricks",
    date: "November 5, 2025",
    readTime: "6 min read",
    tags: ["React", "Performance", "Optimization"],
    content: `

So here's the thing - I used to think React was slow. Turns out, I was just using it wrong. Let me share the performance mistakes I made (so you don't have to) and what actually worked to speed things up.

## When I Realized I Had a Problem

I built this dashboard with a ton of data tables. It was smooth at first, but as I added features, it became sluggish. Every keystroke in a filter input felt delayed. Users noticed. I needed to fix it.

## Understanding Why React Re-renders

First, I had to understand when React re-renders components:
1. When state changes (obvious)
2. When props change (also obvious)
3. When a parent re-renders (wait, what? yeah, this one got me)
4. When context value changes (this killed my performance once)

## Fixes That Actually Worked

### 1. React.memo Was My First Win

I had this expensive component that showed user stats. It re-rendered every time anything changed, even unrelated stuff. React.memo fixed it:

\`\`\`typescript
import { memo } from 'react';

const UserStatsCard = memo(({ userId, stats }) => {
  // Complex calculations and charts
  return <div>{/* render stats */}</div>;
});
\`\`\`

Now it only re-renders when \`userId\` or \`stats\` actually change. Simple fix, massive impact.

### 2. useMemo Saved My Sorting Logic

I had a list of 1000+ items that I sorted on every render. Even when the list didn't change. Yeah, not smart:

\`\`\`typescript
// ❌ Before: Sorting on every render
function DataTable({ items }) {
  const sortedItems = items.sort((a, b) => a.value - b.value);
  return <Table data={sortedItems} />;
}

// ✅ After: Sort only when items change
function DataTable({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);
  
  return <Table data={sortedItems} />;
}
\`\`\`

The difference was instant. Scrolling became butter-smooth.

### 3. useCallback for Stable Function References

This one's subtle but important. I was passing callbacks to child components, and they kept re-rendering:

\`\`\`typescript
function Parent() {
  // ❌ New function every render
  const handleClick = () => console.log('clicked');
  
  return <Child onClick={handleClick} />; // Child re-renders every time
}

// ✅ Stable function reference
function Parent() {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []); // Only created once
  
  return <Child onClick={handleClick} />; // Child doesn't re-render unnecessarily
}
\`\`\`

Combine this with \`React.memo\` on the child, and you've got a solid optimization.

### 4. Code Splitting Changed Everything

My initial bundle was huge - like 3MB huge. Users on slow connections waited forever. Code splitting with lazy loading fixed it:

\`\`\`typescript
import { lazy, Suspense } from 'react';

const AdminPanel = lazy(() => import('./AdminPanel'));
const Charts = lazy(() => import('./Charts'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isAdmin && <AdminPanel />}
      <Charts />
    </Suspense>
  );
}
\`\`\`

Now users only download what they need. Initial load went from 5 seconds to under 1 second.

### 5. Virtualization for Long Lists

I had a list with 10,000 items. Rendering all of them? My browser literally froze. React-window saved me:

\`\`\`typescript
import { FixedSizeList } from 'react-window';

function HugeList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index].name}
        </div>
      )}
    </FixedSizeList>
  );
}
\`\`\`

It only renders what's visible on screen. Genius. Performance went from unusable to perfect.

## State Management Mistakes I Made

### Lifting State Too High
I used to put everything in a top-level state. Bad idea. If a button in the footer needs state, don't put it in App.tsx:

\`\`\`typescript
// ❌ State way too high
function App() {
  const [modalOpen, setModalOpen] = useState(false); // Used only in Footer
  return <><Header /><Content /><Footer modalOpen={modalOpen} setModalOpen={setModalOpen} /></>;
}

// ✅ State where it's actually used
function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  return <div>{/* use modalOpen locally */}</div>;
}
\`\`\`

Keep state close to where it's used. My unnecessary re-renders dropped by 80%.

### The Context Trap
I put user data and theme settings in one context. Changing theme? Entire app re-renders because user context changed too. Split them:

\`\`\`typescript
// ❌ Everything in one context
const AppContext = createContext({ user, theme, setUser, setTheme });

// ✅ Separate concerns
const UserContext = createContext({ user, setUser });
const ThemeContext = createContext({ theme, setTheme });
\`\`\`

Now changing theme doesn't cause user-related components to re-render. Big win.

## Tools That Helped Me Debug

### React DevTools Profiler
This tool is criminally underused. It shows you:
- Which components are slow
- How often they re-render
- What's causing the re-renders

Here's how I use it:
1. Open React DevTools
2. Go to Profiler tab
3. Hit Record
4. Use my app normally
5. Stop recording and analyze

I found components re-rendering 50+ times per second. Fixed those first.

## Mistakes I See Everyone Make

### Creating Objects/Arrays Inline
\`\`\`typescript
// ❌ New object every render
<Component style={{ padding: 10 }} />

// ✅ Reuse the same object
const style = { padding: 10 };
<Component style={style} />
\`\`\`

### Anonymous Functions Everywhere
\`\`\`typescript
// ❌ New function every render
<Button onClick={() => handleClick(id)} />

// ✅ Memoize it
const onClick = useCallback(() => handleClick(id), [id]);
<Button onClick={onClick} />
\`\`\`

## The Most Important Lesson

Don't optimize prematurely. Seriously. I wasted weeks over-optimizing a form that was already fast. 

My process now:
1. Build the feature
2. Test it
3. If it's slow, profile it
4. Optimize the actual bottleneck
5. Test again

Most of the time, React is fast enough out of the box. Only optimize when you have a real problem.

## Quick Wins Checklist

- [ ] Use React.memo for expensive components
- [ ] Memoize expensive calculations with useMemo
- [ ] Stabilize callbacks with useCallback
- [ ] Code-split heavy features
- [ ] Virtualize long lists
- [ ] Keep state local
- [ ] Split contexts by concern
- [ ] Profile before optimizing

## Final Thoughts

React performance isn't rocket science. It's about understanding when and why things re-render, then being strategic about preventing unnecessary work.

Start with the big wins (code splitting, virtualization). Then profile to find real bottlenecks. Don't waste time optimizing things that are already fast enough.

And remember: a working, slightly slow app beats a perfectly optimized app that doesn't exist. Ship first, optimize later.

Good luck! ⚡
    `,
  },
  "the-moment-i-fell-in-love-with-tech": {
  "title": "The Moment I Fell in Love with Tech (And Didn’t Realise It Back Then)",
  "date": "December 11, 2025",
  "readTime": "7 min read",
  "tags": ["Programming", "Developer Journey", "Tech Mindset"],
  "content": `

Hey there! So I wanted to talk about a moment from my past — something simple but meaningful. It was the moment I unknowingly fell in love with tech, long before I even called myself a developer.

## That One Bug That Changed Everything

It was late at night. I was stuck on a tiny bug in a project that didn’t even matter to anyone else. A missing bracket, a wrong variable name — something ridiculously small.

But I remember the exact moment it finally worked.

That sudden rush?  
That tiny spark of “holy sh*t, I made this work”?  
Yeah… that was the moment.

I didn’t realize it then, but that feeling is what made me fall in love with building things.

## When Code Stopped Feeling Like Code

At first, I used to see programming as just syntax, errors, and tutorials I barely understood. But slowly…

### Code started feeling like problem-solving  
Not typing. Not memorizing. Just figuring things out logically.

### Debugging felt like detective work  
You follow clues. You eliminate suspects. And in the end, you catch the culprit.

### Projects felt like building Lego  
Piece by piece, things started coming together.

This shift changed everything for me.

## The First Time I Built Something Real

I still remember the first project I actually shipped — not perfect, not pretty, but real.

Maybe it was a small webpage.  
Maybe a simple backend.  
Maybe a React component that finally rendered correctly.

Whatever it was, it made me think:

“Wait… I can actually *create* things that live on the internet? Things people can use?”

That blew my mind.

## Burnout, Breakthroughs, and the Loop

Let’s be honest. Tech isn’t always glamorous.

### Burnout happens  
Your brain gets fried from bugs and deadlines.

### Impostor syndrome hits  
You see someone build something insane in 2 hours and wonder why you struggle.

### Learning feels endless  
You finish one topic and suddenly there are 12 more frameworks waiting.

But then comes the breakthrough — that one moment where everything clicks again.

And suddenly…  
You’re back in love with it.

## What Tech Taught Me About Myself

This part surprised me the most.

### I love solving problems  
Even outside coding — I approach everything like a bug that can be fixed.

### I’m more patient than I thought  
Hours of debugging can do that to you.

### I enjoy creating things  
Seeing an idea go from your head → your code → your screen? Addictive.

### I like challenges  
Even when I complain about them.

## The Realisation That Changed My Journey

The moment I truly understood was when I started choosing code even when nobody was forcing me.

Not for marks.  
Not for a job.  
Not for an assignment.

Just because I *wanted* to build something.

That’s when tech stopped being a skill…  
and became a part of who I am.

## My Honest Take

If you’ve ever stayed up late fixing a bug you could’ve solved tomorrow…  
If you’ve ever felt that little high when your code finally runs…  
If you’ve ever built something small and felt weirdly proud…

Then yeah — you’re already in love with tech.

You just haven’t admitted it yet.

`
},

};