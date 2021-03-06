---
title: LPolygon
---

# LPolygon

> Easily draw a polygon on the map

---

## Demo

::: demo
<template>
<l-map style="height: 350px" :zoom="zoom" :center="center">
<l-tile-layer :url="url"></l-tile-layer>
<l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color"></l-polygon>
</l-map>
</template>

<script>
import {LMap, LTileLayer, LPolygon} from "wgis.leaflet.vue2";

export default {
  components: {
    LMap,
    LTileLayer,
    LPolygon
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      polygon: {
        latlngs: [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],
        color: 'green'
      },
    };
  }
}
</script>

:::

## Props

| Prop name           | Description                                          | Type    | Values | Default       |
| ------------------- | ---------------------------------------------------- | ------- | ------ | ------------- |
| pane                |                                                      | string  | -      | 'overlayPane' |
| attribution         |                                                      | string  | -      | null          |
| name                |                                                      | string  | -      | undefined     |
| layerType           |                                                      | string  | -      | undefined     |
| visible             |                                                      | boolean | -      | true          |
| interactive         |                                                      | boolean | -      | true          |
| bubblingMouseEvents |                                                      | boolean | -      | true          |
| lStyle              |                                                      | object  | -      | null          |
| stroke              |                                                      | boolean | -      | true          |
| color               |                                                      | string  | -      | '#3388ff'     |
| weight              |                                                      | number  | -      | 3             |
| opacity             |                                                      | number  | -      | 1.0           |
| lineCap             |                                                      | string  | -      | 'round'       |
| lineJoin            |                                                      | string  | -      | 'round'       |
| dashArray           |                                                      | string  | -      | null          |
| dashOffset          |                                                      | string  | -      | null          |
| fill                |                                                      | boolean | -      | true          |
| fillColor           |                                                      | string  | -      | '#3388ff'     |
| fillOpacity         |                                                      | number  | -      | 0.2           |
| fillRule            |                                                      | string  | -      | 'evenodd'     |
| className           |                                                      | string  | -      | null          |
| smoothFactor        |                                                      | number  | -      | 1.0           |
| noClip              |                                                      | boolean | -      | false         |
| options             | Leaflet options to pass to the component constructor | object  | -      | {}            |
| latLngs             |                                                      | array   | -      | []            |

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
