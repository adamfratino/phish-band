import { ConditionalWrapper } from "@/components/ConditionalWrapper";

type Message = {
  bigText?: string;
  smallText?: string;
  link?: string;
};

export const Message = ({
  bigText = "Love & Light\nMotherfuckers",
  smallText = "Clever Crew '24",
  link = "https://www.youtube.com/watch?v=KmHjM5q3tis",
}: Message) => (
  <div className="flex flex-col items-center hover:opacity-80 transition-opacity">
    <ConditionalWrapper
      condition={Boolean(link)}
      wrapper={
        <a href={link} target="_blank" className="contents text-inherit" />
      }
    >
      <h1 className="text-3xl md:text-4xl mb-3 text-center">{bigText}</h1>
      <h2 className="text-xs">{smallText}</h2>
    </ConditionalWrapper>
  </div>
);
