import format from './format';
import moment from 'moment';


function usStats(data){
    //putting the variable name in [] makes it equal to the 
    //first element of the array in the data
    const usStatsRaw = data[0];

    return {
        cases: format.number(usStatsRaw.positive),
        deaths: format.number(usStatsRaw.death),
        recovered: format.number(usStatsRaw.recovered),
        ventilator: format.number(usStatsRaw.onVentilatorCurrently),
        hospitalized: format.number(usStatsRaw.hospitalized),
        icu: format.number(usStatsRaw.inIcuCurrently),
        tested: format.number(usStatsRaw.totalTestResults),
        updated: moment(usStatsRaw.lastModified).format('LLLL')
    }
}

export default {
    usStats,
}