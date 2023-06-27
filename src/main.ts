import './style.css'
import WebMap from "@arcgis/core/WebMap"
import MapView from "@arcgis/core/views/MapView"
import Editor from "@arcgis/core/widgets/Editor"

const webmap = new WebMap({
  portalItem: {
    id: "f1f5dbb40369490bb2a6a4b11f8e78a6"
  }
});

const view = new MapView({
  container: "viewDiv",
  map: webmap
});

const editor = new Editor({ view })
view.ui.add(editor, "top-right");
