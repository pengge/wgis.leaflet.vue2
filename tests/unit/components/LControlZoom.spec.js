import { getWrapperWithMap, see } from '@/tests/test-helpers';
import LControlZoom from '@/components/LControlZoom.vue';

describe('component: LControlZoom.vue', () => {
  test('LControlZoom.vue has a mapObject', () => {
    const { wrapper } = getWrapperWithMap(LControlZoom);

    expect(wrapper.vm.mapObject).toBeDefined();
  });

  // Leaflet Control options

  test('LControlZoom.vue accepts and uses the Leaflet position option', () => {
    const { wrapper } = getWrapperWithMap(LControlZoom, { position: 'bottomleft' });

    expect(wrapper.vm.mapObject.getPosition()).toBe('bottomleft');
  });

  // Leaflet Control.Zoom options

  test('LControlZoom.vue includes "zoomInText" in rendered html', async () => {
    const { mapWrapper } = getWrapperWithMap(LControlZoom, { zoomInText: 'BIGGER' });

    see(mapWrapper, 'BIGGER');
  });

  test('LControlZoom.vue includes "zoomInTitle" in rendered html', () => {
    const { mapWrapper } = getWrapperWithMap(LControlZoom, { zoomInTitle: 'zoom in more' });

    see(mapWrapper, 'zoom in more');
  });

  test('LControlZoom.vue includes "zoomOutText" in rendered html', () => {
    const { mapWrapper } = getWrapperWithMap(LControlZoom, { zoomOutText: 'smaller' });

    see(mapWrapper, 'smaller');
  });

  test('LControlZoom.vue includes "zoomOutTitle" in rendered html', () => {
    const { mapWrapper } = getWrapperWithMap(LControlZoom, { zoomOutTitle: 'zoom out a bit' });

    see(mapWrapper, 'zoom out a bit');
  });

  // Leaflet Control set* methods

  test('LControlZoom.vue updates the mapObject when the "position" prop is set', async () => {
    const { wrapper } = getWrapperWithMap(LControlZoom, { position: 'bottomleft' });
    wrapper.setProps({ position: 'topright' });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.mapObject.getPosition()).toBe('topright');
  });
});
