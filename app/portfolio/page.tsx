import Paragraph from "@/components/Paragraph";
import TextTitle from "@/components/TextTitle";
import TextPortfolio from "./TextPortfolio";
import { data } from "@/utils/portfolioData";
import ImageParent from "./ImageParent";

const Portfolio = () => {
  return (
    <div className="static">
      <TextTitle text="Portfolio" />
      <Paragraph cn="text-center mb-2">
        &quot;we are promising best user experience to our client.&quot;
        <br />
        These are our portfolio
      </Paragraph>
      <section className="relative flex flex-col items-center h-[calc(100svh-51px-48px-32px)]">
        <div className="flex justify-between items-center w-full h-full">
          <div className="w-full flex flex-col justify-center">
            {data.map((portfolio, index) => (
              <TextPortfolio key={index} {...portfolio} />
            ))}
          </div>
          <ImageParent />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
