<script setup lang="ts">
  import { CSSProperties, nextTick, onMounted, ref } from 'vue';
  import * as echarts from 'echarts';
  import { CountTo } from '@/components/CountTo';
  import { Card, message } from 'ant-design-vue';

  const chartRef = ref();
  let myChart: echarts.ECharts;

  type DataItem = [number, number];

  const data: DataItem[] = generateInitData();

  function func(x: number) {
    return 0.2 * Math.sin(x) + 40 + 10 * (Math.random() - 0.5);
  }

  const stepX = 10;

  // const maxDataSize = 800;
  const maxDataSize = 20;
  function generateInitData(): DataItem[] {
    let data: DataItem[] = [];
    // const initDataSize = 800;
    const initDataSize = 2;
    for (let i = 0; i <= initDataSize; i += stepX) {
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
      name: 'CO2/0.001%',
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

  function updateYMinMax() {
    const dataY = data.map((p) => p[1]);
    const updateOption: echarts.EChartsOption = {
      yAxis: {
        min: Math.floor(Math.min(...dataY)),
        max: Math.ceil(Math.max(...dataY)),
      },
    };
    myChart.setOption(updateOption);
  }

  function updateXMinMax() {
    const dataX = data.map((p) => p[0]);
    const updateOption: echarts.EChartsOption = {
      xAxis: {
        min: Math.floor(Math.min(...dataX)),
        max: Math.ceil(Math.max(...dataX)),
      },
    };
    myChart.setOption(updateOption);
  }

  function updateData() {
    const lastX = data[data.length - 1][0];
    srcVal.value = curVal.value;
    curVal.value = func(lastX + stepX);
    const current: DataItem = [lastX + stepX, curVal.value];
    data.push(current);
    if (data.length > maxDataSize) {
      data.shift();
    }
    const updateOption: echarts.EChartsOption = {
      series: {
        data,
      },
    };
    myChart.setOption(updateOption);
  }

  const datetime = ref<string>('');
  function updateDateTime() {
    datetime.value = new Date().toString();
  }

  let updating = false;

  function init() {
    myChart = echarts.init(chartRef.value);
    myChart.setOption(option);
    myChart.resize();
    if (!updating) {
      updating = true;
      setInterval(function () {
        updateData();
        updateXMinMax();
        updateYMinMax();
        updateDateTime();
        updateLoss();
      }, 500);
    }
  }

  const loss = ref<number>(10);

  function updateLoss() {
    loss.value = 0.2 * Math.sin(Math.random() * 200) + 5.2 + 10 * (Math.random() - 0.5);
  }

  const srcVal = ref(0);
  const curVal = ref(0);

  onMounted(function () {
    // init();
  });

  const retry = ref<number>(0);
  const contentVisible = ref<boolean>(false);

  function handleRetry() {
    const updatebleKey = 'anyKey';
    retry.value++;
    const style: CSSProperties = {
      marginTop: '50vh',
      fontSize: 'larger',
      fontWeight: 'bold',
    };
    message.loading({
      content: '等待响应',
      key: updatebleKey,
      duration: 5,
      style,
    });
    if (retry.value > 2) {
      contentVisible.value = true;
      nextTick(function () {
        setTimeout(function () {
          message.success({ content: '响应成功', key: updatebleKey, duration: 2, style });
          init();
        }, 300);
      });
    } else {
      setTimeout(function () {
        message.error({ content: '超时未响应', key: updatebleKey, duration: 2, style });
      }, 5000);
    }
  }
</script>

<template>
  <div>
    <Card>当前设备ID : <span style="color: orange">DEVICE#420000199204153244</span></Card>
    <a-button-group>
      <a-button style="margin-top: 10px; margin-bottom: 10px" @click="handleRetry">重试</a-button>
      <a-button style="margin-top: 10px; margin-bottom: 10px">选择设备</a-button>
    </a-button-group>
  </div>
  <div v-show="contentVisible" style="width: 100%; height: 80%">
    <Card style="font-weight: bold; text-align: center">
      <CountTo
        prefix="CO2 "
        suffix="×0.001%"
        :color="'#409EFF'"
        :startVal="srcVal"
        :endVal="curVal"
        :duration="4000"
      />
    </Card>
    <Card>
      <span>{{ datetime }}</span>
    </Card>
    <Card>
      <span>丢包率: {{ loss.toFixed(3) }}%</span>
    </Card>
    <!-- <div style="text-align: center"><label>设备比例</label></div> -->
    <div style="width: 80%; height: 80%; margin: 10px 10%" ref="chartRef"></div>
  </div>
</template>
<style scoped>
  * {
    text-align: center;
  }
</style>
