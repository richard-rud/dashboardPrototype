
    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator stacked bar chart for dry matter, avoidable food waste//
/////////////////////////////////////////////////////////////////////////////////////////////////
var chart = c3.generate({
    size: {
        height: 700,
        width: 1000
    },
    bindto: '#stackedBar',
    data: {
        columns: [
            
            ['Frozen food',1.632,0.035,0.127,18.712],
            ['Fresh fruit and vegetables',1.484,0,3.396,9.85],
            ['Fresk bakery goods',15.05,0.443,13.81,0],
            ['Fresh finished food and sausages',0.952,0,2.728,0],
            ['Fresh fish',0.098,0.016,0.384,5.189],
            ['Fresh meat',0.643,0.072,0.947,0],
            ['Egg',0,0,0.459,7.347],
            ['Dairy',0.764,0.322,4.161,0],
            ['Dried food',12.613,0.171,2.692,75.967],

            /*
            ['Frozen food',1632,35,127,18712],
            ['Fresh fruit and vegetables',1484,0,3396,9850],
            ['Fresk bakery goods',15050,443,13810,0],
            ['Fresh finished food and sausages',952,0,2728,0],
            ['Fresh fish',98,16,384,5189],
            ['Fresh meat',643,72,947,0],
            ['Egg',0,0,459,7347],
            ['Dairy',764,322,4161,0],
            ['Dried food',12613,171,2692,75967],
            
        /*
            ['Frozen food',5.441,0.116,0.423,62.375],
            ['Fresh fruit and vegetables',10.6,0,24.258,70.359],
            ['Fresk bakery goods',24.275,0.714,22.275,0],
            ['Fresh finished food and sausages',1.38,0,3.954,0],
            ['Fresh fish',0.377,0.06,1.479,19.96],
            ['Fresh meat',2.474,0.275,3.644,0],
            ['Egg',0,0,0.967,15.469],
            ['Dairy',1.442,0.607,7.851,0],
            ['Dried food',14.334,0.194,3.06,86.327],
            */
        ],
        type: 'bar',
        groups: [
            ['Frozen food', 'Fresh fruit and vegetables','Fresk bakery goods','Fresh finished food and sausages','Fresh fish','Fresh meat','Egg','Dairy','Dried food']
        ],
        order: 'desc'
    },
    axis: {
        rotated: false,
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (kt dm/yr)'; }, //Determine unit the measuring unit

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
        pattern: ['#d9d9d9','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#8dd3c7']
    },
});



