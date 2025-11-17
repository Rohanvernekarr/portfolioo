"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

// Code Block Component
function CodeBlock({ code, language = "typescript" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="flex items-center justify-between bg-zinc-800 dark:bg-zinc-900 px-4 py-2 rounded-t-lg border border-zinc-700">
        <span className="text-xs text-zinc-400 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="bg-zinc-900 dark:bg-black p-4 rounded-b-lg overflow-x-auto border border-t-0 border-zinc-700">
        <code className="text-sm text-zinc-100 font-mono">{code}</code>
      </pre>
    </div>
  );
}

function parseContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let i = 0;
  let codeBlock = '';
  let inCodeBlock = false;
  let codeLanguage = 'typescript';

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        // Start of code block
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim() || 'typescript';
        codeBlock = '';
      } else {
        // End of code block
        elements.push(
          <CodeBlock key={i} code={codeBlock.trim()} language={codeLanguage} />
        );
        inCodeBlock = false;
        codeBlock = '';
      }
    } else if (inCodeBlock) {
      codeBlock += line + '\n';
    } else if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-4xl font-bold mt-8 mb-4 scroll-mt-20">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-3xl font-semibold mt-6 mb-3 scroll-mt-20">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-2xl font-semibold mt-5 mb-2 scroll-mt-20">
          {line.slice(4)}
        </h3>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />);
    } else {
      
      const processInlineCode = (text: string) => {
        const parts = text.split('`');
        return parts.map((part, idx) => 
          idx % 2 === 1 ? (
            <code key={idx} className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-sm font-mono">
              {part}
            </code>
          ) : part
        );
      };

      elements.push(
        <p key={i} className="mb-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
          {processInlineCode(line)}
        </p>
      );
    }
    i++;
  }

  return elements;
}

const blogPosts = {
  "building-scalable-fullstack-apps-nextjs": {
    title: "Building Scalable Full-Stack Applications with Next.js",
    date: "November 15, 2025",
    readTime: "8 min read",
    tags: ["Next.js", "TypeScript", "Full-Stack"],
    content: `

Next.js has revolutionized the way we build full-stack applications. With its powerful features like Server Components, API Routes, and seamless TypeScript integration, it's become the go-to framework for modern web development.

## Why Next.js for Full-Stack Development?

Next.js offers several advantages that make it ideal for building scalable applications:

### 1. Server-Side Rendering (SSR) and Static Site Generation (SSG)
Next.js provides multiple rendering strategies out of the box. You can choose between SSR, SSG, or Client-Side Rendering (CSR) based on your needs. This flexibility allows you to optimize for performance and SEO without compromising on user experience.

### 2. API Routes
With API Routes, you can build your backend right alongside your frontend. No need for a separate Express server - everything lives in one codebase, making development faster and deployment simpler.

### 3. File-Based Routing
The file-based routing system is intuitive and powerful. Create a file in the \`app\` directory, and you automatically get a route. Dynamic routes, catch-all routes, and parallel routes are all supported.

## Best Practices for Scalable Architecture

### Component Organization
\`\`\`
src/
  components/
    ui/           # Reusable UI components
    sections/     # Page sections
    layout/       # Layout components
  app/
    (routes)/     # Route groups
    api/          # API routes
  lib/
    utils/        # Utility functions
    hooks/        # Custom hooks
\`\`\`

### State Management
For small to medium applications, React's built-in state management (useState, useContext) is often sufficient. For larger applications, consider using Zustand or Redux Toolkit.

### Data Fetching
Next.js 14+ introduces powerful data fetching patterns with Server Components. Use \`fetch\` in Server Components for automatic request deduplication and caching.

\`\`\`typescript
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  return <PostsList posts={posts} />;
}
\`\`\`

### Database Integration
Popular choices for Next.js applications:
- **PostgreSQL with Prisma** - Type-safe database access
- **MongoDB with Mongoose** - Flexible document database
- **Supabase** - Open-source Firebase alternative
- **PlanetScale** - Serverless MySQL platform

## Deployment Strategies

### Vercel (Recommended)
Vercel offers the best Next.js deployment experience with:
- Automatic CI/CD from Git
- Edge Functions
- Built-in Analytics
- Preview deployments

### Self-Hosting
You can also deploy Next.js on:
- AWS (EC2, ECS, Lambda)
- Google Cloud Platform
- DigitalOcean
- Railway

## Performance Optimization

### Image Optimization
Always use Next.js's \`Image\` component for automatic image optimization:

\`\`\`typescript
import Image from 'next/image';

<Image 
  src="/hero.jpg" 
  alt="Hero" 
  width={1200} 
  height={600}
  priority
/>
\`\`\`

### Code Splitting
Next.js automatically code-splits your application. Use dynamic imports for further optimization:

\`\`\`typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
\`\`\`

## Conclusion

Next.js provides an excellent foundation for building scalable full-stack applications. By following these best practices and leveraging Next.js's built-in features, you can create fast, maintainable, and production-ready applications.

Happy coding! 
    `,
  },
  "ai-integration-web-development": {
    title: "AI Integration in Modern Web Development",
    date: "November 10, 2025",
    readTime: "10 min read",
    tags: ["AI", "Web Development", "API"],
    content: `

Artificial Intelligence is transforming how we build and interact with web applications. From chatbots to content generation, AI is becoming an essential part of modern web development.

## Popular AI APIs and Services

### OpenAI API
The most popular choice for AI integration:
- GPT-4 for text generation and completion
- DALL-E for image generation
- Whisper for speech-to-text
- Embeddings for semantic search

### Anthropic Claude
Known for longer context windows and nuanced responses, Claude is excellent for:
- Complex reasoning tasks
- Document analysis
- Code generation

### Other Services
- **Hugging Face** - Open-source models
- **Cohere** - Enterprise AI solutions
- **Replicate** - Run ML models via API

## Practical Use Cases

### 1. AI-Powered Search
Implement semantic search using embeddings:

\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function semanticSearch(query: string, documents: string[]) {
  const queryEmbedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  
  // Compare with document embeddings and rank results
  // Implementation details...
}
\`\`\`

### 2. Chatbots and Assistants
Build conversational interfaces with streaming responses:

\`\`\`typescript
const stream = await openai.chat.completions.create({
  model: "gpt-4-turbo-preview",
  messages: [{ role: "user", content: "Hello!" }],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content || "";
  process.stdout.write(content);
}
\`\`\`

### 3. Content Generation
Automate content creation for blogs, product descriptions, and more:

\`\`\`typescript
async function generateBlogPost(topic: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a technical blog writer." },
      { role: "user", content: \`Write a blog post about \${topic}\` }
    ],
  });
  
  return completion.choices[0].message.content;
}
\`\`\`

## Best Practices

### Rate Limiting
Implement proper rate limiting to manage API costs:

\`\`\`typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/ai', limiter);
\`\`\`

### Error Handling
Always handle API errors gracefully:

\`\`\`typescript
try {
  const response = await openai.chat.completions.create({...});
} catch (error) {
  if (error.response?.status === 429) {
    // Handle rate limit
  } else if (error.response?.status === 401) {
    // Handle authentication error
  }
  // Log and return user-friendly error
}
\`\`\`

### Caching
Cache responses to reduce costs and improve performance:

\`\`\`typescript
import { redis } from '@/lib/redis';

async function getCachedCompletion(prompt: string) {
  const cached = await redis.get(\`completion:\${prompt}\`);
  if (cached) return cached;
  
  const response = await openai.chat.completions.create({...});
  await redis.set(\`completion:\${prompt}\`, response, 'EX', 3600);
  
  return response;
}
\`\`\`

## Privacy and Ethics

When integrating AI, consider:
- **Data Privacy** - Never send sensitive user data to external APIs
- **Transparency** - Inform users when AI is being used
- **Bias** - Be aware of potential biases in AI models
- **Content Moderation** - Implement filters for inappropriate content

## Future Trends

- **Multi-modal AI** - Combining text, image, and audio
- **Edge AI** - Running models directly in the browser
- **Fine-tuned Models** - Custom models for specific domains
- **AI Agents** - Autonomous systems that can perform complex tasks

## Conclusion

AI integration opens up incredible possibilities for web applications. By following best practices and staying informed about new developments, you can build powerful, intelligent applications that delight users.

The future of web development is AI-powered! 
    `,
  },
  "optimizing-react-performance": {
    title: "Optimizing React Performance: Tips and Tricks",
    date: "November 5, 2025",
    readTime: "6 min read",
    tags: ["React", "Performance", "Optimization"],
    content: `

React is fast by default, but as your application grows, you might encounter performance bottlenecks. Let's explore practical techniques to keep your React apps blazing fast.

## Understanding React Rendering

Before optimizing, understand when React re-renders:
1. State changes
2. Props changes
3. Parent component re-renders
4. Context value changes

## Key Optimization Techniques

### 1. Memoization with React.memo

Prevent unnecessary re-renders of functional components:

\`\`\`typescript
import { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // Complex rendering logic
  return <div>{data}</div>;
});
\`\`\`

### 2. useMemo for Expensive Calculations

Cache computed values:

\`\`\`typescript
import { useMemo } from 'react';

function DataTable({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);
  
  return <Table data={sortedItems} />;
}
\`\`\`

### 3. useCallback for Function References

Stabilize function references to prevent child re-renders:

\`\`\`typescript
import { useCallback } from 'react';

function Parent() {
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return <Child onClick={handleClick} />;
}
\`\`\`

### 4. Code Splitting

Split your bundle for faster initial load:

\`\`\`typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

### 5. Virtualization for Long Lists

Use libraries like react-window or react-virtualized:

\`\`\`typescript
import { FixedSizeList } from 'react-window';

function LargeList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  );
}
\`\`\`

## State Management Optimization

### Keep State Close to Where It's Used
Don't lift state higher than necessary:

\`\`\`typescript
// ❌ Bad - state too high
function App() {
  const [value, setValue] = useState('');
  return <DeepChild value={value} setValue={setValue} />;
}

// ✅ Good - state where it's needed
function Component() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
\`\`\`

### Split Context to Avoid Unnecessary Re-renders

\`\`\`typescript
// ❌ Bad - single context
const AppContext = createContext({ user, theme, setUser, setTheme });

// ✅ Good - split contexts
const UserContext = createContext({ user, setUser });
const ThemeContext = createContext({ theme, setTheme });
\`\`\`

## Performance Monitoring

### React DevTools Profiler
Use the built-in profiler to identify performance issues:
1. Open React DevTools
2. Go to Profiler tab
3. Click Record
4. Interact with your app
5. Analyze render times

### Key Metrics to Watch
- **Render duration** - How long components take to render
- **Render frequency** - How often components re-render
- **Props changes** - What's causing re-renders

## Common Pitfalls

### 1. Inline Object/Array Creation
\`\`\`typescript
// ❌ Creates new object every render
<Component style={{ color: 'red' }} />

// ✅ Stable reference
const style = { color: 'red' };
<Component style={style} />
\`\`\`

### 2. Anonymous Functions in Props
\`\`\`typescript
// ❌ New function every render
<Button onClick={() => handleClick(id)} />

// ✅ Use useCallback
const onClick = useCallback(() => handleClick(id), [id]);
<Button onClick={onClick} />
\`\`\`

### 3. Over-optimization
Don't optimize prematurely! Measure first, then optimize.

## Conclusion

React performance optimization is about:
1. Understanding when and why re-renders happen
2. Using the right tools (memo, useMemo, useCallback)
3. Measuring before optimizing
4. Keeping things simple

Remember: premature optimization is the root of all evil. Profile first, optimize second!
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Button onClick={() => router.push("/")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Home
        </Button>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Go back
      </button>

      <header className="mb-8 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
    
      {/* Content with proper code blocks */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {parseContent(post.content)}
      </div>

      <footer className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <Button variant="outline" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share Post
          </Button>
        </div>
      </footer>
    </article>
  );
}
