ThreeGeoJSON
=======================

**Updated for Three.js r170**

This project aims to be a simple way to render geojson data in 3D with three.js.


### Instructions
Enter the following code to render a geoJSON file in 3D:
```
drawThreeGeo(json, radius, shape, {options});   
```
You can enter the following parameters: 

| Parameter | Description |
| ------------- | ----------- |
| json | The variable that contains the geoJSON that you want to render. |
| radius | The radius of the sphere that you want to render. |
| shape | The 3D shape to use when rendering the geoJSON. Either 'sphere' or 'plane'. |
| options | The threeJS options that you want to use to style the line or particle material. |
| container | Optional. THREE.Object3D instance which will be used as a container for threejson shapes. |

For example, you might enter:
```
drawThreeGeo(json, 10, 'sphere', {
    color: 'green'
}); 
```