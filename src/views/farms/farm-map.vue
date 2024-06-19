<script lang="ts" setup>
  // mapboxgl地图
  import * as G from 'geojson';
  import * as L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import { onMounted, reactive, ref } from 'vue';
  import { RowObject, deviceTableData } from '../devices/data';

  const mapZoom = ref(18);
  // 116.33557418204919
  // 39.94932180771278
  const initX = 39.9492349479382;
  // const initY = -243.66676926612857;
  const initY = 116.33557418204919;
  const mapCenter = ref<L.LatLng>(new L.LatLng(initX, initY));

  const mapRef = ref<HTMLDivElement>();
  // const markers: L.Marker[] = [];

  const props = defineProps({
    debugPanel: {
      type: Boolean,
      default: false,
    },
  });

  const currentFocusedInfo = reactive({
    id: '',
    name: '',
    latlng: {
      x: 0,
      y: 0,
    },
  });

  // 每个Farm的附加属性
  type FarmGeoJsonProperties = {
    id?: string;
    name?: string;
    density?: number;
    // Fields集合数据
    fieldsGeoJsonData?: G.FeatureCollection<G.Geometry, FieldGeoJsonProperties>;
    // Fields的GeoJson对象
    fieldsGeoJson?: L.GeoJSON<FieldGeoJsonProperties, G.Geometry>;
  };

  // 每个Field的附加属性
  type FieldGeoJsonProperties = {
    id?: string;
    name?: string;
    // Devices集合数据
    devicesGeoJsonData?: G.FeatureCollection<G.Geometry, DeviceGeoJsonProperties>;
    // Devices的GeoJson对象
    devicesGeoJson?: L.GeoJSON<DeviceGeoJsonProperties, G.Geometry>;
  };

  type DeviceGeoJsonProperties = {
    id?: string;
    name?: string;
    type?: 'AP' | 'L' | 'TH' | 'CO2' | 'PH';
  };

  let farmsGeoJson: L.GeoJSON<FarmGeoJsonProperties, G.Geometry>;

  let map: L.Map;

  let prevFocusFarmProperties: FarmGeoJsonProperties;
  let prevFocusFieldProperties: FieldGeoJsonProperties;

  const siYuanCords = [
    [116.33438471444038, 39.949661467594694],
    [116.33460285407102, 39.948902309578074],
    [116.33484631105534, 39.94894462198744],
    [116.3348659690725, 39.94900606187858],
    [116.33495745446135, 39.9490512723286],
    [116.33505574454722, 39.94903446331861],
    [116.33512379152984, 39.9489753419403],
    [116.33532717640321, 39.94900664149989],
    [116.33508890542743, 39.94978844081831],
    [116.33484835754638, 39.94974501378957],
    [116.3348698422007, 39.94967001050304],
    [116.33470315273087, 39.949634273949215],
    [116.33467787337793, 39.949712104009535],
    [116.33438471444038, 39.949661467594694],
  ];

  const siYuanDeviceFeatures: G.Feature<G.Geometry, DeviceGeoJsonProperties>[] =
    deviceTableData.map(function (deviceData: RowObject) {
      return {
        type: 'Feature',
        properties: {
          id: deviceData.id,
          name: deviceData.type,
        },
        geometry: {
          coordinates: deviceData.coord,
          type: 'Point',
        },
      };
    });

  // https://geojson.io/
  const farmsGeoJsonData: G.FeatureCollection<G.Geometry, FarmGeoJsonProperties> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: '56',
        properties: {
          id: 'FARM#4231425',
          name: 'Wyoming农业基地',
          density: 5.851,
          fieldsGeoJsonData: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  id: 'FILED#241254',
                  name: '测试农田1',
                  devicesGeoJsonData: {
                    type: 'FeatureCollection',
                    features: [
                      {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                          coordinates: [-107.9916929678275, 42.654421107865886],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                          coordinates: [-106.62512977786477, 42.71799896325621],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                          coordinates: [-106.33105921799935, 42.37390575840669],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                          coordinates: [-106.46079622970448, 42.015066174511134],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                          coordinates: [-107.0662356176629, 42.09213186871858],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                          coordinates: [-108.05223690662346, 42.09213186871858],
                          type: 'Point',
                        },
                      },
                    ],
                  },
                },
                geometry: {
                  coordinates: [
                    [
                      [-108.47811833593188, 42.88331486188966],
                      [-108.54499106320031, 41.60033412232602],
                      [-105.77534560883826, 41.508589436648776],
                      [-105.76420015429362, 42.87106354674208],
                      [-108.47811833593188, 42.88331486188966],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {
                  id: 'FILED#241254',
                  name: '测试农田1',
                  devicesGeoJsonData: {
                    type: 'FeatureCollection',
                    features: [
                      {
                        type: 'Feature',
                        properties: {
                          type: 'AP',
                          id: 'AP#9014932',
                        },
                        geometry: {
                          coordinates: [-106.22851783967842, 43.50545297593516],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'PH',
                          id: 'PH#7051245',
                        },
                        geometry: {
                          coordinates: [-105.56847809263827, 43.44783360354003],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'CO2',
                          id: 'CO2#557190',
                        },
                        geometry: {
                          coordinates: [-104.52631007099681, 43.46224359746998],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'AP',
                          id: 'AP#4241221',
                        },
                        geometry: {
                          coordinates: [-104.5163846612668, 42.98127084559687],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'L',
                          id: 'L#42578543',
                        },
                        geometry: {
                          coordinates: [-104.57097441478128, 42.569644898471694],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'AP',
                          id: 'AP#0826842',
                        },
                        geometry: {
                          coordinates: [-104.61067605370091, 42.05218882301065],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'CO2',
                          id: 'CO2#654932',
                        },
                        geometry: {
                          coordinates: [-105.42455965155446, 42.08902795517483],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'L',
                          id: 'L#78543900',
                        },
                        geometry: {
                          coordinates: [-105.508925634259, 42.45990418899413],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'TH',
                          id: 'LH#0878932',
                        },
                        geometry: {
                          coordinates: [-105.43944776614929, 42.85770658356773],
                          type: 'Point',
                        },
                        id: 8,
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'AP',
                          id: 'AP#7643954',
                        },
                        geometry: {
                          coordinates: [-106.07963669372938, 43.111833460710955],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'AP',
                          id: 'AP#5367765',
                        },
                        geometry: {
                          coordinates: [-106.47169037806113, 43.22403966910451],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'PH',
                          id: 'PH#7546541',
                        },
                        geometry: {
                          coordinates: [-105.71735923858728, 43.267418989427284],
                          type: 'Point',
                        },
                        id: 11,
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'CO2',
                          id: 'CO2#213478',
                        },
                        geometry: {
                          coordinates: [-104.83896047748925, 43.19872080042927],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'L',
                          id: 'L#75849307',
                        },
                        geometry: {
                          coordinates: [-105.11190924506204, 42.613487219841886],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'AP',
                          id: 'AP#0246456',
                        },
                        geometry: {
                          coordinates: [-104.92332646019337, 42.360972814682924],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'L',
                          id: 'L#76532329',
                        },
                        geometry: {
                          coordinates: [-104.81414695316441, 42.88316654069234],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'PH',
                          id: 'PH#4664546',
                        },
                        geometry: {
                          coordinates: [-105.32034284939031, 43.24211814001046],
                          type: 'Point',
                        },
                        id: 16,
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'AP',
                          id: 'AP#7546283',
                        },
                        geometry: {
                          coordinates: [-104.92332646019337, 42.10007552555746],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'CO2',
                          id: 'CO2#216898',
                        },
                        geometry: {
                          coordinates: [-105.24093957155101, 42.37563916034267],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'L',
                          id: 'L#158597965',
                        },
                        geometry: {
                          coordinates: [-105.72728464831731, 43.07559394340248],
                          type: 'Point',
                        },
                        id: 19,
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'PH',
                          id: 'PH#7549632',
                        },
                        geometry: {
                          coordinates: [-106.03497234994495, 43.393765545393364],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'CO2',
                          id: 'CO2#437456',
                        },
                        geometry: {
                          coordinates: [-106.5858325899553, 43.541437181990375],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'L',
                          id: 'L#329654175',
                        },
                        geometry: {
                          coordinates: [-106.57590718022571, 43.03207821685504],
                          type: 'Point',
                        },
                      },
                      {
                        type: 'Feature',
                        properties: {
                          type: 'CO2',
                          id: 'CO2#436347',
                        },
                        geometry: {
                          coordinates: [-106.35258546130217, 43.05383993983108],
                          type: 'Point',
                        },
                      },
                    ],
                  },
                },
                geometry: {
                  coordinates: [
                    [
                      [-106.76778086589955, 42.947638403103554],
                      [-105.67106626304853, 42.950667647409375],
                      [-105.67934335439075, 41.92137992219557],
                      [-104.30948473724469, 41.89982093103532],
                      [-104.29293055456023, 43.667385387945274],
                      [-106.78433504858403, 43.70928199079256],
                      [-106.76778086589955, 42.947638403103554],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
            ],
          },
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-109.080842, 45.002073],
              [-105.91517, 45.002073],
              [-104.058488, 44.996596],
              [-104.053011, 43.002989],
              [-104.053011, 41.003906],
              [-105.728954, 40.998429],
              [-107.919731, 41.003906],
              [-109.04798, 40.998429],
              [-111.047063, 40.998429],
              [-111.047063, 42.000709],
              [-111.047063, 44.476286],
              [-111.05254, 45.002073],
              [-109.080842, 45.002073],
            ],
          ],
        },
      },
      {
        type: 'Feature',
        id: '11',
        properties: {
          id: 'FARM#4231425',
          name: '思源大草坪',
          density: 5.851,
          fieldsGeoJsonData: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  id: 'FILED#241254',
                  name: '测试农田1',
                  devicesGeoJsonData: {
                    type: 'FeatureCollection',
                    features: siYuanDeviceFeatures,
                  },
                },
                geometry: {
                  coordinates: [
                    [
                      [116.33489844810873, 39.94962044169341],
                      [116.33493755968163, 39.9494573756983],
                      [116.33513071275053, 39.94949004895659],
                      [116.33508056749531, 39.94966140225836],
                      [116.33489844810873, 39.94962044169341],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
            ],
          },
        },
        geometry: {
          type: 'Polygon',
          coordinates: [siYuanCords],
        },
      },
    ],
  };

  function valueOrDefault<T>(value: T | undefined | null, defaultValue: T) {
    return value ? value : defaultValue;
  }

  function updateMapData() {
    mapZoom.value = map.getZoom();
    mapCenter.value = map.getCenter();
    console.log({ center: mapCenter.value, zoom: mapZoom.value });
  }

  onMounted(function () {
    initMap();
  });

  function initMap() {
    console.log(siYuanCords);

    const mapDiv = mapRef.value!;

    map = L.map(mapDiv).setView(mapCenter.value, mapZoom.value);

    const popup: L.Popup = L.popup();

    map.on('click', function (e: L.LeafletMouseEvent) {
      updateMapData();
      popup.setLatLng(e.latlng).setContent(e.latlng.toString());
    });

    map.on('zoom', function () {
      updateMapData();
    });

    map.on('drag', function () {
      updateMapData();
    });

    // 网络地图图层
    // const tileLayerUrl = 'https://geojson.io/#map={z}/{x}/{y}';
    const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(tileLayerUrl).addTo(map);

    // console.log({ farmsGeoJsonData: JSON.stringify(farmsGeoJsonData) });

    // 初始化 FARM GJ
    farmsGeoJson = L.geoJSON(farmsGeoJsonData, {
      style: {
        fillColor: 'yellow', // 填充颜色
        fillOpacity: 0.5, // 填充透明度
        color: 'red', // 边框颜色
        weight: 2, // 边框宽度
      },
      onEachFeature: function (
        farmFeature: G.Feature<G.Geometry, FarmGeoJsonProperties>,
        layer: L.Layer,
      ) {
        // 添加事件响应
        layer.on({
          mouseover: function (e: L.LeafletMouseEvent) {
            const layer = e.target;
            layer.setStyle({
              weight: 5,
              color: '#666',
              dashArray: '',
              fillOpacity: 0.7,
            });
          },
          mouseout: function (e: L.LeafletMouseEvent) {
            farmsGeoJson.resetStyle(e.target);
          },
          click: function (e: L.LeafletMouseEvent) {
            map.fitBounds(e.target.getBounds());
            setTimeout(function () {
              // Popup Farm信息
              const currFocusFarmProperties: FarmGeoJsonProperties = farmFeature.properties;
              const { name, id } = currFocusFarmProperties;
              currentFocusedInfo.id = id ? id : 'None ID';
              currentFocusedInfo.name = name ? name : 'None Name';
              currentFocusedInfo.latlng.x = mapCenter.value.lat;
              currentFocusedInfo.latlng.y = mapCenter.value.lng;
              const latlng: L.LatLng = e.latlng;
              popup
                .setContent(`<h1>${name}</h1><br>${id}<br>${latlng.toString()}<br>`)
                .setLatLng(map.getCenter())
                .openOn(map);
              // 隐藏前一个Field的Devices
              prevFocusFieldProperties?.devicesGeoJson?.remove();
              // 隐藏前一个Farm的Fields
              prevFocusFarmProperties?.fieldsGeoJson?.remove();
              // 展示当前Farm的Fields
              currFocusFarmProperties?.fieldsGeoJson?.addTo(map);
              prevFocusFieldProperties?.devicesGeoJson?.remove();
              prevFocusFarmProperties = currFocusFarmProperties;
            }, 200);
          },
        });

        // Field
        const farmProperties = farmFeature.properties;
        const fieldsGeoJsonData = farmProperties.fieldsGeoJsonData;
        if (fieldsGeoJsonData) {
          // 存在农田信息
          farmProperties.fieldsGeoJson = L.geoJSON(fieldsGeoJsonData, {
            style: {
              fillColor: 'green',
              fillOpacity: 0.5,
              color: 'blue',
              weight: 2,
            },
            onEachFeature(
              fieldFeature: G.Feature<G.Geometry, FieldGeoJsonProperties>,
              layer: L.Layer,
            ) {
              // 绑定农田的事件响应
              layer.on({
                mouseover(e: L.LeafletMouseEvent) {
                  const layer = e.target;
                  layer.setStyle({
                    weight: 5,
                    color: '#943',
                    dashArray: '',
                    fillOpacity: 0.7,
                    fillColor: 'white',
                  });
                },
                mouseout(e: L.LeafletMouseEvent) {
                  const layer = e.target;
                  layer.setStyle({
                    fillColor: 'green',
                    fillOpacity: 0.5,
                    color: 'blue',
                    weight: 2,
                  });
                },
                click(e: L.LeafletMouseEvent) {
                  map.fitBounds(e.target.getBounds());
                  setTimeout(function () {
                    // Popup Farm信息
                    const currFocusFieldProperties: FieldGeoJsonProperties =
                      fieldFeature.properties;
                    const { name, id } = currFocusFieldProperties;
                    currentFocusedInfo.id = id ? id : 'None ID';
                    currentFocusedInfo.name = name ? name : 'None Name';
                    currentFocusedInfo.latlng.x = mapCenter.value.lat;
                    currentFocusedInfo.latlng.y = mapCenter.value.lng;
                    const latlng: L.LatLng = e.latlng;
                    popup
                      .setContent(`<h1>${name}</h1><br>${id}<br>${latlng.toString()}<br>`)
                      .setLatLng(map.getCenter())
                      .openOn(map);

                    // 隐藏前一个Field的Devices
                    prevFocusFieldProperties?.devicesGeoJson?.remove();
                    // 展示当前Field的Devices
                    currFocusFieldProperties?.devicesGeoJson?.addTo(map);

                    prevFocusFieldProperties = currFocusFieldProperties;
                  }, 200);
                },
              });

              // 初始化设备
              const fieldProperties = fieldFeature.properties;
              const devicesGeoJsonData = fieldProperties.devicesGeoJsonData;
              if (devicesGeoJsonData) {
                // 存在设备信息
                // 教程 https://leafletjs.com/examples/geojson/
                fieldProperties.devicesGeoJson = L.geoJSON(devicesGeoJsonData, {
                  pointToLayer(
                    deviceFeature: G.Feature<G.Geometry, DeviceGeoJsonProperties>,
                    latlng: L.LatLng,
                  ) {
                    return L.marker(latlng, {});
                  },
                  onEachFeature(
                    deviceFeature: G.Feature<G.Geometry, DeviceGeoJsonProperties>,
                    layer: L.Layer,
                  ) {
                    layer.on({
                      click(e: L.LeafletMouseEvent) {
                        const properties = deviceFeature.properties;
                        popup
                          .setContent(
                            `ID: ${valueOrDefault(properties.id, 'No ID')}<br>Name: ${valueOrDefault(properties.name, 'No Name')}<br>Type: ${valueOrDefault(properties.type, 'No Type')}`,
                          )
                          .setLatLng(e.latlng)
                          .openOn(map);
                      },
                    });
                  },
                });
              }
            },
          });
        }
      },
    }).addTo(map);
  }
</script>

<template>
  <h1>TestMap</h1>
  <div v-if="props.debugPanel">
    <el-descriptions title="Device Info">
      <el-descriptions-item label="Name">{{ currentFocusedInfo.name }}</el-descriptions-item>
      <el-descriptions-item label="ID">{{ currentFocusedInfo.id }}</el-descriptions-item>
      <el-descriptions-item label="LatLng">
        ({{ currentFocusedInfo.latlng.x.toFixed(2) }},{{ currentFocusedInfo.latlng.y.toFixed(2) }})
      </el-descriptions-item>
    </el-descriptions>
    <div>{{ mapZoom }}</div>
    <div>
      <el-button-group>
        <el-button @click="farmsGeoJson.remove()">隐藏全部农业基地</el-button>
        <el-button @click="farmsGeoJson.addTo(map)">显示全部农业基地</el-button>
      </el-button-group>
    </div>
    <div>当前位置 ({{ mapCenter.lat.toFixed(2) }},{{ mapCenter.lng.toFixed(2) }})</div>
    <div>当前位置 ({{ mapCenter.lat }},{{ mapCenter.lng }})</div>
  </div>
  <div id="map" ref="mapRef"></div>
</template>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
