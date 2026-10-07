import { AboutCard } from "./about-card";

type AboutIntroProps = {
  title: string;
  data: AboutIntroData;
};

type AboutIntroData = {
  name: string;
  studentId: string;
  major: string;
  description: string;
  nickname: string;

  image: string;
  faculty: string;
};

export default function AboutIntro({ title, data }: AboutIntroProps) {
  return (
    <AboutCard title={title}>
      <h2>{data.name}</h2>
      <h3 className="font-bold">
        ชื่อเล่น :<span className="font-normal"> {data.nickname}</span>
      </h3>
      <h3 className="font-bold">{data.faculty}</h3>
      <p>{data.major}</p>
      <h3 className="font-bold">รหัสนักศึกษา</h3>
      <p>{data.studentId}</p>
      <br />
      <p>{data.description}</p>
    </AboutCard>
  );
}
