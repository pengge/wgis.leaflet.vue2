---
title: LFeatureGroup
---

# LFeatureGroup

> Group together elements of the maps including: markers, geoJSON, polylines and polygon, tooltip and popup.

---

::: tip
This component is particularly useful to have a single tooltip / popup that is 'shared' across multiple markers
:::

## Demo

::: demo
<template>
<l-map style="height: 350px" :zoom="zoom" :center="center">
<l-tile-layer :url="url"></l-tile-layer>
<l-feature-group ref="features">
<l-popup > <span> Yay I was opened by {{caller}}</span></l-popup>
</l-feature-group>
<l-marker :lat-lng="markerLatLng" @click="openPopUp(markerLatLng, 'marker')"></l-marker>
<l-circle
:lat-lng="circle.center"
:radius="circle.radius"
:color="circle.color"
@click="openPopUp(circle.center, 'circle')"
/>
</l-map>
</template>

<script>
import {LMap, LTileLayer, LFeatureGroup, LPopup, LCircle, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LFeatureGroup,
    LPopup,
    LCircle,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482],
      caller: null,
      circle: {
        center: [47.413220, -1.0482],
        radius: 4500,
        color: 'red'
      }
    };
  },
  methods: {
    openPopUp (latLng, caller) {
      this.caller = caller;
      this.$refs.features.mapObject.openPopup(latLng);
    }
  }
}
</script>

:::

## Props

| Prop name   | Description                                          | Type    | Values | Default       |
| ----------- | ---------------------------------------------------- | ------- | ------ | ------------- |
| pane        |                                                      | string  | -      | 'overlayPane' |
| attribution |                                                      | string  | -      | null          |
| name        |                                                      | string  | -      | undefined     |
| layerType   |                                                      | string  | -      | undefined     |
| visible     |                                                      | boolean | -      | true          |
| options     | Leaflet options to pass to the component constructor | object  | -      | {}            |

## Events

| Event name     | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| update:visible | boolean | Triggers when the visible prop needs to be updated |
| ready          | object  | Triggers when the component is ready               |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
