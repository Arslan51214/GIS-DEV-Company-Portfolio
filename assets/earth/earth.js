window.onload = function () {
  const earthAnimation = document.getElementById("earth-animation");
  const chartDiv = document.getElementById("chartdiv");

  // Make the animation container visible with a fade-in effect
  earthAnimation.style.display = "block";
  setTimeout(() => {
    chartDiv.style.opacity = "1";
  }, 100);

  // Initialize the amCharts Earth animation
  am4core.useTheme(am4themes_animated);

  var chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.geodata = am4geodata_worldLow;
  chart.projection = new am4maps.projections.Orthographic();
  chart.panBehavior = "rotateLongLat";
  chart.deltaLatitude = -20;
  chart.padding(20, 20, 20, 20);

  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;

  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}";
  polygonTemplate.fill = am4core.color("#FF6633");
  polygonTemplate.stroke = am4core.color("#000033");
  polygonTemplate.strokeWidth = 0.5;
  polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  polygonTemplate.urlTarget = "_blank";

  var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
  graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
  graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
  graticuleSeries.fitExtent = false;

  chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
  chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#ffffff");

  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

  let animation;
  setTimeout(function () {
    animation = chart.animate({ property: "deltaLongitude", to: 100000 }, 20000000);
  }, 3000);

  chart.seriesContainer.events.on("down", function () {
    // animation.stop();
  });
};
