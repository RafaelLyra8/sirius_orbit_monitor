import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from 'chart.js';
import { options } from "./config";
import { connect, useSelector } from "react-redux";
import { getArchiver} from "../../controllers/archiver";
import { getColor } from "../../controllers/chart";
import { getClosestDate } from "../../controllers/Time/functions";
import BaseChart from "../Patterns/Chart";

function mapStateToProps(state: any){
  const {start_date, end_date, ref_date} = state.time;
  const {list} = state.bpm;
  return {
    bpmList: list,
    startDate: new Date(start_date),
    endDate: new Date(end_date),
    refDate: new Date(ref_date)
  }
}

const DiffChart: React.FC = (props: any) => {
  const [datasets, setDatasets] = useState({});
  const bpms = JSON.parse(props.bpmList);
  const axisColors = JSON.parse(useSelector((state: any) => state.bpm.colors));

  Chart.register(...registerables);

  useEffect(() => {
    buildChart();
  }, [props.bpmList, props.startDate, props.endDate])

  const buildDataset = (dataList: any) => {
    return dataList.map((data: any) => {
      return {
        x: data.x.toLocaleString(),
        y: data.y
      };
    });
  }

  async function differentiateData(diffData: any[], name: string): Promise<any>{
    let valueComp = await getClosestDate(name, props.refDate);
    diffData.map((point) =>{
      point.y = point.y - valueComp;
    });
    return diffData;
  }

  async function handleCanvasClick(evt: any){
    // const chartParameters = chartInstance.chartArea;
    // const chartTimeUnit = (props.endDate.getTime() - props.startDate.getTime())/chartParameters.width;
    // const widPoint = evt.clientX - chartParameters.left;
    // const newRefDate = chartTimeUnit * widPoint + props.startDate.getTime();
    // TimeDispatcher.SetRefDate(new Date(newRefDate));
  }

  async function buildChart(){
    return await Promise.all(
      Object.entries(bpms).map(async ([name, state]) => {
        if(state){
          const archiverResult = await getArchiver(name, props.startDate, props.endDate, 800);
          const rawDataset = await buildDataset(archiverResult);
          const finalDataset = await differentiateData(rawDataset, name);
          const color = getColor(name, axisColors);
          const datasetTemp = {
            data: finalDataset,
            xAxisID: 'x-axis-0',
            label: name,
            borderColor: color,
            backgroundColor: color
          };
          setDatasets(datasetTemp);
        }else{
          setDatasets({});
        }
      })
    );
  };

  return(
    <BaseChart
      options={options}
      datasets={datasets}
      clickAction={handleCanvasClick}/>
  );
};

export default connect(mapStateToProps)(DiffChart);
