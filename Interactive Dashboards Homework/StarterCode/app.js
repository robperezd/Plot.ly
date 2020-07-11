//console.log("oki")

//function buildPlots(sample) {
d3.json("data/samples.json").then((samplesdata)=> {
    console.log(samplesdata);
    var ids = samplesdata.samples[0].otu_ids;
    var sampleValues =  samplesdata.samples[0].sample_values.slice(0,10).reverse();
    console.log(sampleValues)
    var labels =  samplesdata.samples[0].otu_labels.slice(0,10);
    console.log (labels)
// get only top 10 otu ids for the plot OTU and reversing it. 
   var OTU_top = ( samplesdata.samples[0].otu_ids.slice(0, 10)).reverse();
// get the otu id's to the desired form for the plot
       var OTU_id = OTU_top.map(d => "OTU " + d);
       console.log(`otu IDS: ${OTU_id}`) 
// get the top 10 labels for the plot
var labels =  samplesdata.samples[0].otu_labels.slice(0,10);
console.log(`otu_labels: ${labels}`)
var trace = {
    x: sampleValues,
    y: OTU_id,
    text: labels,
    marker: {
    color: 'light-blue'},
    type:"bar",
    orientation: "h",
};
// create data variable
var data = [trace];

// create layout variable to set plots layout
var layout = {
    title: "OTU Top 10",
    yaxis:{
        tickmode:"linear",
    },
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 30
    }
};

// create the bar plot
Plotly.newPlot("bar", data, layout);

//Buuble Chart
var trace1 = {
    x: samplesdata.samples[0].otu_ids,
    y: samplesdata.samples[0].sample_values,
    mode: "markers",
    marker: {
        size: samplesdata.samples[0].sample_values,
        color: samplesdata.samples[0].otu_ids
    },
    text:  samplesdata.samples[0].otu_labels

};

//set the layout for the bubble plot
var layout_2 = {
    xaxis:{title: "OTU ID"},
    height: 600,
    width: 1000
};

// creating data variable 
var data1 = [trace1];

// create the bubble plot
Plotly.newPlot("bubble", data1, layout_2); 


});


//};

//function getInfo(id) {

    d3.json("data/samples.json").then((data)=> {
        var metadata = data.metadata;
        console.log(metadata)
        var demographicInfo = d3.select("#sample-metadata");
        console.log(demographicInfo);
        demographicInfo.html("");




    })