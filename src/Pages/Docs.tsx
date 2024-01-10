import { CustomChart, ImportButton } from "pfe-chartsv";
import "pfe-chartsv/dist/index.css";

import { useRef } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

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
  exampleRef: any;
  importButtonRef: any;
  chartCreatorRef: any;
}

export const Docs = () => {
  const installationRef = useRef(null);
  const introductionRef = useRef(null);
  const whatIsRef = useRef(null);
  const issuesRef = useRef(null);
  const componentsRef = useRef(null);
  const howInstallRef = useRef(null);
  const exampleRef = useRef(null);
  const importButtonRef = useRef(null);
  const chartCreatorRef = useRef(null);

  return (
    <div className="flex bg-main">
      <Sidebar
        installationRef={installationRef}
        introductionRef={introductionRef}
        whatIsRef={whatIsRef}
        issuesRef={issuesRef}
        componentsRef={componentsRef}
        howInstallRef={howInstallRef}
        exampleRef={exampleRef}
        importButtonRef={importButtonRef}
        chartCreatorRef={chartCreatorRef}
      />
      <div className="w-full">
        <div className="w-full flex justify-center mt-5 text-white">
          <h1 className="font-bold text-5xl">Documentation</h1>
        </div>

        <div className="w-full flex justify-start mt-10 p-10">
          <div className="w-full">
            <MainSection title="Introduction" thisRef={introductionRef} />
            <SubSection title="What is ChartSV ?" thisRef={whatIsRef} lowMargin>
              <ParagraphSection>
                ChartSV is a React library that allows you to create charts from
                CSV files. It is based on the ApexCharts library. It started
                from a school project, where we had to create a library from
                scratch. We decided to create a library that allows you to
                create charts from CSV files, because not only it can be very
                useful, but also because it was a good way to learn how to
                create a library !
              </ParagraphSection>
            </SubSection>

            <SubSection title="Examples" thisRef={exampleRef}>
              <ParagraphSection>
                You have 2 main components available with ChartSV :{" "}
                <span
                  className="font-bold hover:text-blue-400 transition duration-200 cursor-pointer"
                  onClick={() => {
                    if (importButtonRef.current) {
                      (importButtonRef.current as any).scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  ImportButton
                </span>{" "}
                and{" "}
                <span
                  className="font-bold hover:text-blue-400 transition duration-200 cursor-pointer"
                  onClick={() => {
                    if (chartCreatorRef.current) {
                      (chartCreatorRef.current as any).scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  CustomChart
                </span>
                .
              </ParagraphSection>
              <ParagraphSection>
                <span
                  className="font-bold hover:text-blue-400 transition duration-200 cursor-pointer"
                  onClick={() => {
                    if (importButtonRef.current) {
                      (importButtonRef.current as any).scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  ImportButton
                </span>{" "}
                is principaly made for users, and it allows them to import a CSV
                file to then display a customisable chart :
              </ParagraphSection>
              <ImportButton size="medium" />
              <ParagraphSection>
                <span
                  className="font-bold hover:text-blue-400 transition duration-200 cursor-pointer"
                  onClick={() => {
                    if (chartCreatorRef.current) {
                      (chartCreatorRef.current as any).scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  CustomChart
                </span>{" "}
                is principaly made for developers, and it allows to create a
                custom chart from a CSV file in your computer, directly :
              </ParagraphSection>
              <CustomChart
                link={"./test.csv"}
                cols={["monnaie", "age"]}
                chartParams={{
                  width: "100%",
                  height: 500,
                  yAxisMax: 100,
                  yAxisMin: 0,
                  backgroundColor: "#23272F",
                  textColor: "#FFFFFF",
                }}
              />
              <ParagraphSection>
                On the chart above, we linked a CSV file with 5 columns, where 2
                are numbers. We also added some parameters to the chart, like
                the height, the width, the background color, the maximum and
                minimum values of the Y axis.
              </ParagraphSection>
              <ParagraphSection>
                You can see below 2 more examples of charts created with the
                same CSV file :
              </ParagraphSection>
              <div className="flex w-full justify-between">
                <CustomChart
                  link={"./test.csv"}
                  cols={["monnaie", "age"]}
                  chartParams={{
                    type: "area",
                    height: 500,
                    width: "95%",
                    colors: ["#FF0000", "#00FF00"],
                    backgroundColor: "#23272F",
                    textColor: "#FFFFFF",
                    toolbar: false,
                  }}
                />
                <CustomChart
                  link={"./test.csv"}
                  cols={["monnaie"]}
                  chartParams={{
                    type: "pie",
                    stacked: true,
                    height: 500,
                    width: "95%",
                    backgroundColor: "#23272F",
                    textColor: "#FFFFFF",
                    showLabels: true,
                    toolbar: false,
                    colors: Array.from(Array(10).keys()).map(
                      (i) => `rgb(${255 - i * 25}, ${i * 25}, ${255 - i * 25})`
                    ),
                  }}
                />
              </div>
              <ParagraphSection>
                As you can see, we have the same data, but we can create
                different types of charts, with different parameters. You can
                find all the parameters available on the{" "}
                <span
                  className="font-bold hover:text-blue-400 transition duration-200 cursor-pointer"
                  onClick={() => {
                    if (componentsRef.current) {
                      (componentsRef.current as any).scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Components
                </span>{" "}
                section.
              </ParagraphSection>
            </SubSection>

            <div className="w-full mt-24">
              <MainSection title="Installation" thisRef={installationRef} />
              <SubSection
                title="How to install ?"
                thisRef={howInstallRef}
                lowMargin
              >
                <ParagraphSection>
                  To install ChartSV, you can use the following command in your
                  terminal :
                </ParagraphSection>
                <CodeBlock
                  text={`npm install pfe-chartsv`}
                  language="bash"
                  theme={dracula}
                />
                <ParagraphSection>
                  You can then try it by importing a component, for example :
                </ParagraphSection>
                <CodeBlock
                  text={`import { ImportButton } from 'pfe-chartsv'
import 'pfe-chartsv/dist/index.css'
const App = () => {
  return (
    <div>
      <ImportButton size='medium' />
    </div>
  )
}
export default App`}
                  language="jsx"
                  theme={dracula}
                />
                <ParagraphSection>
                  If you have the import button displayed, then you have
                  properly installed ChartSV !
                </ParagraphSection>
              </SubSection>
              <SubSection title="Know issues" thisRef={issuesRef}>
                <ParagraphSection>
                  If you get an error when executing npm start on /example
                  folder, you have 2 solutions:
                </ParagraphSection>
                <ParagraphSection bold>
                  1. Upgrade your Node version to latest (actually v20)
                </ParagraphSection>
                <ParagraphSection bold>
                  2. Remove the --openssl-legacy-provider in package.json (line
                  7-8)
                </ParagraphSection>
                <ParagraphSection>
                  If you still have issues, please contact us at{" "}
                  <a
                    href="mailto:
                  corentin.ancel@edu.devinci.fr"
                    className="text-blue-500 font-bold hover:text-blue-200 transition duration-200"
                  >
                    corentin.ancel@edu.devinci.fr
                  </a>{" "}
                  or at{" "}
                  <a
                    href="mailto:
                  kelian.raoult-severac@edu.devinci.fr"
                    className="text-blue-500 font-bold hover:text-blue-200 transition duration-200"
                  >
                    kelian.raoult-severac@edu.devinci.fr
                  </a>
                </ParagraphSection>
              </SubSection>
            </div>
            <div className="w-full mt-24">
              <MainSection title="Components" thisRef={componentsRef} />
              <SubSection title="ImportButton" thisRef={importButtonRef}>
                <ParagraphSection>
                  ImportButton is a component that allows users to import a CSV
                  file, and then display a chart from it. It is very easy to use
                  ,you just have to import it, and then use it :
                </ParagraphSection>
                <ImportButton size="medium" color="white" />
                <ParagraphSection>
                  To import it in your project, you can use the following code :
                </ParagraphSection>
                <CodeBlock
                  text={`import { ImportButton } from 'pfe-chartsv'
import 'pfe-chartsv/dist/index.css'
const App = () => {
  return (
    <div>
      <ImportButton 
        size='medium' 
        color='white'
      />
    </div>
  )
}

export default App`}
                  language="jsx"
                  theme={dracula}
                />
                <ParagraphSection>Here are the props :</ParagraphSection>
                <CodeBlock
                  text={`{
  size: 'small' | 'medium' | 'large',
  color: 'white' | 'black'
}`}
                  showLineNumbers={false}
                  language="tsx"
                  theme={dracula}
                />
              </SubSection>
              <SubSection title="CustomChart" thisRef={chartCreatorRef}>
                <ParagraphSection>
                  CustomChart is a component that allows developers to create a
                  chart from a CSV file. It is easy to use, you just have to
                  import it, and choose the parameters you want :
                </ParagraphSection>
                <CustomChart
                  link={"./test.csv"}
                  cols={["monnaie", "age"]}
                  chartParams={{
                    width: "100%",
                    height: 500,
                    yAxisMax: 100,
                    yAxisMin: 0,
                    backgroundColor: "#23272F",
                    textColor: "#FFFFFF",
                  }}
                />
                <CodeBlock
                  text={`import { CustomChart } from 'pfe-chartsv'
import 'pfe-chartsv/dist/index.css'
const App = () => {
  return (
    <div>
      <CustomChart
        link={'./test.csv'}
        cols={['monnaie', 'age']}
        chartParams={{
          width: '100%',
          height: 500,
          yAxisMax: 100,
          yAxisMin: 0,
          backgroundColor: '#23272F',
          textColor: '#FFFFFF'
        }}
      />
    </div>
  )
}

export default App`}
                  language="jsx"
                  theme={dracula}
                />
                <ParagraphSection>Here are the props :</ParagraphSection>
                <CodeBlock
                  text={`{
  link: string,
  cols: string[ ],
  chartParams?: {
    type?: 'bar' | 'line' | 'area' | 'table' | 'pie'
    stacked?: boolean
    stackType?: boolean
    showLabels?: boolean
    yAxisMax?: number
    yAxisMin?: number
    height?: number | string
    width?: number | string
    colors?: string[ ]
    backgroundColor?: string
    textColor?: string
    toolbar?: boolean
  },
}`}
                  showLineNumbers={false}
                  language="tsx"
                  theme={dracula}
                />
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
    exampleRef,
    importButtonRef,
    chartCreatorRef,
  } = props;

  return (
    <div className="flex flex-col w-1/5 h-screen bg-main sticky top-0 text-white p-5">
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
        <SidebarLink linkRef={exampleRef} depth={2}>
          Examples
        </SidebarLink>
        <SidebarLink linkRef={installationRef} depth={1}>
          Installation
        </SidebarLink>
        <SidebarLink linkRef={howInstallRef} depth={2}>
          How to install ?
        </SidebarLink>
        <SidebarLink linkRef={issuesRef} depth={2}>
          Know issues
        </SidebarLink>
        <SidebarLink linkRef={componentsRef} depth={1}>
          Components
        </SidebarLink>
        <SidebarLink linkRef={importButtonRef} depth={2}>
          ImportButton
        </SidebarLink>
        <SidebarLink linkRef={chartCreatorRef} depth={2}>
          CustomChart
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
      className={`flex flex-col ${fontSize} ${fontWeight} ${marginLeft()} hover:text-blue-700 cursor-pointer hover:bg-white p-2 rounded-md`}
      onClick={() => linkRef.current.scrollIntoView({ behavior: "smooth" })}
    >
      <p>{children}</p>
    </div>
  );
};

const MainSection = (props: { title: string; thisRef: any }) => {
  return (
    <div className="w-full" ref={props.thisRef}>
      <h2 className="text-4xl font-bold border-l-2 p-2 border-blue-700 text-white">
        {props.title}
      </h2>
    </div>
  );
};

const SubSection = (props: {
  title: string;
  thisRef: any;
  children?: React.ReactNode;
  lowMargin?: boolean;
}) => {
  return (
    <div className={`w-full ${props.lowMargin ? "mt-3" : "mt-10"}`}>
      <h3
        ref={props.thisRef}
        className="text-3xl font-italic mt-5 mb-5 text-white font-bold"
      >
        {props.title}
      </h3>
      {props.children}
    </div>
  );
};

const ParagraphSection = (props: {
  children: React.ReactNode;
  bold?: boolean;
}) => {
  return (
    <div
      className={`mt-3 mb-3 ${
        props.bold ? "font-bold" : "font-base"
      } text-white text-xl`}
    >
      {props.children}
    </div>
  );
};
