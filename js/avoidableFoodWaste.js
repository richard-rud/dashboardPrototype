
    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator stacked bar chart for dry matter, avoidable food waste//
/////////////////////////////////////////////////////////////////////////////////////////////////
var chart = c3.generate({
    size: {
        height: 600,
        width: 1000
    },
    bindto: '#stackedBar',
    data: {
        columns: [
            ['Frozen food',5441,116,423,62375],
            ['Fresh fruit and vegetables',10600,0,24258,70359],
            ['Fresk bakery goods',24275,714,22275,0],
            ['Fresh finished food and sausages',1380,0,3954,0],
            ['Fresh fish',377,60,1479,19960],
            ['Fresh meat',2474,275,3644,0],
            ['Egg',0,0,967,15469],
            ['Dairy',1442,607,7851,0],
            ['Dried food',14334,194,3060,86327],
        ],
        type: 'bar',
        groups: [
            ['Frozen food', 'Fresh fruit and vegetables','Fresk bakery goods','Fresh finished food and sausages','Fresh fish','Fresh meat','Egg','Dairy','Dried food']
        ],
        order: 'desc'
    },
    axis: {
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (ton)'; }, //Determine unit of measure 

            }
        },
        x: {
            type: 'category',
            categories: ['Food Processing', 'Wholesale', 'Retail', 'HC']
            
        },
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    },
    color: {
        //pattern: ['#a6cee3', '#1f78b4', '#b2df8a','#33a02c','#fb9a99', '#e31a1c', '#fdbf6f','#ff7f00','#cab2d6']
        //pattern: ['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704']
        pattern: ['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#006837','#004529']
    },
});



