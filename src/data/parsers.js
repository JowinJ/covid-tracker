import format from './format';
import moment from 'moment';


function usStats(data){
    //putting the variable name in [] makes it equal to the 
    //first element of the array in the data
    const usStatsRaw = data[0];

    return parseData(usStatsRaw);

    // return {
    //     cases: format.number(usStatsRaw.positive),
    //     deaths: format.number(usStatsRaw.death),
    //     recovered: format.number(usStatsRaw.recovered),
    //     ventilator: format.number(usStatsRaw.onVentilatorCurrently),
    //     hospitalized: format.number(usStatsRaw.hospitalized),
    //     icu: format.number(usStatsRaw.inIcuCurrently),
    //     tested: format.number(usStatsRaw.totalTestResults),
    //     updated: moment(usStatsRaw.lastModified).format('LLLL')
    // }
}

function stateStats(state, data){
    //putting the variable name in [] makes it equal to the 
    //first element of the array in the data
    const [stateRawData] = data.find(data => data.state === state);

    return parseData(stateRawData);

    
}

function parseData(rawData){
    return {
        cases: format.number(rawData.positive),
        deaths: format.number(rawData.death),
        recovered: format.number(rawData.recovered),
        ventilator: format.number(rawData.onVentilatorCurrently),
        hospitalized: format.number(rawData.hospitalized),
        icu: format.number(rawData.inIcuCurrently),
        tested: format.number(rawData.totalTestResults),
        updated: moment(rawData.lastModified).format('LLLL')
    }
}

export default {
    usStats,
    stateStats
}