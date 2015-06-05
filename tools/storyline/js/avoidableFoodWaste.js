
///////////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator stacked bar chart for dry matter, avoidable food waste//
/////////////////////////////////////////////////////////////////////////////////////////////////

var chart = c3.generate({
    size: {
        height: 400,
        width: 800
    },
    bindto: '#stackedBar',
    data: {
        columns: [
            ['Frozen food',5441,116,423,0],
            ['Fresh fruit and vegetables',10600,0,24258,62375],
            ['Fresk bakery goods',24275,714,22275,70359],
            ['Fresh finished food and sausages',1380,0,3954,0],
            ['Fresh fish',377,60,1479,0],
            ['Fresh meat',2474,275,3644,19960],
            ['Egg',0,0,967,0],
            ['Dairy',1442,607,7851,15469],
            ['Dried food',14334,194,3060,0],
            ['Other',0,0,0,86327],
        ],
        type: 'bar',
        groups: [
            ['Frozen food', 'Fresh fruit and vegetables','Fresk bakery goods','Fresh finished food and sausages','Fresh fish','Fresh meat','Egg','Dairy','Dried food','Other']
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
            show: true
        }
    },
    color: {
        //pattern: ['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525','#000000']
        pattern: ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a']
    },
});



