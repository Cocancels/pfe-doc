import { useRef } from "react";

interface SidebarLinkProps {
  linkRef: any;
  children: React.ReactNode;
  depth: number;
}

interface SidebarProps {
  installationRef: any;
  introductionRef: any;
  whatIsRef: any;
  issuesRef: any;
  componentsRef: any;
  howInstallRef: any;
}

export const Docs = () => {
  const installationRef = useRef(null);
  const introductionRef = useRef(null);
  const whatIsRef = useRef(null);
  const issuesRef = useRef(null);
  const componentsRef = useRef(null);
  const howInstallRef = useRef(null);

  return (
    <div className="flex">
      <Sidebar
        installationRef={installationRef}
        introductionRef={introductionRef}
        whatIsRef={whatIsRef}
        issuesRef={issuesRef}
        componentsRef={componentsRef}
        howInstallRef={howInstallRef}
      />
      <div className="w-full">
        <div className="w-full flex justify-center mt-5">
          <h1 className="font-bold text-5xl">Documentation</h1>
        </div>

        <div className="w-full flex justify-start mt-10 p-10">
          <div className="w-full">
            <MainSection title="Introduction" ref={introductionRef} />
            <SubSection title="What is ChartSV ?" ref={whatIsRef}>
              <p className="text-lg mt-2">
                ChartSV is a React library that allows you to create charts from
                CSV files. It is based on the ApexCharts library. It started
                from a school project, where we had to create a library from
                scratch. We decided to create a library that allows you to
                create charts from CSV files, because not only it can be very
                useful, but also because it was a good way to learn how to
                create a library !
              </p>
            </SubSection>

            <div className="w-full mt-24">
              <MainSection title="Installation" ref={installationRef} />
              <SubSection title="How to install ?" ref={howInstallRef}>
                <p className="text-lg mt-2">
                  To install ChartSV, you can use the following command in your
                  terminal :
                </p>
                <CodeDisplay code="npm install pfe-chartsv" />
              </SubSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = (props: SidebarProps) => {
  const {
    installationRef,
    introductionRef,
    whatIsRef,
    issuesRef,
    componentsRef,
    howInstallRef,
  } = props;

  return (
    <div className="flex flex-col w-1/4 h-screen bg-zinc-900 sticky top-0 text-white p-5">
      <div className="flex justify-center">
        <h3 className="text-3xl">PFE ChartSV</h3>
      </div>
      <div className="flex flex-col">
        <SidebarLink linkRef={introductionRef} depth={1}>
          Introduction
        </SidebarLink>
        <SidebarLink linkRef={whatIsRef} depth={2}>
          What is ChartSV ?
        </SidebarLink>
        <SidebarLink linkRef={installationRef} depth={1}>
          Installation
        </SidebarLink>
        <SidebarLink linkRef={howInstallRef} depth={2}>
          How to install ?
        </SidebarLink>
        <SidebarLink linkRef={issuesRef} depth={2}>
          Issues
        </SidebarLink>
        <SidebarLink linkRef={componentsRef} depth={1}>
          Components
        </SidebarLink>
      </div>
    </div>
  );
};

const SidebarLink = (props: SidebarLinkProps) => {
  const { linkRef, children, depth } = props;

  const fontSize = depth === 1 ? "text-xl" : "text-lg";
  const fontWeight = depth === 1 ? "font-bold" : "font-light";
  const marginLeft = () => {
    if (depth === 1) {
      return "ml-0 mt-5";
    } else if (depth === 2) {
      return "ml-3 mt-1";
    } else if (depth === 3) {
      return "ml-5";
    } else if (depth === 4) {
      return "ml-10";
    } else {
      return "ml-15";
    }
  };

  return (
    <div
      className={`flex flex-col ${fontSize} ${fontWeight} ${marginLeft()}`}
      onClick={() => linkRef.current.scrollIntoView({ behavior: "smooth" })}
    >
      <p>{children}</p>
    </div>
  );
};

interface CodeDisplayProps {
  code: string;
}

const CodeDisplay = (props: CodeDisplayProps) => {
  const { code } = props;

  return (
    <div className="bg-gray-800 text-white p-4 font-mono text-sm rounded-md overflow-x-auto mt-5">
      <pre>{code}</pre>
    </div>
  );
};

const MainSection = (props: { title: string; ref: any }) => {
  return (
    <div className="w-full" ref={props.ref}>
      <h2 className="text-4xl font-bold text-blue-700 border-l-2 p-2 border-blue-700">
        {props.title}
      </h2>
    </div>
  );
};

const SubSection = (props: {
  title: string;
  ref: any;
  children?: React.ReactNode;
}) => {
  return (
    <div className="mt-2 pl-2">
      <h3 ref={props.ref} className="text-2xl font-italic mt-5">
        {props.title}
      </h3>
      {props.children}
    </div>
  );
};
