var unitedStates = [];
var northeast = [];
var midwest = [];
var south = [];
var west = [];
var year = [];


$(document).ready(function() { //runs the function

  /* PIE CHART THEME */
  Highcharts.theme = {
     /* LINE/BAR/COLUMN/SLICE COLORS - only used for slices for Plex, if we add multiple data sets in future releases, these colors will work with the rendering of other sets */
    //  colors: ['#DFE9F3', '#B7D6EB', '#8CB8D9', '#6F93B5', '#557193', '#335682', '#203B66'],

     /* CHART TITLE */
     title: {
  style: {
     color: '#444444',
     font: '24px "Oswald", Helvetica, Arial, sans-serif'
  }
     },

     /* CHART SUBTITLE */
     subtitle: {
  style: {
     color: '#666666',
     font: '12px "Oswald", Helvetica, Arial, sans-serif'
  }
     },

     /* LINE CHART COLORS */
     plotOptions: {
   pie: {
      cursor: 'pointer',
      borderColor: '#ffffff',
      borderWidth: 1,
      shadow: false
   }
     }
  };

  // Apply the theme
  var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

    $.ajax({ //loads in xml file
        type: "GET",
        url: "datasets/avqsqft/avgsqft.xml",
        dataType: "xml",
        success: parseXML
    });

    function parseXML(xml) {
        $(xml).find('Row').each(function() { //starts loop to find all people, etc
            var $row = $(this);
            year.push(parseInt($row.find('Year').text()));
            unitedStates.push(parseInt($row.find('UnitedStates').text()));
            northeast.push(parseInt($row.find('Northeast').text()));
            midwest.push(parseInt($row.find('Midwest').text()));
            south.push(parseInt($row.find('South').text()));
            west.push(parseInt($row.find('West').text()));
        });

        console.log(year);
        buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
    }

    function buildChart(xml) { //tells how to build chart, but need to add buildChart blah blah in document ready above
        var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'avgsqft-linechart',
            type: 'line'
            },
        title: {
            text: ''
            },
        xAxis: {
            categories: year
            },
        yAxis: {
            title: {
            text: 'Square feet'
            }
        },
	plotOptions: {
	    marker: {
                    enabled: false
                }
	    },
        series: [
	    {
            name: 'Northeast',
            data: northeast
            }, {
            name: 'Midwest',
            data: midwest
            }, {
            name: 'South',
            data: south
            }, {
            name: 'West',
            data: west
            }, {
	    name: 'United States',
            data: unitedStates
            }
	    ]
        });
    }
});
