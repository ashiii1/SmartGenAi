const templates = [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on your blog content",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2800/2800015.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog Title",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your blog outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generate blog content depends on your blog title",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    aiPrompt:
      "Write a blog content based on the blog title and give me result in Rich text editor format",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog title",
        field: "input",
        name: "title",
        required: true,
      },
    ],
  },

  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generate blog topic ideas depends on your blog niche",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/993/993504.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche and give me result in Rich text editor format",
    slug: "generate-blog-topic-ideas",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },

  {
    name: "Youtube Tags",
    desc: "An AI tool that generate youtube tags depends on your youtube video content",
    category: "Youtube tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3938/3938026.png",
    aiPrompt:
      "Give me 5 youtube tags idea in bullet wise only based on give video content and give me result in Rich text editor format",
    slug: "generate-youtube-tags",
    form: [
      {
        label: "Enter your video content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that generate youtube description depends on your youtube video title",
    category: "Youtube tool",
    icon: "https://cdn-icons-png.flaticon.com/128/1383/1383260.png",
    aiPrompt:
      "Write a youtube description based on the video title and give me result in Rich text editor format",
    slug: "generate-youtube-description",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "title",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that generate youtube SEO title depends on your youtube video content",
    category: "Youtube tool",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Write a youtube SEO title based on the video content and give me result in Rich text editor format",
    slug: "generate-youtube-seo-title",
    form: [
      {
        label: "Enter your video content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "ReWrite Article (Plagiarism Free)",
    desc: "An AI tool that rewrite article depends on your article content",
    category: "Article",
    icon: "https://cdn-icons-png.flaticon.com/128/1170/1170170.png",
    aiPrompt:
      "Rewrite the article content plagiarism free and give me result in Rich text editor format",
    slug: "rewrite-article",
    form: [
      {
        label: "Enter your article content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "An AI tool that improve your text content",
    category: "Article",
    icon: "https://cdn-icons-png.flaticon.com/128/3721/3721819.png",
    aiPrompt:
      "Improve the text content and give me result in Rich text editor format",
    slug: "text-improver",
    form: [
      {
        label: "Enter your text content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
];

export default templates;
