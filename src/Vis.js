//JSON Vars:
const { VictoryChart, VictoryBar, VictoryAxis } = require('victory');
const data = require('./data.json')
var formatData = data["cachedContents"]["top"];
formatData = formatData.slice(0, 4);


//TODO MOUSEOVER: DISPLAY NAME + EXACT COUNT
//TODO Y AXIS

function Vis() {
    
    console.log(formatData);
    return (
        <div className="root">
          <header className="Vis-header">
            <h1>Tree Count Histogram for every park in NYC:</h1>
          </header>
        {/* Holds the Whole other pieces together axis', padding, and bars  */}
        <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={20}
        >
        {/* This Victory Axis is used for the y values: park names */}
        <VictoryAxis
            tickValues={[1,2,3,4]}
            tickFormat={["1st", "2nd", "3rd", "4th"]}
        />
        {/* This Victory Axis is used for the x values: tree */}
        <VictoryAxis
          dependentAxis //specifies if it goes on left side or bottom side of graph
          tickFormat={(x) => (x)}
        />
        <VictoryBar
            data={formatData}
            x="item"
            y="count"
        />
        

           
        </VictoryChart>
        </div>
      );
}

export default Vis;