import React from 'react';

const aiCategories = [

  {
    category: "Chat & Assistant AI",
    tools: [
      {
        name: "ChatGPT",
        logo: "/logos/chatgpt.jpeg",
        url: "https://chat.openai.com",
      },
      {
        name: "Claude",
        logo: "/logos/claude.png",
        url: "https://claude.ai",
      },
      {
        name: "Perplexity",
        logo: "/logos/perplexity.jpeg",
        url: "https://www.perplexity.ai",
      },
      {
        name: "Google Gemini",
        logo: "/logos/gemini.png",
        url: "https://gemini.google",
      },
    ],
  },
  {
    category: "Video Editing & Generation AI",
    tools: [
      {
        name: "Runway ML",
        logo: "/logos/runwayml.png",
        url: "https://runwayml.com",
      },
      {
        name: "Descript",
        logo: "/logos/descript.png",
        url: "https://www.descript.com",
      },
      {
        name: "Pictory",
        logo: "/logos/pictory.jpeg",
        url: "https://pictory.ai",
      },
      {
        name: "Synthesia",
        logo: "/logos/synthesia.png",
        url: "https://www.synthesia.io",
      },
    ],
  },
  {
    category: "Image Generation AI",
    tools: [
      {
        name: "Midjourney",
        logo: "/logos/midjourney.png",
        url: "https://www.midjourney.com/",
      },
      {
        name: "DALL·E",
        logo: "/logos/dalle3.jpeg",
        url: "https://openai.com/dall-e",
      },
      {
        name: "Stable Diffusion",
        logo: "/logos/stablediffusionweb.jpeg",
        url: "https://stablediffusionweb.com",
      },
      {
        name: "Leonardo AI",
        logo: "/logos/leonardo.jpeg",
        url: "https://www.leonardo.ai",
      },
    ],
  },
  {
    category: "Content Writing & Copywriting AI",
    tools: [
      {
        name: "Jasper AI",
        logo: "/logos/jasper.jpeg",
        url: "https://www.jasper.ai",
      },
      {
        name: "Copy.ai",
        logo: "/logos/copy.png",
        url: "https://www.copy.ai",
      },
      {
        name: "Writesonic",
        logo: "/logos/writesonic.jpeg",
        url: "https://writesonic.com",
      },
      {
        name: "Rytr",
        logo: "/logos/rytr.png",
        url: "https://rytr.me",
      },
    ],
  },
  {
    category: "Voice & Audio AI",
    tools: [
      {
        name: "ElevenLabs",
        logo: "/logos/elevenlabs.png",
        url: "https://elevenlabs.io",
      },
      {
        name: "Resemble AI",
        logo: "/logos/resemble.png",
        url: "https://www.resemble.ai",
      },
      {
        name: "Play.ht",
        logo: "/logos/play.png",
        url: "https://play.ht",
      },
      {
        name: "Veed",
        logo: "/logos/veed.png",
        url: "https://www.veed.io/tools/audio-to-audio-ai",
      },
    ],
  },
  {
    category: "Photo Editing & Enhancement AI",
    tools: [
      {
        name: "Remini",
        logo: "/logos/remini.jpg",
        url: "https://www.remini.ai",
      },
      {
        name: "Let's Enhance",
        logo: "/logos/letsenhance.jpeg",
        url: "https://letsenhance.io",
      },
      {
        name: "Fotor",
        logo: "/logos/footer.jpeg",
        url: "https://www.fotor.com",
      },
      {
        name: "Vance AI",
        logo: "/logos/vanceai.png",
        url: "https://vanceai.com",
      },
    ],
  },
  {
    category: "Design & UI Generation AI",
    tools: [
      {
        name: "Uizard",
        logo: "/logos/uizard.jpg",
        url: "https://www.uizard.io",
      },
      {
        name: "Galileo AI",
        logo: "/logos/galileo.jpg",
        url: "https://www.galileo.ai",
      },
      {
        name: "Canva Magic Design",
        logo: "/logos/canva.png",
        url: "https://www.canva.com/magic-design/",
      },
      {
        name: "builderio",
        logo: "/logos/builderio.jpeg",
        url: "https://www.builder.io/",
      },
    ],
  },
  {
    category: "Data & Analytics AI",
    tools: [
      {
        name: "Tableau AI",
        logo: "/logos/tableau.png",
        url: "https://www.tableau.com",
      },
      {
        name: "Akkio",
        logo: "/logos/akkio.jpeg",
        url: "https://www.akkio.com",
      },
      {
        name: "Julius",
        logo: "/logos/julius.png",
        url: "https://julius.ai/",
      },
      {
        name: "Polymersearch",
        logo: "/logos/polymersearch.jpeg",
        url: "https://polymersearch.com/",
      },
    ],
  },
  {
    category: "E-Commerce & Product AI",
    tools: [
      {
        name: "CopyMonkey",
        logo: "/logos/copymonkey.jpeg",
        url: "https://copymonkey.ai",
      },
      {
        name: "Octane AI",
        logo: "/logos/octane.png",
        url: "https://www.octaneai.com",
      },
      {
        name: "Vue.ai",
        logo: "/logos/vueai.jpg",
        url: "https://www.vue.ai",
      },
      {
        name: "clerk.io",
        logo: "/logos/clerk.png",
        url: "https://www.clerk.io/",
      },
    ],
  },
  {
    category: "Code Generation & Developer AI",
    tools: [
      {
        name: "GitHub Copilot",
        logo: "/logos/github.png",
        url: "https://copilot.github.com",
      },
      {
        name: "Codeium",
        logo: "/logos/windsurf.png",
        url: "https://www.codeium.com",
      },
      {
        name: "Replit AI",
        logo: "/logos/replit.png",
        url: "https://replit.com",
      },
      {
        name: "Tabnine",
        logo: "/logos/tabnine.png",
        url: "https://tabnine.com",
      },
    ],
  },
  {
    category: "Automation & Workflow AI",
    tools: [
      {
        name: "Zapier AI",
        logo: "/logos/zapier.png",
        url: "https://zapier.com",
      },
      {
        name: "Notion AI",
        logo: "/logos/notion.png",
        url: "https://www.notion.so",
      },
      {
        name: "Taskade",
        logo: "/logos/taskade.png",
        url: "https://www.taskade.com",
      },
      {
        name: "Make",
        logo: "/logos/make.jpeg",
        url: "https://www.make.com/en",
      },
    ],
  },
];

const Ai = () => {
  return (
    <div className="container mx-auto px-6 py-16 mt-10">
      {/* Explore AI Tools by Category */}
      <h1 className="text-4xl font-bold text-center mb-12">99 AI Tools Directory</h1>

      {aiCategories.map((section, i) => (
        <div key={i} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {section.tools.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3 transition-all"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center  transition-all">
                  <img src={tool.logo} alt={tool.name} className="h-42 w-42 object-contain" />
                </div>
                <p className="text-center font-bold text-sm">{tool.name}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default Ai;
