import { AboutCard } from "./about-card";

type AboutGoalProps = {
  title: string;
  goal: string;
};

export default function AboutGoal({
  title,
  goal,
}: AboutGoalProps) {
  return (
    <AboutCard title={title}>
      <p>{goal}</p>
    </AboutCard>
  );
}
