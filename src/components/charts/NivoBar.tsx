'use client'
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { color } from 'd3-color'; // Import color from d3-color package


type Props = {
    data: { task: string; hours: number }[];
};


const NivoBar = ({ data }: Props) => {
  return (
    <div>
      <ResponsiveBar
        data={data}
        keys={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Hours',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
      />
    </div>
  );
};

const demoData = [
    { task: 'Task A', hours: 4 },
    { task: 'Task B', hours: 7 },
    { task: 'Task C', hours: 5 },
    { task: 'Task D', hours: 3 },
    { task: 'Task E', hours: 6 },
    { task: 'Task F', hours: 2 },
    { task: 'Task G', hours: 4 },
  ];
  
  const DemoNivoBar = () => {
    return <NivoBar data={demoData} />;
  };
  
  export default DemoNivoBar;

