export type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  tools: string[];
  projectType: string;
  learning: string;
  video?: string;
  gallery?: string[];
  role: string;
  coverImage: string;
  linkURL?: string;
};

export const projects: Project[] = [
  {
    slug: "chatgpt-guide",
    number: "01",
    title: "ChatGPT Guide",
    description:
      "อินโฟกราฟิกแนะนำการใช้งาน ChatGPT เพื่อทำความรู้จักเครื่องมือ AI และแนวทางการใช้งานอย่างเหมาะสม",
    category: "Infographic",
    tools: ["Canva"],
    projectType: "Infographic",
    learning:
      "เรียนรู้การใช้งาน ChatGPT และการเขียน Prompt ให้ได้ผลลัพธ์ตรงตามต้องการ",
    role: "ออกแบบและจัดทำอินโฟกราฟิก",
    coverImage: "/images/cover-images/chat-gpt-guide.jpg",
    gallery: ["/images/chat-gpt-guide.jpg"],
  },
  {
    slug: "behaviorism",
    number: "02",
    title: "Behaviorism",
    description:
      "อินโฟกราฟิกสรุปสาระสำคัญของทฤษฎีพฤติกรรมนิยม พร้อมเรียบเรียงเนื้อหาให้อยู่ในรูปแบบที่เข้าใจง่าย",
    category: "Infographic",
    tools: ["Canva"],
    projectType: "Infographic",
    learning:
      "เรียนรู้การวิเคราะห์และสรุปสาระสำคัญ พร้อมนำเสนอข้อมูลให้เข้าใจง่าย",
    role: "วิเคราะห์ สรุปเนื้อหา และออกแบบอินโฟกราฟิก",
    coverImage: "/images/cover-images/behaviorism.jpg",
    gallery: ["/images/behaviorism.png"],
  },
  {
    slug: "learning-theories",
    number: "03",
    title: "Learning Theories",
    description:
      "สรุปทฤษฎีการเรียนรู้ผ่าน NotebookLM โดยนำเทคโนโลยี AI มาช่วยในการศึกษาและจัดระบบเนื้อหา",
    category: "Infographic",
    tools: ["NotebookLM"],
    projectType: "Infographic",
    learning:
      "เรียนรู้การใช้ NotebookLM เพื่อช่วยค้นคว้า สรุป และจัดระบบข้อมูล",
    role: "ค้นคว้า วิเคราะห์ และจัดทำสรุปเนื้อหา",
    coverImage: "/images/cover-images/learning-theories.jpg",
    gallery: ["/images/learning-theory.png"],
  },
  {
    slug: "explore-ar-vr-with-quiver",
    number: "04",
    title: "Explore AR/VR with Quiver",
    description:
      "วิดีโอแนะนำการใช้งานแอปพลิเคชัน Quiver ที่เปลี่ยนภาพระบายสี 2 มิติให้กลายเป็นโมเดล 3 มิติ สร้างประสบการณ์การเรียนรู้ผ่านเทคโนโลยี AR",
    video: "https://youtu.be/vV-0dRyaszs?si=DayOXBj7swnlpyvb",
    category: "Video",
    tools: ["Google Flow AI"],
    projectType: "Educational Video",
    learning:
      "เรียนรู้การประยุกต์ใช้ AR เพื่อสร้างสื่อและประสบการณ์การเรียนรู้ที่น่าสนใจ",
    role: "จัดทำวิดีโอแนะนำการใช้งาน",
    coverImage: "/images/cover-images/explore-ar-vr.jpg",
  },
  {
    slug: "indy-and-sompoy-amazon",
    number: "05",
    title: "อินดี้กับส้มป่อยผจญภัยในป่าอเมซอน",
    description:
      "หนังสือนิทานภาพสำหรับเด็กที่สร้างสรรค์ด้วย Gemini ถ่ายทอดเรื่องราวการผจญภัยของ “อินดี้” และ “ส้มป่อย” ผ่านโลกแห่งจินตนาการ",
    image: "/projects/indy-sompoy.png",
    category: "Story Book",
    tools: ["Gemini"],
    projectType: "Story Book",
    learning:
      "เรียนรู้การใช้ Gemini สร้างสรรค์นิทาน ตัวละคร และภาพประกอบสำหรับเด็ก",
    role: "สร้างสรรค์เนื้อเรื่อง ตัวละคร และภาพประกอบ",
    coverImage: "/images/cover-images/story-book.jpg",
    gallery: [
      "/images/indy-sompoy.png",
      "/images/indy-sompoy-2.png",
      "/images/indy-sompoy-3.png",
    ],
    linkURL:
      "https://gemini.google.com/share/0b0f2ac983fa?skid=5a94b871-5895-4951-889a-19034ecc1bf4",
  },
  {
    slug: "nathi-khong-noo",
    number: "06",
    title: "หน้าที่ของหนู ต้องรู้ให้ดี",
    description:
      "แอปพลิเคชันสื่อการเรียนรู้รายวิชาหน้าที่พลเมือง ระดับชั้นประถมศึกษาปีที่ 1 ประกอบด้วยวิดีโอการเรียนรู้และเกมตอบคำถามเพื่อทบทวนความรู้และสะสมคะแนน โดยมุ่งส่งเสริมการเรียนรู้เชิงรุก (Active Learning)",
    category: "EdTech Innovation",
    tools: ["App Script", "Gemini"],
    projectType: "Web Application",
    learning: "เรียนรู้การพัฒนาเว็บแอปพลิเคชันเพื่อการศึกษา และการปรับแก้โค้ด",
    role: "จัดทำเว็บแอปพลิเคชันและปรับแก้โค้ดให้มีประสิทธิภาพ",
    coverImage: "/images/cover-images/ed-tech-innovation.jpg",
    gallery: [
      "/images/natee-noo.png",
      "/images/natee-noo-2.png",
      "/images/natee-noo-3.png",
    ],
    linkURL:
      "https://script.google.com/macros/s/AKfycbxkBBv-ZkESRzcdBloW6Xt2MQ05g93IitxzN9NSwwb6rXRL5G89RhLAQ1NWGQdAU3Qd/exec",
  },
  {
    slug: "google-vids",
    number: "07",
    title: "Google Vids",
    description:
      "วิดีโอการสอนเรื่อง การเก็บของเล่น สำหรับเด็กระดับปฐมวัย โดยใช้ Google Vids เป็นเครื่องมือในการผลิตสื่อการเรียนรู้",
    video: "https://youtu.be/IHeHzadUp_Y?si=4m125ENjNC9DrLsJ",
    category: "AI Video Production",
    tools: ["Google Vids"],
    projectType: "Educational Video",
    learning: "เรียนรู้การใช้ AI ช่วยสร้างวิดีโอการสอนให้เหมาะสมกับผู้เรียน",
    role: "จัดทำวิดีโอการสอน",
    coverImage: "/images/cover-images/ai-video-production.jpg",
  },
  {
    slug: "rajapruek-educational-film",
    number: "08",
    title: "สวนราชพฤกษ์",
    description:
      "ภาพยนตร์สั้นเพื่อการศึกษาในหัวข้อการเชิญชวนท่องเที่ยวสวนราชพฤกษ์",
    video: "https://youtu.be/NSuTBz51dqo?si=L3RcDf36H01gznjg",
    category: "Short Educational Film",
    tools: ["Capcut"],
    projectType: "Short Film",
    learning:
      "เรียนรู้การออกแบบ Storyboard การเขียนสคริปต์ และการทำงานร่วมกับผู้อื่น",
    role: "ออกแบบ Storyboard และเขียนสคริปต์สำหรับการพากย์",
    coverImage: "/images/cover-images/short-education-film.jpg",
  },
];

export const previewProjects: Project[] = [
  projects[6],
  projects[5],
  projects[3],
];
