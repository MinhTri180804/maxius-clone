import Section from '@/components/commons/Section';

export default function HeroSection() {
  return (
    <Section className="bg-[url('/hero_banner.png')] bg-cover flex flex-col gap-[34px] items-start px-[39px] justify-center">
      <h1 className="uppercase text-[45px] font-roboto font-bold leading-[45px] text-title-hero-section">
        Max I & US
      </h1>
      <div className="w-[247px] flex flex-col gap-5 font-light text-[15px] text-description-hero-section">
        <p className="flex flex-col gap-0 items-start">
          <span>Maxius is the only self-developed</span>
          <span>semiconductor company that </span>
          <span>focuses on developing High-Performance </span>
          <span>Servers. We provide specialized </span>
          <span>solutions tailored towards different </span>
          <span>sectors of the IT industry and strive </span>
          <span>to break into the global market as a </span>
          <span>leader in server technology.</span>
        </p>

        <p>Together, we will be the best in value and speed.</p>
      </div>
    </Section>
  );
}
