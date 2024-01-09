import { CustomChart } from "pfe-chartsv";
import { Button } from "../Components/Button";

export const Home = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-1/2 bg-white-500 border-b-2">
        <div className="flex w-full h-full justify-end flex-col items-center pb-20">
          <h1 className="text-5xl font-bold">PFE ChartSV</h1>
          <h2 className="text-2xl mt-3">
            A React library to create charts from CSV.
          </h2>
          <div className="flex mt-10 w-1/4 justify-between">
            <Button
              to="demos"
              text="Demos"
              className="w-52 text-xl bg-green-900 rounded-lg p-2 text-white hover:bg-white hover:text-green-900 border-2 border-green-900 transition duration-200 ease-in-out flex justify-center"
            />
            <Button
              to="docs"
              text="Get started"
              className="w-52 text-xl bg-blue-900 rounded-lg p-2 text-white hover:bg-white hover:text-blue-900 border-2 border-blue-900 transition duration-200 ease-in-out flex justify-center"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3 p-12">
          <h3>What is ChartSV ?</h3>
          <p className=" font-light text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            enim, illo velit iure asperiores fugiat odit ea repellat officia sed
            deserunt commodi. Repellat rerum laborum alias quis incidunt in
            tempore.
          </p>
        </div>
        <div>
          <img src="./test.png" alt="" />
          <CustomChart
            link={"./test.csv"}
            title={"Custom chart"}
            description={"Custom description"}
            cols={["age", "monnaie"]}
          />
        </div>
      </div>
    </div>
  );
};
