import { useSelector } from "react-redux";

import Led from "../../Patterns/Led";
import { reverseAxis } from "../../../controllers/patterns";
import { getBpmName } from "../../../controllers/bpm";
import { DictState } from "../../../assets/interfaces/patterns";
import { DictBPM, InitLed } from "../../../assets/interfaces/bpm";
import { StoreInterface } from "../../../redux/storage/store";

const defaultProps: InitLed = {
    id: '',
    axis: 'X',
    ledProps: {},
    othAxis: {},
    mountData: () => null,
    updateData: ()=> null
}

const BPMLed: React.FC<InitLed> = (props) => {
    // Load the states of one led representing a BPM
    const bpmList = useSelector((state: StoreInterface) => state.bpm.bpm_list);

    //Initialize one BPM led in one axis
    function initBPMAxis(list: DictState, states: DictBPM, name_waxis: string, bpm_name: string): void {
        if(name_waxis in states){
            list[bpm_name] = states[name_waxis][0];
        }else{
            list[bpm_name] = false;
        }
    }

    //Initialize one BPM led in both axis
    function initStates(bpm_name: string): boolean {
        const states: DictBPM = JSON.parse(bpmList);

        let name_waxis: string = getBpmName(
            bpm_name, props.axis);
        initBPMAxis(
            props.ledProps, states, name_waxis, bpm_name);

        name_waxis = getBpmName(
            bpm_name, reverseAxis(props.axis));
        initBPMAxis(
            props.othAxis, states, name_waxis, bpm_name);

        return props.ledProps[bpm_name];
      }

      return (
        <Led
          key={props.id}
          id={props.id}
          mountData={props.mountData}
          updateData={props.updateData}
          state={initStates(props.id)} />
      );
}

BPMLed.defaultProps = defaultProps;
export default BPMLed;
