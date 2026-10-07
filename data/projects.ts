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
};

export const projects: Project[] = [
  {
    slug: "chatgpt-guide",
    number: "01",
    title: "Infographic — ChatGPT Guide",
    description:
      "อินโฟกราฟิกแนะนำการใช้งาน ChatGPT เพื่อทำความรู้จักเครื่องมือ AI และแนวทางการใช้งานอย่างเหมาะสม",
    image: "/projects/chatgpt-guide.png",
    category: "Infographic",
    tools: ["ChatGPT"],
    projectType: "Infographic",
    learning:
      "เรียนรู้การใช้งาน ChatGPT และการเขียน Prompt ให้ได้ผลลัพธ์ตรงตามต้องการ",
    role: "ออกแบบและจัดทำอินโฟกราฟิก",
    coverImage: "/images/profile.jpg",
  },

  {
    slug: "behaviorism",
    number: "02",
    title: "Infographic — พฤติกรรมนิยม",
    description:
      "อินโฟกราฟิกสรุปสาระสำคัญของทฤษฎีพฤติกรรมนิยม พร้อมเรียบเรียงเนื้อหาให้อยู่ในรูปแบบที่เข้าใจง่าย",
    image: "/images/behavior.png",
    category: "Infographic",
    tools: [],
    projectType: "Infographic",
    learning:
      "เรียนรู้การวิเคราะห์และสรุปสาระสำคัญ พร้อมนำเสนอข้อมูลให้เข้าใจง่าย",
    role: "วิเคราะห์ สรุปเนื้อหา และออกแบบอินโฟกราฟิก",
    coverImage: "/images/profile.jpg",
    gallery: ["/images/behavior.png", "/images/behavior2.png"],
  },

  {
    slug: "learning-theories",
    number: "03",
    title: "Infographic — Learning Theories",
    description:
      "สรุปทฤษฎีการเรียนรู้ผ่าน NotebookLM โดยนำเทคโนโลยี AI มาช่วยในการศึกษาและจัดระบบเนื้อหา",
    image: "/projects/learning-theories.png",
    category: "Infographic",
    tools: ["NotebookLM"],
    projectType: "Infographic",
    learning:
      "เรียนรู้การใช้ NotebookLM เพื่อช่วยค้นคว้า สรุป และจัดระบบข้อมูล",
    role: "ค้นคว้า วิเคราะห์ และจัดทำสรุปเนื้อหา",
    coverImage: "/images/profile.jpg",
  },

  {
    slug: "explore-ar-vr-with-quiver",
    number: "04",
    title: "Video — Explore AR/VR with Quiver",
    description:
      "วิดีโอแนะนำการใช้งานแอปพลิเคชัน Quiver ที่เปลี่ยนภาพระบายสี 2 มิติให้กลายเป็นโมเดล 3 มิติ สร้างประสบการณ์การเรียนรู้ผ่านเทคโนโลยี AR",
    video: "https://youtu.be/vV-0dRyaszs?si=DayOXBj7swnlpyvb",
    category: "Video",
    tools: ["Quiver"],
    projectType: "Educational Video",
    learning:
      "เรียนรู้การประยุกต์ใช้ AR เพื่อสร้างสื่อและประสบการณ์การเรียนรู้ที่น่าสนใจ",
    role: "จัดทำวิดีโอแนะนำการใช้งาน",
    coverImage: "/images/profile.jpg",
  },

  {
    slug: "indy-and-sompoy-amazon",
    number: "05",
    title: "Story Book — อินดี้กับส้มป่อยผจญภัยในป่าอเมซอน",
    description:
      "หนังสือนิทานภาพสำหรับเด็กที่สร้างสรรค์ด้วย Gemini ถ่ายทอดเรื่องราวการผจญภัยของ “อินดี้” และ “ส้มป่อย” ผ่านโลกแห่งจินตนาการ",
    image: "/projects/indy-sompoy.png",
    category: "Story Book",
    tools: ["Gemini"],
    projectType: "Story Book",
    learning:
      "เรียนรู้การใช้ Gemini สร้างสรรค์นิทาน ตัวละคร และภาพประกอบสำหรับเด็ก",
    role: "สร้างสรรค์เนื้อเรื่อง ตัวละคร และภาพประกอบ",
    coverImage: "/images/profile.jpg",
  },

  {
    slug: "nathi-khong-noo",
    number: "06",
    title: "EdTech Innovation — หน้าที่ของหนู ต้องรู้ให้ดี",
    description:
      "แอปพลิเคชันสื่อการเรียนรู้รายวิชาหน้าที่พลเมือง ระดับชั้นประถมศึกษาปีที่ 1 ประกอบด้วยวิดีโอการเรียนรู้และเกมตอบคำถามเพื่อทบทวนความรู้และสะสมคะแนน โดยมุ่งส่งเสริมการเรียนรู้เชิงรุก (Active Learning)",
    image: "/projects/nathi-khong-noo.png",
    category: "EdTech Innovation",
    tools: [],
    projectType: "Web Application",
    learning: "เรียนรู้การพัฒนาเว็บแอปพลิเคชันเพื่อการศึกษา และการปรับแก้โค้ด",
    role: "จัดทำเว็บแอปพลิเคชันและปรับแก้โค้ดให้มีประสิทธิภาพ",
    coverImage: "/images/profile.jpg",
  },

  {
    slug: "google-vids",
    number: "07",
    title: "AI Video Production — Google Vids",
    description:
      "วิดีโอการสอนเรื่อง การเก็บของเล่น สำหรับเด็กระดับปฐมวัย โดยใช้ Google Vids เป็นเครื่องมือในการผลิตสื่อการเรียนรู้",
    video: "https://youtu.be/IHeHzadUp_Y?si=4m125ENjNC9DrLsJ",
    category: "AI Video Production",
    tools: ["Google Vids"],
    projectType: "Educational Video",
    learning: "เรียนรู้การใช้ AI ช่วยสร้างวิดีโอการสอนให้เหมาะสมกับผู้เรียน",
    role: "จัดทำวิดีโอการสอน",
    coverImage: "/images/profile.jpg",
  },

  {
    slug: "rajapruek-educational-film",
    number: "08",
    title: "Short Educational Film — สวนราชพฤกษ์",
    description:
      "ภาพยนตร์สั้นเพื่อการศึกษาในหัวข้อการเชิญชวนท่องเที่ยวสวนราชพฤกษ์",
    video: "https://youtu.be/NSuTBz51dqo?si=L3RcDf36H01gznjg",
    category: "Short Educational Film",
    tools: [],
    projectType: "Short Film",
    learning:
      "เรียนรู้การออกแบบ Storyboard การเขียนสคริปต์ และการทำงานร่วมกับผู้อื่น",
    role: "ออกแบบ Storyboard และเขียนสคริปต์สำหรับการพากย์",
    coverImage: "/images/profile.jpg",
  },
];
