import TextTitle from "@/components/TextTitle";
import LenisScroll from "./LenisScroll";
import Paragraph from "@/components/Paragraph";
import { service } from "@/utils/serviceData";
import TextService from "./TextService";
import ImageParent from "./ImageParent";

const Services = () => {
  return (
    <LenisScroll>
      <div className="relative">
        <TextTitle text="Services" />
        <Paragraph cn="italic absolute right-0 top-10">
          &quot;Build with passion
          <br />
          Serve with passion&quot;
        </Paragraph>

        <section className="flex items-start">
          <div className="w-full py-[50svh]">
            <ul>
              {service.map((srv) => (
                <li key={`serv_${srv?.id}`}>
                  <TextService index={srv?.id}>{srv?.p}</TextService>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-screen sticky top-0 flex items-center justify-center">
            <ImageParent />
          </div>
        </section>
      </div>
    </LenisScroll>
  );
};

export default Services;
