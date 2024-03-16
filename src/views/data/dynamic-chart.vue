<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';

  const chartRef = ref();
  let myChart: echarts.ECharts;

  const props = defineProps({
    title: {
      type: String,
      default: 'None',
    },
  });

  type DataItem = [number, number];

  const data: DataItem[] = generateData();

  function func(x: number) {
    return 0.2 * Math.sin(x) + 20 + 10 * (Math.random() - 0.5);
  }

  const stepX = 10;

  function generateData(): DataItem[] {
    let data: DataItem[] = [];
    for (let i = 0; i <= 800; i += stepX) {
      data.push([i, func(i)]);
    }
    return data;
  }

  const option: echarts.EChartsOption = {
    xAxis: {
      name: 'time/1s',
      axisLine: {
        show: false,
      },
      boundaryGap: false,
    },
    yAxis: {
      name: props.title,
      axisLine: {
        show: false,
      },
      min: 0,
      max: 50,
    },
    series: [
      {
        type: 'line',
        showSymbol: false,
        data,
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function updateYMinMax() {
    const dataY = data.map((p) => p[1]);
    const updateOption: echarts.EChartsOption = {
      yAxis: {
        min: Math.min(...dataY),
        max: Math.max(...dataY),
      },
    };
    myChart.setOption(updateOption);
  }

  function updateXMinMax() {
    const dataX = data.map((p) => p[0]);
    const updateOption: echarts.EChartsOption = {
      xAxis: {
        min: Math.min(...dataX),
        max: Math.max(...dataX),
      },
    };
    myChart.setOption(updateOption);
  }

  function updateData() {
    const lastX = data[data.length - 1][0];
    const current: DataItem = [lastX + stepX, func(lastX + stepX)];
    data.shift();
    data.push(current);
    const updateOption: echarts.EChartsOption = {
      series: {
        data,
      },
    };
    myChart.setOption(updateOption);
  }

  function init() {
    myChart = echarts.init(chartRef.value);
    myChart.setOption(option);
    setInterval(function () {
      updateData();
      updateXMinMax();
      // updateYMinMax();
    }, 1000);
  }

  onMounted(function () {
    init();
  });
</script>

<template>
  <div style="text-align: center"><label>设备比例</label></div>
  <div style="width: 800px; height: 600px" ref="chartRef"></div>
</template>
