
    //////////////////////////////////////////////////////////////////////////////////////////////
//The following shows the chart generator stacked bar chart for dry matter, avoidable food waste//
/////////////////////////////////////////////////////////////////////////////////////////////////
var chart = c3.generate({
    size: {
        height: 400,
        width: 700
    },
    bindto: '#stackedBarPEuse',
    data: {
        columns: [
            ['PE for fertilizer production (natural gas and electricity)',518115862559],
            ['Inputs to plants',0],
            ['PE for plant production',960292716847],
            ['PE for animal husbandry',0],
            ['PE for feed production',2953200000000],
            ['PE Meat processing',2324400000000],
            ['PE Fruit and vegetable processing',870000000000],
            ['PE animal and vegetable fat production',1064400000000],
            ['PE Dairy product manufacturing',2232000000000],
            ['PE Starch product manufacturing',438000000000],
            ['PE Bakery product manufacturing',1347600000000],
            ['PE Beverage and other food products production',1964400000000],
            ['PE Biogas',7134041349],
            ['Losses biogas production',1786633951],
            ['Waste for incineration/construction/landfill',3854702619822],
            ['Exported organic waste',2075645525000],
            ['Exported sewage sludge from waste water treatment',506504166666],
        ],
        type: 'bar',
        groups: [
            ['PE for fertilizer production (natural gas and electricity)','Inputs to plants','PE for plant production','PE for animal husbandry','PE for feed production','PE Meat processing','PE Fruit and vegetable processing','PE animal and vegetable fat production','PE Dairy product manufacturing','PE Starch product manufacturing','PE Bakery product manufacturing','PE Beverage and other food products production','PE Biogas','Losses biogas production','Waste for incineration/construction/landfill','Exported organic waste','Exported sewage sludge from waste water treatment']
        ],
        order: 'none'
    },
    grid: {
        y: {
            show: true
        }
    },
    axis: {
        y: {
            label: 'Amount',
            tick: {
                format: function(d) { return d + ' (kj/yr)'; }, //Determine unit of measure 

            }
        },
        x: {
            type: 'category',
            categories: ['PE and losses']
            
        },
    },
    color: {
        pattern: ['#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#004529', '#ffffe5', '#ffffe5', '#ffffe5', '#ffffe5', '#ffffe5', '#ffffe5', '#ffffe5']
    }
});
